import { useEffect } from 'react';
import Hero from '../components/landing/Hero';
import TestimonialSimple from '../components/landing/TestimonialSimple';
import FeatureDarkSplit from '../components/landing/FeatureDarkSplit';
import FeatureGridCards from '../components/landing/FeatureGridCards';
import FeatureLightSplit from '../components/landing/FeatureLightSplit';
import CTAForm from '../components/landing/CTAForm';

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[class*="reveal-"], .zoom-in');
    if (!elements.length) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function LandingPage() {
  useScrollReveal();
  return (
    <>
      <Hero />
      <TestimonialSimple />
      <FeatureDarkSplit />
      <FeatureGridCards />
      <FeatureLightSplit />
      <CTAForm />
    </>
  );
}
