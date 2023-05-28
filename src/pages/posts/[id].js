import Date from "@/components/Date";
import Layout from "@/components/Layout";
import { getPostsDataById, getSortedPostsData } from "@/lib/posts";
import Head from "next/head";
import Link from "next/link";


export default function Post({ postData }) {
   return (
      <Layout>
         <Head>
            <title>{postData.title}</title>
         </Head>
         {postData.title}
         <br />
         {postData.id}
         <br />
         <Date dateString={postData.date} />
      </Layout>
   );
}

export async function getStaticPaths() {
   const data = getSortedPostsData();
   const paths = data.map(value => {
      return {
         params: {
            id: value.id
         }
      }
   })
   return {
      paths,
      fallback: false,
   };
}

export async function getStaticProps({ params }) {
   const postData = getPostsDataById(params.id);
   return {
      props: {
         postData,
      },
   };
}