import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Language & Currency */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Language</h3>
              <div className="flex items-center gap-2">
                <img src="/images/flags/uk.png" alt="UK Flag" className="w-6 h-4" />
                <span>English (UK)</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Currency</h3>
              <span>U.S. Dollar ($)</span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-300 hover:text-white">
                  Press Room
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white">
                  Terms and conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-300 hover:text-white">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment & Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Payment methods possible</h3>
              <div className="grid grid-cols-4 gap-2">
                <img src="/images/payment/mastercard.png" alt="Mastercard" className="bg-white rounded p-1" />
                <img src="/images/payment/visa.png" alt="Visa" className="bg-white rounded p-1" />
                <img src="/images/payment/amex.png" alt="American Express" className="bg-white rounded p-1" />
                <img src="/images/payment/diners.png" alt="Diners Club" className="bg-white rounded p-1" />
                <img src="/images/payment/paypal.png" alt="PayPal" className="bg-white rounded p-1" />
                <img src="/images/payment/apple-pay.png" alt="Apple Pay" className="bg-white rounded p-1" />
                <img src="/images/payment/google-pay.png" alt="Google Pay" className="bg-white rounded p-1" />
                <img src="/images/payment/masterpass.png" alt="Masterpass" className="bg-white rounded p-1" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <p className="text-gray-300">Become a Tour guide for Us</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">Copyright 2021 Tour Guide. All Rights Reserved</p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              <Youtube className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
