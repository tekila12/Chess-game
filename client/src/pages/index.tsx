import React from 'react';
import styles from "@/styles/Home.module.css";
import Chessboard from './components/Chessboard';
import MessageBox from './components/MessagessBox/MessageBox';
import { Canvas, } from '@react-three/fiber'



// const Loader = () => {
//   const {progress} = useProgress()
//   return <Center maxWidth={10}>
//     <Text maxWidth={50} center>Loading 3D Model.  It can take some time {progress.toFixed(2)} %  </Text>
//   </Center>
// }

const Home: React.FunctionComponent = () => {
  return (
    <>
    <Canvas>

      <Chessboard />


    </Canvas>
      </>
  );
};

export default Home;