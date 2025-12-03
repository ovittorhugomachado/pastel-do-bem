import { GrInstagram } from "react-icons/gr"

export const Footer = () => {
    return (
        <footer className="bg-[#D92525] text-white py-12 px-12 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-3xl font-hand font-bold mb-2 text-[#F2C94C]">Pastel do Bem</h4>
              <p className="font-sans text-white/80 max-w-xs">
                Juntos somos mais fortes. Obrigado por fazer parte dessa história.
              </p>
            </div>
        
            <div className="flex gap-6">
              <a href="https://www.instagram.com/alphadobem/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                <GrInstagram  className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 mt-10 pt-6 text-center font-sans text-sm text-white/60">
            <p>© 2024 Pastel do Bem. Todos os direitos reservados.</p>
            <p className="mt-2">Apoio: Instituto Alpha do Bem • A Quinta do Marquês • Albino Nunes</p>
          </div>
        </div>
      </footer>
    )
}