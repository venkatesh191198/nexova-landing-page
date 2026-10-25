import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import BigIdea from './components/BigIdea';
import Pipeline from './components/Pipeline';
import InteractiveDemo from './components/InteractiveDemo';
import AITeam from './components/AITeam';
import SecuritySection from './components/SecuritySection';
import Industries from './components/Industries';
import Integrations from './components/Integrations';
import WhyAIPilot, { MultiModelAI } from './components/WhyAIPilot';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#07080f] dark:text-slate-200 transition-colors duration-300 w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <TrustBar />
        <BigIdea />
        <Pipeline />
        <InteractiveDemo />
        <AITeam />
        <SecuritySection />
        <Industries />
        <Integrations />
        <MultiModelAI />
        <WhyAIPilot />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}