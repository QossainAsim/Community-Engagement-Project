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

  const scope2Data = [
    { month: "Jan", gridEmission: 49200, savedEmissions: 36058.68, netEmissions: 13141.32 },
    { month: "Feb", gridEmission: 12300, savedEmissions: 28553.22, netEmissions: -16253.22 },
    { month: "Mar", gridEmission: 2460, savedEmissions: 31980, netEmissions: -29340 },
    { month: "Apr", gridEmission: 46740, savedEmissions: 68325.885, netEmissions: -21585.885 },
    { month: "May", gridEmission: 71340, savedEmissions: 63919.41, netEmissions: 7420.59 },
    { month: "Jun", gridEmission: 91020, savedEmissions: 56079.39, netEmissions: 34940.61 },
  ]

  const scope1Data = [
    { month: "Jan", emissionsinKg: 11095.2 },
    { month: "Feb", emissionsinKg: 18191.84 },
    { month: "Mar", emissionsinKg: 10588.68 },
    { month: "Apr", emissionsinKg: 8956.56 },
    { month: "May", emissionsinKg: 7589.76 },
    { month: "Jun", emissionsinKg: 11647.28 },
  ]

  const scope3Data = [
    {
      month: "May",
      bottles: 80.1,
      glass: 50.6,
      foodWaste: 2067.3,
      plastic: 13.2,
      cartons: 106,
      emissionsBottles: 200.25,
      emissionsGlass: 72.7122,
      emissionsFoodWaste: 2697.82,
      emissionsPlastic: 38.016,
      emissionsCartons: 99.64,
    },
    {
      month: "Jun",
      bottles: 119.8,
      glass: 177.85,
      foodWaste: 1223,
      plastic: 69,
      cartons: 276.6,
      emissionsBottles: 299.5,
      emissionsGlass: 255.57,
      emissionsFoodWaste: 1596.015,
      emissionsPlastic: 198.72,
      emissionsCartons: 260.004,
    }
  ]

  const totalScope2NetEmissions = scope2Data.reduce((sum, item) => sum + item.gridEmission, 0)
  const totalScope1Emissions = scope1Data.reduce((sum, item) => sum + item.emissionsinKg, 0)
  const totalScope3Emissions = 5718.25

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
                  BEP Project
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
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10">
                          <div className="text-red-400 text-sm mb-2">Scope 1</div>
                          <div className="text-2xl font-bold text-white">{(totalScope1Emissions / 1000).toFixed(1)}t</div>
                          <div className="flex items-center gap-1 mt-2">
                            <div className="w-full bg-white/10 rounded-full h-2">
                              <div className="bg-red-500 h-2 rounded-full" style={{ width: '68%' }} />
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10">
                          <div className="text-green-400 text-sm mb-2">Scope 2</div>
                          <div className="text-2xl font-bold text-white">{(totalScope2NetEmissions / 1000).toFixed(1)}t</div>
                          <div className="flex items-center gap-1 mt-2">
                            <div className="w-full bg-white/10 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }} />
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10">
                          <div className="text-orange-400 text-sm mb-2">Scope 3</div>
                          <div className="text-2xl font-bold text-white">{(totalScope3Emissions / 1000).toFixed(1)}t</div>
                          <div className="flex items-center gap-1 mt-2">
                            <div className="w-full bg-white/10 rounded-full h-2">
                              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '32%' }} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 mt-4">
                        <div className="text-gray-300 text-sm mb-3">Monthly Trend</div>
                        <div className="flex items-end gap-2 h-24">
                          {[40, 65, 45, 70, 55, 80].map((height, i) => (
                            <div key={i} className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t" style={{ height: `${height}%` }} />
                          ))}
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
              <span className="gradient-text">Emissions Overview</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tracking across all emission scopes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-hover flex flex-col items-center justify-center bg-gradient-to-br from-white to-red-50 rounded-3xl shadow-xl p-8 border border-red-100">
              <div className="mb-6">
                <ResponsiveContainer width={220} height={220}>
                  <RadialBarChart
                    innerRadius="70%"
                    outerRadius="100%"
                    data={[{ value: totalScope1Emissions, fill: "#dc2626" }]}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <PolarAngleAxis type="number" domain={[0, 100000]} tick={false} />
                    <RadialBar background dataKey="value" cornerRadius={50} />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                SCOPE 1
              </div>
              <h3 className="text-3xl font-black text-red-600 mb-2">
                {totalScope1Emissions.toLocaleString()} kg
              </h3>
              <p className="text-gray-600 text-center font-medium">CO₂ from Diesel Generators</p>
              <p className="text-sm text-gray-500 mt-2">Jan-Jun 2025</p>
            </div>

            <div className="card-hover flex flex-col items-center justify-center bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-xl p-8 border border-green-100">
              <div className="mb-6">
                <ResponsiveContainer width={220} height={220}>
                  <RadialBarChart
                    innerRadius="70%"
                    outerRadius="100%"
                    data={[{ value: Math.abs(totalScope2NetEmissions), fill: "#16a34a" }]}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <PolarAngleAxis type="number" domain={[0, 200000]} tick={false} />
                    <RadialBar background dataKey="value" cornerRadius={50} />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                SCOPE 2
              </div>
              <h3 className="text-3xl font-black text-green-600 mb-2">
                {Math.abs(totalScope2NetEmissions).toLocaleString()} kg
              </h3>
              <p className="text-gray-600 text-center font-medium">Net Electricity Emissions</p>
              <p className="text-sm text-gray-500 mt-2">Grid + Solar Offset</p>
            </div>

            <div className="card-hover flex flex-col items-center justify-center bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-xl p-8 border border-orange-100">
              <div className="mb-6">
                <ResponsiveContainer width={220} height={220}>
                  <RadialBarChart
                    innerRadius="70%"
                    outerRadius="100%"
                    data={[{ value: totalScope3Emissions, fill: "#ea580c" }]}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <PolarAngleAxis type="number" domain={[0, 10000]} tick={false} />
                    <RadialBar background dataKey="value" cornerRadius={50} />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                SCOPE 3
              </div>
              <h3 className="text-3xl font-black text-orange-600 mb-2">
                {totalScope3Emissions.toLocaleString()} kg
              </h3>
              <p className="text-gray-600 text-center font-medium">CO₂e from Waste</p>
              <p className="text-sm text-gray-500 mt-2">Indirect Emissions</p>
            </div>
          </div>
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
            <p className="text-lg text-gray-600 ml-15">Monthly diesel generator usage and CO₂ emissions trend</p>
          </div>

          <Card className="border-2 border-red-200 shadow-2xl rounded-3xl overflow-hidden card-hover">
            <CardHeader className="bg-gradient-to-r from-red-50 to-white">
              <CardTitle className="text-2xl">Monthly Diesel Generator Emissions</CardTitle>
              <CardDescription className="text-base">CO₂ emissions from diesel generators (kg)</CardDescription>
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
                    dataKey="emissionsinKg"
                    stroke="#dc2626"
                    strokeWidth={4}
                    dot={{ fill: "#dc2626", strokeWidth: 2, r: 8 }}
                    name="CO₂ Emissions (kg)"
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
            <p className="text-lg text-gray-600 ml-15">Grid emissions vs solar offset showing net carbon impact</p>
          </div>

          <Card className="border-2 border-green-200 shadow-2xl rounded-3xl overflow-hidden card-hover">
            <CardHeader className="bg-gradient-to-r from-green-50 to-white">
              <CardTitle className="text-2xl">Grid Emissions vs Solar Offset</CardTitle>
              <CardDescription className="text-base">Emissions from grid and savings from solar</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={scope2Data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} interval={0} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="gridEmission" fill="#DC2626" name="Grid Emissions" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="savedEmissions" fill="#16A34A" name="Saved Emissions" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="netEmissions" fill="#333333" name="Net Emissions" radius={[8, 8, 0, 0]} />
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
            <p className="text-lg text-gray-600 ml-15">Emissions from waste production and management</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card className="border-2 border-orange-200 shadow-xl rounded-3xl overflow-hidden card-hover">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-white">
                <CardTitle className="text-xl">Waste Production</CardTitle>
                <CardDescription>Monthly waste by category (kg)</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={scope3Data} layout="vertical">
                    <XAxis type="number" />
                    <YAxis dataKey="month" type="category" width={100} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="bottles" fill="#1f77b4" name="Bottles (kg)" radius={[0, 4, 4, 0]} />
                    <Bar dataKey="glass" fill="#ff7f0e" name="Glass (kg)" radius={[0, 4, 4, 0]} />
                    <Bar dataKey="foodWaste" fill="#2ca02c" name="Food Waste (kg)" radius={[0, 4, 4, 0]} />
                    <Bar dataKey="plastic" fill="#d62728" name="Plastic (kg)" radius={[0, 4, 4, 0]} />
                    <Bar dataKey="cartons" fill="#9467bd" name="Cartons (kg)" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 shadow-xl rounded-3xl overflow-hidden card-hover">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-white">
                <CardTitle className="text-xl">Emissions by Waste</CardTitle>
                <CardDescription>Monthly emissions by category (KgCO₂e)</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={scope3Data} layout="vertical">
                    <XAxis type="number" />
                    <YAxis dataKey="month" type="category" width={100} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="emissionsBottles" fill="#1f77b4" name="Bottles (KgCO₂e)" radius={[0, 4, 4, 0]} />
                    <Bar dataKey="emissionsGlass" fill="#ff7f0e" name="Glass (KgCO₂e)" radius={[0, 4, 4, 0]} />
                    <Bar dataKey="emissionsFoodWaste" fill="#2ca02c" name="Food Waste (KgCO₂e)" radius={[0, 4, 4, 0]} />
                    <Bar dataKey="emissionsPlastic" fill="#d62728" name="Plastic (KgCO₂e)" radius={[0, 4, 4, 0]} />
                    <Bar dataKey="emissionsCartons" fill="#9467bd" name="Cartons (KgCO₂e)" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-orange-200 card-hover shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-white">
                <CardTitle className="text-xl">Total Waste Emissions</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-4xl font-black text-orange-600">
                  {totalScope3Emissions.toFixed(2)} <span className="text-2xl text-gray-600">KgCO₂e</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Over two months</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 card-hover shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-white">
                <CardTitle className="text-xl">Total Waste Generated</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-4xl font-black text-orange-600">
                  {(scope3Data.reduce((sum, m) => sum + m.bottles + m.glass + m.foodWaste + m.plastic + m.cartons, 0)).toFixed(2)} <span className="text-2xl text-gray-600">kg</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Scope 3 Category 5</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">CEP - Carbon Emissions Platform</h3>
          <p className="text-gray-400 mb-4">
            Monitoring and visualizing carbon emissions across Beaconhouse National University
          </p>
          <p className="text-sm text-gray-500">A Community Engagement Project by Qossain and Haisam</p>
          <p className="text-sm text-gray-500 mt-2">Data updated regularly • Scope 1, 2 & 3 emissions tracking</p>
        </div>
      </footer>
    </div>
  )
}