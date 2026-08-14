import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  id,
}: ButtonProps) {
  const base =
    ' border-1.5 border-green-500 inline-flex items-center justify-center font-bold transition-all duration-200 cursor-pointer whitespace-nowrap select-none outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 active:scale-[0.98]';

  const sizes = {
    sm: 'h-9 w-30 px-4 text-xs gap-1.5 rounded-lg',
    md: 'h-[42px] w-40 px-4.5 text-xs sm:text-sm gap-2 rounded-xl',
    lg: 'h-12 w-30 px-6 text-sm gap-2.5 rounded-xl',
  };

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-500 hover:via-blue-600 hover:to-indigo-500 text-white border border-blue-400/30 shadow-[0_4px_20px_-2px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_24px_0px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
    ghost:
      'text-slate-500 hover:text-slate-900 hover:bg-slate-100',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} id={id}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} id={id}>
      {children}
    </button>
  );
}
