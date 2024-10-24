import ScrollSection from "./ScrollSection";

export default function TestScroll() {
    return (
      <main>
        <div className="bg-slate-600 text-slate-300 font-bold text-xl text-center py-6">
          SCROLL DOWN
        </div>
       <ScrollSection />
        <div className="bg-slate-600 text-slate-300 font-bold text-xl text-center py-6">
          SCROLL UP
        </div>
      </main>
    );
}
  
