import {
  Code2,
  BrainCircuit,
  Sparkles,
  Cpu,
  Route,
  Wifi,
  type LucideIcon,
} from 'lucide-react';
import { researchAreas } from '../data';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  BrainCircuit,
  Sparkles,
  Cpu,
  Route,
  Wifi,
};

export default function Research() {
  return (
    <section id="research" className="relative overflow-hidden bg-ink-950 py-24 text-ink-50 lg:py-32">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-accent-400/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent-300">
            Research — 專長與研究領域
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-ink-50 sm:text-5xl">
            從網頁到物聯網，
            <br className="hidden sm:block" />
            把技術問題轉譯成解答。
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-300">
            研究領域涵蓋軟體到硬體的多個層次，核心關懷始終是：如何讓技術在真實場景中發揮價值。
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <article
                key={area.zh}
                className="reveal group relative overflow-hidden rounded-2xl border border-ink-50/10 bg-ink-50/[0.03] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent-400/40 hover:bg-ink-50/[0.06]"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300 ring-1 ring-accent-400/20 transition-all duration-500 group-hover:bg-accent-500 group-hover:text-white group-hover:ring-accent-400/50">
                  <Icon size={22} />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-ink-50">
                  {area.zh}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-accent-300/80">
                  {area.en}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-300">
                  {area.blurb}
                </p>

                {/* Number watermark */}
                <span className="pointer-events-none absolute -right-2 -top-3 font-serif text-7xl font-semibold text-ink-50/[0.04] transition-colors duration-500 group-hover:text-accent-300/10">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
