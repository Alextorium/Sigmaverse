import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";

const data = [
  { name: "Liquity", value: 20, fill: '#FFD66C' },
  { name: "Stacking contract", value: 10, fill: '#FD99FF' },
  { name: "Team", value: 10, fill: '#FFAA5C'},
  { name: "Presale", value: 55, fill: '#FF7575' },
  { name: "App", value: 5, fill: '#70A9FF' },

];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
            <text style={{fontSize:'37px'}} x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}  {`(Allocated ${(percent * 100).toFixed(0)}%)`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
      style={{fontSize:'20px',}}
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#d9f221"
      >{payload.name}</text>
      <text
      style={{fontSize:'20px'}}
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill={fill}
      >
        {`Allocated ${(percent * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

export default function Graph() {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
      (_, index) => {
        setActiveIndex(index);
      },
      [setActiveIndex]
    );
  
    return (
      <div id='tokenomics' className='desktop font-face-MSR'>
        <br />
        <h2 className='font-face-MSR' style={{color: 'white', fontWeight: 700, paddingRight: '950px'}}>Tokenomics</h2>
        <br />
        <h3 style={{color: 'white'}}>Max Supply 1,000,000,000</h3>
      <PieChart className='desktop' width={1200} height={700}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={600}
          cy={340}
          innerRadius={290}
          outerRadius={300}
          fill='#fff'
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
      </div>
    );
}
