"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
} & HTMLMotionProps<"button">;

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-purple-accent hover:bg-purple-accent/90 text-white shadow-lg shadow-purple-accent/20",
    secondary: "bg-cyan-accent hover:bg-cyan-accent/90 text-white shadow-lg shadow-cyan-accent/20",
    outline: "border border-white/20 hover:bg-white/10 text-white",
    ghost: "hover:bg-white/5 text-white/80 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg font-semibold",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-xl transition-all duration-200 flex items-center justify-center gap-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
