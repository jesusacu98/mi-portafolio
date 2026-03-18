"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Plataforma Legacy de Embarques y Trackeo de Guías",
    description: "Migración de un backend legacy de alta demanda hacia una arquitectura moderna y escalable.",
    problem: "La plataforma en CodeIgniter 3 procesaba un alto flujo de guías por minuto, con cuellos de botella y tiempos de respuesta inconsistentes.",
    solution: "Se migró casi todo el backend de CodeIgniter 3 a Laravel 11, incorporando colas con Horizon para desacoplar y procesar cargas críticas de forma eficiente. Además, se automatizó el CI/CD con dockerización sobre una instancia EC2.",
    result: "La migración redujo enormemente la saturación operativa y mejoró significativamente el procesamiento del alto volumen de guías por minuto.",
    tech: ["CodeIgniter 3", "Laravel 11", "Horizon", "MySQL", "Docker", "CI/CD", "EC2"],
    // github: "https://github.com",
    // live: "https://example.com"
  },
  {
    title: "Plataforma de Digitalización Educativa",
    description: "Sistema integral de gestión del aprendizaje que resolvió la distribución digital para miles de usuarios.",
    problem: "La distribución física de libros estaba desactualizada y limitaba las capacidades de aprendizaje remoto.",
    solution: "Se construyó una plataforma de libros digitales interactivos con sincronización en tiempo real y protección DRM.",
    result: "Se digitalizó con éxito el currículo para más de 5,000 estudiantes activos.",
    tech: ["Next.js", "Node.js", "Firebase", "WebSockets"],
    // github: "https://github.com",
    // live: "https://example.com"
  },
  {
    title: "Sistema Empresarial de Migración de Datos",
    description: "Pipeline automatizado para migrar datos complejos de hojas de cálculo a bases de datos relacionales.",
    problem: "La captura manual de datos era propensa a errores, generando un gran cuello de botella operativo.",
    solution: "Se desarrolló un proceso ETL que replicaba cadenas de validación con reportes de errores personalizados.",
    result: "Se ahorraron más de 40 horas semanales de trabajo manual y se redujeron las anomalías de datos en un 98%.",
    tech: ["Python", "C#", "SQL Server"],
    // github: "https://github.com"
  }
];

export function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-col gap-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Trabajo <span className="text-muted-foreground">Destacado</span>
          </h2>
          <p className="text-muted-foreground">
            Proyectos seleccionados que demuestran planificación arquitectónica, resolución de problemas y resultados medibles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-card/60 backdrop-blur-sm border-border/80 hover:border-accent/50 transition-colors group">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-sm mt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4 text-sm text-muted-foreground">
                  <div>
                    <span className="font-semibold text-foreground/80 block mb-1">Problema:</span>
                    {project.problem}
                  </div>
                  <div>
                    <span className="font-semibold text-foreground/80 block mb-1">Solución:</span>
                    {project.solution}
                  </div>
                  <div>
                    <span className="font-semibold text-foreground/80 block mb-1">Resultado:</span>
                    <span className="text-foreground">{project.result}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.tech.map(t => (
                      <Badge key={t} variant="outline" className="border-border/50">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
                {/* <CardFooter className="pt-0 flex gap-4 mt-auto">
                  {project.github && (
                    <Link href={project.github} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
                      <Github className="w-4 h-4" /> Código
                    </Link>
                  )}
                  {project.live && (
                    <Link href={project.live} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
                      <ExternalLink className="w-4 h-4" /> Demo en vivo
                    </Link>
                  )}
                </CardFooter> */}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
