import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Привет, я разработчик</h1>
                <p className="text-xl text-gray-600 mb-8">Создаю современные веб-приложения</p>
                <a href="#contacts" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                    Связаться
                </a>
            </div>
        </section>
    );
};

export default Hero;
