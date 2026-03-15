"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Apple, Play } from "lucide-react";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const taskVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: 1 + i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <Section className="relative overflow-hidden min-h-screen flex items-center pt-32 pb-20">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-accent/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-cyan-accent/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Приоритизуй-те <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-accent to-cyan-accent">розумно</span>, досягайте більшого
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg lg:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed"
          >
            Додаток для продуктивності на основі Матриці Ейзенхауера, що допомагає зосередитися на справді важливому та забути про хаос у справах.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button size="lg" className="px-6 group">
              <Apple className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>App Store</span>
            </Button>
            <Button variant="secondary" size="lg" className="px-6 group">
              <Play className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
              <span>Google Play</span>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative perspective-1000 hidden lg:block"
        >
          {/* Floating Phone Mockup */}
          <motion.div 
            animate={{
              y: [0, -20, 0],
              rotateZ: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative mx-auto w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-10" />
            
            {/* App UI Preview */}
            <div className="p-4 pt-10 h-full flex flex-col gap-4 bg-[#0F172A]">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "66%" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="h-6 bg-white/10 rounded-full mb-2" 
              />
              <div className="grid grid-cols-2 gap-2 h-full">
                {[
                  { color: "bg-red-500", label: "Urgent" },
                  { color: "bg-yellow-500", label: "Important" },
                  { color: "bg-blue-500", label: "Delegate" },
                  { color: "bg-slate-500", label: "Delete" }
                ].map((quad, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={taskVariants}
                    initial="hidden"
                    animate="visible"
                    className={`${quad.color}/20 rounded-2xl border border-${quad.color}/30 p-3`}
                  >
                    <div className={`w-full h-2 ${quad.color}/40 rounded mb-2`} />
                    <div className="space-y-2">
                      <div className={`h-1 ${quad.color}/20 rounded w-3/4`} />
                      <div className={`h-1 ${quad.color}/20 rounded w-1/2`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-accent/30 rounded-full blur-[100px] -z-10" />
        </motion.div>
      </div>
    </Section>
  );
};
