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
        <section id="projects" className="py-20 px-6 lg:px-40 bg-background-dark">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-white">Избранные проекты</h2>
                    <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-accent-purple rounded-full"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featured.map((p) => (
                    <ProjectCard key={p.id} project={p} />
                ))}
            </div>
            <div className="mt-16 flex justify-center">
                <button
                    onClick={onToggleCatalog}
                    className="px-12 py-5 rounded-2xl bg-gradient-to-r from-primary to-accent-purple text-lg font-bold text-white shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
                >
                    {isExpanded ? 'Скрыть каталог' : 'Больше проектов'}
                </button>
            </div>
        </section>
    );
};

export default FeaturedProjects;
