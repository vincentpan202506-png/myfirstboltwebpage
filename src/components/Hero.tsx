import { ArrowDown, Mail } from 'lucide-react';
import { profile } from '../data';

const heroImg =
  'https://images.pexels.com/photos/2793444/pexels-photo-2793444.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-950 text-ink-50"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="現代建築圖書館"
          className="h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/55 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-6xl px-6 py-32 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-6 animate-fade-in text-xs font-medium uppercase tracking-[0.32em] text-accent-300">
            朝陽科技大學 · 資訊管理系
          </p>
          <h1
            className="font-serif text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            潘信宏
            <span className="mt-2 block font-sans text-2xl font-light tracking-wide text-ink-200 sm:text-3xl">
              Shin-Hung Pan
            </span>
          </h1>
          <p
            className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-ink-200"
            style={{ animationDelay: '0.25s' }}
          >
            {profile.tagline}
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-wrap items-center gap-4"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink-50 px-6 py-3 text-sm font-semibold text-ink-900 transition-all duration-300 hover:bg-accent-500 hover:text-white hover:shadow-[0_8px_30px_-8px_rgba(52,123,255,0.6)]"
            >
              <Mail size={16} className="transition-transform group-hover:-translate-y-0.5" />
              聯絡我
            </a>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full border border-ink-50/25 px-6 py-3 text-sm font-medium text-ink-50 transition-all duration-300 hover:border-ink-50/60 hover:bg-ink-50/5"
            >
              關於我
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-300 sm:flex animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-ink-50/15">
          <span className="absolute inset-0 block h-1/2 w-full origin-top animate-[grow-x_1.6s_ease-in-out_infinite] bg-accent-300" style={{ animationName: 'line-drop' }} />
        </span>
      </div>
    </section>
  );
}
