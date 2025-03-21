import React from "react";
import {PieChart, Pie, Cell, Tooltip} from "recharts";

interface IStorageChartProps {
    used: number;
    total: number;
}

const COLORS_LIGHT = ["#624699", "#AEA1C9"];
const COLORS_DARK = ["#AEA1C9", "#624699"];


const StorageChart: React.FC<IStorageChartProps> = ({used, total}) => {
    const chartData = [
        {name: "Занято", value: used},
        {name: "Свободно", value: total - used},
    ];
    const isDarkMode = document.documentElement.getAttribute("data-theme") === "dark";
    const COLORS = isDarkMode ? COLORS_DARK : COLORS_LIGHT;
    return (
        <div className="flex flex-col">
            <div className="relative flex items-center justify-center">
                <PieChart width={250} height={250}>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={108}
                        startAngle={320}
                        endAngle={-270}
                        paddingAngle={4}
                        cornerRadius={8}
                        dataKey="value"
                        stroke="none"
                    >
                        {chartData.map((_, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip/>
                </PieChart>

                <div
                    className="absolute w-[252px] h-[252px] rounded-full border-2 border-purple "></div>
                <div
                    className="absolute w-[186px] h-[186px] rounded-full border-2 border-white dark:border-dark-theme"></div>
                <div
                    className="absolute w-[77px] h-[77px] rounded-full border-2 border-purple"></div>
                <div
                    className="absolute w-[35px] h-[35px] rounded-full border-2 border-purple"></div>
            </div>
            <div className="flex justify-start mt-2 flex-col font-light">
                <div className="flex items-center gap-2 ">
                        <span
                            className="w-3 h-3 block rounded-full bg-purple dark:bg-purple-light"
                        ></span>
                    <span>Занято</span>
                </div>
                <div className="flex items-center gap-2">
                        <span
                            className="w-3 h-3 block rounded-full bg-purple-light dark:bg-purple"
                        ></span>
                    <span>Свободно</span>
                </div>
            </div>
        </div>
    );
};

export default StorageChart;
