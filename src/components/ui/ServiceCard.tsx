import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}

export default function ServiceCard({ title, description, icon, href = "/services" }: ServiceCardProps) {
  return (
    <Link href={href} className="group relative block w-full">
      <div className="bg-white/90 backdrop-blur-sm rounded-[3rem] p-6 pr-10 shadow-sm hover:shadow-xl hover:shadow-[#2B5740]/10 border border-stone-100/60 transition-all duration-500 hover:-translate-y-1.5 flex items-center gap-6 h-full overflow-hidden">
        {/* Hover Background Reveal */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-nutrition-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

        <div className="w-20 h-20 bg-nutrition-accent/10 text-nutrition-primary rounded-full flex items-center justify-center shrink-0 group-hover:bg-nutrition-primary group-hover:text-white transition-all duration-500 ease-out shadow-sm border border-nutrition-accent/20">
          <div className="group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-nutrition-primary transition-colors duration-300">
              {title}
            </h3>
            <ArrowRight className="w-5 h-5 text-nutrition-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
