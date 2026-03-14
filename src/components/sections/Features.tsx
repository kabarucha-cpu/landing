"use client";

import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  BarChart3, 
  Timer, 
  Bell, 
  Palette, 
  Cloud, 
  MousePointer2 
} from "lucide-react";

const features = [
  {
    icon: <MousePointer2 className="w-8 h-8 text-purple-accent" />,
    title: "Розумна категоризація",
    description: "Розподіляйте завдання за допомогою простого Drag & Drop між квадрантами.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-cyan-accent" />,
    title: "Аналітика продуктивності",
    description: "Детальні звіти про те, як ви витрачаєте свій час щодня та щотижня.",
  },
  {
    icon: <Timer className="w-8 h-8 text-orange-400" />,
    title: "Таймер фокусу",
    description: "Інтегрований Pomodoro таймер допоможе працювати без відволікань.",
  },
  {
    icon: <Bell className="w-8 h-8 text-pink-400" />,
    title: "Нагадування",
    description: "Гнучкі налаштування повторюваних завдань та push-сповіщень.",
  },
  {
    icon: <Palette className="w-8 h-8 text-indigo-400" />,
    title: "Кастомізація",
    description: "Темна тема та персоналізовані колірні схеми для вашого комфорту.",
  },
  {
    icon: <Cloud className="w-8 h-8 text-sky-400" />,
    title: "Хмарна синхронізація",
    description: "Ваші дані завжди з вами, навіть без доступу до інтернету.",
  },
];

export const Features = () => {
  return (
    <Section id="features">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">Ключові можливості</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Все необхідне для ефективного управління часом в одному сучасному додатку.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <GlassCard key={index} className="hover:border-purple-accent/30 transition-colors">
            <div className="mb-6 p-3 rounded-xl bg-white/5 border border-white/10 w-fit">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed">{feature.description}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};
