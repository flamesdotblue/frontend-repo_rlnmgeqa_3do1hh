import React, { useMemo } from 'react';
import { AlertTriangle, PiggyBank, TrendingUp } from 'lucide-react';

const categories = [
  { name: 'Food', budget: 300, spent: 260, color: 'bg-green-500' },
  { name: 'Bills', budget: 450, spent: 480, color: 'bg-blue-500' },
  { name: 'Transport', budget: 150, spent: 120, color: 'bg-teal-500' },
  { name: 'Entertainment', budget: 200, spent: 110, color: 'bg-indigo-500' },
];

const goals = [
  { name: 'Emergency Fund', target: 3000, saved: 1800 },
  { name: 'Vacation', target: 1500, saved: 550 },
];

export default function BudgetAndGoals() {
  const income = 3200;
  const expenses = categories.reduce((sum, c) => sum + c.spent, 0);

  const tips = useMemo(() => {
    const list = [];
    if (expenses > income) list.push('You spent more than you earned this month. Consider reducing non‑essential categories.');
    const overs = categories.filter(c => c.spent > c.budget);
    if (overs.length) list.push(`You exceeded ${overs.length} budget${overs.length > 1 ? 's' : ''}. Review your limits for ${overs.map(o => o.name).join(', ')}.`);
    if (!overs.length && expenses < income * 0.7) list.push('Great job! You are well below your budget this month. Consider increasing savings contributions.');
    return list.length ? list : ['Track consistently for a week to unlock personalized insights.'];
  }, [income, expenses]);

  const incomePct = Math.min(100, Math.round((income / Math.max(income, expenses)) * 100));
  const expensePct = 100 - incomePct;

  return (
    <section className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Income vs. Expenses</h3>
            <div className="flex items-center gap-2 text-sm text-slate-500"><TrendingUp className="w-4 h-4" /> This month</div>
          </div>
          <div className="space-y-3">
            <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-3 bg-green-500" style={{ width: `${incomePct}%` }} />
            </div>
            <div className="flex justify-between text-sm text-slate-600">
              <span>Income ${income.toLocaleString()}</span>
              <span>Expenses ${expenses.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4">Budgets</h3>
          <div className="space-y-4">
            {categories.map((c) => {
              const pct = Math.min(100, Math.round((c.spent / c.budget) * 100));
              const over = c.spent > c.budget;
              return (
                <div key={c.name} className="">
                  <div className="flex items-center justify-between text-sm">
                    <div className="font-medium text-slate-800">{c.name}</div>
                    <div className={`flex items-center gap-2 ${over ? 'text-red-600' : 'text-slate-500'}`}>
                      {over && <AlertTriangle className="w-4 h-4" />}
                      <span>${c.spent}/{c.budget}</span>
                    </div>
                  </div>
                  <div className="mt-2 w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className={`h-2 ${c.color}`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Savings goals</h3>
            <PiggyBank className="w-4 h-4 text-slate-500" />
          </div>
          <div className="space-y-4">
            {goals.map(g => {
              const pct = Math.min(100, Math.round((g.saved / g.target) * 100));
              return (
                <div key={g.name}>
                  <div className="flex items-center justify-between text-sm">
                    <div className="font-medium text-slate-800">{g.name}</div>
                    <div className="text-slate-500">${g.saved}/{g.target}</div>
                  </div>
                  <div className="mt-2 w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-2 bg-emerald-500" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-green-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="mt-1"><TrendingUp className="w-5 h-5 text-blue-600" /></div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Insights</h4>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                {tips.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
