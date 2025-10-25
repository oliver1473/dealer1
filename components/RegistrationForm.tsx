
import React, { useState } from 'react';

export const RegistrationForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registered with email:', email);
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="register" className="bg-light dark:bg-secondary py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                    <h2 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">¡No te Pierdas Novedades!</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Regístrate para recibir ofertas exclusivas y ser el primero en conocer nuestros nuevos vehículos.</p>
                    {submitted ? (
                        <p className="text-green-600 dark:text-green-400 font-semibold">¡Gracias por registrarte!</p>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="flex-grow w-full px-4 py-3 text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <button
                                type="submit"
                                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                Registrarse
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};
