import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Diet Plans | Dr. Prashant Nutritionist",
  description: "Browse our specialized diet plans tailored for specific goals like weight loss, muscle gain, and disease management.",
};

const plans = [
  {
    title: "Mediterranean Wellness",
    description: "Focus on heart health and longevity with a balanced approach heavily featuring healthy fats, whole grains, and lean proteins.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Heart Health", "Anti-inflammatory"]
  },
  {
    title: "Plant-Based Power",
    description: "A 100% vegan meal blueprint optimized for maximum nutrient absorption, athletic performance, and environmental sustainability.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
    tags: ["Vegan", "High Fiber"]
  },
  {
    title: "PCOS Balancing Diet",
    description: "Targeted macros to reduce insulin resistance, balance hormones, and manage PCOS symptoms naturally through food.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop",
    tags: ["Hormone Health", "Low GI"]
  },

  {
    title: "Intermittent Fasting Guide",
    description: "Structured eating windows combined with nutrient-dense meals to optimize cellular autophagy, digestion, and focus.",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2070&auto=format&fit=crop",
    tags: ["Longevity", "Weight Loss"]
  }
];

export default function DietPlans() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-stone-900 mb-4">Specialized Diet Plans</h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Discover our science-backed blueprints. Remember, these are custom-tailored to your precise bodily needs during consultation.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {plans.map((plan, idx) => (
              <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-100 transition-all duration-300 flex flex-col transform hover:-translate-y-1">
                <div className="aspect-4/3 overflow-hidden relative">
                  <img 
                    src={plan.image} 
                    alt={plan.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {plan.tags.map(tag => (
                      <span key={tag} className="bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-8 flex flex-col grow">
                  <h3 className="font-heading font-bold text-2xl text-stone-900 mb-3">{plan.title}</h3>
                  <p className="text-stone-600 mb-6 grow leading-relaxed">{plan.description}</p>
                  <Link href="/contact" className="inline-flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors pt-4 border-t border-stone-100 mt-auto">
                    Get this plan <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
