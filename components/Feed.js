import { useSession } from "next-auth/react";
import React from "react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

function Feed() {
  const { data: session } = useSession();
  return (
    <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-4xl mx-auto ${!session && "!grid-cols-1 !max-w-2xl"}`}>
      <section className='col-span-2'>
        <Stories />
        <Posts />
      </section>

      {session && (
        <section className='hidden lg:inline-grid lg:col-span-1'>
          <div className='fixed top-20'>
            {/* mini profile */}
            <MiniProfile />
            {/* suggestions */}
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;
