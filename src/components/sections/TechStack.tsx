"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";

const CATEGORIES = [
  {
    title: "Backend y Sistemas",
    skills: ["Node.js", "TypeScript", "NestJS", "Laravel", "PHP", "ASP.NET", "C#", "C++", "Java"]
  },
  {
    title: "Frontend y Mobile",
    skills: ["Next.js", "Vue.js", "Angular", "Tailwind CSS", "Android Native", "Ionic 3"]
  },
  {
    title: "Base de Datos y Almacenamiento",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "Firebase Firestore"]
  },
  {
    title: "Cloud y DevOps",
    skills: ["Docker", "Kubernetes", "GCP", "AWS", "CI/CD", "Linux"]
  },
  {
    title: "Arquitectura e Integración",
    skills: ["Microservices", "REST APIs", "GraphQL", "OAuth2", "JWT", "WebSockets"]
  }
];

export function TechStack() {
  return (
    <Section id="stack">
      <div className="flex flex-col gap-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Arsenal <span className="text-muted-foreground">Técnico</span></h2>
          <p className="text-muted-foreground">
            Tecnologías que he utilizado para arquitectar y escalar sistemas robustos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col p-6 rounded-xl border border-border bg-card/50 hover:bg-card/80 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground/90">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-muted text-muted-foreground hover:text-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
