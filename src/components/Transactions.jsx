import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const items = [
  { id: 1, type: 'income', title: 'Salary', category: 'Income', amount: 2400, date: '2025-10-01' },
  { id: 2, type: 'expense', title: 'Groceries', category: 'Food', amount: 76.32, date: '2025-10-03' },
  { id: 3, type: 'expense', title: 'Electricity Bill', category: 'Bills', amount: 92.15, date: '2025-10-04' },
  { id: 4, type: 'expense', title: 'Metro Card', category: 'Transport', amount: 25.00, date: '2025-10-06' },
  { id: 5, type: 'expense', title: 'Cinema', category: 'Entertainment', amount: 18.50, date: '2025-10-07' },
];

const categoryColors = {
  Food: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Bills: 'bg-blue-50 text-blue-700 ring-blue-200',
  Transport: 'bg-teal-50 text-teal-700 ring-teal-200',
  Entertainment: 'bg-indigo-50 text-indigo-700 ring-indigo-200',
  Income: 'bg-green-50 text-green-700 ring-green-200',
};

export default function Transactions() {
  return (
    <section id="transactions" className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-900">Recent transactions</h3>
        <span className="text-sm text-slate-500">This week</span>
      </div>
      <div className="divide-y divide-slate-100">
        {items.map((t) => (
          <div key={t.id} className="py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center ${t.type === 'income' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'}`}>
                {t.type === 'income' ? (
                  <ArrowDownRight className="w-4 h-4" />
                ) : (
                  <ArrowUpRight className="w-4 h-4" />
                )}
              </div>
              <div>
                <div className="font-medium text-slate-800">{t.title}</div>
                <div className="text-sm text-slate-500">{new Date(t.date).toLocaleDateString()}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 rounded-full text-xs ring-1 ${categoryColors[t.category] || 'bg-slate-50 text-slate-700 ring-slate-200'}`}>{t.category}</span>
              <div className={`font-semibold ${t.type === 'income' ? 'text-green-600' : 'text-slate-800'}`}>
                {t.type === 'income' ? '+' : '-'}${Math.abs(t.amount).toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
