import React, { Suspense } from 'react';
import styles from "@/styles/Home.module.css";

import MessageBox from './MessageBox';
import { Canvas, } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import dynamic from 'next/dynamic';
const ChessBoard = dynamic(() => import('./components/ChessBoard'),{
  ssr: false,
  })


// const Loader = () => {
//   const {progress} = useProgress()
//   return <Center maxWidth={10}>
//     <Text maxWidth={50} center>Loading 3D Model.  It can take some time {progress.toFixed(2)} %  </Text>
//   </Center>
// }

const Home: React.FunctionComponent = () => {
  return (
    <Suspense>

   
    <div style={{ width: "100vw", height: "90vh", background: 'black' }}>
 
  <Canvas >
        <ambientLight intensity={1.25} />
        <directionalLight />
        <ChessBoard />
        <OrbitControls />
        </Canvas>

 
  
      <div style={{ width: "100vw", height: "100vh", background: 'black' }}>
    
      </div> 
         </div> </Suspense>
  );
};

export default Home;