"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO, TechStart",
    avatar: "👨‍💼",
    content: "O NullHub transformou completamente nossa operação. Os scripts são incríveis e o suporte é excepcional.",
  },
  {
    name: "Ana Santos",
    role: "Desenvolvedora Senior",
    avatar: "👩‍💻",
    content: "Melhor investimento que fizemos. A qualidade dos scripts e a facilidade de uso são incomparáveis.",
  },
  {
    name: "Pedro Oliveira",
    role: "Founder, GameStudio",
    avatar: "🎮",
    content: "Uso há 6 meses e nunca tive problemas. Atualizações constantes e sempre funcionando perfeitamente.",
  },
  {
    name: "Mariana Costa",
    role: "CTO, DigitalHub",
    avatar: "👩‍🔧",
    content: "A segurança dos scripts me impressionou. Passamos por auditoria e tudo estava em conformidade.",
  },
];

const faqs = [
  {
    question: "Como funciona a compra dos scripts?",
    answer: "Após a compra, você recebe acesso imediato ao script através do seu painel de usuário. O download é automático e você recebe instruções detalhadas de instalação.",
  },
  {
    question: "Os scripts recebem atualizações?",
    answer: "Sim! Todos os scripts ativos recebem atualizações regulares. Planos Pro e Enterprise recebem atualizações prioritárias.",
  },
  {
    question: "Existe garantia de reembolso?",
    answer: "Oferecemos garantia de 7 dias para todos os scripts. Se não estiver satisfeito, solicitamos reembolso sem perguntas.",
  },
  {
    question: "Como funciona o suporte técnico?",
    answer: "Nosso suporte está disponível 24/7 via ticket e chat. Planos Pro e Enterprise têm prioridade no atendimento.",
  },
];

export default function Testimonials() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">O Que Dizem Nossos Clientes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Junte-se a milhares de usuários satisfeitos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-card p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{testimonial.avatar}</span>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-400 text-sm">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Perguntas Frequentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between"
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      activeAccordion === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className={`accordion-content px-6 ${activeAccordion === index ? "active" : ""}`}>
                  <p className="text-gray-400 pb-5">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
