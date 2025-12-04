
import { IoBagHandle } from "react-icons/io5"
import { DonationButton } from "./donation-button"

export const Main = () => {
    return (
        <main className="flex flex-col items-center px-6">
            <section className="py-20 md:py-20 container">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-5xl md:text-6xl text-[#D92525] mb-6 font-hand">
                        Uma Doçura que Salva Vidas
                    </h2>
                    <div className="space-y-6 text-xl md:text-xl text-gray-700 leading-relaxed font-sans font-light">
                        <p className="text-start">
                            O <span className="font-bold text-[#D92525]">Pastel do Bem</span> é um movimento de solidariedade que faz diferença na vida de muitas crianças.
                            <br /><br />
                            Nos dias 5, 6 e 7 de Dezembro, cada Pastel de Belém comprado na Quinta do Marquês se transforma em apoio direto às crianças atendidas pelo Instituto Alpha do Bem.
                            <br /><br />
                            Participe dessa corrente do bem.
                            Sua contribuição gera impacto real e leva esperança a quem mais precisa.
                        </p>
                    </div>
                    <div className="pt-8">
                        <div className="w-24 h-1 bg-[#F2C94C] mx-auto rounded-full"></div>
                    </div>
                </div>
            </section>
            <section id="donate" className="py-10 bg-[#FFFDF5] relative">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-[#F2C94C] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#D92525] rounded-full blur-3xl"></div>
                </div>
                <div className="container relative z-10 text-center">
                    <div className="max-w-4xl mx-auto mb-20">
                        <div className="overflow-hidden border-none shadow-xl bg-white relative rounded-xl">
                            <div className="p-0">
                                <div className="w-full h-2 rounded-t-2xl bg-linear-to-r from-[#D92525] via-[#F2C94C] to-[#27AE60]"></div>
                                <div className="bg-white shadow-2xl rounded-2xl">
                                    <div className="p-8 md:p-12 flex flex-col justify-center text-center">
                                        <h3 className="text-3xl md:text-4xl text-[#D92525] mb-4 font-hand">
                                            Você pode comprar o Pastel Virtual
                                        </h3>
                                        <p className="text-gray-600 mb-6 font-sans text-lg">
                                            Transforme o futuro com o Pastel Virtual, uma <span className="font-bold">doação simbólica </span> que faz toda a diferença.
                                        </p>
                                        {/* <div className="flex justify-center items-center gap-4 mb-8">
                                            <span className="text-3xl font-bold text-gray-800 font-sans">R$ 12,00</span>
                                        </div> */}
                                        <div className="flex justify-center gap-3 flex-wrap">
                                            <a
                                                target="_blank"
                                                href="https://pagamento.pagbank.com.br/pagamento?code=92bdfef2-4995-4a77-b505-d99d054b3ff7&t=09f9e546-8d89-4784-a75e-fd3f89574dc8"
                                                className="flex max-w-120 items-center justify-center w-full bg-[#27AE60] hover:bg-[#219150] text-white font-hand text-xl md:text-2xl py-2 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                                            >
                                                <IoBagHandle className="mr-2 h-6 w-6" />1 unidade R$ 12,00
                                            </a>
                                            <a
                                                target="_blank"
                                                href="https://pagamento.pagbank.com.br/pagamento?code=92bdfef2-4995-4a77-b505-d99d054b3ff7&t=09f9e546-8d89-4784-a75e-fd3f89574dc8"
                                                className="flex max-w-120 items-center justify-center w-full bg-[#27AE60] hover:bg-[#219150] text-white font-hand text-xl md:text-2xl py-2 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                                            >
                                               <IoBagHandle className="mr-2 h-6 w-6" />6 unidades R$ 59,90
                                            </a> 
                                        </div>
                                        <span className="text-sm mt-6">
                                            *A compra do pastel virtual é um valor simbólico que não representa a compra do pastel
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="p-0 mt-12">
                                <div className="w-full h-2 rounded-t-2xl bg-linear-to-r from-[#D92525] via-[#F2C94C] to-[#27AE60]"></div>

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
                                    <div className="p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
                                        <h3 className="text-3xl md:text-4xl text-[#D92525] mb-4 font-hand">
                                            Leve o Sabor para Casa
                                        </h3>

                                        <p className="text-gray-600 mb-6 font-sans text-lg">
                                            Compre nossa caixa exclusiva com <span className="font-bold">6 Pastéis de Belém</span> fresquinhos.
                                            Parte do valor é revertido para a causa!
                                        </p>

                                        <div className="flex items-center justify-center gap-4 mb-8">
                                            <span className="text-3xl font-bold text-gray-800 font-sans">R$ 59,90</span>
                                        </div>

                                        <a
                                            target="_blank"
                                            href="https://pagamento.pagbank.com.br/pagamento?code=9a15f5b5-f6eb-4be6-90a7-3423a40eaac8&t=3fe4d166-282e-4f56-9210-38b508f721a6"
                                            className="flex items-center justify-center w-full bg-[#27AE60] hover:bg-[#219150] text-white font-hand text-2xl py-2 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                                        >
                                            <IoBagHandle className="mr-2 h-6 w-6" /> Comprar Agora
                                        </a>

                                        <p className="text-center text-sm mt-6">
                                            Retirada de 11/12 a 30/12, das 08:00 às 20:00 mediante comprovante de pagamento.
                                            Av. Sagitário, 555 - Alphaville Conde I, Barueri - SP, Barueri, São Paulo, Brazil, 06473-073
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <h2 className="text-5xl md:text-6xl text-[#D92525] mb-4 font-hand">
                        Faça sua Doação
                    </h2>
                    <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                        Escolha um valor e ajude a transformar o futuro de muitas crianças.<br /> Todo valor conta!
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
                        <DonationButton value={10} link="https://pagamento.pagbank.com.br/pagamento?code=b209ff36-dbbd-4888-8d90-241856850038&t=0d87131f-11bc-409f-a051-32e642b30ff2" />
                        <DonationButton value={20} link="https://pagamento.pagbank.com.br/pagamento?code=6ddfe018-1b85-4a92-8e16-c88da3052ed8&t=b355282d-0b22-4195-8a3b-831707bf0a48" />
                        <DonationButton value={30} link="https://pagamento.pagbank.com.br/pagamento?code=2bb4bbbf-d2bc-409e-8d67-e1fb7a371ee8&t=28134408-a0b9-4214-a133-c64cd9069e7d" />
                        <DonationButton value={50} link="https://pagamento.pagbank.com.br/pagamento?code=ee9f37d6-cf00-4340-8b21-10ba78932882&t=f537369c-96d7-4fd9-a8d8-46671aa69c56" />
                        <DonationButton value={100} link="https://pagamento.pagbank.com.br/pagamento?code=fa52fb81-7660-4c0a-8eaf-c0ae578b1096&t=d0db2f5e-ddca-4e4f-86ed-f550825f1d1d" />
                    </div>
                </div>
            </section>
        </main>
    )
}