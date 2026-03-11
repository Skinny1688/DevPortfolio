import React from 'react';

interface FooterProps {
    contacts: {
        github: string;
        telegram: string;
        email: string;
    };
}

const Footer: React.FC<FooterProps> = ({ contacts }) => {
    return (
        <footer className="py-12 px-6 lg:px-40 border-t border-white/10 bg-background-dark">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex gap-6">
                    <a className="text-slate-400 hover:text-white transition-colors" href={contacts.telegram} target="_blank" rel="noopener noreferrer">
                        <span>✉️</span>
                    </a>
                    <a className="text-slate-400 hover:text-white transition-colors" href={contacts.github} target="_blank" rel="noopener noreferrer">
                        <span>🌐</span>
                    </a>
                    <a className="text-slate-400 hover:text-white transition-colors" href={`mailto:${contacts.email}`}>
                        <span>👥</span>
                    </a>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6 text-slate-400 text-sm">
                    <nav className="flex gap-6">
                        <a className="hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
                        <a className="hover:text-white transition-colors" href="#">Условия использования</a>
                    </nav>
                    <p>© 2026 DevPortfolio. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
