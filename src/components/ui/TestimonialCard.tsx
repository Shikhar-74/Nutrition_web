import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

export default function TestimonialCard({ name, role, content, image }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md border border-stone-100 flex flex-col h-full relative mt-6 transition-all duration-300">
      <div className="absolute -top-8 left-8">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md transform hover:scale-105 transition-transform"
        />
      </div>
      <div className="flex text-amber-400 mb-4 mt-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current" />
        ))}
      </div>
      <p className="text-stone-600 italic mb-6 grow relative z-10 leading-relaxed">
        "{content}"
      </p>
      <div className="border-t border-stone-100 pt-4 mt-auto">
        <h4 className="font-heading font-bold text-stone-900">{name}</h4>
        <p className="text-sm text-emerald-600 font-medium">{role}</p>
      </div>
    </div>
  );
}
