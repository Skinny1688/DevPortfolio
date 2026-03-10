import React from 'react';
import ProjectCard from './ProjectCard';
import type { Project } from '../data/types';

interface FullCatalogProps {
    projects: Project[];
}

const FullCatalog: React.FC<FullCatalogProps> = ({ projects }) => {
    return (
        <section id="full-catalog" className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Все проекты</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FullCatalog;
