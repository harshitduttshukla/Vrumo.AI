'use client';

import dynamic from 'next/dynamic';

const OrbitalSculpture = dynamic(
  () => import('./OrbitalSculpture').then((module) => module.OrbitalSculpture),
  {
    ssr: false,
    loading: () => <div className="sculpture-shell sculpture-shell-loading" aria-hidden="true" />,
  },
);

export function OrbitalSculptureLoader() {
  return <OrbitalSculpture />;
}
