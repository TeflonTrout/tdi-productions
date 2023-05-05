import '@/styles/globals.css'
import { useState } from 'react';
import type { AppProps } from 'next/app'
import Layout from './layout'

export default function App({ Component, pageProps }: AppProps) {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(true);
  return (
    <Layout>
      {isModalOpen ? <div 
        style={{
          width: '70vw',
          height: '70vh',
          zIndex: "99",
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignItems:"center",
          top: "50%",
          backgroundColor: 'grey',
          left: "50%",
          transform: 'translate(-50%, -50%)',
          borderRadius: '10px'
        }}
      >
        <div className="hero">
          <div
            className="closeBtn"
            style={{
              position: 'fixed',
              left: '90%',
              top: '10%',
              background: 'black',
              borderRadius: '10px',
              padding: "8px",
              cursor: 'pointer'
            }}
            onClick={() => setIsModalOpen(false)}
          >
            <h1>X</h1>
          </div>
          <h1>Please Note: This page is still under construction</h1>
        </div>
      </div> : null}
      <Component {...pageProps} />
    </Layout>
  )
}
