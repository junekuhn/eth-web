import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import "./index.css";
import React, { useRef, useState, Suspense } from "react";
import Model from "./Model";


export default function App() {
  
  const myMesh = useRef();
  const [active, setActive] = useState(false);

  return (
    <div id="canvas-container">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <mesh scale={active ? 1.5 : 1} onClick={() => setActive(!active)} ref={myMesh}>
          <cylinderGeometry />
          <meshNormalMaterial />
        </mesh>
        <Suspense fallback={null}>
          <Model />
        </Suspense>

      </Canvas>
    </div>
  );
}
