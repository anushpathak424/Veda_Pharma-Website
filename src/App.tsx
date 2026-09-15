import { useState } from 'react';
import { ArrowDown, ArrowUpRight, FlaskConical, Pill, Shapes, Package, Boxes, CalendarRange, CheckCheck, Factory, ShieldCheck, Scale, Lock, Zap, SlidersHorizontal, FileText, TrendingUp, Activity, Phone, Mail, MapPin, Clock, Send, ChevronDown, Leaf, Beaker, Network, Award } from 'lucide-react';
import Header from './components/Header';
import { SectionHeading, Reveal } from './components/Shared';

const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const heroSlides = [
  { src: '/images/b321eef8-ab40-4c23-8ab6-7b1b42b82d55.jpg', alt: 'Pharmaceutical laboratory with fluidized bed dryer formulation area' },
  { src: '/images/bb088643-825a-4e77-afdd-a1d086dda657.jpg', alt: 'AI in healthcare technology digital innovation' },
  { src: '/images/38576e0f-3c29-4094-953a-8ad101fcdb96.jpg', alt: 'Pharmaceutical manufacturing facility clean room' },
];
const stats = [
  { value: '15+', label: 'Years of Expertise' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Clients Served' },
  { value: '98%', label: 'Client Satisfaction' },
];
const services = [
  { icon: FlaskConical, title: 'Pharmaceutical Research', desc: 'Cutting-edge research methodologies driving drug discovery and innovation.' },
  { icon: Beaker, title: 'Drug Delivery Systems', desc: 'Advanced delivery technologies for optimised therapeutic efficacy.' },
  { icon: Shapes, title: 'Formulation Development', desc: 'Expert formulation scientists crafting robust pharmaceutical dosage forms.' },
  { icon: Network, title: 'Technology Transfer', desc: 'Seamless scale-up and knowledge transfer from lab to commercial production.' },
  { icon: CheckCheck, title: 'Quality by Design (QbD)', desc: 'ICH Q8/Q9/Q10 compliant QbD strategies built into every project.' },
  { icon: CalendarRange, title: 'GANTT Chart & Project Checklists', desc: 'Systematic project planning tools for milestone-driven pharmaceutical projects.' },
  { icon: Factory, title: 'Pharmaceutical Manufacturing', desc: 'GMP-aligned manufacturing guidance from batch development to commercial launch.' },
];
const industries = [
  { icon: Package, title: 'Pharmaceutical Companies', desc: 'Generics, innovators, and specialty pharma companies seeking expert development and regulatory consulting.' },
  { icon: GraduationCapIcon, title: 'Universities', desc: 'Academic institutions requiring industrial expertise to bridge research discovery and real-world application.' },
  { icon: MicroscopeIcon, title: 'Research Institutes', desc: 'R&D institutes seeking scientific partnerships in formulation, delivery, and pharmaceutical science.' },
  { icon: LandmarkIcon, title: 'Government Organizations', desc: 'Government health agencies and policy bodies requiring scientific advisory and regulatory expertise.' },
  { icon: RocketIcon, title: 'Startups', desc: 'Early-stage pharma and biotech startups needing flexible, cost-effective expert consulting to grow fast.' },
];
const tech = [
  { title: 'Solid Oral Dosage Forms', items: ['Tablets (IR, ER, MR, ODT)', 'Capsules (Hard & Soft Gelatin)', 'Granules & Pellets', 'Powders for Reconstitution'], accent: 'bg-navy' },
  { title: 'Liquid Oral Dosage Forms', items: ['Solutions & Syrups', 'Suspensions', 'Emulsions'], accent: 'bg-teal' },
  { title: 'Semi Solid Dosage Forms', items: ['Creams', 'Ointments', 'Gels'], accent: 'bg-[#B98A44]' },
];
const advantage = [
  { icon: Award, title: 'Scientific Excellence', desc: 'Our consultants hold advanced degrees and have decades of hands-on pharmaceutical R&D and regulatory experience.' },
  { icon: Zap, title: 'Innovation-Driven Solutions', desc: 'We leverage cutting-edge science, technology platforms, and regulatory intelligence to deliver forward-thinking solutions.' },
  { icon: Lock, title: 'Confidentiality', desc: 'Rigorous NDAs and data security protocols ensure your proprietary information remains fully protected at all times.' },
  { icon: Activity, title: 'Fast Project Delivery', desc: 'Agile project management and dedicated teams ensure rapid turnaround without compromising on scientific quality.' },
  { icon: SlidersHorizontal, title: 'Customised Consulting', desc: 'Every engagement is tailored to your unique project requirements, budget, and strategic objectives.' },
  { icon: Network, title: 'Industry Collaboration', desc: 'We build long-term partnerships with clients, fostering collaborative innovation across the pharmaceutical value chain.' },
];

import { GraduationCap as GraduationCapIcon, Microscope as MicroscopeIcon, Landmark as LandmarkIcon, Rocket as RocketIcon } from 'lucide-react';

export default function App() {
  const [slide, setSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [bookingSent, setBookingSent] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-paper text-ink selection:bg-teal">
      <Header />
      <main>
        {/* HERO */}
        <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {heroSlides.map((s, i) => (
              <button key={s.src} aria-label={`Slide ${i + 1}`} onClick={() => setSlide(i)} className={`absolute inset-0 transition-opacity duration-1000 ${slide === i ? 'opacity-100' : 'opacity-0'}`}>
                <img src={s.src} alt={s.alt} loading={i === 0 ? 'eager' : 'lazy'} className={`h-full w-full object-cover ${slide === i ? 'animate-[drift_9s_ease-in-out_infinite]' : ''}`} />
              </button>
            ))}
            <div className="pointer-events-none absolute inset-0 bg-navy/85" />
            <div className="pointer-events-none absolute inset-0 grid-overlay-light opacity-60" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-24 pt-32 md:px-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-[26px] bg-teal"><Leaf className="h-5 w-5 text-white" /></span>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.35em] text-teal-300">VEDA PHARMA <span className="blink-animation text-white/70">CONSULTANCY</span></p>
              </div>
            </div>
            <h1 className="mt-8 max-w-4xl text-[clamp(2.6rem,6.4vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
              Knowledge That Forges the Right Path.
            </h1>
            <p className="mt-4 font-serif text-[clamp(1.05rem,1.5vw,1.35rem)] italic text-teal-200/90">Consultancy for Pharmaceutical Product Development</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-white/50">Transforming Pharmaceutical Innovation into Healthcare Solutions</p>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65">Accelerating pharmaceutical research, formulation development, and technology commercialization through scientific innovation.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => go('#contact')} className="rounded-[26px] teal-sheen px-8 py-4 text-sm font-semibold text-white transition hover:bg-teal/90">Schedule Consultation</button>
              <button onClick={() => go('#services')} className="rounded-[26px] border border-white/30 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/10">Explore Services</button>
            </div>
            <div className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-[26px] border border-white/10 bg-white/10 md:grid-cols-4">
              {stats.map(s => (
                <div key={s.label} className="bg-navy-deep/95 px-6 py-6 text-center backdrop-blur">
                  <p className="text-[clamp(1.5rem,2.4vw,2.1rem)] font-semibold tracking-[-0.03em] text-white">{s.value}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-teal-200/70">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-2">
              {heroSlides.map((s, i) => (
                <button key={s.src} aria-label={`View slide ${i + 1}`} onClick={() => setSlide(i)} className={`h-1 flex-1 rounded-full transition ${slide === i ? 'bg-teal' : 'bg-white/20'}`} />
              ))}
            </div>
          </div>
          <button onClick={() => go('#about')} aria-label="Scroll down" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/50 transition-colors hover:text-teal"><ArrowDown className="h-6 w-6" /></button>
        </section>

        {/* ABOUT / SERVICES */}
        <section id="about" className="grid-overlay bg-paper py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeading eyebrow="About Us" title="Shaping Ideas into Better Healthcare Solutions" desc="Our consultants bring decades of hands-on experience across the full pharmaceutical development lifecycle." />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={0.05 * i}>
                  <button onClick={() => go('#contact')} aria-label={s.title} className="group flex h-full w-full flex-col rounded-[26px] border border-line bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-teal hover:shadow-[0_24px_60px_-20px_rgba(14,144,132,0.5)]">
                    <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-[26px] bg-mist transition-colors duration-200 group-hover:bg-teal"><s.icon className="h-5 w-5 text-teal transition-colors duration-200 group-hover:text-white" /></span>
                    <h3 className="text-sm font-semibold tracking-[-0.01em] text-ink">{s.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink/55">{s.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-teal opacity-0 transition-opacity duration-300 group-hover:opacity-100"><ArrowUpRight className="h-4 w-4" /> Explore</span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section id="industries" className="bg-mist py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeading eyebrow="Industries We Serve" title="Trusted Across the Pharmaceutical Ecosystem" desc="Our expertise serves a diverse range of organizations committed to advancing pharmaceutical science and healthcare." />
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((s, i) => (
                <Reveal key={s.title} delay={0.07 * i} className="w-full sm:w-[290px]">
                  <button onClick={() => go('#contact')} aria-label={s.title} className="group flex h-full w-full flex-col items-center rounded-[26px] border border-line bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-teal">
                    <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-[26px] bg-mist transition-colors group-hover:bg-teal"><s.icon className="h-7 w-7 text-teal transition-colors group-hover:text-white" /></span>
                    <h3 className="mb-2 text-sm font-semibold text-ink">{s.title}</h3>
                    <p className="text-xs leading-relaxed text-ink/50">{s.desc}</p>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section id="technology" className="section-dark bg-navy py-20 grid-overlay-light">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeading dark eyebrow="Technology Expertise" title="Scientific Mastery Across Dosage Form Technologies" desc="Our deep formulation expertise spans all major dosage form categories, enabling comprehensive pharmaceutical product development from concept to commercialisation." />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {tech.map((t, i) => (
                <Reveal key={t.title} delay={0.08 * i}>
                  <div className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] backdrop-blur transition-colors duration-300 hover:bg-white/[0.07]">
                    <div className={`${t.accent} flex items-center gap-3 p-4`}>
                      <Beaker className="h-6 w-6 shrink-0 text-white" />
                      <h3 className="text-sm font-semibold text-white">{t.title}</h3>
                    </div>
                    <ul className="space-y-2 p-4">
                      {t.items.map(item => (
                        <li key={item} className="flex items-start gap-2 text-xs text-white/55"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />{item}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section id="why-choose" className="relative overflow-hidden bg-navy-deep py-20">
          <div className="pointer-events-none absolute inset-0 grid-overlay-light opacity-40" />
          <div className="relative mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeading dark eyebrow="The Veda Pharma Advantage" title="Why Choose Us" desc="When you partner with Veda Pharma Consultancy, you gain far more than a service provider — you gain a dedicated scientific partner committed to your success." />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {advantage.map((a, i) => (
                <Reveal key={a.title} delay={0.06 * i}>
                  <div className="h-full rounded-[26px] border border-white/10 bg-white/[0.05] p-6 transition-all duration-300 hover:border-teal/50 hover:bg-teal/10">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-[26px] bg-teal/15 transition-colors hover:bg-teal"><a.icon className="h-6 w-6 text-teal transition-colors group-hover:text-white" /></span>
                    <h3 className="mb-2 text-base font-semibold text-white">{a.title}</h3>
                    <p className="text-sm leading-relaxed text-white/60">{a.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RESOURCES + CONTACT */}
        <section id="contact" className="grid-overlay bg-paper py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeading eyebrow="Ready When You Are" title="Ready to accelerate your pharmaceutical project?" desc="Reach out to our expert team today." />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Contact card */}
              <div className="rounded-[26px] border border-line bg-white p-6 lg:col-span-1">
                <h3 className="mb-5 text-base font-semibold">Get In Touch</h3>
                <div className="space-y-4">
                  {[{ icon: Phone, k: 'Phone', v: '+91 98765 43210', href: 'tel:+919876543210' }, { icon: Mail, k: 'Email', v: 'info@vedapharmaconsultancy.com', href: 'mailto:info@vedapharmaconsultancy.com' }, { icon: MapPin, k: 'Location', v: 'Veda Pharma Consultancy, Suite 400, Mumbai', href: '#contact' }].map(item => (
                    <a key={item.k} href={item.href} className="group flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[26px] bg-mist transition-colors group-hover:bg-teal"><item.icon className="h-4 w-4 text-teal transition-colors group-hover:text-white" /></span>
                      <span><span className="block text-xs text-ink/45">{item.k}</span><span className="block text-sm font-medium break-words text-ink group-hover:text-teal">{item.v}</span></span>
                    </a>
                  ))}
                </div>
              </div>
              {/* Booking form */}
              <form onSubmit={e => { e.preventDefault(); setBookingSent(true); }} className="rounded-[26px] border border-line bg-navy p-6 text-white lg:col-span-2" aria-label="Book consultation">
                <h3 className="mb-2 text-base font-semibold">Schedule Consultation</h3>
                <p className="mb-6 text-sm text-white/50">Every engagement is tailored to your unique project requirements, budget, and strategic objectives.</p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[{ id: 'b-name', label: 'Full Name *', ph: 'Dr. Jane Smith', type: 'text' }, { id: 'b-email', label: 'Email Address *', ph: 'jane@company.com', type: 'email' }, { id: 'b-company', label: 'Company / Institution *', ph: 'Your Company Name', type: 'text' }, { id: 'b-service', label: 'Service Interest *', ph: 'Select a service', type: 'text' }].map(f => (
                    <label key={f.id} className="space-y-1.5"><span className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">{f.label}</span><input id={f.id} name={f.id} type={f.type} required placeholder={f.ph} className="h-11 w-full rounded-[26px] border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-teal focus:ring-1 focus:ring-teal" /></label>
                  ))}
                  <label className="space-y-1.5"><span className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">Preferred Date *</span><input type="date" required aria-label="Preferred date" className="h-11 w-full rounded-[26px] border border-white/10 bg-white/5 px-3 text-sm text-white outline-none transition focus:border-teal focus:ring-1 focus:ring-teal [color-scheme:dark]" /></label>
                  <label className="space-y-1.5"><span className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">Preferred Time *</span><input type="time" required aria-label="Preferred time" className="h-11 w-full rounded-[26px] border border-white/10 bg-white/5 px-3 text-sm text-white outline-none transition focus:border-teal focus:ring-1 focus:ring-teal [color-scheme:dark]" /></label>
                </div>
                <label className="mt-4 block space-y-1.5"><span className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">Describe your project or inquiry...</span><textarea required rows={4} placeholder="Describe your project or inquiry..." aria-label="Describe your project or inquiry" className="w-full rounded-[26px] border border-white/10 bg-white/5 px-3 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-teal focus:ring-1 focus:ring-teal" /></label>
                <button type="submit" className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-[26px] bg-teal text-sm font-semibold text-white transition hover:bg-teal/90 sm:w-auto sm:px-10">
                  {bookingSent ? (<><CheckCheck className="h-4 w-4" /> Consultation Request Sent — we’ll confirm shortly</>) : (<><Send className="h-4 w-4" /> Book Consultation</>)}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* RESOURCE LINKS */}
        <section aria-label="Compliance resources" className="border-y border-line bg-mist">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-6 md:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/45">Trusted Resources</span>
            {['ICH Guidelines', 'FDA Guidance Documents', 'EMA Regulatory Resources', 'Research Publications', 'Industry News'].map(label => (
              <button key={label} onClick={() => go('#contact')} className="group flex items-center gap-1 rounded-full border border-line bg-white px-4 py-2 text-[13px] font-medium text-ink/70 transition hover:border-teal hover:text-teal">
                {label}<ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 md:px-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-[26px] bg-teal"><Leaf className="h-5 w-5 text-white" /></span>
              <span className="text-sm font-semibold tracking-[0.2em]">VEDA PHARMA</span>
            </div>
            <p className="text-sm leading-6 text-white/55">Knowledge That Forges the Right Path. Transforming pharmaceutical innovation into global healthcare solutions.</p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-teal-300">Navigate</h4>
            <div className="flex flex-col items-start gap-3">
              {[['About', '#about'], ['Services', '#services'], ['Industries', '#industries'], ['Technology', '#technology'], ['Why Us', '#why-choose'], ['Contact', '#contact']].map(([label, href]) => (
                <button key={href} onClick={() => go(href)} className="text-sm text-white/60 transition hover:text-teal">{label}</button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-teal-300">Newsletter</h4>
            <p className="mb-4 text-sm text-white/55">New research, analysis, and regulatory updates — monthly, never noisy.</p>
            <form onSubmit={e => { e.preventDefault(); if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setSubscribed(true); }} className="flex flex-col gap-3" aria-label="Newsletter signup">
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email" aria-label="Email address" className="h-11 rounded-[26px] border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-teal" />
              <button type="submit" className="h-11 rounded-[26px] bg-teal text-sm font-semibold text-white transition hover:bg-teal/90">{subscribed ? 'Subscribed' : 'Subscribe'}</button>
              {subscribed && <p className="text-xs text-teal-300">You have been subscribed to our newsletter.</p>}
            </form>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-teal-300">Legal</h4>
            <div className="flex flex-col items-start gap-3">
              {['Privacy Policy', 'Terms & Conditions', 'Confidentiality'].map(label => (
                <button key={label} onClick={() => go('#contact')} className="text-sm text-white/60 transition hover:text-teal">{label}</button>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-white/40"><Clock className="h-4 w-4" /> Response within 24 hours</div>
          </div>
        </div>
        <div className="border-t border-white/5 py-5 text-center text-xs text-white/35">© 2026 Veda Pharma Consultancy — Knowledge That Forges the Right Path.</div>
      </footer>
    </div>
  );
}
