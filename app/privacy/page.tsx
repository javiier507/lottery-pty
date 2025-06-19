export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Política de Privacidad para Lotería de Panamá</h1>
      <p className="text-sm text-gray-500 mb-6 text-center">Última actualización: 18 de junio de 2025</p>
      <p className="text-base text-gray-700 mb-4 text-center">
        Esta Política de Privacidad describe cómo Lotería de Panamá (en adelante, "la Aplicación") maneja la información del usuario. Tu privacidad es importante para nosotros y estamos comprometidos a protegerla.
      </p>
      <div className="text-base text-gray-700 space-y-4">
        <div>
          <span className="font-semibold">1. Renuncia de Responsabilidad y Afiliación</span>
          <p>
            Esta aplicación no es una aplicación oficial del gobierno de Panamá y no representa a ninguna entidad gubernamental. Es un proyecto independiente desarrollado para ofrecer a los usuarios un acceso conveniente a los resultados de la Lotería Nacional de Beneficencia de Panamá. La información se obtiene de fuentes públicas y oficiales, pero siempre se recomienda verificar los resultados con la fuente oficial.
          </p>
        </div>
        <div>
          <span className="font-semibold">2. Información que Recopilamos (y No Recopilamos)</span>
          <div className="ml-4">
            <span className="font-medium">a) Datos que Guardas en la Aplicación (Almacenamiento Local)</span>
            <ul className="list-disc ml-6">
              <li>Función "Guardar mis billetes/chances": La aplicación te permite guardar los números de tus billetes y chances de lotería para una fácil verificación.</li>
              <li>Almacenamiento: Esta información se guarda exclusivamente en el almacenamiento local de tu dispositivo móvil.</li>
              <li>Privacidad: No recopilamos, enviamos, ni tenemos acceso a los números que guardas. Estos datos nunca abandonan tu dispositivo y no se almacenan en ninguna base de datos o servidor externo. El único propósito de esta función es avisarte si has ganado cuando se publiquen nuevos resultados.</li>
            </ul>
            <span className="font-medium">b) Datos que No Recopilamos</span>
            <ul className="list-disc ml-6">
              <li>No recopilamos ningún tipo de información de identificación personal como tu nombre, dirección de correo electrónico, número de teléfono o ubicación. No requerimos que crees una cuenta para usar la aplicación.</li>
            </ul>
            <span className="font-medium">c) Datos de Uso y Diagnóstico (Anónimos)</span>
            <ul className="list-disc ml-6">
              <li>Podemos recopilar información anónima sobre cómo interactúas con la aplicación. Esto incluye:</li>
              <ul className="list-disc ml-10">
                <li>Informes de fallos y errores.</li>
                <li>Datos de rendimiento de la aplicación.</li>
                <li>Funciones más utilizadas.</li>
              </ul>
              <li>Esta información es completamente anónima, se agrupa con los datos de otros usuarios y se utiliza únicamente para identificar problemas, solucionar errores y mejorar la estabilidad y la experiencia general de la aplicación.</li>
            </ul>
          </div>
        </div>
        <div>
          <span className="font-semibold">3. Cómo Usamos tu Información</span>
          <ul className="list-disc ml-6">
            <li>Datos guardados localmente: Para proveer la funcionalidad principal de la aplicación, que es permitirte guardar tus números y notificarte si resultan ganadores.</li>
            <li>Datos de diagnóstico anónimos: Para mantener y mejorar el rendimiento y la fiabilidad de la aplicación.</li>
          </ul>
        </div>
        <div>
          <span className="font-semibold">4. Cómo Compartimos tu Información</span>
          <p>No compartimos, vendemos ni alquilamos tus datos personales con terceros. Dado que la información sensible (tus números de lotería) se almacena localmente en tu dispositivo, no tenemos acceso a ella y, por lo tanto, no podemos compartirla.</p>
        </div>
        <div>
          <span className="font-semibold">5. Seguridad de los Datos</span>
          <p>Nos tomamos en serio la seguridad de tus datos. Al almacenar la información de tus billetes y chances directamente en tu dispositivo, la seguridad de esos datos está protegida por las propias medidas de seguridad de tu teléfono.</p>
        </div>
        <div>
          <span className="font-semibold">6. Enlaces a Sitios de Terceros</span>
          <p>La aplicación puede contener enlaces a sitios web de terceros (como el sitio oficial de la lotería) para tu conveniencia. No somos responsables de las prácticas de privacidad ni del contenido de dichos sitios. Te recomendamos leer sus políticas de privacidad.</p>
        </div>
        <div>
          <span className="font-semibold">7. Cambios a esta Política de Privacidad</span>
          <p>Podemos actualizar nuestra Política de Privacidad ocasionalmente. Te notificaremos de cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "Última actualización" en la parte superior.</p>
        </div>
        <div>
          <span className="font-semibold">8. Contacto</span>
          <p>Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos a través de: <a href="https://lottery-pty.vercel.app/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">https://lottery-pty.vercel.app/</a></p>
        </div>
      </div>
    </main>
  );
}
