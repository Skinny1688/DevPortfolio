import React from 'react';

interface HeroProps {
    onProjectsClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onProjectsClick }) => {
    const handleProjectsClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (onProjectsClick) {
            onProjectsClick();
        } else {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="flex flex-col items-center justify-center py-20 px-6 lg:px-40 text-center mt-[60px] min-h-[calc(100vh-60px)] bg-background-dark">
            <div className="max-w-[800px] flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-white">
                        Создаю цифровые решения <span
                            className="inline-block bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent whitespace-nowrap">современном стеке</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Full-stack разработчик, специализирующийся на масштабируемых веб-приложениях и интеграции
                        ИИ.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    <button
                        onClick={handleProjectsClick}
                        className="bg-gradient-to-r from-primary to-accent-purple px-8 py-4 rounded-xl text-lg font-bold text-white border-2 border-primary shadow-xl shadow-primary/20 hover:scale-95 hover:shadow-2xl hover:shadow-primary/40 active:scale-90 transition-all duration-150"
                    >
                        Смотреть проекты
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
