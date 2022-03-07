import {
  HeartIcon,
  MenuAlt3Icon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signOut } from "next-auth/react";
import Image from "next/image";

function Header() {
  return (
    <nav className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='flex items-center justify-between max-w-6xl mx-auto bg-white px-4 py-1'>
        <div className='flex justify-center pr-4'>
          <div className='relative h-8 w-8 lg:hidden flex-shrink-0 cursor-pointer'>
            <Image
              src='/insta-icon.jpg'
              priority
              alt='instgram logo'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='relative h-10 w-32 hidden lg:inline-grid cursor-pointer'>
            <Image
              src='/insta-name.png'
              priority
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
        <div className='max-w-sm'>
          <div className='flex items-center border border-gray-300 px-2 bg-gray-50 rounded-md'>
            <div className='pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-400' />
            </div>
            <input
              type='search'
              name='search'
              id='search'
              placeholder='Search'
              className='px-2 py-1 border-none out focus:ring-0 outline-none bg-gray-50 text-sm w-32 sm:w-42'
            />
          </div>
        </div>

        <div className=' flex items-center space-x-4'>
          <HomeIcon className='iconBtn' />
          <MenuAlt3Icon className='h-6 md:hidden cursor-pointer' />
          <div className='relative iconBtn'>
            <PaperAirplaneIcon className='iconBtn rotate-45' />
            <div className='absolute -top-2 -right-1 w-5 h-5 text-xs bg-red-500 animate-pulse flex items-center justify-center text-white rounded-full'>
              3
            </div>
          </div>
          <PlusCircleIcon className='iconBtn' />
          <UserGroupIcon className='iconBtn' />
          <HeartIcon className='iconBtn' />
          <button
            onClick={signOut}
            className='relative w-10 h-10 cursor-pointer rounded-full'>
            <Image
              src='/me-copy.png'
              objectFit='cover'
              priority
              layout='fill'
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
