"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

export default function BMICalculator() {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");
  const [error, setError] = useState<string>("");

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setBmi(null);
    setCategory("");

    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      setError("Please enter valid positive numbers for height and weight.");
      return;
    }

    // Height in cm to meters
    const heightInMeters = h / 100;
    const calculatedBmi = w / (heightInMeters * heightInMeters);
    const roundedBmi = parseFloat(calculatedBmi.toFixed(1));
    
    setBmi(roundedBmi);

    if (roundedBmi < 18.5) {
      setCategory("Underweight");
    } else if (roundedBmi >= 18.5 && roundedBmi < 24.9) {
      setCategory("Normal Weight");
    } else if (roundedBmi >= 25 && roundedBmi < 29.9) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Underweight": return "text-[#6A7768] bg-[#E8EDE5]";
      case "Normal Weight": return "text-[#1F3624] bg-[#BCE2B9] shadow-[0_0_20px_rgba(188,226,185,0.4)]";
      case "Overweight": return "text-amber-900 bg-amber-200";
      case "Obese": return "text-red-900 bg-red-200";
      default: return "text-foreground bg-muted";
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-nutrition-dark/5 border border-white/60 p-8 sm:p-10 max-w-md w-full mx-auto relative overflow-hidden group transition-all duration-500 hover:shadow-nutrition-dark/10">
      <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent pointer-events-none rounded-[2.5rem]"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center gap-3 mb-8">
        <div className="bg-[#E8EDE5] p-4 rounded-2xl text-nutrition-primary shadow-inner mb-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out">
          <Calculator className="w-8 h-8" />
        </div>
        <div>
          <h3 className="font-heading text-3xl font-extrabold text-foreground mb-2">BMI Calculator</h3>
          <p className="text-muted-foreground text-sm font-light">
            Find out if you are in a healthy weight range.
          </p>
        </div>
      </div>

      <form onSubmit={calculateBMI} className="space-y-5 relative z-10">
        <div>
          <label htmlFor="height" className="block text-xs font-bold text-nutrition-primary mb-2 uppercase tracking-wider ml-1">
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g., 170"
            className="w-full px-5 py-4 bg-white/50 rounded-2xl border border-white focus:border-nutrition-accent focus:ring-4 focus:ring-nutrition-accent/30 outline-none transition-all duration-300 placeholder:text-muted-foreground/50 text-lg shadow-inner"
          />
        </div>
        
        <div>
          <label htmlFor="weight" className="block text-xs font-bold text-nutrition-primary mb-2 uppercase tracking-wider ml-1">
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g., 65"
            className="w-full px-5 py-4 bg-white/50 rounded-2xl border border-white  focus:border-nutrition-accent focus:ring-4 focus:ring-nutrition-accent/30 outline-none transition-all duration-300 placeholder:text-muted-foreground/50 text-lg shadow-inner"
          />
        </div>

        {error && <p className="text-red-500 text-sm font-medium animate-in fade-in slide-in-from-top-2">{error}</p>}

        <button
          type="submit"
          className="w-full py-4 mt-2 bg-nutrition-dark text-white rounded-2xl font-bold text-lg hover:bg-nutrition-primary transition-all duration-300 shadow-xl shadow-nutrition-dark/20 hover:-translate-y-1 hover:shadow-nutrition-dark/30"
        >
          Calculate BMI
        </button>
      </form>

      {bmi !== null && (
        <div className="mt-8 pt-8 border-t border-muted relative z-10 text-center animate-in zoom-in-95 fade-in duration-500">
          <p className="text-[#6A7768] text-xs font-bold uppercase tracking-widest mb-2">Your Result</p>
          <div className="flex items-baseline justify-center gap-2 mb-4">
            <span className="text-6xl font-black text-foreground tracking-tighter drop-shadow-sm">{bmi}</span>
            <span className="text-muted-foreground font-semibold text-lg">BMI</span>
          </div>
          <div className={`inline-block px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-700 ease-in-out ${getCategoryColor(category)}`}>
            {category}
          </div>
        </div>
      )}
    </div>
  );
}
