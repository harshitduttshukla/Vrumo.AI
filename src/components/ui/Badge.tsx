interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'violet' | 'green' | 'amber';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variantStyles = {
    default: 'bg-slate-100 text-slate-700 border-slate-200',
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    violet: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    amber: 'bg-amber-50 text-amber-700 border-amber-200',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

