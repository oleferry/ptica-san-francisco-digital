import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

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
        <strong>Reservas una cita</strong> (a través del sistema de reservas SimplyBook):
        nombre, contacto y datos de la cita, para gestionar y confirmar tu visita.
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
        <strong>Te suscribes a comunicaciones comerciales</strong> (si procede): tu email, para
        enviarte información y novedades, previa solicitud o consentimiento.
      </li>
      <li>
        <strong>Navegas por la web</strong>: datos de uso mediante cookies analíticas, únicamente
        si das tu consentimiento (ver <a href="/politica-de-cookies">Política de Cookies</a>).
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

    <h2>5. Destinatarios y encargados del tratamiento</h2>
    <p>
      No cedemos tus datos a terceros, salvo obligación legal. Para prestar el servicio nos apoyamos
      en proveedores que actúan como encargados del tratamiento, con las debidas garantías:
    </p>
    <ul>
      <li><strong>Vercel</strong> — alojamiento del sitio web.</li>
      <li><strong>DonDominio</strong> — dominio y correo electrónico.</li>
      <li><strong>Google</strong> (Google Analytics) — analítica web, previo consentimiento.</li>
      <li><strong>SimplyBook.me</strong> — gestión de reservas de cita.</li>
      <li><strong>Tally</strong> — formularios.</li>
      <li><strong>MailerLite</strong> — envío de comunicaciones por email (si te suscribes).</li>
      <li><strong>Meta (WhatsApp)</strong> — comunicación por WhatsApp, si eliges ese canal.</li>
    </ul>
    <p>
      Algunos de estos proveedores pueden realizar transferencias internacionales de datos; en
      tal caso, se realizan con las garantías previstas en el RGPD (cláusulas contractuales tipo u
      otros mecanismos adecuados).
    </p>

    <h2>6. Tus derechos</h2>
    <p>
      Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del
      tratamiento y portabilidad escribiendo a <strong>{SITE.email}</strong>, indicando el derecho
      que deseas ejercer. También tienes derecho a presentar una reclamación ante la Agencia
      Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>)
      si consideras que el tratamiento no se ajusta a la normativa.
    </p>

    <h2>7. Seguridad</h2>
    <p>
      Aplicamos las medidas técnicas y organizativas adecuadas para proteger tus datos frente a
      pérdida, mal uso o acceso no autorizado.
    </p>
  </LegalPage>
);

export default PoliticaPrivacidad;
