import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

const PoliticaCookies = () => (
  <LegalPage
    title="Política de cookies"
    description="Qué cookies usa el sitio web de Óptica San Francisco, con qué finalidad y cómo gestionarlas o revocar tu consentimiento."
    path="/politica-de-cookies"
  >
    <p>
      Este sitio web utiliza cookies. En cumplimiento de la normativa aplicable, te explicamos qué
      son, cuáles usamos y cómo puedes gestionarlas.
    </p>

    <h2>1. ¿Qué son las cookies?</h2>
    <p>
      Las cookies son pequeños archivos que se descargan en tu dispositivo al navegar por una web y
      que permiten, entre otras cosas, recordar tus preferencias o analizar el uso del sitio.
    </p>

    <h2>2. Cookies que utilizamos</h2>
    <p>
      <strong>Solo instalamos cookies analíticas si das tu consentimiento</strong> a través del
      banner que aparece al entrar. Si lo rechazas, no se activa ningún seguimiento.
    </p>
    <ul>
      <li>
        <strong>Analíticas (Google Analytics):</strong> cookies <code>_ga</code> y{" "}
        <code>_ga_&lt;ID&gt;</code>, que nos ayudan a entender de forma agregada y anónima cómo se
        usa la web para mejorarla. Las gestiona Google y suelen caducar a los 2 años. Más
        información en las{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          políticas de Google
        </a>.
      </li>
    </ul>
    <p>
      Para recordar tu decisión sobre las cookies utilizamos además un pequeño almacenamiento
      técnico en tu navegador (no es una cookie de seguimiento y es necesario para respetar tu
      elección).
    </p>
    <p>
      Ten en cuenta que algunas funciones embebidas de terceros (como el calendario de reservas de
      SimplyBook.me o los formularios de Tally) pueden instalar sus propias cookies en sus
      respectivos dominios cuando las utilizas, sujetas a sus propias políticas.
    </p>

    <h2>3. Cómo gestionar o revocar el consentimiento</h2>
    <ul>
      <li>
        Puedes <strong>retirar tu consentimiento</strong> en cualquier momento borrando las cookies
        y los datos del sitio desde la configuración de tu navegador; al volver a entrar, te
        aparecerá de nuevo el banner para elegir.
      </li>
      <li>
        Puedes <strong>configurar tu navegador</strong> para bloquear o eliminar cookies. Consulta
        la ayuda de tu navegador (Chrome, Firefox, Safari, Edge…).
      </li>
    </ul>

    <h2>4. Más información</h2>
    <p>
      Para más detalles sobre cómo tratamos tus datos, consulta nuestra{" "}
      <a href="/politica-de-privacidad">Política de Privacidad</a>. Si tienes dudas, puedes
      escribirnos a {SITE.email}.
    </p>
  </LegalPage>
);

export default PoliticaCookies;
