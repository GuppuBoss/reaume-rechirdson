import '../styles/globals.css'
import HeadDetails from '../components/HeadDetails'

function MyApp ( { Component, pageProps } ) {
  return <HeadDetails title="Reaume Richardson">
    <Component { ...pageProps } />
  </HeadDetails>
}

export default MyApp
