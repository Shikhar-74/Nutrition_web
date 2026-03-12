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
    <div className="group relative bg-white/80 backdrop-blur-md rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-[#2B5740]/10 border border-white/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full z-10">
      {/* Hover Background Reveal */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8EDE5]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      <div className="w-16 h-16 bg-[#E8EDE5] text-[#2B5740] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#1F3624] group-hover:text-[#BCE2B9] group-hover:rotate-3 transition-all duration-500 ease-out shadow-sm">
        {icon}
      </div>
      <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-[#2B5740] transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground mb-8 flex-grow leading-relaxed font-light">{description}</p>
      
      <Link href={href} className="inline-flex items-center text-[#2B5740] font-semibold group-hover:text-[#1F3624] transition-colors mt-auto uppercase tracking-wider text-sm">
        Read more 
        <span className="relative overflow-hidden ml-2 w-5 h-5 flex items-center justify-center">
          <ArrowRight className="absolute w-4 h-4 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
          <ArrowRight className="absolute w-4 h-4 translate-x-0 opacity-100 group-hover:translate-x-full group-hover:opacity-0 transition-all duration-500 ease-out" />
        </span>
      </Link>
    </div>
  );
}
