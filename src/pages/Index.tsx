import { masteryData } from "@/data/masteryData";
import { MasteryCard } from "@/components/MasteryCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center border-b-2 border-primary mb-12 pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            JS Mastery: The 25 Pillars
          </h1>
          <p className="text-muted-foreground">
            Click "View Source" or inspect this page to keep your skills sharp.
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
