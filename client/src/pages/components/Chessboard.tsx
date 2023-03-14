
import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}


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
    defaultMaterial042_cell031: THREE.Mesh
    defaultMaterial042_cell031_1: THREE.Mesh
    defaultMaterial042_cell013_1: THREE.Mesh
    defaultMaterial042_cell013_2: THREE.Mesh
    defaultMaterial042_cell014: THREE.Mesh
    defaultMaterial042_cell014_1: THREE.Mesh
    defaultMaterial042_cell019: THREE.Mesh
    defaultMaterial042_cell016_1: THREE.Mesh
    defaultMaterial042_cell016_2: THREE.Mesh
    defaultMaterial042_cell022: THREE.Mesh
    defaultMaterial042_cell026: THREE.Mesh
    defaultMaterial042_cell019_1: THREE.Mesh
    defaultMaterial042_cell019_2: THREE.Mesh
    defaultMaterial042_cell020_1: THREE.Mesh
    defaultMaterial042_cell020_2: THREE.Mesh
    defaultMaterial042_cell021_1: THREE.Mesh
    defaultMaterial042_cell021_2: THREE.Mesh
    defaultMaterial042_cell017: THREE.Mesh
    defaultMaterial042_cell023_1: THREE.Mesh
    defaultMaterial042_cell023_2: THREE.Mesh
    defaultMaterial042_cell024_1: THREE.Mesh
    defaultMaterial042_cell024_2: THREE.Mesh
    defaultMaterial042_cell024: THREE.Mesh
    defaultMaterial042_cell025: THREE.Mesh
    defaultMaterial042_cell027: THREE.Mesh
    defaultMaterial041_cell127: THREE.Mesh
    defaultMaterial041_cell127_1: THREE.Mesh
    defaultMaterial041_cell128: THREE.Mesh
    defaultMaterial041_cell128_1: THREE.Mesh
    defaultMaterial041_cell100: THREE.Mesh
    defaultMaterial041_cell100_1: THREE.Mesh
    defaultMaterial041_cell101: THREE.Mesh
    defaultMaterial041_cell101_1: THREE.Mesh
    defaultMaterial041_cell077: THREE.Mesh
    defaultMaterial041_cell078: THREE.Mesh
    defaultMaterial041_cell105: THREE.Mesh
    defaultMaterial041_cell105_1: THREE.Mesh
    defaultMaterial041_cell090: THREE.Mesh
    defaultMaterial041_cell107_1: THREE.Mesh
    defaultMaterial041_cell107_2: THREE.Mesh
    defaultMaterial041_cell108: THREE.Mesh
    defaultMaterial041_cell108_1: THREE.Mesh
    defaultMaterial041_cell109_1: THREE.Mesh
    defaultMaterial041_cell109_2: THREE.Mesh
    defaultMaterial041_cell109: THREE.Mesh
    defaultMaterial041_cell111: THREE.Mesh
    defaultMaterial041_cell112: THREE.Mesh
    defaultMaterial041_cell112_1: THREE.Mesh
    defaultMaterial041_cell113: THREE.Mesh
    defaultMaterial041_cell113_1: THREE.Mesh
    defaultMaterial041_cell114: THREE.Mesh
    defaultMaterial041_cell114_1: THREE.Mesh
    defaultMaterial041_cell115: THREE.Mesh
    defaultMaterial041_cell115_1: THREE.Mesh
    defaultMaterial041_cell116: THREE.Mesh
    defaultMaterial041_cell116_1: THREE.Mesh
  }
  materials: {
    initialShadingGroup: THREE.MeshStandardMaterial
    blinn3SG: THREE.MeshStandardMaterial
  }

  animations: Record<ActionName, THREE.AnimationAction>[];
}

type ActionName =
  | 'Sketchfab_model_Sketchfab_model'
  | 'Collada visual scene group'
 
  | 'Action'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export default function ChessBoard(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/blendAnim.glb') as GLTFResult
  const { actions } = useAnimations(animations, group)



  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Collada_visual_scene_group" rotation={[Math.PI / 2, 0, 0]}>
            <group name="blackpieces_mesh">
              <mesh name="defaultMaterial001" geometry={nodes.defaultMaterial001.geometry} material={nodes.defaultMaterial001.material} position={[0, 0, -3.99]} />
              <mesh name="defaultMaterial002" geometry={nodes.defaultMaterial002.geometry} material={nodes.defaultMaterial002.material} position={[-1.98, 0, -0.04]} />
              <mesh name="defaultMaterial003" geometry={nodes.defaultMaterial003.geometry} material={nodes.defaultMaterial003.material} position={[-4, 0, -3.99]} />
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
              <mesh name="defaultMaterial019" geometry={nodes.defaultMaterial019.geometry} material={nodes.defaultMaterial019.material} />
              <mesh name="defaultMaterial020" geometry={nodes.defaultMaterial020.geometry} material={nodes.defaultMaterial020.material} />
              <mesh name="defaultMaterial034" geometry={nodes.defaultMaterial034.geometry} material={nodes.defaultMaterial034.material} position={[0.01, 0, 3.99]} />
              <mesh name="defaultMaterial035" geometry={nodes.defaultMaterial035.geometry} material={nodes.defaultMaterial035.material} position={[0, 0, 1.97]}>
                <mesh name="defaultMaterial009" geometry={nodes.defaultMaterial009.geometry} material={nodes.defaultMaterial009.material} position={[0, 0, -3.98]} />
              </mesh>
              <mesh name="defaultMaterial036" geometry={nodes.defaultMaterial036.geometry} material={nodes.defaultMaterial036.material} />
              <mesh name="defaultMaterial037" geometry={nodes.defaultMaterial037.geometry} material={nodes.defaultMaterial037.material} />
              <mesh name="defaultMaterial038" geometry={nodes.defaultMaterial038.geometry} material={nodes.defaultMaterial038.material} position={[-9.98, 0, 0]} />
              <mesh name="defaultMaterial039" geometry={nodes.defaultMaterial039.geometry} material={nodes.defaultMaterial039.material} position={[-9.98, 0, 0]} />
              <mesh name="defaultMaterial040" geometry={nodes.defaultMaterial040.geometry} material={nodes.defaultMaterial040.material} position={[1.99, 0, 3.99]} />
              <mesh name="defaultMaterial041" geometry={nodes.defaultMaterial041.geometry} material={nodes.defaultMaterial041.material} position={[-1.97, 0, 3.99]} />
              <mesh name="defaultMaterial042" geometry={nodes.defaultMaterial042.geometry} material={nodes.defaultMaterial042.material} position={[-3.99, 0, 3.99]} />
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
        <group name="defaultMaterial042_cell012" position={[0.76, 1.51, 5.13]} rotation={[0.47, 0.1, 1.85]}>
          <mesh name="defaultMaterial042_cell031" geometry={nodes.defaultMaterial042_cell031.geometry} material={nodes.defaultMaterial042_cell031.material} />
          <mesh name="defaultMaterial042_cell031_1" geometry={nodes.defaultMaterial042_cell031_1.geometry} material={nodes.defaultMaterial042_cell031_1.material} />
        </group>
        <group name="defaultMaterial042_cell015" position={[0.76, 1.51, 5.13]} rotation={[1.22, 0.23, 0.84]}>
          <mesh name="defaultMaterial042_cell013_1" geometry={nodes.defaultMaterial042_cell013_1.geometry} material={nodes.defaultMaterial042_cell013_1.material} />
          <mesh name="defaultMaterial042_cell013_2" geometry={nodes.defaultMaterial042_cell013_2.geometry} material={nodes.defaultMaterial042_cell013_2.material} />
        </group>
        <group name="defaultMaterial042_cell018" position={[0.76, 1.51, 5.13]} rotation={[1.18, -1.03, -0.28]}>
          <mesh name="defaultMaterial042_cell014" geometry={nodes.defaultMaterial042_cell014.geometry} material={nodes.defaultMaterial042_cell014.material} />
          <mesh name="defaultMaterial042_cell014_1" geometry={nodes.defaultMaterial042_cell014_1.geometry} material={nodes.defaultMaterial042_cell014_1.material} />
        </group>
        <mesh name="defaultMaterial042_cell019" geometry={nodes.defaultMaterial042_cell019.geometry} material={nodes.defaultMaterial042_cell019.material} position={[0.76, 1.51, 5.13]} rotation={[-0.83, 0.57, 0.1]} />
        <group name="defaultMaterial042_cell021" position={[0.76, 1.51, 5.13]} rotation={[1.92, 0.31, 1.4]}>
          <mesh name="defaultMaterial042_cell016_1" geometry={nodes.defaultMaterial042_cell016_1.geometry} material={nodes.defaultMaterial042_cell016_1.material} />
          <mesh name="defaultMaterial042_cell016_2" geometry={nodes.defaultMaterial042_cell016_2.geometry} material={nodes.defaultMaterial042_cell016_2.material} />
        </group>
        <mesh name="defaultMaterial042_cell022" geometry={nodes.defaultMaterial042_cell022.geometry} material={nodes.defaultMaterial042_cell022.material} position={[0.76, 1.51, 5.13]} rotation={[-1.14, -0.18, -0.92]} />
        <mesh name="defaultMaterial042_cell026" geometry={nodes.defaultMaterial042_cell026.geometry} material={nodes.defaultMaterial042_cell026.material} position={[0.76, 1.51, 5.13]} rotation={[-0.94, 1.13, -0.08]} />
        <group name="defaultMaterial042_cell029" position={[0.76, 1.51, 5.13]} rotation={[2.93, -0.27, -2.28]}>
          <mesh name="defaultMaterial042_cell019_1" geometry={nodes.defaultMaterial042_cell019_1.geometry} material={nodes.defaultMaterial042_cell019_1.material} />
          <mesh name="defaultMaterial042_cell019_2" geometry={nodes.defaultMaterial042_cell019_2.geometry} material={nodes.defaultMaterial042_cell019_2.material} />
        </group>
        <group name="defaultMaterial042_cell013" position={[0.76, 1.51, 5.13]} rotation={[-0.11, -0.91, -1.7]}>
          <mesh name="defaultMaterial042_cell020_1" geometry={nodes.defaultMaterial042_cell020_1.geometry} material={nodes.defaultMaterial042_cell020_1.material} />
          <mesh name="defaultMaterial042_cell020_2" geometry={nodes.defaultMaterial042_cell020_2.geometry} material={nodes.defaultMaterial042_cell020_2.material} />
        </group>
        <group name="defaultMaterial042_cell016" position={[0.76, 1.51, 5.13]} rotation={[-2.25, 1.13, 0.67]}>
          <mesh name="defaultMaterial042_cell021_1" geometry={nodes.defaultMaterial042_cell021_1.geometry} material={nodes.defaultMaterial042_cell021_1.material} />
          <mesh name="defaultMaterial042_cell021_2" geometry={nodes.defaultMaterial042_cell021_2.geometry} material={nodes.defaultMaterial042_cell021_2.material} />
        </group>
        <mesh name="defaultMaterial042_cell017" geometry={nodes.defaultMaterial042_cell017.geometry} material={nodes.defaultMaterial042_cell017.material} position={[0.76, 1.51, 5.13]} />
        <group name="defaultMaterial042_cell020" position={[0.76, 1.51, 5.13]} rotation={[2.56, -0.55, 2.09]}>
          <mesh name="defaultMaterial042_cell023_1" geometry={nodes.defaultMaterial042_cell023_1.geometry} material={nodes.defaultMaterial042_cell023_1.material} />
          <mesh name="defaultMaterial042_cell023_2" geometry={nodes.defaultMaterial042_cell023_2.geometry} material={nodes.defaultMaterial042_cell023_2.material} />
        </group>
        <group name="defaultMaterial042_cell023" position={[0.76, 1.51, 5.13]} rotation={[0.38, -0.84, 1.17]}>
          <mesh name="defaultMaterial042_cell024_1" geometry={nodes.defaultMaterial042_cell024_1.geometry} material={nodes.defaultMaterial042_cell024_1.material} />
          <mesh name="defaultMaterial042_cell024_2" geometry={nodes.defaultMaterial042_cell024_2.geometry} material={nodes.defaultMaterial042_cell024_2.material} />
        </group>
        <mesh name="defaultMaterial042_cell024" geometry={nodes.defaultMaterial042_cell024.geometry} material={nodes.defaultMaterial042_cell024.material} position={[0.76, 1.51, 5.13]} rotation={[0.65, -0.26, -2.67]} />
        <mesh name="defaultMaterial042_cell025" geometry={nodes.defaultMaterial042_cell025.geometry} material={nodes.defaultMaterial042_cell025.material} position={[0.76, 1.51, 5.13]} rotation={[-2.28, -0.1, 2.2]} />
        <mesh name="defaultMaterial042_cell027" geometry={nodes.defaultMaterial042_cell027.geometry} material={nodes.defaultMaterial042_cell027.material} position={[0.76, 1.51, 5.13]} rotation={[0.21, -1.43, -0.61]} />
        <group name="defaultMaterial041_cell064" position={[3.09, 0.17, 5.85]} rotation={[0.47, -0.79, -2.53]}>
          <mesh name="defaultMaterial041_cell127" geometry={nodes.defaultMaterial041_cell127.geometry} material={nodes.defaultMaterial041_cell127.material} />
          <mesh name="defaultMaterial041_cell127_1" geometry={nodes.defaultMaterial041_cell127_1.geometry} material={nodes.defaultMaterial041_cell127_1.material} />
        </group>
        <group name="defaultMaterial041_cell065" position={[3.09, 0.17, 5.85]} rotation={[2.43, -1.22, -1.78]}>
          <mesh name="defaultMaterial041_cell128" geometry={nodes.defaultMaterial041_cell128.geometry} material={nodes.defaultMaterial041_cell128.material} />
          <mesh name="defaultMaterial041_cell128_1" geometry={nodes.defaultMaterial041_cell128_1.geometry} material={nodes.defaultMaterial041_cell128_1.material} />
        </group>
        <group name="defaultMaterial041_cell069" position={[3.09, 0.17, 5.85]} rotation={[-0.5, 0.43, -0.16]}>
          <mesh name="defaultMaterial041_cell100" geometry={nodes.defaultMaterial041_cell100.geometry} material={nodes.defaultMaterial041_cell100.material} />
          <mesh name="defaultMaterial041_cell100_1" geometry={nodes.defaultMaterial041_cell100_1.geometry} material={nodes.defaultMaterial041_cell100_1.material} />
        </group>
        <group name="defaultMaterial041_cell076" position={[3.09, 0.17, 5.85]} rotation={[-0.42, -1.03, 2.05]}>
          <mesh name="defaultMaterial041_cell101" geometry={nodes.defaultMaterial041_cell101.geometry} material={nodes.defaultMaterial041_cell101.material} />
          <mesh name="defaultMaterial041_cell101_1" geometry={nodes.defaultMaterial041_cell101_1.geometry} material={nodes.defaultMaterial041_cell101_1.material} />
        </group>
        <mesh name="defaultMaterial041_cell077" geometry={nodes.defaultMaterial041_cell077.geometry} material={nodes.defaultMaterial041_cell077.material} position={[3.09, 0.17, 5.85]} rotation={[-1.03, 0.28, -1.08]} />
        <mesh name="defaultMaterial041_cell078" geometry={nodes.defaultMaterial041_cell078.geometry} material={nodes.defaultMaterial041_cell078.material} position={[3.09, 0.17, 5.85]} rotation={[0.01, -0.73, 2.48]} />
        <group name="defaultMaterial041_cell082" position={[3.09, 0.17, 5.85]} rotation={[-0.89, -0.87, 2.64]}>
          <mesh name="defaultMaterial041_cell105" geometry={nodes.defaultMaterial041_cell105.geometry} material={nodes.defaultMaterial041_cell105.material} />
          <mesh name="defaultMaterial041_cell105_1" geometry={nodes.defaultMaterial041_cell105_1.geometry} material={nodes.defaultMaterial041_cell105_1.material} />
        </group>
        <mesh name="defaultMaterial041_cell090" geometry={nodes.defaultMaterial041_cell090.geometry} material={nodes.defaultMaterial041_cell090.material} position={[3.09, 0.17, 5.85]} rotation={[3.06, 0.86, 1.99]} />
        <group name="defaultMaterial041_cell099" position={[3.09, 0.17, 5.85]} rotation={[0.77, 1.24, 0.37]}>
          <mesh name="defaultMaterial041_cell107_1" geometry={nodes.defaultMaterial041_cell107_1.geometry} material={nodes.defaultMaterial041_cell107_1.material} />
          <mesh name="defaultMaterial041_cell107_2" geometry={nodes.defaultMaterial041_cell107_2.geometry} material={nodes.defaultMaterial041_cell107_2.material} />
        </group>
        <group name="defaultMaterial041_cell106" position={[3.09, 0.17, 5.85]} rotation={[-0.94, 0.04, -2.75]}>
          <mesh name="defaultMaterial041_cell108" geometry={nodes.defaultMaterial041_cell108.geometry} material={nodes.defaultMaterial041_cell108.material} />
          <mesh name="defaultMaterial041_cell108_1" geometry={nodes.defaultMaterial041_cell108_1.geometry} material={nodes.defaultMaterial041_cell108_1.material} />
        </group>
        <group name="defaultMaterial041_cell107" position={[3.09, 0.17, 5.85]} rotation={[2.27, 0.12, 0.12]}>
          <mesh name="defaultMaterial041_cell109_1" geometry={nodes.defaultMaterial041_cell109_1.geometry} material={nodes.defaultMaterial041_cell109_1.material} />
          <mesh name="defaultMaterial041_cell109_2" geometry={nodes.defaultMaterial041_cell109_2.geometry} material={nodes.defaultMaterial041_cell109_2.material} />
        </group>
        <mesh name="defaultMaterial041_cell109" geometry={nodes.defaultMaterial041_cell109.geometry} material={nodes.defaultMaterial041_cell109.material} position={[3.09, 0.17, 5.85]} rotation={[-2.89, 1.34, -1.01]} />
        <mesh name="defaultMaterial041_cell111" geometry={nodes.defaultMaterial041_cell111.geometry} material={nodes.defaultMaterial041_cell111.material} position={[3.09, 0.17, 5.85]} rotation={[3.07, 0.59, -1.35]} />
        <group name="defaultMaterial041_cell071" position={[3.09, 0.17, 5.85]} rotation={[2.31, 1.13, 2.56]}>
          <mesh name="defaultMaterial041_cell112" geometry={nodes.defaultMaterial041_cell112.geometry} material={nodes.defaultMaterial041_cell112.material} />
          <mesh name="defaultMaterial041_cell112_1" geometry={nodes.defaultMaterial041_cell112_1.geometry} material={nodes.defaultMaterial041_cell112_1.material} />
        </group>
        <group name="defaultMaterial041_cell074" position={[3.09, 0.17, 5.85]} rotation={[0.56, -1, 0.32]}>
          <mesh name="defaultMaterial041_cell113" geometry={nodes.defaultMaterial041_cell113.geometry} material={nodes.defaultMaterial041_cell113.material} />
          <mesh name="defaultMaterial041_cell113_1" geometry={nodes.defaultMaterial041_cell113_1.geometry} material={nodes.defaultMaterial041_cell113_1.material} />
        </group>
        <group name="defaultMaterial041_cell081" position={[3.09, 0.17, 5.85]} rotation={[-0.55, -0.1, 1.3]}>
          <mesh name="defaultMaterial041_cell114" geometry={nodes.defaultMaterial041_cell114.geometry} material={nodes.defaultMaterial041_cell114.material} />
          <mesh name="defaultMaterial041_cell114_1" geometry={nodes.defaultMaterial041_cell114_1.geometry} material={nodes.defaultMaterial041_cell114_1.material} />
        </group>
        <group name="defaultMaterial041_cell083" position={[3.09, 0.17, 5.85]} rotation={[-0.79, -0.4, -0.4]}>
          <mesh name="defaultMaterial041_cell115" geometry={nodes.defaultMaterial041_cell115.geometry} material={nodes.defaultMaterial041_cell115.material} />
          <mesh name="defaultMaterial041_cell115_1" geometry={nodes.defaultMaterial041_cell115_1.geometry} material={nodes.defaultMaterial041_cell115_1.material} />
        </group>
        <group name="defaultMaterial041_cell084" position={[3.09, 0.17, 5.85]} rotation={[-1.64, 0.28, -0.52]}>
          <mesh name="defaultMaterial041_cell116" geometry={nodes.defaultMaterial041_cell116.geometry} material={nodes.defaultMaterial041_cell116.material} />
          <mesh name="defaultMaterial041_cell116_1" geometry={nodes.defaultMaterial041_cell116_1.geometry} material={nodes.defaultMaterial041_cell116_1.material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/blendAnim.glb')
