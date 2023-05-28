import Layout, { siteTitle } from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import utilStyles from '@/styles/utils.module.css';

export default function FirstPost() {
   return (
      <Layout>
         <Head>
            <title>{siteTitle}</title>
         </Head>
         <section className={utilStyles.headingMd}>
            <p>[Your Self Introduction]</p>
            <p>
               (This is a sample website - you’ll be building a site like this on{' '}
               <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>
         </section>
      </Layout>
   );
}