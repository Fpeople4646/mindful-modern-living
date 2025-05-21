
import React from 'react';
import { CalendarDays, Zap, Coffee, Bed, BookOpen, Dumbbell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner'; // Using sonner for toast

const samplePlan = [
  { time: "06:00 - 06:30", activity: "Bangun & Meditasi Pagi", icon: Bed, category: "Mental" },
  { time: "06:30 - 07:00", activity: "Olahraga Ringan (Yoga/Peregangan)", icon: Dumbbell, category: "Fisik" },
  { time: "07:00 - 07:30", activity: "Sarapan Sehat & Bergizi", icon: Coffee, category: "Nutrisi" },
  { time: "09:00 - 12:00", activity: "Sesi Kerja Fokus 1", icon: Zap, category: "Produktivitas" },
  { time: "12:00 - 13:00", activity: "Makan Siang & Istirahat", icon: Coffee, category: "Nutrisi" },
  { time: "13:00 - 16:00", activity: "Sesi Kerja Fokus 2", icon: Zap, category: "Produktivitas" },
  { time: "17:00 - 18:00", activity: "Olahraga Intensif / Hobi", icon: Dumbbell, category: "Fisik" },
  { time: "19:00 - 20:00", activity: "Makan Malam Bersama Keluarga", icon: User, category: "Sosial" },
  { time: "20:00 - 21:00", activity: "Waktu Bersantai / Membaca", icon: BookOpen, category: "Mental" },
  { time: "21:00 - 21:30", activity: "Persiapan Tidur", icon: Bed, category: "Istirahat" },
];

const RencanaHarianPage = () => {
  const handleGeneratePlan = () => {
    // Placeholder for future dynamic plan generation logic
    toast.success("Rencana Harian Dibuat!", {
      description: "Ini adalah contoh rencana. Fitur kustomisasi akan segera hadir.",
    });
  };

  return (
    <div className="content-container section-padding">
      <header className="text-center mb-10 animate-fade-in">
        <CalendarDays className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-primary">Rencana Harian Kustom Anda</h1>
        <p className="text-lg text-foreground/70 mt-2">
          Atur jadwal harian yang optimal untuk produktivitas, kesehatan, dan keseimbangan hidup.
        </p>
      </header>

      <div className="mb-8 p-6 card-style animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-2xl font-semibold mb-4">Buat Rencana Anda</h2>
        <p className="text-foreground/70 mb-4">
          Fitur untuk menyesuaikan preferensi Anda (waktu mulai, fokus aktivitas, dll.) akan segera tersedia. 
          Untuk saat ini, lihat contoh rencana di bawah ini.
        </p>
        <Button onClick={handleGeneratePlan} size="lg">
          <Zap className="mr-2 h-5 w-5" /> Hasilkan Contoh Rencana
        </Button>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-center mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>Contoh Rencana Harian</h2>
        {samplePlan.map((item, index) => (
          <div 
            key={index} 
            className="card-style flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4 animate-fade-in"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mb-3 sm:mb-0">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold">{item.time} - {item.activity}</h3>
              <p className="text-sm text-muted-foreground">Kategori: {item.category}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: `${0.4 + samplePlan.length * 0.1}s` }}>
        <p className="text-foreground/70">
          Ini hanyalah contoh. Nantikan fitur kustomisasi penuh untuk membuat rencana yang benar-benar sesuai dengan Anda!
        </p>
      </div>
    </div>
  );
};

export default RencanaHarianPage;
