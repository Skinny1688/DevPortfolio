import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        // Прокрутка к секции контактов или открытие модального окна
        const contactsSection = document.getElementById('contacts');
        if (contactsSection) {
            contactsSection.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const navLinks = [
        { text: 'Проекты', href: '#projects' },
        { text: 'Контакты', href: '#contacts' },
    ];

    return (
        <header className="fixed top-0 w-full bg-white shadow-sm z-50">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Логотип */}
                <div className="text-xl font-bold">AI Portfolio</div>

                {/* Десктопное меню */}
                <div className="hidden md:flex space-x-4 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="hover:text-blue-600 transition-colors"
                        >
                            {link.text}
                        </a>
                    ))}
                    <button
                        onClick={handleContactClick}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                        aria-label="Связаться"
                    >
                        Связаться
                    </button>
                </div>

                {/* Гамбургер-кнопка для мобильных */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
                    aria-label="Открыть меню"
                >
                    <span
                        className={`w-6 h-0.5 bg-black transition-all ${
                            isMenuOpen ? 'rotate-45 translate-y-2' : ''
                        }`}
                    ></span>
                    <span
                        className={`w-6 h-0.5 bg-black transition-all ${
                            isMenuOpen ? 'opacity-0' : ''
                        }`}
                    ></span>
                    <span
                        className={`w-6 h-0.5 bg-black transition-all ${
                            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                    ></span>
                </button>
            </nav>

            {/* Мобильное меню */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="block py-2 hover:text-blue-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.text}
                        </a>
                    ))}
                    <button
                        onClick={handleContactClick}
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                        aria-label="Связаться"
                    >
                        Связаться
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
