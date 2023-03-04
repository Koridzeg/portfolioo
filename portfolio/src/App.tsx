import { Canvas } from '@react-three/fiber'
import Dice from './components/Dice'
import { Cloud, OrbitControls, Stage, Stars } from '@react-three/drei'

function App() {

  return (
    <>
      <Canvas camera={{ position: [0, 0, 100] }}>
        <pointLight intensity={1} position={[0, 0, 100]} />
        <OrbitControls enableRotate={false} enableZoom={false} />
        <Dice />
      </Canvas>
    </>
  )
}

export default App
