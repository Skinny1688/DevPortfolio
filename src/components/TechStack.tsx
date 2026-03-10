import React from 'react';

interface TechStackProps {
    technologies: string[];
}

const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Технологии</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {technologies.map((tech) => (
                        <span key={tech} className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
