
import MotivationalQuote from "@/components/MotivationalQuote";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Target, ShieldCheck, Brain } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: React.ElementType, title: string, description: string, delay: string }) => (
  <div className={`card-style text-center animate-fade-in`} style={{ animationDelay: delay }}>
    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-foreground/70">{description}</p>
  </div>
);

const HomePage = () => {
  return (
    <div className="content-container section-padding">
      <header className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl font-extrabold text-primary mb-4">
          Bangun Gaya Hidup Sehat & Disiplin
        </h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
          Panduan terstruktur untuk mencapai potensi terbaik Anda melalui rutinitas, kebiasaan positif, olahraga, dan nutrisi yang tepat.
        </p>
        <Button asChild size="lg" className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Link to="/rutinitas">Mulai Perjalanan Anda</Link>
        </Button>
      </header>

      <MotivationalQuote />

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
        <FeatureCard icon={Target} title="Rutinitas Terstruktur" description="Jadwal harian yang optimal untuk produktivitas dan kesejahteraan." delay="0.3s" />
        <FeatureCard icon={ShieldCheck} title="Kebiasaan Positif" description="Bangun kebiasaan baik yang mendukung kesehatan fisik dan mental." delay="0.4s" />
        <FeatureCard icon={Zap} title="Olahraga Efektif" description="Panduan latihan untuk kekuatan, kardio, dan fleksibilitas." delay="0.5s" />
        <FeatureCard icon={Brain} title="Nutrisi Seimbang" description="Pilihan makanan cerdas untuk energi dan vitalitas." delay="0.6s" />
      </section>

      <section className="text-center my-12 animate-fade-in" style={{ animationDelay: '0.7s' }}>
        <h2 className="text-3xl font-bold mb-6">Siap Mengubah Hidup Anda?</h2>
        <p className="text-lg text-foreground/70 max-w-xl mx-auto mb-6">
          Bergabunglah dalam perjalanan menuju versi diri Anda yang lebih sehat, lebih kuat, dan lebih disiplin.
        </p>
        <Button asChild variant="outline" size="lg">
          <Link to="/kebiasaan">Pelajari Kebiasaan Sehat</Link>
        </Button>
      </section>
    </div>
  );
};

export default HomePage;
