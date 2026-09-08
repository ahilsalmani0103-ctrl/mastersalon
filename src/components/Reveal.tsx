import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  direction?: "up" | "left" | "right";
}

const initialOffset: Record<NonNullable<RevealProps["direction"]>, string> = {
  up: "translate-y-6",
  left: "-translate-x-8",
  right: "translate-x-8",
};

export default function Reveal({ children, className = "", delayMs = 0, direction = "up" }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${initialOffset[direction]}`
      } ${className}`}
      style={{ transitionDelay: isInView ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
