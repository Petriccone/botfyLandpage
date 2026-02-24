import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import { Cpu, FileText, Shield, Globe, Zap, BarChart3 } from 'lucide-react'

export function LogicFlowFeatures() {
    const { t } = useLanguage()

    return (
        <section className="py-40 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mb-32 border-l-4 border-accent-cyan pl-8"
                >
                    <span className="mono-label mb-4 block">System_Components</span>
                    <h2 className="text-6xl md:text-8xl font-display font-black uppercase leading-none">
                        {t.features.titleStart} <br />
                        <span className="text-accent-cyan">{t.features.titleHighlight}</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
                    {t.features.items.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            {/* Connector Line */}
                            <div className="absolute -top-12 left-0 w-full h-[1px] bg-white/5 overflow-hidden">
                                <motion.div
                                    animate={{ left: ['-100%', '200%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                                    className="absolute top-0 w-1/4 h-full bg-accent-cyan opacity-40"
                                />
                            </div>

                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <span className="mono-label text-[10px] opacity-20">[{String(i + 1).padStart(2, '0')}]</span>
                                    <div className="h-[1px] flex-1 bg-white/5" />
                                </div>

                                <h3 className="text-2xl font-display font-bold uppercase tracking-tight group-hover:text-accent-cyan transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-slate-500 leading-relaxed font-light text-lg">
                                    {feature.desc}
                                </p>

                                <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-1 h-1 bg-accent-cyan" />
                                    <span className="mono-label text-[10px]">Active_System_Node</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative large background text */}
            <div className="absolute -bottom-20 -right-20 text-[20vw] font-display font-black text-white/[0.02] uppercase pointer-events-none select-none">
                Botfy_IA
            </div>
        </section>
    )
}
