"use client";

import { Section } from "@/components/ui/Section";
import { Github, Twitter, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-navy-950/50 border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 font-bold text-2xl mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-accent to-cyan-accent rounded-lg" />
            <span>Prioritize</span>
          </div>
          <p className="text-slate-500 mb-6">
            Допомагаємо вам сфокусуватися на важливому та досягати цілей швидше.
          </p>
          <div className="flex gap-4">
            <Twitter className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
            <Github className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-bold mb-4">Продукт</h4>
            <ul className="space-y-2 text-slate-500">
              <li><Link href="#features" className="hover:text-white">Можливості</Link></li>
              <li><Link href="#how-it-works" className="hover:text-white">Як це працює</Link></li>
              <li><Link href="#download" className="hover:text-white">Завантажити</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Компанія</h4>
            <ul className="space-y-2 text-slate-500">
              <li><Link href="#" className="hover:text-white">Про нас</Link></li>
              <li><Link href="#" className="hover:text-white">Контакти</Link></li>
              <li><Link href="#" className="hover:text-white">Блог</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Юридична інфо</h4>
            <ul className="space-y-2 text-slate-500">
              <li><Link href="#" className="hover:text-white">Приватність</Link></li>
              <li><Link href="#" className="hover:text-white">Умови</Link></li>
              <li><Link href="#" className="hover:text-white">Cookies</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-slate-500 text-sm">
        <p>© 2026 Prioritize App. Всі права захищено.</p>
        <p className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> support@prioritize.app
        </p>
      </div>
    </footer>
  );
};
