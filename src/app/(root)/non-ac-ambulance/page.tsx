import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Clock,
  Shield,
  MapPin,
  Heart,
  CheckCircle,
  DollarSign,
  Users,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "নন-এসি অ্যাম্বুলেন্স সার্ভিস, ২৪/৭ দ্রুত রোগী পরিবহন সেবা",
  description:
    "ঢাকা এরিয়া জুড়ে সাশ্রয়ী মূল্যে নন-এসি অ্যাম্বুলেন্স সার্ভিস। অভিজ্ঞ প্যারামেডিক স্টাফ ও জরুরি সরঞ্জাম সহ দ্রুত ও নিরাপদ রোগী পরিবহন নিশ্চিত।",
  keywords:
    "ঢাকা নন-এসি অ্যাম্বুলেন্স সার্ভিস, জরুরি রোগী পরিবহন, সাশ্রয়ী মূল্যে অ্যাম্বুলেন্স, ২৪/৭ অ্যাম্বুলেন্স সার্ভিস, নন-এসি অ্যাম্বুলেন্স সার্ভিস, non-AC ambulance, basic ambulance service, patient transport Dhaka, cheap ambulance service, near ambulance, fast ambulance",
  authors: [{ name: "Shikder Ambulance" }],
  openGraph: {
    title:
      "নন-এসি অ্যাম্বুলেন্স সার্ভিস, ২৪/৭ দ্রুত রোগী পরিবহন সেবা",
    description:
      "ঢাকা এরিয়া জুড়ে সাশ্রয়ী মূল্যে নন-এসি অ্যাম্বুলেন্স সার্ভিস। অভিজ্ঞ প্যারামেডিক স্টাফ ও জরুরি সরঞ্জাম সহ দ্রুত ও নিরাপদ রোগী পরিবহন নিশ্চিত।",
    url: "https://shikderambulance.com/non-ac-ambulance",
    siteName: "Shikder Ambulance",
    images: [
      {
        url: "/images/Non-Ac-Ambulance Service.jpg",
        width: 1200,
        height: 630,
        alt: "Non-AC Ambulance Service in Bangladesh-Shikder Ambulance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "নন-এসি অ্যাম্বুলেন্স সার্ভিস",
    description:
      "ঢাকা এরিয়া জুড়ে সাশ্রয়ী মূল্যে নন-এসি অ্যাম্বুলেন্স সার্ভিস। অভিজ্ঞ প্যারামেডিক স্টাফ ও জরুরি সরঞ্জাম সহ দ্রুত ও নিরাপদ রোগী পরিবহন নিশ্চিত।",
    images: ["/images/Non-Ac-Ambulance Service.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://shikderambulance.com.bd/non-ac-ambulance",
  },
};

export default function NonAcAmbulancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                <DollarSign className="h-3 w-3 mr-1" />
                ইমার্জেন্সি অ্যাম্বুলেন্স সার্ভিস
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                জরুরি নন-এসি অ্যাম্বুলেন্স সার্ভিস {" "}
                <span className="text-blue-600">২৪/৭ দ্রুত রোগী পরিবহন</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                ঢাকা এলাকায় জরুরি রোগী পরিবহনের জন্য নন-এসি অ্যাম্বুলেন্স সার্ভিস একটি নির্ভরযোগ্য ও সাশ্রয়ী সমাধান। শিকদার অ্যাম্বুলেন্স সার্ভিসে দক্ষ ড্রাইভার মাধ্যমে রোগীর নিরাপদ ও আরামদায়ক পরিবহন নিশ্চিত করা হয়। আমাদের নন-এসি অ্যাম্বুলেন্স ২৪/৭ উপলব্ধ এবং ঢাকা শহরের যেকোনো জায়গায় দ্রুত পৌঁছানো সম্ভব, যা জরুরি পরিস্থিতিতে রোগীর জীবন রক্ষায় অত্যন্ত গুরুত্বপূর্ণ। যেকোন সময় গাড়ি বুকিং করতে কল করুন, ০১৭১০০৬০০২০
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Phone className="h-5 w-5 mr-2" />
                কল দিন, ২৪/৭ সাপোর্ট 
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ইমার্জেন্সি নন-এসি অ্যাম্বুলেন্স সার্ভিস, রোগী ও লাশ পরিবহন সার্ভিস
            </h2>
            <p className="text-lg text-gray-600">
              ঢাকা হতে সকল জেলায় রোগী ও লাশ পরিবহনে নন-এসি এ্যাম্বুলেন্স সার্ভিস দেওয়া হয়। সুলভ ভাড়ায় এ্যাম্বুলেন্স সার্বিস বুকিং করতেে এখনই কল করুনঃ ০১৭১০০-৬০০২০
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                নন-এসি অ্যাম্বুলেন্স সার্ভিস
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  নন-এসি অ্যাম্বুলেন্স সার্ভিস হলো এমন একটি পরিবহন সেবা যেখানে গাড়িতে এয়ার কন্ডিশনিং সুবিধা নেই। এটি সাধারণ রোগী পরিবহন, হাসপাতাল থেকে বাসা বা অন্য হাসপাতালে রোগী স্থানান্তরের জন্য ব্যবহার করা হয়।
                </p>
                <p>
                  নন-এসি অ্যাম্বুলেন্সে অভিজ্ঞ প্যারামেডিক স্টাফ থাকে এবং প্রয়োজনীয় চিকিৎসা সরঞ্জাম যেমন অক্সিজেন ও মনিটরিং সিস্টেম রাখা হয়। রোগীর যাত্রা নিরাপদ, সাশ্রয়ী এবং আরামদায়ক করার জন্য এটি কার্যকর।
                </p>
                <p>
                  নন-এসি অ্যাম্বুলেন্স সার্ভিস সাশ্রয়ী মূল্যে রোগী পরিবহন নিশ্চিত করে। ঢাকা শহরের যেকোনো এলাকায় দ্রুত পৌঁছানোর সুবিধা প্রদান করে এবং জরুরি পরিস্থিতিতে রোগীর জীবন রক্ষায় গুরুত্বপূর্ণ ভূমিকা পালন করে। এতে অভিজ্ঞ প্যারামেডিক স্টাফ, অক্সিজেন এবং মনিটরিং সিস্টেমসহ প্রয়োজনীয় চিকিৎসা সরঞ্জাম থাকে। রোগীর যাত্রা নিরাপদ ও আরামদায়ক হওয়ায় দীর্ঘ দূরত্বেও ক্লান্তি কম থাকে। হাসপাতাল থেকে বাসা বা অন্য হাসপাতালে রোগী স্থানান্তরের সময় নন-এসি অ্যাম্বুলেন্স সেবা একটি নির্ভরযোগ্য এবং মানসম্মত সমাধান হিসেবে কাজ করে।
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  গুরুত্বপূর্ণ বৈশিষ্ট্য
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">সাশ্রয়ী মূল্য</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">দ্রুত রেসপন্স</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">নিরাপদ পরিবহন</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">নিরাপদ ও আরামদায়ক যাত্রার নিশ্চয়তা</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      ঢাকা শহর ও দূরবর্তী এলাকায় দ্রুত পৌঁছানোর সক্ষমতা
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">জরুরি অবস্থায় তাৎক্ষণিক সাপোর্ট</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <Image
                  src="/Non-Ac-Ambulance Service.jpg"
                  alt="Non-AC Ambulance Service-Shikder Ambulance"
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              কম খরচে নির্ভরযোগ্য নন-এসি অ্যাম্বুলেন্স সার্ভিস
            </h2>
            <p className="text-lg text-gray-600">
              দ্রুত রেসপন্স, ২৪/৭ নন-এসি অ্যাম্বুলেন্স সার্ভিস ঢাকা
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <p className="text-gray-700 leading-relaxed text-lg">
                জরুরি রোগী পরিবহনে নন-এসি অ্যাম্বুলেন্সের গুরুত্ব বলতে বোঝায়—সাশ্রয়ী খরচে দ্রুত ও নির্ভরযোগ্যভাবে রোগীকে হাসপাতাল বা চিকিৎসা কেন্দ্রে পৌঁছে দেওয়ার সক্ষমতা। নন-এসি অ্যাম্বুলেন্সের ভাড়া কম হওয়ায় সাধারণ মানুষের জন্য এটি সহজলভ্য। এতে প্রয়োজনীয় চিকিৎসা সরঞ্জাম, অক্সিজেন সাপোর্ট এবং প্রশিক্ষিত স্টাফ থাকে, যা জরুরি মুহূর্তে রোগীর জীবন রক্ষায় সহায়ক ভূমিকা পালন করে। শহরের ভিড়, ট্রাফিক বা দূরবর্তী এলাকায় দ্রুত পৌঁছাতে নন-এসি অ্যাম্বুলেন্স কার্যকর ও দক্ষ একটি পরিবহন ব্যবস্থা হিসেবে বিবেচিত হয়।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Non-Ac Ambulance Service in Dhaka
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Emergency Non-Ac Ambulance service is available in Dhaka City.
                  This ambulance company provide Emergency Non-Ac ambulance service 24
                  hours in a day, 7 Days a week, and 365 days a year. The
                  Emergency Ambulance in cheap rent of ambulance. We
                  provide always a Standard ambulance with the proper
                  requirements. Contact us to Get an Emergency ambulance service
                  anywhere in Bangladesh. Fast ambulance service provider
                  Company in Dhaka City. If you need an emergency ambulance than
                  contact us.
                </p>
                <p>
                  Online Ambulance service in Dhaka. The best Non-Ac Ambulance service, Ac
                  Ambulance service. The best Ambulance services in Dhaka city,
                  Normal ambulance service, Dhaka Ambulance service, Quality
                  Ambulance service, Dhaka city Ambulance service.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ambulance Service Near me
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The Non-Ac Ambulance Online booking is available in Dhaka
                  city. We provide emergency ambulance service to carry the
                  patient a place to another. If you need any types of Ambulance
                  service than contact us.
                </p>
                <p>
                  Ambulance service in dhaka, air ambulance in dhaka, air
                  ambulance bangladesh, sylhet Ambulance service, best ambulance
                  service, ambulance service bd, ambulance service in uttara
                  dhaka, Ambulance service near me, ambulance service in
                  bangladesh, ambulance service in mohammadpur, ambulance
                  service in narayanganj, air ambulance, air ambulance service,
                  24 ambulance service, ambulances latest ambulance service,
                  fast ambulance service in Dhaka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              নন-এসি অ্যাম্বুলেন্সের সারসংক্ষেপ
            </h2>
            <p className="text-lg text-gray-600">
              জরুরী রোগী পরিবহনে যেকোন সময়, যেকোন এলাকায় দ্রুত নন-এসি এ্যাম্বুলেন্স সার্ভিস পাওয়া যায়।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                পেশেন্ট কেয়ার
              </h4>
              <p className="text-sm text-gray-600">
                পেশেন্ট কেয়ার বলতে রোগীর প্রতি যত্ন, সেবা ও সহায়তাকে বোঝায়। রোগীর শারীরিক, মানসিক ও মেডিকেল চাহিদা পূরণ করতে যে সব সেবা প্রদান করা হয়—তাই হলো পেশেন্ট কেয়ার।
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                তাপমাত্রা নিয়ন্ত্রণ
              </h4>
              <p className="text-sm text-gray-600">
                কোনো জায়গার ভেতরের তাপমাত্রা নির্দিষ্ট মাত্রায় রাখা, যাতে পরিবেশ আরামদায়ক, নিরাপদ ও উপযুক্ত থাকে। তবে নন-এসি অ্যাম্বুলেন্সে এসি থাকে না। রোগী পরিবহনে নন-এসি এ্যাম্বুলেন্সের তুলনায় এসি অ্যাম্বুলেন্স উত্তম।
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                ভাড়ার পার্থক্যঃ
              </h4>
              <p className="text-sm text-gray-600">
                এসি অ্যাম্বুলেন্স সার্ভিস এতে এয়ার কন্ডিশনিং সুবিধা থাকায় ভাড়া তুলনামূলক বেশি হয়। আর নন-এসি অ্যাম্বুলেন্স সার্ভিস এতে এয়ার কন্ডিশনিং সুবিধা নেই, তাই ভাড়া তুলনামুলক কম হয়। বাজেট-ফ্রেন্ডলি এবং সাশ্রয়ী মূল্যে মানসম্মত পরিবহন নিশ্চিত করে।
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                চিকিৎসাগত স্থিতিশীলতাঃ 
              </h4>
              <p className="text-sm text-gray-600">
                রোগীর শারীরিক ও মানসিক অবস্থার এমন একটি অবস্থা যেখানে তার জীবন সংকটমুক্ত, শারীরিক সংকট বা গুরুতর রোগের ঝুঁকি কম এবং চিকিৎসা সাপোর্টে নিয়ন্ত্রণে থাকে।
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                জরুরি সেবা ২৪/৭
              </h4>
              <p className="text-sm text-gray-600">
                শিকদার অ্যাম্বুলেন্স সার্ভিস ২৪/৭ সেবা প্রদানের মাধ্যমে রোগীর জীবন রক্ষা এবং নিরাপদ পরিবহন নিশ্চিত করে।
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment & Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Equipment & Features
            </h2>
            <p className="text-lg text-gray-600">
              Essential medical equipment for safe patient transport
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-600" />
                  <span>Basic Life Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Oxygen cylinders and masks</li>
                  <li>• First aid medical kit</li>
                  <li>• Basic monitoring equipment</li>
                  <li>• Emergency medications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>Patient Transport</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Comfortable stretchers</li>
                  <li>• Clean bed sheets</li>
                  <li>• Wheelchair accessibility</li>
                  <li>• Companion seating</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span>Safety Features</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Trained medical staff</li>
                  <li>• GPS tracking system</li>
                  <li>• Emergency communication</li>
                  <li>• Safety restraints</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              সেবা প্রদানের আওতাভুক্ত এলাকা
            </h2>
            <p className="text-xl opacity-90">
              ঢাকা সহ বাংলাদেশের সকল জেলায় রোগী ও লাশ পরিবহনে নন-এসি এ্যাম্বুলেন্স সেবা দেওয়া হয়।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">ঢাকা</h3>
              <p className="text-sm opacity-80">ঢাকা হতে সকল জেলায় অ্যাম্বুলেন্স সার্ভিস।</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">বরিশাল</h3>
              <p className="text-sm opacity-80">বরিশাল টু ঢাকা, এবং ঢাকা টু বরিশাল এরিয়া</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">চিটাগাং সদর</h3>
              <p className="text-sm opacity-80">ঢাকা টু চিটাগাং সদর, এবং চিটাগাং টু ঢাকা জরুরি এ্যাম্বুলেন্স সেবা</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">বাংলাদেশ</h3>
              <p className="text-sm opacity-80">যেকোন সময়, যেকোন থানা ও জেলায় সার্ভিস</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              সাশ্রয়ী মূল্যঃ
            </h2>
            <p className="text-lg text-gray-600">
              শিকদার অ্যাম্বুলেন্স সার্ভিসে রোগী পরিবহন সাশ্রয়ী মূল্যে করা হয়, দ্রুত, নিরাপদ ও মানসম্মত সেবা নিশ্চিত করে।
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  কেন নন-এসি অ্যাম্বুলেন্স বেছে নেবেন?
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">বাজেট-ফ্রেন্ডলি</h4>
                    <p className="text-gray-600 text-sm">
                      অ্যাম্বুলেন্স সার্ভিসে এটি রোগী পরিবহনকে সাশ্রয়ী মূল্যে নিরাপদ এবং কার্যকরী করে তোলে।
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-blue-600"/>
                    </div>
                    <h4 className="font-semibold mb-2">জরুরি সেবা</h4>
                    <p className="text-gray-600 text-sm">
                      অ্যাম্বুলেন্সে এটি রোগীর নিরাপত্তা, জীবন রক্ষা এবং আরামদায়ক পরিবহন নিশ্চিত করে।
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-purple-600"/>
                    </div>
                    <h4 className="font-semibold mb-2">দ্রুত সাড়া</h4>
                    <p className="text-gray-600 text-sm">
                      অ্যাম্বুলেন্স ক্ষেত্রে এটি রোগীর জীবন রক্ষায় অত্যন্ত গুরুত্বপূর্ণ, কারণ দ্রুত পৌঁছানো মানে সময়মতো চিকিৎসা শুরু।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Affordable Ambulance Service?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us now for cost-effective emergency patient transport
              service. Available 24/7 in the all districts of Bangladesh.
            </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">              
              <Link href={"tel:01627-669222"}> <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Phone className="h-5 w-5 mr-2"/>
                কল দিন: 01627-669222
              </Button></Link>              
              <Link href={"https://wa.me/01710060020"} ><Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                WhatsApp: 017100-60020
              </Button> </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
