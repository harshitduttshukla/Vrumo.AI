import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  centered = false,
  className = '',
}: SectionHeaderProps) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`mb-10 md:mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      {label && (
        <span className="block text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-600 mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0f172a] leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 text-base text-[#475569] max-w-xl leading-relaxed font-medium">
          {description}
        </p>
      )}
    </motion.div>
  );
}
