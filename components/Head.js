import React from 'react'
import Head from 'next/head'

export default () => (
  <header>
    <Head>
      <title>2017 亞洲智慧型機器人大賽</title>
      <style>{`

        html, body{
          height: 100%;
          //font-size:75%;
          position:relative;
          overflow: hidden;
        }

        body {
          margin: 0 auto;
          //overflow:hidden;
          color: gray;
          //background-image: linear-gradient(137deg, #5FE2CC 0%, #4C4CAE 100%);
          background-repeat: no-repeat;
        }

         #__next{
          height:100%;
        }


      `}</style>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
    </Head>
  </header>
)
