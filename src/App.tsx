/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  Star, 
  ArrowRight, 
  Smartphone, 
  ShieldCheck, 
  Zap,
  Wifi,
  PlayCircle,
  MapPin,
  Coffee,
  Utensils,
  ChevronRight,
  ClipboardCheck,
  Bot,
  ExternalLink,
  Globe
} from 'lucide-react';
import { cn } from './lib/utils';
import { translations, Language } from './translations';

// --- Components ---

const Navbar = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass py-3 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-xl tracking-tighter">LUMIA AI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#platform" className="hover:text-accent transition-colors">{t.platform}</a>
          <a href="#pricing" className="hover:text-accent transition-colors">{t.pricing}</a>
          
          <div className="flex items-center gap-2 bg-slate-100 rounded-full p-1">
            <button 
              onClick={() => setLang('fr')}
              className={cn("px-3 py-1 rounded-full text-xs transition-all", lang === 'fr' ? "bg-white shadow-sm font-bold" : "text-slate-500")}
            >
              FR
            </button>
            <button 
              onClick={() => setLang('en')}
              className={cn("px-3 py-1 rounded-full text-xs transition-all", lang === 'en' ? "bg-white shadow-sm font-bold" : "text-slate-500")}
            >
              EN
            </button>
          </div>
        </div>

        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all"
        >
          {t.becomeHost}
        </button>
      </div>
    </nav>
  );
};

const ExclusivityModal = ({ isOpen, onClose, lang }: { isOpen: boolean, onClose: () => void, lang: Language }) => {
  const t = translations[lang].modal;
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl text-center"
          >
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="font-display text-3xl font-bold mb-4">{t.title}</h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              {t.desc}
            </p>
            <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
              <p className="text-sm text-slate-500 mb-2 uppercase tracking-widest font-semibold">{t.action}</p>
              <p className="font-medium">{t.instruction}</p>
            </div>
            <a 
              href="https://wa.me/21269447570" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-green-200"
            >
              <MessageSquare className="w-6 h-6" />
              {t.btn}
            </a>
            <button 
              onClick={onClose}
              className="mt-6 text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors"
            >
              {t.back}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lang, setLang] = useState<Language>('fr');
  const t = translations[lang];

  const handlePaymentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      <Navbar lang={lang} setLang={setLang} />
      <ExclusivityModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} lang={lang} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-100 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-8 border border-slate-200">
              <Zap className="w-3 h-3 text-black" /> {t.hero.tag}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter">
              {t.hero.title} <br />
              <span className="gradient-text italic">{t.hero.titleAccent}</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://lumiconcierge.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-5 rounded-2xl font-bold text-xl bg-black text-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-300"
              >
                {t.hero.testIA} <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Showcase: The Guest App */}
      <section id="platform" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">{t.platform.tag}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.platform.title}</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
              {t.platform.desc}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              {/* Phone Mockup */}
              <div className="relative mx-auto w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20" />
                
                <div className="h-full bg-slate-50 overflow-y-auto p-4 pt-10 space-y-4">
                  {/* App Content */}
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-400 uppercase">{t.platform.wifi}</span>
                      <Wifi className="w-4 h-4 text-blue-500" />
                    </div>
                    <p className="font-bold text-lg">Lumia_Guest_42</p>
                    <p className="text-sm text-slate-500 font-mono">Pass: welcome2024</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-400 uppercase px-1">{t.platform.tutos}</p>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3 cursor-pointer hover:bg-slate-50 transition-colors">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                          <Coffee className="w-5 h-5" />
                        </div>
                        <div className="flex-grow">
                          <p className="text-sm font-bold">{t.platform.tutoCoffee}</p>
                          <p className="text-[10px] text-slate-400">{t.platform.tutoWatch}</p>
                        </div>
                        <PlayCircle className="w-5 h-5 text-slate-300" />
                      </div>
                      <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3 cursor-pointer hover:bg-slate-50 transition-colors">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                          <Utensils className="w-5 h-5" />
                        </div>
                        <div className="flex-grow">
                          <p className="text-sm font-bold">{t.platform.tutoStove}</p>
                          <p className="text-[10px] text-slate-400">{t.platform.tutoWatch}</p>
                        </div>
                        <PlayCircle className="w-5 h-5 text-slate-300" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-black p-4 rounded-2xl shadow-lg text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-bold uppercase">{t.platform.aiAssistant}</span>
                    </div>
                    <p className="text-[10px] text-slate-300 mb-3 italic">"{t.platform.aiPrompt}"</p>
                    <div className="bg-white/10 p-2 rounded-xl text-[9px] border border-white/10 leading-tight">
                      {t.platform.aiDesc}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-400 uppercase px-1">{t.platform.recs}</p>
                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">Le Petit Bistro</p>
                        <p className="text-[10px] text-slate-400">{t.platform.recDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10" />
            </motion.div>

            <div className="order-1 lg:order-2">
              <div className="space-y-10">
                {[
                  { icon: <Wifi className="w-7 h-7" />, title: t.platform.feature1Title, desc: t.platform.feature1Desc },
                  { icon: <PlayCircle className="w-7 h-7" />, title: t.platform.feature2Title, desc: t.platform.feature2Desc },
                  { icon: <Bot className="w-7 h-7" />, title: t.platform.feature3Title, desc: t.platform.feature3Desc },
                  { icon: <MapPin className="w-7 h-7" />, title: t.platform.feature4Title, desc: t.platform.feature4Desc }
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2">{feature.title}</h4>
                      <p className="text-slate-600 text-lg">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Feature: Intelligent Check-out */}
      <section className="py-24 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">{t.checkout.tag}</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                {t.checkout.title} <br />
                <span className="text-slate-400">{t.checkout.titleAccent}</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t.checkout.desc}
              </p>
              
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                  <p className="font-bold">{t.checkout.satisfaction}</p>
                </div>
                <p className="text-slate-500 text-sm">{t.checkout.satisfactionDesc}</p>
              </div>

              <button 
                onClick={handlePaymentClick}
                className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all flex items-center gap-2"
              >
                {t.checkout.btn} <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="font-display text-2xl font-bold">{t.checkout.label}</h4>
                  <span className="text-slate-400 text-sm">{t.checkout.todo}</span>
                </div>
                
                <div className="space-y-6">
                  {[
                    { label: t.checkout.task1, checked: true },
                    { label: t.checkout.task2, checked: true },
                    { label: t.checkout.task3, checked: true },
                    { label: t.checkout.task4, checked: false }
                  ].map((task, i) => (
                    <div key={i} className={cn(
                      "flex items-center justify-between p-4 rounded-2xl border transition-all",
                      task.checked ? "bg-white/10 border-white/20" : "bg-transparent border-white/10"
                    )}>
                      <span className={cn("font-medium", task.checked && "line-through opacity-50")}>{task.label}</span>
                      <div className={cn(
                        "w-6 h-6 rounded-full border-2 flex items-center justify-center",
                        task.checked ? "bg-green-500 border-green-500" : "border-white/30"
                      )}>
                        {task.checked && <CheckCircle2 className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-green-500/10 rounded-3xl border border-green-500/20 text-center">
                  <p className="text-sm font-bold text-green-400 uppercase tracking-widest mb-2">{t.checkout.done}</p>
                  <p className="text-white text-sm font-medium">{t.checkout.redirect}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.testimonials.title}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              {t.testimonials.desc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[t.testimonials.t1, t.testimonials.t2, t.testimonials.t3].map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                    <img src={`https://picsum.photos/seed/${test.name}/100/100`} alt={test.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-bold">{test.name}</p>
                    <p className="text-xs text-slate-500">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.pricing.title}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              {t.pricing.desc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{t.pricing.base.name}</h3>
                <p className="text-slate-500">{t.pricing.base.desc}</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold">200 DH</span>
                <span className="text-slate-500"> / mois</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {t.pricing.base.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-slate-400" /> {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={handlePaymentClick}
                className="w-full py-4 rounded-2xl border-2 border-black font-bold hover:bg-black hover:text-white transition-all"
              >
                {t.pricing.btn}
              </button>
            </motion.div>

            {/* Premium Plan */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-6 right-6">
                <span className="bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                  {t.pricing.popular}
                </span>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{t.pricing.premium.name}</h3>
                <p className="text-slate-400">{t.pricing.premium.desc}</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold">350 DH</span>
                <span className="text-slate-400"> / mois</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {t.pricing.premium.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-white" /> {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={handlePaymentClick}
                className="w-full py-4 rounded-2xl bg-white text-black font-bold hover:bg-slate-100 transition-all shadow-lg shadow-white/5"
              >
                {t.pricing.btnPremium}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500 rounded-full blur-[120px]" />
          </div>
          
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {t.cta.title} <br />
              <span className="gradient-text italic">{t.cta.titleAccent}</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              {t.cta.desc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={handlePaymentClick}
                className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all"
              >
                {t.cta.btn}
              </button>
              <a 
                href="https://wa.me/21269447570" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 rounded-2xl border border-white/20 font-bold text-lg hover:bg-white/5 transition-all"
              >
                <MessageSquare className="w-5 h-5" /> {t.cta.btnExpert}
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg tracking-tighter">LUMIA AI</span>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-black transition-colors">{t.footer.legal}</a>
            <a href="#" className="hover:text-black transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-black transition-colors">{t.footer.contact}</a>
          </div>

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Lumia AI. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
