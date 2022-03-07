import { faker } from "@faker-js/faker";
import React, { useEffect, useState } from "react";

function Suggestions() {
  const [suggestions, setSuggestion] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(6)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestion(suggestions);
  }, []);

  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='font-bold text-gray-400'>Suggestions for you</h3>
        <button className='text-gray-600 font-semibold'>See All</button>
      </div>

      {suggestions &&
        suggestions.map((profile) => (
          <div key={profile.id} className='flex justify-between mt-3'>
            <img
              src={profile.avatar}
              alt='user img'
              className='w-10 h-10 rounded-full border p-[2px]'
            />
            <div className="flex-1 mx-4">
              <h2 className='font-semibold text-sm'>{profile.username}</h2>
              <h3 className="text-gray-400 text-xs truncate">Works at {profile.company.name}</h3>
                </div>
                <button className="text-blue-500 text-xs font-bold">Follow</button>
          </div>
        ))}
    </div>
  );
}

export default Suggestions;
