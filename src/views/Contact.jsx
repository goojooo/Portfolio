import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef();
    const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SUCCESS, ERROR

    const sendEmail = (e) => {
        e.preventDefault(); // Stop the page from refreshing!
        setStatus('SENDING');

        // Make sure to replace these 3 strings with your actual EmailJS keys
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    setStatus('SUCCESS');
                    formRef.current.reset(); // Clear the inputs
                    setTimeout(() => setStatus('IDLE'), 4000); // Reset button after 4 seconds
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setStatus('ERROR');
                    setTimeout(() => setStatus('IDLE'), 4000);
                }
            );
    };

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center px-8 md:px-24 z-10 border-t border-zinc-900/50 bg-gradient-to-b from-transparent to-[#020202]">
            <div className="max-w-2xl w-full">
                <div className="mb-12 text-center md:text-left">
                    <p className="text-[#8A0303] text-sm tracking-[0.3em] uppercase mb-2">Initiate Contact</p>
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#E0E0E0]">
                        Enter the Depths.
                    </h2>
                </div>

                {/* Note the new ref and onSubmit handler here */}
                <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
                    <div className="group relative">
                        <input
                            type="text"
                            name="user_name" /* This MUST match the {{user_name}} in your template */
                            id="name"
                            required
                            className="w-full bg-transparent border-b border-zinc-800 py-4 text-[#E0E0E0] focus:outline-none focus:border-[#8A0303] transition-colors peer placeholder-transparent"
                            placeholder="Name"
                        />
                        <label htmlFor="name" className="absolute left-0 top-4 text-zinc-500 text-sm font-mono transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#8A0303] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-zinc-600">
              // YOUR DESIGNATION
                        </label>
                    </div>

                    <div className="group relative">
                        <input
                            type="email"
                            name="user_email" /* Matches {{user_email}} */
                            id="email"
                            required
                            className="w-full bg-transparent border-b border-zinc-800 py-4 text-[#E0E0E0] focus:outline-none focus:border-[#8A0303] transition-colors peer placeholder-transparent"
                            placeholder="Email"
                        />
                        <label htmlFor="email" className="absolute left-0 top-4 text-zinc-500 text-sm font-mono transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#8A0303] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-zinc-600">
              // SECURE CHANNEL (EMAIL)
                        </label>
                    </div>

                    <div className="group relative">
                        <textarea
                            name="message" /* Matches {{message}} */
                            id="message"
                            required
                            rows="4"
                            className="w-full bg-transparent border-b border-zinc-800 py-4 text-[#E0E0E0] focus:outline-none focus:border-[#8A0303] transition-colors peer placeholder-transparent resize-none"
                            placeholder="Message"
                        ></textarea>
                        <label htmlFor="message" className="absolute left-0 top-4 text-zinc-500 text-sm font-mono transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#8A0303] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-zinc-600">
              // TRANSMIT DATA
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'SENDING'}
                        className={`w-full md:w-auto px-8 py-4 mt-8 border text-sm tracking-widest uppercase transition-all duration-300
              ${status === 'IDLE' ? 'border-zinc-800 text-zinc-400 hover:text-[#E0E0E0] hover:border-[#8A0303] hover:bg-[#8A0303]/10' : ''}
              ${status === 'SENDING' ? 'border-yellow-600 text-yellow-600 bg-yellow-600/10 cursor-wait' : ''}
              ${status === 'SUCCESS' ? 'border-green-600 text-green-600 bg-green-600/10' : ''}
              ${status === 'ERROR' ? 'border-red-600 text-red-600 bg-red-600/10' : ''}
            `}
                    >
                        {status === 'IDLE' && 'Execute'}
                        {status === 'SENDING' && 'Transmitting...'}
                        {status === 'SUCCESS' && 'Transmission Sent'}
                        {status === 'ERROR' && 'System Failure'}
                    </button>
                </form>
            </div>
        </section>
    );
}