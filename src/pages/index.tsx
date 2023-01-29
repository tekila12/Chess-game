import React from 'react';
import styles from "@/styles/Home.module.css";
import Chessboard from './components/Chessboard';
import MessageBox from './components/MessagessBox/MessageBox';
const Home: React.FunctionComponent = () => {
  return (
   <>
   <Chessboard />
   <MessageBox />
   </>
  );
};

export default Home;