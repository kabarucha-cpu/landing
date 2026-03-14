"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { AlertCircle, Calendar, Users, Trash2 } from "lucide-react";

const quadrants = [
  {
    title: "Терміново та Важливо",
    subtitle: "Зробити негайно",
    color: "bg-red-500/10 border-red-500/30 text-red-400",
    icon: <AlertCircle className="w-6 h-6" />,
    tasks: ["Завершити проект", "Відповісти клієнту"],
  },
  {
    title: "Важливо, не терміново",
    subtitle: "Запланувати",
    color: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
    icon: <Calendar className="w-6 h-6" />,
    tasks: ["Спорт", "Навчання", "Стратегія"],
  },
  {
    title: "Терміново, не важливо",
    subtitle: "Делегувати",
    color: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    icon: <Users className="w-6 h-6" />,
    tasks: ["Дзвінки", "Емейли", "Зустрічі"],
  },
  {
    title: "Не терміново, не важливо",
    subtitle: "Видалити",
    color: "bg-slate-500/10 border-slate-500/30 text-slate-400",
    icon: <Trash2 className="w-6 h-6" />,
    tasks: ["Соцмережі", "ТБ", "Зайві справи"],
  },
];

export const MatrixVisual = () => {
  return (
    <Section id="matrix">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Матриця Ейзенхауера</h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Методологія, яка допоможе вам вийти з циклу постійного "гасіння пожеж" та почати інвестувати час у те, що дійсно має значення.
          </p>
          
          <ul className="space-y-4">
            {quadrants.map((q, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className={`p-2 rounded-lg ${q.color} border`}>{q.icon}</div>
                <div>
                  <span className="font-bold">{q.title}</span> — {q.subtitle}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/2 w-full aspect-square relative p-4 lg:p-12">
          {/* Axis labels */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 font-bold uppercase tracking-widest text-slate-500 text-xs">Важливо</div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-bold uppercase tracking-widest text-slate-500 text-xs">Не важливо</div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 font-bold uppercase tracking-widest text-slate-500 text-xs origin-center -translate-x-4">Терміново</div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 rotate-90 font-bold uppercase tracking-widest text-slate-500 text-xs origin-center translate-x-4">Не терміново</div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full border-2 border-white/5 p-4 rounded-3xl bg-white/2 overflow-hidden">
            {quadrants.map((q, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className={`rounded-2xl border p-4 flex flex-col gap-3 transition-colors duration-300 ${q.color}`}
              >
                <div className="flex items-center justify-between">
                   <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">{q.icon}</div>
                </div>
                <div className="space-y-2">
                  {q.tasks.map((task, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-2 text-xs flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${q.color.split(' ')[2]}`} />
                      {task}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
