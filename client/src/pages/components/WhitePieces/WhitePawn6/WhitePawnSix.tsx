import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { ThreeEvent, useFrame } from '@react-three/fiber';
import { Material, BufferGeometry } from 'three';
import { useSpring, animated } from '@react-spring/three';

type WhitePawnSixProps = {
  material: Material | Material[];
  position: [number, number, number];
  geometry: THREE.BufferGeometry;
  actions: any;
  onClick: () => void;
};

interface SpringProps {
  position: [number, number, number];
}

const WhitePawnSix = ({ material, position, geometry, actions, ...props }: WhitePawnSixProps & any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isSelected, setSelected] = useState(false);
  const [spring, setSpring] = useSpring<SpringProps>(() => ({
    position: [props.position[0], props.position[1], props.position[2]],
  }));

  const handlePointerMove = (event: ThreeEvent<MouseEvent>) => {
    const intersection = event.intersections[0];
    if (intersection) {
      intersection.object.position.z -= 2;
      setSpring({ position: [props.position[0], props.position[1], props.position[2] - 2] });
      actions.Action.setLoop(THREE.LoopOnce);
      actions.Action.play();
    }
  };

  return (
    <group onClick={handlePointerMove}>
      <animated.mesh ref={meshRef} material={props.material} geometry={geometry} position={spring.position} />
    </group>
  );
};

export default WhitePawnSix;