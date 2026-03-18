"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Sobre mí", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  { name: "Tecnologías", href: "#stack" },
  { name: "Proyectos", href: "#projects" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-lg tracking-tighter hover:opacity-80 transition-opacity">
            JV.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pl-4 border-l border-border">
                {/* <Link href="https://github.com" target="_blank" rel="noreferrer">
                  <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                </Link> */}
              <Link href="https://www.linkedin.com/in/jes%C3%BAs-alfredo-vizcarra-valdes-a27b7b240/" target="_blank" rel="noreferrer">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
              <Button asChild variant="primary" size="sm">
                <Link href="#contact">Contrátame</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Alternar menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-16 left-0 w-full bg-background border-b border-border transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col px-4 py-4 space-y-4 shadow-lg">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-6 pt-4 border-t border-border">
            {/* <Link href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="w-5 h-5 text-muted-foreground" />
            </Link> */}
            <Link href="https://www.linkedin.com/in/jes%C3%BAs-alfredo-vizcarra-valdes-a27b7b240/" target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5 text-muted-foreground" />
            </Link>
            <Link href="mailto:jesusvizcarra90298@gmail.com" className="text-muted-foreground">
              <Mail className="w-5 h-5 text-muted-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
