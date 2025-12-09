
import React, { useState } from 'react';
import { 
  Menu, 
  ChevronRight, 
  Droplets,
  DollarSign,
  Rocket,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  TrendingUp,
  Recycle,
  Globe,
  Leaf,
  Users,
  Target,
  Beaker,
  FlaskConical,
  X,
  ClipboardList
} from 'lucide-react';
import { NAVIGATION_ITEMS, PERSONAS, FINANCIALS_COGS, BUDGET_ALLOCATION, USE_OF_FUNDS_BREAKDOWN, PROTOCOL_SECTIONS, WHY_IT_MATTERS, NARRATIVE_BEATS, FORMULA_EVOLUTION } from './constants';
import GeminiAssistant from './components/GeminiAssistant';
import StakeholderMap from './components/StakeholderMap';
import FinancialChart from './components/FinancialChart';
import PersonaCard from './components/PersonaCard';
import ProductShowcase from './components/ProductShowcase';
import IngredientShowcase from './components/IngredientShowcase';
import DiabeticBenefits from './components/DiabeticBenefits';
import CrashCycleChart from './components/CrashCycleChart';
import SustainabilityCycle from './components/SustainabilityCycle';
import NarrativeSpotlight from './components/NarrativeSpotlight';
import CompetitiveComparison from './components/CompetitiveComparison';
import SurveyAnalysis from './components/SurveyAnalysis';

function App() {
  const [activeView, setActiveView] = useState<string>('purpose');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case 'purpose':
        return (
          <div className="space-y-12 animate-fade-in">
            <div className="border-b border-white/10 pb-6 flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">Purpose & Problem</h2>
                <p className="text-xl text-gray-400">Defining the core human need.</p>
              </div>
              <Target size={40} className="text-hydra-green opacity-50 hidden md:block" />
            </div>

            {/* Narrative Injection: The Origin Story */}
            <NarrativeSpotlight beat={NARRATIVE_BEATS.origin} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-4">The "Crash Cycle"</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Athletes and students are currently trapped. They rely on high-sugar sports drinks for hydration (leading to insulin spikes) or synthetic caffeine energy drinks for focus (leading to adrenal fatigue).
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-red-400 text-sm font-bold">
                       <AlertCircle size={16} />
                       Result: Inconsistent performance and "brain fog".
                    </div>
                 </div>

                 <div className="bg-gradient-to-r from-hydra-green/10 to-transparent p-6 rounded-xl border-l-4 border-hydra-green">
                    <h3 className="text-xl font-bold text-white mb-2">Problem Statement</h3>
                    <p className="text-lg text-white/90 italic">
                      "Modern performers are forced to choose between physical hydration and mental energy. There is no single solution for the 'Flow State'—a condition requiring both hydration and cognitive clarity."
                    </p>
                 </div>
              </div>

              {/* Visualization: Crash Cycle */}
              <div className="space-y-4">
                 <h3 className="text-sm font-mono text-gray-500 uppercase tracking-wider text-center mb-2">Physiological Comparison</h3>
                 <CrashCycleChart />
              </div>
            </div>

            {/* Strategic Takeaway */}
            <div className="mt-8 border-t border-white/10 pt-6">
               <h4 className="text-xs font-bold text-hydra-green uppercase tracking-widest mb-2">Why It Matters</h4>
               <p className="text-gray-400 italic">"{WHY_IT_MATTERS.purpose}"</p>
            </div>
          </div>
        );

      case 'personas':
        return (
          <div className="space-y-12 animate-fade-in">
            <div className="border-b border-white/10 pb-6 flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">Personas & Insights</h2>
                <p className="text-xl text-gray-400">Understanding who we serve.</p>
              </div>
              <Users size={40} className="text-hydra-green opacity-50 hidden md:block" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {PERSONAS.map((p, i) => <PersonaCard key={i} persona={p} />)}
            </div>

            {/* Narrative Injection: Emotional Needs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <NarrativeSpotlight beat={NARRATIVE_BEATS.parenting} />
              <div className="bg-zinc-900 p-8 rounded-xl border border-white/5 my-8 flex flex-col justify-center">
                 <h3 className="text-xl font-bold text-white mb-6">Key Insight Synthesis</h3>
                 <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <p className="text-sm text-gray-400">Students experiencing "caffeine crash" before 2 PM</p>
                       <div className="text-2xl font-black text-hydra-green">85%</div>
                    </div>
                    <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                       <div className="bg-hydra-green h-full w-[85%]"></div>
                    </div>
                    <div className="flex items-center justify-between">
                       <p className="text-sm text-gray-400">Athletes citing "sugar" as #1 hesitation</p>
                       <div className="text-2xl font-black text-hydra-blue">100%</div>
                    </div>
                    <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                       <div className="bg-hydra-blue h-full w-full"></div>
                    </div>
                 </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
               <h4 className="text-xs font-bold text-hydra-green uppercase tracking-widest mb-2">Why It Matters</h4>
               <p className="text-gray-400 italic">"{WHY_IT_MATTERS.personas}"</p>
            </div>
          </div>
        );

      case 'stakeholders':
        return (
          <div className="space-y-8 animate-fade-in">
             <div className="border-b border-white/10 pb-6 flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">Stakeholder Map</h2>
                <p className="text-xl text-gray-400">Mapping the ecosystem value chain.</p>
              </div>
              <Recycle size={40} className="text-hydra-green opacity-50 hidden md:block" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-2">
                  <StakeholderMap />
               </div>
               <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 h-fit">
                  <h3 className="text-lg font-bold text-white mb-4">Value Flow Analysis</h3>
                  <ul className="space-y-4">
                     <li className="relative pl-6 border-l border-zinc-700">
                        <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-hydra-green"></div>
                        <strong className="text-white block">Sustainable Farmers</strong>
                        <span className="text-sm text-gray-400">Provide upcycled Cascara, monetizing agricultural waste.</span>
                     </li>
                     <li className="relative pl-6 border-l border-zinc-700">
                        <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-white"></div>
                        <strong className="text-white block">Co-Packer (USA)</strong>
                        <span className="text-sm text-gray-400">FDA Certified manufacturing & filling.</span>
                     </li>
                     <li className="relative pl-6 border-l border-zinc-700">
                        <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-hydra-blue"></div>
                        <strong className="text-white block">Athlete Ambassadors (NIL)</strong>
                        <span className="text-sm text-gray-400">Social proof & authentic marketing channels.</span>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
               <h4 className="text-xs font-bold text-hydra-green uppercase tracking-widest mb-2">Why It Matters</h4>
               <p className="text-gray-400 italic">"{WHY_IT_MATTERS.stakeholders}"</p>
            </div>
          </div>
        );

      case 'opportunity':
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="border-b border-white/10 pb-6 flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">Opportunity Framing</h2>
                <p className="text-xl text-gray-400">Synthesis & Ideation.</p>
              </div>
              <Lightbulb size={40} className="text-hydra-green opacity-50 hidden md:block" />
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center max-w-4xl mx-auto">
               <Lightbulb className="mx-auto text-yellow-400 mb-4" size={48} />
               <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">"How Might We..."</h3>
               <p className="text-xl text-gray-300 italic">
                  "...create a beverage that hydrates the body like an IV but sharpens the mind like a nootropic, without artificial ingredients?"
               </p>
            </div>
            
            <div className="my-12">
               <CompetitiveComparison />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
               <div className="bg-zinc-900 p-6 rounded-xl border border-red-900/30 opacity-60 hover:opacity-100 transition-opacity">
                  <div className="flex justify-between items-center mb-4">
                     <h4 className="text-red-400 font-bold uppercase tracking-wider">Discarded Idea</h4>
                     <span className="text-xs bg-red-900/20 text-red-400 px-2 py-1 rounded">Idea #1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Gummies & Chews</h3>
                  <p className="text-gray-400 text-sm">
                     REJECTED: Too slow to absorb. Athletes need instant glycogen replenishment during play, and chewing interferes with breathing during high-intensity output.
                  </p>
               </div>

               <div className="bg-zinc-900 p-6 rounded-xl border border-hydra-green/30 ring-1 ring-hydra-green/20">
                  <div className="flex justify-between items-center mb-4">
                     <h4 className="text-hydra-green font-bold uppercase tracking-wider">Selected Solution</h4>
                     <span className="text-xs bg-hydra-green/20 text-hydra-green px-2 py-1 rounded">Winner</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Powdered Stick Packs</h3>
                  <p className="text-gray-400 text-sm mb-4">
                     CHOSEN: Allows for high potency active ingredients without liquid degradation.
                  </p>
                  <ul className="text-sm space-y-2">
                     <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 size={14} className="text-hydra-green"/> Rapid Absorption</li>
                     <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 size={14} className="text-hydra-green"/> Portability (Gym bag friendly)</li>
                     <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 size={14} className="text-hydra-green"/> Eco-friendly shipping</li>
                  </ul>
               </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
               <h4 className="text-xs font-bold text-hydra-green uppercase tracking-widest mb-2">Why It Matters</h4>
               <p className="text-gray-400 italic">"{WHY_IT_MATTERS.opportunity}"</p>
            </div>
          </div>
        );

      case 'concept':
        return (
          <div className="space-y-12 animate-fade-in">
            <div className="border-b border-white/10 pb-6 flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">Concept Summary</h2>
                <p className="text-xl text-gray-400">Product Architecture & Formulation.</p>
              </div>
              <CheckCircle2 size={40} className="text-hydra-green opacity-50 hidden md:block" />
            </div>
            
            <ProductShowcase />
            
            <div className="mt-8">
              <IngredientShowcase />
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
               <h4 className="text-xs font-bold text-hydra-green uppercase tracking-widest mb-2">Why It Matters</h4>
               <p className="text-gray-400 italic">"{WHY_IT_MATTERS.concept}"</p>
            </div>
          </div>
        );

      case 'prototype':
        return (
          <div className="space-y-12 animate-fade-in">
             <div className="border-b border-white/10 pb-6 flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">Prototype & Testing</h2>
                <p className="text-xl text-gray-400">Formula Evolution & Validation.</p>
              </div>
              <FlaskConical size={40} className="text-hydra-green opacity-50 hidden md:block" />
            </div>

            {/* Narrative Injection: The Aha Moment */}
            <NarrativeSpotlight beat={NARRATIVE_BEATS.breakthrough} />

            {/* Formula Evolution Timeline */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                 <Beaker className="text-hydra-green" />
                 Product Iteration History
              </h3>
              
              <div className="relative border-l-2 border-zinc-800 ml-4 space-y-16 pl-8 py-4">
                {FORMULA_EVOLUTION.map((ver, idx) => (
                  <div key={idx} className="relative group">
                     {/* Timeline Node */}
                     <div className={`absolute -left-[43px] top-0 w-8 h-8 rounded-full border-4 border-black flex items-center justify-center bg-zinc-800 ${idx === 2 ? 'bg-hydra-green text-black' : 'text-gray-400'}`}>
                        <span className="text-[10px] font-bold">{idx + 1}</span>
                     </div>
                     
                     <div className={`p-6 rounded-xl border ${ver.color} transition-all hover:scale-[1.01]`}>
                        <div className="flex justify-between items-start mb-4">
                           <div>
                              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">{ver.version}</span>
                              <h4 className="text-2xl font-bold text-white">{ver.name}</h4>
                           </div>
                           <span className={`px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider ${idx === 2 ? 'bg-hydra-green text-black' : 'bg-zinc-800 text-gray-500'}`}>
                              {ver.status}
                           </span>
                        </div>

                        {/* Ingredients */}
                        <div className="mb-4">
                           <p className="text-xs text-gray-400 uppercase font-bold mb-2">Key Ingredients</p>
                           <div className="flex flex-wrap gap-2">
                              {ver.ingredients.map((ing, i) => (
                                 <span key={i} className="bg-black/30 text-gray-300 text-xs px-2 py-1 rounded border border-white/5">
                                    {ing}
                                 </span>
                              ))}
                           </div>
                        </div>

                        {/* Analysis Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4 pt-4 border-t border-black/10">
                           <div>
                              <div className="flex items-center gap-2 mb-1 text-green-400 font-bold">
                                 <CheckCircle2 size={14} /> Pros
                              </div>
                              <p className="text-gray-400 leading-tight">{ver.pros}</p>
                           </div>
                           <div>
                              <div className="flex items-center gap-2 mb-1 text-red-400 font-bold">
                                 <X size={14} /> Cons
                              </div>
                              <p className="text-gray-400 leading-tight">{ver.cons}</p>
                           </div>
                        </div>
                     </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
               <h4 className="text-xs font-bold text-hydra-green uppercase tracking-widest mb-2">Why It Matters</h4>
               <p className="text-gray-400 italic">"{WHY_IT_MATTERS.prototype}"</p>
            </div>
          </div>
        );

      case 'impact':
        return (
          <div className="space-y-12 animate-fade-in">
             <div className="border-b border-white/10 pb-6 flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">Impact Dashboard</h2>
                <p className="text-xl text-gray-400">Social, Environmental, and Health Outcomes.</p>
              </div>
              <Globe size={40} className="text-hydra-green opacity-50 hidden md:block" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-zinc-900 p-6 rounded-xl border border-hydra-green/20">
                  <Leaf className="text-hydra-green mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-2">Environmental</h3>
                  <p className="text-gray-400 text-sm">Upcycling 50,000 lbs of Cascara annually, diverting agricultural waste from landfills.</p>
               </div>
               <div className="bg-zinc-900 p-6 rounded-xl border border-hydra-pink/20">
                  <Users className="text-hydra-pink mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-2">Social</h3>
                  <p className="text-gray-400 text-sm">Providing "Safe Focus" for youth athletes. 100% Caffeine-Free & Dye-Free alternatives.</p>
               </div>
               <div className="bg-zinc-900 p-6 rounded-xl border border-hydra-blue/20">
                  <ActivityIcon className="text-hydra-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-2">Health</h3>
                  <p className="text-gray-400 text-sm">Supporting metabolic health via Magnesium Malate and blood sugar stabilization.</p>
               </div>
            </div>

             {/* Narrative Injection: The Diabetic Story */}
             <NarrativeSpotlight beat={NARRATIVE_BEATS.diabetic} />

            <DiabeticBenefits />
            <div className="mt-8 border-t border-white/10 pt-6">
               <h4 className="text-xs font-bold text-hydra-green uppercase tracking-widest mb-2">Why It Matters</h4>
               <p className="text-gray-400 italic">"{WHY_IT_MATTERS.impact}"</p>
            </div>
          </div>
        );

      case 'survey':
        return (
          <div className="space-y-12 animate-fade-in">
             <div className="border-b border-white/10 pb-6 flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">Survey Insights</h2>
                <p className="text-xl text-gray-400">Data from 834 Respondents.</p>
              </div>
              <ClipboardList size={40} className="text-hydra-green opacity-50 hidden md:block" />
            </div>
            <SurveyAnalysis />
            <div className="mt-8 border-t border-white/10 pt-6">
               <h4 className="text-xs font-bold text-hydra-green uppercase tracking-widest mb-2">Why It Matters</h4>
               <p className="text-gray-400 italic">"{WHY_IT_MATTERS.survey}"</p>
            </div>
          </div>
        );
      
      case 'sustainability':
        return (
           <div className="space-y-8 animate-fade-in">
             <div className="border-b border-white/10 pb-6 flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">Sustainability Plan</h2>
                <p className="text-xl text-gray-400">Lifecycle Stewardship.</p>
              </div>
              <Leaf size={40} className="text-hydra-green opacity-50 hidden md:block" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div>
                  <h3 className="text-2xl font-bold text-white mb-6">The Cascara Story</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                     The core of our sustainability mission is <strong>Upcycling</strong>. Cascara is the fruit of the coffee cherry. For decades, it was discarded into rivers or landfills by coffee farms, causing acidic pollution.
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                     HydraEdge purchases this "waste" product, providing a second income stream for farmers while sourcing one of the most potent BDNF-boosting ingredients on the planet.
                  </p>
                  <div className="flex items-center gap-4 text-hydra-green font-bold">
                     <Recycle size={24} />
                     <span>Waste into Wellness</span>
                  </div>
               </div>

               {/* Visualization: Sustainability Cycle */}
               <SustainabilityCycle />
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-700 mt-8">
               <h3 className="text-xl font-bold text-white mb-6">3-Year Roadmap</h3>
               <div className="space-y-6">
                  <div className="flex gap-4">
                     <div className="w-12 text-right font-mono text-gray-500 pt-1">YR 1</div>
                     <div>
                        <h4 className="text-white font-bold">Digital Printing</h4>
                        <p className="text-sm text-gray-400">Using HP Indigo digital presses for pouches. Zero plate setup means zero setup waste for small batches.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-12 text-right font-mono text-gray-500 pt-1">YR 2</div>
                     <div>
                        <h4 className="text-white font-bold">Localized Sourcing</h4>
                        <p className="text-sm text-gray-400">Transitioning Lion's Mane cultivation to a dedicated facility in Oregon to reduce freight emissions.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-12 text-right font-mono text-hydra-green pt-1">YR 3</div>
                     <div>
                        <h4 className="text-white font-bold">Compostable Films</h4>
                        <p className="text-sm text-gray-400">Goal to transition all stick-pack film to industrial compostable PLA materials.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
               <h4 className="text-xs font-bold text-hydra-green uppercase tracking-widest mb-2">Why It Matters</h4>
               <p className="text-gray-400 italic">"{WHY_IT_MATTERS.sustainability}"</p>
            </div>
           </div>
        );

      case 'market':
        return (
          <div className="space-y-12 animate-fade-in">
             <div className="border-b border-white/10 pb-6 flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">Market & Launch</h2>
                <p className="text-xl text-gray-400">Financials & Go-To-Market Strategy.</p>
              </div>
              <Rocket size={40} className="text-hydra-green opacity-50 hidden md:block" />
            </div>

            {/* Financials Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
               </div>

               <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-white">Budget Allocation</h3>
                    <span className="text-gray-400 text-xs font-mono">$150,000 RAISE</span>
                 </div>
                 <FinancialChart 
                  title="Use of Funds" 
                  type="pie" 
                  data={BUDGET_ALLOCATION} 
                />
               </div>
            </div>

            {/* Detailed Use of Funds */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
               <div className="p-4 bg-zinc-900 border-b border-zinc-800">
                  <h3 className="font-bold text-white">Detailed Spend Breakdown</h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
                  {USE_OF_FUNDS_BREAKDOWN.map((fund, idx) => (
                     <div key={idx} className="p-6">
                        <div className="mb-2">
                           <span className={`text-xl font-bold block ${fund.color}`}>{fund.amount}</span>
                        </div>
                        <h4 className="font-bold text-white text-xs uppercase tracking-wide mb-3">{fund.category}</h4>
                        <ul className="space-y-2">
                           {fund.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="text-[10px]">
                                 <span className="block text-gray-300 font-bold">{item.label}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </div>
            
            {/* GTM Strategy */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
               <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Rocket className="text-white" />
                  Go-To-Market Strategy
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative pl-8 border-l border-zinc-700">
                     <span className="absolute -left-3 top-0 bg-zinc-900 text-gray-400 text-xs px-1 border border-zinc-700 rounded">PHASE 1</span>
                     <h4 className="text-white font-bold mt-4 mb-2">Kickstarter Validation</h4>
                     <p className="text-sm text-gray-400">Launch funding goal of $150k. Primary acquisition via Paid Social (TikTok/IG) targeting "Biohacker" and "CrossFit" interests.</p>
                  </div>
                  <div className="relative pl-8 border-l border-zinc-700">
                     <span className="absolute -left-3 top-0 bg-zinc-900 text-hydra-blue text-xs px-1 border border-hydra-blue/30 rounded">PHASE 2</span>
                     <h4 className="text-white font-bold mt-4 mb-2">Shopify DTC</h4>
                     <p className="text-sm text-gray-400">Migration to owned channel. Implementation of subscription model ("The Flow State Membership") for recurring revenue.</p>
                  </div>
                  <div className="relative pl-8 border-l border-zinc-700">
                     <span className="absolute -left-3 top-0 bg-zinc-900 text-hydra-green text-xs px-1 border border-hydra-green/30 rounded">PHASE 3</span>
                     <h4 className="text-white font-bold mt-4 mb-2">Retail Scale</h4>
                     <p className="text-sm text-gray-400">Entry into boutique gyms and high-end grocers (Erewhon, Whole Foods) followed by Amazon Prime launch.</p>
                  </div>
               </div>
            </div>

            {/* Narrative Injection: The Vision */}
            <NarrativeSpotlight beat={NARRATIVE_BEATS.vision} />

            <div className="mt-8 border-t border-white/10 pt-6">
               <h4 className="text-xs font-bold text-hydra-green uppercase tracking-widest mb-2">Why It Matters</h4>
               <p className="text-gray-400 italic">"{WHY_IT_MATTERS.market}"</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const ActivityIcon = ({ className, size }: { className?: string, size?: number }) => (
     <svg 
       xmlns="http://www.w3.org/2000/svg" 
       width={size} 
       height={size} 
       viewBox="0 0 24 24" 
       fill="none" 
       stroke="currentColor" 
       strokeWidth="2" 
       strokeLinecap="round" 
       strokeLinejoin="round" 
       className={className}
     >
       <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
     </svg>
  );

  return (
    <div className="min-h-screen bg-hydra-black text-white font-sans flex flex-col md:flex-row">
      
      {/* Mobile Header */}
      <div className="md:hidden bg-zinc-900 border-b border-white/10 p-4 flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <Droplets className="text-hydra-green" />
          <span className="font-bold text-lg tracking-tighter">HYDRA<span className="text-hydra-green">EDGE</span></span>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
          <Menu />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 z-30 w-72 bg-zinc-950 border-r border-white/10 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static`}>
        <div className="p-6 border-b border-white/10 hidden md:flex items-center gap-2">
          <div className="bg-hydra-green p-1.5 rounded text-black">
            <Droplets size={20} />
          </div>
          <span className="font-bold text-xl tracking-tighter">HYDRA<span className="text-hydra-green">EDGE</span></span>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100vh-140px)]">
           <div className="text-xs font-mono text-gray-500 mb-4 px-2">PROJECT CATEGORIES</div>
           <nav className="space-y-1">
             {NAVIGATION_ITEMS.map((item) => (
               <button
                 key={item.id}
                 onClick={() => {
                   setActiveView(item.id);
                   setMobileMenuOpen(false);
                 }}
                 className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-all group ${
                   activeView === item.id 
                     ? 'bg-hydra-green text-black font-bold shadow-[0_0_15px_rgba(204,255,0,0.2)]' 
                     : 'text-gray-400 hover:text-white hover:bg-white/5'
                 }`}
               >
                 <div className="flex items-center gap-3">
                   <item.icon size={18} className={activeView === item.id ? 'text-black' : 'text-gray-500 group-hover:text-white'} />
                   {item.label}
                 </div>
                 {activeView === item.id && <ChevronRight size={14} />}
               </button>
             ))}
           </nav>
        </div>

        <div className="absolute bottom-0 w-full p-6 border-t border-white/10 bg-zinc-950">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-white">JA</div>
            <div>
               <p className="text-sm font-bold text-white">Johnathan Arellano</p>
               <p className="text-xs text-gray-500">Founder</p>
            </div>
          </div>
          <div className="text-xs text-gray-600 mt-2">v2.1 • 16-Week Protocol</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-y-auto bg-black scroll-smooth">
         <div className="max-w-6xl mx-auto p-6 md:p-12 pb-32">
            {renderContent()}

            {/* Footer */}
            <footer className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
               <p>&copy; 2026 HydraEdge Inc. Confidential & Proprietary.</p>
               <p className="mt-2 text-xs">Prepared for Series A Investment Review</p>
            </footer>
         </div>
      </main>

      <GeminiAssistant />
    </div>
  );
}

export default App;
