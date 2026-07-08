import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

const LAST_UPDATED = "8 de julio de 2026";

const PoliticaPrivacidad = () => (
  <LegalPage
    title="Política de privacidad"
    description="Cómo trata Óptica San Francisco (Gafasvan, S.L.) los datos personales: finalidades, base legal, conservación y derechos de los usuarios."
    path="/politica-de-privacidad"
  >
    <p>
      En {SITE.legal.companyName} ({SITE.name}) nos tomamos en serio la privacidad. Esta política
      explica cómo tratamos los datos personales que nos facilitas a través de este sitio web,
      conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD).
    </p>

    <h2>1. Responsable del tratamiento</h2>
    <ul>
      <li><strong>Titular:</strong> {SITE.legal.companyName} ({SITE.name})</li>
      <li><strong>CIF:</strong> {SITE.legal.cif}</li>
      <li><strong>Domicilio:</strong> {SITE.legal.registeredAddress}</li>
      <li><strong>Email:</strong> {SITE.email}</li>
      <li><strong>Teléfono:</strong> {SITE.phoneDisplay}</li>
    </ul>

    <h2>2. Qué datos tratamos y con qué finalidad</h2>
    <p>Tratamos los datos que nos facilitas voluntariamente cuando:</p>
    <ul>
      <li>
        <strong>Reservas una cita</strong> a través de nuestro calendario online (SimplyBook.me):
        nombre, contacto y datos de la cita, para gestionar y confirmar tu visita. Ese calendario
        solo se carga en tu navegador si pulsas para activarlo (ver{" "}
        <a href="/politica-de-cookies">Política de Cookies</a>).
      </li>
      <li>
        <strong>Rellenas un formulario</strong> (por ejemplo, la reserva de gafas para el
        eclipse, gestionada con Tally): los datos que indiques, para atender tu solicitud.
      </li>
      <li>
        <strong>Nos contactas</strong> por teléfono, email o WhatsApp: los datos que nos
        proporciones, para responderte y atender tu consulta.
      </li>
      <li>
        <strong>Nos facilitas tu email para recibir novedades</strong> (en la óptica o por otros
        canales, gestionado con MailerLite): para enviarte información comercial, solo si lo has
        solicitado o has dado tu consentimiento.
      </li>
      <li>
        <strong>Navegas por la web</strong>: datos de uso mediante cookies analíticas, únicamente
        si das tu consentimiento en el banner de cookies (ver{" "}
        <a href="/politica-de-cookies">Política de Cookies</a>).
      </li>
    </ul>

    <h2>3. Base legal</h2>
    <ul>
      <li><strong>Tu consentimiento</strong> (cookies analíticas, envío de comunicaciones comerciales).</li>
      <li><strong>La gestión de tu solicitud o relación con nosotros</strong> (citas, consultas, formularios).</li>
      <li><strong>El interés legítimo</strong> en atender y mejorar nuestra atención.</li>
    </ul>

    <h2>4. Conservación de los datos</h2>
    <p>
      Conservamos tus datos durante el tiempo necesario para la finalidad para la que se
      recogieron y, posteriormente, durante los plazos legalmente exigibles. Cuando dejen de ser
      necesarios, se suprimen de forma segura.
    </p>

    <h2>5. Proveedores y servicios de terceros</h2>
    <p>
      Para prestar el servicio nos apoyamos en algunos proveedores. Con los que actúan bajo
      nuestras instrucciones (encargados del tratamiento), tenemos las garantías exigidas por el
      RGPD. Otros, cuando interactúas directamente con ellos (por ejemplo, al reservar una cita o
      rellenar un formulario), tratan esos datos conforme a su propia política de privacidad, que
      puedes consultar antes de usarlos:
    </p>
    <ul>
      <li><strong>Vercel</strong> — alojamiento del sitio web. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Política de privacidad</a>.</li>
      <li><strong>DonDominio</strong> — dominio y correo electrónico.</li>
      <li><strong>Google</strong> (Google Analytics) — analítica web, solo con tu consentimiento. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de privacidad</a>.</li>
      <li><strong>SimplyBook.me</strong> — gestión de reservas de cita. <a href="https://simplybook.me/en/policy" target="_blank" rel="noopener noreferrer">Política de privacidad</a>.</li>
      <li><strong>Tally</strong> — formularios. <a href="https://tally.so/help/terms-and-privacy" target="_blank" rel="noopener noreferrer">Términos y privacidad</a>.</li>
      <li><strong>MailerLite</strong> — envío de comunicaciones por email (si te suscribes). <a href="https://www.mailerlite.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Política de privacidad</a>.</li>
      <li><strong>Meta (WhatsApp)</strong> — comunicación por WhatsApp, si eliges ese canal. <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Política de privacidad</a>.</li>
    </ul>
    <p>
      No cedemos tus datos a terceros con fines propios, salvo obligación legal. Algunos de estos
      proveedores pueden realizar transferencias internacionales de datos; en tal caso, se
      realizan con las garantías previstas en el RGPD (cláusulas contractuales tipo u otros
      mecanismos adecuados).
    </p>

    <h2>6. Menores de edad</h2>
    <p>
      Este sitio web no está dirigido a menores de 14 años. No recogemos conscientemente datos de
      menores sin el consentimiento de sus padres, madres o tutores legales. Si eres menor de esa
      edad, no debes facilitarnos datos personales sin su autorización.
    </p>

    <h2>7. Tus derechos</h2>
    <p>
      Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del
      tratamiento y portabilidad escribiendo a <strong>{SITE.email}</strong>, indicando el derecho
      que deseas ejercer. También tienes derecho a presentar una reclamación ante la Agencia
      Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>)
      si consideras que el tratamiento no se ajusta a la normativa.
    </p>

    <h2>8. Seguridad</h2>
    <p>
      Aplicamos las medidas técnicas y organizativas adecuadas para proteger tus datos frente a
      pérdida, mal uso o acceso no autorizado.
    </p>

    <p className="text-sm text-muted-foreground">Última actualización: {LAST_UPDATED}.</p>
  </LegalPage>
);

export default PoliticaPrivacidad;
