
import { Bike, Zap, Weight, StretchVertical } from 'lucide-react'; // Assuming StretchVertical is similar to stretching icon

const workoutCategories = [
  { name: "Cardio", icon: Bike, examples: "Lari, Sprint, Bersepeda, HIIT", description: "Meningkatkan kesehatan jantung, daya tahan, dan membakar kalori." },
  { name: "Strength Training", icon: Weight, examples: "Angkat Beban, Bodyweight Exercise", description: "Membangun massa otot, meningkatkan metabolisme, dan kekuatan fungsional." },
  { name: "Berenang", icon: Zap, // Using Zap as placeholder, consider a swimming icon if available
    description: "Latihan seluruh tubuh yang rendah dampak, baik untuk sendi.", examples: "Gaya Bebas, Gaya Dada, Gaya Punggung" },
  { name: "Stretching & Fleksibilitas", icon: StretchVertical, examples: "Yoga, Pilates, Peregangan Dinamis & Statis", description: "Meningkatkan rentang gerak, mengurangi risiko cedera, dan relaksasi." },
];

const WorkoutCard = ({ icon: Icon, name, examples, description, delay }: { icon: React.ElementType, name: string, examples: string, description: string, delay: string }) => (
  <div className="card-style animate-fade-in" style={{ animationDelay: delay }}>
    <div className="flex items-center mb-3">
      <Icon className="w-10 h-10 text-primary mr-4" />
      <h2 className="text-2xl font-semibold">{name}</h2>
    </div>
    <p className="text-foreground/70 mb-2">{description}</p>
    <p className="text-sm text-muted-foreground mb-4"><strong>Contoh:</strong> {examples}</p>
    <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
      <p className="text-foreground/50">Placeholder Video Latihan</p>
    </div>
     <p className="text-xs text-muted-foreground mt-2 text-center">(Kalender latihan & tracking akan datang!)</p>
  </div>
);

const WorkoutsPage = () => {
  return (
    <div className="content-container section-padding">
      <header className="text-center mb-10 animate-fade-in">
        <h1 className="text-4xl font-bold text-primary">Olahraga dan Latihan</h1>
        <p className="text-lg text-foreground/70 mt-2">Temukan berbagai jenis latihan untuk mencapai tujuan kebugaran Anda.</p>
      </header>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {workoutCategories.map((category, index) => (
          <WorkoutCard 
            key={category.name} 
            icon={category.icon} 
            name={category.name} 
            examples={category.examples}
            description={category.description} 
            delay={`${index * 0.1}s`} 
          />
        ))}
      </div>
    </div>
  );
};

export default WorkoutsPage;
