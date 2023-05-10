import React, { Suspense } from 'react';
import MessageBox from './MessageBox';
import { Canvas, } from '@react-three/fiber'
import { Center, OrbitControls, useProgress } from '@react-three/drei';
import dynamic from 'next/dynamic';
import ChessBoard from './components/ChessBoard';






const Home: React.FunctionComponent = () => {
  return (

     <div style={{ width: "100vw", height: "90vh", background: 'black' }}>
 
        <Canvas camera={{ position: [0, 185, 50], fov: 7, near: 1, far: 5000 }} dpr={[1,2]} >
        <ambientLight intensity={1.25} />
        <directionalLight />
       <ChessBoard />
        <OrbitControls />
        </Canvas>

 
  
      <div style={{ width: "100vw", height: "100vh", background: 'black' }}>
    <MessageBox />
      </div> 
         </div> 
 

   
   
  );
};

export default Home; 