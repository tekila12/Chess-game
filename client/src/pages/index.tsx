import React, { Suspense } from 'react';
import MessageBox from './MessageBox';
import { Canvas, } from '@react-three/fiber'
import { Center, OrbitControls, Text3D, useProgress } from '@react-three/drei';
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

 
  <Text3D> In Progress </Text3D>
      <div style={{ width: "100vw", height: "100vh", background: 'black' }}>

    <MessageBox />
      </div> 
         </div> 
 

   
   
  );
};

export default Home; 