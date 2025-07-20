"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, Calendar } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ToursPage() {
  const [selectedDuration, setSelectedDuration] = useState("all")

  const tours = [
    {
      id: 1,
      title: "Grand European Adventure",
      duration: "14 days",
      groupSize: "12-16 people",
      price: "$3,299",
      originalPrice: "$3,899",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.9,
      reviews: 127,
      destinations: ["Paris", "Rome", "Barcelona", "Amsterdam"],
      highlights: ["Expert local guides", "Luxury accommodations", "All meals included"],
      nextDeparture: "2024-05-15",
    },
    {
      id: 2,
      title: "African Safari Experience",
      duration: "7 days",
      groupSize: "8-12 people",
      price: "$2,599",
      originalPrice: "$2,999",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.8,
      reviews: 89,
      destinations: ["Serengeti", "Ngorongoro", "Masai Mara"],
      highlights: ["Big Five viewing", "Luxury safari lodges", "Cultural experiences"],
      nextDeparture: "2024-04-20",
    },
    {
      id: 3,
      title: "Southeast Asia Discovery",
      duration: "10 days",
      groupSize: "10-14 people",
      price: "$1,899",
      originalPrice: "$2,299",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.7,
      reviews: 156,
      destinations: ["Bangkok", "Siem Reap", "Ho Chi Minh City"],
      highlights: ["Ancient temples", "Street food tours", "Cooking classes"],
      nextDeparture: "2024-06-01",
    },
    {
      id: 4,
      title: "Patagonia Wilderness Trek",
      duration: "12 days",
      groupSize: "6-10 people",
      price: "$2,199",
      originalPrice: "$2,599",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.9,
      reviews: 73,
      destinations: ["Torres del Paine", "El Calafate", "Ushuaia"],
      highlights: ["Glacier hiking", "Wildlife spotting", "Mountain lodges"],
      nextDeparture: "2024-03-10",
    },
    {
      id: 5,
      title: "Japan Cultural Journey",
      duration: "8 days",
      groupSize: "8-12 people",
      price: "$2,799",
      originalPrice: "$3,199",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.8,
      reviews: 94,
      destinations: ["Tokyo", "Kyoto", "Osaka", "Mount Fuji"],
      highlights: ["Traditional ryokans", "Tea ceremonies", "Bullet train rides"],
      nextDeparture: "2024-04-05",
    },
    {
      id: 6,
      title: "Iceland Ring Road",
      duration: "6 days",
      groupSize: "10-14 people",
      price: "$1,599",
      originalPrice: "$1,899",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.7,
      reviews: 112,
      destinations: ["Reykjavik", "Golden Circle", "Jokulsarlon"],
      highlights: ["Northern lights", "Hot springs", "Glacier walks"],
      nextDeparture: "2024-02-28",
    },
  ]

  const durations = [
    { id: "all", name: "All Tours" },
    { id: "short", name: "1-7 days" },
    { id: "medium", name: "8-14 days" },
    { id: "long", name: "15+ days" },
  ]

  const getDurationCategory = (duration: string) => {
    const days = Number.parseInt(duration)
    if (days <= 7) return "short"
    if (days <= 14) return "medium"
    return "long"
  }

  const filteredTours = tours.filter((tour) => {
    if (selectedDuration === "all") return true
    return getDurationCategory(tour.duration) === selectedDuration
  })

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Tour Packages</h1>
          <p className="text-xl opacity-90">Carefully crafted experiences with expert guides</p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 flex-wrap justify-center">
            {durations.map((duration) => (
              <Button
                key={duration.id}
                variant={selectedDuration === duration.id ? "default" : "outline"}
                onClick={() => setSelectedDuration(duration.id)}
                className={selectedDuration === duration.id ? "bg-green-600" : ""}
              >
                {duration.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2 relative">
                    <img
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-500 text-white">
                        Save $
                        {Number.parseInt(tour.originalPrice.replace("$", "").replace(",", "")) -
                          Number.parseInt(tour.price.replace("$", "").replace(",", ""))}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="md:w-1/2 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{tour.title}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">
                          {tour.rating} ({tour.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {tour.groupSize}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Destinations:</p>
                      <div className="flex flex-wrap gap-1">
                        {tour.destinations.map((destination, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {destination}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Highlights:</p>
                      <ul className="text-sm text-gray-700">
                        {tour.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center mb-1">
                            <div className="w-1 h-1 bg-green-500 rounded-full mr-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center mb-4">
                      <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">Next departure: {tour.nextDeparture}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-500 line-through">{tour.originalPrice}</span>
                        <span className="text-2xl font-bold text-green-600 ml-2">{tour.price}</span>
                        <span className="text-sm text-gray-600 block">per person</span>
                      </div>
                      <Button className="bg-orange-500 hover:bg-orange-600">Book Now</Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
