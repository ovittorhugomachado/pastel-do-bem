import { IoBagHandle } from "react-icons/io5"
import { DonationButton } from "./donation-button"

export const Main = () => {
    return (
        <main className="">
            <section className="py-20 md:py-20 container">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-5xl md:text-6xl text-[#D92525] mb-6 font-hand">
                        Uma Doçura que Salva Vidas
                    </h2>
                    <div className="space-y-6 text-xl md:text-2xl text-gray-700 leading-relaxed font-sans font-light">
                        <p>
                            O <span className="font-bold text-[#D92525]">Pastel do Bem</span> é mais do que um doce delicioso. É um movimento de solidariedade.
                            Cada contribuição ajuda diretamente na luta contra o câncer e o abuso infantil, apoiando o Instituto Alpha do Bem e parceiros.
                        </p>
                        <p>
                            Junte-se a nós nessa causa. Sua ajuda transforma lágrimas em sorrisos e dá esperança para quem mais precisa.
                        </p>
                    </div>
                    <div className="pt-8">
                        <div className="w-24 h-1 bg-[#F2C94C] mx-auto rounded-full"></div>
                    </div>
                </div>
            </section>
            <section id="donate" className="py-20 bg-[#FFFDF5] relative">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-[#F2C94C] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#D92525] rounded-full blur-3xl"></div>
                </div>
                <div className="container relative z-10 text-center">
                    <h2 className="text-5xl md:text-6xl text-[#D92525] mb-4 font-hand">
                        Faça sua Doação
                    </h2>
                    <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                        Escolha um valor e ajude a transformar o futuro de muitas crianças. Todo valor conta!
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
                        <DonationButton value={10} link="https://pagamento.pagbank.com.br/pagamento?code=b209ff36-dbbd-4888-8d90-241856850038&t=0d87131f-11bc-409f-a051-32e642b30ff2" />
                        <DonationButton value={20} link="https://pagamento.pagbank.com.br/pagamento?code=6ddfe018-1b85-4a92-8e16-c88da3052ed8&t=b355282d-0b22-4195-8a3b-831707bf0a48" />
                        <DonationButton value={30} link="https://pagamento.pagbank.com.br/pagamento?code=2bb4bbbf-d2bc-409e-8d67-e1fb7a371ee8&t=28134408-a0b9-4214-a133-c64cd9069e7d" />
                        <DonationButton value={50} link="https://pagamento.pagbank.com.br/pagamento?code=ee9f37d6-cf00-4340-8b21-10ba78932882&t=f537369c-96d7-4fd9-a8d8-46671aa69c56" />
                        {/* <DonationButton value={100} /> */}
                        <a
                            target="_blank"
                            href="https://pagamento.pagbank.com.br/pagamento?code=92bdfef2-4995-4a77-b505-d99d054b3ff7&t=6ebcab99-fa98-435d-a649-72538a7e8449"
                            className="h-auto text-[#D92525] py-6 px-8 text-2xl font-hand font-bold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1 hover:rotate-1 hover:text-white hover:bg-[#D40924] shadow-hand border-[#d8d8d8] rounded-2xl"
                        >
                            Pastel do Bem Digital R$ 12,00
                        </a>
                    </div>
                    <div className="max-w-4xl mx-auto mt-20">
                        <div className="overflow-hidden border-none shadow-xl bg-white relative rounded-xl">
                            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-[#D92525] via-[#F2C94C] to-[#27AE60]"></div>
                            <div className="p-0">
                                <div className="grid md:grid-cols-2">
                                    <div className="h-64 md:h-auto my-6 relative">
                                        <img
                                            src="/caixa-pastel.png"
                                            alt="Caixa de Pastéis"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-4 left-4 bg-[#F2C94C] text-[#D92525] font-bold px-4 py-1 rounded-full shadow-md -rotate-2">
                                            Edição Especial
                                        </div>
                                    </div>
                                    <div className="p-8 md:p-12 flex flex-col justify-center text-left">
                                        <h3 className="text-3xl md:text-4xl text-[#D92525] mb-4 font-hand">
                                            Leve o Sabor para Casa
                                        </h3>
                                        <p className="text-gray-600 mb-6 font-sans text-lg">
                                            Compre nossa caixa exclusiva com <span className="font-bold">6 Pastéis de Belém</span> fresquinhos.
                                            Parte do valor é revertido para a causa!
                                        </p>
                                        <div className="flex items-center gap-4 mb-8">
                                            <span className="text-3xl font-bold text-gray-800 font-sans">R$ 45,00</span>
                                            <span className="text-sm text-gray-500 font-sans line-through">R$ 60,00</span>
                                        </div>
                                        <a
                                            href=""
                                            className="flex items-center justify-center w-full bg-[#27AE60] hover:bg-[#219150] text-white font-hand text-2xl py-2 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                                        >
                                            <IoBagHandle className="mr-2 h-6 w-6" /> Comprar Agora
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}