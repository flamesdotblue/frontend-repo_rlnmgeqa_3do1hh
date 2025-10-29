import React, { useState } from 'react';
import { User, CreditCard, Target, CheckCircle2 } from 'lucide-react';

export default function OnboardingCard() {
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false);

  const next = () => {
    if (step < 3) setStep(step + 1);
    else setCompleted(true);
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-slate-900">Quick setup</h2>
        <span className="text-sm text-slate-500">Step {completed ? 3 : step} of 3</span>
      </div>

      {!completed ? (
        <div className="grid gap-5 md:grid-cols-3">
          <div className={`rounded-xl border p-4 ${step >= 1 ? 'border-green-200 bg-green-50' : 'border-slate-200'}`}>
            <div className="flex items-center gap-2 font-medium text-slate-800">
              <User className="w-4 h-4" /> Profile
            </div>
            <p className="mt-2 text-sm text-slate-600">Your name and currency preferences.</p>
          </div>

          <div className={`rounded-xl border p-4 ${step >= 2 ? 'border-green-200 bg-green-50' : 'border-slate-200'}`}>
            <div className="flex items-center gap-2 font-medium text-slate-800">
              <CreditCard className="w-4 h-4" /> Accounts
            </div>
            <p className="mt-2 text-sm text-slate-600">Add bank or cash accounts.</p>
          </div>

          <div className={`rounded-xl border p-4 ${step >= 3 ? 'border-green-200 bg-green-50' : 'border-slate-200'}`}>
            <div className="flex items-center gap-2 font-medium text-slate-800">
              <Target className="w-4 h-4" /> Goals
            </div>
            <p className="mt-2 text-sm text-slate-600">Set savings targets.</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <p className="text-sm text-green-800">All set! You can start tracking and budgeting.</p>
        </div>
      )}

      <div className="mt-4 flex items-center justify-end">
        <button onClick={next} className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
          {completed ? 'Restart' : step < 3 ? 'Continue' : 'Finish'}
        </button>
      </div>
    </div>
  );
}
