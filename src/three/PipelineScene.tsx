import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { PIPELINE_NODES } from '../data/portfolioData';

const GOLD = '#e9ad3c';
const GOLD_DEEP = '#b06f13';

interface SceneProps {
  /** Fewer segments/particles on phones and low-end devices. */
  quality: 'high' | 'low';
  /** Normalised page scroll (0 → 1) used for a gentle parallax drift. */
  scrollRef: React.RefObject<number>;
}

const NODE_POSITIONS = PIPELINE_NODES.map(
  (node) => new THREE.Vector3(...node.position),
);

const SEGMENTS = NODE_POSITIONS.slice(0, -1).map((start, index) => ({
  start,
  end: NODE_POSITIONS[index + 1],
}));

/** A single infrastructure node: wireframe shell around a glowing core. */
function Node({ position, index }: { position: THREE.Vector3; index: number }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    const group_ = group.current;
    if (!group_) return;
    const t = state.clock.elapsedTime;
    group_.rotation.y = t * 0.25 + index;
    group_.rotation.x = Math.sin(t * 0.35 + index) * 0.2;
    group_.position.y = position.y + Math.sin(t * 0.8 + index * 1.4) * 0.12;
  });

  return (
    <group ref={group} position={position}>
      <mesh>
        <icosahedronGeometry args={[0.42, 0]} />
        <meshBasicMaterial color={GOLD} wireframe transparent opacity={0.55} />
      </mesh>
      <mesh scale={0.55}>
        <icosahedronGeometry args={[0.42, 1]} />
        <meshStandardMaterial
          color={GOLD}
          emissive={GOLD_DEEP}
          emissiveIntensity={1.6}
          roughness={0.25}
          metalness={0.6}
        />
      </mesh>
    </group>
  );
}

/** Static gold link between two nodes, drawn as a thin oriented cylinder. */
function Link({ start, end }: { start: THREE.Vector3; end: THREE.Vector3 }) {
  const { position, quaternion, length } = useMemo(() => {
    const direction = new THREE.Vector3().subVectors(end, start);
    const len = direction.length();
    const quat = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      direction.clone().normalize(),
    );
    return {
      position: new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5),
      quaternion: quat,
      length: len,
    };
  }, [start, end]);

  return (
    <mesh position={position} quaternion={quaternion}>
      <cylinderGeometry args={[0.012, 0.012, length, 6, 1, true]} />
      <meshBasicMaterial color={GOLD} transparent opacity={0.28} />
    </mesh>
  );
}

/** Packet travelling from one node to the next — the "deployment" motif. */
function Packet({
  start,
  end,
  offset,
}: {
  start: THREE.Vector3;
  end: THREE.Vector3;
  offset: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const node = mesh.current;
    if (!node) return;
    const t = (state.clock.elapsedTime * 0.28 + offset) % 1;
    node.position.lerpVectors(start, end, t);
    const fade = Math.sin(t * Math.PI);
    node.scale.setScalar(0.55 + fade * 0.65);
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.06, 8, 8]} />
      <meshBasicMaterial color="#f8dfa6" />
    </mesh>
  );
}

/** Sparse dust field for depth; count scales down on compact devices. */
function Dust({ count }: { count: number }) {
  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  const points = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        color={GOLD}
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.5}
        depthWrite={false}
      />
    </points>
  );
}

export function PipelineScene({ quality, scrollRef }: SceneProps) {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const node = group.current;
    if (!node) return;

    // pointer is normalised to [-1, 1] by fiber; scroll adds a slow drift
    target.current.x = state.pointer.x * 0.32;
    target.current.y = state.pointer.y * 0.2 - scrollRef.current * 0.5;

    const damp = Math.min(1, delta * 2.2);
    node.rotation.y += (target.current.x - node.rotation.y) * damp;
    node.rotation.x += (-target.current.y - node.rotation.x) * damp;
    node.position.y = -scrollRef.current * 1.2;
  });

  // keep the whole pipeline inside narrow viewports
  const scale = Math.min(1, viewport.width / 9.5);

  return (
    <group ref={group} scale={scale}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]} intensity={1.1} color="#ffd591" />
      <pointLight position={[-5, -2, 3]} intensity={18} color={GOLD} distance={14} />

      {NODE_POSITIONS.map((position, index) => (
        <Node key={PIPELINE_NODES[index].label} position={position} index={index} />
      ))}

      {SEGMENTS.map((segment, index) => (
        <Link key={`link-${index}`} start={segment.start} end={segment.end} />
      ))}

      {quality === 'high' &&
        SEGMENTS.map((segment, index) => (
          <Packet
            key={`packet-${index}`}
            start={segment.start}
            end={segment.end}
            offset={index * 0.2}
          />
        ))}

      <Dust count={quality === 'high' ? 140 : 60} />
    </group>
  );
}
