
import { useEffect, useState } from 'react';
import { Lightbulb } from 'lucide-react';

const quotes = [
  "Disiplin adalah jembatan antara tujuan dan pencapaian.",
  "Kesehatan adalah kekayaan sejati, bukan kepingan emas dan perak.",
  "Satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang Anda lakukan.",
  "Mulai dari mana Anda berada. Gunakan apa yang Anda miliki. Lakukan apa yang Anda bisa.",
  "Tubuh yang sehat adalah kamar tamu bagi jiwa; tubuh yang sakit adalah penjara.",
  "Jangan menunggu. Waktunya tidak akan pernah tepat.",
];

const MotivationalQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className="bg-secondary/30 p-6 rounded-lg shadow-md my-8 animate-fade-in">
      <div className="flex items-center justify-center text-center">
        <Lightbulb className="w-8 h-8 mr-3 text-primary" />
        <p className="text-lg italic text-foreground/80">"{quote}"</p>
      </div>
    </div>
  );
};

export default MotivationalQuote;
