import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { profile } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-24 text-ink-50 lg:py-32">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[140%] -translate-x-1/2 rounded-full bg-accent-600/15 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div className="reveal">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent-300">
            Contact — 聯絡我
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            歡迎交流，
            <br className="sm:hidden" />
            無論是研究、教學或合作。
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-300">
            若您對我的研究領域感興趣，或有合作、指導學生的需求，歡迎透過下列方式與我聯繫。
          </p>
        </div>

        <div className="reveal mt-12 flex flex-col items-stretch gap-4 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink-50 px-7 py-3.5 text-sm font-semibold text-ink-900 transition-all duration-300 hover:bg-accent-500 hover:text-white hover:shadow-[0_10px_36px_-10px_rgba(52,123,255,0.65)]"
          >
            <Mail size={17} className="transition-transform group-hover:-translate-y-0.5" />
            {profile.emailDisplay}
          </a>
          <a
            href={`tel:${profile.tel.replace(/[^0-9+]/g, '')}`}
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-ink-50/25 px-7 py-3.5 text-sm font-medium text-ink-50 transition-all duration-300 hover:border-ink-50/60 hover:bg-ink-50/5"
          >
            <Phone size={17} />
            {profile.tel}
          </a>
        </div>

        <p className="reveal mt-10 text-xs uppercase tracking-[0.2em] text-ink-400">
          朝陽科技大學 · 資訊管理系 · 41349 台中市霧峰區吉峰東路 168 號
        </p>
      </div>

      {/* Footer */}
      <footer className="relative mt-20 border-t border-ink-50/10 pt-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-ink-400 sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} 潘信宏 Shin-Hung Pan. All rights reserved.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-1 transition-colors hover:text-ink-100"
          >
            回到頂部
            <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </footer>
    </section>
  );
}
