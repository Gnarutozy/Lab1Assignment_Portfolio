/**
 * File Name: App.jsx
 * Student's Name: Hoang Giang Dang
 * Student ID: 301255147
 * Date: Jun 1,2024
 */
import { useState } from 'react'

import './App.css'

import styles from "./App.module.css";

import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      
      
    </div>
  );
}

export default App
