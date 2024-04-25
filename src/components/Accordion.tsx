import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { useState, useRef } from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import { data } from '@/mocks/barChartData';

const Accordion = () => {
  const [active, setActive] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('0px');
  const content = useRef<(HTMLDivElement | null)[]>([]);

  function toggleAccordion(index: number) {
    console.log('Accordion index: ', content.current[index]);
    setActive(!active);
    setHeight(active ? '0px' : `${content.current[index]?.scrollHeight}px`);
  }

  return (
    <>
      <Card>
        <CardHeader
          role="button"
          tabIndex={0}
          className={`cursor-pointer ${active ? 'active' : ''}`}
          onClick={() => toggleAccordion(0)}
        >
          <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
          <div className="pt-6 text-3xl font-semibold text-purple-500">
            600 000
          </div>
          <div className="text-sm font-normal">млн.</div>
        </CardHeader>
        <div
          ref={(ref) => (content.current[0] = ref)}
          className="first transition-height ease-in-out duration-200 overflow-hidden"
          style={{ maxHeight: height }}
        >
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data} layout="vertical" margin={{ left: 100 }}>
                <XAxis type="number" stroke="#888888"></XAxis>
                <YAxis
                  type="category"
                  dataKey="name"
                  fontSize={14}
                  minTickGap={0}
                  stroke="#888888"
                ></YAxis>
                <Tooltip contentStyle={{ color: '#000' }} />
                <Bar
                  dataKey="zn"
                  fill="currentColor"
                  className="fill-primary"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </div>
      </Card>
      <Card>
        <CardHeader
          role="button"
          tabIndex={0}
          className={`cursor-pointer ${active ? 'active' : ''}`}
          onClick={() => toggleAccordion(1)}
        >
          <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
          <div className="pt-6 text-3xl font-semibold text-purple-500">
            600 000
          </div>
          <div className="text-sm font-normal">млн.</div>
        </CardHeader>
        <div
          ref={(ref) => (content.current[1] = ref)}
          className="second transition-height ease-in-out duration-200 overflow-hidden"
          style={{ maxHeight: height }}
        >
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data} layout="vertical" margin={{ left: 100 }}>
                <XAxis type="number" stroke="#888888"></XAxis>
                <YAxis
                  type="category"
                  dataKey="name"
                  fontSize={14}
                  minTickGap={0}
                  stroke="#888888"
                ></YAxis>
                <Tooltip contentStyle={{ color: '#000' }} />
                <Bar
                  dataKey="zn"
                  fill="currentColor"
                  className="fill-primary"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </div>
      </Card>
      <Card>
        <CardHeader
          role="button"
          tabIndex={0}
          className={`cursor-pointer ${active ? 'active' : ''}`}
          onClick={() => toggleAccordion(2)}
        >
          <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
          <div className="pt-6 text-3xl font-semibold text-purple-500">
            600 000
          </div>
          <div className="text-sm font-normal">млн.</div>
        </CardHeader>
        <div
          ref={(ref) => (content.current[2] = ref)}
          className="third transition-height ease-in-out duration-200 overflow-hidden"
          style={{ maxHeight: height }}
        >
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data} layout="vertical" margin={{ left: 100 }}>
                <XAxis type="number" stroke="#888888"></XAxis>
                <YAxis
                  type="category"
                  dataKey="name"
                  fontSize={14}
                  minTickGap={0}
                  stroke="#888888"
                ></YAxis>
                <Tooltip contentStyle={{ color: '#000' }} />
                <Bar
                  dataKey="zn"
                  fill="currentColor"
                  className="fill-primary"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default Accordion;
