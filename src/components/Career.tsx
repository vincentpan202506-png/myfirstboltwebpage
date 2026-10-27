import { career } from '../data';
import { Briefcase } from 'lucide-react';

export default function Career() {
  return (
    <section id="career" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent-600">
            Career — 現職與經歷
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
            二十年教學與工程之路，
            <br className="hidden sm:block" />
            每一步都在累積視野。
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {career.map((c, i) => (
            <article
              key={`${c.org}-${c.period}`}
              className="reveal group grid grid-cols-1 gap-4 rounded-2xl border border-ink-200 bg-ink-50/50 p-6 transition-all duration-500 hover:border-accent-300 hover:bg-white hover:shadow-[0_12px_40px_-22px_rgba(52,123,255,0.35)] sm:grid-cols-12 sm:gap-6 sm:p-7"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Period */}
              <div className="sm:col-span-3">
                <div className="flex items-center gap-2">
                  <Briefcase className="text-accent-500" size={16} />
                  <span className="tabular text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                    {c.period}
                  </span>
                </div>
                {c.current && (
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    現職
                  </span>
                )}
              </div>

              {/* Org + dept */}
              <div className="sm:col-span-4 sm:border-l sm:border-ink-200 sm:pl-6">
                <h3 className="font-serif text-xl font-semibold text-ink-900">
                  {c.org}
                </h3>
                <p className="mt-0.5 text-sm text-ink-500">{c.dept}</p>
              </div>

              {/* Title */}
              <div className="sm:col-span-5 sm:border-l sm:border-ink-200 sm:pl-6">
                <p className="text-sm font-medium leading-relaxed text-ink-700">
                  {c.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
