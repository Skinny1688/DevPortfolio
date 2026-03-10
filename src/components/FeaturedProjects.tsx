import React from 'react';
import ProjectCard from './ProjectCard';
import type { Project } from '../data/types';

interface FeaturedProjectsProps {
    projects: Project[];
    onToggleCatalog: () => void;
    isExpanded: boolean;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects, onToggleCatalog, isExpanded }) => {
    const featured = projects.filter(p => p.isFeatured);

    return (
        <section id="projects" className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Избранные проекты</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {featured.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button onClick={onToggleCatalog} className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition">
                        {isExpanded ? 'Скрыть каталог' : 'Больше проектов'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
