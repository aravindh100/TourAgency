"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Clock, CreditCard, Shield, CheckCircle } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    tour: "Grand European Adventure",
    date: "2024-05-15",
    guests: 2,
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
    },
    specialRequests: "",
    paymentMethod: "card",
  })

  const tourDetails = {
    title: "Grand European Adventure",
    duration: "14 days",
    price: 3299,
    image: "/placeholder.svg?height=300&width=400",
    destinations: ["Paris", "Rome", "Barcelona", "Amsterdam"],
    includes: [
      "Luxury accommodations",
      "All meals included",
      "Expert local guides",
      "Transportation between cities",
      "Entrance fees to attractions",
    ],
  }

  const handlePersonalInfoChange = (field: string, value: string) => {
    setBookingData({
      ...bookingData,
      personalInfo: {
        ...bookingData.personalInfo,
        [field]: value,
      },
    })
  }

  const calculateTotal = () => {
    const basePrice = tourDetails.price * bookingData.guests
    const tax = basePrice * 0.1
    return basePrice + tax
  }

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission
    console.log("Booking submitted:", bookingData)
    setStep(4) // Go to confirmation
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Complete Your Booking</h1>
          <p className="text-xl opacity-90">Secure your adventure in just a few steps</p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-8">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= stepNumber ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {step > stepNumber ? <CheckCircle className="h-6 w-6" /> : stepNumber}
                </div>
                <span className={`ml-2 font-medium ${step >= stepNumber ? "text-blue-600" : "text-gray-500"}`}>
                  {stepNumber === 1 && "Tour Details"}
                  {stepNumber === 2 && "Personal Info"}
                  {stepNumber === 3 && "Payment"}
                </span>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 mx-4 ${step > stepNumber ? "bg-blue-600" : "bg-gray-300"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {step === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Tour Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <img
                        src={tourDetails.image || "/placeholder.svg"}
                        alt={tourDetails.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-2">{tourDetails.title}</h3>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-2" />
                            {tourDetails.duration}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            {tourDetails.destinations.join(", ")}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold">Includes:</h4>
                          {tourDetails.includes.map((item, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Departure Date</label>
                        <Input
                          type="date"
                          value={bookingData.date}
                          onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={bookingData.guests}
                          onChange={(e) => setBookingData({ ...bookingData, guests: Number.parseInt(e.target.value) })}
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                              {num} Guest{num > 1 ? "s" : ""}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <Button onClick={nextStep} className="w-full bg-blue-600 hover:bg-blue-700">
                      Continue to Personal Information
                    </Button>
                  </CardContent>
                </Card>
              )}

              {step === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                          <Input
                            required
                            value={bookingData.personalInfo.firstName}
                            onChange={(e) => handlePersonalInfoChange("firstName", e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                          <Input
                            required
                            value={bookingData.personalInfo.lastName}
                            onChange={(e) => handlePersonalInfoChange("lastName", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                          <Input
                            type="email"
                            required
                            value={bookingData.personalInfo.email}
                            onChange={(e) => handlePersonalInfoChange("email", e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                          <Input
                            type="tel"
                            required
                            value={bookingData.personalInfo.phone}
                            onChange={(e) => handlePersonalInfoChange("phone", e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                        <Input
                          required
                          value={bookingData.personalInfo.address}
                          onChange={(e) => handlePersonalInfoChange("address", e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                          <Input
                            required
                            value={bookingData.personalInfo.city}
                            onChange={(e) => handlePersonalInfoChange("city", e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                          <Input
                            required
                            value={bookingData.personalInfo.country}
                            onChange={(e) => handlePersonalInfoChange("country", e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Special Requests or Dietary Requirements
                        </label>
                        <Textarea
                          rows={4}
                          value={bookingData.specialRequests}
                          onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
                          placeholder="Any special accommodations, dietary restrictions, or requests..."
                        />
                      </div>

                      <div className="flex gap-4">
                        <Button variant="outline" onClick={prevStep} className="flex-1 bg-transparent">
                          Back
                        </Button>
                        <Button onClick={nextStep} className="flex-1 bg-blue-600 hover:bg-blue-700">
                          Continue to Payment
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}

              {step === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                        <div className="flex items-center mb-2">
                          <Shield className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="font-medium text-blue-800">Secure Payment</span>
                        </div>
                        <p className="text-blue-700 text-sm">
                          Your payment information is encrypted and secure. We never store your credit card details.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Card Number *</label>
                          <Input placeholder="1234 5678 9012 3456" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date *</label>
                            <Input placeholder="MM/YY" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">CVV *</label>
                            <Input placeholder="123" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name *</label>
                          <Input placeholder="Name as it appears on card" />
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium mb-2">Terms and Conditions</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                          <label className="flex items-start">
                            <input type="checkbox" className="mt-1 mr-2" required />
                            <span>I agree to the Terms of Service and Privacy Policy</span>
                          </label>
                          <label className="flex items-start">
                            <input type="checkbox" className="mt-1 mr-2" required />
                            <span>I understand the cancellation policy and booking terms</span>
                          </label>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button type="button" variant="outline" onClick={prevStep} className="flex-1 bg-transparent">
                          Back
                        </Button>
                        <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
                          <CreditCard className="mr-2 h-5 w-5" />
                          Complete Booking
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}

              {step === 4 && (
                <Card>
                  <CardContent className="text-center py-12">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
                    <p className="text-xl text-gray-600 mb-6">
                      Thank you for choosing TourGuide. Your adventure awaits!
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h3 className="font-bold mb-2">Booking Reference: TG-2024-001234</h3>
                      <p className="text-gray-600">
                        A confirmation email has been sent to {bookingData.personalInfo.email}
                      </p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">View Booking Details</Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Booking Summary Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium">{tourDetails.title}</h4>
                    <p className="text-sm text-gray-600">{tourDetails.duration}</p>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Departure Date:</span>
                      <span className="font-medium">{bookingData.date}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Guests:</span>
                      <span className="font-medium">{bookingData.guests}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Tour Price ({bookingData.guests} guests)</span>
                      <span>${(tourDetails.price * bookingData.guests).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes & Fees</span>
                      <span>${(tourDetails.price * bookingData.guests * 0.1).toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-green-600">${calculateTotal().toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Shield className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-blue-800">Protected Booking</span>
                    </div>
                    <p className="text-xs text-blue-700">Free cancellation up to 30 days before departure</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
