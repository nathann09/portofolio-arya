/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { CompetenciesSection } from './components/CompetenciesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { SilaporSimulatorModal } from './components/SilaporSimulatorModal';
import { CvViewerModal } from './components/CvViewerModal';
import { PROJECTS } from './data/portfolioData';
import { AnimatedSection } from './components/AnimatedSection';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState<boolean>(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  const selectedProject = PROJECTS.find((p) => p.id === selectedProjectId) || null;

  const scrollToContact = () => {
    const el = document.getElementById('kontak');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      {/* 3-Zone Top Bar */}
      <Navbar
        onOpenCvModal={() => setIsCvModalOpen(true)}
        onOpenContactModal={scrollToContact}
      />

      {/* Main Content Stream with Scroll Transitions */}
      <main className="flex-1">
        {/* Split Hero with Portrait & Positioning */}
        <Hero
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onOpenContactModal={scrollToContact}
          onSelectProject={(id) => setSelectedProjectId(id)}
        />

        {/* Quantitative Proof & Stats Grid */}
        <AnimatedSection>
          <StatsSection />
        </AnimatedSection>

        {/* Core Competencies Matrix */}
        <AnimatedSection>
          <CompetenciesSection />
        </AnimatedSection>

        {/* Featured Case Studies & Projects */}
        <AnimatedSection>
          <ProjectsSection
            onSelectProject={(id) => setSelectedProjectId(id)}
            onOpenSimulator={() => setIsSimulatorOpen(true)}
          />
        </AnimatedSection>

        {/* Client & Mentor Testimonials */}
        <AnimatedSection>
          <TestimonialsSection />
        </AnimatedSection>

        {/* Work & Organization Experience Timeline */}
        <AnimatedSection>
          <ExperienceTimeline />
        </AnimatedSection>

        {/* Education, Certifications & Publications */}
        <AnimatedSection>
          <CertificationsSection />
        </AnimatedSection>

        {/* Direct Contact & WhatsApp Messenger */}
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Interactive Overlays */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={Boolean(selectedProjectId)}
        onClose={() => setSelectedProjectId(null)}
        onOpenSimulator={() => setIsSimulatorOpen(true)}
      />

      <SilaporSimulatorModal
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
      />

      <CvViewerModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
