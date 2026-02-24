import { MasteryItem } from "@/data/masteryData";

interface MasteryCardProps {
  item: MasteryItem;
  index: number;
}

export const MasteryCard = ({ item, index }: MasteryCardProps) => {
  return (
    <div className="group relative bg-card p-6 rounded-xl border border-border transition-all duration-300 hover:-translate-y-1 hover:glow-primary overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary opacity-60 group-hover:opacity-100 transition-opacity" />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/40 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent/40 rounded-tr-xl" />

      <span className="inline-block text-[0.65rem] bg-secondary px-2.5 py-0.5 rounded-full uppercase tracking-[0.15em] text-primary font-semibold mb-2 border border-primary/20">
        {item.cat}
      </span>
      <h2 className="text-primary text-lg font-bold mb-2 font-[Orbitron]">
        {index + 1}. {item.q}
      </h2>
      <span className="block text-muted-foreground italic mb-4 text-sm">
        ⚡ {item.l}
      </span>
      <pre className="bg-code p-4 rounded-lg overflow-x-auto border border-code-border relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <code className="text-accent font-mono text-sm whitespace-pre">
          {item.c}
        </code>
      </pre>
    </div>
  );
};
