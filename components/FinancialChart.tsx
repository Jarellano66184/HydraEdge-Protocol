import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { FinancialMetric } from '../types';

interface Props {
  data: FinancialMetric[];
  type: 'bar' | 'pie';
  title: string;
}

const FinancialChart: React.FC<Props> = ({ data, type, title }) => {
  return (
    <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 h-80 flex flex-col">
      <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">{title}</h3>
      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {type === 'bar' ? (
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} />
              <YAxis stroke="#666" fontSize={12} tickLine={false} tickFormatter={(val) => `$${val.toFixed(2)}`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111', borderColor: '#333' }}
                itemStyle={{ color: '#fff' }}
                formatter={(value: number) => [`$${value.toFixed(2)}`, 'Cost']}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill || '#ccff00'} />
                ))}
              </Bar>
            </BarChart>
          ) : (
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill || '#ccff00'} />
                ))}
              </Pie>
              <Tooltip 
                 contentStyle={{ backgroundColor: '#111', borderColor: '#333' }}
                 itemStyle={{ color: '#fff' }}
                 formatter={(value: number) => [`${value}%`, 'Allocation']}
              />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinancialChart;