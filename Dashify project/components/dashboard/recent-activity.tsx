"use client"

import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Activity {
  id: number
  user: {
    name: string
    avatar: string
    initials: string
  }
  action: string
  timestamp: string
}

export function RecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockActivities: Activity[] = [
        {
          id: 1,
          user: {
            name: "John Doe",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "JD",
          },
          action: "Purchased Premium Plan",
          timestamp: "2 minutes ago",
        },
        {
          id: 2,
          user: {
            name: "Sarah Johnson",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "SJ",
          },
          action: "Updated profile information",
          timestamp: "15 minutes ago",
        },
        {
          id: 3,
          user: {
            name: "Michael Chen",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "MC",
          },
          action: "Invited 3 team members",
          timestamp: "1 hour ago",
        },
        {
          id: 4,
          user: {
            name: "Emily Rodriguez",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "ER",
          },
          action: "Created a new dashboard",
          timestamp: "3 hours ago",
        },
        {
          id: 5,
          user: {
            name: "David Kim",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "DK",
          },
          action: "Generated monthly report",
          timestamp: "5 hours ago",
        },
      ]

      setActivities(mockActivities)
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
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center gap-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.user.name}</p>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
          </div>
          <div className="text-xs text-muted-foreground">{activity.timestamp}</div>
        </div>
      ))}
    </div>
  )
}
