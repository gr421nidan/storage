import React from 'react';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    LabelList,
} from 'recharts';

interface BarProps {
    title: string;
    categories: string[];
    series: number[];
}

const StorageBarChart: React.FC<BarProps> = ({ title, categories, series }) => {
    const data = categories.map((cat, i) => ({ category: cat, value: series[i] }));

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">{title}</h3>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                    <XAxis dataKey="category" tick={{ fontSize: 12 }} />
                    <Tooltip formatter={(value: any) => `${value}%`} />
                    <Bar dataKey="value">
                        <LabelList dataKey="value" position="top" formatter={(v: number) => `${v}%`} />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StorageBarChart;
