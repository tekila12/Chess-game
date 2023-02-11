/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 chessBoard1.glb --types
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_28: THREE.Mesh
    Object_29: THREE.Mesh
    Object_30: THREE.Mesh
    Object_6: THREE.Mesh
    Object_8: THREE.Mesh
    Object_10: THREE.Mesh
    Object_12: THREE.Mesh
    Object_14: THREE.Mesh
    Object_16: THREE.Mesh
    Object_18: THREE.Mesh
    Object_20: THREE.Mesh
    Object_22: THREE.Mesh
    Object_24: THREE.Mesh
    Object_26: THREE.Mesh
    Object_32: THREE.Mesh
    Object_34: THREE.Mesh
    Object_36: THREE.Mesh
    Object_38: THREE.Mesh
    Object_40: THREE.Mesh
    Object_42: THREE.Mesh
    Object_44: THREE.Mesh
    Object_46: THREE.Mesh
    Object_48: THREE.Mesh
    Object_50: THREE.Mesh
    Object_52: THREE.Mesh
    Object_54: THREE.Mesh
    Object_56: THREE.Mesh
    Object_58: THREE.Mesh
    Object_60: THREE.Mesh
    Object_62: THREE.Mesh
    Object_64: THREE.Mesh
    Object_66: THREE.Mesh
    Object_68: THREE.Mesh
    Object_70: THREE.Mesh
    Object_4: THREE.Mesh
    Cube: THREE.Mesh
  }
  materials: {
    black: THREE.MeshStandardMaterial
    material: THREE.MeshStandardMaterial
    board: THREE.MeshStandardMaterial
    material_0: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
  }
}

export default function Chessboard(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/chessBoard1.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.73, -0.01]}>
        <mesh geometry={nodes.Object_28.geometry} material={materials.black} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.board} />
      </group>
      <group position={[-0.32, 1.71, -2.36]} scale={0.27}>
        <mesh geometry={nodes.Object_12.geometry} material={materials.material_0} position={[0, 0, -0.18]} />
      </group>
      <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} position={[-1.58, 1.71, -2.42]} rotation={[0, -1.49, 0]} scale={0.27} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.material_0} position={[-2.23, 1.71, -2.42]} scale={0.27} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.material_0} position={[-0.97, 1.71, -2.38]} scale={0.27} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.material_0} position={[0.34, 1.71, -2.39]} scale={0.27} />
      <mesh geometry={nodes.Object_16.geometry} material={materials['Material.001']} position={[2.28, 1.71, 1.42]} scale={0.27} />
      <mesh geometry={nodes.Object_18.geometry} material={materials['Material.001']} position={[1.61, 1.71, 2.08]} rotation={[0, 1.57, 0]} scale={0.27} />
      <mesh geometry={nodes.Object_20.geometry} material={materials['Material.001']} position={[-2.23, 1.71, 2.08]} scale={0.27} />
      <mesh geometry={nodes.Object_22.geometry} material={materials['Material.001']} position={[0.98, 1.71, 2.08]} scale={0.27} />
      <mesh geometry={nodes.Object_24.geometry} material={materials['Material.001']} position={[-0.31, 1.71, 2.08]} scale={0.27} />
      <mesh geometry={nodes.Object_26.geometry} material={materials['Material.001']} position={[0.33, 1.71, 2.08]} scale={0.27} />
      <mesh geometry={nodes.Object_32.geometry} material={materials.material_0} position={[0.98, 1.71, -2.41]} scale={0.27} />
      <mesh geometry={nodes.Object_34.geometry} material={materials.material_0} position={[2.28, 1.71, -2.41]} scale={0.27} />
      <mesh geometry={nodes.Object_36.geometry} material={materials.material_0} position={[1.59, 1.71, -2.4]} rotation={[-Math.PI, 1.54, -Math.PI]} scale={0.27} />
      <mesh geometry={nodes.Object_38.geometry} material={materials.material_0} position={[-1.6, 1.71, -1.77]} scale={0.27} />
      <mesh geometry={nodes.Object_40.geometry} material={materials.material_0} position={[-0.94, 1.71, -1.77]} scale={0.27} />
      <mesh geometry={nodes.Object_42.geometry} material={materials.material_0} position={[-0.3, 1.71, -1.77]} scale={0.27} />
      <mesh geometry={nodes.Object_44.geometry} material={materials.material_0} position={[0.33, 1.71, -1.77]} scale={0.27} />
      <mesh geometry={nodes.Object_46.geometry} material={materials.material_0} position={[0.97, 1.71, -1.77]} scale={0.27} />
      <mesh geometry={nodes.Object_48.geometry} material={materials.material_0} position={[1.61, 1.71, -1.77]} scale={0.27} />
      <mesh geometry={nodes.Object_50.geometry} material={materials.material_0} position={[2.25, 1.71, -1.77]} scale={0.27} />
      <mesh geometry={nodes.Object_52.geometry} material={materials['Material.001']} position={[-0.93, 1.71, 2.11]} scale={0.27} />
      <mesh geometry={nodes.Object_54.geometry} material={materials['Material.001']} position={[2.26, 1.71, 2.1]} scale={0.27} />
      <mesh geometry={nodes.Object_56.geometry} material={materials['Material.001']} position={[-1.57, 1.71, 2.07]} rotation={[Math.PI, -1.55, Math.PI]} scale={0.27} />
      <mesh geometry={nodes.Object_58.geometry} material={materials['Material.001']} position={[1.6, 1.71, 1.42]} scale={0.27} />
      <mesh geometry={nodes.Object_60.geometry} material={materials['Material.001']} position={[0.98, 1.71, 1.42]} scale={0.27} />
      <mesh geometry={nodes.Object_62.geometry} material={materials['Material.001']} position={[0.3, 1.71, 1.42]} scale={0.27} />
      <mesh geometry={nodes.Object_64.geometry} material={materials['Material.001']} position={[-0.3, 1.71, 1.42]} scale={0.27} />
      <mesh geometry={nodes.Object_66.geometry} material={materials['Material.001']} position={[-0.98, 1.71, 1.42]} scale={0.27} />
      <mesh geometry={nodes.Object_68.geometry} material={materials['Material.001']} position={[-1.6, 1.71, 1.42]} scale={0.27} />
      <mesh geometry={nodes.Object_70.geometry} material={materials['Material.001']} position={[-2.28, 1.71, 1.42]} scale={0.27} />
      <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} position={[-2.24, 1.71, -1.77]} scale={0.27} />
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('/chessBoard1.glb')
