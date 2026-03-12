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
    <div className="bg-white/90 backdrop-blur-md rounded-[2rem] shadow-lg border border-white/50 overflow-hidden hover:shadow-2xl hover:shadow-[#2B5740]/15 hover:-translate-y-2 transition-all duration-500 group flex flex-col">
      <div className="flex aspect-video w-full overflow-hidden relative border-b border-muted">
        <div className="w-1/2 relative overflow-hidden bg-stone-100">
          <Image
            src={beforeImage}
            alt="Before Transformation"
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out mix-blend-multiply sm:mix-blend-normal"
          />
          <div className="absolute top-3 left-3 bg-[#1F3624]/80 text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full font-bold backdrop-blur-md">Before</div>
        </div>
        <div className="w-1/2 relative border-l-[3px] border-[#BCE2B9] overflow-hidden bg-stone-100">
          <Image
            src={afterImage}
            alt="After Transformation"
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-3 right-3 bg-[#2B5740]/90 text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full font-bold backdrop-blur-md">After</div>
        </div>
      </div>
      <div className="p-8 flex-grow flex flex-col">
        <div className="inline-block self-start py-1.5 px-4 rounded-full bg-[#E8EDE5] text-[#2B5740] text-xs font-extrabold tracking-wide mb-6 uppercase">
          {resultDetails}
        </div>
        <p className="text-muted-foreground italic leading-relaxed font-light text-black/80">"{testimonial}"</p>
      </div>
    </div>
  );
}
