import { Canvas } from '@react-three/fiber'
import "./index.css";

export default function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh position={[0,0,-5]}>
          <cylinderGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}
