import { Star } from 'lucide-react';
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

export default function TestimonialCard({ name, role, content, image }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-[2.5rem] p-8 pb-10 shadow-sm hover:shadow-xl hover:shadow-nutrition-primary/5 border border-stone-100/60 flex flex-col h-full relative transition-all duration-500 group hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-6 pt-2">
        <div className="relative">
          <div className="absolute inset-0 bg-nutrition-accent rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
          <Image
            src={image}
            alt={name}
            width={60}
            height={60}
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm relative z-10"
          />
        </div>
        <div>
          <h4 className="font-heading font-black text-foreground text-lg leading-tight">{name}</h4>
          <p className="text-sm text-nutrition-primary font-bold uppercase tracking-wider">{role}</p>
        </div>
      </div>

      <div className="flex text-amber-400 mb-6 space-x-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>

      <div className="relative">
        <svg className="absolute -top-4 -left-2 w-8 h-8 text-nutrition-accent/20 -z-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.851h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.437.917-4 3.638-4 5.851h4v10h-10z" />
        </svg>
        <p className="text-muted-foreground italic grow relative z-10 leading-relaxed text-lg pl-2">
          {content}
        </p>
      </div>
    </div>
  );
}
