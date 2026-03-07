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
      case "Underweight": return "text-blue-500 bg-blue-50";
      case "Normal Weight": return "text-emerald-600 bg-emerald-50";
      case "Overweight": return "text-orange-500 bg-orange-50";
      case "Obese": return "text-red-500 bg-red-50";
      default: return "text-stone-800 bg-stone-100";
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-stone-100 p-8 max-w-md w-full mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
          <Calculator className="w-6 h-6" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-stone-900">BMI Calculator</h3>
      </div>
      
      <p className="text-stone-600 mb-6 text-sm">
        Find out if you are in a healthy weight range.
      </p>

      <form onSubmit={calculateBMI} className="space-y-4">
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-stone-700 mb-1">
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g., 170"
            className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all placeholder:text-stone-400"
          />
        </div>
        
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-stone-700 mb-1">
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g., 65"
            className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all placeholder:text-stone-400"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-200"
        >
          Calculate BMI
        </button>
      </form>

      {bmi !== null && (
        <div className="mt-8 pt-6 border-t border-stone-100 text-center animate-fade-in">
          <p className="text-stone-500 text-sm uppercase tracking-wider mb-1">Your Result</p>
          <div className="flex items-baseline justify-center gap-2 mb-3">
            <span className="text-5xl font-black text-stone-900">{bmi}</span>
            <span className="text-stone-500 font-medium">BMI</span>
          </div>
          <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${getCategoryColor(category)}`}>
            {category}
          </div>
        </div>
      )}
    </div>
  );
}
