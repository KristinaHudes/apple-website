import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Navbar } from './components/Navbar';
import { Features } from './components/Features';
import { Chip } from './components/Chip';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Features />
      <Chip />
      <Footer />
    </main>
  );
};

export default App;
