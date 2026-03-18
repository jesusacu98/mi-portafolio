"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Code2, Server, Cloud, Cpu } from "lucide-react";

const ABOUT_METRICS = [
  { label: "Años de Experiencia", value: "6+", icon: Code2 },
  { label: "Sistemas Escalados", value: "10+", icon: Server },
  { label: "Plataformas Cloud", value: "GCP/AWS", icon: Cloud },
  { label: "Liderazgo de Ingeniería", value: "Tech Lead", icon: Cpu },
];

export function About() {
  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Excelencia <span className="text-muted-foreground">en Ingeniería</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Soy un Desarrollador Fullstack Senior con más de 6 años de experiencia construyendo plataformas robustas y escalables. Mi experiencia principal está en arquitectura de sistemas backend, microservicios y despliegues en la nube.
              </p>
              <p>
                Como líder técnico, no solo escribo código; diseño sistemas que resuelven problemas de negocio complejos, modernizan infraestructura heredada y establecen estándares de ingeniería que permiten a los equipos entregar más rápido y de forma más confiable.
              </p>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            {ABOUT_METRICS.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-start p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm"
                >
                  <Icon className="w-6 h-6 text-foreground mb-4" />
                  <span className="text-2xl font-bold text-foreground mb-1">{metric.value}</span>
                  <span className="text-sm text-muted-foreground">{metric.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
