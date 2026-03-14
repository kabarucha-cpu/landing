"use client";

import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Олександр М.",
    role: "Менеджер проектів",
    content: "Цей додаток допоміг мені нарешті розібратися з хаосом у робочих завданнях. Матриця Ейзенхауера — це геніально!",
    rating: 5,
  },
  {
    name: "Марія К.",
    role: "Фрілансер",
    content: "Найкращий інтерфейс, який я бачила. Все дуже просто і приємно оку. Тепер планування — моя улюблена частина дня.",
    rating: 5,
  },
  {
    name: "Дмитро П.",
    role: "Студент",
    content: "Дуже зручно розподіляти навчання та особисті справи. Pomodoro таймер — це окремий лайк!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <Section id="testimonials">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">Що кажуть наші користувачі</h2>
        <p className="text-slate-400">Приєднуйтесь до тисяч людей, які вже покращили свою продуктивність.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <GlassCard key={i} className="flex flex-col gap-6">
            <div className="flex gap-1">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <p className="text-lg italic text-slate-300">"{t.content}"</p>
            <div>
              <h4 className="font-bold">{t.name}</h4>
              <p className="text-sm text-slate-500">{t.role}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};
