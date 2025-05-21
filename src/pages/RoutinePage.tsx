
import { CheckCircle, Coffee, BookOpen, Sunrise, Dumbbell, User, ShowerHead } from 'lucide-react';

const routineSteps = [
  { time: "04:00", activity: "Bangun Tidur & Minum Air", icon: Sunrise, description: "Awali hari dengan hidrasi dan kesegaran." },
  { time: "04:15", activity: "Push-up Ringan & Peregangan", icon: Dumbbell, description: "Aktifkan tubuh dengan gerakan ringan." },
  { time: "04:30", activity: "Cuci Muka Air Dingin", icon: ShowerHead, description: "Segarkan wajah dan tingkatkan kewaspadaan." },
  { time: "04:45", activity: "Doa / Meditasi", icon: User, description: "Tenangkan pikiran dan set niat untuk hari ini." },
  { time: "05:00", activity: "Journaling & Refleksi", icon: BookOpen, description: "Tuliskan pemikiran dan rencana Anda." },
  { time: "05:30", activity: "Membaca Buku", icon: BookOpen, description: "Perluas wawasan dan dapatkan inspirasi." },
  { time: "06:00", activity: "Olahraga Intensif", icon: Dumbbell, description: "Latihan utama untuk kekuatan dan kardio." },
  { time: "07:00", activity: "Mandi Air Dingin", icon: ShowerHead, description: "Tingkatkan energi dan pemulihan." },
  { time: "07:30", activity: "Sarapan Sehat", icon: Coffee, description: "Isi energi dengan makanan bergizi." },
  { time: "08:00", activity: "Persiapan Kerja", icon: User, description: "Siap untuk hari yang produktif." },
];

const RoutinePage = () => {
  return (
    <div className="content-container section-padding">
      <header className="text-center mb-10 animate-fade-in">
        <h1 className="text-4xl font-bold text-primary">Rutinitas Harian Terstruktur</h1>
        <p className="text-lg text-foreground/70 mt-2">Contoh jadwal pagi untuk memulai hari dengan produktif dan penuh energi.</p>
        <p className="text-sm text-muted-foreground mt-1">(Fitur kustomisasi jadwal akan datang!)</p>
      </header>

      <div className="space-y-8">
        {routineSteps.map((step, index) => (
          <div key={index} className="card-style flex items-start space-x-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
              <step.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{step.time} - {step.activity}</h3>
              <p className="text-foreground/70">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoutinePage;
