
import * as THREE from 'three'
import React, { useRef } from 'react'
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
    defaultMaterial002_cell001: THREE.Mesh
    defaultMaterial002_cell002: THREE.Mesh
    defaultMaterial002_cell005: THREE.Mesh
    defaultMaterial002_cell008: THREE.Mesh
    defaultMaterial002_cell011: THREE.Mesh
    defaultMaterial002_cell012: THREE.Mesh
    defaultMaterial002_cell017: THREE.Mesh
    defaultMaterial002_cell019: THREE.Mesh
    defaultMaterial002_cell020: THREE.Mesh
    defaultMaterial002_cell024: THREE.Mesh
    defaultMaterial002_cell025: THREE.Mesh
    defaultMaterial002_cell030: THREE.Mesh
    defaultMaterial002_cell031: THREE.Mesh
    defaultMaterial002_cell033: THREE.Mesh
    defaultMaterial002_cell034: THREE.Mesh
    defaultMaterial002_cell035: THREE.Mesh
    defaultMaterial002_cell037: THREE.Mesh
    defaultMaterial002_cell039: THREE.Mesh
    defaultMaterial002_cell040: THREE.Mesh
    defaultMaterial002_cell041: THREE.Mesh
    defaultMaterial002_cell042: THREE.Mesh
    defaultMaterial002_cell043: THREE.Mesh
    defaultMaterial002_cell044: THREE.Mesh
    defaultMaterial002_cell045: THREE.Mesh
    defaultMaterial002_cell049: THREE.Mesh
    defaultMaterial002_cell051: THREE.Mesh
    defaultMaterial002_cell053: THREE.Mesh
    defaultMaterial002_cell056: THREE.Mesh
    defaultMaterial002_cell057: THREE.Mesh
    defaultMaterial002_cell058: THREE.Mesh
    defaultMaterial002_cell059: THREE.Mesh
    defaultMaterial002_cell061: THREE.Mesh
    defaultMaterial002_cell068: THREE.Mesh
    defaultMaterial002_cell069: THREE.Mesh
    defaultMaterial002_cell071: THREE.Mesh
    defaultMaterial002_cell072: THREE.Mesh
    defaultMaterial002_cell074: THREE.Mesh
    defaultMaterial002_cell075: THREE.Mesh
    defaultMaterial002_cell077: THREE.Mesh
    defaultMaterial002_cell080: THREE.Mesh
    defaultMaterial002_cell082: THREE.Mesh
    defaultMaterial002_cell083: THREE.Mesh
    defaultMaterial002_cell086: THREE.Mesh
    defaultMaterial002_cell088: THREE.Mesh
    defaultMaterial002_cell090: THREE.Mesh
    defaultMaterial002_cell091: THREE.Mesh
    defaultMaterial002_cell092: THREE.Mesh
    defaultMaterial002_cell096: THREE.Mesh
    defaultMaterial002_cell097: THREE.Mesh
    defaultMaterial002_cell103: THREE.Mesh
    defaultMaterial002_cell107: THREE.Mesh
    defaultMaterial002_cell112: THREE.Mesh
    defaultMaterial002_cell123: THREE.Mesh
    defaultMaterial002_cell125: THREE.Mesh
    defaultMaterial002_cell128: THREE.Mesh
    defaultMaterial002_cell130: THREE.Mesh
    defaultMaterial002_cell144: THREE.Mesh
    defaultMaterial002_cell151: THREE.Mesh
    defaultMaterial002_cell155: THREE.Mesh
    defaultMaterial002_cell163: THREE.Mesh
    defaultMaterial002_cell168: THREE.Mesh
    defaultMaterial002_cell169: THREE.Mesh
    defaultMaterial002_cell183: THREE.Mesh
    defaultMaterial002_cell185: THREE.Mesh
    defaultMaterial002_cell186: THREE.Mesh
    defaultMaterial002_cell189: THREE.Mesh
    defaultMaterial002_cell192: THREE.Mesh
    defaultMaterial002_cell193: THREE.Mesh
    defaultMaterial002_cell196: THREE.Mesh
    defaultMaterial002_cell197: THREE.Mesh
    defaultMaterial002_cell198: THREE.Mesh
    defaultMaterial002_cell199: THREE.Mesh
    defaultMaterial002_cell200: THREE.Mesh
    defaultMaterial002_cell203: THREE.Mesh
    defaultMaterial002_cell205: THREE.Mesh
    defaultMaterial002_cell210: THREE.Mesh
    defaultMaterial002_cell213: THREE.Mesh
    defaultMaterial002_cell214: THREE.Mesh
    defaultMaterial002_cell215: THREE.Mesh
    defaultMaterial002_cell216: THREE.Mesh
    defaultMaterial002_cell220: THREE.Mesh
    defaultMaterial002_cell222: THREE.Mesh
    defaultMaterial002_cell223: THREE.Mesh
    defaultMaterial002_cell227: THREE.Mesh
    defaultMaterial002_cell228: THREE.Mesh
    defaultMaterial002_cell229: THREE.Mesh
    defaultMaterial002_cell231: THREE.Mesh
    defaultMaterial002_cell235: THREE.Mesh
    defaultMaterial002_cell238: THREE.Mesh
    defaultMaterial002_cell240: THREE.Mesh
    defaultMaterial002_cell248: THREE.Mesh
    defaultMaterial002_cell256: THREE.Mesh
    defaultMaterial002_cell003: THREE.Mesh
    defaultMaterial002_cell006: THREE.Mesh
    defaultMaterial002_cell009: THREE.Mesh
    defaultMaterial002_cell010: THREE.Mesh
    defaultMaterial002_cell013: THREE.Mesh
    defaultMaterial002_cell014: THREE.Mesh
    defaultMaterial002_cell015: THREE.Mesh
    defaultMaterial002_cell016: THREE.Mesh
    defaultMaterial002_cell018: THREE.Mesh
    defaultMaterial002_cell021: THREE.Mesh
    defaultMaterial041_cell: THREE.Mesh
    defaultMaterial041_cell001: THREE.Mesh
    defaultMaterial041_cell001_1: THREE.Mesh
    defaultMaterial041_cell001_2: THREE.Mesh
    defaultMaterial041_cell002_1: THREE.Mesh
    defaultMaterial041_cell002_2: THREE.Mesh
    defaultMaterial041_cell003_1: THREE.Mesh
    defaultMaterial041_cell003_2: THREE.Mesh
    defaultMaterial041_cell008: THREE.Mesh
    defaultMaterial041_cell005_1: THREE.Mesh
    defaultMaterial041_cell005_2: THREE.Mesh
    defaultMaterial041_cell013: THREE.Mesh
    defaultMaterial041_cell007_1: THREE.Mesh
    defaultMaterial041_cell007_2: THREE.Mesh
    defaultMaterial041_cell008_1: THREE.Mesh
    defaultMaterial041_cell008_2: THREE.Mesh
    defaultMaterial041_cell009_1: THREE.Mesh
    defaultMaterial041_cell009_2: THREE.Mesh
    defaultMaterial041_cell010_1: THREE.Mesh
    defaultMaterial041_cell010_2: THREE.Mesh
    defaultMaterial041_cell011_1: THREE.Mesh
    defaultMaterial041_cell011_2: THREE.Mesh
    defaultMaterial041_cell012_1: THREE.Mesh
    defaultMaterial041_cell012_2: THREE.Mesh
    defaultMaterial041_cell014_1: THREE.Mesh
    defaultMaterial041_cell014_2: THREE.Mesh
    defaultMaterial041_cell015_1: THREE.Mesh
    defaultMaterial041_cell015_2: THREE.Mesh
    defaultMaterial041_cell016_1: THREE.Mesh
    defaultMaterial041_cell016_2: THREE.Mesh
    defaultMaterial041_cell017_1: THREE.Mesh
    defaultMaterial041_cell017_2: THREE.Mesh
    defaultMaterial041_cell018_1: THREE.Mesh
    defaultMaterial041_cell018_2: THREE.Mesh
    defaultMaterial041_cell032: THREE.Mesh
    defaultMaterial041_cell033: THREE.Mesh
    defaultMaterial041_cell021_1: THREE.Mesh
    defaultMaterial041_cell021_2: THREE.Mesh
    defaultMaterial041_cell022_1: THREE.Mesh
    defaultMaterial041_cell022_2: THREE.Mesh
    defaultMaterial041_cell023_1: THREE.Mesh
    defaultMaterial041_cell023_2: THREE.Mesh
    defaultMaterial041_cell043: THREE.Mesh
    defaultMaterial041_cell025_1: THREE.Mesh
    defaultMaterial041_cell025_2: THREE.Mesh
    defaultMaterial041_cell046: THREE.Mesh
    defaultMaterial041_cell048: THREE.Mesh
    defaultMaterial041_cell049: THREE.Mesh
    defaultMaterial041_cell029_1: THREE.Mesh
    defaultMaterial041_cell029_2: THREE.Mesh
    defaultMaterial041_cell030_1: THREE.Mesh
    defaultMaterial041_cell030_2: THREE.Mesh
    defaultMaterial041_cell054: THREE.Mesh
    defaultMaterial041_cell032_1: THREE.Mesh
    defaultMaterial041_cell032_2: THREE.Mesh
    defaultMaterial041_cell033_1: THREE.Mesh
    defaultMaterial041_cell033_2: THREE.Mesh
    defaultMaterial041_cell034_1: THREE.Mesh
    defaultMaterial041_cell034_2: THREE.Mesh
    defaultMaterial041_cell062: THREE.Mesh
    defaultMaterial041_cell036_1: THREE.Mesh
    defaultMaterial041_cell036_2: THREE.Mesh
    defaultMaterial041_cell037_1: THREE.Mesh
    defaultMaterial041_cell037_2: THREE.Mesh
    defaultMaterial041_cell038_1: THREE.Mesh
    defaultMaterial041_cell038_2: THREE.Mesh
    defaultMaterial041_cell039_1: THREE.Mesh
    defaultMaterial041_cell039_2: THREE.Mesh
    defaultMaterial041_cell075: THREE.Mesh
    defaultMaterial041_cell041: THREE.Mesh
    defaultMaterial041_cell041_1: THREE.Mesh
    defaultMaterial041_cell042_1: THREE.Mesh
    defaultMaterial041_cell042_2: THREE.Mesh
    defaultMaterial041_cell043_1: THREE.Mesh
    defaultMaterial041_cell043_2: THREE.Mesh
    defaultMaterial041_cell044_1: THREE.Mesh
    defaultMaterial041_cell044_2: THREE.Mesh
    defaultMaterial041_cell092: THREE.Mesh
    defaultMaterial041_cell093: THREE.Mesh
    defaultMaterial041_cell047: THREE.Mesh
    defaultMaterial041_cell047_1: THREE.Mesh
    defaultMaterial041_cell096: THREE.Mesh
    defaultMaterial041_cell097: THREE.Mesh
    defaultMaterial041_cell050_1: THREE.Mesh
    defaultMaterial041_cell050_2: THREE.Mesh
    defaultMaterial041_cell101: THREE.Mesh
    defaultMaterial041_cell052: THREE.Mesh
    defaultMaterial041_cell052_1: THREE.Mesh
    defaultMaterial041_cell053: THREE.Mesh
    defaultMaterial041_cell053_1: THREE.Mesh
    defaultMaterial041_cell105: THREE.Mesh
    defaultMaterial041_cell055_1: THREE.Mesh
    defaultMaterial041_cell055_2: THREE.Mesh
    defaultMaterial041_cell119: THREE.Mesh
    defaultMaterial041_cell123: THREE.Mesh
    defaultMaterial041_cell058: THREE.Mesh
    defaultMaterial041_cell058_1: THREE.Mesh
    defaultMaterial041_cell127: THREE.Mesh
    defaultMaterial041_cell128: THREE.Mesh
    defaultMaterial041_cell061: THREE.Mesh
    defaultMaterial041_cell061_1: THREE.Mesh
    defaultMaterial041_cell131: THREE.Mesh
    defaultMaterial041_cell135: THREE.Mesh
    defaultMaterial041_cell136: THREE.Mesh
    defaultMaterial041_cell065: THREE.Mesh
    defaultMaterial041_cell065_1: THREE.Mesh
    defaultMaterial041_cell066_1: THREE.Mesh
    defaultMaterial041_cell066_2: THREE.Mesh
    defaultMaterial041_cell067_1: THREE.Mesh
    defaultMaterial041_cell067_2: THREE.Mesh
    defaultMaterial041_cell068: THREE.Mesh
    defaultMaterial041_cell068_1: THREE.Mesh
    defaultMaterial041_cell069: THREE.Mesh
    defaultMaterial041_cell069_1: THREE.Mesh
    defaultMaterial041_cell070: THREE.Mesh
    defaultMaterial041_cell070_1: THREE.Mesh
    defaultMaterial041_cell151: THREE.Mesh
    defaultMaterial041_cell072_1: THREE.Mesh
    defaultMaterial041_cell072_2: THREE.Mesh
    defaultMaterial041_cell006: THREE.Mesh
    defaultMaterial041_cell074: THREE.Mesh
    defaultMaterial041_cell074_1: THREE.Mesh
    defaultMaterial041_cell009: THREE.Mesh
    defaultMaterial041_cell010: THREE.Mesh
    defaultMaterial041_cell011: THREE.Mesh
    defaultMaterial041_cell078: THREE.Mesh
    defaultMaterial041_cell078_1: THREE.Mesh
    defaultMaterial041_cell079_1: THREE.Mesh
    defaultMaterial041_cell079_2: THREE.Mesh
    defaultMaterial041_cell080_1: THREE.Mesh
    defaultMaterial041_cell080_2: THREE.Mesh
    defaultMaterial041_cell081: THREE.Mesh
    defaultMaterial041_cell081_1: THREE.Mesh
    defaultMaterial041_cell030: THREE.Mesh
    defaultMaterial041_cell035: THREE.Mesh
    defaultMaterial041_cell036: THREE.Mesh
    defaultMaterial041_cell086_1: THREE.Mesh
    defaultMaterial041_cell086_2: THREE.Mesh
    defaultMaterial041_cell087_1: THREE.Mesh
    defaultMaterial041_cell087_2: THREE.Mesh
  }
  materials: {
    initialShadingGroup: THREE.MeshStandardMaterial
    blinn3SG: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[];
}

type ActionName =
  | 'Sketchfab_model'
  | 'Collada visual scene group'
  | 'blackpieces_mesh'
  | 'defaultMaterial.001'
  | 'defaultMaterial.002'
  | 'defaultMaterial.003'
  | 'defaultMaterial.013'
  | 'defaultMaterial.014'
  | 'defaultMaterial.015'
  | 'defaultMaterial.016'
  | 'defaultMaterial.017'
  | 'defaultMaterial.018'
  | 'chessboard_mesh'
  | 'defaultMaterial.011'
  | 'defaultMaterial.012'
  | 'whitepieces_mesh'
  | 'defaultMaterial.004'
  | 'defaultMaterial.005'
  | 'defaultMaterial.006'
  | 'defaultMaterial.007'
  | 'defaultMaterial.008'
  | 'defaultMaterial.019'
  | 'defaultMaterial.020'
  | 'defaultMaterial.034'
  | 'defaultMaterial.035Action.001'
  | 'defaultMaterial.009Action'
  | 'defaultMaterial.036'
  | 'defaultMaterial.037'
  | 'defaultMaterial.038'
  | 'defaultMaterial.039'
  | 'defaultMaterial.040'
  | 'defaultMaterial.041'
  | 'defaultMaterial.042'
  | 'defaultMaterial.043'
  | 'defaultMaterial.044'
  | 'defaultMaterial.045'
  | 'defaultMaterial.046'
  | 'defaultMaterial.048'
  | 'defaultMaterial.049'
  | 'defaultMaterial.050'
  | 'defaultMaterial.051'
  | 'defaultMaterial.010'
  | 'defaultMaterial.033'
  | 'defaultMaterial.047'
  | 'defaultMaterial.052'
  | 'defaultMaterial.002_cell.001'
  | 'defaultMaterial.002_cell.002'
  | 'defaultMaterial.002_cell.005'
  | 'defaultMaterial.002_cell.008'
  | 'defaultMaterial.002_cell.011'
  | 'defaultMaterial.002_cell.012'
  | 'defaultMaterial.002_cell.017'
  | 'defaultMaterial.002_cell.019'
  | 'defaultMaterial.002_cell.020'
  | 'defaultMaterial.002_cell.024'
  | 'defaultMaterial.002_cell.025'
  | 'defaultMaterial.002_cell.030'
  | 'defaultMaterial.002_cell.031'
  | 'defaultMaterial.002_cell.033'
  | 'defaultMaterial.002_cell.034'
  | 'defaultMaterial.002_cell.035'
  | 'defaultMaterial.002_cell.037'
  | 'defaultMaterial.002_cell.039'
  | 'defaultMaterial.002_cell.040'
  | 'defaultMaterial.002_cell.041'
  | 'defaultMaterial.002_cell.042'
  | 'defaultMaterial.002_cell.043'
  | 'defaultMaterial.002_cell.044'
  | 'defaultMaterial.002_cell.045'
  | 'defaultMaterial.002_cell.049'
  | 'defaultMaterial.002_cell.051'
  | 'defaultMaterial.002_cell.053'
  | 'defaultMaterial.002_cell.056'
  | 'defaultMaterial.002_cell.057'
  | 'defaultMaterial.002_cell.058'
  | 'defaultMaterial.002_cell.059'
  | 'defaultMaterial.002_cell.061'
  | 'defaultMaterial.002_cell.068'
  | 'defaultMaterial.002_cell.069'
  | 'defaultMaterial.002_cell.071'
  | 'defaultMaterial.002_cell.072'
  | 'defaultMaterial.002_cell.074'
  | 'defaultMaterial.002_cell.075'
  | 'defaultMaterial.002_cell.077'
  | 'defaultMaterial.002_cell.080'
  | 'defaultMaterial.002_cell.082'
  | 'defaultMaterial.002_cell.083'
  | 'defaultMaterial.002_cell.086'
  | 'defaultMaterial.002_cell.088'
  | 'defaultMaterial.002_cell.090'
  | 'defaultMaterial.002_cell.091'
  | 'defaultMaterial.002_cell.092'
  | 'defaultMaterial.002_cell.096'
  | 'defaultMaterial.002_cell.097'
  | 'defaultMaterial.002_cell.103'
  | 'defaultMaterial.002_cell.107'
  | 'defaultMaterial.002_cell.112'
  | 'defaultMaterial.002_cell.123'
  | 'defaultMaterial.002_cell.125'
  | 'defaultMaterial.002_cell.128'
  | 'defaultMaterial.002_cell.130'
  | 'defaultMaterial.002_cell.144'
  | 'defaultMaterial.002_cell.151'
  | 'defaultMaterial.002_cell.155'
  | 'defaultMaterial.002_cell.163'
  | 'defaultMaterial.002_cell.168'
  | 'defaultMaterial.002_cell.169'
  | 'defaultMaterial.002_cell.183'
  | 'defaultMaterial.002_cell.185'
  | 'defaultMaterial.002_cell.186'
  | 'defaultMaterial.002_cell.189'
  | 'defaultMaterial.002_cell.192'
  | 'defaultMaterial.002_cell.193'
  | 'defaultMaterial.002_cell.196'
  | 'defaultMaterial.002_cell.197'
  | 'defaultMaterial.002_cell.198'
  | 'defaultMaterial.002_cell.199'
  | 'defaultMaterial.002_cell.200'
  | 'defaultMaterial.002_cell.203'
  | 'defaultMaterial.002_cell.205'
  | 'defaultMaterial.002_cell.210'
  | 'defaultMaterial.002_cell.213'
  | 'defaultMaterial.002_cell.214'
  | 'defaultMaterial.002_cell.215'
  | 'defaultMaterial.002_cell.216'
  | 'defaultMaterial.002_cell.220'
  | 'defaultMaterial.002_cell.222'
  | 'defaultMaterial.002_cell.223'
  | 'defaultMaterial.002_cell.227'
  | 'defaultMaterial.002_cell.228'
  | 'defaultMaterial.002_cell.229'
  | 'defaultMaterial.002_cell.231'
  | 'defaultMaterial.002_cell.235'
  | 'defaultMaterial.002_cell.238'
  | 'defaultMaterial.002_cell.240'
  | 'defaultMaterial.002_cell.248'
  | 'defaultMaterial.002_cell.256'
  | 'defaultMaterial.002_cell.003'
  | 'defaultMaterial.002_cell.006'
  | 'defaultMaterial.002_cell.009'
  | 'defaultMaterial.002_cell.010'
  | 'defaultMaterial.002_cell.013'
  | 'defaultMaterial.002_cell.014'
  | 'defaultMaterial.002_cell.015'
  | 'defaultMaterial.002_cell.016'
  | 'defaultMaterial.002_cell.018'
  | 'defaultMaterial.002_cell.021'
  | 'defaultMaterial.002_cell.022'
  | 'defaultMaterial.041_cell'
  | 'defaultMaterial.041_cell.001'
  | 'defaultMaterial.041_cell.002'
  | 'defaultMaterial.041_cell.003'
  | 'defaultMaterial.041_cell.004'
  | 'defaultMaterial.041_cell.008'
  | 'defaultMaterial.041_cell.012'
  | 'defaultMaterial.041_cell.013'
  | 'defaultMaterial.041_cell.014'
  | 'defaultMaterial.041_cell.016'
  | 'defaultMaterial.041_cell.018'
  | 'defaultMaterial.041_cell.020'
  | 'defaultMaterial.041_cell.021'
  | 'defaultMaterial.041_cell.022'
  | 'defaultMaterial.041_cell.023'
  | 'defaultMaterial.041_cell.026'
  | 'defaultMaterial.041_cell.027'
  | 'defaultMaterial.041_cell.028'
  | 'defaultMaterial.041_cell.029'
  | 'defaultMaterial.041_cell.031'
  | 'defaultMaterial.041_cell.032'
  | 'defaultMaterial.041_cell.033'
  | 'defaultMaterial.041_cell.034'
  | 'defaultMaterial.041_cell.038'
  | 'defaultMaterial.041_cell.042'
  | 'defaultMaterial.041_cell.043'
  | 'defaultMaterial.041_cell.044'
  | 'defaultMaterial.041_cell.046'
  | 'defaultMaterial.041_cell.048'
  | 'defaultMaterial.041_cell.049'
  | 'defaultMaterial.041_cell.050'
  | 'defaultMaterial.041_cell.051'
  | 'defaultMaterial.041_cell.054'
  | 'defaultMaterial.041_cell.055'
  | 'defaultMaterial.041_cell.056'
  | 'defaultMaterial.041_cell.060'
  | 'defaultMaterial.041_cell.062'
  | 'defaultMaterial.041_cell.066'
  | 'defaultMaterial.041_cell.067'
  | 'defaultMaterial.041_cell.072'
  | 'defaultMaterial.041_cell.073'
  | 'defaultMaterial.041_cell.075'
  | 'defaultMaterial.041_cell.079'
  | 'defaultMaterial.041_cell.080'
  | 'defaultMaterial.041_cell.086'
  | 'defaultMaterial.041_cell.087'
  | 'defaultMaterial.041_cell.092'
  | 'defaultMaterial.041_cell.093'
  | 'defaultMaterial.041_cell.094'
  | 'defaultMaterial.041_cell.096'
  | 'defaultMaterial.041_cell.097'
  | 'defaultMaterial.041_cell.100'
  | 'defaultMaterial.041_cell.101'
  | 'defaultMaterial.041_cell.103'
  | 'defaultMaterial.041_cell.104'
  | 'defaultMaterial.041_cell.105'
  | 'defaultMaterial.041_cell.112'
  | 'defaultMaterial.041_cell.119'
  | 'defaultMaterial.041_cell.123'
  | 'defaultMaterial.041_cell.126'
  | 'defaultMaterial.041_cell.127'
  | 'defaultMaterial.041_cell.128'
  | 'defaultMaterial.041_cell.129'
  | 'defaultMaterial.041_cell.131'
  | 'defaultMaterial.041_cell.135'
  | 'defaultMaterial.041_cell.136'
  | 'defaultMaterial.041_cell.139'
  | 'defaultMaterial.041_cell.140'
  | 'defaultMaterial.041_cell.141'
  | 'defaultMaterial.041_cell.146'
  | 'defaultMaterial.041_cell.147'
  | 'defaultMaterial.041_cell.149'
  | 'defaultMaterial.041_cell.151'
  | 'defaultMaterial.041_cell.005'
  | 'defaultMaterial.041_cell.006'
  | 'defaultMaterial.041_cell.007'
  | 'defaultMaterial.041_cell.009'
  | 'defaultMaterial.041_cell.010'
  | 'defaultMaterial.041_cell.011'
  | 'defaultMaterial.041_cell.015'
  | 'defaultMaterial.041_cell.017'
  | 'defaultMaterial.041_cell.019'
  | 'defaultMaterial.041_cell.024'
  | 'defaultMaterial.041_cell.025'
  | 'defaultMaterial.041_cell.030'
  | 'defaultMaterial.041_cell.035'
  | 'defaultMaterial.041_cell.036'
  | 'defaultMaterial.041_cell.037'
  | 'defaultMaterial.041_cell.039'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export default function ChessBoard(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/pawnAnimation.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
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
        <group name="defaultMaterial002_cell022" position={[-1.6, 0.44, -1.35]} />
        <group name="defaultMaterial041_cell023" position={[2.69, 0.38, 4.23]} />
        <group name="defaultMaterial041_cell025" position={[2.66, 1, 4.89]} />
        <mesh name="defaultMaterial002_cell001" geometry={nodes.defaultMaterial002_cell001.geometry} material={nodes.defaultMaterial002_cell001.material} position={[-0.77, 0.9, -1.15]} />
        <mesh name="defaultMaterial002_cell002" geometry={nodes.defaultMaterial002_cell002.geometry} material={nodes.defaultMaterial002_cell002.material} position={[-1.48, 0.73, -1.35]} />
        <mesh name="defaultMaterial002_cell005" geometry={nodes.defaultMaterial002_cell005.geometry} material={nodes.defaultMaterial002_cell005.material} position={[-1, 1.9, -0.22]} />
        <mesh name="defaultMaterial002_cell008" geometry={nodes.defaultMaterial002_cell008.geometry} material={nodes.defaultMaterial002_cell008.material} position={[-0.84, 1.65, -1.2]} />
        <mesh name="defaultMaterial002_cell011" geometry={nodes.defaultMaterial002_cell011.geometry} material={nodes.defaultMaterial002_cell011.material} position={[-0.89, 0.01, -0.1]} />
        <mesh name="defaultMaterial002_cell012" geometry={nodes.defaultMaterial002_cell012.geometry} material={nodes.defaultMaterial002_cell012.material} position={[-1.34, 0.33, -0.24]} />
        <mesh name="defaultMaterial002_cell017" geometry={nodes.defaultMaterial002_cell017.geometry} material={nodes.defaultMaterial002_cell017.material} position={[-1.26, 1.32, -0.4]} />
        <mesh name="defaultMaterial002_cell019" geometry={nodes.defaultMaterial002_cell019.geometry} material={nodes.defaultMaterial002_cell019.material} position={[-0.75, 1.78, -1.36]} />
        <mesh name="defaultMaterial002_cell020" geometry={nodes.defaultMaterial002_cell020.geometry} material={nodes.defaultMaterial002_cell020.material} position={[-0.49, 0.38, -1.42]} />
        <mesh name="defaultMaterial002_cell024" geometry={nodes.defaultMaterial002_cell024.geometry} material={nodes.defaultMaterial002_cell024.material} position={[-1.22, 0.76, -0.52]} />
        <mesh name="defaultMaterial002_cell025" geometry={nodes.defaultMaterial002_cell025.geometry} material={nodes.defaultMaterial002_cell025.material} position={[-1.72, 0.09, -0.63]} />
        <mesh name="defaultMaterial002_cell030" geometry={nodes.defaultMaterial002_cell030.geometry} material={nodes.defaultMaterial002_cell030.material} position={[-0.9, 0.56, -1.71]} />
        <mesh name="defaultMaterial002_cell031" geometry={nodes.defaultMaterial002_cell031.geometry} material={nodes.defaultMaterial002_cell031.material} position={[-0.92, 0.9, -1.23]} />
        <mesh name="defaultMaterial002_cell033" geometry={nodes.defaultMaterial002_cell033.geometry} material={nodes.defaultMaterial002_cell033.material} position={[-0.78, 0.92, -1.35]} />
        <mesh name="defaultMaterial002_cell034" geometry={nodes.defaultMaterial002_cell034.geometry} material={nodes.defaultMaterial002_cell034.material} position={[-1.37, 0.92, -0.79]} />
        <mesh name="defaultMaterial002_cell035" geometry={nodes.defaultMaterial002_cell035.geometry} material={nodes.defaultMaterial002_cell035.material} position={[-1.58, 0.03, -0.86]} />
        <mesh name="defaultMaterial002_cell037" geometry={nodes.defaultMaterial002_cell037.geometry} material={nodes.defaultMaterial002_cell037.material} position={[-0.89, 1.44, -0.34]} />
        <mesh name="defaultMaterial002_cell039" geometry={nodes.defaultMaterial002_cell039.geometry} material={nodes.defaultMaterial002_cell039.material} position={[-0.36, 0.09, -0.69]} />
        <mesh name="defaultMaterial002_cell040" geometry={nodes.defaultMaterial002_cell040.geometry} material={nodes.defaultMaterial002_cell040.material} position={[-0.23, 0.33, -0.64]} />
        <mesh name="defaultMaterial002_cell041" geometry={nodes.defaultMaterial002_cell041.geometry} material={nodes.defaultMaterial002_cell041.material} position={[-1.44, 1.42, -1.44]} />
        <mesh name="defaultMaterial002_cell042" geometry={nodes.defaultMaterial002_cell042.geometry} material={nodes.defaultMaterial002_cell042.material} position={[-0.81, 0.02, -0.14]} />
        <mesh name="defaultMaterial002_cell043" geometry={nodes.defaultMaterial002_cell043.geometry} material={nodes.defaultMaterial002_cell043.material} position={[-0.21, 0.01, -1.31]} />
        <mesh name="defaultMaterial002_cell044" geometry={nodes.defaultMaterial002_cell044.geometry} material={nodes.defaultMaterial002_cell044.material} position={[-0.37, 0.7, -0.91]} />
        <mesh name="defaultMaterial002_cell045" geometry={nodes.defaultMaterial002_cell045.geometry} material={nodes.defaultMaterial002_cell045.material} position={[-0.51, 0.59, -0.6]} />
        <mesh name="defaultMaterial002_cell049" geometry={nodes.defaultMaterial002_cell049.geometry} material={nodes.defaultMaterial002_cell049.material} position={[-0.9, 0.15, -1.42]} />
        <mesh name="defaultMaterial002_cell051" geometry={nodes.defaultMaterial002_cell051.geometry} material={nodes.defaultMaterial002_cell051.material} position={[-0.67, 0.27, -0.22]} />
        <mesh name="defaultMaterial002_cell053" geometry={nodes.defaultMaterial002_cell053.geometry} material={nodes.defaultMaterial002_cell053.material} position={[-1.23, 0.37, -1.12]} />
        <mesh name="defaultMaterial002_cell056" geometry={nodes.defaultMaterial002_cell056.geometry} material={nodes.defaultMaterial002_cell056.material} position={[-1.51, 0.13, -1.44]} />
        <mesh name="defaultMaterial002_cell057" geometry={nodes.defaultMaterial002_cell057.geometry} material={nodes.defaultMaterial002_cell057.material} position={[-1.19, 1.72, -1.28]} />
        <mesh name="defaultMaterial002_cell058" geometry={nodes.defaultMaterial002_cell058.geometry} material={nodes.defaultMaterial002_cell058.material} position={[-0.47, 0.77, -0.88]} />
        <mesh name="defaultMaterial002_cell059" geometry={nodes.defaultMaterial002_cell059.geometry} material={nodes.defaultMaterial002_cell059.material} position={[-1.06, 0.69, -0.33]} />
        <mesh name="defaultMaterial002_cell061" geometry={nodes.defaultMaterial002_cell061.geometry} material={nodes.defaultMaterial002_cell061.material} position={[-0.91, 1.91, -0.28]} />
        <mesh name="defaultMaterial002_cell068" geometry={nodes.defaultMaterial002_cell068.geometry} material={nodes.defaultMaterial002_cell068.material} position={[-0.67, 1.19, -1.23]} />
        <mesh name="defaultMaterial002_cell069" geometry={nodes.defaultMaterial002_cell069.geometry} material={nodes.defaultMaterial002_cell069.material} position={[-1.23, 0.07, -0.8]} />
        <mesh name="defaultMaterial002_cell071" geometry={nodes.defaultMaterial002_cell071.geometry} material={nodes.defaultMaterial002_cell071.material} position={[-0.95, 0.34, -0.14]} />
        <mesh name="defaultMaterial002_cell072" geometry={nodes.defaultMaterial002_cell072.geometry} material={nodes.defaultMaterial002_cell072.material} position={[-0.43, 0.49, -0.66]} />
        <mesh name="defaultMaterial002_cell074" geometry={nodes.defaultMaterial002_cell074.geometry} material={nodes.defaultMaterial002_cell074.material} position={[-1.02, 1.48, -1.17]} />
        <mesh name="defaultMaterial002_cell075" geometry={nodes.defaultMaterial002_cell075.geometry} material={nodes.defaultMaterial002_cell075.material} position={[-0.29, 0.09, -0.47]} />
        <mesh name="defaultMaterial002_cell077" geometry={nodes.defaultMaterial002_cell077.geometry} material={nodes.defaultMaterial002_cell077.material} position={[-1.87, 0.3, -1.25]} />
        <mesh name="defaultMaterial002_cell080" geometry={nodes.defaultMaterial002_cell080.geometry} material={nodes.defaultMaterial002_cell080.material} position={[-0.78, 0.02, -1.85]} />
        <mesh name="defaultMaterial002_cell082" geometry={nodes.defaultMaterial002_cell082.geometry} material={nodes.defaultMaterial002_cell082.material} position={[-0.73, 1.01, -1.18]} />
        <mesh name="defaultMaterial002_cell083" geometry={nodes.defaultMaterial002_cell083.geometry} material={nodes.defaultMaterial002_cell083.material} position={[-0.82, 0.24, -0.99]} />
        <mesh name="defaultMaterial002_cell086" geometry={nodes.defaultMaterial002_cell086.geometry} material={nodes.defaultMaterial002_cell086.material} position={[-0.52, 1.42, -1.46]} />
        <mesh name="defaultMaterial002_cell088" geometry={nodes.defaultMaterial002_cell088.geometry} material={nodes.defaultMaterial002_cell088.material} position={[-1.15, 0.89, -1.26]} />
        <mesh name="defaultMaterial002_cell090" geometry={nodes.defaultMaterial002_cell090.geometry} material={nodes.defaultMaterial002_cell090.material} position={[-0.65, 1.47, -1.62]} />
        <mesh name="defaultMaterial002_cell091" geometry={nodes.defaultMaterial002_cell091.geometry} material={nodes.defaultMaterial002_cell091.material} position={[-1.73, 0.07, -1.28]} />
        <mesh name="defaultMaterial002_cell092" geometry={nodes.defaultMaterial002_cell092.geometry} material={nodes.defaultMaterial002_cell092.material} position={[-0.74, 1.41, -1.18]} />
        <mesh name="defaultMaterial002_cell096" geometry={nodes.defaultMaterial002_cell096.geometry} material={nodes.defaultMaterial002_cell096.material} position={[-1.33, 0.09, -1.19]} />
        <mesh name="defaultMaterial002_cell097" geometry={nodes.defaultMaterial002_cell097.geometry} material={nodes.defaultMaterial002_cell097.material} position={[-0.46, 0.66, -0.68]} />
        <mesh name="defaultMaterial002_cell103" geometry={nodes.defaultMaterial002_cell103.geometry} material={nodes.defaultMaterial002_cell103.material} position={[-1.1, 0.01, -0.54]} />
        <mesh name="defaultMaterial002_cell107" geometry={nodes.defaultMaterial002_cell107.geometry} material={nodes.defaultMaterial002_cell107.material} position={[-0.12, 0.24, -1.19]} />
        <mesh name="defaultMaterial002_cell112" geometry={nodes.defaultMaterial002_cell112.geometry} material={nodes.defaultMaterial002_cell112.material} position={[-1.59, 0.16, -1.67]} />
        <mesh name="defaultMaterial002_cell123" geometry={nodes.defaultMaterial002_cell123.geometry} material={nodes.defaultMaterial002_cell123.material} position={[-1.1, 0.04, -1.85]} />
        <mesh name="defaultMaterial002_cell125" geometry={nodes.defaultMaterial002_cell125.geometry} material={nodes.defaultMaterial002_cell125.material} position={[-1.13, 0.37, -0.66]} />
        <mesh name="defaultMaterial002_cell128" geometry={nodes.defaultMaterial002_cell128.geometry} material={nodes.defaultMaterial002_cell128.material} position={[-0.85, 0, -0.44]} />
        <mesh name="defaultMaterial002_cell130" geometry={nodes.defaultMaterial002_cell130.geometry} material={nodes.defaultMaterial002_cell130.material} position={[-1.5, 0.77, -0.68]} />
        <mesh name="defaultMaterial002_cell144" geometry={nodes.defaultMaterial002_cell144.geometry} material={nodes.defaultMaterial002_cell144.material} position={[-1.32, 1.07, -0.96]} />
        <mesh name="defaultMaterial002_cell151" geometry={nodes.defaultMaterial002_cell151.geometry} material={nodes.defaultMaterial002_cell151.material} position={[-1.63, 0.74, -0.8]} />
        <mesh name="defaultMaterial002_cell155" geometry={nodes.defaultMaterial002_cell155.geometry} material={nodes.defaultMaterial002_cell155.material} position={[-0.88, 1.35, -1.67]} />
        <mesh name="defaultMaterial002_cell163" geometry={nodes.defaultMaterial002_cell163.geometry} material={nodes.defaultMaterial002_cell163.material} position={[-0.3, 0.75, -1.17]} />
        <mesh name="defaultMaterial002_cell168" geometry={nodes.defaultMaterial002_cell168.geometry} material={nodes.defaultMaterial002_cell168.material} position={[-1.32, 1.69, -1.52]} />
        <mesh name="defaultMaterial002_cell169" geometry={nodes.defaultMaterial002_cell169.geometry} material={nodes.defaultMaterial002_cell169.material} position={[-1.34, 0.19, -1.88]} />
        <mesh name="defaultMaterial002_cell183" geometry={nodes.defaultMaterial002_cell183.geometry} material={nodes.defaultMaterial002_cell183.material} position={[-1.27, 1.13, -1.62]} />
        <mesh name="defaultMaterial002_cell185" geometry={nodes.defaultMaterial002_cell185.geometry} material={nodes.defaultMaterial002_cell185.material} position={[-0.01, 0.28, -1.01]} />
        <mesh name="defaultMaterial002_cell186" geometry={nodes.defaultMaterial002_cell186.geometry} material={nodes.defaultMaterial002_cell186.material} position={[-0.63, 0.75, -0.56]} />
        <mesh name="defaultMaterial002_cell189" geometry={nodes.defaultMaterial002_cell189.geometry} material={nodes.defaultMaterial002_cell189.material} position={[-1.43, 0.33, -1.84]} />
        <mesh name="defaultMaterial002_cell192" geometry={nodes.defaultMaterial002_cell192.geometry} material={nodes.defaultMaterial002_cell192.material} position={[-1.49, 0.09, -0.42]} />
        <mesh name="defaultMaterial002_cell193" geometry={nodes.defaultMaterial002_cell193.geometry} material={nodes.defaultMaterial002_cell193.material} position={[-1.71, 0.02, -0.49]} />
        <mesh name="defaultMaterial002_cell196" geometry={nodes.defaultMaterial002_cell196.geometry} material={nodes.defaultMaterial002_cell196.material} position={[-1.17, 1.3, -0.35]} />
        <mesh name="defaultMaterial002_cell197" geometry={nodes.defaultMaterial002_cell197.geometry} material={nodes.defaultMaterial002_cell197.material} position={[-0.93, 1.22, -1.17]} />
        <mesh name="defaultMaterial002_cell198" geometry={nodes.defaultMaterial002_cell198.geometry} material={nodes.defaultMaterial002_cell198.material} position={[-1.18, 1.15, -1.22]} />
        <mesh name="defaultMaterial002_cell199" geometry={nodes.defaultMaterial002_cell199.geometry} material={nodes.defaultMaterial002_cell199.material} position={[-0.6, 0.71, -0.48]} />
        <mesh name="defaultMaterial002_cell200" geometry={nodes.defaultMaterial002_cell200.geometry} material={nodes.defaultMaterial002_cell200.material} position={[-1.12, 0.18, -0.19]} />
        <mesh name="defaultMaterial002_cell203" geometry={nodes.defaultMaterial002_cell203.geometry} material={nodes.defaultMaterial002_cell203.material} position={[-0.59, 0.03, -0.34]} />
        <mesh name="defaultMaterial002_cell205" geometry={nodes.defaultMaterial002_cell205.geometry} material={nodes.defaultMaterial002_cell205.material} position={[-0.57, 0.29, -1.84]} />
        <mesh name="defaultMaterial002_cell210" geometry={nodes.defaultMaterial002_cell210.geometry} material={nodes.defaultMaterial002_cell210.material} position={[-0.68, 0.76, -0.79]} />
        <mesh name="defaultMaterial002_cell213" geometry={nodes.defaultMaterial002_cell213.geometry} material={nodes.defaultMaterial002_cell213.material} position={[-0.41, 0.06, -1.6]} />
        <mesh name="defaultMaterial002_cell214" geometry={nodes.defaultMaterial002_cell214.geometry} material={nodes.defaultMaterial002_cell214.material} position={[-1.36, 0.01, -1.64]} />
        <mesh name="defaultMaterial002_cell215" geometry={nodes.defaultMaterial002_cell215.geometry} material={nodes.defaultMaterial002_cell215.material} position={[-1.03, 0.73, -0.42]} />
        <mesh name="defaultMaterial002_cell216" geometry={nodes.defaultMaterial002_cell216.geometry} material={nodes.defaultMaterial002_cell216.material} position={[-1.08, 0.52, -1.69]} />
        <mesh name="defaultMaterial002_cell220" geometry={nodes.defaultMaterial002_cell220.geometry} material={nodes.defaultMaterial002_cell220.material} position={[-0.46, 0.21, -1.16]} />
        <mesh name="defaultMaterial002_cell222" geometry={nodes.defaultMaterial002_cell222.geometry} material={nodes.defaultMaterial002_cell222.material} position={[-0.72, 0.08, -1.88]} />
        <mesh name="defaultMaterial002_cell223" geometry={nodes.defaultMaterial002_cell223.geometry} material={nodes.defaultMaterial002_cell223.material} position={[-1.92, 0.02, -1.1]} />
        <mesh name="defaultMaterial002_cell227" geometry={nodes.defaultMaterial002_cell227.geometry} material={nodes.defaultMaterial002_cell227.material} position={[-1.78, 0.33, -1.36]} />
        <mesh name="defaultMaterial002_cell228" geometry={nodes.defaultMaterial002_cell228.geometry} material={nodes.defaultMaterial002_cell228.material} position={[-0.46, 0.67, -1.53]} />
        <mesh name="defaultMaterial002_cell229" geometry={nodes.defaultMaterial002_cell229.geometry} material={nodes.defaultMaterial002_cell229.material} position={[-1.22, 0.75, -1.67]} />
        <mesh name="defaultMaterial002_cell231" geometry={nodes.defaultMaterial002_cell231.geometry} material={nodes.defaultMaterial002_cell231.material} position={[-0.45, 0.74, -0.72]} />
        <mesh name="defaultMaterial002_cell235" geometry={nodes.defaultMaterial002_cell235.geometry} material={nodes.defaultMaterial002_cell235.material} position={[-0.54, 0.12, -0.95]} />
        <mesh name="defaultMaterial002_cell238" geometry={nodes.defaultMaterial002_cell238.geometry} material={nodes.defaultMaterial002_cell238.material} position={[-1.28, 1.33, -1.17]} />
        <mesh name="defaultMaterial002_cell240" geometry={nodes.defaultMaterial002_cell240.geometry} material={nodes.defaultMaterial002_cell240.material} position={[-1.48, 0.76, -0.57]} />
        <mesh name="defaultMaterial002_cell248" geometry={nodes.defaultMaterial002_cell248.geometry} material={nodes.defaultMaterial002_cell248.material} position={[-0.12, 0.11, -0.96]} />
        <mesh name="defaultMaterial002_cell256" geometry={nodes.defaultMaterial002_cell256.geometry} material={nodes.defaultMaterial002_cell256.material} position={[-0.6, 1.66, -1.35]} />
        <mesh name="defaultMaterial002_cell003" geometry={nodes.defaultMaterial002_cell003.geometry} material={nodes.defaultMaterial002_cell003.material} position={[-1.3, 1.03, -1.32]} />
        <mesh name="defaultMaterial002_cell006" geometry={nodes.defaultMaterial002_cell006.geometry} material={nodes.defaultMaterial002_cell006.material} position={[-1.42, 0.79, -0.69]} />
        <mesh name="defaultMaterial002_cell009" geometry={nodes.defaultMaterial002_cell009.geometry} material={nodes.defaultMaterial002_cell009.material} position={[-1.14, 0.38, -0.21]} />
        <mesh name="defaultMaterial002_cell010" geometry={nodes.defaultMaterial002_cell010.geometry} material={nodes.defaultMaterial002_cell010.material} position={[-0.33, 0.38, -0.72]} />
        <mesh name="defaultMaterial002_cell013" geometry={nodes.defaultMaterial002_cell013.geometry} material={nodes.defaultMaterial002_cell013.material} position={[-0.37, 0.67, -0.73]} />
        <mesh name="defaultMaterial002_cell014" geometry={nodes.defaultMaterial002_cell014.geometry} material={nodes.defaultMaterial002_cell014.material} position={[-0.37, 0.43, -0.69]} />
        <mesh name="defaultMaterial002_cell015" geometry={nodes.defaultMaterial002_cell015.geometry} material={nodes.defaultMaterial002_cell015.material} position={[-1.28, 0.75, -1.04]} />
        <mesh name="defaultMaterial002_cell016" geometry={nodes.defaultMaterial002_cell016.geometry} material={nodes.defaultMaterial002_cell016.material} position={[-1.24, 0.97, -1.14]} />
        <mesh name="defaultMaterial002_cell018" geometry={nodes.defaultMaterial002_cell018.geometry} material={nodes.defaultMaterial002_cell018.material} position={[-0.66, 0.37, -1.81]} />
        <mesh name="defaultMaterial002_cell021" geometry={nodes.defaultMaterial002_cell021.geometry} material={nodes.defaultMaterial002_cell021.material} position={[-1.57, 0.7, -1.37]} />
        <mesh name="defaultMaterial041_cell" geometry={nodes.defaultMaterial041_cell.geometry} material={nodes.defaultMaterial041_cell.material} position={[3, 0.03, 4.05]} />
        <mesh name="defaultMaterial041_cell001" geometry={nodes.defaultMaterial041_cell001.geometry} material={nodes.defaultMaterial041_cell001.material} position={[2.89, 1.92, 4.35]} />
        <group name="defaultMaterial041_cell002" position={[3.08, 0.1, 4.85]}>
          <mesh name="defaultMaterial041_cell001_1" geometry={nodes.defaultMaterial041_cell001_1.geometry} material={nodes.defaultMaterial041_cell001_1.material} />
          <mesh name="defaultMaterial041_cell001_2" geometry={nodes.defaultMaterial041_cell001_2.geometry} material={nodes.defaultMaterial041_cell001_2.material} />
        </group>
        <group name="defaultMaterial041_cell003" position={[3.07, 1.86, 4.46]}>
          <mesh name="defaultMaterial041_cell002_1" geometry={nodes.defaultMaterial041_cell002_1.geometry} material={nodes.defaultMaterial041_cell002_1.material} />
          <mesh name="defaultMaterial041_cell002_2" geometry={nodes.defaultMaterial041_cell002_2.geometry} material={nodes.defaultMaterial041_cell002_2.material} />
        </group>
        <group name="defaultMaterial041_cell004" position={[3.36, 0.67, 5.6]}>
          <mesh name="defaultMaterial041_cell003_1" geometry={nodes.defaultMaterial041_cell003_1.geometry} material={nodes.defaultMaterial041_cell003_1.material} />
          <mesh name="defaultMaterial041_cell003_2" geometry={nodes.defaultMaterial041_cell003_2.geometry} material={nodes.defaultMaterial041_cell003_2.material} />
        </group>
        <mesh name="defaultMaterial041_cell008" geometry={nodes.defaultMaterial041_cell008.geometry} material={nodes.defaultMaterial041_cell008.material} position={[2.71, 1.49, 5.55]} />
        <group name="defaultMaterial041_cell012" position={[3.26, 1.4, 4.53]}>
          <mesh name="defaultMaterial041_cell005_1" geometry={nodes.defaultMaterial041_cell005_1.geometry} material={nodes.defaultMaterial041_cell005_1.material} />
          <mesh name="defaultMaterial041_cell005_2" geometry={nodes.defaultMaterial041_cell005_2.geometry} material={nodes.defaultMaterial041_cell005_2.material} />
        </group>
        <mesh name="defaultMaterial041_cell013" geometry={nodes.defaultMaterial041_cell013.geometry} material={nodes.defaultMaterial041_cell013.material} position={[3.21, 0.43, 5.69]} />
        <group name="defaultMaterial041_cell014" position={[3.66, 0.73, 4.84]}>
          <mesh name="defaultMaterial041_cell007_1" geometry={nodes.defaultMaterial041_cell007_1.geometry} material={nodes.defaultMaterial041_cell007_1.material} />
          <mesh name="defaultMaterial041_cell007_2" geometry={nodes.defaultMaterial041_cell007_2.geometry} material={nodes.defaultMaterial041_cell007_2.material} />
        </group>
        <group name="defaultMaterial041_cell016" position={[2.73, 0.3, 5.75]}>
          <mesh name="defaultMaterial041_cell008_1" geometry={nodes.defaultMaterial041_cell008_1.geometry} material={nodes.defaultMaterial041_cell008_1.material} />
          <mesh name="defaultMaterial041_cell008_2" geometry={nodes.defaultMaterial041_cell008_2.geometry} material={nodes.defaultMaterial041_cell008_2.material} />
        </group>
        <group name="defaultMaterial041_cell018" position={[3.11, 1.7, 5.23]}>
          <mesh name="defaultMaterial041_cell009_1" geometry={nodes.defaultMaterial041_cell009_1.geometry} material={nodes.defaultMaterial041_cell009_1.material} />
          <mesh name="defaultMaterial041_cell009_2" geometry={nodes.defaultMaterial041_cell009_2.geometry} material={nodes.defaultMaterial041_cell009_2.material} />
        </group>
        <group name="defaultMaterial041_cell020" position={[3.23, 0.23, 5.85]}>
          <mesh name="defaultMaterial041_cell010_1" geometry={nodes.defaultMaterial041_cell010_1.geometry} material={nodes.defaultMaterial041_cell010_1.material} />
          <mesh name="defaultMaterial041_cell010_2" geometry={nodes.defaultMaterial041_cell010_2.geometry} material={nodes.defaultMaterial041_cell010_2.material} />
        </group>
        <group name="defaultMaterial041_cell021" position={[2.91, 1.26, 5.73]}>
          <mesh name="defaultMaterial041_cell011_1" geometry={nodes.defaultMaterial041_cell011_1.geometry} material={nodes.defaultMaterial041_cell011_1.material} />
          <mesh name="defaultMaterial041_cell011_2" geometry={nodes.defaultMaterial041_cell011_2.geometry} material={nodes.defaultMaterial041_cell011_2.material} />
        </group>
        <group name="defaultMaterial041_cell022" position={[3.26, 0.92, 5.11]}>
          <mesh name="defaultMaterial041_cell012_1" geometry={nodes.defaultMaterial041_cell012_1.geometry} material={nodes.defaultMaterial041_cell012_1.material} />
          <mesh name="defaultMaterial041_cell012_2" geometry={nodes.defaultMaterial041_cell012_2.geometry} material={nodes.defaultMaterial041_cell012_2.material} />
        </group>
        <group name="defaultMaterial041_cell026" position={[2.47, 0.06, 5.02]}>
          <mesh name="defaultMaterial041_cell014_1" geometry={nodes.defaultMaterial041_cell014_1.geometry} material={nodes.defaultMaterial041_cell014_1.material} />
          <mesh name="defaultMaterial041_cell014_2" geometry={nodes.defaultMaterial041_cell014_2.geometry} material={nodes.defaultMaterial041_cell014_2.material} />
        </group>
        <group name="defaultMaterial041_cell027" position={[3.29, 0.11, 4.44]}>
          <mesh name="defaultMaterial041_cell015_1" geometry={nodes.defaultMaterial041_cell015_1.geometry} material={nodes.defaultMaterial041_cell015_1.material} />
          <mesh name="defaultMaterial041_cell015_2" geometry={nodes.defaultMaterial041_cell015_2.geometry} material={nodes.defaultMaterial041_cell015_2.material} />
        </group>
        <group name="defaultMaterial041_cell028" position={[2.91, 1.14, 5.67]}>
          <mesh name="defaultMaterial041_cell016_1" geometry={nodes.defaultMaterial041_cell016_1.geometry} material={nodes.defaultMaterial041_cell016_1.material} />
          <mesh name="defaultMaterial041_cell016_2" geometry={nodes.defaultMaterial041_cell016_2.geometry} material={nodes.defaultMaterial041_cell016_2.material} />
        </group>
        <group name="defaultMaterial041_cell029" position={[3.37, 1.21, 4.6]}>
          <mesh name="defaultMaterial041_cell017_1" geometry={nodes.defaultMaterial041_cell017_1.geometry} material={nodes.defaultMaterial041_cell017_1.material} />
          <mesh name="defaultMaterial041_cell017_2" geometry={nodes.defaultMaterial041_cell017_2.geometry} material={nodes.defaultMaterial041_cell017_2.material} />
        </group>
        <group name="defaultMaterial041_cell031" position={[2.79, 0.11, 4.7]}>
          <mesh name="defaultMaterial041_cell018_1" geometry={nodes.defaultMaterial041_cell018_1.geometry} material={nodes.defaultMaterial041_cell018_1.material} />
          <mesh name="defaultMaterial041_cell018_2" geometry={nodes.defaultMaterial041_cell018_2.geometry} material={nodes.defaultMaterial041_cell018_2.material} />
        </group>
        <mesh name="defaultMaterial041_cell032" geometry={nodes.defaultMaterial041_cell032.geometry} material={nodes.defaultMaterial041_cell032.material} position={[2.72, 1.05, 5.51]} />
        <mesh name="defaultMaterial041_cell033" geometry={nodes.defaultMaterial041_cell033.geometry} material={nodes.defaultMaterial041_cell033.material} position={[3.15, 1.96, 4.66]} />
        <group name="defaultMaterial041_cell034" position={[3.32, 1.74, 5.57]}>
          <mesh name="defaultMaterial041_cell021_1" geometry={nodes.defaultMaterial041_cell021_1.geometry} material={nodes.defaultMaterial041_cell021_1.material} />
          <mesh name="defaultMaterial041_cell021_2" geometry={nodes.defaultMaterial041_cell021_2.geometry} material={nodes.defaultMaterial041_cell021_2.material} />
        </group>
        <group name="defaultMaterial041_cell038" position={[3.33, 1.42, 5.6]}>
          <mesh name="defaultMaterial041_cell022_1" geometry={nodes.defaultMaterial041_cell022_1.geometry} material={nodes.defaultMaterial041_cell022_1.material} />
          <mesh name="defaultMaterial041_cell022_2" geometry={nodes.defaultMaterial041_cell022_2.geometry} material={nodes.defaultMaterial041_cell022_2.material} />
        </group>
        <group name="defaultMaterial041_cell042" position={[2.82, 0.1, 5.82]}>
          <mesh name="defaultMaterial041_cell023_1" geometry={nodes.defaultMaterial041_cell023_1.geometry} material={nodes.defaultMaterial041_cell023_1.material} />
          <mesh name="defaultMaterial041_cell023_2" geometry={nodes.defaultMaterial041_cell023_2.geometry} material={nodes.defaultMaterial041_cell023_2.material} />
        </group>
        <mesh name="defaultMaterial041_cell043" geometry={nodes.defaultMaterial041_cell043.geometry} material={nodes.defaultMaterial041_cell043.material} position={[3.39, 1.55, 5.25]} />
        <group name="defaultMaterial041_cell044" position={[2.13, 0.35, 4.92]}>
          <mesh name="defaultMaterial041_cell025_1" geometry={nodes.defaultMaterial041_cell025_1.geometry} material={nodes.defaultMaterial041_cell025_1.material} />
          <mesh name="defaultMaterial041_cell025_2" geometry={nodes.defaultMaterial041_cell025_2.geometry} material={nodes.defaultMaterial041_cell025_2.material} />
        </group>
        <mesh name="defaultMaterial041_cell046" geometry={nodes.defaultMaterial041_cell046.geometry} material={nodes.defaultMaterial041_cell046.material} position={[3.93, 0.06, 5.07]} />
        <mesh name="defaultMaterial041_cell048" geometry={nodes.defaultMaterial041_cell048.geometry} material={nodes.defaultMaterial041_cell048.material} position={[2.59, 1.33, 5.35]} />
        <mesh name="defaultMaterial041_cell049" geometry={nodes.defaultMaterial041_cell049.geometry} material={nodes.defaultMaterial041_cell049.material} position={[3.27, 0.76, 4.74]} />
        <group name="defaultMaterial041_cell050" position={[2.95, 0.9, 5.41]}>
          <mesh name="defaultMaterial041_cell029_1" geometry={nodes.defaultMaterial041_cell029_1.geometry} material={nodes.defaultMaterial041_cell029_1.material} />
          <mesh name="defaultMaterial041_cell029_2" geometry={nodes.defaultMaterial041_cell029_2.geometry} material={nodes.defaultMaterial041_cell029_2.material} />
        </group>
        <group name="defaultMaterial041_cell051" position={[3.29, 1.33, 4.32]}>
          <mesh name="defaultMaterial041_cell030_1" geometry={nodes.defaultMaterial041_cell030_1.geometry} material={nodes.defaultMaterial041_cell030_1.material} />
          <mesh name="defaultMaterial041_cell030_2" geometry={nodes.defaultMaterial041_cell030_2.geometry} material={nodes.defaultMaterial041_cell030_2.material} />
        </group>
        <mesh name="defaultMaterial041_cell054" geometry={nodes.defaultMaterial041_cell054.geometry} material={nodes.defaultMaterial041_cell054.material} position={[2.98, 0.93, 5.18]} />
        <group name="defaultMaterial041_cell055" position={[3.28, 1.06, 5.24]}>
          <mesh name="defaultMaterial041_cell032_1" geometry={nodes.defaultMaterial041_cell032_1.geometry} material={nodes.defaultMaterial041_cell032_1.material} />
          <mesh name="defaultMaterial041_cell032_2" geometry={nodes.defaultMaterial041_cell032_2.geometry} material={nodes.defaultMaterial041_cell032_2.material} />
        </group>
        <group name="defaultMaterial041_cell056" position={[3.46, 0.75, 4.44]}>
          <mesh name="defaultMaterial041_cell033_1" geometry={nodes.defaultMaterial041_cell033_1.geometry} material={nodes.defaultMaterial041_cell033_1.material} />
          <mesh name="defaultMaterial041_cell033_2" geometry={nodes.defaultMaterial041_cell033_2.geometry} material={nodes.defaultMaterial041_cell033_2.material} />
        </group>
        <group name="defaultMaterial041_cell060" position={[2.67, 0.96, 4.67]}>
          <mesh name="defaultMaterial041_cell034_1" geometry={nodes.defaultMaterial041_cell034_1.geometry} material={nodes.defaultMaterial041_cell034_1.material} />
          <mesh name="defaultMaterial041_cell034_2" geometry={nodes.defaultMaterial041_cell034_2.geometry} material={nodes.defaultMaterial041_cell034_2.material} />
        </group>
        <mesh name="defaultMaterial041_cell062" geometry={nodes.defaultMaterial041_cell062.geometry} material={nodes.defaultMaterial041_cell062.material} position={[2.35, 0.76, 4.94]} />
        <group name="defaultMaterial041_cell066" position={[3.31, 0.75, 4.46]}>
          <mesh name="defaultMaterial041_cell036_1" geometry={nodes.defaultMaterial041_cell036_1.geometry} material={nodes.defaultMaterial041_cell036_1.material} />
          <mesh name="defaultMaterial041_cell036_2" geometry={nodes.defaultMaterial041_cell036_2.geometry} material={nodes.defaultMaterial041_cell036_2.material} />
        </group>
        <group name="defaultMaterial041_cell067" position={[2.97, 1.84, 5.39]}>
          <mesh name="defaultMaterial041_cell037_1" geometry={nodes.defaultMaterial041_cell037_1.geometry} material={nodes.defaultMaterial041_cell037_1.material} />
          <mesh name="defaultMaterial041_cell037_2" geometry={nodes.defaultMaterial041_cell037_2.geometry} material={nodes.defaultMaterial041_cell037_2.material} />
        </group>
        <group name="defaultMaterial041_cell072" position={[2.6, 1.75, 5.4]}>
          <mesh name="defaultMaterial041_cell038_1" geometry={nodes.defaultMaterial041_cell038_1.geometry} material={nodes.defaultMaterial041_cell038_1.material} />
          <mesh name="defaultMaterial041_cell038_2" geometry={nodes.defaultMaterial041_cell038_2.geometry} material={nodes.defaultMaterial041_cell038_2.material} />
        </group>
        <group name="defaultMaterial041_cell073" position={[3.62, 0.16, 4.37]}>
          <mesh name="defaultMaterial041_cell039_1" geometry={nodes.defaultMaterial041_cell039_1.geometry} material={nodes.defaultMaterial041_cell039_1.material} />
          <mesh name="defaultMaterial041_cell039_2" geometry={nodes.defaultMaterial041_cell039_2.geometry} material={nodes.defaultMaterial041_cell039_2.material} />
        </group>
        <mesh name="defaultMaterial041_cell075" geometry={nodes.defaultMaterial041_cell075.geometry} material={nodes.defaultMaterial041_cell075.material} position={[2.37, 0.11, 5.4]} />
        <group name="defaultMaterial041_cell079" position={[3.28, 1.09, 5.59]}>
          <mesh name="defaultMaterial041_cell041" geometry={nodes.defaultMaterial041_cell041.geometry} material={nodes.defaultMaterial041_cell041.material} />
          <mesh name="defaultMaterial041_cell041_1" geometry={nodes.defaultMaterial041_cell041_1.geometry} material={nodes.defaultMaterial041_cell041_1.material} />
        </group>
        <group name="defaultMaterial041_cell080" position={[2.98, 1.69, 4.63]}>
          <mesh name="defaultMaterial041_cell042_1" geometry={nodes.defaultMaterial041_cell042_1.geometry} material={nodes.defaultMaterial041_cell042_1.material} />
          <mesh name="defaultMaterial041_cell042_2" geometry={nodes.defaultMaterial041_cell042_2.geometry} material={nodes.defaultMaterial041_cell042_2.material} />
        </group>
        <group name="defaultMaterial041_cell086" position={[2.92, 1.45, 4.3]}>
          <mesh name="defaultMaterial041_cell043_1" geometry={nodes.defaultMaterial041_cell043_1.geometry} material={nodes.defaultMaterial041_cell043_1.material} />
          <mesh name="defaultMaterial041_cell043_2" geometry={nodes.defaultMaterial041_cell043_2.geometry} material={nodes.defaultMaterial041_cell043_2.material} />
        </group>
        <group name="defaultMaterial041_cell087" position={[3.96, 0.3, 4.94]}>
          <mesh name="defaultMaterial041_cell044_1" geometry={nodes.defaultMaterial041_cell044_1.geometry} material={nodes.defaultMaterial041_cell044_1.material} />
          <mesh name="defaultMaterial041_cell044_2" geometry={nodes.defaultMaterial041_cell044_2.geometry} material={nodes.defaultMaterial041_cell044_2.material} />
        </group>
        <mesh name="defaultMaterial041_cell092" geometry={nodes.defaultMaterial041_cell092.geometry} material={nodes.defaultMaterial041_cell092.material} position={[3.48, 0.01, 5.52]} />
        <mesh name="defaultMaterial041_cell093" geometry={nodes.defaultMaterial041_cell093.geometry} material={nodes.defaultMaterial041_cell093.material} position={[3.08, 0.22, 5.85]} />
        <group name="defaultMaterial041_cell094" position={[3.27, 0.17, 4.12]}>
          <mesh name="defaultMaterial041_cell047" geometry={nodes.defaultMaterial041_cell047.geometry} material={nodes.defaultMaterial041_cell047.material} />
          <mesh name="defaultMaterial041_cell047_1" geometry={nodes.defaultMaterial041_cell047_1.geometry} material={nodes.defaultMaterial041_cell047_1.material} />
        </group>
        <mesh name="defaultMaterial041_cell096" geometry={nodes.defaultMaterial041_cell096.geometry} material={nodes.defaultMaterial041_cell096.material} position={[2.91, 1.96, 4.7]} />
        <mesh name="defaultMaterial041_cell097" geometry={nodes.defaultMaterial041_cell097.geometry} material={nodes.defaultMaterial041_cell097.material} position={[2.92, 1.75, 5.44]} />
        <group name="defaultMaterial041_cell100" position={[3.49, 0.75, 4.55]}>
          <mesh name="defaultMaterial041_cell050_1" geometry={nodes.defaultMaterial041_cell050_1.geometry} material={nodes.defaultMaterial041_cell050_1.material} />
          <mesh name="defaultMaterial041_cell050_2" geometry={nodes.defaultMaterial041_cell050_2.geometry} material={nodes.defaultMaterial041_cell050_2.material} />
        </group>
        <mesh name="defaultMaterial041_cell101" geometry={nodes.defaultMaterial041_cell101.geometry} material={nodes.defaultMaterial041_cell101.material} position={[2.52, 0.08, 5.66]} />
        <group name="defaultMaterial041_cell103" position={[2.18, 0.31, 5.17]}>
          <mesh name="defaultMaterial041_cell052" geometry={nodes.defaultMaterial041_cell052.geometry} material={nodes.defaultMaterial041_cell052.material} />
          <mesh name="defaultMaterial041_cell052_1" geometry={nodes.defaultMaterial041_cell052_1.geometry} material={nodes.defaultMaterial041_cell052_1.material} />
        </group>
        <group name="defaultMaterial041_cell104" position={[2.73, 1.02, 5.2]}>
          <mesh name="defaultMaterial041_cell053" geometry={nodes.defaultMaterial041_cell053.geometry} material={nodes.defaultMaterial041_cell053.material} />
          <mesh name="defaultMaterial041_cell053_1" geometry={nodes.defaultMaterial041_cell053_1.geometry} material={nodes.defaultMaterial041_cell053_1.material} />
        </group>
        <mesh name="defaultMaterial041_cell105" geometry={nodes.defaultMaterial041_cell105.geometry} material={nodes.defaultMaterial041_cell105.material} position={[2.95, 1.19, 5.13]} />
        <group name="defaultMaterial041_cell112" position={[2.89, 0.92, 4.78]}>
          <mesh name="defaultMaterial041_cell055_1" geometry={nodes.defaultMaterial041_cell055_1.geometry} material={nodes.defaultMaterial041_cell055_1.material} />
          <mesh name="defaultMaterial041_cell055_2" geometry={nodes.defaultMaterial041_cell055_2.geometry} material={nodes.defaultMaterial041_cell055_2.material} />
        </group>
        <mesh name="defaultMaterial041_cell119" geometry={nodes.defaultMaterial041_cell119.geometry} material={nodes.defaultMaterial041_cell119.material} position={[2.48, 0.33, 4.29]} />
        <mesh name="defaultMaterial041_cell123" geometry={nodes.defaultMaterial041_cell123.geometry} material={nodes.defaultMaterial041_cell123.material} position={[3.21, 0.91, 5.11]} />
        <group name="defaultMaterial041_cell126" position={[2.67, 1.16, 5.58]}>
          <mesh name="defaultMaterial041_cell058" geometry={nodes.defaultMaterial041_cell058.geometry} material={nodes.defaultMaterial041_cell058.material} />
          <mesh name="defaultMaterial041_cell058_1" geometry={nodes.defaultMaterial041_cell058_1.geometry} material={nodes.defaultMaterial041_cell058_1.material} />
        </group>
        <mesh name="defaultMaterial041_cell127" geometry={nodes.defaultMaterial041_cell127.geometry} material={nodes.defaultMaterial041_cell127.material} position={[3.5, 1.65, 5.49]} />
        <mesh name="defaultMaterial041_cell128" geometry={nodes.defaultMaterial041_cell128.geometry} material={nodes.defaultMaterial041_cell128.material} position={[2.71, 1.18, 4.95]} />
        <group name="defaultMaterial041_cell129" position={[3.27, 1.59, 4.87]}>
          <mesh name="defaultMaterial041_cell061" geometry={nodes.defaultMaterial041_cell061.geometry} material={nodes.defaultMaterial041_cell061.material} />
          <mesh name="defaultMaterial041_cell061_1" geometry={nodes.defaultMaterial041_cell061_1.geometry} material={nodes.defaultMaterial041_cell061_1.material} />
        </group>
        <mesh name="defaultMaterial041_cell131" geometry={nodes.defaultMaterial041_cell131.geometry} material={nodes.defaultMaterial041_cell131.material} position={[3.28, 1.31, 5]} />
        <mesh name="defaultMaterial041_cell135" geometry={nodes.defaultMaterial041_cell135.geometry} material={nodes.defaultMaterial041_cell135.material} position={[2.65, 1.66, 5.22]} />
        <mesh name="defaultMaterial041_cell136" geometry={nodes.defaultMaterial041_cell136.geometry} material={nodes.defaultMaterial041_cell136.material} position={[2.82, 1.26, 4.54]} />
        <group name="defaultMaterial041_cell139" position={[2.18, 0.23, 4.78]}>
          <mesh name="defaultMaterial041_cell065" geometry={nodes.defaultMaterial041_cell065.geometry} material={nodes.defaultMaterial041_cell065.material} />
          <mesh name="defaultMaterial041_cell065_1" geometry={nodes.defaultMaterial041_cell065_1.geometry} material={nodes.defaultMaterial041_cell065_1.material} />
        </group>
        <group name="defaultMaterial041_cell140" position={[3.7, 0.72, 5.05]}>
          <mesh name="defaultMaterial041_cell066_1" geometry={nodes.defaultMaterial041_cell066_1.geometry} material={nodes.defaultMaterial041_cell066_1.material} />
          <mesh name="defaultMaterial041_cell066_2" geometry={nodes.defaultMaterial041_cell066_2.geometry} material={nodes.defaultMaterial041_cell066_2.material} />
        </group>
        <group name="defaultMaterial041_cell141" position={[2.96, 0.22, 5.24]}>
          <mesh name="defaultMaterial041_cell067_1" geometry={nodes.defaultMaterial041_cell067_1.geometry} material={nodes.defaultMaterial041_cell067_1.material} />
          <mesh name="defaultMaterial041_cell067_2" geometry={nodes.defaultMaterial041_cell067_2.geometry} material={nodes.defaultMaterial041_cell067_2.material} />
        </group>
        <group name="defaultMaterial041_cell146" position={[2.19, 0.06, 5.01]}>
          <mesh name="defaultMaterial041_cell068" geometry={nodes.defaultMaterial041_cell068.geometry} material={nodes.defaultMaterial041_cell068.material} />
          <mesh name="defaultMaterial041_cell068_1" geometry={nodes.defaultMaterial041_cell068_1.geometry} material={nodes.defaultMaterial041_cell068_1.material} />
        </group>
        <group name="defaultMaterial041_cell147" position={[2.85, 0.04, 5.41]}>
          <mesh name="defaultMaterial041_cell069" geometry={nodes.defaultMaterial041_cell069.geometry} material={nodes.defaultMaterial041_cell069.material} />
          <mesh name="defaultMaterial041_cell069_1" geometry={nodes.defaultMaterial041_cell069_1.geometry} material={nodes.defaultMaterial041_cell069_1.material} />
        </group>
        <group name="defaultMaterial041_cell149" position={[2.78, 1.57, 4.89]}>
          <mesh name="defaultMaterial041_cell070" geometry={nodes.defaultMaterial041_cell070.geometry} material={nodes.defaultMaterial041_cell070.material} />
          <mesh name="defaultMaterial041_cell070_1" geometry={nodes.defaultMaterial041_cell070_1.geometry} material={nodes.defaultMaterial041_cell070_1.material} />
        </group>
        <mesh name="defaultMaterial041_cell151" geometry={nodes.defaultMaterial041_cell151.geometry} material={nodes.defaultMaterial041_cell151.material} position={[3.7, 0.09, 4.84]} />
        <group name="defaultMaterial041_cell005" position={[3.09, 1.39, 4.46]}>
          <mesh name="defaultMaterial041_cell072_1" geometry={nodes.defaultMaterial041_cell072_1.geometry} material={nodes.defaultMaterial041_cell072_1.material} />
          <mesh name="defaultMaterial041_cell072_2" geometry={nodes.defaultMaterial041_cell072_2.geometry} material={nodes.defaultMaterial041_cell072_2.material} />
        </group>
        <mesh name="defaultMaterial041_cell006" geometry={nodes.defaultMaterial041_cell006.geometry} material={nodes.defaultMaterial041_cell006.material} position={[3.24, 0.38, 5.79]} />
        <group name="defaultMaterial041_cell007" position={[3.01, 1.55, 5.07]}>
          <mesh name="defaultMaterial041_cell074" geometry={nodes.defaultMaterial041_cell074.geometry} material={nodes.defaultMaterial041_cell074.material} />
          <mesh name="defaultMaterial041_cell074_1" geometry={nodes.defaultMaterial041_cell074_1.geometry} material={nodes.defaultMaterial041_cell074_1.material} />
        </group>
        <mesh name="defaultMaterial041_cell009" geometry={nodes.defaultMaterial041_cell009.geometry} material={nodes.defaultMaterial041_cell009.material} position={[2.52, 0.7, 5.37]} />
        <mesh name="defaultMaterial041_cell010" geometry={nodes.defaultMaterial041_cell010.geometry} material={nodes.defaultMaterial041_cell010.material} position={[3.35, 1.42, 5.02]} />
        <mesh name="defaultMaterial041_cell011" geometry={nodes.defaultMaterial041_cell011.geometry} material={nodes.defaultMaterial041_cell011.material} position={[3.34, 0.99, 4.79]} />
        <group name="defaultMaterial041_cell015" position={[3.29, 1.12, 5.05]}>
          <mesh name="defaultMaterial041_cell078" geometry={nodes.defaultMaterial041_cell078.geometry} material={nodes.defaultMaterial041_cell078.material} />
          <mesh name="defaultMaterial041_cell078_1" geometry={nodes.defaultMaterial041_cell078_1.geometry} material={nodes.defaultMaterial041_cell078_1.material} />
        </group>
        <group name="defaultMaterial041_cell017" position={[3.28, 0.98, 4.58]}>
          <mesh name="defaultMaterial041_cell079_1" geometry={nodes.defaultMaterial041_cell079_1.geometry} material={nodes.defaultMaterial041_cell079_1.material} />
          <mesh name="defaultMaterial041_cell079_2" geometry={nodes.defaultMaterial041_cell079_2.geometry} material={nodes.defaultMaterial041_cell079_2.material} />
        </group>
        <group name="defaultMaterial041_cell019" position={[2.95, 1.45, 4.46]}>
          <mesh name="defaultMaterial041_cell080_1" geometry={nodes.defaultMaterial041_cell080_1.geometry} material={nodes.defaultMaterial041_cell080_1.material} />
          <mesh name="defaultMaterial041_cell080_2" geometry={nodes.defaultMaterial041_cell080_2.geometry} material={nodes.defaultMaterial041_cell080_2.material} />
        </group>
        <group name="defaultMaterial041_cell024" position={[3.44, 0.88, 4.62]}>
          <mesh name="defaultMaterial041_cell081" geometry={nodes.defaultMaterial041_cell081.geometry} material={nodes.defaultMaterial041_cell081.material} />
          <mesh name="defaultMaterial041_cell081_1" geometry={nodes.defaultMaterial041_cell081_1.geometry} material={nodes.defaultMaterial041_cell081_1.material} />
        </group>
        <mesh name="defaultMaterial041_cell030" geometry={nodes.defaultMaterial041_cell030.geometry} material={nodes.defaultMaterial041_cell030.material} position={[3.03, 0.99, 4.62]} />
        <mesh name="defaultMaterial041_cell035" geometry={nodes.defaultMaterial041_cell035.geometry} material={nodes.defaultMaterial041_cell035.material} position={[2.71, 1.27, 5.11]} />
        <mesh name="defaultMaterial041_cell036" geometry={nodes.defaultMaterial041_cell036.geometry} material={nodes.defaultMaterial041_cell036.material} position={[3.17, 1.34, 5.11]} />
        <group name="defaultMaterial041_cell037" position={[2.77, 1.56, 5.12]}>
          <mesh name="defaultMaterial041_cell086_1" geometry={nodes.defaultMaterial041_cell086_1.geometry} material={nodes.defaultMaterial041_cell086_1.material} />
          <mesh name="defaultMaterial041_cell086_2" geometry={nodes.defaultMaterial041_cell086_2.geometry} material={nodes.defaultMaterial041_cell086_2.material} />
        </group>
        <group name="defaultMaterial041_cell039" position={[2.82, 1.91, 4.81]}>
          <mesh name="defaultMaterial041_cell087_1" geometry={nodes.defaultMaterial041_cell087_1.geometry} material={nodes.defaultMaterial041_cell087_1.material} />
          <mesh name="defaultMaterial041_cell087_2" geometry={nodes.defaultMaterial041_cell087_2.geometry} material={nodes.defaultMaterial041_cell087_2.material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/pawnAnimation.glb')