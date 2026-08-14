const footerLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'AI Calling', href: '#calling-agent' },
  { label: 'WhatsApp AI', href: '#whatsapp-ai' },
  { label: 'CRM', href: '#crm-integration' },
  { label: 'Job Agent', href: '#job-apply-agent' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="bg-white py-12 text-xs text-slate-500">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <a href="#" className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-md bg-blue-600 p-0.5">
                <img src="/logo.png" alt="VrumoAI" className="w-full h-full rounded-[4px] object-cover bg-white" />
              </div>
              <span className="text-base font-bold text-[#0f172a] tracking-tight">
                Vrumo<span className="text-blue-600 font-extrabold ml-0.5">AI</span>
              </span>
            </a>
            <p className="text-slate-400 text-xs font-medium">AI agents built for real work.</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5 text-xs font-semibold">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-slate-500 hover:text-blue-600 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 flex items-center justify-between font-mono text-[11px] text-slate-400">
          <p>© 2026 VrumoAI. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-emerald-500 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Active
          </div>
        </div>
      </div>
    </footer>
  );
}
