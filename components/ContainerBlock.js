import React from "react";
import { useRouter } from "next/router";
import { useEffect } from 'react'
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const meta = {
    title: "Rémy Auroy - Développeur, UI/UX Designer, Graphiste, Automatisation et Domotique IOT",
    description: `Développeur web et graphiste à Quimper. Spécialiste de la communication digitale et de l'hébergement web en Bretagne. Viens réaliser tes projets web avec moi !`,
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
          content={`https://remyauroy.fr${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://remyauroy.fr${router.asPath}`}
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
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
