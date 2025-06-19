import Image from 'next/image'

export default function Home() {
    return (
        <>
            <section className="w-full bg-yellow-100 text-yellow-900 text-center py-2 px-4 text-sm">
                <span>
                    Esta aplicación es independiente y no está afiliada a la Lotería Nacional de Beneficencia de Panamá. 
                    <a href="#section4" className="underline font-medium hover:text-yellow-700 ml-1">Ver más</a>
                    <span className="mx-2">|</span>
                    <a href="/privacy" className="underline font-medium hover:text-blue-700 ml-1">Política de Privacidad</a>
                </span>
            </section>

            <section className="bg-justblue text-white py-10">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl font-bold mb-4">Lotería de Panamá</h1>
                    <h2 className="text-xl mb-8">
                        Obten al instante los resultados de la Lotería Nacional de Panamá.
                    </h2>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.penalbar06.loteriaapp&pcampaignid=web_share"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4"
                        style={{ minHeight: 40 }}
                    >
                        <Image
                            src="/img/google-play-button.png"
                            alt="Descargar en Google Play"
                            width={270}
                            height={80}
                            style={{ display: 'block', height: 'auto', maxWidth: '100%' }}
                            priority
                        />
                    </a>
                </div>
            </section>

            <section id="section1" className="py-20 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        ¿Como funciona?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="flex flex-col h-full rounded-lg overflow-hidden bg-white">
                            <Image 
                                src="/img/1.jpg" 
                                alt="Sorteos" 
                                width={500} 
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                            <figcaption className="text-base text-gray-600 px-4 py-3 bg-gray-50 border-t border-gray-200">
                                Visualiza todos los sorteos jugados ordenados por fecha.
                            </figcaption>
                        </div>
                        <div className="flex flex-col h-full rounded-lg overflow-hidden bg-white">
                            <Image 
                                src="/img/7.jpg" 
                                alt="Ganador" 
                                width={500} 
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                            <figcaption className="text-base text-gray-600 px-4 py-3 bg-gray-50 border-t border-gray-200">
                                Activa las notificaciones para recibir alertas de cuanto se publique un nuevo sorteo de lotería.
                            </figcaption>
                        </div>
                    </div>
                </div>
            </section>

            <section id="section2" className="py-20 bg-gray-50 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        ¡Entérate si ganaste!
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="flex flex-col h-full rounded-lg overflow-hidden bg-white">
                            <Image 
                                src="/img/5.jpg" 
                                alt="Resultados" 
                                width={500} 
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                            <figcaption className="text-base text-gray-600 px-4 py-3 bg-gray-50 border-t border-gray-200">
                                Guardas tus billetes y chances de lotería y cuando se publique un nuevo sorteo, te avisaremos si fuiste unos de los ganadores.
                            </figcaption>
                        </div>
                        <div className="flex flex-col h-full rounded-lg overflow-hidden bg-white">
                            <Image 
                                src="/img/3.jpg"
                                alt="Notificaciones" 
                                width={500} 
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                            <figcaption className="text-base text-gray-600 px-4 py-3 bg-gray-50 border-t border-gray-200">
                                Te diremos en que premio y con cuantas fracciones ganaste.
                            </figcaption>
                        </div>
                    </div>
                </div>
            </section>

            <section id="section3" className="py-20 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        Limitaciones
                    </h2>
                    <p className="text-lg text-gray-600">
                        Solo tenemos recopilados los resultados de lotería desde el 17 de
                        noviembre del 2024.
                    </p>
                </div>
            </section>

            <section id="section4" className="py-16 bg-gray-100 text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Renuncia de Responsabilidad y Fuente de Datos
                    </h2>
                    <p className="text-base text-gray-700 mb-2">
                        Esta aplicación es un proyecto personal e independiente y no tiene ninguna afiliación, asociación, autorización o respaldo por parte de la Lotería Nacional de Beneficencia de Panamá ni de ninguna otra entidad gubernamental de Panamá.
                    </p>
                    <p className="text-base text-gray-700 mb-2">
                        La aplicación "Resultados Lotería Panamá" se ha desarrollado con el objetivo de ofrecer una herramienta conveniente para consultar los resultados de los sorteos.
                    </p>
                    <p className="text-base text-gray-700 mb-2">
                        <span className="font-semibold">Fuente de la Información:</span> Los resultados mostrados en esta aplicación se obtienen de fuentes públicas y oficiales, principalmente del sitio web oficial de la Lotería Nacional de Beneficencia de Panamá y de medios de comunicación locales. Siempre se recomienda verificar los resultados con las fuentes oficiales antes de tomar cualquier decisión. La información oficial se puede consultar en: <a href="https://www.instagram.com/lnbpma/?hl=es-la" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Instagram Oficial de la LNB</a>
                    </p>
                </div>
            </section>
        </>
    );
}
