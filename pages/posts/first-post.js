import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title><script src="https://connect.facebook.net/en_US/sdk.js" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>

      {/* ตรวจสอบชื่อไฟล์รูปภาพให้ตรงกับที่เก็บไว้ใน public/images/ */}
      <Image
        src="/images/image.png" 
        height={144}
        width={144}
        alt="Your Name"
      />

      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
}