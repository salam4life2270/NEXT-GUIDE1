import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';



export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
    </Head>
       
      <h1>Hassan Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
        
      </h2>
      <img src="/images/profile.jpeg" alt="Your Name" />
    </Layout>
  );
}