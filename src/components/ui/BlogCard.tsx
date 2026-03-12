import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  date?: string;
  readTime?: string;
}

export default function BlogCard({
  title,
  description,
  image,
  date = "Just now",
  readTime = "5 min read",
}: BlogCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-stone-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      <div className="h-48 overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center text-xs text-stone-500 mb-3 space-x-4">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <h3 className="font-bold text-xl text-stone-900 mb-3 group-hover:text-emerald-600 transition-colors">
          {title}
        </h3>
        <p className="text-stone-600 mb-6 flex-1 text-sm line-clamp-3">
          {description}
        </p>
        <Link
          href="#"
          className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 text-sm group-hover:gap-2 transition-all mt-auto"
        >
          Read Article
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}
