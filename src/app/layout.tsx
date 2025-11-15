

import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import ImageProvider from "@/providers/ImageProvider";
import { Toaster } from "react-hot-toast";
import MediaModal from "@/components/shared/MediaModal";
import Script from "next/script";

export const metadata: Metadata = {
  title: "শিকদার আ্যাম্বুলেন্স সার্ভিস ঢাকা, জরুরি সেবা ২৪/৭ ",
  description:
    "শিকদার অ্যাম্বুলেন্স সার্ভিস। ঢাকা সহ সকল জেলায় রোগী ও লাশ পরিবহনে এসি, নন-এসি অ্যাম্বুলেন্স, এবং লাশ পরিবহনে লাশবাহী ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস দেওয়া হয়। দ্রুত এবং নিরাপদ সেবা নিশ্চিত। ",
  keywords:
    "শিকদার অ্যাম্বুলেন্স সার্ভিস ঢাকা, ঢাকা অ্যাম্বুলেন্স সার্ভিস, জরুরি অ্যাম্বুলেন্স ঢাকা, ২৪/৭ অ্যাম্বুলেন্স সার্ভিস ঢাকা, ঢাকায় ফ্রিজিং অ্যাম্বুলেন্স, ঢাকা ICU অ্যাম্বুলেন্স সার্ভিস, এসি অ্যাম্বুলেন্স ঢাকা, নন-এসি অ্যাম্বুলেন্স ঢাকা, ঢাকায় রোগী পরিবহন সার্ভিস, লাশ পরিবহন অ্যাম্বুলেন্স ঢাকা, ঢাকা শহরে জরুরি অ্যাম্বুলেন্স সার্ভিস, শিকদার ফ্রিজিং অ্যাম্বুলেন্স ২৪/৭, ঢাকায় হাসপাতাল থেকে রোগী পরিবহন, ঢাকা ICU গাড়ি বুকিং, ঢাকা-ভিত্তিক অ্যাম্বুলেন্স সার্ভিস, ঢাকায় এক্সপ্রেস অ্যাম্বুলেন্স সার্ভিস, দ্রুত অ্যাম্বুলেন্স সার্ভিস ঢাকা, ঢাকায় হাসপাতাল ট্রান্সফার, জরুরি রোগী পরিবহন ঢাকা, ঢাকায় মৃতদেহ পরিবহন, ঢাকা ২৪ ঘণ্টা অ্যাম্বুলেন্স, ঢাকা হসপিটাল ট্রান্সফার সার্ভিস, শিকদার অ্যাম্বুলেন্স বুকিং, ঢাকায় জরুরি চিকিৎসা পরিবহন, ঢাকা রোড অ্যাম্বুলেন্স সার্ভিস, ঢাকা ফাস্ট অ্যাম্বুলেন্স সার্ভিস, ঢাকা মেডিকেল ট্রান্সফার সার্ভিস, ঢাকা লাশ পরিবহন সার্ভিস, ICU অ্যাম্বুলেন্স ঢাকা শহর, ঢাকা ফ্রিজিং অ্যাম্বুলেন্স বুকিং, ঢাকা হাসপাতালে রোগী পরিবহন, ঢাকা জরুরি অ্যাম্বুলেন্স কনট্যাক্ট, শিকদার ২৪/৭ অ্যাম্বুলেন্স ঢাকা, ঢাকা অ্যাম্বুলেন্স সার্ভিস হটলাইন, ঢাকা হাসপাতালে এক্সপ্রেস অ্যাম্বুলেন্স, ঢাকা ICU অ্যাম্বুলেন্স বুকিং, ঢাকা ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস, ঢাকা এয়ারপোর্ট অ্যাম্বুলেন্স, ঢাকা হাসপাতালে রোগী ট্রান্সফার, ঢাকা অ্যাম্বুলেন্স ভাড়া, ঢাকায় এক্সপ্রেস রোগী পরিবহন, ঢাকা শহরে ফ্রিজিং অ্যাম্বুলেন্স, শিকদার এয়ারপোর্ট অ্যাম্বুলেন্স ঢাকা, ঢাকা জরুরি হাসপাতাল অ্যাম্বুলেন্স, ঢাকা শহরে হাসপাতাল অ্যাম্বুলেন্স সার্ভিস, ঢাকা দ্রুত রোগী পরিবহন, ঢাকা হাসপাতালে লাশ পরিবহন, ঢাকা ICU এবং লাইফ সাপোর্ট অ্যাম্বুলেন্স, ঢাকা শহরে ২৪/৭ ফ্রিজিং অ্যাম্বুলেন্স, ঢাকা জরুরি মেডিকেল ট্রান্সফার, ঢাকা শহরে এক্সপ্রেস অ্যাম্বুলেন্স সার্ভিস, ঢাকা হাসপাতাল অ্যাম্বুলেন্স বুকিং, ঢাকায় লাশ পরিবহন অ্যাম্বুলেন্স সার্ভিস, শিকদার হাসপাতালে রোগী পরিবহন, ঢাকা শহরে দ্রুত ICU অ্যাম্বুলেন্স, ঢাকা শহরে রোগী ট্রান্সফার সার্ভিস, ঢাকা ২৪ ঘণ্টা ফ্রিজিং অ্যাম্বুলেন্স, ঢাকা শহরে জরুরি মেডিকেল পরিবহন, ঢাকা দ্রুত অ্যাম্বুলেন্স সার্ভিস বুকিং, ঢাকা শহরে ICU রোগী পরিবহন, ঢাকা ফ্রিজিং অ্যাম্বুলেন্স হটলাইন, ঢাকা শহরে হাসপাতাল থেকে রোগী ট্রান্সফার, ঢাকা শহরে জরুরি লাশ পরিবহন, ঢাকা শহরে এসি অ্যাম্বুলেন্স বুকিং, ঢাকা শহরে নন-এসি অ্যাম্বুলেন্স, ঢাকা শহরে এক্সপ্রেস ICU অ্যাম্বুলেন্স, ঢাকায় দ্রুত রোগী পরিবহন সেবা, ঢাকা শহরে ২৪ ঘণ্টা অ্যাম্বুলেন্স, ঢাকা শহরে ফ্রিজিং অ্যাম্বুলেন্স বুকিং, ঢাকা হাসপাতাল থেকে রোগী ট্রান্সফার, ঢাকা শহরে জরুরি অ্যাম্বুলেন্স কনট্যাক্ট, ঢাকা হাসপাতালে রোগী পরিবহন সার্ভিস, ঢাকা শহরে ICU গাড়ি বুকিং, ঢাকা শহরে এক্সপ্রেস ফ্রিজিং অ্যাম্বুলেন্স, ঢাকা হাসপাতাল অ্যাম্বুলেন্স হটলাইন, ঢাকায় দ্রুত ICU অ্যাম্বুলেন্স সার্ভিস, ঢাকা শহরে জরুরি রোগী পরিবহন, ঢাকা ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস বুকিং, ঢাকা শহরে অ্যাম্বুলেন্স সার্ভিস হটলাইন, ঢাকা হাসপাতাল থেকে লাশ পরিবহন, ঢাকা শহরে এক্সপ্রেস রোগী পরিবহন সার্ভিস, ঢাকা শহরে ২৪ ঘণ্টা ICU অ্যাম্বুলেন্স, ঢাকায় জরুরি অ্যাম্বুলেন্স সার্ভিস বুকিং, ঢাকা শহরে দ্রুত ফ্রিজিং অ্যাম্বুলেন্স, ঢাকা শহরে হাসপাতাল রোগী ট্রান্সফার, ঢাকা শহরে ICU এবং লাইফ সাপোর্ট অ্যাম্বুলেন্স, ঢাকা হাসপাতাল অ্যাম্বুলেন্স সার্ভিস বুকিং, ঢাকা শহরে এক্সপ্রেস অ্যাম্বুলেন্স সেবা, ঢাকায় দ্রুত অ্যাম্বুলেন্স সার্ভিস হটলাইন, ঢাকা শহরে হাসপাতাল অ্যাম্বুলেন্স সার্ভিস বুকিং, ঢাকা শহরে জরুরি ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস, ঢাকা শহরে ২৪ ঘণ্টা রোগী পরিবহন সার্ভিস, ঢাকা শহরে ICU রোগী পরিবহন সার্ভিস, ঢাকায় দ্রুত হাসপাতালে রোগী পরিবহন, ঢাকা শহরে এক্সপ্রেস অ্যাম্বুলেন্স বুকিং, ঢাকা শহরে ফ্রিজিং অ্যাম্বুলেন্স কনট্যাক্ট, ঢাকা শহরে জরুরি রোগী ট্রান্সফার সার্ভিস, ঢাকা শহরে ২৪/৭ অ্যাম্বুলেন্স বুকিং, ঢাকা শহরে হাসপাতাল থেকে ICU রোগী পরিবহন, ঢাকা শহরে দ্রুত লাশ পরিবহন সার্ভিস, ঢাকায় ICU অ্যাম্বুলেন্স সেবা, ঢাকা শহরে ফ্রিজিং অ্যাম্বুলেন্স বুকিং হটলাইন, ঢাকা শহরে জরুরি অ্যাম্বুলেন্স সার্ভিস বুকিং, ঢাকায় রোগী পরিবহন এবং লাশ পরিবহন সার্ভিস, ঢাকা শহরে ICU এবং ফ্রিজিং অ্যাম্বুলেন্স সার্ভিস, ঢাকা শহরে ২৪/৭ দ্রুত অ্যাম্বুলেন্স সার্ভিস, ঢাকা শহরে হাসপাতাল রোগী ট্রান্সফার বুকিং, ঢাকায় এক্সপ্রেস অ্যাম্বুলেন্স সার্ভিস, Ambulance service, Emergency ambulance, 24/7 ambulance, ICU ambulance, AC ambulance, Non AC ambulance, Freezing ambulance, Dead body ambulance, Freezer ambulance, Emergency medical transport, Patient transport service, Dhaka ambulance service, Fast ambulance service, Rapid response ambulance, Hospital ambulance, Private ambulance, Medical emergency service, Critical care ambulance, Neonatal ambulance, Life support ambulance, ALS ambulance, BLS ambulance, Road ambulance, City ambulance service, Affordable ambulance, Best ambulance service, Nearby ambulance service, Ambulance in Dhaka, Quick ambulance service, Emergency support, Medical support ambulance, Emergency patient transfer, Long-distance ambulance, Local ambulance service, Reliable ambulance service, Professional ambulance service, On-call ambulance, 24 hour ambulance, Emergency rescue service, Ambulance booking, Online ambulance service, Ambulance contact number, Urgent medical transport, Ambulance provider, Emergency health transport, Covid ambulance service, Ventilator ambulance, Cardiac ambulance, Trauma ambulance, Accident ambulance, Dhaka emergency service, Fast medical transport, Mobile ICU ambulance, Emergency care ambulance, Advanced ambulance service, Emergency medical ambulance, Government ambulance service, Private medical transport, Airport ambulance service, Home to hospital ambulance, Hospital to hospital transfer, Safe ambulance service, Trusted ambulance service, Quality ambulance service, Medical transport Dhaka, Quick patient transfer, Emergency help center, Ambulance support team, Professional medical transport, Skilled ambulance staff, Ambulance for dead body, Mortuary ambulance, Ambulance service hotline, Dhaka 24/7 ambulance, Urgent ambulance number, Reliable patient transfer, Medical aid ambulance, Secure ambulance service, Emergency response Dhaka, On-time ambulance service, Critical patient ambulance, Oxygen support ambulance, Ambulance with paramedic, Emergency travel ambulance, Long route ambulance service, Emergency rush ambulance, Best emergency service, Medical van service, Quick ambulance Dhaka, Emergency vehicle service, Emergency medical help, City emergency ambulance, Dhaka ambulance provider, Fastest ambulance service, Emergency health care transport. ",
  authors: [{ name: "Shikder Ambulance" }],
  creator: "Shikder Ambulance",
  publisher: "Shikder Ambulance",
  metadataBase: new URL("https://shikderambulance.com"),
  alternates: {
    canonical: "https://shikderambulance.com",
  },
  openGraph: {
     url: "https://shikderambulance.com",
    siteName: "Shikder Ambulance",
    locale: "bn_BD",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/mohinranait/shikder-ambulance/shahadat/public/Shikder-Ambulance-Service-Ac-Ambulance.jpg",
        width: 1200,
        height: 630,
        alt: "Shikder Ambulance Service in Dhaka",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  verification: {
    google: "k9w6p571W9qlAmJr2Q9B-mCZ0Ab9xGP3mgZ9zuv5ssk",
  },
  category: "Ambulance Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="Shikder Ambulance" />
        <meta name="rating" content="general" />
        <link rel="canonical" href="https://shikderambulance.com" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
        <meta
          name="google-site-verification"
          content="k9w6p571W9qlAmJr2Q9B-mCZ0Ab9xGP3mgZ9zuv5ssk"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JB6HNSXYNH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JB6HNSXYNH');
          `}
        </Script>
      </head>

      <body className="font-sans antialiased bg-white text-gray-900">
        <AuthProvider>
          <ImageProvider>
            {children}
            <MediaModal />
            <Toaster />
          </ImageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
