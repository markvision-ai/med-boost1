import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    // Arm the "hidden-before-reveal" styles only now that JS is running.
    document.documentElement.classList.add("js-reveal-ready");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    // Safety net: ensure everything becomes visible eventually even if IO misfires.
    const timeout = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("is-visible"));
    }, 1500);
    return () => {
      io.disconnect();
      window.clearTimeout(timeout);
    };
  }, []);
}