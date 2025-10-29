import React, { useRef } from 'react';
import HeroCover from './components/HeroCover';
import OnboardingCard from './components/OnboardingCard';
import BudgetAndGoals from './components/BudgetAndGoals';
import Transactions from './components/Transactions';

export default function App() {
  const onboardingRef = useRef(null);

  const handleGetStarted = () => {
    onboardingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
        <HeroCover onGetStarted={handleGetStarted} />

        <main className="mt-8 grid gap-6">
          <section ref={onboardingRef} className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <BudgetAndGoals />
            </div>
            <div className="space-y-6">
              <OnboardingCard />
              <Transactions />
            </div>
          </section>
        </main>

        <footer className="mt-12 text-center text-sm text-slate-500">
          Built for better money habits • Minimalist, friendly, secure
        </footer>
      </div>
    </div>
  );
}
