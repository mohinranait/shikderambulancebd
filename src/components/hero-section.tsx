import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-premium-light-gradient py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-red-500 hover:bg-red-600 text-white px-4 py-2">
                যেকোন সময়, যেকোন এলাকায়
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-normal">
                শিকদার অ্যাম্বুলেন্স সার্ভিস,
                <span className="text-primary block"> জরুরি সেবা ২৪/৭ </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                শিকদার অ্যাম্বুলেন্স সার্ভিস, ঢাকা হতে সকল জেলায় রোগী ও লাশ পরিবহনে ইমার্জেন্সি এ্যাম্বুলেন্স সার্ভিস দেওয়া হয়। ঢাকা শহরে ২৪/৭ জরুরি সেবা প্রদানকারী একটি নির্ভরযোগ্য প্রতিষ্ঠান। ঢাকা শহরের যেকোনো স্থান থেকে হাসপাতাল বা বাড়িতে রোগী বা মৃতদেহ পরিবহনের জন্য শিকদার অ্যাম্বুলেন্স সার্ভিসের উপর সম্পূর্ণ নির্ভর করা যায়। আমাদের লক্ষ্য হলো দ্রুত, নিরাপদ ও মানসম্পন্ন অ্যাম্বুলেন্স সেবা নিশ্চিত করা। </p>
            </div>

            {/* Emergency Contact */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"tel:01710060020"}>
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  কল করুনঃ 017100-60020
                </Button>
              </Link>
              <Link href={"/contact-us"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg bg-transparent"
                >
                  অনলাইনে বুকিং করুন
                </Button>
              </Link>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">১৫ মিনিটে সার্ভিস</p>
                  <p className="text-sm text-muted-foreground">
                    ঢাকা সিটির যেকোন এলাকায়
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                  <MapPin className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold">জিপিএস ট্রাকিং</p>
                  <p className="text-sm text-muted-foreground">
                    রিয়েল-টাইম লোকেশন
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                  <Phone className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold">২৪/৭ জরুরী সার্ভিস</p>
                  <p className="text-sm text-muted-foreground">যেকোন সময়, যেকোন এলাকায়</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-premium">
              <Image
                src="/hiace.png?height=500&width=600"
                alt="Modern ambulance vehicle"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-premium border">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="font-semibold">ইমার্জেন্সি হেল্পলাইন</p>
                  <p className="text-2xl font-bold text-red-600">01710060020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
