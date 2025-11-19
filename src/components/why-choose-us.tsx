import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, MapPin, DollarSign, Shield, Stethoscope } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Clock,
      title: "২৪/৭ জরুরি সেবা",
      description: "শিকদার অ্যাম্বুলেন্স সার্ভিস ঢাকা শহরে দিন-রাত, সপ্তাহের ৭ দিন, যেকোনো জরুরি অবস্থায় দ্রুত সাড়া দেয়।",
      color: "text-primary",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: "দ্রুত ও নিরাপদ পরিবহন",
      description: "আমাদের আধুনিক সরঞ্জাম ও প্রশিক্ষিত স্টাফ নিশ্চিত করে রোগী ও মৃতদেহ দ্রুত এবং নিরাপদভাবে গন্তব্যে পৌঁছায়।",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: MapPin,
      title: "অ্যাম্বুলেন্স সার্ভিসের ধরন সমূহ",
      description: "এসি অ্যাম্বুলেন্স, নন-এসি অ্যাম্বুলেন্স, এবং লাশবাহী ফ্রিজিং অ্যাম্বুলেন্স। ২৪/৭ জরুরি সেবা",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: DollarSign,
      title: "সাশ্রয়ী মূল্যে অ্যাম্বুলেন্স সেবা",
      description: "ঢাকায় দ্রুত, নিরাপদ এবং সাশ্রয়ী মূল্যের অ্যাম্বুলেন্স সার্ভিসের জন্য শিকদার অ্যাম্বুলেন্স সঠিক পছন্দ।",
      color: "text-accent-foreground",
      bgColor: "bg-accent",
    },
    {
      icon: Shield,
      title: "দ্রুত রেসপন্স টাইম",
      description: "জরুরি অবস্থায় দ্রুত রেসপন্স ও এক্সপ্রেস ডেলিভারি নিশ্চিত করে, যাতে জীবন রক্ষা করা যায়।",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Stethoscope,
      title: "সহজ বুকিং ও হটলাইন সেবা",
      description: "ফোন কল বা হটলাইনের মাধ্যমে সহজেই অ্যাম্বুলেন্স বুক করা যায়।",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">কেন শিকদার অ্যাম্বুলেন্স সার্ভিস বেছে নিবেন?</h2>
          <p className=" text-muted-foreground max-w-3xl mx-auto">
            শিকদার অ্যাম্বুলেন্স সার্ভিস দ্রুত, নিরাপদ এবং মানসম্মত সেবা প্রদান করে। রোগী পরিবহনে এসি, নন-এসি অ্যাম্বুলেন্স, এবং মৃতদেহ পরিবহনে লাশবাহী ফ্রিজিং গাড়ির সেবা দিয়ে থাকি। প্রতিটি পরিবহন নিরাপদ, নির্ভরযোগ্য এবং সম্মানজনক হয়।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-premium shadow-premium-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${feature.bgColor} ${feature.color}`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
