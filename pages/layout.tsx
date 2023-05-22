import Head from "next/head"
import { Navbar, Footer } from "@/components"

export default function Layout({ children }:any) {
    return (
      <>
        <Head>
          <title>TDI Productions</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Welcome to the eerie world of Twenty Dollar Insurance Productions! We specialize in creating bone-chilling short horror films that will leave you terrified. Get ready to dive into our collection of terrifying tales." />
          <meta name="keywords" content="horror films, short films, scary movies, TDI Productions" />
          <meta name="author" content="JT & Nicholas Kazousky" />
          <meta property="og:title" content="Twenty Dollar Insurance Productions" />
          <meta property="og:description" content="Welcome to the eerie world of Twenty Dollar Insurance Productions! We specialize in creating bone-chilling short horror films that will leave you terrified. Get ready to dive into our collection of terrifying tales." />
          <meta property="og:image" content="https://twitter.com/TDI_Productions/photo" />
          <meta property="og:url" content="https://tdi-productions.vercel.app" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Twenty Dollar Insurance Productions" />
          <meta name="twitter:description" content="Welcome to the eerie world of Twenty Dollar Insurance Productions! We specialize in creating bone-chilling short horror films that will leave you terrified. Get ready to dive into our collection of terrifying tales." />
          <meta name="twitter:image" content="https://twitter.com/TDI_Productions/photo" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#333333" />
        </Head>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    )
  }