import LandingContent from '@/components/landing-content';
import LandingHeader from '@/components/landing-header';
import LandingHero from '@/components/landing-hero';

export default function LandingPage() {
  return (
    <section className="w-full">
      <LandingHeader />
      <LandingHero />
      <LandingContent />
    </section>
  );
}
