"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function DestinationsPage() {
  const [sortBy, setSortBy] = useState("Popularity")
  const [selectedFilters, setSelectedFilters] = useState({
    availability: [],
    price: [0, 100],
    themes: [],
    duration: [],
    destination: [],
  })

  const tours = [
    {
      id: 1,
      title: "Westminster to Greenwich River Thames",
      location: "London",
      duration: "2 hours",
      rating: 4.8,
      reviews: 127,
      price: 31.0,
      originalPrice: 35.0,
      image: "/placeholder.svg?height=200&width=300&text=London+Bridge",
      category: "Recommended",
      availability: "Available",
    },
    {
      id: 2,
      title: "Westminster to Greenwich River Thames",
      location: "London",
      duration: "2.5 hours",
      rating: 4.9,
      reviews: 89,
      price: 31.0,
      originalPrice: 35.0,
      image: "/placeholder.svg?height=200&width=300&text=Thames+View",
      category: "Recommended",
      availability: "Available",
    },
    {
      id: 3,
      title: "Westminster to Greenwich River Thames",
      location: "London",
      duration: "3 hours",
      rating: 4.7,
      reviews: 156,
      price: 31.0,
      originalPrice: 35.0,
      image: "/placeholder.svg?height=200&width=300&text=Westminster",
      category: "Recommended",
      availability: "Available",
    },
    {
      id: 4,
      title: "Westminster to Greenwich River Thames",
      location: "London",
      duration: "2 hours",
      rating: 4.6,
      reviews: 203,
      price: 31.0,
      originalPrice: 35.0,
      image: "/placeholder.svg?height=200&width=300&text=Greenwich",
      category: "Recommended",
      availability: "Available",
    },
    {
      id: 5,
      title: "Westminster to Greenwich River Thames",
      location: "London",
      duration: "2.5 hours",
      rating: 4.8,
      reviews: 178,
      price: 31.0,
      originalPrice: 35.0,
      image: "/placeholder.svg?height=200&width=300&text=River+Cruise",
      category: "Recommended",
      availability: "Available",
    },
    {
      id: 6,
      title: "Westminster to Greenwich River Thames",
      location: "London",
      duration: "3 hours",
      rating: 4.5,
      reviews: 145,
      price: 31.0,
      originalPrice: 35.0,
      image: "/placeholder.svg?height=200&width=300&text=Tower+Bridge",
      category: "Recommended",
      availability: "Available",
    },
    {
      id: 7,
      title: "Westminster to Greenwich River Thames",
      location: "London",
      duration: "2 hours",
      rating: 4.7,
      reviews: 167,
      price: 31.0,
      originalPrice: 35.0,
      image: "/placeholder.svg?height=200&width=300&text=London+Eye",
      category: "Recommended",
      availability: "Available",
    },
    {
      id: 8,
      title: "Westminster to Greenwich River Thames",
      location: "London",
      duration: "2.5 hours",
      rating: 4.9,
      reviews: 134,
      price: 31.0,
      originalPrice: 35.0,
      image: "/placeholder.svg?height=200&width=300&text=Big+Ben",
      category: "Recommended",
      availability: "Available",
    },
  ]

  const specialTours = [
    {
      title: "Alaska: Westernmost to Easternmost Bus Tour & Thames",
      location: "Denali National Park",
      duration: "3 hours",
      rating: 4.8,
      reviews: 127,
      price: 55.0,
      image: "/placeholder.svg?height=200&width=300&text=Mountain+Peak",
      category: "Most Popular",
    },
    {
      title: "Alaska: Vintage Double Decker Bus Tour & Thames",
      location: "Anchorage Downtown",
      duration: "2.5 hours",
      rating: 4.9,
      reviews: 89,
      price: 45.0,
      image: "/placeholder.svg?height=200&width=300&text=Aurora+Borealis",
      category: "Most Popular",
    },
    {
      title: "Best of Alaska's Scenic Tour with Adventure Tour",
      location: "Fairbanks Region",
      duration: "4 hours",
      rating: 4.7,
      reviews: 156,
      price: 75.0,
      image: "/placeholder.svg?height=200&width=300&text=Scenic+Lake",
      category: "Most Popular",
    },
    {
      title: "Adventure Tour & Thames River Cruise",
      location: "Juneau Wilderness",
      duration: "5 hours",
      rating: 4.6,
      reviews: 203,
      price: 95.0,
      image: "/placeholder.svg?height=200&width=300&text=Mountain+Forest",
      category: "Most Popular",
    },
  ]

  const galleryImages = [
    "/placeholder.svg?height=300&width=400&text=Forest+Path",
    "/placeholder.svg?height=300&width=400&text=Mountain+Lake",
    "/placeholder.svg?height=300&width=400&text=Misty+Mountains",
    "/placeholder.svg?height=300&width=400&text=Green+Hills",
    "/placeholder.svg?height=300&width=400&text=Waterfall",
    "/placeholder.svg?height=300&width=400&text=Red+Bridge",
    "/placeholder.svg?height=300&width=400&text=Sunset+Silhouette",
    "/placeholder.svg?height=300&width=400&text=Purple+Sky",
  ]

  const stories = [
    {
      title: "7 Signs and Symptoms of Online Slot Addiction",
      category: "Health",
      image: "/placeholder.svg?height=200&width=300&text=Gaming+Setup",
      date: "March 15, 2024",
    },
    {
      title: "How to Fix Your Sleep Schedule - Easy Ways",
      category: "Lifestyle",
      image: "/placeholder.svg?height=200&width=300&text=Sleep+Setup",
      date: "March 12, 2024",
    },
    {
      title: "10 Proven Health Benefits of Cinnamon",
      category: "Health",
      image: "/placeholder.svg?height=200&width=300&text=Spices",
      date: "March 10, 2024",
    },
    {
      title: "11 Health Benefits of Turmeric and Curcumin",
      category: "Health",
      image: "/placeholder.svg?height=200&width=300&text=Turmeric",
      date: "March 8, 2024",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Things To Do In London</h2>

                  {/* Sort By */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Sort By</span>
                      <span className="text-sm text-gray-600">Popularity</span>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Availability</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Today</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Tomorrow</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">This Weekend</span>
                      </label>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Price</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>$0</span>
                        <span>$500+</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full w-1/3"></div>
                      </div>
                    </div>
                    <Button className="w-full mt-3 bg-teal-500 hover:bg-teal-600">Show Availability</Button>
                  </div>

                  {/* Themes */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Themes</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Good for small groups</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Sightseeing</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Family-friendly</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Hidden gems</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Museums and galleries</span>
                      </label>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Duration</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">0-1 hours</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">1-4 hours</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">4+ hours</span>
                      </label>
                    </div>
                  </div>

                  {/* Destination */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Destination</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Borough Market</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Tower of London</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Westminster Abbey</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">London Eye</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Big Ben</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Buckingham Palace</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Tower Bridge</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Camden Market</span>
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Tour Listings */}
              <div className="space-y-4">
                {tours.map((tour) => (
                  <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex">
                      <div className="w-48 h-32 flex-shrink-0">
                        <img
                          src={tour.image || "/placeholder.svg"}
                          alt={tour.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="flex-1 p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <Badge className="bg-teal-500 text-white mb-2">{tour.category}</Badge>
                            <h3 className="font-semibold text-gray-900 mb-2">{tour.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                                <span>{tour.rating}</span>
                                <span className="ml-1">({tour.reviews} reviews)</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>{tour.duration}</span>
                              </div>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>Family Friendly</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">${tour.price}</div>
                            <div className="text-sm text-gray-500 line-through">${tour.originalPrice}</div>
                            <div className="text-sm text-green-600 font-medium mt-1">{tour.availability}</div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Outside The City Specials */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Outside The City Specials</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0 bg-transparent">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0 bg-transparent">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Most Popular */}
                <div className="mb-8">
                  <Badge className="bg-teal-500 text-white mb-4">Most Popular</Badge>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {specialTours.map((tour, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                          src={tour.image || "/placeholder.svg"}
                          alt={tour.title}
                          className="w-full h-40 object-cover"
                        />
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{tour.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{tour.location}</p>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm ml-1">{tour.rating}</span>
                            </div>
                            <span className="text-sm text-gray-500">({tour.reviews})</span>
                            <span className="text-sm text-gray-500">• {tour.duration}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-gray-900">${tour.price}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Repeat similar sections for other categories */}
                <div className="mb-8">
                  <Badge className="bg-blue-500 text-white mb-4">Adventure Tours</Badge>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {specialTours.map((tour, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                          src={tour.image || "/placeholder.svg"}
                          alt={tour.title}
                          className="w-full h-40 object-cover"
                        />
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{tour.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{tour.location}</p>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm ml-1">{tour.rating}</span>
                            </div>
                            <span className="text-sm text-gray-500">({tour.reviews})</span>
                            <span className="text-sm text-gray-500">• {tour.duration}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-gray-900">${tour.price}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <Badge className="bg-red-500 text-white mb-4">Cultural Tours</Badge>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {specialTours.map((tour, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                          src={tour.image || "/placeholder.svg"}
                          alt={tour.title}
                          className="w-full h-40 object-cover"
                        />
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{tour.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{tour.location}</p>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm ml-1">{tour.rating}</span>
                            </div>
                            <span className="text-sm text-gray-500">({tour.reviews})</span>
                            <span className="text-sm text-gray-500">• {tour.duration}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-gray-900">${tour.price}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* From The Gallery */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">From The Gallery</h2>
                  <Button variant="outline" className="border-gray-300 hover:border-teal-500 bg-transparent">
                    View All Photos
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="relative group cursor-pointer">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition-colors"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Latest Stories From The City */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Latest Stories From The City</h2>
                  <Button variant="outline" className="border-gray-300 hover:border-teal-500 bg-transparent">
                    View All Stories
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stories.map((story, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <img
                        src={story.image || "/placeholder.svg"}
                        alt={story.title}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-4">
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {story.category}
                        </Badge>
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{story.title}</h3>
                        <p className="text-sm text-gray-500">{story.date}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
