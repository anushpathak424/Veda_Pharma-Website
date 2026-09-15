import { useEffect, useRef, useState, type ReactNode } from 'react';

export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export function SectionHeading({ eyebrow, title, desc, dark }: { eyebrow: string; title: string; desc?: string; dark?: boolean }) {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`text-center mb-14 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <span className="text-teal text-sm font-semibold tracking-[0.35em] uppercase">{eyebrow}</span>
      <h2 className={`mt-2 text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
      <div className="mt-4 mx-auto w-16 h-[2px] bg-teal" />
      {desc && <p className={`mt-4 text-sm leading-relaxed max-w-2xl mx-auto ${dark ? 'text-white/60' : 'text-ink/50'}`}>{desc}</p>}
    </div>
  );
}

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} style={{ animationDelay: `${delay}s` }} className={`${visible ? 'animate-fade-in-up' : 'opacity-0'} ${className}`}>
      {children}
    </div>
  );
}
