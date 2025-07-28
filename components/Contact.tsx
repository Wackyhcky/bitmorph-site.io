
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Using formsubmit.co's AJAX feature to send email without a backend
      const response = await fetch('https://formsubmit.co/ajax/tristanjesserobert@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        })
      });

      const data = await response.json();

      if (data.success === 'true' || response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error(data.message || 'There was an issue sending your message. Please try again later.');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-slate-900">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/2 h-64 bg-cyan-600 rounded-full blur-3xl opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl py-16 px-6 sm:px-12">
                {!isSubmitted ? (
                    <>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Build Your Perfect PC?</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                            Have your parts and ready to build? Fill out the form below to get a quote and schedule your professional assembly service.
                        </p>
                        <form onSubmit={handleSubmit} className="mt-10 text-left max-w-lg mx-auto">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-slate-700/50 border border-slate-600 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-slate-700/50 border border-slate-600 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Parts & Build Details</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        required
                                        rows={5}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full bg-slate-700/50 border border-slate-600 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                                        placeholder="Please list the main components you have (CPU, GPU, Motherboard, Case) and any special instructions for the build."
                                    ></textarea>
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full sm:w-auto inline-flex justify-center items-center bg-cyan-500 text-white font-bold py-3 px-10 rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20 text-lg disabled:bg-slate-600 disabled:cursor-not-allowed disabled:scale-100"
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : 'Request My Free Quote'}
                                </button>
                                {error && <p className="mt-4 text-red-400">{error}</p>}
                            </div>
                        </form>
                    </>
                ) : (
                    <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h2 className="text-3xl font-bold text-white">Thank You!</h2>
                        <p className="mt-4 text-lg text-gray-300">Your quote request has been sent. We will get back to you at <span className="font-semibold text-cyan-400">{email}</span> within 24-48 hours.</p>
                    </div>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;