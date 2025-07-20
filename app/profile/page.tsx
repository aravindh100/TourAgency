"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin, Check } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
            <div className="text-gray-600">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span>My Profile</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <img
                      src="/images/profile/avatar.jpg"
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Masum Rana</h3>
                  <div className="flex items-center justify-center text-sm text-gray-600 mb-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Gothenburg</span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>15th February</span>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 space-y-2">
                <Button
                  variant={activeTab === "profile" ? "default" : "ghost"}
                  className={`w-full justify-start ${activeTab === "profile" ? "bg-teal-500 hover:bg-teal-600" : ""}`}
                  onClick={() => setActiveTab("profile")}
                >
                  Profile Informations
                </Button>
                <Button
                  variant={activeTab === "booking" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("booking")}
                >
                  Booking History
                </Button>
                <Button
                  variant={activeTab === "newsletter" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("newsletter")}
                >
                  Newsletter Subscription
                </Button>
                <Button
                  variant={activeTab === "notifications" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("notifications")}
                >
                  Manage Notifications
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === "profile" && (
                <div className="space-y-8">
                  {/* Personal Information */}
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Name:</label>
                          <Input defaultValue="Masum Rana" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Date Of Birth</label>
                          <Input type="date" defaultValue="1986-03-15" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                          <Input defaultValue="+46-7644 394 68" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                          <Input defaultValue="Gothenburg" />
                        </div>
                      </div>

                      <Button className="mt-6 bg-teal-500 hover:bg-teal-600">Save</Button>
                    </CardContent>
                  </Card>

                  {/* Security */}
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Security</h2>

                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                          <Input defaultValue="masumrana15@gmail.com" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                          <Input type="password" defaultValue="••••••••••" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                          <Input type="password" defaultValue="••••••••••" />
                        </div>
                      </div>

                      <Button className="mt-6 bg-teal-500 hover:bg-teal-600">Save</Button>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Other tabs content can be added here */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
