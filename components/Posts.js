import Post from "./Post";

function Posts() {
  const posts = [
    {
      id: 1,
      username: "Matthew",
      userImg: "/me-copy.png",
      img: "/me.png",
      caption: "This is Instagram clone app",
    },
    {
      id: 2,
      username: "Anthony",
      userImg: "/me-copy.png",
      img: "/me.png",
      caption: "This is Twitter clone app",
    },
    {
      id: 3,
      username: "Chijioke",
      userImg: "/me-copy.png",
      img: "/me.png",
      caption: "This is LinkedIn clone app",
    },
  ];

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
          />
        ))}
    </div>
  );
}

export default Posts;
