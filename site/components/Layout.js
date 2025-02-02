import Link from 'next/link'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

import Nav from './Nav'
import siteConfig from '../config/siteConfig'

export default function Layout({ children, title='' }) {
  return (
    <>
      <NextSeo
        title={title}
        />
      <Head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
      </Head>
      <Nav />
      <main>
        {children}
      </main>
      <footer className="flex items-center justify-center w-full h-24 mt-16">
        <p className="flex items-center justify-center">
          Created by
          <a
            href={siteConfig.authorUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={siteConfig.authorLogo} alt={siteConfig.author} className="mx-1 h-6 inline-block" />
            {siteConfig.author}
          </a>
        </p>
      </footer>
    </>
  )
}
