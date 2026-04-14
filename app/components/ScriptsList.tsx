"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { apiServices, type Script } from "@/lib/api";

export default function ScriptsList() {
  const [scripts, setScripts] = useState<Script[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'active' | 'maintenance' | 'discontinued'>('all');

  useEffect(() => {
    const fetchScripts = async () => {
      try {
        const response = await apiServices.getScripts();
        if (response.success) {
          setScripts(response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar scripts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchScripts();
  }, []);

  const filteredScripts = scripts.filter(script => 
    filter === 'all' ? true : script.status === filter
  );

  const getStatusBadge = (status: Script['status']) => {
    const config = {
      active: { label: '🟢 Ativo', class: 'status-active' },
      maintenance: { label: '🟡 Manutenção', class: 'status-maintenance' },
      discontinued: { label: '🔴 Descontinuado', class: 'status-discontinued' },
    };
    return config[status];
  };

  return (
    <section id="scripts" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Nossos Scripts</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Explore nossa coleção de scripts premium com status em tempo real
          </p>

          {/* Status Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { key: 'all', label: 'Todos' },
              { key: 'active', label: '🟢 Ativos' },
              { key: 'maintenance', label: '🟡 Manutenção' },
              { key: 'discontinued', label: '🔴 Descontinuados' },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setFilter(item.key as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === item.key
                    ? 'bg-primary text-white'
                    : 'glass-card hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Scripts Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-card p-6 animate-pulse">
                <div className="h-6 bg-white/10 rounded w-24 mb-4"></div>
                <div className="h-8 bg-white/10 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-white/10 rounded w-full mb-2"></div>
                <div className="h-4 bg-white/10 rounded w-2/3 mb-4"></div>
                <div className="h-10 bg-white/10 rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : filteredScripts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScripts.map((script, index) => {
              const status = getStatusBadge(script.status);
              return (
                <motion.div
                  key={script.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card p-6 hover:neon-glow transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`status-badge ${status.class}`}>{status.label}</span>
                    <span className="text-gray-500 text-sm">v{script.version}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{script.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{script.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">R$ {script.price.toFixed(2).replace('.', ',')}</span>
                    <button className="btn-primary text-sm px-4 py-2">
                      {script.status === 'active' ? 'Comprar' : 'Saiba Mais'}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Nenhum script encontrado com este filtro.</p>
          </div>
        )}
      </div>
    </section>
  );
}
