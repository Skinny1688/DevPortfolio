import React, { useState } from 'react';

import type { Project } from '../data/types';
import calendarImage from '../assets/calendar.png';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="group bg-slate-800/50 rounded-2xl border-2 border-white/10 overflow-hidden hover:border-primary/50 transition-all hover:scale-95 hover:shadow-lg hover:shadow-primary/20 h-full flex flex-col cursor-pointer" onClick={() => setIsModalOpen(true)}>
                <div className="aspect-video bg-slate-700 relative overflow-hidden">
                    <img src={calendarImage} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-white line-clamp-2">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow line-clamp-3">{project.description}</p>
                    <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-lg border border-white/10 group-hover:bg-white/5 active:scale-95 transition-all text-sm font-bold flex items-center justify-center gap-2 text-white"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Кейс проекта <span>→</span>
                    </a>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setIsModalOpen(false)}>
                    <div className="bg-slate-900 rounded-2xl p-6 max-w-2xl w-full border border-white/10" onClick={(e) => e.stopPropagation()}>
                        <img src={calendarImage} alt="Calendar" className="w-full h-auto rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-slate-400 mb-6">{project.description}</p>
                        <div className="flex gap-4">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary text-white rounded-lg font-bold">Открыть проект</a>
                            <button onClick={() => setIsModalOpen(false)} className="px-6 py-3 bg-white/10 text-white rounded-lg font-bold">Закрыть</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;
