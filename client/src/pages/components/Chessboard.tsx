import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'


interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial001_1: THREE.Mesh
    defaultMaterial002: THREE.Mesh
    defaultMaterial003_1: THREE.Mesh
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
    defaultMaterial034: THREE.Mesh
    defaultMaterial038: THREE.Mesh
    defaultMaterial039: THREE.Mesh
    defaultMaterial040: THREE.Mesh
    defaultMaterial041: THREE.Mesh
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
    defaultMaterial042: THREE.SkinnedMesh
    defaultMaterial036: THREE.SkinnedMesh
    defaultMaterial019: THREE.Mesh
    horseWhite1: THREE.Mesh
    defaultMaterial009: THREE.Mesh
    defaultMaterial020: THREE.Mesh
    defaultMaterial021: THREE.Mesh
    Bone_1: THREE.Bone
    Bone002_1: THREE.Bone
    Bone_2: THREE.Bone
    Bone004_1: THREE.Bone
    Bone005_1: THREE.Bone
    neutral_bone: THREE.Bone
    Bone: THREE.Bone
    neutral_bone_1: THREE.Bone
  }
  materials: {
    initialShadingGroup: THREE.MeshStandardMaterial
    blinn3SG: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[];

}

type ActionName = 'Armature.002Action.001'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export default function ChessBoard(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/queenAnimation.glb') as GLTFResult
  const { actions } = useAnimations(animations, group);

  useEffect(()=>{
    
  })
  return (
    <group  {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Collada_visual_scene_group" rotation={[Math.PI / 2, 0, 0]}>
            <group name="blackpieces_mesh">
              <mesh name="defaultMaterial001_1" geometry={nodes.defaultMaterial001_1.geometry} material={nodes.defaultMaterial001_1.material} position={[0, 0, -3.99]} />
              <mesh name="defaultMaterial002" geometry={nodes.defaultMaterial002.geometry} material={nodes.defaultMaterial002.material} position={[-1.98, 0, -3.99]} />
              <mesh name="defaultMaterial003_1" geometry={nodes.defaultMaterial003_1.geometry} material={nodes.defaultMaterial003_1.material} position={[-4, 0, -3.99]} />
              <mesh name="defaultMaterial013" geometry={nodes.defaultMaterial013.geometry} material={nodes.defaultMaterial013.material} position={[-6.01, 0, -3.99]} />
              <mesh name="defaultMaterial014" geometry={nodes.defaultMaterial014.geometry} material={nodes.defaultMaterial014.material} position={[-7.98, 0, -3.99]} />
              <mesh name="defaultMaterial015" geometry={nodes.defaultMaterial015.geometry} material={nodes.defaultMaterial015.material} position={[2, 0, -3.99]} />
              <mesh name="defaultMaterial016" geometry={nodes.defaultMaterial016.geometry} material={nodes.defaultMaterial016.material} position={[4.01, 0, -3.99]} />
              <mesh name="defaultMaterial017" geometry={nodes.defaultMaterial017.geometry} material={nodes.defaultMaterial017.material} position={[5.97, 0, -3.99]} />
              <mesh name="defaultMaterial018" geometry={nodes.defaultMaterial018.geometry} material={nodes.defaultMaterial018.material} />
            </group>
            <group name="chessboard_mesh">
              <mesh name="defaultMaterial011" geometry={nodes.defaultMaterial011.geometry} material={materials.initialShadingGroup} />
              <mesh name="defaultMaterial012" geometry={nodes.defaultMaterial012.geometry} material={materials.blinn3SG} />
            </group>
            <group name="whitepieces_mesh">
              <mesh name="defaultMaterial004" geometry={nodes.defaultMaterial004.geometry} material={nodes.defaultMaterial004.material} rotation={[-Math.PI, 0, -Math.PI]} />
              <mesh name="defaultMaterial005" geometry={nodes.defaultMaterial005.geometry} material={nodes.defaultMaterial005.material} rotation={[-Math.PI, 0, -Math.PI]} />
              <mesh name="defaultMaterial006" geometry={nodes.defaultMaterial006.geometry} material={nodes.defaultMaterial006.material} />
              <mesh name="defaultMaterial007" geometry={nodes.defaultMaterial007.geometry} material={nodes.defaultMaterial007.material} />
              <mesh name="defaultMaterial008" geometry={nodes.defaultMaterial008.geometry} material={nodes.defaultMaterial008.material} position={[-3.97, 0, 4.02]} />
              <mesh name="defaultMaterial034" geometry={nodes.defaultMaterial034.geometry} material={nodes.defaultMaterial034.material} position={[0.01, 0, 3.99]} />
              <mesh name="defaultMaterial038" geometry={nodes.defaultMaterial038.geometry} material={nodes.defaultMaterial038.material} position={[-9.98, 0, 0]} />
              <mesh name="defaultMaterial039" geometry={nodes.defaultMaterial039.geometry} material={nodes.defaultMaterial039.material} position={[-9.98, 0, 0]} />
              <mesh name="defaultMaterial040" geometry={nodes.defaultMaterial040.geometry} material={nodes.defaultMaterial040.material} position={[1.99, 0, 3.99]} />
              <mesh name="defaultMaterial041" geometry={nodes.defaultMaterial041.geometry} material={nodes.defaultMaterial041.material} position={[-1.97, 0, 3.99]} />
              <mesh name="defaultMaterial043" geometry={nodes.defaultMaterial043.geometry} material={nodes.defaultMaterial043.material} position={[-5.98, 0, 3.97]} />
              <mesh name="defaultMaterial044" geometry={nodes.defaultMaterial044.geometry} material={nodes.defaultMaterial044.material} position={[10.02, 0, 0]} rotation={[-Math.PI, 0, -Math.PI]} />
              <mesh name="defaultMaterial045" geometry={nodes.defaultMaterial045.geometry} material={nodes.defaultMaterial045.material} position={[-9.97, 0, 3.97]} />
              <mesh name="defaultMaterial046" geometry={nodes.defaultMaterial046.geometry} material={nodes.defaultMaterial046.material} position={[-11.98, 0, 3.97]} />
              <mesh name="defaultMaterial048" geometry={nodes.defaultMaterial048.geometry} material={nodes.defaultMaterial048.material} position={[10.02, 0, 0]} rotation={[-Math.PI, 0, -Math.PI]} />
              <mesh name="defaultMaterial049" geometry={nodes.defaultMaterial049.geometry} material={nodes.defaultMaterial049.material} rotation={[Math.PI, 0, Math.PI]} />
              <mesh name="defaultMaterial050" geometry={nodes.defaultMaterial050.geometry} material={nodes.defaultMaterial050.material} position={[-5.99, 0, 0]} rotation={[Math.PI, 0, Math.PI]} />
              <mesh name="defaultMaterial051" geometry={nodes.defaultMaterial051.geometry} material={nodes.defaultMaterial051.material} position={[-2.03, 0, 0]} rotation={[Math.PI, 0, Math.PI]} />
            </group>
          </group>
          <mesh name="defaultMaterial010" geometry={nodes.defaultMaterial010.geometry} material={nodes.defaultMaterial010.material} position={[14, -0.02, -0.04]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
          <mesh name="defaultMaterial033" geometry={nodes.defaultMaterial033.geometry} material={nodes.defaultMaterial033.material} position={[-13.96, -0.05, -0.05]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="defaultMaterial047" geometry={nodes.defaultMaterial047.geometry} material={nodes.defaultMaterial047.material} position={[0.03, -0.02, -0.04]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
          <mesh name="defaultMaterial052" geometry={nodes.defaultMaterial052.geometry} material={nodes.defaultMaterial052.material} position={[0.05, -0.05, -0.05]} rotation={[Math.PI / 2, 0, 0]} />
        </group>
        <group name="Armature" position={[4.96, 2.38, 1.36]} rotation={[0.08, 0, 0]}>
          <primitive object={nodes.Bone_1} />
          <primitive object={nodes.Bone002_1} />
        </group>
        <group name="Armature001" position={[1.07, 0.9, 0.92]} scale={0.41}>
          <primitive object={nodes.Bone_2} />
          <primitive object={nodes.Bone004_1} />
          <primitive object={nodes.Bone005_1} />
          <primitive object={nodes.neutral_bone} />
          <skinnedMesh name="defaultMaterial042" geometry={nodes.defaultMaterial042.geometry} material={nodes.defaultMaterial042.material} skeleton={nodes.defaultMaterial042.skeleton} />
        </group>
        <group name="Armature002" position={[-1.01, 1.96, 6.75]}>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.neutral_bone_1} />
          <skinnedMesh name="defaultMaterial036" geometry={nodes.defaultMaterial036.geometry} material={nodes.defaultMaterial036.material} skeleton={nodes.defaultMaterial036.skeleton} />
        </group>
        <mesh name="defaultMaterial019" geometry={nodes.defaultMaterial019.geometry} material={nodes.defaultMaterial019.material} position={[0, 0, -6.02]}>
          <mesh name="horseWhite1" geometry={nodes.horseWhite1.geometry} material={nodes.horseWhite1.material} position={[-0.01, -0.02, 0.03]} />
        </mesh>
        <mesh name="defaultMaterial009" geometry={nodes.defaultMaterial009.geometry} material={nodes.defaultMaterial009.material} position={[0, 0, -3.93]} />
        <mesh name="defaultMaterial020" geometry={nodes.defaultMaterial020.geometry} material={nodes.defaultMaterial020.material} position={[0, 0, -6.02]} />
        <mesh name="defaultMaterial021" geometry={nodes.defaultMaterial021.geometry} material={nodes.defaultMaterial021.material} position={[-4.1, -0.02, 0.88]} rotation={[0.02, 0.18, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/queenAnimation.glb')