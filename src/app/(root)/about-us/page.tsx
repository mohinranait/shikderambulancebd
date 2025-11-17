import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Clock, Award, Shield, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const stats = [
    { number: "১০+", label: "সেবার বছর" },
    { number: "৫০,০০০+", label: "সংরক্ষিত জীবন" },
    { number: "২৪/৭", label: "জরুরি সেবা" },
    { number: "৯৮%", label: "প্রতিক্রিয়া হার" },
  ];

  const team = [
    {
      name: "শাহাদাত শিকদার",
      role: "Director",
      experience: "10 years",
      image: "/default.png?height=300&width=300",
      specialization: "Customer Support: 24/7",
    },
    {
      name: "মাহির শিকদার মুছা",
      role: "Director",
      experience: "10 years",
      image: "/default.png?height=300&width=300",
      specialization: "Software Engineer",
    },
    {
      name: "ইব্রাহীম",
      role: "Developer",
      experience: "10 years",
      image: "/default.png?height=300&width=300",
      specialization: "Software Developer",
    },
    {
      name: "কামরুল ইসলাম",
      role: "Manager",
      experience: "8 years",
      image: "/default.png?height=300&width=300",
      specialization: "Digital Marketing Manager",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "দ্রুত রেসপন্স, ২৪/৭ সাপোর্ট",
      description:
        "জরুরি পরিস্থিতিতে প্রতিটি সেকেন্ড মূল্যবান। তাই আমরা ২৪/৭ প্রস্তুত থাকি দ্রুত রেসপন্স নিশ্চিত করতে, যাতে রোগী বা মৃতদেহ পরিবহনে কোনো দেরি না হয়।",
    },
    {
      icon: Clock,
      title: "নির্ভরযোগ্যতা ও বিশ্বাস",
      description:
        "সেবা প্রদান থেকে সময়মতো পৌঁছানো—সব জায়গায় আমরা বিশ্বাসযোগ্যতা বজায় রাখি।",
    },
    {
      icon: Shield,
      title: "সাশ্রয়ী ও স্বচ্ছ মূল্য",
      description:
        "কোনো লুকানো চার্জ নেই—ন্যায্য ও স্বচ্ছ মূল্যনীতি অনুসরণ করি।",
    },
    {
      icon: Award,
      title: "নির্ভরযোগ্যতা ও বিশ্বাস",
      description:
        "সেবা প্রদান থেকে সময়মতো পৌঁছানো—সব জায়গায় আমরা বিশ্বাসযোগ্যতা বজায় রাখি।",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-rose-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              About us
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-6">
              শিকদার অ্যাম্বুলেন্স সার্ভিস,
              <span className="text-blue-600 block">
                আপনার বিশ্বস্ত জরুরি সেবার সঙ্গী
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              শিকদার অ্যাম্বুলেন্স সার্ভিস হলো ঢাকার অন্যতম বিশ্বস্ত ও দ্রুতগতির জরুরি মেডিকেল ট্রান্সপোর্ট সার্ভিস। আমরা ২৪/৭ নিরবচ্ছিন্নভাবে সারা ঢাকা ও আশপাশের এলাকায় রোগী পরিবহন, লাইফ সাপোর্ট ও ফ্রিজিং অ্যাম্বুলেন্স সেবা প্রদান করে থাকি। জরুরি মুহূর্তে দ্রুত সঠিক সেবা পৌঁছে দেওয়াই আমাদের প্রধান দায়িত্ব।
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                শিকদার অ্যাম্বুলেন্স সার্ভিস
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  শিকদার অ্যাম্বুলেন্স সার্ভিস হলো ঢাকার অন্যতম বিশ্বস্ত ও দ্রুতগামী জরুরি মেডিকেল ট্রান্সপোর্ট সেবা। আমরা ২৪/৭ সময় রোগী পরিবহন, লাইফ সাপোর্ট, ICU/CCU, PICU/SICU ও ফ্রিজিং অ্যাম্বুলেন্সসহ সব ধরনের অ্যাম্বুলেন্স সুবিধা প্রদান করি।
                </p>
                <p>
                  অভিজ্ঞ প্যারামেডিক টিম, আধুনিক মেডিকেল ইকুইপমেন্ট, পরিষ্কার ও স্যানিটাইজড গাড়ি এবং দ্রুত রেসপন্স—এসব কিছুর সমন্বয়ে আমরা প্রতিটি রোগীর জন্য নিরাপদ ও পেশাদার সেবা নিশ্চিত করি।
                </p>
                <p>
                  ঢাকা শহরের যেকোনো এলাকা, হাসপাতাল বা বাসায় দ্রুত পৌঁছে রোগীকে সর্বোচ্চ সতর্কতার সাথে হাসপাতালে পৌঁছে দেওয়া আমাদের প্রধান দায়িত্ব। সাশ্রয়ী চার্জ, স্বচ্ছ সেবা এবং মানবিক আচরণই আমাদের বিশেষতা।
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/about-us.jpg"
                  alt="About Us: Shikder Ambulance Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* মিশন ও ভিশন */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              আমাদের মিশন ও ভিশন
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              দ্রুত, নিরাপদ ও উন্নত লাইফ সাপোর্টসহ জরুরি মেডিকেল ট্রান্সপোর্ট প্রদান করা এবং সারাদেশে আধুনিক, প্রযুক্তিনির্ভর, নির্ভরযোগ্য অ্যাম্বুলেন্স সেবা নেটওয়ার্ক গড়ে তোলাই আমাদের মূল মিশন ও ভিশন। 
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                আমাদের মিশন
              </h2>
              <p className="font-semibold text-slate-600 max-w-3xl mx-auto mb-4">
              আমাদের মিশন হলো—
            </p>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">রোগীর কাছে দ্রুত পৌঁছানো ও সেবা দেওয়া।</span>
                </div>
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">নিরাপদ ও পেশাদার মেডিকেল সাপোর্ট নিশ্চিত করা</span>
                </div>
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">সাশ্রয়ী চার্জে আন্তর্জাতিক মানের অ্যাম্বুলেন্স সেবা প্রদান করা</span>
                </div>
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">প্রতিটি রোগীকে সর্বোচ্চ গুরুত্ব ও মানবিক সহায়তা দেওয়া</span>
                </div>                
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                আমাদের ভিশন
              </h2>
              <p className="font-semibold text-slate-600 max-w-3xl mx-auto mb-4">
              আমরা ভবিষ্যতে দেশজুড়ে একটি শক্তিশালী ও প্রযুক্তি-সমৃদ্ধ অ্যাম্বুলেন্স নেটওয়ার্ক গড়ে তুলতে চাই।
            </p>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">উন্নত লাইফ সাপোর্ট সুবিধা বৃদ্ধি</span>
                </div>
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">বড় পরিসরে ও দ্রুততম জরুরি সার্ভিস।</span>
                </div>
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">ডিজিটাল বুকিং ও ট্র্যাকিং সিস্টেম</span>
                </div>
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">রোগী সেবা মান আরও উন্নত করা</span>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </section>
                  {/* আমাদের সেবা সমূহ*/}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              শিকদার অ্যাম্বুলেন্স সার্বিস সমূহ
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              দ্রুত, নিরাপদ ও নির্ভরযোগ্য অ্যাম্বুলেন্স সেবা দেওয়াই আমাদের একমাত্র লক্ষ্য ও উদ্দেশ্য।
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                আমাদের সার্ভিস
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">বেসিক অ্যাম্বুলেন্স সার্ভিস</span>
                </div>
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">এসি, নন-এসি অ্যাম্বুলেন্স সার্ভিস</span>
                </div>
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস (মরদেহ পরিবহন)</span>
                </div>
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">ICU, CCU, NICU, PICU অ্যাম্বুলেন্স সার্ভিস</span>
                </div>
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">লং রুট অ্যাম্বুলেন্স সার্ভিস (ঢাকা থেকে যেকোনো জেলা)</span>
                </div>
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">ঢাকা এয়ারপোর্ট অ্যাম্বুলেন্স সাপোর্ট</span>
                </div>                  
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                কেন আমাদের সার্বিস বেছে নেবেন?
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">দ্রুততম রেসপন্স টাইম</span>
                </div>
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">ঢাকার সর্বত্র সার্ভিস কাভারেজ</span>
                </div>
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">সার্বক্ষণিক (২৪/৭) প্রস্তুত থাকা</span>
                </div>
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">সাশ্রয়ী ও স্বচ্ছ চার্জ</span>
                </div>
                <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">রোগীকে পরিবারের সদস্যের মতো যত্ন </span>
                </div>                  
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              আমাদের মূল মূল্যবোধ
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              দ্রুত সাড়া, নিরাপত্তা, পেশাদারিত্ব, মানবিক আচরণ, আধুনিক লাইফ সাপোর্ট সুবিধা, স্বচ্ছ মূল্যনীতি এবং ২৪/৭ নির্ভরযোগ্য সেবা—এসবই আমাদের মূল মূল্যবোধ।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Behind every quick response and safe journey is our dedicated team
              of trained drivers. At <b>Shikder Ambulance</b>, our experts work
              24/7 to ensure patients get fast, safe, and professional care in
              Bangladesh.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image || "/default.png"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-600 mb-2">
                    {member.experience} experience
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {member.specialization}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Our Mission and Vission
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              " Shikder Ambulance's mission is to deliver swift, compassionate,
              and life-saving emergency medical transport, prioritizing patient
              well-being and community safety. Our vision is to be Bangladesh's
              most trusted and advanced ambulance service, setting the standard
              for rapid response and exceptional pre-hospital care. Every second
              counts; every patient matters."
            </p>
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <Heart className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
