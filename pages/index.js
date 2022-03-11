import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className='bg-gray-50 scrollbar-hide'>
      <Head>
        <title>Instagram Clone | Home</title>
        <meta name='description' content='Instagram Clone' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Feed />
      <Modal />
    </div>
  );
}
