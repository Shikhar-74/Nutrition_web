import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DietCategoryCardProps {
  title: string;
  description: string;
  image: string;
}

export default function DietCategoryCard({
  title,
  description,
  image,
}: DietCategoryCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-stone-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
      <div className="h-48 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl drop-shadow-md">
          {title}
        </h3>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-stone-600 mb-6 flex-1">{description}</p>
        <Link href="/contact" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 group-hover:gap-2 transition-all">
          Explore Plan
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}
