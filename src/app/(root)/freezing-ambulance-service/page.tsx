import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Clock,
  MapPin,
  Shield,
  Users,
  Thermometer,
  Heart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "লাশবাহী ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস ঢাকা | ২৪/৭ নিরাপদ মৃতদেহ পরিবহন",
  description:
    "ঢাকায় লাশবাহী ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস, ২৪/৭ দ্রুত এবং নিরাপদ মৃতদেহ পরিবহন। আধুনিক ফ্রিজার সেবা এবং অভিজ্ঞ স্টাফ দ্বারা মর্যাদাপূর্ণ পরিবহন।",
  keywords:
    " লাশবাহী ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস, মৃতদেহ পরিবহন ঢাকা, ২৪ অ্যাম্বুলেন্স সার্ভিস, নিরাপদ লাশবাহী পরিবহন, ফ্রিজিং অ্যাম্বুলেন্স, Freezing Ambulance Services. freezing ambulance, dead body carrier, ambulance service Dhaka, freezer ambulance Bangladesh, mortuary ambulance, body transportation service, dead body carrier frozen ambulance, Dhaka Airport freezing Ambulance, frozen ambulance, Shikder Freezing Ambulance, Dhaka freezing Ambulance, near Ac Ambulance, online Ambulance service, best Ambulance, Mirpur Ambulance Service, Shahabag Ambulance Service, Mirpur Ambulance Service, Badda Ambulance Service, Basaboo Ambulance Service, Madartek Ambulance Service, Mugdha Ambulance Service, Jatrabari Ambulance Service, Maniknagore Ambulance Service, Shenbag Ambulance Service, Freezing Ambulance Service Dhaka, Dead Body Freezing Ambulance Dhaka, Freezer Ambulance Dhaka, Body Freezer Ambulance Dhaka, Morgue Ambulance Dhaka, Dead Body Transport Dhaka, 24 Hour Freezing Ambulance Dhaka, Freezing Ambulance Near Me Dhaka, Emergency Freezing Ambulance Dhaka, Frozen Dead Body Ambulance Dhaka, AC Freezer Ambulance Dhaka, Long Distance Freezing Ambulance Dhaka, Dhaka Airport Freezing Ambulance, Hazrat Shahjalal Airport Freezer Ambulance, Bashundhara Freezing Ambulance, Gulshan Freezing Ambulance, Banani Freezing Ambulance, Baridhara Freezing Ambulance, Mohakhali Freezing Ambulance, Tejgaon Freezer Ambulance, Farmgate Freezing Ambulance, Karwan Bazar Freezing Ambulance, Shahbag Freezing Ambulance, Dhanmondi Freezing Ambulance, Mohammadpur Freezing Ambulance, Adabor Freezing Ambulance, Shyamoli Freezing Ambulance, Kallyanpur Freezer Ambulance, Mirpur Freezing Ambulance, Mirpur 1 Freezing Ambulance, Mirpur 10 Freezer Ambulance, Pallabi Freezing Ambulance, Rupnagar Freezing Ambulance, Uttara Freezing Ambulance, Uttara Sector Freezing Ambulance, Khilkhet Freezing Ambulance, Nikunja Freezing Ambulance, Kuril Freezing Ambulance, Badda Freezing Ambulance, Bashabo Freezing Ambulance, Khilgaon Freezing Ambulance, Malibagh Freezing Ambulance, Moghbazar Freezing Ambulance, Mouchak Freezer Ambulance, Rampura Freezing Ambulance, Banasree Freezing Ambulance, Nandipara Freezing Ambulance, Aftabnagar Freezing Ambulance, Merul Badda Freezer Ambulance, Motijheel Freezing Ambulance, Kamalapur Freezer Ambulance, Paltan Freezing Ambulance, Kakrail Freezing Ambulance, Nayapaltan Freezing Ambulance, Wari Freezing Ambulance, Sutrapur Freezing Ambulance, Gendaria Freezer Ambulance, Sadarghat Freezing Ambulance, Babubazar Freezer Ambulance, Kotwali Freezing Ambulance, Bangshal Freezing Ambulance, Jatrabari Freezing Ambulance, Donia Freezing Ambulance, Kadamtali Freezer Ambulance, Rayerbag Freezer Ambulance, Shyampur Freezing Ambulance, Demra Freezing Ambulance, Sarulia Freezing Ambulance, Matuail Freezing Ambulance, Narinda Freezing Ambulance, Lalbagh Freezing Ambulance, Azimpur Freezing Ambulance, Hazaribagh Freezing Ambulance, Kamrangirchar Freezer Ambulance, Islambagh Freezing Ambulance, Chawkbazar Freezing Ambulance, New Market Freezing Ambulance, Nilkhet Freezing Ambulance, Science Lab Freezing Ambulance, Katabon Freezing Ambulance, Elephant Road Freezer Ambulance, Panthapath Freezing Ambulance, Green Road Freezing Ambulance, Segunbagicha Freezing Ambulance, Shahbagh Freezer Ambulance, DMCH Freezing Ambulance, BSMMU Freezer Ambulance, Dhaka Medical College Freezing Ambulance, Square Hospital Freezer Ambulance, Labaid Freezing Ambulance, Popular Hospital Freezer Ambulance, Evercare Hospital Freezing Ambulance, United Hospital Freezing Ambulance, Holy Family Hospital Freezer Ambulance, Ibn Sina Freezing Ambulance, Asgar Ali Hospital Freezer Ambulance, Enam Medical Freezing Ambulance, Emergency Freezing Ambulance Dhaka City, Dhaka City Freezer Ambulance, Best Freezing Ambulance Dhaka, Affordable Freezer Ambulance Dhaka, Quick Freezing Ambulance Dhaka, Reliable Freezer Ambulance Service Dhaka, Professional Freezing Ambulance Dhaka, Patient Dead Body Freezing Ambulance Dhaka, Dhaka to Chittagong Freezing Ambulance, Dhaka to Sylhet Freezer Ambulance, Dhaka to Khulna Freezing Ambulance, Dhaka to Barisal Freezing Ambulance, Dhaka to Rajshahi Freezer Ambulance, Dhaka to Rangpur Freezing Ambulance, Long Route Freezing Ambulance Dhaka, Highway Freezer Ambulance Dhaka, Home to Morgue Freezer Ambulance, Hospital to Home Freezing Ambulance, Emergency Dead Body Transport Dhaka, Dhaka Freezing Body Transport, Citywide Freezing Ambulance Service, Frozen Body Transport Dhaka, Body Preservation Ambulance Dhaka, Refrigerated Ambulance Dhaka, Dhaka Refrigerated Dead Body Ambulance, Fast Freezing Ambulance Dhaka, 24/7 Freezer Ambulance Dhaka, Near Me Freezing Ambulance Service, Premium Freezing Ambulance Dhaka, Dedicated Freezer Ambulance Dhaka, Dhaka Burial Transport Ambulance, Janaza Transport Freezing Ambulance, Coffin Transport Freezing Ambulance Dhaka, Dhaka Mortuary Ambulance Service.",
  authors: [{ name: "Shikder Ambulance" }],
  openGraph: {
    title: "লাশবাহী ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস ঢাকা | শিকদার অ্যাম্বুলেন্স সার্বিস",
    description:
      "Freezing Ambulance Service in Dhaka. It is a dead body carrier freezing ambulance in Bangladesh. 24/7 dead body carrier with advanced freezing technology. Single & double cabin freezer ambulance is available in the all districts of Bangladesh.",
    url: "https://shikderambulance.com.bd/freezing-ambulance",
    siteName: "Shikder Ambulance",
    images: [
      {
        url: "/images/Freezing Ambulance Service-shikder-ambulance.jpg",
        width: 1200,
        height: 630,
        alt: "Freezing Ambulance Service-Shikder Ambulance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freezing Ambulance Service in Dhaka | Shikder Ambulance",
    description:
      "Freezing Ambulance Service in Dhaka. Professional 24/7 freezing ambulance service across Bangladesh.",
    images: ["/images/Freezing Ambulance Service-shikder-ambulance.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

const FreezingAmbulance = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  <Thermometer className="h-3 w-3 mr-1" />
                  লাশবাহী ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  লাশবাহী ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস{" "}
                  <span className="text-blue-600">ঢাকা</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  শিকদার অ্যাম্বুলেন্স সার্ভিস ঢাকায় লাশবাহী ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস প্রদান করে। এই সেবায় মৃতদেহকে নিরাপদ ও মর্যাদাপূর্ণভাবে পরিবহন করার জন্য আধুনিক ফ্রিজার ব্যবস্থাসহ অভিজ্ঞ স্টাফ থাকে। ২৪/৭ উপলব্ধ এই সেবায় দ্রুত পৌঁছানো যায় এবং ঢাকার যেকোনো এলাকায় মর্যাদাপূর্ণ পরিবহন নিশ্চিত করা হয়। ফ্রিজিং অ্যাম্বুলেন্স সেবার মাধ্যমে মৃতদেহের সুরক্ষা বজায় থাকে এবং পরিবার ও আত্মীয়দের মানসিক চাপ কমানো যায়। যেকোন সময় লাশবাহী গাড়ি বুকিং করতে কল করবেনঃ 01710060020
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  অনলাইনে বুকিং করতে কল দিন
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  বিস্তারিত জানতে ভিজিট করুন
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <Image
                  src="/Freezing Ambulance Service-shikder-ambulance.jpg"
                  alt="Freezing Ambulance Service"
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ঢাকায় লাশবাহী ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস, দ্রুত ও নিরাপদ মৃতদেহ পরিবহন সেবা
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional dead body transportation services with advanced
              freezing technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                লাশবাহী ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস
              </h3>
              <p className="text-gray-600 leading-relaxed">
                শিকদার অ্যাম্বুলেন্স সার্ভিস ঢাকায় লাশবাহী ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস প্রদান করে, যা মৃতদেহকে নিরাপদ, সুষ্ঠু ও মর্যাদাপূর্ণভাবে পরিবহন নিশ্চিত করে। আমাদের আধুনিক ফ্রিজিং অ্যাম্বুলেন্সে মৃতদেহ সংরক্ষণের জন্য প্রয়োজনীয় ফ্রিজার ব্যবস্থা রয়েছে, যা দীর্ঘ দূরত্বেও মৃতদেহকে সুস্থ ও সুরক্ষিত রাখে।
              </p>              
              <p className="text-gray-600 leading-relaxed">
                আমাদের লাশবাহী ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস ব্যবহারের মাধ্যমে পরিবার ও আত্মীয়দের মানসিক চাপ কমানো যায়, এবং মৃতদেহকে মর্যাদার সঙ্গে স্থানান্তর করা সম্ভব। আমরা নিশ্চিত করি, প্রতিটি পরিবহন নিরাপদ, সময়মতো এবং সর্বোচ্চ মানের সেবা অনুসারে সম্পন্ন হয়।
              </p>
               <p className="text-gray-600 leading-relaxed">
                লাশবাহী ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস হল একটি বিশেষ ধরনের অ্যাম্বুলেন্স, যা মৃতদেহ নিরাপদ ও মর্যাদাপূর্ণভাবে পরিবহন করার জন্য ব্যবহৃত হয়। এতে ফ্রিজার বক্স সংযুক্ত থাকে, যার মাধ্যমে মৃতদেহ ঘণ্টা থেকে দিন পর্যন্ত দীর্ঘ সময় পর্যন্ত সংরক্ষণ করা সম্ভব। ঢাকা শহরের যেকোনো জায়গায় দ্রুত পৌঁছানোর সুবিধা থাকায় এটি পরিবার ও আত্মীয়দের জন্য মানসিক চাপ কমাতে সাহায্য করে। অভিজ্ঞ স্টাফ এবং প্রয়োজনীয় সরঞ্জাম সহ, এই সার্ভিসটি ২৪/৭ উপলব্ধ এবং নিরাপদ পরিবহন নিশ্চিত করে।.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">২৪/৭ দ্রুত ও নির্ভরযোগ্য সেবা</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    আধুনিক ফ্রিজার অ্যাম্বুলেন্স সার্বিস
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">সাশ্রয়ী মূল্যে মানসম্মত পরিবহন</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    ফ্রিজার গাড়ির তাপমাত্রা সাধারণত (-৫ ডিগ্রি টু -২২ ডিগ্রি) থাকে।
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    ঢাকা হতে সকল জেলায় লাশবাহী গাড়ির সার্বিস
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image
                src="/Freezing Ambulance Service in Dhaka-body.jpg"
                alt="Ambulance Interior"
                width={300}
                height={250}
                className="rounded-xl shadow-lg"
              />
              <Image
                src="/Freezing Ambulance Service in Dhaka-inside.jpg"
                alt="Ambulance Exterior"
                width={300}
                height={250}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              লাশবাহী ফ্রিজার গাড়ির প্রকারভেদ
            </h2>
            <p className="text-lg text-gray-600">
              লাশবাহী ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস সাধারণত দুই ধরনের হয়।
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>সিঙ্গেল কেবিন লাশবাহী ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  এটি একটি লাশবাহী অ্যাম্বুলেন্স, যার সঙ্গে ফ্রোজেন বক্স (ফ্রিজার) সংযুক্ত থাকে। ফ্রিজিং অ্যাম্বুলেন্স ব্যবহার করা হয় মৃতদেহ দীর্ঘ সময় পর্যন্ত সংরক্ষণের জন্য, ঘণ্টা থেকে দিন পর্যন্ত সময়কাল পর্যন্ত। এই ধরনের অ্যাম্বুলেন্সকে ফ্রিজার ভ্যান অ্যাম্বুলেন্সও বলা হয়। সিঙ্গেল কেবিনের সাথে ২ জন লোক যাওয়া যাবে।
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  বিস্তারিত জানার জন্য ভিজিট করুন
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>ডাবল কেবিন লাশবাহী ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  এটি একটি লাশবাহী অ্যাম্বুলেন্স, যা ডাবল ক্যাবিন এবং ফ্রিজার বক্সসহ সজ্জিত। ফ্রিজিং অ্যাম্বুলেন্স ব্যবহার করা হয় মৃতদেহ দীর্ঘ সময় পর্যন্ত সংরক্ষণের জন্য, ঘণ্টা থেকে দিন পর্যন্ত। এই ধরনের অ্যাম্বুলেন্সকে ফ্রিজার ভ্যান অ্যাম্বুলেন্সও বলা হয়। ডাবল কেবিনের সাথে ৬ জন লোক যাওয়া যাবে।
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  বিস্তারিত জানার জন্য ভিজিট করুন
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Service Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Freezing Ambulance Service in Dhaka
              </h2>
              <Badge className="bg-green-100 text-green-800">
                Dead body carrier freezing ambulance 24/7
              </Badge>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <h3 className="text-xl font-bold text-gray-900">
                What is a Freezing Ambulance Service?
              </h3>
              <p>
                A freezing ambulance is a specially designed vehicle equipped with a mortuary freezer system that helps maintain a low temperature to preserve the body of the deceased. Unlike a regular ambulance, which is used for medical emergencies, a freezing ambulance is meant to transport bodies without decomposition.
              </p> 
              <p>
                A freezer ambulance is a dead body carrier ambulance. It has a
                freezing box in it. The freezer ambulance can intact the dead
                body several hours and days. People who want to keep their
                relatives dead body intact for few from germs or viruses for
                several hours or some days. We Provide different types of
                ambulance service. We are just a Call Away.
              </p> 
              <p>
                They can rent a freezing ambulance from us. Some time the dead
                body comes from abroad or they need to stay more time before
                buried. In that case you need to hire ambulance service.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* Service Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ২৪ ঘণ্টা লাশবাহী ফ্রিজার অ্যাম্বুলেন্স সার্ভিস, নিরাপদ মৃতদেহ পরিবহন
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              আধুনিক ফ্রিজার বক্স সহ অ্যাম্বুলেন্স
            </p>
          </div>

          <div className="">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                লাশবাহী ফ্রিজার অ্যাম্বুলেন্স সার্ভিস ঢাকা সিটি ২৪/৭ 
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ২৪ ঘণ্টা লাশবাহী ফ্রিজার অ্যাম্বুলেন্স সার্ভিস মৃতদেহ নিরাপদ ও সম্মানজনকভাবে দূর-দূরান্তে পরিবহনের নির্ভরযোগ্য ব্যবস্থা। আধুনিক ফ্রিজার বক্সযুক্ত এই অ্যাম্বুলেন্সে মৃতদেহ দীর্ঘ সময় সংরক্ষণ করা যায়, যা দূরবর্তী জেলা, উপজেলা বা ভিন্ন শহরে পরিবহনের জন্য অত্যন্ত সুবিধাজনক। প্রশিক্ষিত স্টাফ, দ্রুত রেসপন্স এবং ২৪/৭ সার্ভিস নিশ্চিত করে মৃতদেহ পরিবহনে ঝামেলাহীন ও সুরক্ষিত অভিজ্ঞতা।
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700"> দীর্ঘ দূরত্বে নিরাপদে পরিবহন নিশ্চিত করে।</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    মৃতদেহ দীর্ঘ সময় সুরক্ষিতভাবে সংরক্ষণ করা যায়। 
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700"> দীর্ঘ সময় পর্যন্ত দেহের পরিচ্ছন্নতা বজায় থাকে। </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    ঢাকা হতে সকল জেলায় লাশ পরিবহনে লাশবাহী ফ্রিজার গাড়ি দেওয়া হয়।
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    ঢাকার যেকোন এলাকা, মহল্লায় লাশ দীর্ঘ সময় সংরক্ষন করে রাখার জন্য ফ্রিজার গাড়ি ব্যবহার করুন।
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Ambulance Service */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              কেন শিকদার লাশবাহী ফ্রিজার অ্যাম্বুলেন্স সার্ভিস ব্যবহার করবেন?  
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                তাপমাত্রা নিয়ন্ত্রণ
              </h3>
              <p className="text-gray-600">
                ফ্রিজার অ্যাম্বুলেন্সে তাপমাত্রা নিয়ন্ত্রণ মৃতদেহ দীর্ঘ সময় সতেজ রাখতে সাহায্য করে।
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">২৪/৭ সার্বক্ষণিক সেবা</h3>
              <p className="text-gray-600">
                সার্বক্ষণিক, দিন-রাত যেকোনো সময় সেবা পাওয়া যায়।
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">প্রফেশনার কেয়ার</h3>
              <p className="text-gray-600">
                ফ্রিজার বক্স সঠিকভাবে পরিচালনা করে দেহের নিরাপদ সংরক্ষণ নিশ্চিত করা হয়।
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Freezing Ambulance Available Area of Dhaka
            </h2>
            <p className="text-xl opacity-90">
              Serving all major areas across Dhaka and Bangladesh
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Dhaka Metropolitan</h3>
              <p className="text-sm opacity-80">All areas covered</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Airport Areas</h3>
              <p className="text-sm opacity-80">
                Hazrat Shahjalal International
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">All Districts</h3>
              <p className="text-sm opacity-80">Bangladesh wide service</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">24/7 Emergency</h3>
              <p className="text-sm opacity-80">Immediate response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              লাশবাহী ফ্রিজার গাড়ি দরকার?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              ঢাকা শহরের যেকোন এলাকা হতে লাশবাহী ফ্রিজার গাড়ি বুকিং করতে যোগাযোগ করুন।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <Link href={"tel:01710060020"}><Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call: 01627-669222
              </Button> </Link>              
              <Link href={"https://wa.me/01710060020"}> <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                WhatsApp: 017100-60020
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreezingAmbulance;
