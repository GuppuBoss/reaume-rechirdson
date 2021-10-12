import Head from 'next/head';

export default function HeadDetails ( props ) {
  return (
    <>
      <Head>
        <title>{ props.title }</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Reaumerichardson welcomes you!" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      { props.children }
    </>
  )
}