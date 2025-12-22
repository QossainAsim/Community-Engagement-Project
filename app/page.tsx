"use client"

import { Bar, BarChart, Line, LineChart, XAxis, YAxis, Legend, RadialBar, RadialBarChart, Tooltip, PolarAngleAxis, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { Leaf, TrendingDown, Zap, Recycle, ArrowRight } from "lucide-react"

export default function CEPVisualizer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // SUPERIOR COLLEGE DATA
  const superiorScope1Monthly = 1845 // 500L × 3.69 = 1845 kg per month
  const superiorScope2Monthly = 3660 // 4000 kWh × 0.915 = 3660 kg per month
  const superiorScope3WasteMonthly = 1760 // (2000 kg × 0.80) + (200 kg × 0.80) = 1760 kg per month
  const superiorScope3CommutingMonthly = 22140 // 6000L × 3.69 = 22,140 kg per month

  // ASPIRE COLLEGE DATA
  const aspireScope1Monthly = 1476 // 400L × 3.69 = 1476 kg per month
  const aspireScope2Monthly = 4575 // 5000 kWh × 0.915 = 4575 kg per month
  const aspireScope3WasteMonthly = 2280 // (2600 kg × 0.80) + (250 kg × 0.80) = 2280 kg per month
  const aspireScope3CommutingMonthly = 22140 // 6000L × 3.69 = 22,140 kg per month

  // Monthly breakdown for Scope 1 - Both Colleges
  const scope1Data = [
    { month: "Jan", Superior: superiorScope1Monthly, Aspire: aspireScope1Monthly },
    { month: "Feb", Superior: superiorScope1Monthly, Aspire: aspireScope1Monthly },
    { month: "Mar", Superior: superiorScope1Monthly, Aspire: aspireScope1Monthly },
    { month: "Apr", Superior: superiorScope1Monthly, Aspire: aspireScope1Monthly },
    { month: "May", Superior: superiorScope1Monthly, Aspire: aspireScope1Monthly },
    { month: "Jun", Superior: superiorScope1Monthly, Aspire: aspireScope1Monthly },
    { month: "Jul", Superior: superiorScope1Monthly, Aspire: aspireScope1Monthly },
    { month: "Aug", Superior: superiorScope1Monthly, Aspire: aspireScope1Monthly },
    { month: "Sep", Superior: superiorScope1Monthly, Aspire: aspireScope1Monthly },
    { month: "Oct", Superior: superiorScope1Monthly, Aspire: aspireScope1Monthly },
    { month: "Nov", Superior: superiorScope1Monthly, Aspire: aspireScope1Monthly },
    { month: "Dec", Superior: superiorScope1Monthly, Aspire: aspireScope1Monthly },
  ]

  // Monthly breakdown for Scope 2 - Both Colleges
  const scope2Data = [
    { month: "Jan", Superior: superiorScope2Monthly, Aspire: aspireScope2Monthly },
    { month: "Feb", Superior: superiorScope2Monthly, Aspire: aspireScope2Monthly },
    { month: "Mar", Superior: superiorScope2Monthly, Aspire: aspireScope2Monthly },
    { month: "Apr", Superior: superiorScope2Monthly, Aspire: aspireScope2Monthly },
    { month: "May", Superior: superiorScope2Monthly, Aspire: aspireScope2Monthly },
    { month: "Jun", Superior: superiorScope2Monthly, Aspire: aspireScope2Monthly },
    { month: "Jul", Superior: superiorScope2Monthly, Aspire: aspireScope2Monthly },
    { month: "Aug", Superior: superiorScope2Monthly, Aspire: aspireScope2Monthly },
    { month: "Sep", Superior: superiorScope2Monthly, Aspire: aspireScope2Monthly },
    { month: "Oct", Superior: superiorScope2Monthly, Aspire: aspireScope2Monthly },
    { month: "Nov", Superior: superiorScope2Monthly, Aspire: aspireScope2Monthly },
    { month: "Dec", Superior: superiorScope2Monthly, Aspire: aspireScope2Monthly },
  ]

  // Monthly breakdown for Scope 3 Waste - Both Colleges
  const scope3WasteData = [
    { month: "Jan", Superior: superiorScope3WasteMonthly, Aspire: aspireScope3WasteMonthly },
    { month: "Feb", Superior: superiorScope3WasteMonthly, Aspire: aspireScope3WasteMonthly },
    { month: "Mar", Superior: superiorScope3WasteMonthly, Aspire: aspireScope3WasteMonthly },
    { month: "Apr", Superior: superiorScope3WasteMonthly, Aspire: aspireScope3WasteMonthly },
    { month: "May", Superior: superiorScope3WasteMonthly, Aspire: aspireScope3WasteMonthly },
    { month: "Jun", Superior: superiorScope3WasteMonthly, Aspire: aspireScope3WasteMonthly },
    { month: "Jul", Superior: superiorScope3WasteMonthly, Aspire: aspireScope3WasteMonthly },
    { month: "Aug", Superior: superiorScope3WasteMonthly, Aspire: aspireScope3WasteMonthly },
    { month: "Sep", Superior: superiorScope3WasteMonthly, Aspire: aspireScope3WasteMonthly },
    { month: "Oct", Superior: superiorScope3WasteMonthly, Aspire: aspireScope3WasteMonthly },
    { month: "Nov", Superior: superiorScope3WasteMonthly, Aspire: aspireScope3WasteMonthly },
    { month: "Dec", Superior: superiorScope3WasteMonthly, Aspire: aspireScope3WasteMonthly },
  ]

  // Annual totals
  const superiorTotalScope1 = 22140 // Annual generator diesel
  const superiorTotalScope2 = 43920 // Annual grid electricity
  const superiorTotalScope3 = 286920 // Waste (21,120) + Commuting (265,680)
  const superiorTotal = 353000

  const aspireTotalScope1 = 17712 // Annual generator diesel
  const aspireTotalScope2 = 54900 // Annual grid electricity
  const aspireTotalScope3 = 293040 // Waste (27,360) + Commuting (265,680)
  const aspireTotal = 365652

  // Comparison data
  const comparisonData = [
    {
      category: "Generator Diesel",
      Superior: superiorTotalScope1,
      Aspire: aspireTotalScope1,
    },
    {
      category: "Grid Electricity",
      Superior: superiorTotalScope2,
      Aspire: aspireTotalScope2,
    },
    {
      category: "Commuting",
      Superior: 265680,
      Aspire: 265680,
    },
    {
      category: "Waste",
      Superior: 21120,
      Aspire: 27360,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .float-animation { animation: float 6s ease-in-out infinite; }
        .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .particle {
          position: absolute;
          animation: float 8s ease-in-out infinite;
          pointer-events: none;
          opacity: 0.2;
        }
        .particle:nth-child(2) { animation-delay: 2s; }
        .particle:nth-child(3) { animation-delay: 4s; }
        .particle:nth-child(4) { animation-delay: 6s; }
        .gradient-text {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-gradient {
          background: linear-gradient(270deg, #047857, #10b981, #34d399, #10b981, #047857);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center text-white overflow-hidden animated-gradient">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="particle" style={{ left: '10%', top: '20%' }}>
            <Leaf size={40} />
          </div>
          <div className="particle" style={{ left: '70%', top: '50%' }}>
            <TrendingDown size={40} />
          </div>
          <div className="particle" style={{ left: '30%', top: '75%' }}>
            <Zap size={40} />
          </div>
          <div className="particle" style={{ left: '50%', top: '40%' }}>
            <Recycle size={40} />
          </div>
        </div>

        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={isVisible ? 'fade-in-up' : 'opacity-0'}>
              <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-semibold">Community Engagement Project</span>
              </div>
              
              <h1 className="text-7xl font-black mb-6 tracking-tight leading-tight">
                C<span className="text-emerald-300">E</span>P
              </h1>
              
              <p className="text-2xl text-gray-100 mb-4 leading-relaxed font-light">
                Carbon Emissions Platform
              </p>
              
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                A Community Engagement Project by <span className="font-semibold text-emerald-300">Qossain</span> , <span className="font-semibold text-emerald-300">Haisam</span> and <span className="font-semibold text-emerald-300">Sohaib Laghari</span>
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Badge variant="outline" className="text-white border-white/40 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm">
                  <TrendingDown className="w-4 h-4 mr-2" />
                  Real-time Monitoring
                </Badge>
                <Badge variant="outline" className="text-white border-white/40 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm">
                  <Leaf className="w-4 h-4 mr-2" />
                  Scope 1, 2 & 3 Tracking
                </Badge>
                <Badge variant="outline" className="text-white border-white/40 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm">
                  <Zap className="w-4 h-4 mr-2" />
                  Two College Comparison
                </Badge>
              </div>
              <Link href="/page1">
                <Button className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl transform transition-all hover:scale-105">
                 Open Emissions Calculator
                 <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className={isVisible ? 'fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.2s' }}>
              <div className="relative float-animation">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl blur-2xl opacity-30" />
                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 rounded-2xl p-6 shadow-inner">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-white mb-6">
                        <h3 className="text-xl font-bold">Carbon Dashboard</h3>
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full" />
                          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                          <div className="w-3 h-3 bg-green-500 rounded-full" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 col-span-2">
                          <div className="text-emerald-400 text-sm mb-2">Total Combined</div>
                          <div className="text-3xl font-bold text-white">{((superiorTotal + aspireTotal) / 1000).toFixed(1)}t CO₂</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/5 backdrop-blur rounded-xl p-3 border border-white/10">
                          <div className="text-blue-400 text-xs mb-1">Superior</div>
                          <div className="text-xl font-bold text-white">{(superiorTotal / 1000).toFixed(1)}t</div>
                        </div>
                        
                        <div className="bg-white/5 backdrop-blur rounded-xl p-3 border border-white/10">
                          <div className="text-purple-400 text-xs mb-1">Aspire</div>
                          <div className="text-xl font-bold text-white">{(aspireTotal / 1000).toFixed(1)}t</div>
                        </div>
                      </div>

                      <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 mt-4">
                        <div className="text-gray-300 text-sm mb-3">Emissions Breakdown</div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Scope 1</span>
                            <span className="text-white font-bold">{((superiorTotalScope1 + aspireTotalScope1) / 1000).toFixed(1)}t</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Scope 2</span>
                            <span className="text-white font-bold">{((superiorTotalScope2 + aspireTotalScope2) / 1000).toFixed(1)}t</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Scope 3</span>
                            <span className="text-white font-bold">{((superiorTotalScope3 + aspireTotalScope3) / 1000).toFixed(1)}t</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="gradient-text">Annual Emissions Overview</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comparative analysis of Superior College and Aspire College Pattoki
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Superior College */}
            <div className="card-hover bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-8 border border-blue-100">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-black text-blue-600 mb-2">Superior College</h3>
                <p className="text-gray-600">Pattoki Campus</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-red-100 rounded-xl p-4 mb-2">
                    <div className="text-2xl font-black text-red-600">{(superiorTotalScope1 / 1000).toFixed(1)}t</div>
                  </div>
                  <p className="text-xs text-gray-600">Scope 1</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-xl p-4 mb-2">
                    <div className="text-2xl font-black text-green-600">{(superiorTotalScope2 / 1000).toFixed(1)}t</div>
                  </div>
                  <p className="text-xs text-gray-600">Scope 2</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-xl p-4 mb-2">
                    <div className="text-2xl font-black text-orange-600">{(superiorTotalScope3 / 1000).toFixed(1)}t</div>
                  </div>
                  <p className="text-xs text-gray-600">Scope 3</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-600 rounded-xl text-center">
                <div className="text-3xl font-black text-white">{(superiorTotal / 1000).toFixed(1)}t</div>
                <p className="text-blue-100 text-sm">Total Annual Emissions</p>
              </div>
            </div>

            {/* Aspire College */}
            <div className="card-hover bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-xl p-8 border border-purple-100">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-black text-purple-600 mb-2">Aspire College</h3>
                <p className="text-gray-600">Pattoki Campus</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-red-100 rounded-xl p-4 mb-2">
                    <div className="text-2xl font-black text-red-600">{(aspireTotalScope1 / 1000).toFixed(1)}t</div>
                  </div>
                  <p className="text-xs text-gray-600">Scope 1</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-xl p-4 mb-2">
                    <div className="text-2xl font-black text-green-600">{(aspireTotalScope2 / 1000).toFixed(1)}t</div>
                  </div>
                  <p className="text-xs text-gray-600">Scope 2</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-xl p-4 mb-2">
                    <div className="text-2xl font-black text-orange-600">{(aspireTotalScope3 / 1000).toFixed(1)}t</div>
                  </div>
                  <p className="text-xs text-gray-600">Scope 3</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-purple-600 rounded-xl text-center">
                <div className="text-3xl font-black text-white">{(aspireTotal / 1000).toFixed(1)}t</div>
                <p className="text-purple-100 text-sm">Total Annual Emissions</p>
              </div>
            </div>
          </div>

          {/* Comparison Chart */}
          <Card className="border-2 border-gray-200 shadow-2xl rounded-3xl overflow-hidden card-hover">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
              <CardTitle className="text-2xl">Comparative Emissions Analysis</CardTitle>
              <CardDescription className="text-base">Side-by-side comparison of emission sources</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={comparisonData}>
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Superior" fill="#3b82f6" name="Superior College" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="Aspire" fill="#a855f7" name="Aspire College" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-black">Scope 1: Direct Emissions</h2>
            </div>
            <p className="text-lg text-gray-600 ml-15">Diesel generator usage - Superior: 500 L/month | Aspire: 400 L/month</p>
          </div>

          <Card className="border-2 border-red-200 shadow-2xl rounded-3xl overflow-hidden card-hover">
            <CardHeader className="bg-gradient-to-r from-red-50 to-white">
              <CardTitle className="text-2xl">Monthly Diesel Generator Emissions Comparison</CardTitle>
              <CardDescription className="text-base">CO₂ emissions (kg) - Superior: 22,140 kg/year | Aspire: 17,712 kg/year</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={scope1Data}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Superior"
                    stroke="#3b82f6"
                    strokeWidth={4}
                    dot={{ fill: "#3b82f6", strokeWidth: 2, r: 8 }}
                    name="Superior College (kg)"
                  />
                  <Line
                    type="monotone"
                    dataKey="Aspire"
                    stroke="#a855f7"
                    strokeWidth={4}
                    dot={{ fill: "#a855f7", strokeWidth: 2, r: 8 }}
                    name="Aspire College (kg)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-black">Scope 2: Electricity Emissions</h2>
            </div>
            <p className="text-lg text-gray-600 ml-15">Grid electricity - Superior: 4,000 kWh/month | Aspire: 5,000 kWh/month</p>
          </div>

          <Card className="border-2 border-green-200 shadow-2xl rounded-3xl overflow-hidden card-hover">
            <CardHeader className="bg-gradient-to-r from-green-50 to-white">
              <CardTitle className="text-2xl">Monthly Grid Emissions Comparison</CardTitle>
              <CardDescription className="text-base">Superior: 43,920 kg/year | Aspire: 54,900 kg/year</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={scope2Data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} interval={0} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Superior" fill="#3b82f6" name="Superior College (kg)" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="Aspire" fill="#a855f7" name="Aspire College (kg)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-black">Scope 3: Indirect Emissions</h2>
            </div>
            <p className="text-lg text-gray-600 ml-15">Waste management and commuting emissions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card className="border-2 border-orange-200 shadow-xl rounded-3xl overflow-hidden card-hover">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-white">
                <CardTitle className="text-xl">Monthly Waste Emissions</CardTitle>
                <CardDescription>Comparison of waste-related emissions (kg CO₂e)</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={scope3WasteData.slice(0, 6)}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Superior" fill="#3b82f6" name="Superior" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Aspire" fill="#a855f7" name="Aspire" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 shadow-xl rounded-3xl overflow-hidden card-hover">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-white">
                <CardTitle className="text-xl">Scope 3 Breakdown</CardTitle>
                <CardDescription>Annual emissions by category</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Commuting (Both)</span>
                      <span className="text-sm font-bold">265,680 kg</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-orange-500 h-3 rounded-full" style={{ width: '90%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Waste - Superior</span>
                      <span className="text-sm font-bold">21,120 kg</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full" style={{ width: '7%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Waste - Aspire</span>
                      <span className="text-sm font-bold">27,360 kg</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-purple-500 h-3 rounded-full" style={{ width: '9%' }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-2 border-orange-200 card-hover shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-white">
                <CardTitle className="text-lg">Superior - Scope 3</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-3xl font-black text-blue-600">
                  {(superiorTotalScope3 / 1000).toFixed(1)} <span className="text-xl text-gray-600">t</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Annual total</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 card-hover shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-white">
                <CardTitle className="text-lg">Aspire - Scope 3</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-3xl font-black text-purple-600">
                  {(aspireTotalScope3 / 1000).toFixed(1)} <span className="text-xl text-gray-600">t</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Annual total</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 card-hover shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-white">
                <CardTitle className="text-lg">Commuting Total</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-3xl font-black text-orange-600">
                  265.7 <span className="text-xl text-gray-600">t</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Both colleges</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 card-hover shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-white">
                <CardTitle className="text-lg">Combined Scope 3</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-3xl font-black text-gray-800">
                  {((superiorTotalScope3 + aspireTotalScope3) / 1000).toFixed(1)} <span className="text-xl text-gray-600">t</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Total indirect</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">CEP - Carbon Emissions Platform</h3>
          <p className="text-gray-400 mb-4">
            Monitoring and visualizing carbon emissions - Superior & Aspire College Pattoki
          </p>
          <p className="text-sm text-gray-500">A Community Engagement Project by Qossain, Haisam and Sohaib</p>
          <p className="text-sm text-gray-500 mt-2">Superior: 353,000 kg CO₂ | Aspire: 365,652 kg CO₂ | Combined: 718,652 kg CO₂</p>
        </div>
      </footer>
    </div>
  )
}