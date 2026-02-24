import { masteryData } from "@/data/masteryData";
import { MasteryCard } from "@/components/MasteryCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(175 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 100% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <header className="text-center mb-16 pb-8 relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="text-primary/60 uppercase tracking-[0.3em] text-xs font-semibold mb-3">// System Reference v2.5</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3 font-[Orbitron] text-glow">
            JS MASTERY
          </h1>
          <p className="text-muted-foreground text-lg">
            The 25 Pillars — Core Runtime Architecture
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {masteryData.map((item, index) => (
            <MasteryCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
