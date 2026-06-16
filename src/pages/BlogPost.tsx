import { useParams, Link, Navigate } from "react-router-dom";
import { Head } from "vite-react-ssg";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { getArticle, formatDate } from "@/lib/blog";
import { SITE } from "@/lib/site";

const BlogPost = () => {
  const { slug } = useParams();
  const article = getArticle(slug);

  // Si no existe el artículo, a la lista del blog.
  if (!article) return <Navigate to="/blog" replace />;

  const url = `${SITE.url}/blog/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "es-ES",
    keywords: article.keywords.join(", "),
    author: { "@type": "Person", name: article.author, jobTitle: article.authorRole },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/og-image.jpg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <>
      <Head>
        <title>{`${article.title} | Óptica San Francisco`}</title>
        <meta name="description" content={article.description} />
        {article.keywords.length > 0 && <meta name="keywords" content={article.keywords.join(", ")} />}
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${SITE.url}/og-image.jpg`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

      <Navbar />
      <main className="pt-28 md:pt-32 pb-20 md:pb-28">
        <article className="container max-w-2xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground font-sans hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Link>

          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-primary mb-3">
            {article.category}
          </p>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold leading-tight mb-5">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground font-sans mb-10 pb-8 border-b border-border">
            <span className="inline-flex items-center gap-1.5">
              <User className="w-4 h-4 text-primary" />
              {article.author}
              {article.authorRole && <span className="text-muted-foreground/70">· {article.authorRole}</span>}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary" />
              {formatDate(article.date)}
            </span>
          </div>

          <div className="prose prose-neutral max-w-none font-sans prose-headings:font-serif prose-headings:font-semibold prose-a:text-primary prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:font-sans prose-blockquote:not-italic">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="font-serif text-xl mb-4">¿Hablamos de tu visión?</p>
            <Button size="lg" asChild>
              <Link to="/#reserva">Reserva tu cita</Link>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default BlogPost;
