import React from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  id?: string;
}

export function GlowCard({ children, className = '', delay = 0, hover = true, id }: GlowCardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      className={`
        relative group rounded-2xl p-6
        bg-white
        border border-slate-200
        shadow-sm
        transition-all duration-300 ease-out
        ${hover ? 'hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5' : ''}
        ${className}
      `}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
