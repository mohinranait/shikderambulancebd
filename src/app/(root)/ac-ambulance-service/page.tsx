import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Clock,
  Shield,
  Thermometer,
  Heart,
  CheckCircle,
  Wind,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "শিকদার অ্যাম্বুলেন্স সার্ভিস | ঢাকা এসি অ্যাম্বুলেন্স সার্ভিস ২৪/৭",
  description:
    "ঢাকায় দ্রুত, নিরাপদ এবং সাশ্রয়ী মূল্যে এসি অ্যাম্বুলেন্স সার্ভিসের জন্য শিকদার অ্যাম্বুলেন্স সার্ভিসের সাথে যোগাযোগ করুন। ২৪/৭ জরুরি রোগী পরিবহন সেবা।",
  keywords:
    "AC ambulance, air conditioned ambulance, best Ambulance, top ambulance company, Dhaka city Ambulance, Near Ambulance, free Ambulance in Dhaka city. ambulance service Dhaka, emergency medical service, temperature controlled ambulance, patient transport Bangladesh",
  authors: [{ name: "Shikder Ambulance" }],
  openGraph: {
    title: "শিকদার অ্যাম্বুলেন্স সার্ভিস | ঢাকা এসি অ্যাম্বুলেন্স সার্ভিস ২৪/৭",
    description:
      "Best AC Ambulance Service in Dhaka by Shikder Ambulance. Professional AC ambulance service with temperature control for patient comfort. Available 24/7 across Bangladesh.",
    url: "https://shikderambulance.com.bd/ac-ambulance-service",
    siteName: "Shikder Ambulance",
    images: [
      {
        url: "/images/Ac Ambulance Service -Shikder  Ambulance.jpg",
        width: 1200,
        height: 630,
        alt: "এসি অ্যাম্বুলেন্স সার্ভিস ২৪/৭",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "শিকদার অ্যাম্বুলেন্স সার্ভিস | ঢাকা এসি অ্যাম্বুলেন্স সার্ভিস ২৪/৭",
    description:
      "Best AC Ambulance Service in Dhaka. Professional AC ambulance service with temperature control. Available 24/7.",
    images: ["/images/Ac Ambulance Service -Shikder  Ambulance.jpg"],
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
};

export default function AcAmbulancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                <Wind className="h-3 w-3 mr-1" />
                এসি অ্যাম্বুলেন্স সার্ভিস
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                 এসি অ্যাম্বুলেন্স সার্ভিস ঢাকা, {" "} ২৪/৭ জরুরি সেবা
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-pink-500">দ্রুত, নিরাপদ, ও </span>{" "}
                <span className="text-orange-500"> আরামদায়ক</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                শিকদার অ্যাম্বুলেন্স সার্ভিস ঢাকায় ২৪/৭ এসি অ্যাম্বুলেন্স সার্ভিস প্রদান করছে। আমাদের লক্ষ্য হলো রোগীকে আরামদায়ক, নিরাপদ এবং দ্রুত পরিবহন নিশ্চিত করা। অভিজ্ঞ প্যারামেডিক স্টাফ ও আধুনিক চিকিৎসা সরঞ্জামসহ আমরা প্রতিটি জরুরি পরিস্থিতিতে আপনার পাশে থাকি।
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Phone className="h-5 w-5 mr-2" />
                কল করুন
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
              ঢাকায় ২৪/৭ এসি অ্যাম্বুলেন্স সার্ভিস – দ্রুত ও নিরাপদ রোগী পরিবহন
            </h2>
            <p className="text-center font-semibold">
              যেকোন সময়, যেকোন এলাকায় - একটি ফোন কলই যতেষ্ট।
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                এসি অ্যাম্বুলেন্স সার্ভিস
              </h3>
              <p className="text-gray-600 leading-relaxed">
                এসি অ্যাম্বুলেন্স সার্ভিস হলো এমন একটি অ্যাম্বুলেন্স সেবা যেখানে গাড়িতে এয়ার কন্ডিশনিং সুবিধা থাকে। এটি রোগীর জন্য যাত্রাপথকে আরামদায়ক করে তোলে, বিশেষ করে গরম আবহাওয়ায় বা দীর্ঘ পথের রোগী পরিবহনের সময়। এছাড়া এই ধরনের অ্যাম্বুলেন্সে সাধারণত লাইফ সাপোর্ট, অক্সিজেন এবং প্রয়োজনীয় চিকিৎসা সরঞ্জামও থাকে। আপনার প্রিয়জনের জীবন রক্ষা এবং আরামদায়ক পরিবহনের জন্য{" "} 
                <a
                  href="https://shikderambulance.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  অ্যাম্বুলেন্স সার্ভিস
                </a>{" "}
                হলো নির্ভরযোগ্য নাম শিকদার অ্যাম্বুলেন্স সার্ভিস।
              </p>
              <p className="text-gray-600 leading-relaxed">
                আমাদের অ্যাম্বুলেন্সগুলোতে রয়েছে প্রয়োজনীয় লাইফ সাপোর্ট সরঞ্জাম, অক্সিজেন সাপোর্ট এবং মনিটরিং সিস্টেম, যা গুরুতর রোগীর জন্য বিশেষভাবে প্রস্তুত। অভিজ্ঞ ও প্রশিক্ষিত প্যারামেডিক স্টাফ ২৪/৭ উপস্থিত থাকে রোগীর নিরাপত্তা এবং চিকিৎসা সহায়তা নিশ্চিত করার জন্য।
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  এসি অ্যাম্বুলেন্স সার্ভিস ব্যবহারের সুবিধা
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">রোগীর জন্য আরামদায়ক পরিবহন</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      দীর্ঘ দূরত্বে ক্লান্তি কমায়
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      গরম বা আর্দ্র আবহাওয়ায় সুবিধাজনক।
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      সাশ্রয়ী মূল্যে মানসম্মত সেবা।
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      রোগীর আরাম ও নিরাপত্তা নিশ্চিত।
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      রোগীর জন্য অক্সিজেন ফ্রি
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      ২৪/৭ সার্ভিস উপলব্ধ।
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/best-Ac-Ambulance-Service-Shikder-Ambulance.jpg"
                alt="Best AC Ambulance Service"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 24 Hours Service */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ইমার্জেন্সি এসি অ্যাম্বুলেন্স সার্ভিস ঢাকা সহ সকল জেলায় 
            </h2>
            <p className="text-lg text-gray-600">
              ঢাকা সহ সকল জেলায় শিকদার অ্যাম্বুলেন্স সার্ভিস রোগীর আরাম, নিরাপত্তা ও দ্রুত সেবা নিশ্চিত করে।
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                রোগীর জীবন রক্ষায় এসি অ্যাম্বুলেন্সের গুরুত্ব
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                এসি অ্যাম্বুলেন্স রোগীর জন্য জীবন রক্ষার ক্ষেত্রে অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করে। গরম বা আর্দ্র আবহাওয়ায় রোগী আরামদায়ক পরিবহনের সুবিধা পায়, যা শারীরিক চাপ কমায়। ICU ও লাইফ সাপোর্টসহ আধুনিক চিকিৎসা সরঞ্জাম যাত্রাকালীন রোগীর অবস্থা পর্যবেক্ষণ করতে সাহায্য করে। অভিজ্ঞ প্যারামেডিক স্টাফ জরুরি মুহূর্তে দ্রুত চিকিৎসা সহায়তা প্রদান করে, যা গুরুতর রোগীর জীবন বাঁচাতে গুরুত্বপূর্ণ। দীর্ঘ দূরত্বে রোগীর পরিবহন হলেও কম ক্লান্তি এবং নিরাপদ পরিবহন নিশ্চিত হয়। শিকদার অ্যাম্বুলেন্স সার্ভিসের এসি অ্যাম্বুলেন্স রোগীর আরাম, নিরাপত্তা ও দ্রুত সেবা নিশ্চিত করে, যা রোগীর জীবন রক্ষার জন্য অপরিহার্য।
              </p>
            </div> 
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              এসি অ্যাম্বুলেন্স সার্ভিস ব্যবহারের সুবিধা সমূহ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-gray-600">
                রোগীর জন্য আরামদায়ক পরিবহন এবং যাত্রার সময় কম ক্লান্তি নিশ্চিত করে।
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-gray-600">
                Tগরম ও আর্দ্র আবহাওয়ায়ও রোগীর আরাম বজায় রাখে।
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-gray-600">
                দীর্ঘ দূরত্বে নিরাপদ ও স্বাচ্ছন্দ্যময় পরিবহন প্রদান করে।
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <p className="text-gray-600">
                সাশ্রয়ী মূল্যে আরামদায়ক এবং নিরাপদ অ্যাম্বুলেন্স পরিবহন নিশ্চিত।
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Adding Part Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              সাশ্রয়ী মূল্যে এসি অ্যাম্বুলেন্স সার্ভিস, শিকদার অ্যাম্বুলেন্স সার্ভিস
            </h2>
            <p className="text-center font-semibold">
              দীর্ঘ দূরত্বে রোগীর জন্য আরামদায়ক ও নিরাপদ এসি অ্যাম্বুলেন্স সার্ভিস
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                জরুরি রোগী পরিবহনের জন্য ঢাকায় ২৪/৭ এসি অ্যাম্বুলেন্স সার্ভিস
              </h3>
              <p className="text-gray-600 leading-relaxed">
                শিকদার অ্যাম্বুলেন্স সার্ভিস ঢাকায় ২৪/৭ এসি অ্যাম্বুলেন্স সার্ভিস প্রদান করছে। জরুরি রোগী পরিবহনের সময় দ্রুত, নিরাপদ এবং আরামদায়ক পরিবহন নিশ্চিত করা হয়। ICU, লাইফ সাপোর্ট ও অভিজ্ঞ প্যারামেডিক স্টাফের মাধ্যমে রোগীর জীবন রক্ষা করা হয়।
              </p>

              <h3 className="text-2xl font-bold text-gray-900">
                শিকদার অ্যাম্বুলেন্স সার্ভিস কেন নিবেন?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                শিকদার অ্যাম্বুলেন্স সার্ভিস নির্বাচনের প্রধান কারণ হলো ২৪/৭ দ্রুত এবং নির্ভরযোগ্য সেবা। অভিজ্ঞ প্যারামেডিক স্টাফ রোগীর নিরাপত্তা নিশ্চিত করে এবং ICU ও লাইফ সাপোর্টসহ আধুনিক অ্যাম্বুলেন্সের মাধ্যমে আরামদায়ক পরিবহন প্রদান করা হয়। ঢাকার যেকোনো এলাকায় দ্রুত পৌঁছানোর সুবিধা এবং সাশ্রয়ী মূল্যে মানসম্মত সেবা নিশ্চিত করা আমাদের অঙ্গীকার। আপনার প্রিয়জনের জীবন রক্ষা ও নিরাপদ পরিবহনের জন্য শিকদার অ্যাম্বুলেন্স সার্ভিস হলো সবচেয়ে বিশ্বাসযোগ্য নাম।
              </p>

              <h3 className="text-2xl font-bold text-gray-900">
                শিকদার অ্যাম্বুলেন্স সার্ভিস কেন বিশ্বাস করবেন?
              </h3>
              <p className="text-gray-600 leading-relaxed">
               শিকদার অ্যাম্বুলেন্স সার্ভিস দীর্ঘ সময় ধরে ঢাকায় বিশ্বস্ত ও মানসম্মত সেবা প্রদান করছে। ২৪/৭ জরুরি সেবা, দ্রুত রেসপন্স এবং সাশ্রয়ী মূল্যে মানসম্মত পরিবহন আমাদের বিশ্বাসযোগ্যতার মূল চাবিকাঠি। রোগী ও পরিবারের জন্য নির্ভরযোগ্য এবং সম্মানজনক সেবা প্রদানই আমাদের প্রধান লক্ষ্য।
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src="/best-Ac-Ambulance-Service-Shikder-Ambulance-02.jpg"
                alt="Best AC Ambulance Service"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              এসি অ্যাম্বুলেন্স সার্ভিসের সংক্ষিপ্ত বিবরণ
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    রোগীর আরাম বা সুবিধাঃ
                  </h4>
                  <p className="text-gray-600">
                    রোগীর আরাম (Patient Comfort) হলো চিকিৎসা বা পরিবহনের সময় রোগীর শারীরিক ও মানসিক স্বস্তি নিশ্চিত করার প্রক্রিয়া।
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    তাপমাত্রা নিয়ন্ত্রণঃ
                  </h4>
                  <p className="text-gray-600">
                    Temperature Control হলো পরিবেশ বা যন্ত্রের তাপমাত্রা নির্দিষ্ট সীমার মধ্যে বজায় রাখার প্রক্রিয়া। অ্যাম্বুলেন্সে এটি রোগীর আরাম ও নিরাপত্তা নিশ্চিত করার জন্য অত্যন্ত গুরুত্বপূর্ণ।
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    বিশ্বাসযোগ্য ও নির্ভরযোগ্যঃ
                  </h4>
                  <p className="text-gray-600">
                    রোগী ও পরিবারের জন্য মানসম্মত এবং নিরাপদ পরিবহন নিশ্চিত।
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    হটলাইন ও অনলাইন বুকিং সুবিধাঃ
                  </h4>
                  <p className="text-gray-600">
                    সহজ এবং দ্রুত বুকিং সম্ভব। যেকোন সময় আমাদের ফোন নাম্বারে কল করুন।
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-80 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                দ্রুত রেসপন্সঃ
              </h4>
              <p className="text-gray-600">
                জরুরি মুহূর্তে ২৪/৭ দ্রুত পৌঁছানো যায়।{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              FAQs: Shikder Ambulance Service
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">এসি অ্যাম্বুলেন্স সার্ভিস কি?</h3>
                <p>
                  এসি অ্যাম্বুলেন্স সার্ভিস হলো এমন একটি অ্যাম্বুলেন্স সেবা যেখানে গাড়িতে এয়ার কন্ডিশনিং সুবিধা থাকে।
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">কেন এসি অ্যাম্বুলেন্স গুরুত্বপূর্ণ?</h3>
                <p>
                  গরম বা আর্দ্র আবহাওয়ায় রোগীর আরাম এবং দীর্ঘ দূরত্বে যাত্রা কম ক্লান্তিকর করতে এটি অপরিহার্য।
                </p>
              </div>
                <div>
                <h3 className="text-2xl font-semibold text-gray-900">সেবার খরচ কেমন?</h3>
                <p>
                  সাশ্রয়ী মূল্যে মানসম্মত এবং নির্ভরযোগ্য পরিবহন নিশ্চিত করা হয়।
                </p>
              </div>
                <div>
                <h3 className="text-2xl font-semibold text-gray-900">বুকিং কিভাবে করা যায়?</h3>
                <p>
                  হটলাইন ফোন অথবা অনলাইন বুকিং-এর মাধ্যমে সহজে করা যায়।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ইমার্জেন্সি অ্যাম্বুলেন্স সার্ভিস দরকার?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              জরুরি মুহূর্তে রোগী পরিবহনের জন্য ইমার্জেন্সি অ্যাম্বুলেন্স সার্ভিস খুবই গুরুত্বপূর্ণ। শিকদার অ্যাম্বুলেন্স সার্ভিস ২৪/৭ দ্রুত, নিরাপদ এবং আরামদায়ক পরিবহন নিশ্চিত করে।
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
