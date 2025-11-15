import {
  ChevronDown,
  HelpCircle,
  Package,
  RotateCcw,
  Truck,
} from "lucide-react";
import React from "react";

const FaqComponent = () => {
  const faqData = [
    {
      id: "item-1",
      icon: Package,
      title: "শিকদার অ্যাম্বুলেন্স সার্ভিস ২৪/৭ কি সেবা প্রদান করে?",
      content: [
        "হ্যাঁ, আমরা ঢাকা শহরে ২৪ ঘন্টা, সপ্তাহের ৭ দিন জরুরি রোগী ও মৃতদেহ পরিবহন সেবা প্রদান করি।",
      ],
    },
    {
      id: "item-2",
      icon: Truck,
      title: "অ্যাম্বুলেন্স বুক করার পদ্ধতি কী?",
      content: [
        "আপনি ফোন কল, হটলাইন বা অনলাইন বুকিং-এর মাধ্যমে দ্রুত অ্যাম্বুলেন্স বুক করতে পারেন।",
      ],
    },
    {
      id: "item-3",
      icon: Truck,
      title: "ঢাকার বাইরে কি অ্যাম্বুলেন্স পাওয়া যায়?",
      content: [
        "হ্যাঁ, আমরা প্রয়োজন অনুযায়ী ঢাকার বাইরেও রোগী বা মৃতদেহ পরিবহন করি।",
      ],
    },
    {
      id: "item-4",
      icon: Truck,
      title: "সাশ্রয়ী মূল্যের অ্যাম্বুলেন্স কীভাবে পাওয়া যায়?",
      content: [
        "আমরা প্রতিযোগিতামূলক এবং বাজেট-ফ্রেন্ডলি মূল্যে দ্রুত ও নিরাপদ পরিবহন নিশ্চিত করি।",
      ],
    },
    {
      id: "item-5",
      icon: Truck,
      title: "অনলাইন বুকিং কি নিরাপদ এবং সহজ?",
      content: [
        "হ্যাঁ, অনলাইন বুকিং সম্পূর্ণ নিরাপদ এবং তাৎক্ষণিক নিশ্চিতকরণ পাওয়া যায়।",
      ],
    },
    {
      id: "item-6",
      icon: RotateCcw,
      title: "ঢাকার বাইরে কি সেবা পাওয়া যায়?",
      content: [
        "হ্যাঁ, ঢাকার বাইরে রোগী বা মৃতদেহ পরিবহনের জন্য প্রয়োজন অনুযায়ী সার্ভিস রয়েছে।",
      ],
    },
  ];

  return (
    <>
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg ">
          <HelpCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
          কাষ্টমারদের সচরাচর জিজ্ঞাসা
        </h2>
        <p className=" text-gray-600 max-w-2xl mx-auto leading-relaxed">
          শিকদার অ্যাম্বুলেন্স সার্ভিস ঢাকা শহরে ২৪/৭ জরুরি রোগী ও মৃতদেহ পরিবহন সেবা প্রদান করে। সহজ বুকিং ফোন কল বা অনলাইনের মাধ্যমে করা যায়। সাশ্রয়ী মূল্যে, দ্রুত এবং নিরাপদ পরিবহন নিশ্চিত করা হয়।
        </p>
      </div>
      <div className="">
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const Icon = item.icon;
            const isFirstItem = index === 0;

            return (
              <details
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/80 hover:bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-500"
                open={isFirstItem}
              >
                {/* Gradient overlay for open state */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50 pointer-events-none opacity-0 group-open:opacity-100 transition-opacity duration-500"></div>

                {/* Summary/Trigger */}
                <summary className="relative cursor-pointer list-none px-4 sm:px-8 py-6 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-gray-200 group-open:bg-gradient-to-br group-open:from-blue-500 group-open:to-purple-600 group-open:shadow-lg group-open:shadow-blue-500/25 transition-all duration-300">
                        <Icon className="w-6 h-6 text-gray-600 group-open:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="sm:text-xl font-semibold text-gray-800 group-open:text-gray-900 transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>

                    <div>
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 group-hover:bg-gray-200 group-open:bg-blue-100 group-open:text-blue-600 group-open:rotate-180 transition-all duration-300">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </summary>

                {/* Content */}
                <div className="px-8 pb-8 pt-2 animate-in slide-in-from-top-2 duration-500">
                  <div className=" sm:pl-10 md:pl-16">
                    <div className="space-y-4">
                      {item.content.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-gray-600 leading-relaxed text-balance opacity-0 group-open:opacity-100 transition-opacity duration-700"
                          style={{
                            transitionDelay: `${pIndex * 100 + 200}ms`,
                          }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced border effect when open */}
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-200 opacity-0 group-open:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute inset-0 rounded-2xl shadow-xl shadow-blue-500/10 opacity-0 group-open:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </details>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FaqComponent;
