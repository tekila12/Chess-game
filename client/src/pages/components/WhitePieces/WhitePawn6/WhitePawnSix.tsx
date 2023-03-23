import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { ThreeEvent, useFrame } from '@react-three/fiber';
import { Material, BufferGeometry } from 'three';
import { Socket } from 'socket.io-client';

type WhitePawnSixProps = {
  material: Material | Material[];
  position: [number, number, number];
  geometry: BufferGeometry;
  actions: any;
  socket: Socket;
};

const WhitePawnSix = ({ material, position, geometry, actions, socket, ...props }: WhitePawnSixProps & any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isSelected, setSelected] = useState(false);

  const handlePointerMove = (event: ThreeEvent<MouseEvent>) => {
    const intersection = event.intersections[0];
    if (intersection) {
      console.log(intersection.object);
      const newPosition = new THREE.Vector3().copy(meshRef.current!.position);
      newPosition.z -= 2;
      meshRef.current!.position.copy(newPosition);
      actions.Action.setLoop(THREE.LoopOnce);
      actions.Action.play();
      socket.emit('move', newPosition.toArray());
    }
  };

  return (
    <group onClick={handlePointerMove}>
      <mesh ref={meshRef} material={material} geometry={geometry} position={position} />
    </group>
  );
};

export default WhitePawnSix;