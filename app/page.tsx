import Image from 'next/image'

export default function Home() {
	return (
		<>
			<section className="bg-justblue text-white py-20">
				<div className="container mx-auto text-center relative z-10">
					<h1 className="text-5xl font-bold mb-4">Lotería Pty</h1>
					<p className="text-xl mb-8">
						Obten al instante los resultados de la lotería de Panamá.
					</p>
					<a
						href="#section1"
						className="bg-white text-justblue py-2 px-6 rounded-full text-lg"
					>
						Descargar App
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
		</>
	);
}
