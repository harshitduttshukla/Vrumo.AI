'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function OrbitalSculpture() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 6.4);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      mount.dataset.webgl = 'unavailable';
      return;
    }

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    mount.appendChild(renderer.domElement);

    const sculpture = new THREE.Group();
    scene.add(sculpture);

    const coreGeometry = new THREE.IcosahedronGeometry(1.38, 5);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x34332d,
      metalness: 0.88,
      roughness: 0.18,
      clearcoat: 0.8,
      clearcoatRoughness: 0.22,
      iridescence: 0.38,
      iridescenceIOR: 1.35,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    core.scale.set(1, 1.17, 0.92);
    core.rotation.set(-0.18, 0.28, 0.12);
    sculpture.add(core);

    const cageGeometry = new THREE.IcosahedronGeometry(1.47, 2);
    const cageMaterial = new THREE.MeshBasicMaterial({
      color: 0xd9d3c3,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const cage = new THREE.Mesh(cageGeometry, cageMaterial);
    cage.scale.set(1, 1.17, 0.92);
    sculpture.add(cage);

    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xff5c35,
      emissive: 0x7a1608,
      emissiveIntensity: 0.65,
      metalness: 0.5,
      roughness: 0.3,
    });
    const ringGeometry = new THREE.TorusGeometry(1.92, 0.018, 8, 180);
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.set(1.08, 0.12, 0.32);
    sculpture.add(ring);

    const ringTwoMaterial = new THREE.MeshBasicMaterial({
      color: 0xe9e2d2,
      transparent: true,
      opacity: 0.35,
    });
    const ringTwoGeometry = new THREE.TorusGeometry(2.24, 0.008, 6, 180);
    const ringTwo = new THREE.Mesh(ringTwoGeometry, ringTwoMaterial);
    ringTwo.rotation.set(0.36, 1.04, -0.48);
    sculpture.add(ringTwo);

    const satelliteMaterial = new THREE.MeshStandardMaterial({
      color: 0xffede4,
      emissive: 0xff4f2c,
      emissiveIntensity: 1.8,
      metalness: 0.25,
      roughness: 0.24,
    });
    const satellites = new THREE.Group();
    const satelliteGeometry = new THREE.SphereGeometry(0.075, 24, 24);
    const satellitePositions = [
      new THREE.Vector3(1.58, 0.94, 0.55),
      new THREE.Vector3(-1.46, -1.18, 0.4),
      new THREE.Vector3(0.45, -1.78, 0.76),
    ];
    satellitePositions.forEach((position) => {
      const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
      satellite.position.copy(position);
      satellites.add(satellite);
    });
    sculpture.add(satellites);

    const pointCount = 260;
    const pointPositions = new Float32Array(pointCount * 3);
    for (let i = 0; i < pointCount; i += 1) {
      const radius = 2.35 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pointPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pointPositions[i * 3 + 1] = radius * Math.cos(phi) * 0.72;
      pointPositions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xbab4a6,
      size: 0.018,
      transparent: true,
      opacity: 0.46,
      depthWrite: false,
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    const keyLight = new THREE.DirectionalLight(0xffd9c6, 5.5);
    keyLight.position.set(3.5, 3.8, 5);
    scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight(0xff4f2c, 4.4);
    rimLight.position.set(-4, -1.5, 2);
    scene.add(rimLight);
    scene.add(new THREE.AmbientLight(0xd7d1c4, 0.65));

    const pointer = new THREE.Vector2();
    const pointerTarget = new THREE.Vector2();
    const clock = new THREE.Clock();
    let frameId = 0;
    let visible = true;

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointerTarget.set(
        ((event.clientX - rect.left) / rect.width - 0.5) * 2,
        ((event.clientY - rect.top) / rect.height - 0.5) * 2,
      );
    };

    const onPointerLeave = () => pointerTarget.set(0, 0);
    const onVisibilityChange = () => {
      visible = document.visibilityState === 'visible';
      if (visible && !frameId && !prefersReducedMotion.matches) animate();
    };

    const animate = () => {
      if (!visible || prefersReducedMotion.matches) {
        frameId = 0;
        renderer.render(scene, camera);
        return;
      }

      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      pointer.lerp(pointerTarget, 0.045);

      sculpture.rotation.y = elapsed * 0.12 + pointer.x * 0.16;
      sculpture.rotation.x = Math.sin(elapsed * 0.22) * 0.06 - pointer.y * 0.12;
      core.rotation.y = elapsed * 0.08;
      cage.rotation.y = -elapsed * 0.08;
      ring.rotation.z = 0.32 + elapsed * 0.08;
      ringTwo.rotation.z = -0.48 - elapsed * 0.045;
      satellites.rotation.y = elapsed * 0.24;
      points.rotation.y = -elapsed * 0.018;
      points.rotation.z = elapsed * 0.01;

      renderer.render(scene, camera);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    mount.addEventListener('pointermove', onPointerMove, { passive: true });
    mount.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('visibilitychange', onVisibilityChange);
    resize();
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      mount.removeEventListener('pointermove', onPointerMove);
      mount.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      coreGeometry.dispose();
      coreMaterial.dispose();
      cageGeometry.dispose();
      cageMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      ringTwoGeometry.dispose();
      ringTwoMaterial.dispose();
      satelliteGeometry.dispose();
      satelliteMaterial.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="sculpture-shell">
      <div ref={mountRef} className="sculpture-canvas" aria-hidden="true" />
      <div className="sculpture-index mono" aria-hidden="true">
        <span>OPERATOR / 01</span>
        <span>ACTIVE SYSTEM</span>
      </div>
      <div className="sculpture-note" aria-hidden="true">
        <span />
        <p>Designed around<br />your operation</p>
      </div>
    </div>
  );
}
