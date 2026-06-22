import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const formRef = useRef();
    const [status, setStatus] = useState('IDLE');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('SENDING');

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
                formRef.current.reset();
                setTimeout(() => setStatus('IDLE'), 4000);
            },
            (error) => {
                console.log('FAILED...', error.text);
                setStatus('ERROR');
                setTimeout(() => setStatus('IDLE'), 4000);
            }
        );
    };

    // Shared input/textarea class builder
    const inputClass = `w-full bg-transparent border-b py-4 focus:outline-none transition-colors peer placeholder-transparent ${
        isLight
            ? 'border-zinc-300 text-[#1A1A2E] focus:border-[#0055FF]'
            : 'border-zinc-800 text-[#E0E0E0] focus:border-[#8A0303]'
    }`;

    const labelClass = `absolute left-0 top-4 text-sm font-mono transition-all peer-focus:-top-4 peer-focus:text-xs peer-valid:-top-4 peer-valid:text-xs ${
        isLight
            ? 'text-zinc-400 peer-focus:text-[#0055FF] peer-valid:text-zinc-400'
            : 'text-zinc-500 peer-focus:text-[#8A0303] peer-valid:text-zinc-600'
    }`;

    return (
        <section className={`relative w-full min-h-screen flex items-center justify-center px-8 md:px-24 z-10 border-t transition-colors duration-500 ${
            isLight
                ? 'border-zinc-200 bg-gradient-to-b from-[#F8FAFC] to-[#EEF2F7]'
                : 'border-zinc-900/50 bg-gradient-to-b from-transparent to-[#020202]'
        }`}>
            <div className="max-w-2xl w-full">
                <div className="mb-12 text-center md:text-left">
                    <p className={`text-sm tracking-[0.3em] uppercase mb-2 transition-colors duration-500 ${isLight ? 'text-[#0055FF]' : 'text-[#8A0303]'}`}>
                        Initiate Contact
                    </p>
                    <h2 className={`text-4xl md:text-5xl font-bold uppercase tracking-tight transition-colors duration-500 ${isLight ? 'text-[#1A1A2E]' : 'text-[#E0E0E0]'}`}>
                        Enter the Depths.
                    </h2>
                </div>

                <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
                    <div className="group relative">
                        <input type="text" name="user_name" id="name" required className={inputClass} placeholder="Name" />
                        <label htmlFor="name" className={labelClass}>// YOUR DESIGNATION</label>
                    </div>

                    <div className="group relative">
                        <input type="email" name="user_email" id="email" required className={inputClass} placeholder="Email" />
                        <label htmlFor="email" className={labelClass}>// SECURE CHANNEL (EMAIL)</label>
                    </div>

                    <div className="group relative">
                        <textarea name="message" id="message" required rows="4" className={`${inputClass} resize-none`} placeholder="Message"></textarea>
                        <label htmlFor="message" className={labelClass}>// TRANSMIT DATA</label>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'SENDING'}
                        className={`w-full md:w-auto px-8 py-4 mt-8 border text-sm tracking-widest uppercase transition-all duration-300
                            ${status === 'IDLE' ? (isLight
                                ? 'border-zinc-300 text-zinc-500 hover:text-[#1A1A2E] hover:border-[#0055FF] hover:bg-[#0055FF]/10'
                                : 'border-zinc-800 text-zinc-400 hover:text-[#E0E0E0] hover:border-[#8A0303] hover:bg-[#8A0303]/10')
                            : ''}
                            ${status === 'SENDING' ? 'border-yellow-600 text-yellow-600 bg-yellow-600/10 cursor-wait' : ''}
                            ${status === 'SUCCESS' ? 'border-green-600 text-green-600 bg-green-600/10' : ''}
                            ${status === 'ERROR'   ? 'border-red-600 text-red-600 bg-red-600/10'       : ''}
                        `}
                    >
                        {status === 'IDLE'     && 'Execute'}
                        {status === 'SENDING'  && 'Transmitting...'}
                        {status === 'SUCCESS'  && 'Transmission Sent'}
                        {status === 'ERROR'    && 'System Failure'}
                    </button>
                </form>
            </div>
        </section>
    );
}