"use client";

import { Section } from "@/components/ui/Section";
import { PlusCircle, LayoutGrid, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <PlusCircle className="w-10 h-10 text-purple-accent" />,
    title: "Додайте завдання",
    description: "Швидко записуйте ідеї та завдання, щойно вони виникають.",
  },
  {
    icon: <LayoutGrid className="w-10 h-10 text-cyan-accent" />,
    title: "Категоризуйте",
    description: "Розподіліть завдання за пріоритетністю в один дотик.",
  },
  {
    icon: <CheckCircle2 className="w-10 h-10 text-emerald-400" />,
    title: "Виконуйте",
    description: "Фокусуйтеся на важливому та відстежуйте свій прогрес.",
  },
];

export const HowItWorks = () => {
  return (
    <Section id="how-it-works">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">Як це працює</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Простий трьохкроковий процес, який змінить ваше ставлення до планування.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connection line for desktop */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-accent/20 via-cyan-accent/20 to-emerald-400/20 -z-10" />
        
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-8 rounded-3xl glass"
          >
            <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-slate-400">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
