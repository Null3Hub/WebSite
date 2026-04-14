"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Atualizações Constantes",
    description: "Receba atualizações automáticas e melhorias contínuas em todos os scripts",
  },
  {
    icon: "🔒",
    title: "100% Seguro",
    description: "Todos os scripts passam por rigorosos testes de segurança e verificação",
  },
  {
    icon: "💬",
    title: "Suporte 24/7",
    description: "Equipe dedicada pronta para ajudar a qualquer momento do dia",
  },
  {
    icon: "📦",
    title: "Fácil Instalação",
    description: "Processo de instalação simplificado em poucos cliques",
  },
  {
    icon: "📊",
    title: "Analytics Integrado",
    description: "Acompanhe o desempenho e uso dos seus scripts em tempo real",
  },
  {
    icon: "🔄",
    title: "Sync Automático",
    description: "Sincronização automática entre todos os seus dispositivos",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Recursos Premium</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tudo o que você precisa para potencializar seu entretenimento digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-card p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
