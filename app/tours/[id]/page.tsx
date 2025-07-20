"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function TourDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedDate, setSelectedDate] = useState("")
  const [guests, setGuests] = useState(2)

  const tourImages = [
    "/placeholder.svg?height=400&width=600&text=Main+Tour+Image",
    "/placeholder.svg?height=200&width=150&text=Image+1",
    "/placeholder.svg?height=200&width=150&text=Image+2",
    "/placeholder.svg?height=200&width=150&text=Image+3",
    "/placeholder.svg?height=200&width=150&text=Image+4",
    "/placeholder.svg?height=200&width=150&text=Image+5",
  ]

  const relatedTours = [
    {
      title: "Alaska: Westernmost to Easternmost Bus Tour & Thames",
      location: "Denali National Park",
      duration: "3 hours",
      rating: 4.8,
      reviews: 127,
      price: 55.0,
      image: "/placeholder.svg?height=200&width=300&text=Related+Tour+1",
    },
    {
      title: "Alaska: Vintage Double Decker Bus Tour & Thames",
      location: "Anchorage",
      duration: "2.5 hours",
      rating: 4.9,
      reviews: 89,
      price: 45.0,
      image: "/placeholder.svg?height=200&width=300&text=Related+Tour+2",
    },
    {
      title: "Best of Alaska's Scenic Tour with Adventure Tour",
      location: "Fairbanks",
      duration: "4 hours",
      rating: 4.7,
      reviews: 156,
      price: 75.0,
      image: "/placeholder.svg?height=200&width=300&text=Related+Tour+3",
    },
    {
      title: "Best with Adventure Tour & Thames River Cruise",
      location: "Juneau",
      duration: "5 hours",
      rating: 4.6,
      reviews: 203,
      price: 95.0,
      image: "/placeholder.svg?height=200&width=300&text=Related+Tour+4",
    },
  ]

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      title: "Great Tour, Really Well Organized",
      content:
        "This was one very well organized tour. I had a great time and learned a lot about the history and culture. The guide was knowledgeable and friendly. Would definitely recommend this tour to anyone visiting the area.",
      avatar: "/placeholder.svg?height=40&width=40&text=SJ",
    },
    {
      name: "Mike Wilson",
      rating: 4,
      date: "1 month ago",
      title: "Information but Disappointing but Really Changing Of The Guests",
      content:
        "The tour was informative and the guide was great, but there were some disappointing aspects. The group was quite large which made it difficult to hear at times. Overall still a good experience though.",
      avatar: "/placeholder.svg?height=40&width=40&text=MW",
    },
    {
      name: "Lisa Martinez",
      rating: 5,
      date: "2 months ago",
      title: "Love This Trip Of Visit",
      content:
        "Absolutely loved this trip! The scenery was breathtaking and our guide was fantastic. Everything was well organized and we got to see so much in just a few hours. Highly recommend!",
      avatar: "/placeholder.svg?height=40&width=40&text=LM",
    },
    {
      name: "David Chen",
      rating: 4,
      date: "2 months ago",
      title: "Amazing Experience",
      content:
        "Had an amazing experience on this tour. The guide was very knowledgeable and the locations we visited were stunning. Only minor complaint was that we felt a bit rushed at some stops.",
      avatar: "/placeholder.svg?height=40&width=40&text=DC",
    },
    {
      name: "Emma Davis",
      rating: 5,
      date: "3 months ago",
      title: "Terrific",
      content:
        "This tour exceeded all my expectations. The guide was entertaining and informative, and we got to see some incredible sights. The small group size made it feel very personal. Will definitely book again!",
      avatar: "/placeholder.svg?height=40&width=40&text=ED",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Page content */}

      <Footer />
    </div>
  )
}
