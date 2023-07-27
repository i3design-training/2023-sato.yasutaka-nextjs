import Link from "next/link";
import Script from "next/script";
import Layout from "../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(
              `script loaded correctly, window.FB has been populated`
            )
          }
        />
        <h1>最初の投稿（first-post.jsに書いています。）</h1>
        <h2>
          <Link href="/">/に戻ります（first-post.jsに書いています）</Link>
        </h2>
      </Layout>
    </>
  );
}
