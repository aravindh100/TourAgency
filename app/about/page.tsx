import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Globe, Heart, CheckCircle } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AboutPage() {
  const stats = [
    { icon: Users, number: "50,000+", label: "Happy Travelers" },
    { icon: Globe, number: "120+", label: "Destinations" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Heart, number: "98%", label: "Satisfaction Rate" },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With 20+ years in the travel industry, Sarah founded TourGuide to make authentic travel accessible to everyone.",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael ensures every tour runs smoothly with his expertise in logistics and customer service.",
    },
    {
      name: "Emma Rodriguez",
      role: "Travel Experience Designer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Emma crafts unique itineraries that showcase the best of each destination while respecting local cultures.",
    },
  ]

  const values = [
    {
      title: "Authentic Experiences",
      description: "We believe in genuine connections with local cultures and communities.",
      icon: Heart,
    },
    {
      title: "Sustainable Travel",
      description: "We are committed to responsible tourism that benefits local communities.",
      icon: Globe,
    },
    {
      title: "Expert Guidance",
      description: "Our experienced guides provide deep insights and ensure your safety.",
      icon: Award,
    },
    {
      title: "Personalized Service",
      description: "Every traveler is unique, and we tailor experiences to your preferences.",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">About TourGuide</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We're passionate about creating unforgettable travel experiences that connect you with the world's most
            amazing destinations and cultures.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2009, TourGuide began as a small family business with a simple mission: to share the beauty
                and wonder of the world with fellow travelers. What started as weekend trips to local destinations has
                grown into a global network of carefully curated experiences.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we work with local partners in over 120 destinations worldwide, ensuring that every journey not
                only creates memories for our travelers but also supports the communities we visit.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Locally-sourced experiences</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Expert local guides</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">24/7 support during travel</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Sustainable tourism practices</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Our team planning adventures"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind your adventures</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of travelers who have discovered the world with TourGuide
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Browse Our Tours
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
