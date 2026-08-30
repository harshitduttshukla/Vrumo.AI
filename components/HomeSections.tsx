const modules = [
  {
    number: '01',
    label: 'AI LEAD CAPTURE',
    title: 'Capture Every Real Estate Enquiry.',
    text: 'Bring website forms, WhatsApp, campaigns, calls, landing pages and APIs into one real estate CRM.',
    points: ['Multi-source capture', 'Automatic lead records', 'Instant owner assignment'],
    visual: 'capture',
  },
  {
    number: '02',
    label: 'AI QUALIFICATION',
    title: 'Know Which Leads Are Ready to Buy.',
    text: 'Understand the property, budget, location, buying timeline, financing need and intent behind each enquiry.',
    points: ['Requirement extraction', 'Intent scoring', 'Priority routing'],
    visual: 'score',
  },
  {
    number: '03',
    label: 'WHATSAPP AI',
    title: 'Your Sales Assistant on WhatsApp.',
    text: 'Answer property questions, gather requirements, share approved information and move conversations to a site visit.',
    points: ['Context-aware replies', 'Automatic follow-ups', 'Visit scheduling'],
    visual: 'whatsapp',
  },
  {
    number: '04',
    label: 'AI CALLING',
    title: 'Talk to Leads. Capture the Outcome.',
    text: 'Handle bounded inbound and outbound conversations, qualify intent and trigger the next approved sales step.',
    points: ['Inbound and outbound', 'Call summaries', 'CRM activity sync'],
    visual: 'calling',
  },
  {
    number: '05',
    label: 'REAL ESTATE CRM',
    title: 'Move Every Opportunity Forward.',
    text: 'See every enquiry, interaction, site visit, owner and next action in a pipeline built around property sales.',
    points: ['Project-level pipelines', 'Complete lead history', 'Sales-owner visibility'],
    visual: 'pipeline',
  },
  {
    number: '06',
    label: 'WORKFLOW AUTOMATION',
    title: 'Make the Next Step Automatic.',
    text: 'Trigger messages, calls, assignments, reminders and record updates from real events in your sales process.',
    points: ['Follow-up sequences', 'Team notifications', 'System synchronization'],
    visual: 'workflow',
  },
];

const faqs = [
  ['What is a real estate CRM?', 'A real estate CRM helps developers, brokers, consultants and sales teams organize leads, contacts, property requirements, conversations, follow-ups, site visits and opportunities in one system.'],
  ['What is an AI CRM for real estate?', 'An AI CRM adds automation to the lead lifecycle. It can capture enquiries, understand requirements, qualify intent, prepare or send approved responses, trigger follow-ups and keep records current with less manual entry.'],
  ['Can Vrumo automate WhatsApp follow-ups?', 'Vrumo can support approved WhatsApp workflows for qualification, reminders, property information and follow-up sequences. The exact setup depends on your provider, templates, permissions and business rules.'],
  ['Can Vrumo qualify real estate leads automatically?', 'Yes. Vrumo can gather and structure requirements such as budget, location, property type, timeline, purpose and buying intent, then use your rules to score and route the opportunity.'],
  ['Can Vrumo schedule site visits?', 'Yes. Vrumo can connect qualification workflows with available calendars and business systems to offer suitable slots, confirm visits, send reminders and notify the responsible sales person.'],
  ['Can Vrumo integrate with our existing CRM?', 'Vrumo can connect with suitable CRM, calendar, telephony, database and internal APIs. Integration feasibility depends on the system’s API access, permissions and the workflow you want to automate.'],
];

function ModuleVisual({ type }: { type: string }) {
  if (type === 'capture') return <div className="module-ui capture-ui"><div className="source-row"><span>WEB</span><span>WA</span><span>CALL</span><span>ADS</span></div><div className="capture-arrow">↓</div><div className="new-record"><i>RS</i><div><small>NEW LEAD CAPTURED</small><strong>Rahul Sharma</strong></div><b>CRM ✓</b></div></div>;
  if (type === 'score') return <div className="module-ui score-ui"><div className="score-ring"><span>92<small>%</small></span></div><div className="score-detail"><small>HIGH INTENT</small><strong>3 BHK · Gurgaon</strong><p>₹1.2 Cr · 0–30 days</p><span>Ready for sales</span></div></div>;
  if (type === 'whatsapp') return <div className="module-ui whatsapp-ui"><div className="chat incoming">Is the 3 BHK still available?<time>10:42</time></div><div className="chat outgoing"><b>V</b><span>Yes. Would you like pricing and a site visit slot?</span><time>10:42 ✓✓</time></div><div className="typing"><i /><i /><i /> Vrumo is active</div></div>;
  if (type === 'calling') return <div className="module-ui call-ui"><div className="call-person"><i>RS</i><div><small>AI CALL IN PROGRESS</small><strong>Rahul Sharma</strong></div><time>00:42</time></div><div className="waveform">{[18,28,10,36,22,31,14,39,20,30,12,34,17,25,9,32].map((height, index) => <i key={index} style={{ height }} />)}</div><div className="call-result"><span>✓ Requirement</span><span>✓ Budget</span><span>✓ Visit</span></div></div>;
  if (type === 'pipeline') return <div className="module-ui mini-pipeline"><div><small>NEW</small><span><b>PM</b>2 BHK · Noida</span></div><i>→</i><div><small>QUALIFIED</small><span><b>RS</b>3 BHK · Gurgaon</span></div><i>→</i><div><small>VISIT</small><span><b>AV</b>Villa · Pune</span></div></div>;
  return <div className="module-ui workflow-ui"><div><span>LEAD QUALIFIED</span><b>✓</b></div><i /><div><span>FOLLOW-UP SENT</span><b>✓</b></div><i /><div><span>SALES TEAM ALERTED</span><b>✓</b></div></div>;
}

export function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="wrap">
        <div className="section-heading problem-heading">
          <div><span className="section-kicker">THE REAL LEAK</span><h2>Real Estate Teams Don&apos;t Lose Leads.<br /><em>They Lose Follow-Ups.</em></h2></div>
          <p>Enquiries arrive everywhere. Sales activity gets split across phones, spreadsheets and CRMs. The first response is slow, context disappears, and good leads go cold.</p>
        </div>
        <div className="problem-grid">
          <article className="problem-list-card">
            <span className="card-label">WHERE MOMENTUM BREAKS</span>
            <ul><li><b>01</b>Leads arrive from disconnected channels</li><li><b>02</b>CRM updates depend on manual entry</li><li><b>03</b>WhatsApp enquiries wait too long</li><li><b>04</b>Follow-ups stop after the first call</li><li><b>05</b>Pipeline visibility is always incomplete</li></ul>
          </article>
          <div className="comparison-card">
            <div className="comparison-row without"><span className="comparison-label">WITHOUT VRUMO</span><div className="flow-line"><b>Lead</b><i>→</i><b>WhatsApp</b><i>→</i><b>Sheet</b><i>→</i><b>Missed call</b><i>→</i><b>Forgotten</b></div></div>
            <div className="comparison-row with"><span className="comparison-label">WITH VRUMO</span><div className="flow-line"><b>Lead</b><i>→</i><b>AI qualified</b><i>→</i><b>CRM</b><i>→</i><b>Follow-up</b><i>→</i><b>Site visit</b></div></div>
            <p>Capture the lead. Qualify the intent. Schedule the visit. Update the CRM.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PlatformSection() {
  return (
    <section className="platform-section" id="platform">
      <div className="wrap">
        <div className="section-heading centered-heading"><span className="section-kicker">THE VRUMO PLATFORM</span><h2>One AI Layer Across Your Entire<br />Real Estate Sales Process.</h2><p>Every module works together, so the context from one conversation becomes the next action in your pipeline.</p></div>
        <div className="module-grid">
          {modules.map((module) => <article className="module-card" key={module.number}><div className="module-top"><span>{module.number}</span><small>{module.label}</small></div><h3>{module.title}</h3><p>{module.text}</p><ul>{module.points.map((point) => <li key={point}>✓ {point}</li>)}</ul><ModuleVisual type={module.visual} /></article>)}
        </div>
      </div>
    </section>
  );
}

export function CallingSection() {
  return (
    <section className="calling-section">
      <div className="wrap calling-layout">
        <div className="calling-copy"><span className="section-kicker">AI CALLING</span><h2>AI That Can Actually Talk to Your Leads.</h2><p>Vrumo AI calling agents can handle bounded inbound and outbound conversations, qualify prospects, answer approved questions, and trigger the next step automatically.</p><ul><li><span>01</span>Capture requirements during the call</li><li><span>02</span>Identify budget, location and buying timeline</li><li><span>03</span>Write the outcome back to your CRM</li></ul><a href="/real-estate-ai-calling">Explore real estate AI calling <span>↗</span></a></div>
        <div className="call-console">
          <div className="console-head"><span>VRUMO / VOICE AGENT</span><i>LIVE</i></div>
          <div className="caller"><span>RS</span><small>INCOMING CALL</small><h3>Rahul Sharma</h3><p>Property enquiry · Gurgaon</p><time>00:42</time></div>
          <div className="voice-wave">{[22,42,18,58,31,65,24,48,70,29,53,20,62,36,56,26,46,18,37,24,58,30,47,21].map((height, index) => <i key={index} style={{ height }} />)}</div>
          <div className="call-analysis"><div><small>INTENT</small><strong>Property enquiry</strong></div><div><small>LEAD QUALITY</small><strong>92% · High</strong></div><div><small>AGENT STATUS</small><strong>Qualifying</strong></div></div>
          <ul className="call-checks"><li><span>✓</span>Requirement captured<time>00:18</time></li><li><span>✓</span>Budget identified<time>00:29</time></li><li><span>✓</span>Site visit scheduled<time>00:38</time></li><li><span>✓</span>CRM updated<time>00:42</time></li></ul>
        </div>
      </div>
    </section>
  );
}

const pipeline = [
  ['NEW LEAD', [['Priya Mehta', '2 BHK · Noida', '₹85 L', '78'], ['Karan Shah', 'Office · Mumbai', '₹3.1 Cr', '71']]],
  ['CONTACTED', [['Neha Kapoor', '3 BHK · Pune', '₹1.4 Cr', '74']]],
  ['QUALIFIED', [['Rahul Sharma', '3 BHK · Gurgaon', '₹1.2 Cr', '92'], ['Amit Verma', 'Villa · Pune', '₹2.4 Cr', '88']]],
  ['SITE VISIT', [['Meera Nair', '2 BHK · Bengaluru', '₹98 L', '84']]],
  ['NEGOTIATION', [['Rohan Sethi', 'Penthouse · Noida', '₹4.8 Cr', '91']]],
  ['BOOKED', [['Diya Patel', '3 BHK · Ahmedabad', '₹1.1 Cr', '95']]],
] as const;

export function CRMSection() {
  return (
    <section className="crm-section" id="crm">
      <div className="wrap">
        <div className="section-heading crm-section-heading"><div><span className="section-kicker">PROPERTY SALES CRM</span><h2>A CRM Built Around the<br />Real Estate Sales Cycle.</h2></div><p>See where every opportunity stands, what each buyer needs, and the exact next action. No hunting across message threads or spreadsheets.</p></div>
        <div className="pipeline-window">
          <div className="pipeline-toolbar"><div><b>Sales pipeline</b><span>46 active opportunities</span></div><div className="filters"><span>All projects⌄</span><span>All sources⌄</span><span>High intent⌄</span><button>＋ Add lead</button></div></div>
          <div className="pipeline-board">
            {pipeline.map(([stage, cards]) => <div className="pipeline-column" key={stage}><div className="column-head"><span>{stage}</span><b>{cards.length}</b></div>{cards.map(([name, property, budget, score]) => <article key={name}><div className="pipeline-person"><i>{name.split(' ').map((part) => part[0]).join('')}</i><strong>{name}</strong><em>{score}%</em></div><p>{property}</p><small>{budget}</small><div className="pipeline-meta"><span>● AI qualified</span><b>⋯</b></div></article>)}</div>)}
          </div>
        </div>
        <div className="crm-deep-links"><a href="/real-estate-crm">Explore the real estate CRM <span>↗</span></a><p>Filter by project, property type, budget, location, lead score, owner or status.</p></div>
      </div>
    </section>
  );
}

const followSteps = ['Lead qualified', 'AI sends WhatsApp', 'No response', '24-hour follow-up', 'AI call', 'Site visit', 'Sales executive notified', 'CRM updated'];
const visitSteps = ['Lead qualified', 'Property selected', 'Availability checked', 'Calendar checked', 'Slot offered', 'Visit booked', 'Reminder sent', 'Sales agent notified', 'CRM updated'];

function Workflow({ steps, green = false }: { steps: string[]; green?: boolean }) {
  return <div className={`vertical-workflow ${green ? 'is-green' : ''}`}>{steps.map((step, index) => <div className="workflow-step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><b>{step}</b>{index < steps.length - 1 && <i />}{index === steps.length - 1 && <em>✓</em>}</div>)}</div>;
}

export function AutomationSection() {
  return (
    <section className="automation-section" id="automation">
      <div className="wrap">
        <div className="section-heading centered-heading light-heading"><span className="section-kicker">AUTOMATION THAT CLOSES THE GAP</span><h2>Never Let a Good Lead Go Cold.</h2><p>Design the next action once. Vrumo keeps it moving, makes the handoff clear, and records what happened.</p></div>
        <div className="automation-grid">
          <article><div className="automation-card-head"><span>01 / FOLLOW-UP</span><h3>Follow up while intent is still warm.</h3><p>Move from a qualified enquiry to a human conversation without relying on memory.</p></div><Workflow steps={followSteps} /></article>
          <article><div className="automation-card-head"><span>02 / SITE VISIT</span><h3>From enquiry to site visit—automatically.</h3><p>Coordinate availability, calendars, confirmations and team notifications in one flow.</p></div><Workflow steps={visitSteps} green /></article>
        </div>
        <div className="automation-links"><a href="/real-estate-lead-follow-up">Lead follow-up automation ↗</a><a href="/real-estate-sales-automation">Real estate sales automation ↗</a></div>
      </div>
    </section>
  );
}

const useCases = [
  ['Lead Qualification', 'Identify high-intent prospects from real requirements.'],
  ['WhatsApp Follow-Ups', 'Respond and continue approved sequences without manual chasing.'],
  ['Missed Call Recovery', 'Create the next action when an enquiry call goes unanswered.'],
  ['Site Visit Booking', 'Turn qualified conversations into confirmed property visits.'],
  ['Lead Distribution', 'Route opportunities by project, location, value or ownership rules.'],
  ['CRM Updates', 'Record conversations, requirements, actions and outcomes automatically.'],
  ['Lead Re-engagement', 'Bring suitable dormant opportunities back into the pipeline.'],
  ['Sales Notifications', 'Alert the right person when a valuable lead is ready.'],
];

export function UseCasesSection() {
  return (
    <section className="use-cases-section">
      <div className="wrap">
        <div className="section-heading use-heading"><div><span className="section-kicker">USE CASES</span><h2>Automate the Work Your Sales Team Repeats Every Day.</h2></div><p>Start with one bottleneck or connect the full lead journey. Each workflow stays bounded by the rules, systems and approvals you define.</p></div>
        <div className="use-case-grid">{useCases.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div className="case-icon" aria-hidden="true">↗</div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    ['01', 'Connect Your Lead Sources', 'Connect website forms, WhatsApp, calling, campaigns and suitable CRM systems.', ['WEBSITE', 'WHATSAPP', 'CALLING', 'CAMPAIGNS']],
    ['02', 'Let AI Handle the Repetition', 'Vrumo captures, qualifies, communicates, follows up and updates connected systems.', ['CAPTURE', 'QUALIFY', 'FOLLOW UP', 'SYNC']],
    ['03', 'Your Team Focuses on Closing', 'Sales teams receive qualified opportunities with the context and next action ready.', ['QUALIFIED LEAD', 'CLEAR CONTEXT', 'HUMAN HANDOFF']],
  ];
  return (
    <section className="how-section" id="how-it-works">
      <div className="wrap"><div className="section-heading centered-heading"><span className="section-kicker">HOW IT WORKS</span><h2>From Lead to Deal,<br />Without the Manual Work.</h2></div><div className="how-grid">{steps.map(([num, title, text, tags]) => <article key={num as string}><span className="how-num">{num}</span><div className="how-signal"><i /></div><h3>{title}</h3><p>{text}</p><div>{(tags as string[]).map((tag) => <small key={tag}>{tag}</small>)}</div></article>)}</div></div>
    </section>
  );
}

const integrationNames = ['WhatsApp', 'Twilio', 'HubSpot', 'Salesforce', 'Google Calendar', 'Slack', 'REST API', 'PostgreSQL'];

export function IntegrationsAndImpact() {
  return (
    <>
      <section className="integrations-section" id="integrations">
        <div className="wrap integrations-layout"><div><span className="section-kicker">INTEGRATIONS</span><h2>Works With the Tools Your Real Estate Team Already Uses.</h2><p>Connect Vrumo to the systems already in your workflow. If your CRM, lead source, calendar, telephony provider or internal platform has a suitable API, Vrumo can usually connect to it.</p><small>Integration availability depends on API access, permissions and your selected provider.</small></div><div className="integration-grid">{integrationNames.map((name, index) => <div key={name}><span>{['W','T','H','S','31','S','⌁','DB'][index]}</span><b>{name}</b></div>)}</div></div>
      </section>
      <section className="impact-section">
        <div className="wrap"><div className="section-heading impact-heading"><span className="section-kicker">BUSINESS IMPACT</span><h2>What Happens When Your Team Stops Chasing Leads?</h2></div><div className="impact-grid"><article><span>01</span><h3>Faster Response</h3><p>Respond to new enquiries immediately.</p></article><article><span>02</span><h3>Consistent Follow-Up</h3><p>Every qualified lead gets the next action.</p></article><article><span>03</span><h3>Less Manual CRM Work</h3><p>Capture activities and keep records current.</p></article><article><span>04</span><h3>More Sales Focus</h3><p>Spend more time closing and less time on admin.</p></article></div></div>
      </section>
    </>
  );
}

const industries = [
  ['DEVELOPERS', 'Manage project enquiries, qualification, site visits and multi-stage sales pipelines.', '/ai-crm-for-real-estate-developers'],
  ['BROKERS & AGENCIES', 'Centralize leads from multiple sources and automate the follow-up around each listing.', '/ai-crm-for-real-estate-agents'],
  ['PROPERTY CONSULTANTS', 'Prioritize high-intent prospects and reduce manual coordination across buyers.', '/real-estate-lead-management'],
  ['CHANNEL PARTNERS', 'Route and manage qualified project opportunities with clear ownership and context.', '/real-estate-ai-automation'],
];

export function IndustriesSection() {
  return <section className="industries-section" id="industries"><div className="wrap"><div className="section-heading industries-heading"><div><span className="section-kicker">BUILT FOR REAL ESTATE</span><h2>Built for the Way<br />Real Estate Actually Works.</h2></div><p>Vrumo adapts to project sales, brokerage workflows, distributed teams and complex lead sources—without flattening them into a generic sales process.</p></div><div className="industry-grid">{industries.map(([title, text, href], index) => <a href={href} key={title}><span>{String(index + 1).padStart(2, '0')}</span><div className="building-lines" aria-hidden="true"><i /><i /><i /><i /></div><h3>{title}</h3><p>{text}</p><b>Explore solution ↗</b></a>)}</div></div></section>;
}

export function FAQSection() {
  return <section className="faq-section" id="faq"><div className="wrap faq-layout"><div><span className="section-kicker">FREQUENTLY ASKED</span><h2>Real Estate CRM,<br />Made Clear.</h2><p>Practical answers about the platform, integrations and what can be automated.</p><a href="mailto:hello@vrumoai.com?subject=Question%20about%20Vrumo">Ask a different question ↗</a></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{String(index + 1).padStart(2, '0')}</span>{question}<i>＋</i></summary><p>{answer}</p></details>)}</div></div></section>;
}

export function FinalCTA() {
  return <section className="final-cta" id="cta"><div className="cta-gridlines" aria-hidden="true" /><div className="wrap cta-layout"><span className="section-kicker">READY TO REMOVE THE BOTTLENECK?</span><h2>What If Your Real Estate Team Had an <em>AI Sales Assistant?</em></h2><p>Tell us where your leads are getting stuck. We&apos;ll show you how Vrumo can automate the workflow from first enquiry to follow-up and site visit.</p><div><a className="button button-primary" href="mailto:hello@vrumoai.com?subject=Book%20a%20Vrumo%20demo">Book a Demo <span>↗</span></a><a className="button button-quiet" href="mailto:hello@vrumoai.com">Talk to Vrumo <span>↗</span></a></div><small>hello@vrumoai.com</small></div></section>;
}
