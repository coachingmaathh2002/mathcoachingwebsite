import React, { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend
} from 'recharts';
import * as math from 'mathjs';

interface FunctionConfig {
  fn: string;
  color: string;
  name?: string;
  strokeDasharray?: string;
}

interface MathPlotProps {
  config: string;
}

export const MathPlot: React.FC<MathPlotProps> = ({ config }) => {
  const parsedConfig = useMemo(() => {
    try {
      return JSON.parse(config);
    } catch (e) {
      console.error('Failed to parse MathPlot config', e);
      return null;
    }
  }, [config]);

  const data = useMemo(() => {
    if (!parsedConfig) return [];
    
    const { functions, domain = [-10, 10], step = 0.5 } = parsedConfig;
    const points = [];
    
    for (let x = domain[0]; x <= domain[1]; x += step) {
      const point: any = { x: Number(x.toFixed(2)) };
      
      functions.forEach((f: FunctionConfig, index: number) => {
        try {
          // Evaluate the function at x
          const y = math.evaluate(f.fn, { x });
          // Handle Infinity or NaN
          if (isFinite(y)) {
            point[`y${index}`] = Number(y.toFixed(4));
          } else {
            point[`y${index}`] = null;
          }
        } catch (e) {
          point[`y${index}`] = null;
        }
      });
      
      points.push(point);
    }
    
    return points;
  }, [parsedConfig]);

  if (!parsedConfig) {
    return <div className="p-4 bg-red-500/10 text-red-400 rounded-xl border border-red-500/20 text-sm font-mono">Invalid Graph Configuration</div>;
  }

  const { functions, yDomain = ['auto', 'auto'], height = 300 } = parsedConfig;

  return (
    <div className="my-8 bg-dark-900 p-4 rounded-2xl border border-white/10 shadow-xl" style={{ height: height + 60 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="x" 
            type="number" 
            domain={parsedConfig.domain} 
            stroke="rgba(255,255,255,0.5)" 
            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
            tickFormatter={(val) => Number.isInteger(val) ? val : ''}
          />
          <YAxis 
            domain={yDomain} 
            stroke="rgba(255,255,255,0.5)" 
            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e1e2f', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
            itemStyle={{ color: '#fff' }}
            labelFormatter={(label) => `x = ${label}`}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <ReferenceLine x={0} stroke="rgba(255,255,255,0.3)" strokeWidth={2} />
          <ReferenceLine y={0} stroke="rgba(255,255,255,0.3)" strokeWidth={2} />
          
          {functions.map((f: FunctionConfig, index: number) => (
            <Line
              key={index}
              type="monotone"
              dataKey={`y${index}`}
              name={f.name || f.fn}
              stroke={f.color}
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: f.color, stroke: '#1e1e2f', strokeWidth: 2 }}
              strokeDasharray={f.strokeDasharray}
              isAnimationActive={true}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
