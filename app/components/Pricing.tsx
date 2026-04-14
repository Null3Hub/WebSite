"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    description: "Para quem está começando",
    price: "Grátis",
    period: "",
    features: [
      { text: "3 Scripts Básicos", included: true },
      { text: "Suporte por Email", included: true },
      { text: "Atualizações Mensais", included: true },
      { text: "Analytics Básico", included: false },
    ],
    cta: "Começar Grátis",
    featured: false,
  },
  {
    name: "Pro",
    description: "Para usuários avançados",
    price: "R$ 49",
    period: "/mês",
    features: [
      { text: "15 Scripts Premium", included: true },
      { text: "Suporte Prioritário 24/7", included: true },
      { text: "Atualizações Semanais", included: true },
      { text: "Analytics Completo", included: true },
      { text: "API Access", included: true },
    ],
    cta: "Assinar Pro",
    featured: true,
  },
  {
    name: "Enterprise",
    description: "Para grandes equipes",
    price: "R$ 149",
    period: "/mês",
    features: [
      { text: "Scripts Ilimitados", included: true },
      { text: "Suporte Dedicado", included: true },
      { text: "Atualizações Diárias", included: true },
      { text: "Analytics Avançado", included: true },
      { text: "White Label", included: true },
      { text: "SLA Garantido", included: true },
    ],
    cta: "Contatar Vendas",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Planos & Preços</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Escolha o plano perfeito para suas necessidades
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: plan.featured ? 1.05 : 1.03 }}
              className={`glass-card p-8 relative ${
                plan.featured ? "border-primary neon-glow" : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-sm font-semibold">
                    MAIS POPULAR
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    {feature.included ? (
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    )}
                    <span className={feature.included ? "text-gray-300" : "text-gray-600"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 ${plan.featured ? "btn-primary" : "btn-secondary"}`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
