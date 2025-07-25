import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  AccumulativeShadows,
  RandomizedLight,
  Center,
  Environment,
  OrbitControls
} from '@react-three/drei'

export default function ElementbgCareer1() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
      <group position={[0, -0.65, 0]}>
        <Sphere />
        <AccumulativeShadows
          temporal
          frames={400}
          color="black"
          colorBlend={300}
          opacity={1}
          scale={20}
          alphaTest={0.85}
        >
          <RandomizedLight
            amount={8}
            radius={5}
            ambient={0.5}
            position={[5, 3, 2]}
            bias={0.001}
          />
        </AccumulativeShadows>
      </group>
      <Env />
      <OrbitControls
        autoRotate
        autoRotateSpeed={4}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
      />
    </Canvas>
  )
}

function Sphere() {
  return (
    <Center top>
      <mesh castShadow>
        <sphereGeometry args={[0.75, 64, 64]} />
        <meshStandardMaterial metalness={1} roughness={0.5} />
      </mesh>
    </Center>
  )
}

function Env() {
  const [preset] = useState('dawn')
  return <Environment preset={preset} background blur={0.65} />
}
