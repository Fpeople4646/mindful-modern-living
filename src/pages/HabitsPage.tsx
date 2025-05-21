
import { Bed, Droplets, BookOpenText, Brain, Zap, Thermometer } from 'lucide-react';

const healthyHabits = [
  { name: "Tidur Cukup (7-9 Jam)", icon: Bed, benefit: "Memulihkan energi, meningkatkan fungsi kognitif, dan menjaga kesehatan emosional." },
  { name: "Olahraga Rutin", icon: Zap, benefit: "Meningkatkan kesehatan jantung, kekuatan otot, dan suasana hati." },
  { name: "Minum Cukup Air", icon: Droplets, benefit: "Menjaga hidrasi, fungsi organ optimal, dan kesehatan kulit." },
  { name: "Journaling", icon: BookOpenText, benefit: "Membantu refleksi diri, mengelola stres, dan mencapai tujuan." },
  { name: "Meditasi", icon: Brain, benefit: "Meningkatkan fokus, mengurangi stres, dan meningkatkan kesadaran diri." },
  { name: "Cold Exposure (Mandi Air Dingin)", icon: Thermometer, benefit: "Meningkatkan metabolisme, mengurangi peradangan, dan meningkatkan mood." },
  { name: "Refleksi Harian", icon: Brain, benefit: "Mengevaluasi hari, belajar dari pengalaman, dan merencanakan perbaikan." },
];

const HabitsPage = () => {
  return (
    <div className="content-container section-padding">
      <header className="text-center mb-10 animate-fade-in">
        <h1 className="text-4xl font-bold text-primary">Kebiasaan Sehat</h1>
        <p className="text-lg text-foreground/70 mt-2">Bangun kebiasaan positif untuk kesehatan fisik dan mental yang optimal.</p>
         <p className="text-sm text-muted-foreground mt-1">(Checklist harian dan grafik progres akan datang!)</p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {healthyHabits.map((habit, index) => (
          <div key={index} className="card-style animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-center mb-3">
              <habit.icon className="w-8 h-8 text-secondary mr-3" />
              <h3 className="text-xl font-semibold">{habit.name}</h3>
            </div>
            <p className="text-foreground/70">{habit.benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitsPage;
