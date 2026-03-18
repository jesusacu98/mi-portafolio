"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Github, Linkedin, Terminal } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto border border-border bg-card/50 rounded-2xl p-8 md:p-16 text-center relative overflow-hidden"
      >
        {/* Efecto de brillo sutil */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 space-y-8 flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted border border-border mb-4">
            <Terminal className="w-8 h-8 text-foreground" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
            ¿Listo para escalar tu próximo proyecto?
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Actualmente estoy abierto a roles senior y oportunidades de consultoría. Ya sea que necesites diseñar un sistema complejo desde cero o escalar una aplicación monolítica existente, mi bandeja de entrada está abierta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" variant="primary" className="group">
              <a href="mailto:jesusvizcarra90298@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Salúdame
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="https://www.linkedin.com/in/jes%C3%BAs-alfredo-vizcarra-valdes-a27b7b240/" target="_blank" rel="noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            {/* <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="https://github.com/jesusvizcarra" target="_blank" rel="noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button> */}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
