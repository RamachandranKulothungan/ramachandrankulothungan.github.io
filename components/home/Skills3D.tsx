"use client";

import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

const skills = [
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "FastAPI", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "PyTorch", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Scikit-Learn", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "Terraform", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "GitHub Actions", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

// Double the skills for seamless looping
const extendedSkills = [...skills, ...skills];

const SPACING = 5;
const SCALE = 3;
const VIEW_LIMIT = 15; // Boundaries for resetting position

function SkillItem({ index, url, containerWidth }: { index: number; url: string; containerWidth: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useTexture(url);
  
  // Random float parameters
  const floatSpeed = useMemo(() => 0.001 + Math.random() * 0.001, []);
  const floatOffset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Move left
    // We access speed from a global or passed prop, but purely local state 
    // for this "infinite scroll" might be tricky if we want them synchronized.
    // Instead, let's let the parent control speed or use a shared value?
    // Actually, simple subtraction is fine.
    
    // We need to access the shared speed.
    // Let's use userData or just a constant for now, upgraded by mouse interaction in parent.
    const speed = state.scene.userData.currentSpeed || 0.025;
    
    meshRef.current.position.x -= speed;

    // Reset logic
    // We want the reset to happen when the item is fully off-screen to the left
    // And move it to the end of the chain.
    // Total width of the chain:
    const totalCount = extendedSkills.length;
    const totalWidth = totalCount * SPACING;
    
    // If item moves past the left boundary (e.g. -35), wrap it
    if (meshRef.current.position.x < -35) { 
        meshRef.current.position.x += totalWidth;
    }

    // Floating effect
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1000 * floatSpeed + floatOffset) * 0.15;
    
    // Mouse rotation effect
    const targetRotationY = state.scene.userData.targetRotationY || 0;
    meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.05;
  });

  return (
    <mesh
      ref={meshRef}
      position={[index * SPACING - 30, 0, 0]} // Start shifted left to cover viewport
      rotation={[0, 0, 0]}
    >
      <planeGeometry args={[SCALE, SCALE]} />
      <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
    </mesh>
  );
}

function SceneContent() {
  const { scene, viewport, camera, size } = useThree();
  const [hovered, setHovered] = useState(false);
  const { theme } = useTheme();

  // Handle fog color
  // Light: 0xf9fafb (gray-50), Dark: 0x111827 (gray-900) - check tailwind actual colors
  // Tailwind gray-900 is #111827 usually, but original code used 0x1f2937 (gray-800)?
  // Original css: dark:bg-gray-900.
  // Tailwind default gray-900: #111827.
  // Original JS: isDark ? 0x1f2937 : 0xf9fafb.
  // Let's match typical tailwind colors:
  // light: gray-50 (#f9fafb)
  // dark: gray-900 (#111827) OR gray-800 (#1f2937). 
  // User used dark:bg-gray-800/50 in container, but dark:bg-gray-900 in body.
  // The container is `dark:bg-gray-800/50`. So fog should allow that to blend?
  // Actually, standard fog is solid.
  // Let's use the container color for fog.
  const fogColor = theme === 'dark' ? 0x1f2937 : 0xf9fafb; 
  
  React.useEffect(() => {
    scene.fog = new THREE.Fog(fogColor, 10, 25);
  }, [theme, fogColor, scene]);

  // Adjust camera z based on viewport?
  // Original was fixed Z=6.
  // We can stick to that.
  
  useFrame((state) => {
     // Mouse interaction logic
     // We need to track mouse relative to container
     // R3F state.pointer is normalized (-1 to 1)
     
     const mouseX = state.pointer.x;
     
     // Update global shared state for items
     if (state.pointer.x === 0 && state.pointer.y === 0) {
         // Maybe mouse not detected yet
     }
     
     // If hovered, speed slows down
     const targetSpeed = hovered ? 0.005 : 0.025;
     
     // Note: we're using scene.userData to pass data to children to avoid re-renders
     // Passing props to children would cause re-renders of all meshes every frame if we aren't careful.
     // References are better.
     
     scene.userData.currentSpeed = targetSpeed; // Simple immediate update, or lerp if we want smooth speed change
     scene.userData.targetRotationY = hovered ? mouseX * 0.3 : 0;
  });

  return (
    <group 
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
    >
      <ambientLight intensity={3} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      {extendedSkills.map((skill, i) => (
        <SkillItem key={`${skill.name}-${i}`} index={i} url={skill.url} containerWidth={viewport.width} />
      ))}
    </group>
  );
}

export function Skills3D() {
  return (
    <div className="w-full h-[250px] relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-800/50">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
