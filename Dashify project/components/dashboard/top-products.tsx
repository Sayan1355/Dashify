"use client"

import { useEffect, useState } from "react"

interface Product {
  id: number
  name: string
  sales: number
  growth: number
}

export function TopProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockProducts: Product[] = [
        {
          id: 1,
          name: "Premium Dashboard",
          sales: 1234,
          growth: 12.5,
        },
        {
          id: 2,
          name: "Analytics Suite",
          sales: 987,
          growth: 8.2,
        },
        {
          id: 3,
          name: "Data Visualization",
          sales: 756,
          growth: 5.7,
        },
        {
          id: 4,
          name: "API Access",
          sales: 543,
          growth: -2.3,
        },
        {
          id: 5,
          name: "Custom Reports",
          sales: 432,
          growth: 15.8,
        },
      ]

      setProducts(mockProducts)
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
    <div className="space-y-4">
      {products.map((product) => (
        <div key={product.id} className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{product.name}</p>
            <p className="text-sm text-muted-foreground">{product.sales} sales</p>
          </div>
          <div className={`text-sm font-medium ${product.growth >= 0 ? "text-green-500" : "text-red-500"}`}>
            {product.growth >= 0 ? "+" : ""}
            {product.growth}%
          </div>
        </div>
      ))}
    </div>
  )
}
