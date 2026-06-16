import { Head } from "vite-react-ssg";
import { SITE } from "@/lib/site";

const telephone = SITE.phoneHref.replace("tel:", "");
const image = `${SITE.url}/og-image.jpg`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Optician",
  "@id": `${SITE.url}/#optica`,
  name: SITE.name,
  image,
  url: `${SITE.url}/`,
  description: SITE.description,
  telephone,
  email: SITE.email,
  priceRange: "€€",
  currenciesAccepted: "EUR",
  foundingDate: SITE.foundedYear,
  slogan: SITE.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    postalCode: SITE.address.postalCode,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.countryCode,
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  hasMap: SITE.mapsPlaceUrl,
  areaServed: { "@type": "City", name: SITE.address.city },
  openingHoursSpecification: SITE.openingHoursSpecification.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  sameAs: [SITE.social.instagram, SITE.social.facebook],
};

/** Cabecera SEO de la página de inicio. */
const HomeSeo = () => (
  <Head>
    <title>Óptica en León desde 1982 | Óptica San Francisco</title>
    <meta name="description" content={SITE.description} />
    <meta
      name="keywords"
      content="óptica León, óptica en León, gafas progresivas León, lentillas León, revisión visual León, óptico León, Plaza San Francisco León"
    />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href={`${SITE.url}/`} />

    <meta property="og:site_name" content={SITE.name} />
    <meta property="og:title" content="Óptica en León desde 1982 | Óptica San Francisco" />
    <meta property="og:description" content={SITE.description} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="es_ES" />
    <meta property="og:url" content={`${SITE.url}/`} />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Óptica San Francisco, en León desde 1982" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Óptica en León desde 1982 | Óptica San Francisco" />
    <meta name="twitter:description" content={SITE.description} />
    <meta name="twitter:image" content={image} />

    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </Head>
);

export default HomeSeo;
