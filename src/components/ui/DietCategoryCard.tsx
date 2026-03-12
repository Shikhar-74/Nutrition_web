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
    <div className="group relative bg-white/80 backdrop-blur-md rounded-4xlshadow-sm hover:shadow-2xl hover:shadow-nutrition-primary/15 border border-white/60 overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col h-full z-10">
      <div className="h-56 overflow-hidden relative rounded-t-4xl">
        <div className="absolute inset-0 bg-nutrition-dark/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#111812]/90 via-[#111812]/40 to-transparent z-10"></div>
        <h3 className="absolute bottom-6 left-6 text-white font-heading font-bold text-2xl z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          {title}
        </h3>
      </div>
      <div className="p-8 flex-1 flex flex-col relative bg-white">
        <p className="text-muted-foreground font-light leading-relaxed mb-8 flex-1">{description}</p>
        
        <Link href="/contact" className="inline-flex items-center text-nutrition-primary font-semibold group-hover:text-nutrition-dark transition-colors mt-auto uppercase tracking-wider text-sm">
          Explore Plan
          <span className="relative overflow-hidden ml-2 w-5 h-5 flex items-center justify-center">
            <ArrowRight className="absolute w-4 h-4 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
            <ArrowRight className="absolute w-4 h-4 translate-x-0 opacity-100 group-hover:translate-x-full group-hover:opacity-0 transition-all duration-500 ease-out" />
          </span>
        </Link>
      </div>
    </div>
  );
}
