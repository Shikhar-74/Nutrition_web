import Image from "next/image";

interface TransformationCardProps {
  beforeImage: string;
  afterImage: string;
  resultDetails: string;
  testimonial: string;
}

export default function TransformationCard({
  beforeImage,
  afterImage,
  resultDetails,
  testimonial,
}: TransformationCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-stone-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="flex aspect-video w-full overflow-hidden relative">
        <div className="w-1/2 relative">
          <img
            src={beforeImage}
            alt="Before Transformation"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 bg-stone-900/70 text-white text-xs px-2 py-1 rounded font-semibold backdrop-blur-sm">Before</div>
        </div>
        <div className="w-1/2 relative border-l-4 border-emerald-500">
          <img
            src={afterImage}
            alt="After Transformation"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-emerald-600/90 text-white text-xs px-2 py-1 rounded font-semibold backdrop-blur-sm">After</div>
        </div>
      </div>
      <div className="p-6">
        <div className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold mb-4">
          {resultDetails}
        </div>
        <p className="text-stone-600 italic">"{testimonial}"</p>
      </div>
    </div>
  );
}
