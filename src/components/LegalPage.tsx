import type { ReactNode } from "react";
import { Head } from "vite-react-ssg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE } from "@/lib/site";

interface LegalPageProps {
  title: string;
  description: string;
  path: string; // p. ej. "/aviso-legal"
  children: ReactNode;
}

/** Plantilla común para las páginas legales (aviso legal, privacidad, cookies). */
const LegalPage = ({ title, description, path, children }: LegalPageProps) => (
  <>
    <Head>
      <title>{`${title} | Óptica San Francisco`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${SITE.url}${path}`} />
    </Head>

    <Navbar />
    <main className="pt-28 md:pt-32 pb-20 md:pb-28">
      <article className="container max-w-3xl prose prose-neutral max-w-none font-sans prose-headings:font-serif prose-headings:font-semibold prose-a:text-primary prose-h1:text-3xl md:prose-h1:text-4xl">
        <h1>{title}</h1>
        {children}
      </article>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default LegalPage;
