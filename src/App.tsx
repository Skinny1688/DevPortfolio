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

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero />
                <TechStack technologies={techStack.map(t => t.name)} />
                <FeaturedProjects 
                    projects={projects} 
                    onToggleCatalog={handleToggleCatalog} 
                    isExpanded={isCatalogExpanded} 
                />
                {isCatalogExpanded && <FullCatalog projects={projects} />}
            </main>
            <Footer contacts={contacts} />
            <ContactForm isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default App;
