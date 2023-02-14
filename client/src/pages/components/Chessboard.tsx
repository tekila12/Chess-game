
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial001: THREE.Mesh
    defaultMaterial002: THREE.Mesh
    defaultMaterial003: THREE.Mesh
    defaultMaterial013: THREE.Mesh
    defaultMaterial014: THREE.Mesh
    defaultMaterial015: THREE.Mesh
    defaultMaterial016: THREE.Mesh
    defaultMaterial017: THREE.Mesh
    defaultMaterial018: THREE.Mesh
    defaultMaterial011: THREE.Mesh
    defaultMaterial012: THREE.Mesh
    defaultMaterial004: THREE.Mesh
    defaultMaterial005: THREE.Mesh
    defaultMaterial006: THREE.Mesh
    defaultMaterial007: THREE.Mesh
    defaultMaterial008: THREE.Mesh
    defaultMaterial019: THREE.Mesh
    defaultMaterial020: THREE.Mesh
    defaultMaterial034: THREE.Mesh
    defaultMaterial035: THREE.Mesh
    defaultMaterial009: THREE.Mesh
    defaultMaterial036: THREE.Mesh
    defaultMaterial037: THREE.Mesh
    defaultMaterial038: THREE.Mesh
    defaultMaterial039: THREE.Mesh
    defaultMaterial040: THREE.Mesh
    defaultMaterial041: THREE.Mesh
    defaultMaterial042: THREE.Mesh
    defaultMaterial043: THREE.Mesh
    defaultMaterial044: THREE.Mesh
    defaultMaterial045: THREE.Mesh
    defaultMaterial046: THREE.Mesh
    defaultMaterial048: THREE.Mesh
    defaultMaterial049: THREE.Mesh
    defaultMaterial050: THREE.Mesh
    defaultMaterial051: THREE.Mesh
    defaultMaterial010: THREE.Mesh
    defaultMaterial033: THREE.Mesh
    defaultMaterial047: THREE.Mesh
    defaultMaterial052: THREE.Mesh
  }
  materials: {
    initialShadingGroup: THREE.MeshStandardMaterial
    blinn3SG: THREE.MeshStandardMaterial
  }
}

export default function Chessboard(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/realChessboardp1.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial001.geometry} material={nodes.defaultMaterial001.material} position={[0, 0, -3.99]} />
          <mesh geometry={nodes.defaultMaterial002.geometry} material={nodes.defaultMaterial002.material} position={[-1.98, 0, -3.99]} />
          <mesh geometry={nodes.defaultMaterial003.geometry} material={nodes.defaultMaterial003.material} position={[-4, 0, -3.99]} />
          <mesh geometry={nodes.defaultMaterial013.geometry} material={nodes.defaultMaterial013.material} position={[-6.01, 0, -3.99]} />
          <mesh geometry={nodes.defaultMaterial014.geometry} material={nodes.defaultMaterial014.material} position={[-7.98, 0, -3.99]} />
          <mesh geometry={nodes.defaultMaterial015.geometry} material={nodes.defaultMaterial015.material} position={[2, 0, -3.99]} />
          <mesh geometry={nodes.defaultMaterial016.geometry} material={nodes.defaultMaterial016.material} position={[4.01, 0, -3.99]} />
          <mesh geometry={nodes.defaultMaterial017.geometry} material={nodes.defaultMaterial017.material} position={[5.97, 0, -3.99]} />
          <mesh geometry={nodes.defaultMaterial018.geometry} material={nodes.defaultMaterial018.material} />
          <mesh geometry={nodes.defaultMaterial011.geometry} material={materials.initialShadingGroup} />
          <mesh geometry={nodes.defaultMaterial012.geometry} material={materials.blinn3SG} />
          <mesh geometry={nodes.defaultMaterial004.geometry} material={nodes.defaultMaterial004.material} rotation={[-Math.PI, 0, -Math.PI]} />
          <mesh geometry={nodes.defaultMaterial005.geometry} material={nodes.defaultMaterial005.material} rotation={[-Math.PI, 0, -Math.PI]} />
          <mesh geometry={nodes.defaultMaterial006.geometry} material={nodes.defaultMaterial006.material} />
          <mesh geometry={nodes.defaultMaterial007.geometry} material={nodes.defaultMaterial007.material} />
          <mesh geometry={nodes.defaultMaterial008.geometry} material={nodes.defaultMaterial008.material} position={[-3.97, 0, 4.02]} />
          <mesh geometry={nodes.defaultMaterial019.geometry} material={nodes.defaultMaterial019.material} />
          <mesh geometry={nodes.defaultMaterial020.geometry} material={nodes.defaultMaterial020.material} />
          <mesh geometry={nodes.defaultMaterial034.geometry} material={nodes.defaultMaterial034.material} position={[0.01, 0, 3.99]} />
          <mesh geometry={nodes.defaultMaterial035.geometry} material={nodes.defaultMaterial035.material} position={[0, 0, 1.97]}>
            <mesh geometry={nodes.defaultMaterial009.geometry} material={nodes.defaultMaterial009.material} />
          </mesh>
          <mesh geometry={nodes.defaultMaterial036.geometry} material={nodes.defaultMaterial036.material} />
          <mesh geometry={nodes.defaultMaterial037.geometry} material={nodes.defaultMaterial037.material} />
          <mesh geometry={nodes.defaultMaterial038.geometry} material={nodes.defaultMaterial038.material} position={[-9.98, 0, 0]} />
          <mesh geometry={nodes.defaultMaterial039.geometry} material={nodes.defaultMaterial039.material} position={[-9.98, 0, 0]} />
          <mesh geometry={nodes.defaultMaterial040.geometry} material={nodes.defaultMaterial040.material} position={[1.99, 0, 3.99]} />
          <mesh geometry={nodes.defaultMaterial041.geometry} material={nodes.defaultMaterial041.material} position={[-1.97, 0, 3.99]} />
          <mesh geometry={nodes.defaultMaterial042.geometry} material={nodes.defaultMaterial042.material} position={[-3.99, 0, 3.99]} />
          <mesh geometry={nodes.defaultMaterial043.geometry} material={nodes.defaultMaterial043.material} position={[-5.98, 0, 3.97]} />
          <mesh geometry={nodes.defaultMaterial044.geometry} material={nodes.defaultMaterial044.material} position={[10.02, 0, 0]} rotation={[-Math.PI, 0, -Math.PI]} />
          <mesh geometry={nodes.defaultMaterial045.geometry} material={nodes.defaultMaterial045.material} position={[-9.97, 0, 3.97]} />
          <mesh geometry={nodes.defaultMaterial046.geometry} material={nodes.defaultMaterial046.material} position={[-11.98, 0, 3.97]} />
          <mesh geometry={nodes.defaultMaterial048.geometry} material={nodes.defaultMaterial048.material} position={[10.02, 0, 0]} rotation={[-Math.PI, 0, -Math.PI]} />
          <mesh geometry={nodes.defaultMaterial049.geometry} material={nodes.defaultMaterial049.material} rotation={[Math.PI, 0, Math.PI]} />
          <mesh geometry={nodes.defaultMaterial050.geometry} material={nodes.defaultMaterial050.material} position={[-5.99, 0, 0]} rotation={[Math.PI, 0, Math.PI]} />
          <mesh geometry={nodes.defaultMaterial051.geometry} material={nodes.defaultMaterial051.material} position={[-2.03, 0, 0]} rotation={[Math.PI, 0, Math.PI]} />
        </group>
        <mesh geometry={nodes.defaultMaterial010.geometry} material={nodes.defaultMaterial010.material} position={[14, -0.02, -0.04]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
        <mesh geometry={nodes.defaultMaterial033.geometry} material={nodes.defaultMaterial033.material} position={[-13.96, -0.05, -0.05]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.defaultMaterial047.geometry} material={nodes.defaultMaterial047.material} position={[0.03, -0.02, -0.04]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
        <mesh geometry={nodes.defaultMaterial052.geometry} material={nodes.defaultMaterial052.material} position={[0.05, -0.05, -0.05]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/realChessboardp1.glb')