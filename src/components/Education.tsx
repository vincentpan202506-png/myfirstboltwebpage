import { education } from '../data';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="relative bg-ink-50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent-600">
            Education — 主要學歷
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
            從工業工程到資訊科技，
            <br className="hidden sm:block" />
            一條跨域的學習路徑。
          </h2>
        </div>

        <div className="relative mt-14">
          {/* Vertical line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-ink-300 sm:left-[15px] animate-line-drop"
          />

          <ol className="space-y-8">
            {education.map((e, i) => (
              <li
                key={e.school}
                className="reveal relative pl-10 sm:pl-16"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Node */}
                <span className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center sm:left-2">
                  <span className="absolute h-full w-full rounded-full bg-accent-500/20 animate-ping" style={{ animationDuration: '3s' }} />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-accent-500 ring-4 ring-ink-50" />
                </span>

                <div className="group rounded-2xl border border-ink-200 bg-white p-6 transition-all duration-500 hover:border-accent-300 hover:shadow-[0_12px_40px_-20px_rgba(52,123,255,0.4)] sm:p-7">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <GraduationCap className="text-accent-500" size={18} />
                    <span className="tabular text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
                      {e.period}
                    </span>
                    <span className="rounded-full bg-accent-50 px-3 py-0.5 text-xs font-semibold text-accent-700">
                      {e.degree}
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl font-semibold text-ink-900">
                    {e.school}
                  </h3>
                  <p className="mt-1 text-sm text-ink-500">{e.schoolEn}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
