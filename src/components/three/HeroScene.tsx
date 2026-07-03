import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useRef } from 'react';
import type { ShaderMaterial, Mesh } from 'three';
import * as THREE from 'three';
import vertexShader from './shaders/gradient.vert.glsl?raw';
import fragmentShader from './shaders/gradient.frag.glsl?raw';

const uniforms = {
  uTime: { value: 0 },
  uColorA: { value: new THREE.Color('#e8f0fb') },
  uColorB: { value: new THREE.Color('#4a7fd6') },
  uColorC: { value: new THREE.Color('#e2342a') }
};

function GradientMesh() {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<ShaderMaterial>(null);

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.05;
      meshRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.6, 12]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.6} />
      <GradientMesh />
      <EffectComposer>
        <Bloom intensity={0.4} luminanceThreshold={0.3} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}
