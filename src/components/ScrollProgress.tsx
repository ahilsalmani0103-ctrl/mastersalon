import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      const clamped = Math.min(1, Math.max(0, ratio));
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${clamped})`;
      }
      rafId = 0;
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[5px] z-[60] bg-transparent pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-gradient-to-r from-primary via-primary-container to-tertiary"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
