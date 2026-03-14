"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-navy-950/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-accent to-cyan-accent rounded-lg" />
          <span>Prioritize</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Як це працює</Link>
          <Link href="#matrix" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Матриця</Link>
          <Link href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Можливості</Link>
          <Link href="#testimonials" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Відгуки</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden sm:flex">Увійти</Button>
          <Button size="sm">Завантажити</Button>
        </div>
      </div>
    </nav>
  );
};
