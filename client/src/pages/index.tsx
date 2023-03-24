import React, { Suspense,lazy } from 'react';
import styles from "@/styles/Home.module.css";

import MessageBox from './MessageBox';
import { Canvas, } from '@react-three/fiber'
import { Center, OrbitControls, useProgress } from '@react-three/drei';

const ChessBoard = lazy(() => import("./components/ChessBoard"));


const Loader = () => {
  const {progress} = useProgress()
  return <Center >

  </Center>
}

const Home: React.FunctionComponent = () => {
  return (
    <Suspense >
    <div style={{ width: "100vw", height: "90vh", background: 'black' }}>
 
  <Canvas >
        <ambientLight intensity={1.25} />
        <directionalLight />
        <ChessBoard />
        <OrbitControls />
        </Canvas>

 
  
      <div style={{ width: "100vw", height: "100vh", background: 'black' }}>
    
      </div> 
         </div></Suspense>
  );
};

export default Home; 