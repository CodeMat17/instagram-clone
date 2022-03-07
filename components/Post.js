import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

function Post({ username, userImg, img, caption, id }) {
  return (
    <div className='bg-white my-7 border rounded-md'>
      {/* Header */}
      <div className='flex items-center p-4'>
        <img
          src={userImg}
          alt='user image'
          className='w-12 h-12 rounded-full object-contain border p-1'
        />
        <p className='pl-2 flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5 w-5' />
      </div>

      {/* img */}
      <img src={img} alt='image' className='w-full object-cover' />

      {/* buttons */}
      <div className='flex items-center justify-between px-4 pt-4'>
        <div className='flex items-center space-x-6'>
          <HeartIcon className='postBtn' />
          <ChatIcon className='postBtn' />
          <PaperAirplaneIcon className='postBtn rotate-45' />
        </div>
        <BookmarkIcon className='postBtn' />
      </div>

      {/* caption */}
      <p className='p-4 truncate'>
        <span className='font-bold'>{username}</span> {caption}
      </p>

      {/* comments */}

      {/* input box */}
      <form className='flex items-center p-4'>
        <EmojiHappyIcon className='h-7' />
        <input
          type='text'
          name='post'
          id='post'
          placeholder='Add a comment ...'
          className='flex-1 border-none focus:ring-0 outline-none'
        />
        <button className='font-semibold text-blue-500'>Post</button>
      </form>
    </div>
  );
}

export default Post;
