import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import FeaturedProjects from './components/FeaturedProjects';
import FullCatalog from './components/FullCatalog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import { projects } from './data/projects';
import { techStack } from './data/techStack';
import { contacts } from './data/personal';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCatalogExpanded, setIsCatalogExpanded] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const handleToggleCatalog = () => setIsCatalogExpanded(!isCatalogExpanded);
    
    const handleProjectsClick = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-background-dark text-white dark">
            <Header onContactClick={handleOpenModal} />
            <main>
                <Hero onProjectsClick={handleProjectsClick} />
                <TechStack technologies={techStack.map(t => t.name)} />
                <FeaturedProjects
                    projects={projects}
                    onToggleCatalog={handleToggleCatalog}
                    isExpanded={isCatalogExpanded}
                />
                {isCatalogExpanded && <FullCatalog projects={projects} />}
            </main>
            <section id="contact" className="py-24 px-6 lg:px-40 bg-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4 text-white">Связаться со мной</h2>
                    <p className="text-slate-400 mb-12">Готов обсудить интересные проекты и возможности сотрудничества.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <a
                            className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/5 bg-background-dark hover:border-primary transition-all group"
                            href={`http://t.me/${contacts.telegram.split('/').pop()}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="text-3xl">✈️</span>
                            </div>
                            <span className="font-bold">Telegram</span>
                        </a>
                        <a
                            className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/5 bg-background-dark hover:border-accent-purple transition-all group"
                            href={contacts.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="w-16 h-16 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-colors">
                                <span className="text-3xl">💻</span>
                            </div>
                            <span className="font-bold">GitHub</span>
                        </a>
                        <a
                            className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/5 bg-background-dark hover:border-primary transition-all group"
                            href={`mailto:${contacts.email}`}
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="text-3xl">📧</span>
                            </div>
                            <span className="font-bold">Gmail</span>
                        </a>
                    </div>
                </div>
            </section>
            <Footer contacts={contacts} />
            <ContactForm isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default App;
