import React from 'react';
import Spline from '@splinetool/react-spline';
import { Wallet, ShieldCheck } from 'lucide-react';

export default function HeroCover({ onGetStarted }) {
  return (
    <section className="relative w-full h-[460px] overflow-hidden rounded-2xl bg-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-slate-900/40 to-slate-950/70 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-sm font-medium ring-1 ring-emerald-400/30 shadow-sm">
          <ShieldCheck className="w-4 h-4" />
          Bank‑grade security
        </div>

        <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white">
          Take control of your money
        </h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Track income and expenses, set smart budgets, and hit your savings goals with friendly insights.
        </p>
        
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <button onClick={onGetStarted} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition">
            <Wallet className="w-5 h-5" />
            Get started
          </button>
          <a href="#transactions" className="px-5 py-3 rounded-xl bg-white/10 text-white/90 ring-1 ring-white/20 hover:bg-white/15 transition">
            View demo
          </a>
        </div>
      </div>
    </section>
  );
}
