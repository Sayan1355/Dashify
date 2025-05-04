"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

// Mock data for charts
const generateMockData = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const revenue = months.map(() => Math.floor(Math.random() * 50000) + 10000)
  const users = months.map(() => Math.floor(Math.random() * 1000) + 100)
  const conversion = months.map(() => (Math.random() * 10).toFixed(1))

  return { months, revenue, users, conversion }
}

// Line Chart Component
export function LineChart() {
  const { theme } = useTheme()
  const [chartData, setChartData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const data = generateMockData()
    setChartData(data)
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="flex h-[300px] items-center justify-center">Loading chart...</div>
  }

  return (
    <div className="h-[300px] w-full">
      <div className="flex h-full w-full flex-col">
        <div className="flex h-full w-full items-end">
          {chartData.months.map((month: string, i: number) => (
            <div key={i} className="relative flex h-full flex-1 flex-col justify-end">
              <div className="w-full bg-primary" style={{ height: `${(chartData.users[i] / 1000) * 100}%` }}></div>
              <span className="mt-2 text-center text-xs">{month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Bar Chart Component
export function BarChart() {
  const { theme } = useTheme()
  const [chartData, setChartData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const channels = ["Direct", "Social", "Email", "Organic", "Referral"]
    const rates = channels.map(() => (Math.random() * 10).toFixed(1))

    setChartData({ channels, rates })
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="flex h-[300px] items-center justify-center">Loading chart...</div>
  }

  return (
    <div className="h-[300px] w-full">
      <div className="flex h-full w-full flex-col">
        <div className="flex h-full w-full items-end">
          {chartData.channels.map((channel: string, i: number) => (
            <div key={i} className="relative flex h-full flex-1 flex-col justify-end">
              <div className="w-full bg-primary" style={{ height: `${chartData.rates[i] * 10}%` }}></div>
              <span className="mt-2 text-center text-xs">{channel}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Pie Chart Component
export function PieChart() {
  const { theme } = useTheme()
  const [chartData, setChartData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const sources = ["Organic", "Direct", "Referral", "Social", "Email"]
    const values = [30, 25, 20, 15, 10]

    setChartData({ sources, values })
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="flex h-[300px] items-center justify-center">Loading chart...</div>
  }

  // Simple representation of a pie chart
  return (
    <div className="flex h-[300px] w-full flex-col items-center justify-center">
      <div className="h-40 w-40 rounded-full border-8 border-primary"></div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {chartData.sources.map((source: string, i: number) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-3 w-3 bg-primary"></div>
            <span className="text-xs">
              {source}: {chartData.values[i]}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Donut Chart Component
export function DonutChart() {
  const { theme } = useTheme()
  const [chartData, setChartData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const regions = ["North America", "Europe", "Asia", "South America", "Africa"]
    const values = [40, 25, 20, 10, 5]

    setChartData({ regions, values })
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="flex h-[300px] items-center justify-center">Loading chart...</div>
  }

  // Simple representation of a donut chart
  return (
    <div className="flex h-[300px] w-full flex-col items-center justify-center">
      <div className="relative h-40 w-40">
        <div className="absolute inset-0 rounded-full border-8 border-primary"></div>
        <div className="absolute inset-4 rounded-full bg-background"></div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {chartData.regions.map((region: string, i: number) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-3 w-3 bg-primary"></div>
            <span className="text-xs">
              {region}: {chartData.values[i]}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Area Chart Component
export function AreaChart() {
  const { theme } = useTheme()
  const [chartData, setChartData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const data = generateMockData()
    setChartData(data)
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="flex h-[300px] items-center justify-center">Loading chart...</div>
  }

  return (
    <div className="h-[300px] w-full">
      <div className="flex h-full w-full flex-col">
        <div className="flex h-full w-full items-end">
          {chartData.months.map((month: string, i: number) => (
            <div key={i} className="relative flex h-full flex-1 flex-col justify-end">
              <div className="w-full bg-primary/20" style={{ height: `${(chartData.revenue[i] / 50000) * 100}%` }}>
                <div
                  className="w-full bg-primary"
                  style={{ height: `${Math.min(20, (chartData.revenue[i] / 50000) * 100 * 0.2)}%` }}
                ></div>
              </div>
              <span className="mt-2 text-center text-xs">{month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
