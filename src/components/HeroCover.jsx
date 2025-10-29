import React from 'react';
import Spline from '@splinetool/react-spline';
import { Wallet, ShieldCheck } from 'lucide-react';

export default function HeroCover({ onGetStarted }) {
  return (
    <section className="relative w-full h-[420px] overflow-hidden rounded-2xl bg-gradient-to-b from-white to-blue-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium shadow-sm">
          <ShieldCheck className="w-4 h-4" />
          Bank‑grade security
        </div>

        <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
          Take control of your money
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Track income and expenses, set smart budgets, and hit your savings goals with friendly insights.
        </p>
        
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <button onClick={onGetStarted} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-green-600 text-white shadow-lg shadow-green-600/20 hover:bg-green-700 transition">
            <Wallet className="w-5 h-5" />
            Get started
          </button>
          <a href="#transactions" className="px-5 py-3 rounded-xl bg-white/80 text-slate-700 border border-slate-200 hover:bg-white transition">
            View demo
          </a>
        </div>
      </div>
    </section>
  );
}
