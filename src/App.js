import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import './styles.css'

function MainScene(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()


 
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <group>
      <gridHelper args={[20,20]}  />
      <OrbitControls target={[0,0.35,0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3,2,5]} />

    <mesh
      {...props}
      ref={ref}
      scale={1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={"green"}/>
    </mesh>
    </group>
  )
}

export default function App() {
  return (
    
      <Suspense fallback={null}>
        <Canvas shadows>
          <MainScene />
        </Canvas>
      </Suspense>
  );
}
