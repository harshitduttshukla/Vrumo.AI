'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function AmbientNebula3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    // Soft subtle depth fog
    scene.fog = new THREE.FogExp2(0x0a0c10, 0.0007);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      4000
    );
    camera.position.z = 700;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0a0c10, 1);
    container.appendChild(renderer.domElement);

    // --- High-Quality Glow Texture ---
    const createGlowTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(108, 140, 255, 0.9)');
        gradient.addColorStop(0.5, 'rgba(61, 220, 132, 0.45)');
        gradient.addColorStop(0.8, 'rgba(108, 140, 255, 0.12)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 128, 128);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createGlowTexture();

    // --- Color Palette matching VrumoAI theme ---
    const palette = [
      new THREE.Color('#6C8CFF'), // Accent Blue
      new THREE.Color('#3DDC84'), // Neon Green
      new THREE.Color('#4EBEFF'), // Electric Cyan
      new THREE.Color('#8A98FF'), // Periwinkle
      new THREE.Color('#A78BFA'), // Soft Violet
      new THREE.Color('#FF9F5A'), // Warm Amber
    ];

    // --- Layer 1: Global Full-Height Nebula Stream (Top to Bottom) ---
    // Total vertical span covers the entire scroll depth (-4500 to +1500)
    const nebulaCount = 2800;
    const nebulaGeo = new THREE.BufferGeometry();
    const nebulaPositions = new Float32Array(nebulaCount * 3);
    const nebulaColors = new Float32Array(nebulaCount * 3);
    const nebulaSizes = new Float32Array(nebulaCount);

    for (let i = 0; i < nebulaCount; i++) {
      const i3 = i * 3;

      // Broad spatial distribution along the full page vertical height
      const y = (Math.random() - 0.7) * 5500; // From +1650 down to -3850
      const radius = 250 + Math.random() * 850;
      const angle = Math.random() * Math.PI * 2;

      nebulaPositions[i3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 300;
      nebulaPositions[i3 + 1] = y;
      nebulaPositions[i3 + 2] = Math.sin(angle) * radius * 0.8 + (Math.random() - 0.5) * 400;

      const chosenColor = palette[Math.floor(Math.random() * palette.length)];
      nebulaColors[i3] = chosenColor.r;
      nebulaColors[i3 + 1] = chosenColor.g;
      nebulaColors[i3 + 2] = chosenColor.b;

      nebulaSizes[i] = Math.random() * 12 + 6;
    }

    nebulaGeo.setAttribute('position', new THREE.BufferAttribute(nebulaPositions, 3));
    nebulaGeo.setAttribute('color', new THREE.BufferAttribute(nebulaColors, 3));
    nebulaGeo.setAttribute('size', new THREE.BufferAttribute(nebulaSizes, 1));

    const nebulaMat = new THREE.PointsMaterial({
      size: 9,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const nebulaPoints = new THREE.Points(nebulaGeo, nebulaMat);
    scene.add(nebulaPoints);

    // --- Layer 2: Ambient Floating Cyber Dust (Full Page Grid) ---
    const dustCount = 1800;
    const dustGeo = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    const dustColors = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount; i++) {
      const i3 = i * 3;
      dustPositions[i3] = (Math.random() - 0.5) * 2200;
      dustPositions[i3 + 1] = (Math.random() - 0.7) * 6000;
      dustPositions[i3 + 2] = (Math.random() - 0.5) * 1600;

      const c = palette[Math.floor(Math.random() * 3)];
      dustColors[i3] = c.r;
      dustColors[i3 + 1] = c.g;
      dustColors[i3 + 2] = c.b;
    }

    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    dustGeo.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));

    const dustMat = new THREE.PointsMaterial({
      size: 5,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const dustPoints = new THREE.Points(dustGeo, dustMat);
    scene.add(dustPoints);

    // --- Interactive Mouse & Smooth Scroll Parallax ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let currentScroll = 0;
    let targetScroll = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.4;
      mouseY = (e.clientY - windowHalfY) * 0.4;
    };

    const handleScroll = () => {
      targetScroll = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // --- Window Resize Handler ---
    const handleResize = () => {
      if (!renderer || !camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // --- Animation Loop ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // Smooth scroll interpolation (tracks page position proportionally)
      currentScroll += (targetScroll - currentScroll) * 0.08;

      // Camera smoothly travels down the full 3D galaxy as the user scrolls
      camera.position.x = targetX * 0.7;
      camera.position.y = -targetY * 0.5 - currentScroll * 0.85;
      camera.lookAt(targetX * 0.2, -currentScroll * 0.85, 0);

      // Continuous organic 3D rotations and drifting
      nebulaPoints.rotation.y = elapsedTime * 0.04;
      nebulaPoints.rotation.z = Math.sin(elapsedTime * 0.02) * 0.06;

      dustPoints.rotation.y = -elapsedTime * 0.02;
      dustPoints.rotation.x = Math.cos(elapsedTime * 0.02) * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup on Component Unmount ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      nebulaGeo.dispose();
      nebulaMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      particleTexture.dispose();
      renderer.dispose();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="ambient-nebula-canvas"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    />
  );
}
