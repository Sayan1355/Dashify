"use client"

import { useEffect, useState } from "react"

export function Overview() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      const revenue = months.map(() => Math.floor(Math.random() * 50000) + 10000)
      const expenses = months.map(() => Math.floor(Math.random() * 30000) + 5000)

      setData({ months, revenue, expenses })
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="flex h-[300px] items-center justify-center">
        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="h-[300px] w-full">
      <div className="flex h-full w-full flex-col">
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary"></div>
            <span className="text-sm">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-muted"></div>
            <span className="text-sm">Expenses</span>
          </div>
        </div>
        <div className="flex h-full w-full items-end">
          {data.months.map((month: string, i: number) => (
            <div key={i} className="relative flex h-full flex-1 flex-col justify-end">
              <div className="w-full bg-primary" style={{ height: `${(data.revenue[i] / 50000) * 100}%` }}></div>
              <div className="w-full bg-muted" style={{ height: `${(data.expenses[i] / 50000) * 100}%` }}></div>
              <span className="mt-2 text-center text-xs">{month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
