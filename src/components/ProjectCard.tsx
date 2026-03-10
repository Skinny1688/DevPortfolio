import React from 'react';

import type { Project } from '../data/types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold">
                Подробнее →
            </a>
        </div>
    );
};

export default ProjectCard;
