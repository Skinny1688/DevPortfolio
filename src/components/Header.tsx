import React from 'react';

interface HeaderProps {
    onContactClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (onContactClick) {
            onContactClick();
        } else {
            const contactsSection = document.getElementById('contact');
            if (contactsSection) {
                contactsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className="fixed top-0 z-50 w-full h-[60px] bg-background-dark/80 backdrop-blur-md border-b border-white/10 px-6 lg:px-40 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-primary text-3xl">🚀</span>
                    <h2 className="text-xl font-bold tracking-tight text-white">DevPortfolio</h2>
                </div>
            </div>
            <div className="flex items-center gap-8">
                <nav className="hidden md:flex items-center gap-8">
                    <a className="text-sm font-medium text-slate-300 hover:text-primary transition-colors" href="#projects">
                        Проекты
                    </a>
                    <a className="text-sm font-medium text-slate-300 hover:text-primary transition-colors" href="#contact">
                        Контакты
                    </a>
                </nav>
                <button
                    onClick={handleContactClick}
                    className="bg-gradient-to-r from-primary to-accent-purple px-4 py-2 rounded-lg text-sm font-bold text-white shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
                >
                    Связаться
                </button>
            </div>
        </header>
    );
};

export default Header;
