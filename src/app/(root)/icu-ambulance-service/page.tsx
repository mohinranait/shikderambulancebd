import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Clock,
  Shield,
  Heart,
  CheckCircle,
  Stethoscope,
  Activity,
  Users,
  Zap,
  AlertTriangle,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস ঢাকা",
  description:
    "ঢাকায় ২৪/৭ লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস। ভেন্টিলেটর, অক্সিজেন, কার্ডিয়াক মনিটর, প্রশিক্ষিত মেডিকেল টিমসহ জরুরি রোগী পরিবহন। দ্রুত ও নির্ভরযোগ্য সার্ভিস।",
  keywords:
    "লাইফ সাপোর্ট অ্যাম্বুলেন্স, ভেন্টিলেটর অ্যাম্বুলেন্স সার্ভিস, অক্সিজেন অ্যাম্বুলেন্স ঢাকা, আইসিইউ অ্যাম্বুলেন্স সার্ভিস, জরুরি অ্যাম্বুলেন্স ঢাকা, ২৪ ঘণ্টা অ্যাম্বুলেন্স সার্ভিস, লাইফ সাপোর্ট এ্যাম্বুলেন্স, কার্ডিয়াক অ্যাম্বুলেন্স, ICU ambulance, CCU ambulance, NICU ambulance, life support ambulance, critical care transport, emergency medical services Dhaka, intensive care ambulance Bangladesh, cardiac ambulance, pediatric ambulance",
  authors: [{ name: "Shikder Ambulance" }],
  openGraph: {
    title:
      "ICU Ambulance Service in Dhaka | Best Reliable 24/7 - Shikder Ambulance",
    description:
      "ঢাকায় ২৪/৭ লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস। ভেন্টিলেটর, অক্সিজেন, কার্ডিয়াক মনিটর, প্রশিক্ষিত মেডিকেল টিমসহ জরুরি রোগী পরিবহন। দ্রুত ও নির্ভরযোগ্য সার্ভিস।",
    url: "https://shikderambulance.com.bd/icu-ambulance-service",
    siteName: "Shikder Ambulance",
    images: [
      {
        url: "/images/Life-support-ambulance.jpg",
        width: 1200,
        height: 630,
        alt: "ICU Ambulance Service in Dhaka - Advanced Life Support - Shikder Ambulance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICU Ambulance Service in Dhaka | Best Reliable 24/7",
    description:
      "ঢাকায় ২৪/৭ লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস। ভেন্টিলেটর, অক্সিজেন, কার্ডিয়াক মনিটর, প্রশিক্ষিত মেডিকেল টিমসহ জরুরি রোগী পরিবহন। দ্রুত ও নির্ভরযোগ্য সার্ভিস।.",
    images: ["/images/icu-ambulance-hero.png"],
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
    canonical: "https://shikderambulance.com.bd/icu-ambulance-service",
  },
};

export default function IcuAmbulancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                <Heart className="h-3 w-3 mr-1" />
                লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস ঢাকা{" "}
                <br />
                <span className="text-orange-500">জরুরি সেবা ২৪/৭</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস গুরুতর রোগী পরিবহনের জন্য অত্যন্ত জরুরি একটি সেবা। এতে থাকে ভেন্টিলেটর, অক্সিজেন, কার্ডিয়াক মনিটরসহ প্রয়োজনীয় চিকিৎসা সরঞ্জাম, যা রোগীর জীবনের ঝুঁকি অনেক কমিয়ে দেয়। প্রতিটি জরুরি মুহূর্তে দ্রুত ব্যবস্থা নেওয়ার জন্য এই সার্ভিস অত্যন্ত কার্যকর। ঢাকা সিটির যেকোন এলাকা হতে লাইফ সাপোর্ট এ্যাম্বুলেন্স বুকিং করতে কল করুন, 01710060020
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Phone className="h-5 w-5 mr-2" />
                বুকিং করতে কল করুন
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ঢাকায় ২৪/৭ লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস
            </h2>
            <p className="text-lg text-gray-600">
              ভেন্টিলেটর, অক্সিজেন, কার্ডিয়াক মনিটর সহ জরুরি রোগী পরিবহন। দ্রুত ও নির্ভরযোগ্য সেবা।
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস কি?
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস হলো এমন একটি উন্নতমানের অ্যাম্বুলেন্স সেবা, যেখানে গুরুতর রোগীকে হাসপাতালে নেওয়ার পথে প্রয়োজনীয় জরুরি চিকিৎসা ও লাইফ-সাপোর্ট সুবিধা প্রদান করা হয়। এই অ্যাম্বুলেন্সে থাকে ICU মানের আধুনিক সরঞ্জাম এবং প্রশিক্ষিত মেডিকেল টিম, যা রোগীর জীবন রক্ষা করতে তাৎক্ষণিকভাবে কাজ করে।
                </p>
                <p>
                  ঢাকা শহরে প্রতিদিন অসংখ্য মানুষ জরুরি চিকিৎসার প্রয়োজন পড়ে। বিশেষ করে আইসিইউ রোগী, হার্ট অ্যাটাক, ব্রেইন স্ট্রোক, শ্বাসকষ্ট, ট্রমা বা গুরুতর অবস্থায় থাকা রোগীদের দ্রুত হাসপাতালে নেওয়ার জন্য লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস অপরিহার্য। এই অ্যাম্বুলেন্সে ভেন্টিলেটর, অক্সিজেন সিলিন্ডার, নেবুলাইজার, কার্ডিয়াক মনিটর, সাকশন মেশিনসহ আধুনিক চিকিৎসা সরঞ্জাম থাকে, যা রোগীকে হাসপাতালে পৌঁছানোর আগেই প্রয়োজনীয় চিকিৎসা সহায়তা দিতে সক্ষম।
                </p>
                <p>
                  আমাদের ২৪ ঘন্টা লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস দ্রুত রেসপন্স, দক্ষ মেডিকেল টিম, নিরাপদ পরিবহন এবং অত্যাধুনিক সরঞ্জামসহ সর্বোচ্চ সেবা প্রদানের নিশ্চয়তা দেয়। হাসপাতাল, বাসা বা যেকোনো দূরত্বে রোগী স্থানান্তরের জন্য আমরা সবসময় প্রস্তুত।
                </p> 
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  কখন লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস প্রয়োজন হয়?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      হার্ট অ্যাটাক
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">ব্রেইন স্ট্রোক</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">গুরুতর শ্বাসকষ্ট</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700"> ট্রমা বা দুর্ঘটনায় আঘাত</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      আইসিইউ রোগী স্থানান্তর
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      বয়স্ক বা ক্রিটিক্যাল কন্ডিশনের রোগী
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 ">
              <div className="bg-white relative rounded-2xl shadow-2xl p-6">
                <Image
                  src="/Icu-ambulance-service-01.jpg"
                  alt="ICU Ambulance Service - Professional emergency medical transport Service"
                  width={500}
                  height={300}
                  className="rounded-xl scale-75 w-full h-auto"
                />
                <Image
                  src="/Shikder-Ambulance-Service-life-support-Ambulance.jpg"
                  alt="ICU Ambulance Interior - Advanced life support equipment and medical facilities"
                  width={200}
                  height={200}
                  className="rounded-xl w-full h-auto absolute max-w-[200px]  bottom-10 "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Life Support Ambulance */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্বিসের প্রকারভেদ
            </h2>
            <p className="text-lg text-gray-600">
              রোগীর অবস্থা ও ধরন অনুযায়ী লাইফ সাপোর্ট এ্যাম্বুলেন্স সার্বিস সরবরাহ করা হয়। লাইফ সাপোর্ট গাড়ির সাথে ডাক্তার ও ব্রাদার সাপোর্ট করা হয়।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-red-200 transition-colors group">
              <CardHeader>
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-center">আইসিইউ অ্যাম্বুলেন্স সার্বিস</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-600">
                  আইসিইউ অ্যাম্বুলেন্স সার্ভিস হলো গুরুতর রোগীকে হাসপাতালে নিরাপদে নেওয়ার জন্য ICU সুবিধা সহ উন্নত অ্যাম্বুলেন্স, যাতে থাকে ভেন্টিলেটর, অক্সিজেন, কার্ডিয়াক মনিটর ও প্রশিক্ষিত মেডিকেল টিম।
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  বিস্তারিত জানার জন্য ভিজিট করুন
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors group">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Activity className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-center">সিসিইউ অ্যাম্বুলেন্স সার্ভিস</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-600">
                  সিসিইউ অ্যাম্বুলেন্স সার্ভিস হলো বিশেষভাবে কার্ডিয়াক বা হার্ট রোগীর জন্য ব্যবহৃত উন্নত অ্যাম্বুলেন্স। এটি রোগীকে হাসপাতালে নিরাপদে স্থানান্তর করার জন্য কার্ডিয়াক মনিটর, অক্সিজেন, ভেন্টিলেটর, নেবুলাইজার এবং প্রশিক্ষিত মেডিকেল টিম দিয়ে সজ্জিত থাকে।
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  বিস্তারিত জানার জন্য ভিজিট করুন
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors group">
              <CardHeader>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-center">এসআইসিইউ অ্যাম্বুলেন্স সার্ভিস</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-600">
                  এসআইসিইউ অ্যাম্বুলেন্স সার্ভিস হলো স্পেশাল ইন্টেনসিভ কেয়ার ইউনিট রোগীদের নিরাপদভাবে হাসপাতালে স্থানান্তরের জন্য ব্যবহৃত অ্যাম্বুলেন্স। এতে থাকে ভেন্টিলেটর, অক্সিজেন সাপোর্ট, কার্ডিয়াক মনিটর, নেবুলাইজার, সাকশন মেশিন এবং প্রশিক্ষিত ICU মেডিকেল টিম, যা রোগীর জীবন রক্ষা করতে জরুরি চিকিৎসা সরবরাহ করে।
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  বিস্তারিত জানার জন্য ভিজিট করুন
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors group">
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-center"> পিআইসিইউ অ্যাম্বুলেন্স সার্ভিস</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-600">
                  পিআইসিইউ (PICU) অ্যাম্বুলেন্স সার্ভিস হলো পেডিয়াট্রিক ইন্টেনসিভ কেয়ার ইউনিট রোগীদের জন্য বিশেষ অ্যাম্বুলেন্স। এটি গুরুতর বা ক্রিটিক্যাল অবস্থার শিশু রোগীকে নিরাপদে হাসপাতালে স্থানান্তরের জন্য ব্যবহৃত হয়।
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  বিস্তারিত জানার জন্য ভিজিট করুন
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors group">
              <CardHeader>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Stethoscope className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-center">
                  ভেন্টিলেটর
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-600">
                  ভেন্টিলেটর (Ventilator) হলো একটি মেডিকেল যন্ত্র যা রোগীর শ্বাস-প্রশ্বাসের সাহায্য করে। এটি তখন ব্যবহৃত হয় যখন রোগী স্বাভাবিকভাবে শ্বাস নিতে সক্ষম নয় বা অক্সিজেনের প্রয়োজন বেশি।
                </p>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  বিস্তারিত জানার জন্য ভিজিট করুন
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-gray-200 transition-colors group">
              <CardHeader>
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                  <Shield className="h-8 w-8 text-gray-600" />
                </div>
                <CardTitle className="text-center">
                  বেসিক অ্যাম্বুলেন্স সার্ভিস
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-600">
                  বেসিক অ্যাম্বুলেন্স সার্ভিস হলো রোগীকে হাসপাতাল বা ক্লিনিকে নিরাপদে এবং দ্রুত পৌঁছে দেওয়ার জন্য সাধারণ জরুরি সেবা প্রদানকারী অ্যাম্বুলেন্স।
                </p>
                <Button className="w-full bg-gray-600 hover:bg-gray-700">
                  বিস্তারিত জানার জন্য ভিজিট করুন
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Basic Life Support ICU Ambulance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস কত প্রকার ও কি কি
              </h2>
              <p className="text-lg text-gray-600">
                লাইফ সাপোর্ট অ্যাম্বুলেন্স মূলত রোগীর অবস্থার গুরুতরতা ও প্রয়োজনীয় চিকিৎসার ওপর ভিত্তি করে বিভিন্ন ধরনের হতে পারে। সাধারণত তিন ভাগে ভাগ করা যায়।
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                বেসিক লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস
              </h3>
              <p>
                বেসিক লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস হলো একটি প্রাথমিক পর্যায়ের অ্যাম্বুলেন্স সেবা যা রোগীকে নিরাপদে হাসপাতালে পৌঁছে দেওয়ার পাশাপাশি প্রয়োজনীয় প্রাথমিক চিকিৎসা প্রদান করে।
              </p> 
              <p>
                বেসিক লাইফ সাপোর্ট (BLS) অ্যাম্বুলেন্স সার্ভিস হলো প্রাথমিক পর্যায়ের জরুরি চিকিৎসা সহায়ক একটি অ্যাম্বুলেন্স সার্ভিস। এটি রোগীকে দ্রুত ও নিরাপদে হাসপাতালে পৌঁছে দেওয়ার পাশাপাশি প্রাথমিক চিকিৎসা ও জীবন রক্ষা সাপোর্ট প্রদান করে। BLS অ্যাম্বুলেন্স সাধারণত গুরুতর অসুস্থতা নয় এমন রোগী বা হালকা দুর্ঘটনার ক্ষেত্রে ব্যবহৃত হয়।
              </p>
            </div>
            <div className="space-y-6 mt-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  বেসিক লাইফ সাপোর্ট অ্যাম্বুলেন্সের সুবিধা
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      অক্সিজেন সাপোর্ট
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">প্রাথমিক ফার্স্ট এইড কিট</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">প্রাথমিক CPR সুবিধা</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">দ্রুত ও নিরাপদ রোগী পরিবহন</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      প্রাথমিক CPR সুবিধা
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      প্রশিক্ষিত প্যারামেডিক সহ সেবা
                    </span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-600 space-y-6 mt-10">
                <h3 className="text-2xl font-bold text-gray-900">
                অ্যাডভান্সড লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস
              </h3>
              <p>
                অ্যাডভান্সড লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস হলো এমন একটি উন্নতমানের অ্যাম্বুলেন্স সার্ভিস যা গুরুতর বা ক্রিটিক্যাল রোগীকে দ্রুত এবং নিরাপদে হাসপাতালে পৌঁছে দেওয়ার জন্য প্রয়োজনীয় উন্নত চিকিৎসা সরঞ্জাম ও প্রশিক্ষিত মেডিকেল টিম সরবরাহ করে। ALS অ্যাম্বুলেন্সে BLS (Basic Life Support) এর সব সুবিধা থাকলেও, এতে আরও উন্নত চিকিৎসা সুবিধা যেমন ভেন্টিলেটর, কার্ডিয়াক মনিটর, IV ফ্লুইড ও লাইফ-সাপোর্ট মেডিসিনের ব্যবস্থা থাকে।
              </p> 
              <p>
                ALS অ্যাম্বুলেন্স হলো ক্রিটিক্যাল বা গুরুতর রোগীর জন্য উন্নতমানের লাইফ সাপোর্ট অ্যাম্বুলেন্স, যা হাসপাতালে পৌঁছানোর আগেই রোগীর জীবন রক্ষা ও প্রয়োজনীয় চিকিৎসা নিশ্চিত করে।
              </p>
            </div>
            <div className="space-y-6 mt-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  অ্যাডভান্সড লাইফ সাপোর্ট অ্যাম্বুলেন্সের সুবিধা
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      ভেন্টিলেটর সাপোর্ট
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">কার্ডিয়াক মনিটর</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">অক্সিজেন ও নেবুলাইজার</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">IV ফ্লুইড ও লাইফ-সাপোর্ট মেডিসিন</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      প্রশিক্ষিত প্যারামেডিক / মেডিকেল টিম
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      দ্রুত, নিরাপদ ও আরামদায়ক সেবা
                    </span>
                  </div>
                </div>
            </div>
             <div className="prose prose-lg max-w-none text-gray-600 space-y-6 mt-10">
                <h3 className="text-2xl font-bold text-gray-900">
                লাইফ সাপোর্ট আইসিইউ অ্যাম্বুলেন্স সার্ভিস (ICU) 
              </h3>
              <p>
                লাইফ সাপোর্ট আইসিইউ অ্যাম্বুলেন্স সার্ভিস হলো গুরুতর বা ক্রিটিক্যাল অবস্থার রোগীকে নিরাপদ ও দ্রুত হাসপাতালে পৌঁছে দেওয়ার জন্য ব্যবহৃত উন্নতমানের অ্যাম্বুলেন্স। এই ধরনের অ্যাম্বুলেন্সে থাকে ICU মানের সরঞ্জাম ও প্রশিক্ষিত মেডিকেল টিম, যা রোগীর জীবন রক্ষা এবং প্রয়োজনীয় চিকিৎসা নিশ্চিত করতে সক্ষম।
              </p> 
              <p>
                লাইফ সাপোর্ট আইসিইউ অ্যাম্বুলেন্স রোগীর নিরাপদ, দ্রুত এবং উন্নত চিকিৎসা সহ হাসপাতাল পরিবহন নিশ্চিত করে। এটি গুরুতর অসুস্থ রোগীর জন্য সবচেয়ে নির্ভরযোগ্য ও নিরাপদ সমাধান।
              </p>
            </div>
            <div className="space-y-6 mt-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  লাইফ সাপোর্ট আইসিইউ অ্যাম্বুলেন্সের সুবিধা
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      ভেন্টিলেটর সাপোর্ট
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">অক্সিজেন সাপোর্ট ও নেবুলাইজার</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">কার্ডিয়াক মনিটর</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">সাকশন মেশিন ও জরুরি মেডিসিন</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      প্রশিক্ষিত প্যারামেডিক মেডিকেল টিম
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      দ্রুত, নিরাপদ ও আরামদায়ক সার্ভিস
                    </span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              কেন আমাদের সার্ভিস নিবেন?
            </h2>
            <p className="text-lg text-gray-600">
              আমরা নিশ্চিত করি দ্রুত, নিরাপদ এবং উন্নতমানের চিকিৎসা সহ পরিবহন, যাতে আপনার প্রিয়জন সর্বোচ্চ সুরক্ষায় থাকে।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>২৪/৭ জরুরি সেবা</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  দিনে রাতেই দ্রুত রেসপন্স এবং রোগী পরিবহন।
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-600" />
                  <span>নিরাপদ ও দ্রুত পরিবহন</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  রোগীর জীবন রক্ষা ও দ্রুত হাসপাতালে পৌঁছানো নিশ্চিত।
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Stethoscope className="h-5 w-5 text-green-600" />
                  <span>বিশ্বাসযোগ্যতা ও অভিজ্ঞতা</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  বহু বছরের অভিজ্ঞতার সাথে সেবা প্রদান। যেকোন সময় জরুরি প্রয়োজেন কল করুন।
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span>ক্রিটিক্যাল সেবা</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ICU, CCU, NICU, PICU বা লাইফ সাপোর্ট রোগীর জন্য উন্নত সেবা।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We Are The Best */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              আমরাই কেন সেরা?
            </h2>
            <p className="text-lg text-gray-600">
              মাবনবতার সেবাই, আমাদের একমাত্র লক্ষ্য ও উদ্দেশ্য।
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      দ্রুততম রেসপন্স টাইম
                    </h4>
                    <p className="text-gray-600">
                      জরুরি মুহূর্তে প্রতিটি সেকেন্ড মূল্যবান। আমরা অতি দ্রুত লোকেশন ট্র্যাক করে রোগীর কাছে পৌঁছে যাই।
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      আধুনিক লাইফ সাপোর্ট সুবিধা
                    </h4>
                    <p className="text-gray-600">
                      আমাদের অ্যাম্বুলেন্সগুলোতে রয়েছে ভেন্টিলেটর, কার্ডিয়াক মনিটর, অক্সিজেন সাপোর্ট, সাকশন মেশিনসহ ICU-লেভেল সুবিধা।
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      সকল জেলায় সার্বিস
                    </h4>
                    <p className="text-gray-600">
                      ঢাকা সহ সকল জেলায় অ্যাম্বুলেন্স সার্ভিস সরবরাহ করা হয়। যেকোন সময়, যেকোন দেশ বা এলাকা হতে গাড়ি বুকিং করার সুবিধা রয়েছে।
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Stethoscope className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      ড্রাইভার ও সহযোগী
                    </h4>
                    <p className="text-gray-600">
                      প্রতিটি এ্যাম্বুলেন্সের সাথে ড্রাইভার ও সহযোগী থাকে, যাতে রোগীকে সহযোগীতা করতে পারে। সব সময় সহযোগী আপনাদের রোগীর সহযোগীতায় প্রস্তুত।
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      অনলাইন বুকিং ‍সুবিধা 
                    </h4>
                    <p className="text-gray-600">
                      খুবসহজেই অনলাইনে বুকিং ও পেমেন্ট করার সুবিধা রয়েছে। বিকাশ, নগদ, ব্যাংকে পেমেন্ট করতে ভিজিট করুন, বুকিং সিস্টেম।
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-100 p-2 rounded-full">
                    <AlertTriangle className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      স্বচ্ছ চার্জ – কোনো লুকানো ফি নেই
                    </h4>
                    <p className="text-gray-600">
                      সঠিক ও ন্যায্য ভাড়ায় আমরা সেবা দিই। কোনো অতিরিক্ত বা অপ্রত্যাশিত চার্জ নেই।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              আপনার কি লাইফ সাপোর্ট অ্যাম্বুলেন্স দরকার?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              ঢাকা সহ যেকোন এলাকা থেকে লাইফ সাপোর্ট অ্যাম্বুলেন্স বুকিং করতে কল করুন।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100"
              >
                <Phone className="h-5 w-5 mr-2" />
                সরাসরি কল দিনঃ 01627-669222
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
              >
                হোয়ার্টআপে কল দিনঃ 017100-60020
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
