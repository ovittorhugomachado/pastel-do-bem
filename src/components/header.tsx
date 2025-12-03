import { FaHeart } from "react-icons/fa"

export const Header = () => {
    return (
        <header className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-black">
                <img
                    src="/hero-pastel.png"
                    alt="Pastéis de Belém deliciosos"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 from-black/30 to-black/60" />
            </div>
            <div className="container flex justify-center items-center relative z-10 text-center text-white px-4">
                <div className="flex flex-col items-center animate-in fade-in zoom-in duration-1000">
                    <img
                        src="/logo.png"
                        alt="Logo Pastel do Bem"
                        className="w-32 md:w-40 mx-auto mb-6 drop-shadow-lg"
                    />
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-hand font-bold mb-4 text-shadow-sm drop-shadow-lg text-[#F2C94C]">
                        Pastel do Bem
                    </h1>
                    <p className="text-2xl md:text-4xl font-hand font-semibold mb-8 max-w-3xl mx-auto drop-shadow-md">
                        Vamos juntos transformar com sabor?
                    </p>
                    <button
                        className="flex items-center justify-center bg-[#D92525] hover:bg-[#b91c1c] text-white font-hand text-2xl px-8 py-2 rounded-full shadow-lg hover:scale-105 cursor-pointer transition-transform border-4 border-white/20"
                        onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <FaHeart className="mr-2 w-6 fill-current" /> Quero Ajudar
                    </button>
                </div>
            </div>
        </header>
    )
}