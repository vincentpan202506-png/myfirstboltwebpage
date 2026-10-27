import { profile } from '../data';

export default function About() {
  return (
    <section id="about" className="relative bg-ink-50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Eyebrow / heading */}
          <div className="lg:col-span-5">
            <div className="reveal sticky top-24">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent-600">
                About — 關於我
              </p>
              <h2 className="font-serif text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
                在課堂與研究之間，
                <br className="hidden sm:block" />
                尋找可被實踐的形狀。
              </h2>
              <div className="mt-8 h-px w-16 origin-left animate-grow-x bg-ink-300" />
            </div>
          </div>

          {/* Body */}
          <div className="lg:col-span-7">
            <div className="reveal space-y-7">
              <p className="text-lg leading-relaxed text-ink-700">
                {profile.intro}
              </p>
              <p className="text-base leading-relaxed text-ink-600">
                從工業工程跨入資訊管理，再走完資訊科技博士班的歷程，讓我能用系統化的視角看待技術問題；而多年業界工程師與教學現場的經驗，則讓這些視角得以落地。我相信好的研究應該能在教室、實驗室與產業現場之間自由流動。
              </p>

              {/* Quick facts */}
              <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200 sm:grid-cols-2">
                {[
                  { k: '現職', v: profile.title },
                  { k: 'English Name', v: profile.nameEn },
                  { k: '聯絡電話', v: profile.tel },
                  { k: 'Email', v: profile.emailDisplay },
                ].map((f) => (
                  <div key={f.k} className="bg-ink-50 px-6 py-5 transition-colors duration-300 hover:bg-white">
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
                      {f.k}
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-ink-800">
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
