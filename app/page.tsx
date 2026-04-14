"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import ScriptsList from "./components/ScriptsList";
import { apiServices } from "@/lib/api";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [apiStatus, setApiStatus] = useState<{ status: string; uptime: number } | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    // Verificar status da API
    apiServices.getHealth().then(setApiStatus);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Início" },
    { href: "#scripts", label: "Scripts" },
    { href: "#features", label: "Recursos" },
    { href: "#pricing", label: "Planos" },
    { href: "#testimonials", label: "Depoimentos" },
  ];

  return (
    <main className="gradient-bg min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-darker/95 backdrop-blur-md" : "glass-card"
        }`}
        style={{ borderRadius: 0, borderLeft: "none", borderRight: "none", borderTop: "none" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-3">
              <motion.span 
                className="text-3xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡
              </motion.span>
              <span className="text-xl font-bold text-gradient">NullHub</span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <button className="text-sm px-4 py-2 rounded-lg border border-white/20 hover:border-primary/50 transition-all">
                🇧🇷 PT
              </button>
              
              {/* API Status Badge */}
              <div className="hidden sm:flex items-center space-x-2 text-xs">
                <span className={`w-2 h-2 rounded-full ${
                  apiStatus?.status === 'online' ? 'bg-green-500 animate-pulse' : 'bg-red-500'
                }`}></span>
                <span className="text-gray-400">API {apiStatus?.status || '...'}</span>
              </div>
              
              {/* Login Button */}
              <button className="btn-primary text-sm px-6 py-2 hidden sm:block">
                Login
              </button>
              
              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 border-t border-white/10 space-y-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                  <button className="btn-primary w-full mt-4">Login</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Main Content */}
      <Hero apiStatus={apiStatus} />
      <ScriptsList />
      <Features />
      <Pricing />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-12 text-center neon-glow">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Pronto para Começar?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de usuários satisfeitos e transforme sua experiência digital hoje mesmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                🚀 Criar Conta Grátis
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                💬 Falar com Vendas
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">⚡</span>
                <span className="text-xl font-bold text-gradient">NullHub</span>
              </div>
              <p className="text-gray-400 mb-6">
                A plataforma definitiva de scripts para entretenimento digital.
              </p>
              <div className="flex space-x-4">
                {["twitter", "github", "discord"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-all"
                    aria-label={social}
                  >
                    <span className="text-lg">
                      {social === "twitter" && "🐦"}
                      {social === "github" && "📦"}
                      {social === "discord" && "💬"}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {[
              { title: "Produto", links: ["Scripts", "Preços", "API", "Documentação"] },
              { title: "Empresa", links: ["Sobre", "Blog", "Carreiras", "Contato"] },
              { title: "Legal", links: ["Termos", "Privacidade", "Cookies", "Licenças"] },
            ].map((column, index) => (
              <div key={index}>
                <h4 className="font-bold mb-6">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Null Hub Entertainment. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm mt-4 md:mt-0">
              Powered by NullHub API ⚡
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
