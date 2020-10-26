import Head from 'next/head';
import Link from 'next/link';

export function App({ children }) {
  return (
    <>
      <Head>
        <title>React & Apollo with Next.js Starter</title>
      </Head>
      <header>
        <h1>React & Apollo with Next.js Starter</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/client-only">
              <a>Client-Only</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
        <style jsx global>{`
          * {
            font-family: Roboto;
          }
          body {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </main>
    </>
  );
}
