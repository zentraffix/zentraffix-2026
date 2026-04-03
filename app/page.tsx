import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import TrustBar from '@/components/trust-bar';
import HistorySection from '@/components/history-section';
import ServicesSection from '@/components/services-section';
import ProcessSection from '@/components/process-section';
import TestimonialsSection from '@/components/testimonials-section';
import ToolsSection from '@/components/tools-section';
import AboutSection from '@/components/about-section';
import CTASection from '@/components/cta-section';
import Footer from '@/components/footer';
import PortfolioSection from '@/components/portfolio-section';
export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <TrustBar />
      <HistorySection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <ToolsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}
