import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { init } from "@socialgouv/matomo-next";
const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;



export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Rémy Auroy - Développeur, UI/UX Designer, Graphiste, Automatisation et Domotique IOT",
    description: `Développeur web à Quimper. Spécialiste de la communication digitale et du développement web en Bretagne. Réalisez vos projets web et SEO avec moi !`,
    image: "/moi.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://pixeldigital.fr${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://pixeldigital.fr${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Rémy Auroy" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@remipixel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}

        <script>
          var _paq = window._paq = window._paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
          _paq.push(["setCookieDomain", "*.www.pixeldigital.fr"]);
          _paq.push(["setDomains", ["*.www.pixeldigital.fr","*.pixeldigital.fr"]]);
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="//www.matomo.aure6387.odns.fr/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '2']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
        </script>
        <noscript><p><img src="//www.matomo.aure6387.odns.fr/matomo.php?idsite=2&amp;rec=1" style="border:0;" alt="" /></p></noscript>


      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
