"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Briefcase, ArrowUpRight } from "lucide-react";

const EXPERIENCES = [
  {
    company: "COCOCO / Mero",
    role: "Desarrollador Fullstack Senior y Tech Lead",
    period: "2021 - Actualidad",
    achievements: [
      "Desarrollé APIs backend de alto rendimiento usando NestJS",
      "Integré servicios de terceros, incluyendo Twilio e Intercom, para automatizar la interacción con clientes.",
      "Implementé orquestación con Docker y Kubernetes, mejorando la disponibilidad del sistema y los pipelines de despliegue (CI/CD).",
      "Diseñé pipelines de datos en tiempo real usando PostgreSQL y Firebase.",
    ],
  },
  {
    company: "TepacheSoft",
    role: "Ingeniero de Software",
    period: "2019 - 2021",
    achievements: [
      "Lideré la arquitectura técnica de una plataforma legacy, migrando sistemas monolíticos hacia microservicios.",
      "Modernicé sistemas heredados logrando una mejora del 40% en tiempos de carga con Laravel y Horizon.",
      "Resolví problemas críticos de concurrencia en servicios backend construidos con ASP.NET y Node.js.",
      "Implementé flujos de autenticación seguros usando JWT y OAuth2.",
      "Implementé servicios de tracking de paqueterías (Estafeta, DHL, UPS, J&T, AMPM, Paquetería Express.) mejorando la experiencia del cliente al proporcionar actualizaciones en tiempo real sobre el estado de sus envíos.",
    ],
  },
  {
    company: "Corporativo Valladolid",
    role: "Desarrollador de Software",
    period: "2018 - 2019",
    achievements: [
      "Lideré la digitalización educativa desarrollando plataformas completas desde cero.",
      "Creé libros digitales interactivos para miles de estudiantes activos.",
    ],
  },
  {
    company: "Diazteca & ALFA LBS",
    role: "Desarrollador Fullstack",
    period: "2017 - 2018",
    achievements: [
      "Migré lógica compleja de hojas de cálculo a sistemas empresariales basados en web.",
      "Optimicé sistemas en producción y resolví errores críticos en producción.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" className="bg-muted/10">
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Impacto <span className="text-muted-foreground">Profesional</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Trayectoria liderando equipos y desarrollando sistemas escalables.
          </p>
        </div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:absolute left-[130px] top-1 bottom-0 w-px bg-border group-last:bg-transparent" />
              
              <div className="md:flex gap-12">
                <div className="hidden md:block w-[130px] flex-shrink-0 pt-1">
                  <span className="text-sm font-medium text-muted-foreground">{exp.period}</span>
                </div>
                
                <div className="absolute md:static left-0 top-1 w-6 h-6 rounded-full bg-background border-2 border-border flex items-center justify-center md:hidden">
                  <Briefcase className="w-3 h-3 text-muted-foreground" />
                </div>
                
                <div className="flex-1 pb-8 border-b border-border/50 last:border-0 last:pb-0">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground inline-flex items-center gap-2">
                      {exp.role} 
                      <span className="hidden md:inline text-muted-foreground font-normal">en</span>
                      <span className="text-muted-foreground hidden md:inline">{exp.company}</span>
                    </h3>
                    <div className="md:hidden mt-1 text-muted-foreground text-sm font-medium">
                      {exp.company} • {exp.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start text-muted-foreground">
                        <ArrowUpRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-foreground/50" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
