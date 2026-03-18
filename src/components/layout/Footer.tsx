import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <span className="font-bold text-xl tracking-tighter mb-2">Jesus Vizcarra.</span>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Desarrollador Fullstack Senior y Arquitecto. <br />
            Construyendo sistemas escalables para la web moderna.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <div className="flex space-x-6 mb-4">
            {/* <a href="https://github.com/jesusvizcarra" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a> */}
            <a href="https://www.linkedin.com/in/jes%C3%BAs-alfredo-vizcarra-valdes-a27b7b240/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:jesusvizcarra90298@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Correo</span>
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Jesús Vizcarra. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
