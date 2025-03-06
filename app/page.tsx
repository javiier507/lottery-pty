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
					<p className="text-lg text-gray-600">
						Visualiza todos los sorteos jugados ordenados por fecha.
					</p>
					<p className="text-lg text-gray-600">
						Activa las notificaciones para recibir alertas de cuanto se publique
						un nuevo sorteo de lotería.
					</p>
				</div>
			</section>

			<section id="section2" className="py-20 bg-gray-50 text-center">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-semibold text-gray-800 mb-4">
						¡Entérate si ganaste!
					</h2>
					<p className="text-lg text-gray-600">
						Guardas tus billetes y chances de lotería y cuando se publique un
						nuevo sorteo, te avisaremos si fuiste unos de los ganadores.
					</p>
					<p className="text-lg text-gray-600">
						Te diremos en que premio y con cuantas fracciones ganaste.
					</p>
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
