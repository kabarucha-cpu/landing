"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Apple, Play, QrCode } from "lucide-react";
import { motion } from "framer-motion";

export const DownloadCTA = () => {
  return (
    <Section id="download">
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-purple-accent via-indigo-900 to-cyan-accent p-12 lg:p-24 text-center">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-6xl font-bold mb-8">Почніть приоритизувати вже сьогодні</h2>
          <p className="text-lg lg:text-xl text-white/80 mb-12">
            Завантажте додаток безкоштовно та зробіть свій перший крок до продуктивного життя без стресу.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex flex-wrap justify-center gap-4">
               <Button size="lg" className="bg-white text-navy-900 hover:bg-slate-100 shadow-none">
                 <Apple className="w-6 h-6" />
                 <span>App Store</span>
               </Button>
               <Button size="lg" className="bg-navy-950 hover:bg-black text-white shadow-none">
                 <Play className="w-6 h-6 fill-current" />
                 <span>Google Play</span>
               </Button>
            </div>
            
            <div className="hidden lg:flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/20">
               <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <QrCode className="w-12 h-12 text-black" />
               </div>
               <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/60">Скануйте</p>
                  <p className="text-sm font-bold">Швидкий перехід</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
