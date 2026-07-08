import LegalPage from "@/components/LegalPage";
import { SITE, fullAddress } from "@/lib/site";

const LAST_UPDATED = "8 de julio de 2026";

const AvisoLegal = () => (
  <LegalPage
    title="Aviso legal"
    description="Información legal y datos identificativos del titular del sitio web de Óptica San Francisco (Gafasvan, S.L.)."
    path="/aviso-legal"
  >
    <p>
      En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
      Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se ponen a disposición de
      los usuarios los siguientes datos identificativos del titular de este sitio web.
    </p>

    <h2>1. Datos identificativos</h2>
    <ul>
      <li><strong>Titular:</strong> {SITE.legal.companyName}</li>
      <li><strong>Nombre comercial:</strong> {SITE.name}</li>
      <li><strong>CIF:</strong> {SITE.legal.cif}</li>
      <li><strong>Domicilio social:</strong> {SITE.legal.registeredAddress}</li>
      <li><strong>Establecimiento:</strong> {fullAddress}</li>
      <li><strong>Teléfono:</strong> {SITE.phoneDisplay}</li>
      <li><strong>Email:</strong> {SITE.email}</li>
      <li><strong>Sitio web:</strong> {SITE.url}</li>
    </ul>

    <h2>2. Objeto</h2>
    <p>
      El presente aviso legal regula el uso del sitio web {SITE.url}, cuya finalidad es
      ofrecer información sobre los servicios de {SITE.name} (óptica en León), así como permitir
      la solicitud de citas y el contacto con el establecimiento.
    </p>

    <h2>3. Condiciones de uso</h2>
    <p>
      El acceso a este sitio web es gratuito y atribuye la condición de usuario, que se compromete
      a hacer un uso adecuado de los contenidos y servicios conforme a la ley, a este aviso legal,
      a la buena fe y al orden público. El usuario se abstendrá de utilizar el sitio con fines
      ilícitos o lesivos para el titular o terceros.
    </p>

    <h2>4. Propiedad intelectual e industrial</h2>
    <p>
      Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño y código) son
      titularidad de {SITE.legal.companyName} o de terceros que han autorizado su uso, y están
      protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su
      reproducción, distribución o transformación sin autorización expresa del titular.
    </p>

    <h2>5. Responsabilidad</h2>
    <p>
      El titular no se hace responsable de los daños que pudieran derivarse de un uso inadecuado
      del sitio web, ni de las interrupciones, errores u omisiones que puedan producirse por
      causas ajenas a su control. Este sitio puede contener enlaces a páginas de terceros, sobre
      cuyos contenidos el titular no ejerce control alguno.
    </p>

    <h2>6. Protección de datos</h2>
    <p>
      El tratamiento de los datos personales de los usuarios se rige por nuestra{" "}
      <a href="/politica-de-privacidad">Política de Privacidad</a> y nuestra{" "}
      <a href="/politica-de-cookies">Política de Cookies</a>.
    </p>

    <h2>7. Legislación aplicable</h2>
    <p>
      El presente aviso legal se rige por la legislación española. Para la resolución de cualquier
      controversia, las partes se someterán a los juzgados y tribunales que correspondan conforme
      a derecho.
    </p>

    <p className="text-sm text-muted-foreground">Última actualización: {LAST_UPDATED}.</p>
  </LegalPage>
);

export default AvisoLegal;
