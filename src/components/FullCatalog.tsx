import React from 'react';
import ProjectCard from './ProjectCard';
import type { Project } from '../data/types';

interface FullCatalogProps {
    projects: Project[];
}

const FullCatalog: React.FC<FullCatalogProps> = ({ projects }) => {
    return (
        <section id="full-catalog" className="py-20 px-6 lg:px-40 bg-background-dark">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Все проекты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p) => (
                    <ProjectCard key={p.id} project={p} />
                ))}
            </div>
        </section>
    );
};

export default FullCatalog;
