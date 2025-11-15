import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Ambulance,
  Heart,
  Shield,
  BookmarkCheck,
  Banknote,
} from "lucide-react";
import Link from "next/link";
const quickLinks = [
  {
    label: "এসি অ্যাম্বুলেন্স সার্ভিস",
    link: "/ac-ambulance-service",
  },
  {
    label: "নন-এসি অ্যাম্বুলেন্স সার্ভিস",
    link: "/non-ac-ambulance",
  },
  {
    label: "লাশবাহী ফ্রিজার অ্যাম্বুলেন্স সার্ভিস",
    link: "/freezing-ambulance-service",
  },
  {
    label: "লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস ঢাকা",
    link: "/icu-ambulance-service",
  },
];

const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Ambulance className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">শিকদার অ্যাম্বুলেন্স সার্ভিস</h3>
                <p className="text-gray-400 text-sm">
                  রোগী ও লাশ পরিবহন সার্ভিস
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              শিকদার অ্যাম্বুলেন্স কোম্পানি বাংলাদেশের সবচেয়ে বৃহত্তম ও বিশ্বাস্থ প্রতিষ্ঠান। ঢাকা সহ সকল জেলায় সব ধরনের অ্যাম্বুলেন্স সেবা প্রদান করে থাকি। ২৪/৭ ঘন্টা জরুরি সেবা।
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">কুইক লিংকস</h4>
            <ul className="space-y-3">
              {quickLinks?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.link}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">আমাদের সার্ভিস সমূহ</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Heart className="h-4 w-4 mr-2 text-red-400" />
                দ্রুত, নিরাপদ ও আরামধায়ক সেবা।
              </li>
              <li className="flex items-center text-gray-300">
                <Shield className="h-4 w-4 mr-2 text-blue-400" />
                যেকোন সময়, যেকোন এলাকায়।
              </li>
              <li className="flex items-center text-gray-300">
                <Ambulance className="h-4 w-4 mr-2 text-purple-400" />
                ঢাকা সিটিতে ইমার্জেন্সি অ্যাম্বুলেন্স সার্ভিস
              </li>
              <li className="flex items-center text-gray-300">
                <Ambulance className="h-4 w-4 mr-2 text-green-400" />
                ঢাকা হতে সকল জেলায় অ্যাম্বুলেন্স সার্ভিস
              </li>

            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">যোগাযোগ করুন</h4>
            <div className="space-y-4 mb-6">
              <Link href={'tel:01710060020'}>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-red-400" />
                  <div>
                    <p className="font-bold text-white -400">017100-60020</p>
                  </div>
                </div>
              </Link>

              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <p>shikderambulance@gmail.com</p>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-green-400" />
                <div>
                  <p>মগবাজার হাসপাতাল রোড, ঢাকা-১২১৭</p>
                </div>
              </div>

              <div className="flex items-start text-gray-300">
                <BookmarkCheck className="h-5 w-5 mr-3 mt-1 text-purple-400" />
                <div>
                  <p><b>Trade No:</b> TRAD/DSCC/017141/2024</p>
                </div>
              </div>
              <div className="flex items-start text-gray-300">
                <Banknote className="h-5 w-5 mr-3 mt-1 text-purple-400" />
                <Link href="/payments" target="_blank">
                  <p>পেমেন্ট সিস্টেম</p>
                </Link>
              </div>

            </div>


          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            <p>
              {" "}
              Copyright-2025 &copy; Shikder Ambulance, All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy-and-policy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-condition"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms and Condition
            </Link>
            <Link
              href="/sitemap"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600 lg:py-3 lg:pb-3  pb-14 pt-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 text-center">
            <Phone className="h-5 w-5" />
            <p className="font-normal">
              জরুরি অ্যাম্বুলেন্সের প্রয়োজন? এখনই কল করুন।
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
