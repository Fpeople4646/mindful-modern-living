
import { Egg, CircleHelp, Leaf, Fish, GlassWater, Coffee } from 'lucide-react'; // Using CircleHelp for supplements

const foodGroups = [
  { name: "Protein", icon: Egg, items: ["Telur", "Dada Ayam (tanpa kulit)", "Ikan (Salmon, Tuna, Kod)", "Daging Merah Tanpa Lemak", "Tahu & Tempe", "Kacang-kacangan & Biji-bijian"], benefits: "Membangun dan memperbaiki jaringan tubuh, produksi enzim dan hormon." },
  { name: "Karbohidrat Kompleks", icon: Leaf, items: ["Nasi Merah/Coklat", "Oatmeal", "Quinoa", "Ubi Jalar", "Roti Gandum Utuh", "Sayuran Berpati (Jagung, Kentang)"], benefits: "Sumber energi utama, kaya serat, membantu pencernaan." },
  { name: "Sayuran", icon: Leaf, items: ["Brokoli", "Bayam", "Kangkung", "Wortel", "Paprika", "Tomat", "Aneka Selada"], benefits: "Kaya vitamin, mineral, antioksidan, dan serat." },
  { name: "Buah-buahan", icon: Leaf, items: ["Apel", "Pisang", "Jeruk", "Berry (Stroberi, Blueberry)", "Alpukat", "Mangga"], benefits: "Sumber vitamin, mineral, serat, dan antioksidan alami." },
  { name: "Lemak Sehat", icon: Fish, items: ["Alpukat", "Kacang Almond, Walnut", "Biji Chia, Biji Rami", "Minyak Zaitun Extra Virgin", "Ikan Berlemak (Salmon, Sarden)"], benefits: "Kesehatan otak, penyerapan vitamin, produksi hormon." },
  { name: "Suplemen (Opsional)", icon: CircleHelp, items: ["Whey Protein", "Creatine", "Multivitamin", "Minyak Ikan (Omega-3)", "Vitamin D3"], benefits: "Mendukung kebutuhan nutrisi spesifik jika diperlukan." },
];

const healthyDrinks = [
  { name: "Air Mineral Berkualitas", icon: GlassWater, benefits: "Hidrasi optimal, mendukung semua fungsi tubuh." },
  { name: "Teh Hijau / Matcha", icon: Coffee, benefits: "Kaya antioksidan, meningkatkan metabolisme dan fokus." },
  { name: "Yerba Mate", icon: Coffee, benefits: "Sumber energi alami, meningkatkan konsentrasi." },
  { name: "Shake Protein", icon: Coffee, benefits: "Praktis untuk asupan protein tambahan, terutama setelah olahraga." },
];

const NutritionPage = () => {
  return (
    <div className="content-container section-padding">
      <header className="text-center mb-10 animate-fade-in">
        <h1 className="text-4xl font-bold text-primary">Panduan Makanan dan Nutrisi</h1>
        <p className="text-lg text-foreground/70 mt-2">Pilihan makanan dan minuman sehat untuk mendukung gaya hidup Anda.</p>
        <p className="text-sm text-muted-foreground mt-1">(Informasi nutrisi detail & rekomendasi akan datang!)</p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-secondary animate-fade-in">Kelompok Makanan Sehat</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodGroups.map((group, index) => (
            <div key={group.name} className="card-style animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center mb-3">
                <group.icon className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{group.name}</h3>
              </div>
              <p className="text-sm text-foreground/70 mb-2"><strong>Contoh:</strong> {group.items.join(", ")}.</p>
              <p className="text-sm text-muted-foreground"><strong>Manfaat:</strong> {group.benefits}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center text-secondary animate-fade-in" style={{ animationDelay: `${foodGroups.length * 0.1}s` }}>Minuman Sehat</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {healthyDrinks.map((drink, index) => (
            <div key={drink.name} className="card-style animate-fade-in" style={{ animationDelay: `${(foodGroups.length + index) * 0.1}s` }}>
              <div className="flex items-center mb-3">
                <drink.icon className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{drink.name}</h3>
              </div>
              <p className="text-sm text-foreground/70">{drink.benefits}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NutritionPage;
