
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense} from "react";
import Blogs from "./Blogs";
import Post from "@/models/Post";
import BlogSkeleton from "./BlogSkeleton";
import connectDB from "@/config/mongodb";
export const dynamic = "force-dynamic";

export async function BlogTeasers() {
  await connectDB();
  const blogs = await Post.find({ status: "Publish" })
    .select(
      "-content -contents -seoTitle -author -contactNumber -seoKeyword -reviews -layouts -updatedAt -__v",
    )
    .sort({ createdAt: -1 })
    .limit(6);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            সাশ্রয়ী মূল্যে দ্রুত ও নির্ভরযোগ্য ইমার্জেন্সি অ্যাম্বুলেন্স সার্ভিস
          </h2>
          <p className=" text-muted-foreground max-w-3xl mx-auto">
            সাশ্রয়ী মূল্যে ২৪/৭ দ্রুত ও নিরাপদ ইমার্জেন্সি অ্যাম্বুলেন্স সার্ভিস, যেখানে অভিজ্ঞ স্টাফ ও আধুনিক সরঞ্জাম দিয়ে রোগী বা মৃতদেহ নিরাপদভাবে পরিবহন করা হয়। ঢাকা হতে সকল জেলায় রোগী ও লাশ পরিবহনে জরুরী এ্যাম্বুলেন্স সার্বিস বুকিং করতে হেল্পলাইনে কল করুনঃ ০১৭১০০৬০০২০
          </p>
        </div>
        <Suspense fallback={<BlogSkeleton />}>
          <Blogs blogs={blogs} />
        </Suspense>

        <div className="text-center mt-12">
          <Link href={"/blogs"}>
            <Button variant="outline" size="lg">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
