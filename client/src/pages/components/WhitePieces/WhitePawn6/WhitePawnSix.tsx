import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { ThreeEvent, useFrame, useThree } from '@react-three/fiber';
import { Material, } from 'three';
import io from 'socket.io-client';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler';
import { BufferGeometry } from 'three';

type WhitePawnSixProps = {
  material: Material | Material[];
  position: [number, number, number];
  geometry: THREE.BufferGeometry;
  actions: any;
};

function FragmentedMesh({ mesh }: { mesh: THREE.Mesh }) {
  const { scene } = useThree()

  // Sample points on the surface of the mesh
  const sampler = new MeshSurfaceSampler(mesh).build()
  const points = sampler.sample(50)

  // Create new meshes for each fragment
  points.forEach((point) => {
    const geometry = new BufferGeometry()
    const material = mesh.material.clone()
    const fragment = new THREE.Mesh(geometry, material)
    fragment.position.copy(point)
    scene.add(fragment)
  })

  // Remove the original mesh from the scene
  scene.remove(mesh)

  return null
}

const WhitePawnSix = ({ material, position, geometry, actions, ...props }: WhitePawnSixProps & any) => {
  const mesh = useRef<THREE.Mesh>(null);
  const [isSelected, setSelected] = useState(false);
  const [socketRef, setSocketRef] = useState<SocketIOClient.Socket | null>(null);

  useEffect(() => {
    const socket = io.connect('http://localhost:5000');
    setSocketRef(socket);

    return () => {
      socket.disconnect();
    }
  }, []);

  const handlePointerMove = (event: ThreeEvent<MouseEvent>) => {
    if (socketRef) {
      const intersection = event.intersections[0];
      if (intersection) {
        // Break the mesh into pieces
        const fragmentedMesh = new THREE.Mesh(geometry, material)
        fragmentedMesh.position.copy(mesh.current!.position)
        FragmentedMesh({ mesh: fragmentedMesh })

        // Emit a "move" event with the new position
        const { x, y, z } = intersection.object.position;
        const newPosition = new THREE.Vector3(x, y, z);
        socketRef.emit('move', newPosition.toArray());
      }
    }
  };

  useEffect(() => {
    if (socketRef) {
      socketRef.on('move', (data: any) => {
        console.log('Received move event:', data);

        // Update the position of the mesh
        const [x, y, z] = data;
        const newPosition = new THREE.Vector3(x, y, z);
        mesh.current?.position.copy(newPosition);
      });
    }
  }, [socketRef]);

  return (
    <group onClick={handlePointerMove}>
      <mesh ref={mesh} position={props.position} material={props.material} geometry={geometry} />
    </group>
  );
};

export default WhitePawnSix;