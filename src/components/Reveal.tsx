"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "section";
  delay?: number;
};

export function Reveal({
  children,
  className = "",
  id,
  as = "div",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = `reveal ${className}`;
  const Tag = as;
  const style =
    delay > 0
      ? ({ transitionDelay: `${delay}ms` } as CSSProperties)
      : undefined;

  return (
    <Tag
      ref={(node) => {
        ref.current = node;
      }}
      id={id}
      className={classes}
      style={style}
    >
      {children}
    </Tag>
  );
}
