"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Zap, Hand, Sparkles } from "lucide-react";

export const UXHighlights = () => {
  return (
    <Section id="ux" className="bg-white/2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative h-[600px] flex items-center justify-center">
             {/* Phone in landscape or just a stylized UI preview */}
             <motion.div 
               initial={{ rotate: -5, y: 20 }}
               whileInView={{ rotate: 0, y: 0 }}
               className="w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl relative overflow-hidden"
             >
                <div className="absolute inset-0 bg-gradient-to-b from-purple-accent/10 to-transparent" />
                <div className="p-8">
                    <div className="w-1/2 h-4 bg-white/10 rounded-full mb-8" />
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                             <div key={i} className="h-12 bg-white/5 border border-white/10 rounded-xl flex items-center px-4 gap-3">
                                 <div className="w-4 h-4 rounded-full border border-white/20" />
                                 <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                             </div>
                        ))}
                    </div>
                </div>
                {/* Floating gesture icon */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-20 right-10 p-4 bg-cyan-accent rounded-full shadow-lg shadow-cyan-accent/40"
                >
                    <Hand className="w-6 h-6 text-white" />
                </motion.div>
             </motion.div>
             
             {/* Abstract elements */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-accent/20 rounded-full blur-[100px] -z-10" />
        </div>

        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-accent/10 border border-purple-accent/20 text-purple-accent text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Створено для простоти</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Мінімалізм, що надихає</h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed">
            Ми прибрали все зайве, щоб ви могли зосередитися на головному. Жодних складних налаштувань — лише ви та ваші цілі.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-cyan-accent/10 flex items-center justify-center">
                <Hand className="w-6 h-6 text-cyan-accent" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Інтуїтивні жести</h4>
                <p className="text-slate-400">Свайп для завершення, затискання для редагування. Керуйте справами легко.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-purple-accent/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-purple-accent" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Миттєве створення</h4>
                <p className="text-slate-400">Додавайте завдання в один тап без зайвих діалогових вікон.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
