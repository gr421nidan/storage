import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface IDonutProps {
    title: string;
    data: { name: string; value: number }[];
}

const COLORS = ['#8B5CF6', '#C084FC'];

const ParticipantsDonut: React.FC<IDonutProps> = ({ title, data }) => (
    <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <ResponsiveContainer width="100%" height={150}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    innerRadius="60%"
                    outerRadius="80%"
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={2}
                >
                    {data.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
        <ul className="mt-2 text-sm">
            {data.map((d, i) => (
                <li key={i} className="flex items-center gap-2">
          <span
              className="w-2 h-2 rounded-full"
              style={{ background: COLORS[i % COLORS.length] }}
          />
                    {d.value} — {d.name.toLowerCase()}
                </li>
            ))}
        </ul>
    </div>
);

export default ParticipantsDonut;
