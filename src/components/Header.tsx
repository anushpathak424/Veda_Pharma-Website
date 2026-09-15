import { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Technology', href: '#technology' },
  { label: 'Why Us', href: '#why-choose' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 shadow-xl backdrop-blur-md' : 'bg-navy/90 backdrop-blur-sm'}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Veda Pharma home" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-[26px] bg-teal"><Leaf className="h-5 w-5 text-white" /></span>
          <span className="text-sm font-semibold tracking-[0.2em] text-white">VEDA PHARMA</span>
        </button>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map(l => (
            <button key={l.href} onClick={() => go(l.href)} className="rounded-[26px] px-3 py-1.5 text-[13px] font-medium text-white/70 transition-colors duration-200 hover:bg-white/5 hover:text-teal-300" style={{ color: undefined }}>
              {l.label}
            </button>
          ))}
        </nav>
        <button onClick={() => go('#contact')} className="hidden md:block rounded-[26px] bg-teal px-5 py-2 text-[13px] font-semibold text-white transition hover:opacity-90">Book Consultation</button>
      </div>
    </header>
  );
}
