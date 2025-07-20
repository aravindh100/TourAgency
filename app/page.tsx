"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Calendar, Users, Star, Play, ChevronLeft, ChevronRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const featuredTours = [
    {
      id: 1,
      title: "Alaska: Westernmost to Easternmost Bus Tour & Thames",
      location: "Denali National Park",
      duration: "3 hours",
      rating: 4.8,
      reviews: 127,
      price: 55.0,
      originalPrice: 65.0,
      image: "/images/mountain-landscape.jpg",
      category: "Adventure",
    },
    {
      id: 2,
      title: "Alaska: Vintage Double Decker Bus Tour & Thames",
      location: "Anchorage",
      duration: "2.5 hours",
      rating: 4.9,
      reviews: 89,
      price: 45.0,
      originalPrice: 55.0,
      image: "/images/northern-lights.jpg",
      category: "Sightseeing",
    },
    {
      id: 3,
      title: "Best of Alaska's Scenic Tour with Adventure Tour",
      location: "Fairbanks",
      duration: "4 hours",
      rating: 4.7,
      reviews: 156,
      price: 75.0,
      originalPrice: 85.0,
      image: "/images/lake-reflection.jpg",
      category: "Nature",
    },
    {
      id: 4,
      title: "Best with Adventure Tour & Thames River Cruise",
      location: "Juneau",
      duration: "5 hours",
      rating: 4.6,
      reviews: 203,
      price: 95.0,
      originalPrice: 110.0,
      image: "/images/forest-trail.jpg",
      category: "Adventure",
    },
  ]

  const destinations = [
    {
      name: "Westernmost to Easternmost",
      location: "Denali National Park",
      duration: "3 hours",
      rating: 4.8,
      reviews: 127,
      price: 55.0,
      image: "/images/mountain-peak.jpg",
    },
    {
      name: "Vintage Double Decker",
      location: "Anchorage Downtown",
      duration: "2.5 hours",
      rating: 4.9,
      reviews: 89,
      price: 45.0,
      image: "/images/aurora-borealis.jpg",
    },
    {
      name: "Best of Alaska's Scenic Tour",
      location: "Fairbanks Region",
      duration: "4 hours",
      rating: 4.7,
      reviews: 156,
      price: 75.0,
      image: "/images/scenic-lake.jpg",
    },
    {
      name: "Adventure Tour & Thames",
      location: "Juneau Wilderness",
      duration: "5 hours",
      rating: 4.6,
      reviews: 203,
      price: 95.0,
      image: "/images/mountain-forest.jpg",
    },
    {
      name: "Westernmost to Easternmost",
      location: "Ketchikan",
      duration: "6 hours",
      rating: 4.5,
      reviews: 178,
      price: 120.0,
      image: "/images/coastal-view.jpg",
    },
  ]

  const galleryImages = [
    "/images/gallery/forest-path.jpg",
    "/images/gallery/mountain-lake.jpg",
    "/images/gallery/misty-mountains.jpg",
    "/images/gallery/green-hills.jpg",
    "/images/gallery/waterfall.jpg",
    "/images/gallery/red-bridge.jpg",
    "/images/gallery/sunset-silhouette.jpg",
    "/images/gallery/purple-sky.jpg",
  ]

  const stories = [
    {
      title: "7 Signs and Symptoms of Online Slot Addiction",
      category: "Health",
      image: "/images/stories/gaming-setup.jpg",
      date: "March 15, 2024",
    },
    {
      title: "How to Fix Your Sleep Schedule - Easy Ways",
      category: "Lifestyle",
      image: "/images/stories/sleep-setup.jpg",
      date: "March 12, 2024",
    },
    {
      title: "10 Proven Health Benefits of Cinnamon",
      category: "Health",
      image: "/images/stories/spices.jpg",
      date: "March 10, 2024",
    },
    {
      title: "11 Health Benefits of Turmeric and Curcumin",
      category: "Health",
      image: "/images/stories/turmeric.jpg",
      date: "March 8, 2024",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 via-cyan-300 to-blue-400">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/90 via-cyan-300/90 to-blue-400/90" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">We Find The Best Tours For You</h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
            Create tours and travel experiences that are unique and fit your style and budget. Our efficient processes
            ensure competitive pricing.
          </p>

          {/* Illustration */}
          <div className="mb-12">
            <div className="relative w-64 h-32 mx-auto">
              <div className="absolute inset-0 flex items-end justify-center">
                <div className="w-16 h-20 bg-orange-400 rounded-t-full mr-2"></div>
                <div className="w-16 h-24 bg-pink-400 rounded-t-full"></div>
              </div>
            </div>
            <p className="text-lg mt-4 opacity-80">Watch Video</p>
          </div>

          {/* Search Bar */}
          <Card className="bg-white p-6 max-w-4xl mx-auto shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input placeholder="Location" className="pl-10 border-gray-200" />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input placeholder="Check In" className="pl-10 border-gray-200" />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input placeholder="Check Out" className="pl-10 border-gray-200" />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input placeholder="Guest" className="pl-10 border-gray-200" />
              </div>
            </div>
            <Button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3">
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </Card>
        </div>
      </section>

      {/* Explore Popular Cities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Popular Cities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Easily explore with our different categories designed for different types of travel, from city breaks to
              adventure tours.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["New York", "London", "Tokyo", "Paris", "Sydney", "Dubai", "Rome"].map((city) => (
              <Button
                key={city}
                variant={city === "New York" ? "default" : "outline"}
                className={
                  city === "New York" ? "bg-teal-500 hover:bg-teal-600" : "border-gray-300 hover:border-teal-500"
                }
              >
                {city}
              </Button>
            ))}
          </div>

          {/* Alaska Featured Section */}
          <div className="relative mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div>
                  <img
                    src="/images/mountain-landscape.jpg"
                    alt="Alaska"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                <div className="text-white flex flex-col justify-center">
                  <h3 className="text-4xl font-bold mb-4">Alaska</h3>
                  <p className="text-xl mb-6 opacity-90">
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1">4.8</span>
                    </div>
                    <span>•</span>
                    <span>127 Reviews</span>
                  </div>
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold w-fit">Book Now</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Tour Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={tour.image || "/placeholder.svg"} alt={tour.title} className="w-full h-48 object-cover" />
                  <Badge className="absolute top-3 left-3 bg-teal-500 text-white">{tour.category}</Badge>
                </div>
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
                    <div>
                      <span className="text-lg font-bold text-gray-900">${tour.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">${tour.originalPrice}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife of Alaska Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                <img
                  src="/images/wildlife-scene.jpg"
                  alt="Wildlife of Alaska"
                  className="absolute inset-4 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Wildlife of Alaska</h2>
              <p className="text-xl mb-8 opacity-90">
                Alaska's wildlife is both diverse and abundant. Most species are healthy and expanding, and many that
                were once threatened or endangered have recovered. Alaska's vast wilderness provides habitat for many
                species that are no longer found elsewhere.
              </p>
              <div className="flex gap-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">Book Now</Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
              <p className="text-xl text-gray-600">
                Most popular with our different categories designed for different types of travel
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                className="rounded-full w-10 h-10 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentSlide(Math.min(destinations.length - 4, currentSlide + 1))}
                className="rounded-full w-10 h-10 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {destinations.slice(currentSlide, currentSlide + 5).map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{destination.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{destination.location}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm ml-1">{destination.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({destination.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">${destination.price}</span>
                    <span className="text-sm text-gray-500">{destination.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm mx-auto">
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center">
                    <span className="text-gray-500">Mobile App Preview</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-100 rounded-lg h-16"></div>
                    <div className="bg-gray-100 rounded-lg h-16"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Smart City Tour Mobile App</h2>
              <p className="text-xl mb-8 opacity-90">
                Download our mobile app to access exclusive deals, offline maps, and personalized recommendations. Make
                your travel experience seamless with our smart features designed for modern travelers.
              </p>
              <div className="flex gap-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">Download for iOS</Button>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                  Download for Android
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From The Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">From The Gallery</h2>
              <p className="text-xl text-gray-600">
                Explore some of the most beautiful destinations through our curated photo gallery
              </p>
            </div>
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
      </section>

      {/* Latest Stories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Stories</h2>
              <p className="text-xl text-gray-600">
                Read our latest travel stories and tips from experienced travelers and local experts
              </p>
            </div>
            <Button variant="outline" className="border-gray-300 hover:border-teal-500 bg-transparent">
              View All Stories
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={story.image || "/placeholder.svg"} alt={story.title} className="w-full h-48 object-cover" />
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
      </section>

      <Footer />
    </div>
  )
}
