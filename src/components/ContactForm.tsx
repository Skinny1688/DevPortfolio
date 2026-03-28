import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        try {
            await emailjs.send(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'semennikita52@gmail.com',
                },
                'YOUR_PUBLIC_KEY'
            );
            alert('Сообщение успешно отправлено!');
            setFormData({ name: '', email: '', message: '' });
            onClose();
        } catch (error) {
            console.error('Ошибка при отправке:', error);
            alert('Произошла ошибка при отправке сообщения.');
        } finally {
            setIsSending(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-slate-800 p-8 rounded-2xl w-full max-w-md border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Связаться со мной</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-700 border border-white/10 text-white placeholder-slate-400 p-3 rounded-lg focus:outline-none focus:border-primary transition-colors"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Ваш email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-700 border border-white/10 text-white placeholder-slate-400 p-3 rounded-lg focus:outline-none focus:border-primary transition-colors"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Сообщение"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-slate-700 border border-white/10 text-white placeholder-slate-400 p-3 rounded-lg focus:outline-none focus:border-primary transition-colors h-32 resize-none"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        disabled={isSending}
                        className="w-full bg-gradient-to-r from-primary to-accent-purple text-white py-3 rounded-lg border-2 border-primary font-bold hover:scale-95 hover:shadow-lg hover:shadow-primary/40 active:scale-90 transition-all duration-150 disabled:opacity-50"
                    >
                        {isSending ? 'Отправка...' : 'Отправить'}
                    </button>
                </form>
                <button
                    onClick={onClose}
                    className="mt-4 w-full text-slate-400 hover:text-white transition-colors"
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
};

export default ContactForm;
