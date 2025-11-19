import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="py-20 bg-premium-gradient text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            জরুরি অ্যাম্বুলেন্স সার্বিস প্রয়োজন?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            চিকিৎসা জরুরিতে অপেক্ষা করবেন না। আমাদের প্রশিক্ষিত টিম ২৪/৭ প্রস্তুত সব ধরনের ইমার্জেন্সি অ্যাম্বুলেন্স সার্ভিস দিতে। যদি জরুরি অ্যাম্বুলেন্স সাপোর্টের প্রয়োজন হয়, তাহলে এখনই আমাদের কল করুন।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href={"tel:+8801627669222"}>
              <Button
                size="lg"
                variant="secondary"
                className="bg-red-600 hover:bg-red-700 text-white px-3 gap-0 md:px-8 py-4 text-lg"
              >
                <Phone className="mr-1 md:mr-2 h-5 w-5" />
                ইমার্জেন্সি হেল্পলাইনঃ 01627-669222
              </Button>
            </Link>
            <Link href={"tel:01710060020"}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-2 gap-0 md:px-8 py-4 text-lg bg-transparent"
              >
                <Phone className="mr-1 md:mr-2 h-5 w-5" />
                যেকোন সময় কল করুনঃ 017100-60020
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mx-auto mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">জরুরি সেবা ২৪/৭</h3>
              <p className="text-blue-100">
                শিকদার অ্যাম্বুলেন্স সার্ভিস, ঢাকা শহরের যেকোন এলাকায়, যেকোন সময় জরুরি আ্যাম্বুলেন্স সার্ভিস দেওয়া হয়।
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mx-auto mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                ঢাকা সিটি সহ, সকল জেলা
              </h3>
              <p className="text-blue-100">
                ঢাকা থেকে সকল জেলায় রোগী ও লাশ পবিরহনে সকল প্রকার আ্যাম্বুলেন্স সার্ভিস সরবরাহ করা হয়। যেকোন সময় বুকিং করতে কল করুন।
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mx-auto mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">দ্রুত রেসপন্স</h3>
              <p className="text-blue-100">
                জরুরি মুহর্তে, ঢাকা সিটি সহ যেকোন এলাকা হতে দ্রুত অ্যাম্বুলেন্স সেবা পেতে শিকদার আ্যাম্বুলেন্সকে কল করুন।
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
