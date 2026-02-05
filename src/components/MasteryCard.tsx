 import { MasteryItem } from "@/data/masteryData";
 
 interface MasteryCardProps {
   item: MasteryItem;
   index: number;
 }
 
 export const MasteryCard = ({ item, index }: MasteryCardProps) => {
   return (
     <div className="group bg-card p-6 rounded-xl border-t-4 border-t-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
       <span className="inline-block text-[0.65rem] bg-secondary px-2.5 py-0.5 rounded-full uppercase tracking-wider text-muted-foreground mb-2">
         {item.cat}
       </span>
       <h2 className="text-primary text-lg font-semibold mb-2">
         {index + 1}. {item.q}
       </h2>
       <span className="block text-muted-foreground italic mb-4 text-sm">
         💡 {item.l}
       </span>
       <pre className="bg-code p-4 rounded-lg overflow-x-auto border border-code-border">
         <code className="text-accent font-mono text-sm whitespace-pre">
           {item.c}
         </code>
       </pre>
     </div>
   );
 };