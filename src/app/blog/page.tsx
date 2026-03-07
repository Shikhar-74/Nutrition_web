import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata = {
  title: "Nutrition Blog | Dr. Prashant",
  description: "Read the latest tips, recipes, and insights on holistic nutrition and wellness.",
};

const posts = [
  {
    title: "5 Hidden Sources of Sugar in Your 'Healthy' Diet",
    excerpt: "You might be consuming double your daily sugar limit without even knowing it. Here's what to look out for on nutrition labels.",
    image: "https://images.unsplash.com/photo-1622484211148-51f3b2319201?q=80&w=2000&auto=format&fit=crop",
    date: "Mars 01, 2024",
    category: "Nutrition Tips"
  },
  {
    title: "The Truth About Intermittent Fasting for Women",
    excerpt: "Does intermittent fasting work the same for women as it does for men? Here's the science behind hormones and fasting windows.",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=1908&auto=format&fit=crop",
    date: "Feb 24, 2024",
    category: "Hormone Health"
  },
  {
    title: "Gut Health 101: Building a Microbiome That Thrives",
    excerpt: "Learn how prebiotics and probiotics work together to support optimal digestion, immunity, and even mental clarity.",
    image: "https://images.unsplash.com/photo-1540845511934-7721db720d43?q=80&w=2072&auto=format&fit=crop",
    date: "Feb 15, 2024",
    category: "Digestive Health"
  },
  {
    title: "Quick 15-Minute High Protein Breakfast Recipes",
    excerpt: "Stop reaching for cereal. These quick, high-protein breakfast bowls will keep you full and energized until lunch.",
    image: "https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?q=80&w=2070&auto=format&fit=crop",
    date: "Feb 10, 2024",
    category: "Recipes"
  },
  {
    title: "Why You're Always Tired (And How Food Can Fix It)",
    excerpt: "Constant fatigue is often related to blood sugar spikes and crashes. Discover how to eat for sustained, all-day energy.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
    date: "Jan 28, 2024",
    category: "Wellness"
  },
  {
    title: "Navigating Social Events When You're on a Diet",
    excerpt: "How to enjoy weddings, parties, and vacations without completely derailing your nutritional goals.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    date: "Jan 14, 2024",
    category: "Lifestyle"
  }
];

export default function Blog() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-stone-900 mb-4">Wellness Insights</h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Practical advice, science-backed research, and healthy lifestyle tips to keep you inspired on your journey.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, idx) => (
              <article key={idx} className="group flex flex-col">
                <div className="aspect-16/10 overflow-hidden rounded-2rem mb-6 shadow-sm group-hover:shadow-md transition-shadow relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-stone-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-stone-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                
                <h3 className="font-heading font-bold text-2xl text-stone-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  <Link href="#">{post.title}</Link>
                </h3>
                
                <p className="text-stone-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link href="#" className="inline-flex items-center font-semibold text-emerald-600 hover:text-emerald-700 mt-auto pt-2">
                  Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-stone-100 text-stone-700 font-semibold rounded-full hover:bg-stone-200 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
