import React, {useMemo} from "react";
import {PieChart, Pie, Cell, Tooltip} from "recharts";
import {
    chartWrapper,
    chartContainer,
    circleWrapper,
    innerCircleWrapper,
    smallCircleWrapper,
    smallestCircleWrapper,
    legendWrapper,
    legendItem,
    legendCircleUsed,
    legendCircleFree
} from "./style";

interface IStorageChartProps {
    used_size: number;
    total_size: number;
}

interface IChartData {
    name: string;
    value: number;
}

const COLORS = ["var(--color-purple-light)", "var(--color-purple)"];

const StorageChart: React.FC<IStorageChartProps> = ({used_size, total_size}) => {
    const chartData: IChartData[] = useMemo(() => [
        {name: "Занято", value: used_size},
        {name: "Свободно", value: total_size - used_size},
    ], [used_size, total_size]);
    return (
        <div className={chartWrapper}>
            <div className={chartContainer}>
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
                        stroke="none">
                        {chartData.map((_, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip/>
                </PieChart>

                <div className={circleWrapper}></div>
                <div className={innerCircleWrapper}></div>
                <div className={smallCircleWrapper}></div>
                <div className={smallestCircleWrapper}></div>
            </div>
            <div className={legendWrapper}>
                <div className={legendItem}>
                    <span className={legendCircleUsed}></span>
                    <span>Занято</span>
                </div>
                <div className={legendItem}>
                    <span className={legendCircleFree}></span>
                    <span>Свободно</span>
                </div>
            </div>
        </div>
    );
};

export default StorageChart;
