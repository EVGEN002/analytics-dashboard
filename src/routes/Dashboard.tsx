import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

import { AreaChart, Area, PieChart, Pie, Cell } from 'recharts';

import { Filter, EllipsisVertical, ArrowUp, ArrowDown } from 'lucide-react';

const moneyInData = [
  { value: 0 },
  { value: 100 },
  { value: 200 },
  { value: 100 },
  { value: 300 },
  { value: 250 }
];

const moneyOutData = [
  { value: 250 },
  { value: 300 },
  { value: 100 },
  { value: 200 },
  { value: 100 },
  { value: 0 }
];

const invoicesData = [
  { name: 'Draft', value: 20 },
  { name: 'Paid', value: 80 }
];

const invoicesColors = ['#ef4444', '#84cc16'];

const occupancyData = [
  { name: 'occupied', value: 12 },
  { name: 'maintenance', value: 28 },
  { name: 'pending', value: 8 },
  { name: 'vacancy', value: 32 }
];

const occupancyColors = ['#fb923c', '#fef08a', '#a855f7', '#86efac'];

const Dashboard = () => {
  return (
    <>
      <div>
        <Tabs defaultValue="year">
          <div className="flex justify-between items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Fulfiled
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <TabsList>
              <TabsTrigger value="year">Year</TabsTrigger>
              <TabsTrigger value="quarter">Quarter</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="year" className="mt-4">
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-3 gap-3">
                <Card className="flex flex-col">
                  <CardHeader className="flex flex-row items-center relative">
                    <CardTitle>
                      <span>Money in</span>
                    </CardTitle>
                    <Button
                      className="absolute right-6"
                      variant="ghost"
                      size="icon"
                    >
                      <EllipsisVertical className="h-5 w-5" />
                    </Button>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex items-end justify-between mt-auto">
                      <div className="flex flex-col">
                        <div className="text-3xl font-semibold">$2,420</div>
                        <div className="flex items-center">
                          <ArrowUp
                            color="#84cc16"
                            className="inline w-4 h-4 mr-2"
                          />
                          <span className="text-lime-400 mr-2">10% </span>
                          compared to last month
                        </div>
                      </div>
                      <div>
                        <AreaChart width={100} height={50} data={moneyInData}>
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#84cc16"
                            fill="#bef264"
                            strokeWidth={2}
                          />
                        </AreaChart>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="flex flex-col">
                  <CardHeader className="flex flex-row items-center relative">
                    <CardTitle>
                      <span>Money Out</span>
                    </CardTitle>
                    <Button
                      className="absolute right-6"
                      variant="ghost"
                      size="icon"
                    >
                      <EllipsisVertical className="h-5 w-5" />
                    </Button>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex items-end justify-between mt-auto">
                      <div className="flex flex-col">
                        <div className="text-3xl font-semibold">$2,420</div>
                        <div className="flex items-center">
                          <ArrowDown
                            color="#ef4444"
                            className="inline w-4 h-4 mr-2"
                          />
                          <span className="text-red-500 mr-2">10% </span>
                          compared to last month
                        </div>
                      </div>
                      <div>
                        <AreaChart width={100} height={50} data={moneyOutData}>
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#ef4444"
                            fill="#f87171"
                            strokeWidth={2}
                          />
                        </AreaChart>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center relative">
                    <CardTitle>
                      <span>Invoices</span>
                    </CardTitle>
                    <Button
                      className="absolute right-6"
                      variant="ghost"
                      size="icon"
                    >
                      <EllipsisVertical className="h-5 w-5" />
                    </Button>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between">
                    <div className="h-full flex flex-col gap-3">
                      <div>
                        <div className="flex items-center">
                          <span className="inline-block rounded-full w-2 h-2 bg-lime-500 mr-2"></span>
                          <span className="text-lg font-semibold">
                            $ 23,029,77
                          </span>
                        </div>
                        <div className="text-slate-400 text-sm">
                          Paid invoices (22%)
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <span className="inline-block rounded-full w-2 h-2 bg-red-500 mr-2"></span>
                          <span className="text-lg font-semibold">
                            $ 81,651,00
                          </span>
                        </div>
                        <div className="text-slate-400 text-sm">
                          Open invoices (78%)
                        </div>
                      </div>
                    </div>
                    <div className="h-full">
                      <PieChart width={150} height={150}>
                        <Pie
                          data={invoicesData}
                          dataKey="value"
                          cx="50%"
                          cy="50%"
                          innerRadius="80%"
                          outerRadius="100%"
                          stroke="none"
                        >
                          {invoicesData.map((_, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={invoicesColors[index]}
                            ></Cell>
                          ))}
                        </Pie>
                      </PieChart>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Card>
                  <CardHeader className="flex flex-row items-center relative">
                    <CardTitle>Properties Occupancy</CardTitle>
                    <Button
                      className="absolute right-6"
                      variant="ghost"
                      size="icon"
                    >
                      <EllipsisVertical className="h-5 w-5" />
                    </Button>
                  </CardHeader>
                  <CardContent className="flex gap-8">
                    <div>
                      <PieChart width={250} height={250}>
                        <Pie
                          data={occupancyData}
                          dataKey="value"
                          cx="50%"
                          cy="50%"
                          innerRadius="80%"
                          outerRadius="100%"
                          stroke="none"
                        >
                          {occupancyData.map((_, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={occupancyColors[index]}
                            ></Cell>
                          ))}
                        </Pie>
                      </PieChart>
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-6">
                      <div className="flex gap-6">
                        <div className="border-l-4 border-[#fb923c] pl-3">
                          <div className="text-lg font-bold">12</div>
                          <div className="text-slate-400">Occupied(15%)</div>
                        </div>
                        <div className="border-l-4 border-[#fef08a] pl-3">
                          <div className="text-lg font-bold">12</div>
                          <div className="text-slate-400">Occupied(15%)</div>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="border-l-4 border-[#a855f7] pl-3">
                          <div className="text-lg font-bold">12</div>
                          <div className="text-slate-400">Occupied(15%)</div>
                        </div>
                        <div className="border-l-4 border-[#86efac] pl-3">
                          <div className="text-lg font-bold">12</div>
                          <div className="text-slate-400">Occupied(15%)</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center relative">
                    <CardTitle>Revenue Overview</CardTitle>
                    <Button
                      className="absolute right-6"
                      variant="ghost"
                      size="icon"
                    >
                      <EllipsisVertical className="h-5 w-5" />
                    </Button>
                  </CardHeader>
                  <CardContent></CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Dashboard;
