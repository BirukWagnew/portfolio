import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Summary } from './components/Summary';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ThemeProvider } from './ThemeContext';

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#090d16] text-gray-100 selection:bg-indigo-500 selection:text-white font-sans">
        <Navbar />
        <main>
          <Hero />
          <Summary />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
