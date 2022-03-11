import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import Header from "../../components/Header";

export default function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className=' flex flex-col justify-center items-center mt-32 py-2 px-15 text-center'>
        <div className='relative w-36 h-12'>
          <Image
            src='/insta-name.png'
            alt='instagram'
            priority
            objectFit='cover'
            layout='fill'
          />
        </div>
        <p className="max-w-xs mx-auto font-xs italic">NB: This is not the actual instagram app but a cloned app.</p>
        <div className='mt-24 flex flex-col items-center justify-center space-y-2'>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className='p-3 bg-blue-500 rounded-lg text-white'>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
