import Head from 'next/head';
import Layout, { siteTitle } from '../pages/components/layout';
// import Layout, { siteTitle } from '../components/layout.js';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[index.jsのテキストです。]</p>
        <p>
          (index.jsで文章を書いています。{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}