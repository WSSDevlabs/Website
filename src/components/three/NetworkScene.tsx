import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

// A slowly turning sphere of connected nodes: sensors (light points), a few
// active nodes (signal red) and the links between them (structural blue).
// Mounted lazily by mountScene.ts on desktop only.

type Props = {
  count?: number;
  radius?: number;
  node?: string;
  accent?: string;
  link?: string;
  linkOpacity?: number;
};

function Network({
  count = 160,
  radius = 2.3,
  node = '#f3f2ee',
  accent = '#d92d20',
  link = '#2d5be3',
  linkOpacity = 0.28
}: Props) {
  const group = useRef<THREE.Group>(null);
  const accentMaterial = useRef<THREE.PointsMaterial>(null);

  const { nodes, accents, links } = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const jitter = 0.86 + ((i * 7919) % 100) / 380;
      points.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(radius * jitter));
    }

    const nodeArray = new Float32Array(count * 3);
    points.forEach((p, i) => p.toArray(nodeArray, i * 3));

    const accentPoints = points.filter((_, i) => i % 11 === 0);
    const accentArray = new Float32Array(accentPoints.length * 3);
    accentPoints.forEach((p, i) => p.toArray(accentArray, i * 3));

    const linkList: number[] = [];
    const maxDistance = radius * 0.4;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (points[i].distanceTo(points[j]) < maxDistance) {
          linkList.push(...points[i].toArray(), ...points[j].toArray());
        }
      }
    }

    return { nodes: nodeArray, accents: accentArray, links: new Float32Array(linkList) };
  }, [count, radius]);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.07;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, state.pointer.y * 0.22, 0.04);
    g.position.x = THREE.MathUtils.lerp(g.position.x, state.pointer.x * 0.2, 0.04);
    if (accentMaterial.current) {
      accentMaterial.current.size = 0.11 + Math.sin(state.clock.elapsedTime * 2.2) * 0.03;
    }
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodes, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.05} color={node} transparent opacity={0.9} sizeAttenuation depthWrite={false} />
      </points>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[accents, 3]} />
        </bufferGeometry>
        <pointsMaterial ref={accentMaterial} size={0.11} color={accent} transparent opacity={0.95} sizeAttenuation depthWrite={false} />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[links, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={link} transparent opacity={linkOpacity} depthWrite={false} />
      </lineSegments>
    </group>
  );
}

export default function NetworkScene(props: Props) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      eventSource={document.documentElement}
      eventPrefix="client"
      style={{ background: 'transparent', pointerEvents: 'none' }}
    >
      <Network {...props} />
    </Canvas>
  );
}
