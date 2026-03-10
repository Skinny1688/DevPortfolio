import React from 'react';

interface ContactFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Связаться со мной</h2>
                <form className="space-y-4">
                    <input type="text" placeholder="Ваше имя" className="w-full border p-2 rounded" />
                    <input type="email" placeholder="Ваш email" className="w-full border p-2 rounded" />
                    <textarea placeholder="Сообщение" className="w-full border p-2 rounded h-32"></textarea>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Отправить</button>
                </form>
                <button onClick={onClose} className="mt-4 text-gray-500 hover:text-gray-700">Закрыть</button>
            </div>
        </div>
    );
};

export default ContactForm;
