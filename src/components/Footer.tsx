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
        <footer id="contacts" className="py-12 bg-gray-900 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-4">Контакты</h2>
                <div className="flex justify-center space-x-6">
                    <a href={contacts.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
                    <a href={contacts.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Telegram</a>
                    <a href={`mailto:${contacts.email}`} className="hover:text-blue-400">Email</a>
                </div>
                <p className="mt-8 text-gray-400">© 2026 Все права защищены</p>
            </div>
        </footer>
    );
};

export default Footer;
