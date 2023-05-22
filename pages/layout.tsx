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
        </Head>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    )
  }