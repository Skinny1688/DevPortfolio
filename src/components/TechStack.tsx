import React from 'react';

interface TechStackProps {
    technologies: string[];
}

const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
    const techIcons: { [key: string]: string } = {
        'Supabase': '🗄️',
        'React': '⚛️',
        'Vite': '⚡',
        'Tailwind': '🎨',
        'TypeScript': '📘',
        'AI Integration': '🧠',
        'VS Code': '💻',
    };

    return (
        <section className="py-16 px-6 lg:px-40 bg-white/5 bg-background-dark">
            <h3 className="text-center text-slate-400 font-bold uppercase tracking-widest text-sm mb-12">Технологический стек</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 hover:opacity-100 transition-opacity duration-500">
                {technologies.map((tech) => (
                    <div key={tech} className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className="text-4xl group-hover:text-primary transition-colors">
                            {techIcons[tech] || '🔧'}
                        </div>
                        <span className="text-xs font-bold text-slate-300">{tech}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
