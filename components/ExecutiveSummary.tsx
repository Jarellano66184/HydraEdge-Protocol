
import React from 'react';
import { 
  BookOpen, 
  Users, 
  Zap, 
  TrendingUp, 
  Globe, 
  ArrowRight,
  Quote,
  DollarSign,
  Beaker
} from 'lucide-react';
import ProductShowcase from './ProductShowcase';
import PersonaCard from './PersonaCard';
import StakeholderMap from './StakeholderMap';
import FinancialChart from './FinancialChart';
import IngredientShowcase from './IngredientShowcase';
import DiabeticBenefits from './DiabeticBenefits';
import { PERSONAS, FINANCIALS_COGS, BUDGET_ALLOCATION, USE_OF_FUNDS_BREAKDOWN } from '../constants';

const ExecutiveSummary: React.FC = () => {
  return (
    <div className="space-y-24 animate-fade-in pb-20">
      
      {/* SECTION 1: THE STORY */}
      <section className="space-y-8 relative">
        <div className="absolute -left-12 top-0 text-9xl font-black text-white/5 opacity-50 select-none -z-10">01</div>
        <div className="border-b border-hydra-green/30 pb-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-white flex items-center gap-3">
            <BookOpen className="text-hydra-green" size={32} />
            The Story
          </h2>
          <p className="text-gray-400 mt-2 font-mono text-sm uppercase tracking-wider">Origin & Evolution</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-gray-200 leading-relaxed font-light">
              It started with a crash. Our founder, <span className="text-hydra-green font-bold">Johnathan Arellano</span>, a D1 collegiate athlete, found himself failing film study sessions. The reason? The massive sugar crash from the sports drinks he chugged during practice.
            </p>
            <p className="text-gray-400 leading-relaxed">
              He realized modern performers are forced into a binary choice: <span className="text-white">Physical Hydration</span> (sugary sports drinks) or <span className="text-white">Mental Energy</span> (caffeinated energy drinks). There was no single solution for the <strong>"Flow State"</strong>—a condition requiring both hydration and cognitive clarity.
            </p>
            <div className="bg-zinc-900 border-l-4 border-hydra-pink p-6 rounded-r-lg">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <Zap size={16} className="text-hydra-pink" />
                The Pivot (Week 11)
              </h4>
              <p className="text-sm text-gray-400 italic">
                "During beta testing, athletes loved the energy but felt the Zero Sugar version lacked 'hydration speed'. We pivoted by adding <span className="text-white">L-Alanine & L-Glutamine</span>, restoring rapid absorption mechanics without the insulin spike."
              </p>
            </div>
          </div>
          <div className="relative h-full min-h-[300px] bg-gradient-to-br from-zinc-800 to-black rounded-xl p-8 border border-white/10 flex flex-col justify-center items-center text-center">
            <Quote className="text-hydra-green/20 absolute top-4 left-4" size={64} />
            <h3 className="text-2xl font-bold text-white mb-4 z-10">
              "We aren't selling a drink. We are selling Neuro-Resilience."
            </h3>
            <div className="w-16 h-1 bg-hydra-green rounded-full mb-4"></div>
            <p className="text-gray-500 text-sm z-10">HydraEdge Mission Statement</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE BUILT */}
      <section className="space-y-16 relative">
        <div className="absolute -left-12 top-0 text-9xl font-black text-white/5 opacity-50 select-none -z-10">02</div>
        
        {/* Header */}
        <div className="border-b border-hydra-green/30 pb-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-white flex items-center gap-3">
            <Zap className="text-hydra-green" size={32} />
            What We Built
          </h2>
          <p className="text-gray-400 mt-2 font-mono text-sm uppercase tracking-wider">The Solution</p>
        </div>

        <div className="mb-8">
          <p className="text-lg text-gray-300 max-w-3xl mb-8">
            The world's first <strong>Cognitive Hydration</strong> system. We developed a proprietary powdered stick-pack format that combines clinical doses of electrolytes with brain-derived neurotrophic factors (BDNF) from upcycled Cascara fruit.
          </p>
        </div>
        
        {/* Full Product Showcase Component */}
        <ProductShowcase />

        {/* Master Ingredient List */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <Beaker className="text-hydra-green" />
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Scientific Formulation</h3>
          </div>
          <IngredientShowcase />
        </div>
      </section>

      {/* SECTION 3: WHO BENEFITS */}
      <section className="space-y-8 relative">
        <div className="absolute -left-12 top-0 text-9xl font-black text-white/5 opacity-50 select-none -z-10">03</div>
        <div className="border-b border-hydra-green/30 pb-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-white flex items-center gap-3">
            <Users className="text-hydra-green" size={32} />
            Who Benefits
          </h2>
          <p className="text-gray-400 mt-2 font-mono text-sm uppercase tracking-wider">Target Personas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PERSONAS.map((p, i) => <PersonaCard key={i} persona={p} />)}
        </div>

        {/* Metabolic Mechanics (Diabetic Deep Dive) */}
        <DiabeticBenefits />
      </section>

      {/* SECTION 4: WHY IT MATTERS */}
      <section className="space-y-8 relative">
        <div className="absolute -left-12 top-0 text-9xl font-black text-white/5 opacity-50 select-none -z-10">04</div>
        <div className="border-b border-hydra-green/30 pb-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-white flex items-center gap-3">
            <Globe className="text-hydra-green" size={32} />
            Why It Matters
          </h2>
          <p className="text-gray-400 mt-2 font-mono text-sm uppercase tracking-wider">Impact & Ecosystem</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
             <h3 className="text-xl font-bold text-white mb-4">Solving the Waste Crisis</h3>
             <p className="text-gray-400 mb-6">
               The coffee industry discards billions of pounds of <strong>Cascara</strong> (coffee fruit) annually. This fruit is potent in BDNF (Brain-Derived Neurotrophic Factor). HydraEdge upcycles this waste, creating a sustainable supply chain that benefits farmers and consumers alike.
             </p>
             <ul className="space-y-3">
               <li className="flex items-start gap-3">
                 <div className="mt-1 bg-hydra-green/20 p-1 rounded">
                    <ArrowRight size={14} className="text-hydra-green" />
                 </div>
                 <span className="text-gray-300">Diverts agricultural waste from landfills.</span>
               </li>
               <li className="flex items-start gap-3">
                 <div className="mt-1 bg-hydra-green/20 p-1 rounded">
                    <ArrowRight size={14} className="text-hydra-green" />
                 </div>
                 <span className="text-gray-300">Provides "Safe Focus" for kids (Dye-free, Caffeine-free).</span>
               </li>
               <li className="flex items-start gap-3">
                 <div className="mt-1 bg-hydra-green/20 p-1 rounded">
                    <ArrowRight size={14} className="text-hydra-green" />
                 </div>
                 <span className="text-gray-300">Supports metabolic health for diabetics via Magnesium Malate.</span>
               </li>
             </ul>
          </div>
          <div>
            <StakeholderMap />
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT PERFORMS */}
      <section className="space-y-8 relative">
        <div className="absolute -left-12 top-0 text-9xl font-black text-white/5 opacity-50 select-none -z-10">05</div>
        <div className="border-b border-hydra-green/30 pb-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-white flex items-center gap-3">
            <TrendingUp className="text-hydra-green" size={32} />
            How It Performs
          </h2>
          <p className="text-gray-400 mt-2 font-mono text-sm uppercase tracking-wider">Viability & Investment</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Unit Economics */}
          <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">Unit Economics</h3>
                <span className="bg-hydra-green/20 text-hydra-green px-3 py-1 rounded text-xs font-bold">73% MARGIN</span>
             </div>
             <FinancialChart 
              title="Cost Breakdown (Per Stick)" 
              type="bar" 
              data={FINANCIALS_COGS} 
            />
            <p className="mt-4 text-xs text-gray-500 italic">
              *Elite margins achieved through direct sourcing of Cascara and efficient stick-pack manufacturing ($0.41 COGS vs $1.56 MSRP).
            </p>
          </div>

          {/* Key Investor Takeaway */}
          <div className="bg-gradient-to-br from-hydra-green/10 to-transparent border border-hydra-green/30 p-8 rounded-xl flex flex-col justify-center">
            <DollarSign className="text-hydra-green mb-4" size={40} />
            <h3 className="text-2xl font-bold text-white mb-4">Capital Efficiency</h3>
            <p className="text-xl text-white font-medium italic mb-6">
              "Every dollar is allocated to growth and inventory. We are not taking salaries. We are buying product to sell and acquiring customers to scale."
            </p>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">Total Raise</div>
                <div className="text-4xl font-black text-white">$150,000</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">Launch</div>
                <div className="text-xl font-bold text-hydra-green">Feb 2026</div>
              </div>
            </div>
          </div>
        </div>

        {/* Use of Funds Breakdown */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
          <div className="p-6 bg-zinc-900 border-b border-zinc-800 flex flex-col md:flex-row justify-between md:items-center gap-4">
             <h3 className="text-xl font-bold text-white">Use of Funds: $150,000 Allocation</h3>
             <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-2 h-2 rounded-full bg-hydra-green"></span>
                Strategic Deployment
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
             {USE_OF_FUNDS_BREAKDOWN.map((fund, idx) => (
                <div key={idx} className="p-6 group hover:bg-zinc-900 transition-colors">
                  <div className="mb-3">
                     <span className={`text-2xl font-bold block ${fund.color}`}>{fund.percentage}%</span>
                     <span className="text-xs text-gray-500 font-mono">{fund.amount}</span>
                  </div>
                  <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide h-10 flex items-center">{fund.category}</h4>
                  <ul className="space-y-3">
                     {fund.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs">
                           <span className="block text-gray-300 font-semibold mb-0.5">{item.label}</span>
                           <span className="block text-gray-500 leading-tight">{item.detail}</span>
                        </li>
                     ))}
                  </ul>
                </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ExecutiveSummary;
