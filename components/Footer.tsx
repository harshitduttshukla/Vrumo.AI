const productLinks = [
  ['AI CRM', '/real-estate-crm'],
  ['AI Calling', '/real-estate-ai-calling'],
  ['WhatsApp AI', '/real-estate-whatsapp-automation'],
  ['Lead Qualification', '/real-estate-lead-management'],
  ['Sales Automation', '/real-estate-sales-automation'],
  ['Follow-Up Automation', '/real-estate-lead-follow-up'],
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <a className="brand" href="/" aria-label="Vrumo AI home"><span className="brand-mark" aria-hidden="true"><i />V</span><span>Vrumo <b>AI</b></span></a>
          <p>AI CRM and automation for real estate teams.</p>
          <span>Capture. Qualify. Follow up. Convert.</span>
        </div>
        <div className="footer-column"><h2>PRODUCT</h2>{productLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>
        <div className="footer-column"><h2>SOLUTIONS</h2><a href="/ai-crm-for-real-estate-developers">Real Estate Developers</a><a href="/ai-crm-for-real-estate-agents">Brokers & Agencies</a><a href="/real-estate-lead-management">Property Consultants</a><a href="/#industries">Sales Teams</a></div>
        <div className="footer-column"><h2>RESOURCES</h2><a href="/#how-it-works">How It Works</a><a href="/#integrations">Integrations</a><a href="/#faq">FAQ</a><a href="mailto:hello@vrumoai.com">Contact</a></div>
      </div>
      <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Vrumo AI</span><a href="mailto:hello@vrumoai.com">hello@vrumoai.com</a><span>AI CRM FOR REAL ESTATE</span></div>
    </footer>
  );
}
