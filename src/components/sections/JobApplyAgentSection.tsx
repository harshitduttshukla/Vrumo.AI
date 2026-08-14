import { SectionHeader } from '../ui/SectionHeader';

const mockJobs = [
  { title: 'Software Engineer', company: 'Company A', match: '94% Match', status: 'Applied ✓', statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  { title: 'Backend Developer', company: 'Company B', match: '91% Match', status: 'Applied ✓', statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  { title: 'Full Stack Engineer', company: 'Company C', match: '87% Match', status: 'Interview', statusColor: 'text-blue-600 bg-blue-50 border-blue-200' },
];

export function JobApplyAgentSection() {
  return (
    <section id="job-apply-agent" className="section-padding relative bg-white">
      <div className="container-custom relative">
        <SectionHeader
          label="04 / JOB APPLY AGENT"
          title="Let AI handle the repetitive part of the job search."
          description="Discover relevant opportunities, evaluate job fit, prepare applications, and track application progress through a configured workflow."
          centered={false}
        />

        <div className="max-w-xl mx-auto rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6 shadow-sm text-left">
          <div className="space-y-0 divide-y divide-slate-200">
            {mockJobs.map((job) => (
              <div key={job.title} className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-3 text-xs font-mono">
                <div>
                  <div className="font-bold text-[#0f172a] text-sm">{job.title}</div>
                  <div className="text-slate-400 text-[11px] font-normal mt-0.5">{job.company}</div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    {job.match}
                  </span>
                  <span className={`px-2.5 py-1 rounded-md font-bold text-[11px] border ${job.statusColor}`}>
                    {job.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
