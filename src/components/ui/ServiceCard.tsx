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
    <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-emerald-100 border border-stone-100 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-bold text-stone-900 mb-4">{title}</h3>
      <p className="text-stone-600 mb-6 grow leading-relaxed">{description}</p>
      <Link href={href} className="inline-flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
        Read more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
