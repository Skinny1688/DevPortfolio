import React from 'react';

import type { Project } from '../data/types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="group bg-slate-800/50 rounded-2xl border border-white/5 overflow-hidden hover:border-primary/50 transition-colors">
            <div className="aspect-video bg-slate-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-purple/20"></div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-lg border border-white/10 group-hover:bg-white/5 transition-colors text-sm font-bold flex items-center justify-center gap-2 text-white"
                >
                    Кейс проекта <span>→</span>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
