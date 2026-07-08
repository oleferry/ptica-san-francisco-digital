import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";
import { OPEN_COOKIE_SETTINGS_EVENT } from "@/components/Analytics";

const LAST_UPDATED = "8 de julio de 2026";

const PoliticaCookies = () => (
  <LegalPage
    title="Política de cookies"
    description="Qué cookies usa el sitio web de Óptica San Francisco, con qué finalidad y cómo gestionarlas o revocar tu consentimiento."
    path="/politica-de-cookies"
  >
    <p>
      Este sitio web utiliza cookies. En cumplimiento de la normativa aplicable (LSSI-CE y RGPD),
      te explicamos qué son, cuáles usamos y cómo puedes gestionarlas.
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
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Proveedor</th>
            <th>Finalidad</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>_ga</code></td>
            <td>Google Analytics</td>
            <td>Distinguir usuarios de forma anónima y agregada</td>
            <td>2 años</td>
          </tr>
          <tr>
            <td><code>_ga_&lt;ID&gt;</code></td>
            <td>Google Analytics</td>
            <td>Mantener el estado de la sesión de análisis</td>
            <td>2 años</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      Más información en las{" "}
      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
        políticas de Google
      </a>.
    </p>

    <h2>3. Almacenamiento técnico (no es seguimiento)</h2>
    <p>
      Para recordar tu decisión sobre las cookies guardamos un pequeño dato en tu navegador
      (localStorage). No es una cookie de seguimiento, no se comparte con terceros y está exento
      de consentimiento por ser estrictamente necesario (art. 22.2 LSSI-CE).
    </p>

    <h2>4. Contenido embebido de terceros</h2>
    <p>
      El <strong>calendario de reservas (SimplyBook.me)</strong> es un servicio externo. Para
      evitar cargar cookies de terceros sin que lo decidas, solo se activa cuando pulsas el botón
      "Cargar el calendario de reservas" en la sección de reservas de la web.
    </p>
    <p>
      El <strong>mapa de ubicación (Google Maps)</strong> se muestra siempre embebido, ya que es
      información básica de localización del establecimiento; su carga puede implicar una
      conexión con los servidores de Google, sujeta a sus propias políticas.
    </p>

    <h2>5. Cómo gestionar o revocar el consentimiento</h2>
    <ul>
      <li>
        Puedes <strong>cambiar tu decisión en cualquier momento</strong> pulsando{" "}
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
          className="text-primary underline hover:no-underline"
        >
          «Configurar cookies»
        </button>{" "}
        al final de esta página o en el pie de cualquier página del sitio.
      </li>
      <li>
        También puedes <strong>configurar tu navegador</strong> para bloquear o eliminar cookies.
        Consulta la ayuda de tu navegador (Chrome, Firefox, Safari, Edge…).
      </li>
    </ul>

    <h2>6. Más información</h2>
    <p>
      Para más detalles sobre cómo tratamos tus datos, consulta nuestra{" "}
      <a href="/politica-de-privacidad">Política de Privacidad</a>. Si tienes dudas, puedes
      escribirnos a {SITE.email}.
    </p>

    <p className="text-sm text-muted-foreground">Última actualización: {LAST_UPDATED}.</p>
  </LegalPage>
);

export default PoliticaCookies;
