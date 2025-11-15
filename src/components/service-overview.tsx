import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ServiceOverview() {
  const services = [
    {
      title: "এসি এ্যাম্বুলেন্স সার্বিস",
      description:
        "এসি অ্যাম্বুলেন্স সার্ভিস রোগীর আরাম এবং নিরাপত্তাকে সর্বোচ্চ গুরুত্ব দিয়ে তৈরি। গরম আবহাওয়া বা দীর্ঘ যাত্রার ক্ষেত্রে এসি পরিবেশ রোগীর শারীরিক চাপ কমায় এবং আরামদায়ক পরিবহন নিশ্চিত করে। এতে প্রয়োজনীয় চিকিৎসা সরঞ্জাম, অভিজ্ঞ স্টাফ এবং দ্রুত সাড়া দেওয়ার সুবিধা থাকে, যা জরুরি অবস্থায় নির্ভরযোগ্য সহায়তা প্রদান করে।",

      image: "/Shikder-Ambulance-Service-Ac-Ambulance.jpg",
      features: [
        "কোয়ালিটি অ্যাম্বুলেন্স সার্ভিস",
        "এসি নিয়ান্তনকারী অ্যাম্বুলেন্স সার্ভিস",
        "ঢাকা সিটিতে অক্সিজেন ফ্রী",
        "ঢাকা সিটিতে যেকোন সময়, যেকোন এলাকায় সেবা",
      ],
      link:"/ac-ambulance-service"
    },
    {
      title: "নন-এসি অ্যাম্বুলেন্স সার্ভিস",
      description:
        "নন-এসি অ্যাম্বুলেন্স সার্ভিস হলো সাশ্রয়ী ও বাজেট-ফ্রেন্ডলি জরুরি পরিবহন ব্যবস্থা। সাধারণ রোগী পরিবহনের জন্য এতে সব প্রয়োজনীয় মৌলিক চিকিৎসা সুবিধা থাকে। কম খরচে দ্রুত রোগীকে হাসপাতাল বা চিকিৎসা কেন্দ্রে পৌঁছে দিতে এই সার্ভিসটি জনপ্রিয়। নিরাপত্তা, সময়মতো সাড়া এবং পেশাদার টিমের সহায়তা এটিকে আরও বিশ্বস্ত করে।",

      image: "/Shikder-Ambulance-Service-Non-Ac-Ambulance.jpg",
      features: [
        "হুইল চেয়ার",
        "স্ট্রেচার সাপোর্ট",
        "মেডিকেল সাপোর্ট",
        "জরুরী অ্যাম্বুলেন্স সেবা ২৪/৭",
      ],
      link:"/non-ac-ambulance"
    },
    {
      title: "লাইফ সাপোর্ট অ্যাম্বুলেন্স সার্ভিস (ICU/CCU)",
      description:
        "লাইফ সাপোর্ট অ্যাম্বুলেন্স গুরুতর বা সংকটজনক রোগীর জন্য উন্নত চিকিৎসা ব্যবস্থাসম্পন্ন পরিবহন। এতে ICU সেটআপ, ভেন্টিলেটর, মনিটরিং সিস্টেম, অক্সিজেন ও অন্যান্য লাইফ সাপোর্ট সরঞ্জাম থাকে। অভিজ্ঞ প্যারামেডিক ও টেকনিশিয়ান সার্বক্ষণিক মনিটরিং করে রোগীর অবস্থাকে স্থিতিশীল রাখে। জরুরি, দুর্ঘটনা বা ক্রিটিক্যাল কন্ডিশনে এই সার্ভিস রোগীর জীবন রক্ষায় অত্যন্ত কার্যকর।",

      image: "/Shikder-Ambulance-Service-life-support-Ambulance.jpg",
      features: [
        "আই.সি.ইউ অ্যাম্বুলেন্স সাপোর্ট ",
        "ভেন্টিলেটর অ্যাম্বুলেন্স সার্ভিস",
        "ডাক্তার ও ব্রাদার সাপোর্ট",
        "হাসপাতাল টু হাসপাতার",
      ],
      link:"/icu-ambulance-service"
    },
    {
      title: "লাশবাহী ফ্রিজার অ্যাম্বুলেন্স সার্ভিস",
      description:
        "লাশবাহী ফ্রিজার অ্যাম্বুলেন্স সার্ভিস মৃতদেহ দীর্ঘ সময় সংরক্ষণ এবং দূরবর্তী স্থানে পরিবহনের জন্য অত্যন্ত গুরুত্বপূর্ণ। উন্নত ফ্রিজিং সিস্টেম মৃতদেহকে নিরাপদভাবে ঠান্ডা অবস্থায় রাখে, যাতে দূরপথেও মরদেহের অবস্থা পরিবর্তন না হয়। সম্মানজনক, নিরাপদ এবং দ্রুত ডেডবডি পরিবহনের জন্য এটি পরিবারের জন্য মানসিক স্বস্তি প্রদান করে।",

      image: "/Freezing-Ambulance-service-Shikder-ambulance.jpg",
      features: [
        "ফ্রোজেন বক্স/ফ্রিজার কেবিন থাকে",
        "কোয়ালিটি স্টিলের স্ট্রেচার",
        "তাপমাত্রাঃ (-৫ টু -২২) ডিগ্রী",
        "লাশ পরিবহন ও সংরক্ষন সাপোর্ট",
      ],
        link:"/freezing-ambulance-service"
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            শিকদার অ্যাম্বুলেন্স সার্ভিস, দ্রুত এবং নিরাপদ সেবা
          </h2>
          <p className=" text-muted-foreground max-w-3xl mx-auto">
            শিকদার অ্যাম্বুলেন্স সার্ভিস দ্রুত, নিরাপদ ও নির্ভরযোগ্য জরুরি পরিবহন প্রদান করে। ২৪/৭ সেবা। এসি, নন-এসি অ্যাম্বুলেন্স, লাইফ সাপোর্ট অ্যাম্বুলেন্স এবং {" "}
            <a
              href="https://24ambulance.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              লাশবাহী ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস
            </a>{" "}
            সহ ঢাকার যেকোনো স্থানে তাৎক্ষণিক সহায়তা পৌঁছে।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image src={service.image || "/default.png"} alt={service.title} fill className="object-cover" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

               <Link href={`${service.link}`}>  <Button variant="outline" className="group bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button></Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
