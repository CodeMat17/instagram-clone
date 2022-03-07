import React from "react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl mx-auto'>
      <section className='col-span-2'>
        <Stories />
        <Posts />
      </section>

      <section className='hidden md:inline-grid md:col-span-1'>
        <div className="fixed top-20">
          {/* mini profile */}
          <MiniProfile />
          {/* suggestions */}
          <Suggestions />
        </div>
      </section>
    </main>
  );
}

export default Feed;
