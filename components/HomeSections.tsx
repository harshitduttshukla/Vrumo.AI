'use client';

import { useState } from 'react';
import Link from 'next/link';

const modules = [
  {
    number: '01',
    label: 'MULTI-SOURCE CAPTURE',
    title: 'Bring Every Lead Into One Working Queue.',
    text: 'Organize Meta ads, direct WhatsApp enquiries, website chatbot leads, imported databases and broadcast replies in one CRM.',
    points: ['Source-specific tabs', 'Search and combined filters', 'Automatic lead records'],
    visual: 'capture',
  },
  {
    number: '02',
    label: 'WHATSAPP QUALIFICATION',
    title: 'Give Advisors the Context Before They Call.',
    text: 'The chatbot records project interest, country, budget, purchase purpose, decision timeline and preferred call time.',
    points: ['Structured buyer requirements', 'Two-message qualification gate', 'Urgent callback flag'],
    visual: 'score',
  },
  {
    number: '03',
    label: 'ASSIGNMENT & ACCESS',
    title: 'Route Leads and Protect Ownership.',
    text: 'Use project-specific rules or round-robin assignment, then give each advisor access only to the leads they own.',
    points: ['Project-based routing', 'Round-robin distribution', 'Role-based dashboards'],
    visual: 'calling',
  },
  {
    number: '04',
    label: 'COMPLETE LEAD RECORD',
    title: 'Keep the Conversation With the Lead.',
    text: 'Open one record to see the full WhatsApp transcript, captured attributes, brochure links, internal notes, owner and source.',
    points: ['Conversation transcript', 'Private permanent notes', 'Clickable source history'],
    visual: 'whatsapp',
  },
  {
    number: '05',
    label: 'COLD DATABASE OPERATIONS',
    title: 'Make Large Imports Workable for Sales.',
    text: 'Import Excel or CSV databases, split them across advisors and release new leads in manageable active batches of 500.',
    points: ['Single-owner or round-robin import', '500-lead active batches', 'Per-file progress tracker'],
    visual: 'pipeline',
  },
  {
    number: '06',
    label: 'CALLBACKS & AUDIT',
    title: 'Make Every Follow-Up Accountable.',
    text: 'Schedule exact callback times, remind the assigned advisor on WhatsApp and keep a read-only history of every change.',
    points: ['Scheduled callback reminders', 'Ten sales statuses', 'Read-only activity history'],
    visual: 'workflow',
  },
];

const faqs = [
  [
    'What does the WhatsApp bot capture?',
    'The deployed flow records the interested project, country, budget range, purchase purpose, decision timeline and preferred call time. The full conversation transcript remains attached to the lead record.',
  ],
  [
    'How are leads assigned to sales advisors?',
    'The CRM supports project-specific routing and round-robin assignment. An advisor receives a WhatsApp alert for a newly assigned organic, ad or chatbot lead; imported cold-database leads follow a separate batch workflow.',
  ],
  [
    'What can an admin see that a salesperson cannot?',
    'Admins see the full lead database, source tabs, team workloads, conversion yield, project popularity, imports and exports. Sales advisors see only their own assigned leads, personal metrics and upcoming callbacks.',
  ],
  [
    'How do callback reminders work?',
    'When an advisor sets the status to Call back and saves an exact date and time, the CRM queues one WhatsApp reminder approximately a day before. Changing the callback time resets the reminder for the new schedule.',
  ],
  [
    'How does the 500-lead batch system work?',
    'For large imported databases, each advisor sees 500 untouched leads at a time plus every lead they have already contacted. Once all 500 have moved out of New, the next 500 are released automatically.',
  ],
  [
    'Which lead statuses are supported?',
    'The live workflow uses New, Call back, Did not pick up, Not reachable, Follow up, Site visit, Wrong no., Deal success, Rejected and Not interested. Every change is written to the activity history.',
  ],
];

function ModuleVisual({ type }: { type: string }) {
  if (type === 'capture')
    return (
      <div className="module-ui capture-ui">
        <div className="source-row">
          <span>ADS</span>
          <span>WA</span>
          <span>BOT</span>
          <span>CSV</span>
        </div>
        <div className="capture-arrow">↓</div>
        <div className="new-record">
          <i>RS</i>
          <div>
            <small>NEW LEAD CAPTURED</small>
            <strong>Priya Sharma</strong>
          </div>
          <b>CRM ✓</b>
        </div>
      </div>
    );
  if (type === 'score')
    return (
      <div className="module-ui score-ui">
        <div className="score-ring">
          <span>6<small> fields</small></span>
        </div>
        <div className="score-detail">
          <small>QUALIFICATION CAPTURED</small>
          <strong>The Westin Residences</strong>
          <p>₹5–7 Cr · Self Use · India</p>
          <span>Preferred call: Morning</span>
        </div>
      </div>
    );
  if (type === 'whatsapp')
    return (
      <div className="module-ui whatsapp-ui">
        <div className="chat incoming">
          I&apos;m interested in The Westin Residences.
          <time>10:42</time>
        </div>
        <div className="chat outgoing">
          <b>V</b>
          <span>Is this for Self Use, Capital Growth or Monthly Income?</span>
          <time>10:42 ✓✓</time>
        </div>
        <div className="typing">
          <i />
          <i />
          <i /> Full transcript saved to the lead
        </div>
      </div>
    );
  if (type === 'calling')
    return (
      <div className="module-ui call-ui">
        <div className="call-person">
          <i>PS</i>
          <div>
            <small>NEW LEAD ASSIGNED</small>
            <strong>Priya Sharma</strong>
          </div>
          <time>SP008</time>
        </div>
        <div className="waveform">
          {[18, 28, 10, 36, 22, 31, 14, 39, 20, 30, 12, 34, 17, 25, 9, 32].map((height, index) => (
            <i key={index} style={{ height }} />
          ))}
        </div>
        <div className="call-result">
          <span>✓ Project rule</span>
          <span>✓ Owner set</span>
          <span>✓ Alert queued</span>
        </div>
      </div>
    );
  if (type === 'pipeline')
    return (
      <div className="module-ui mini-pipeline">
        <div>
          <small>ACTIVE BATCH</small>
          <span>
            <b>500</b>New leads
          </span>
        </div>
        <i className="pipe-arrow">→</i>
        <div>
          <small>CONTACTED</small>
          <span>
            <b>47</b>Always visible
          </span>
        </div>
        <i className="pipe-arrow">→</i>
        <div>
          <small>NEXT BATCH</small>
          <span>
            <b>500</b>Auto-allocates
          </span>
        </div>
      </div>
    );
  return (
    <div className="module-ui workflow-ui">
      <div>
        <span>STATUS: CALL BACK</span>
        <b>✓</b>
      </div>
      <i />
      <div>
        <span>CALLBACK TIME SAVED</span>
        <b>✓</b>
      </div>
      <i />
      <div>
        <span>REMINDER + AUDIT LOG</span>
        <b>✓</b>
      </div>
    </div>
  );
}

export function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="wrap">
        <div className="section-heading problem-heading">
          <div>
            <span className="section-kicker">THE REAL LEAK</span>
            <h2>
              Real Estate Teams Don&apos;t Lose Leads.
              <br />
              <em>They Lose Follow-Ups.</em>
            </h2>
          </div>
          <p>
            Enquiries arrive from ads, WhatsApp, chatbots, broadcasts and spreadsheets. Without one owner, one status
            and one history, advisors lose context and managers lose visibility.
          </p>
        </div>
        <div className="problem-grid">
          <article className="problem-list-card">
            <span className="card-label">WHERE MOMENTUM BREAKS</span>
            <ul>
              <li>
                <b>01</b>Leads arrive from disconnected channels
              </li>
              <li>
                <b>02</b>Lead ownership is hard to verify
              </li>
              <li>
                <b>03</b>WhatsApp context stays in the inbox
              </li>
              <li>
                <b>04</b>Callbacks depend on memory
              </li>
              <li>
                <b>05</b>Cold databases overwhelm advisors
              </li>
            </ul>
          </article>
          <div className="comparison-card">
            <div className="comparison-row without">
              <span className="comparison-label">WITHOUT VRUMO</span>
              <div className="flow-line desktop-flow">
                <b>Lead</b>
                <i>→</i>
                <b>WhatsApp</b>
                <i>→</i>
                <b>Sheet</b>
                <i>→</i>
                <b>Missed call</b>
                <i>→</i>
                <b>Forgotten</b>
              </div>
              <div className="flow-line mobile-flow">
                <b>Lead</b>
                <i>↓</i>
                <b>WhatsApp</b>
                <i>↓</i>
                <b>Sheet</b>
                <i>↓</i>
                <b>Missed call</b>
                <i>↓</i>
                <b>Forgotten</b>
              </div>
            </div>
            <div className="comparison-row with">
              <span className="comparison-label">WITH VRUMO</span>
              <div className="flow-line desktop-flow">
                <b>Lead</b>
                <i>→</i>
                <b>Bot qualified</b>
                <i>→</i>
                <b>CRM</b>
                <i>→</i>
                <b>Advisor assigned</b>
                <i>→</i>
                <b>Callback tracked</b>
              </div>
              <div className="flow-line mobile-flow">
                <b>Lead</b>
                <i>↓</i>
                <b>Bot qualified</b>
                <i>↓</i>
                <b>CRM</b>
                <i>↓</i>
                <b>Advisor assigned</b>
                <i>↓</i>
                <b>Callback tracked</b>
              </div>
            </div>
            <p>Capture the lead. Preserve the context. Assign an owner. Track the next action.</p>
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
        <div className="section-heading centered-heading">
          <span className="section-kicker">THE DEPLOYED CRM WORKFLOW</span>
          <h2>
            One Operating System Across Your
            <br />
            Real Estate Sales Process.
          </h2>
          <p>Every module below maps to the live admin and salesperson workflows documented in the deployed CRM.</p>
        </div>
        <div className="module-grid">
          {modules.map((module) => (
            <article className="module-card" key={module.number}>
              <div className="module-top">
                <span>{module.number}</span>
                <small>{module.label}</small>
              </div>
              <h3>{module.title}</h3>
              <p>{module.text}</p>
              <ul>
                {module.points.map((point) => (
                  <li key={point}>✓ {point}</li>
                ))}
              </ul>
              <ModuleVisual type={module.visual} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OperationsSection() {
  return (
    <section className="calling-section">
      <div className="wrap calling-layout">
        <div className="calling-copy">
          <span className="section-kicker">ROLE-BASED OPERATIONS</span>
          <h2>One CRM. The Right View for Every Role.</h2>
          <p>
            Admins get team-wide visibility and advisors get a focused daily queue. Lead access, metrics and actions
            stay aligned to each person&apos;s responsibility.
          </p>
          <ul>
            <li>
              <span>01</span>Admins see source tabs, team workloads and conversion yield
            </li>
            <li>
              <span>02</span>Sales advisors see only the leads assigned to their account
            </li>
            <li>
              <span>03</span>Search, filters and page position are preserved while working
            </li>
          </ul>
          <Link href="/real-estate-crm" className="button button-quiet">
            Explore the CRM workspace <span>↗</span>
          </Link>
        </div>
        <div className="call-console">
          <div className="console-head">
            <span>CRM / ROLE ACCESS</span>
            <i>SYNCED</i>
          </div>
          <div className="caller">
            <span>AD</span>
            <small>ADMIN DASHBOARD</small>
            <h3>Team-wide lead operations</h3>
            <p>Ads · Imported · Broadcast · Junk</p>
            <time>10s refresh</time>
          </div>
          <div className="call-analysis">
            <div>
              <small>ADMIN VIEW</small>
              <strong>All leads</strong>
            </div>
            <div>
              <small>ADVISOR VIEW</small>
              <strong>Assigned only</strong>
            </div>
            <div>
              <small>TABLE SIZE</small>
              <strong>50 per page</strong>
            </div>
          </div>
          <ul className="call-checks">
            <li>
              <span>✓</span>Admin KPIs, workloads and project popularity<time>ADMIN</time>
            </li>
            <li>
              <span>✓</span>Personal metrics and next five callbacks<time>SALES</time>
            </li>
            <li>
              <span>✓</span>Combined project, advisor, status and source filters<time>FILTER</time>
            </li>
            <li>
              <span>✓</span>Read-only activity history for every lead<time>AUDIT</time>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const pipelineData = [
  ['NEW', [['Priya Sharma', 'The Westin Residences', '₹5–7 Cr', 'Sherlin'], ['Karan Shah', 'Trump Tower', '₹7–10 Cr', 'Aashna']]],
  ['CALL BACK', [['Mohammed Al Rashid', 'Al Marjan Island', 'AED 2M', 'Sanket']]],
  ['DID NOT PICK UP', [['Neha Kapoor', 'The Westin Residences', '₹3–5 Cr', 'Sherlin']]],
  ['FOLLOW UP', [['Rohit Verma', 'Trump Tower', '₹7–10 Cr', 'Aashna']]],
  ['SITE VISIT', [['Meera Nair', 'The Westin Residences', '₹5–7 Cr', 'Sherlin']]],
  ['DEAL SUCCESS', [['Diya Patel', 'Al Marjan Island', 'AED 3M', 'Sanket']]],
] as const;

export function CRMSection() {
  const [activeTab, setActiveTab] = useState<string>('CALL BACK');

  const visibleColumns =
    activeTab === 'ALL'
      ? pipelineData
      : pipelineData.filter(([stage]) => stage === activeTab);

  return (
    <section className="crm-section" id="crm">
      <div className="wrap">
        <div className="section-heading crm-section-heading">
          <div>
            <span className="section-kicker">PROPERTY SALES CRM</span>
            <h2>
              A Lead Workspace Built Around the
              <br />
              Work Advisors Do Every Day.
            </h2>
          </div>
          <p>
            Filter every lead by project, advisor, status and source, then open the record to call, update status, add a
            note or schedule the next callback.
          </p>
        </div>

        <div className="pipeline-window">
          <div className="pipeline-toolbar">
            <div>
              <b>Lead table</b>
              <span>50 leads per page · grouped by activity date</span>
            </div>
            <div className="filters">
              <span className="filter-pill">All projects ▾</span>
              <span className="filter-pill">All advisors ▾</span>
              <span className="filter-pill">All sources ▾</span>
              <span className="filter-pill">All statuses ▾</span>
              <button className="add-lead-btn" type="button">
                Export CSV ↓
              </button>
            </div>
          </div>

          {/* Mobile Stage Selector Tabs */}
          <div className="pipeline-mobile-tabs" role="tablist" aria-label="Pipeline Stages">
            <button
              type="button"
              className={`pipe-tab ${activeTab === 'ALL' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('ALL')}
            >
              ALL
            </button>
            {pipelineData.map(([stage]) => (
              <button
                key={stage}
                type="button"
                className={`pipe-tab ${activeTab === stage ? 'is-active' : ''}`}
                onClick={() => setActiveTab(stage)}
              >
                {stage}
              </button>
            ))}
          </div>

          {/* Desktop Board & Mobile Filtered View */}
          <div className="pipeline-board">
            {visibleColumns.map(([stage, cards]) => (
              <div className="pipeline-column" key={stage}>
                <div className="column-head">
                  <span>{stage}</span>
                  <b>{cards.length}</b>
                </div>
                {cards.map(([name, property, budget, advisor]) => (
                  <article key={name} className="pipeline-card">
                    <div className="pipeline-person">
                      <i>
                        {name
                          .split(' ')
                          .map((part) => part[0])
                          .join('')}
                      </i>
                      <strong>{name}</strong>
                      <em>{advisor}</em>
                    </div>
                    <p>{property}</p>
                    <small>{budget}</small>
                    <div className="pipeline-meta">
                      <span>● Status updated</span>
                      <b>⋯</b>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="crm-deep-links">
          <Link href="/real-estate-crm" className="button button-quiet">
            Explore the real estate CRM <span>↗</span>
          </Link>
          <p>Search by name or phone, combine filters, and return without losing your place.</p>
        </div>
      </div>
    </section>
  );
}

const followSteps = [
  'Inbound enquiry',
  'Two-message gate passed',
  'Requirements captured',
  'Routing rule applied',
  'Advisor assigned',
  'WhatsApp alert sent',
  'Lead appears in dashboard',
  'Activity logged',
];
const callbackSteps = [
  'Advisor calls the lead',
  'Set status: Call back',
  'Choose date and time',
  'Save settings',
  'Reminder queued',
  'WhatsApp reminder sent',
  'Advisor follows up',
  'Status updated',
  'Activity logged',
];

function Workflow({ steps, green = false }: { steps: string[]; green?: boolean }) {
  return (
    <div className={`vertical-workflow ${green ? 'is-green' : ''}`}>
      {steps.map((step, index) => (
        <div className="workflow-step" key={step}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <b>{step}</b>
          {index < steps.length - 1 && <i />}
          {index === steps.length - 1 && <em>✓</em>}
        </div>
      ))}
    </div>
  );
}

export function AutomationSection() {
  return (
    <section className="automation-section" id="automation">
      <div className="wrap">
        <div className="section-heading centered-heading light-heading">
          <span className="section-kicker">DOCUMENTED AUTOMATIONS</span>
          <h2>Automate the Handoff. Keep the Human Conversation.</h2>
          <p>The deployed CRM automates qualification, assignment, notifications and callback reminders while advisors own the call.</p>
        </div>
        <div className="automation-grid">
          <article>
            <div className="automation-card-head">
              <span>01 / INBOUND ASSIGNMENT</span>
              <h3>Turn a qualified chat into an owned lead.</h3>
              <p>Route by project or round-robin, alert the advisor and record the handoff.</p>
            </div>
            <Workflow steps={followSteps} />
          </article>
          <article>
            <div className="automation-card-head">
              <span>02 / CALLBACK REMINDER</span>
              <h3>Keep every promised callback visible.</h3>
              <p>Schedule an exact time and remind the assigned advisor approximately one day before.</p>
            </div>
            <Workflow steps={callbackSteps} green />
          </article>
        </div>
        <div className="automation-links">
          <Link href="/real-estate-lead-follow-up">Lead follow-up automation ↗</Link>
          <Link href="/real-estate-sales-automation">Real estate sales automation ↗</Link>
        </div>
      </div>
    </section>
  );
}

const useCases = [
  ['WhatsApp Qualification', 'Capture project, country, budget, purpose, timeline and call preference.'],
  ['Lead Distribution', 'Assign by project rule or round-robin and notify the right advisor.'],
  ['Advisor Daily Queue', 'Prioritize New leads, scheduled callbacks and follow-ups from one view.'],
  ['Cold Database Batching', 'Release imported leads in manageable 500-lead working batches.'],
  ['Callback Scheduling', 'Store an exact callback date and send one reminder to the owner.'],
  ['Lead Status Control', 'Track ten real call outcomes from New through Deal success.'],
  ['Source Reporting', 'Compare ads, direct WhatsApp, imports and broadcast replies.'],
  ['Audit & Notes', 'Keep permanent internal notes and a read-only activity trail.'],
];

export function UseCasesSection() {
  return (
    <section className="use-cases-section">
      <div className="wrap">
        <div className="section-heading use-heading">
          <div>
            <span className="section-kicker">USE CASES</span>
            <h2>Automate the Work Your Sales Team Repeats Every Day.</h2>
          </div>
          <p>
            The CRM is designed around the actual tasks performed by admins and sales advisors, with clear rules for
            ownership, follow-up and reporting.
          </p>
        </div>
        <div className="use-case-grid">
          {useCases.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div className="case-icon" aria-hidden="true">
                ↗
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    [
      '01',
      'Capture the Enquiry',
      'Collect leads from Meta ads, direct WhatsApp, the website chatbot, imported databases and broadcast replies.',
      ['META ADS', 'WHATSAPP', 'WEBSITE BOT', 'IMPORTS'],
    ],
    [
      '02',
      'Qualify and Assign',
      'Store the buyer requirements, apply the qualification gate and route the lead to the right advisor.',
      ['PROJECT', 'BUDGET', 'PURPOSE', 'OWNER'],
    ],
    [
      '03',
      'Work the Follow-Up',
      'Advisors read the transcript, call the lead, update status, schedule callbacks and leave permanent notes.',
      ['TRANSCRIPT', 'CALL NOW', 'CALLBACK', 'AUDIT TRAIL'],
    ],
  ];
  return (
    <section className="how-section" id="how-it-works">
      <div className="wrap">
        <div className="section-heading centered-heading">
          <span className="section-kicker">HOW IT WORKS</span>
          <h2>
            From First Message to Follow-Up,
            <br />
            Without the Manual Work.
          </h2>
        </div>
        <div className="how-grid">
          {steps.map(([num, title, text, tags]) => (
            <article key={num as string}>
              <span className="how-num">{num}</span>
              <div className="how-signal">
                <i />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div>
                {(tags as string[]).map((tag) => (
                  <small key={tag}>{tag}</small>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const integrationNames = [
  'Meta Ads',
  'Direct WhatsApp',
  'Website Chatbot',
  'Excel / CSV',
  'Broadcast Replies',
  'WATI Alerts',
  'CSV Export',
  'Project Sources',
];

export function IntegrationsAndImpact() {
  return (
    <>
      <section className="integrations-section" id="integrations">
        <div className="wrap integrations-layout">
          <div>
            <span className="section-kicker">LEAD SOURCES & DELIVERY</span>
            <h2>Every Lead Source, One Operating View.</h2>
            <p>
              The current CRM separates hot inbound leads, cold databases, broadcast replies and incomplete chats so
              each source can be worked with the right process.
            </p>
            <small>Imported leads use the 500-lead batch system and do not trigger new-lead WhatsApp alerts.</small>
          </div>
          <div className="integration-grid">
            {integrationNames.map((name, index) => (
              <div key={name}>
                <span>{['AD', 'WA', 'BOT', 'XLS', 'BR', 'W', 'CSV', 'PRJ'][index]}</span>
                <b>{name}</b>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="impact-section">
        <div className="wrap">
          <div className="section-heading impact-heading">
            <span className="section-kicker">BUSINESS IMPACT</span>
            <h2>What Changes When the Workflow Is Visible?</h2>
          </div>
          <div className="impact-grid">
            <article>
              <span>01</span>
              <h3>Clear Ownership</h3>
              <p>Every qualified lead is routed to a named advisor.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Visible Follow-Up</h3>
              <p>Statuses, callbacks and notes show what should happen next.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Workable Cold Data</h3>
              <p>Large imports are released in focused batches instead of one huge list.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Manager Clarity</h3>
              <p>Workloads, yield, sources and project interest are visible team-wide.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

const industries = [
  [
    'DEVELOPERS',
    'Manage project enquiries, qualification, site visits and multi-stage sales pipelines.',
    '/ai-crm-for-real-estate-developers',
  ],
  [
    'BROKERS & AGENCIES',
    'Centralize leads from multiple sources and automate the follow-up around each listing.',
    '/ai-crm-for-real-estate-agents',
  ],
  [
    'PROPERTY CONSULTANTS',
    'Prioritize high-intent prospects and reduce manual coordination across buyers.',
    '/real-estate-lead-management',
  ],
  [
    'CHANNEL PARTNERS',
    'Route and manage qualified project opportunities with clear ownership and context.',
    '/real-estate-ai-automation',
  ],
];

export function IndustriesSection() {
  return (
    <section className="industries-section" id="industries">
      <div className="wrap">
        <div className="section-heading industries-heading">
          <div>
            <span className="section-kicker">BUILT FOR REAL ESTATE</span>
            <h2>
              Built for the Way
              <br />
              Real Estate Actually Works.
            </h2>
          </div>
          <p>
            Vrumo adapts to project sales, brokerage workflows, distributed teams and complex lead sources—without
            flattening them into a generic sales process.
          </p>
        </div>
        <div className="industry-grid">
          {industries.map(([title, text, href], index) => (
            <Link href={href} key={title} className="industry-card-link">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div className="building-lines" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <b>Explore solution ↗</b>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactTeamSection() {
  return (
    <section className="contact-team-section" id="contact">
      <div className="wrap">
        <div className="section-heading centered-heading">
          <span className="section-kicker">DIRECT ACCESS</span>
          <h2>Talk to the Vrumo AI Team</h2>
          <p>
            Have a real estate workflow you want to automate? Talk to our team and let&apos;s explore how Vrumo can help.
          </p>
        </div>

        <div className="team-contact-grid">
          {/* Contact Card 01 - Divyaman Pal */}
          <article className="team-contact-card">
            <div className="card-top-info">
              <span className="contact-avatar">DP</span>
              <div>
                <span className="contact-role">SALES & PARTNERSHIPS</span>
                <h3>Divyaman Pal</h3>
              </div>
            </div>
            <p className="contact-blurb">
              Discuss CRM deployments, lead-source workflows, sales operations, and custom onboarding for developer and brokerage teams.
            </p>
            <div className="contact-details-list">
              <div className="contact-detail-row">
                <small>PHONE</small>
                <a href="tel:+916388676760" className="contact-link-val">
                  +91 63886 76760
                </a>
              </div>
              <div className="contact-detail-row">
                <small>EMAIL</small>
                <a
                  href="mailto:divyamanpal490@gmail.com?subject=Vrumo%20AI%20%E2%80%94%20Real%20Estate%20Automation%20Enquiry"
                  className="contact-link-val"
                >
                  divyamanpal490@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-actions-grid">
              <a href="tel:+916388676760" className="button button-quiet contact-action-btn">
                Call Divyaman <span>📞</span>
              </a>
              <a
                href="mailto:divyamanpal490@gmail.com?subject=Vrumo%20AI%20%E2%80%94%20Real%20Estate%20Automation%20Enquiry"
                className="button button-primary contact-action-btn"
              >
                Email Divyaman <span>✉️</span>
              </a>
            </div>
          </article>

          {/* Contact Card 02 - Harshit Shukla */}
          <article className="team-contact-card">
            <div className="card-top-info">
              <span className="contact-avatar">HS</span>
              <div>
                <span className="contact-role">PRODUCT & TECHNOLOGY</span>
                <h3>Harshit Shukla</h3>
              </div>
            </div>
            <p className="contact-blurb">
              Discuss WhatsApp qualification flows, assignment logic, database imports, notifications, reporting, and custom CRM workflows.
            </p>
            <div className="contact-details-list">
              <div className="contact-detail-row">
                <small>PHONE</small>
                <a href="tel:+916388293612" className="contact-link-val">
                  +91 63882 93612
                </a>
              </div>
              <div className="contact-detail-row">
                <small>EMAIL</small>
                <a
                  href="mailto:harshitshukla6388@gmail.com?subject=Vrumo%20AI%20%E2%80%94%20Real%20Estate%20Automation%20Enquiry"
                  className="contact-link-val"
                >
                  harshitshukla6388@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-actions-grid">
              <a href="tel:+916388293612" className="button button-quiet contact-action-btn">
                Call Harshit <span>📞</span>
              </a>
              <a
                href="mailto:harshitshukla6388@gmail.com?subject=Vrumo%20AI%20%E2%80%94%20Real%20Estate%20Automation%20Enquiry"
                className="button button-primary contact-action-btn"
              >
                Email Harshit <span>✉️</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-layout">
        <div className="faq-intro">
          <span className="section-kicker">FREQUENTLY ASKED</span>
          <h2 id="faq-title">
            Real Estate
            <br />
            CRM,
            <br />
            Made Clear.
          </h2>
          <p>Practical answers about the platform, integrations and what can be automated.</p>
          <Link href="/contact" className="faq-ask-link">
            Ask a different question <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="faq-list" role="region" aria-label="Frequently Asked Questions">
          {faqs.map(([question, answer], index) => {
            const isOpen = openFaq === index;
            const itemNum = String(index + 1).padStart(2, '0');
            return (
              <article className={`home-faq-item ${isOpen ? 'is-open' : ''}`} key={question}>
                <h3>
                  <button
                    type="button"
                    className="home-faq-button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-btn-${index}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="home-faq-num">{itemNum}</span>
                    <span className="home-faq-question">{question}</span>
                    <span className="home-faq-toggle-wrapper">
                      <i className="home-faq-toggle" aria-hidden="true">＋</i>
                    </span>
                  </button>
                </h3>
                <div
                  className="home-faq-answer"
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  hidden={!isOpen}
                >
                  <div className="home-faq-answer-inner">
                    <p>{answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="final-cta" id="cta">
      <div className="cta-gridlines" aria-hidden="true" />
      <div className="wrap cta-layout">
        <span className="section-kicker">READY TO REMOVE THE BOTTLENECK?</span>
        <h2>
          What If Your Real Estate Team Had an <em>AI Sales Assistant?</em>
        </h2>
        <p>
          Tell us where your real estate leads are getting stuck. Talk to our team and we&apos;ll show you how Vrumo can automate
          the workflow from enquiry to follow-up and site visit.
        </p>
        <div className="final-cta-buttons">
          <a
            className="button button-primary"
            href="mailto:divyamanpal490@gmail.com?subject=Vrumo%20AI%20%E2%80%94%20Real%20Estate%20Automation%20Enquiry"
          >
            Talk to Divyaman <span>→</span>
          </a>
          <a
            className="button button-quiet"
            href="mailto:harshitshukla6388@gmail.com?subject=Vrumo%20AI%20%E2%80%94%20Real%20Estate%20Automation%20Enquiry"
          >
            Talk to Harshit <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
