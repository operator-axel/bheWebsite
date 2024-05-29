import { getSortedPostsData } from "../lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <div>
      <h1 className="mt-4 text-3xl font-bold">Blog</h1>
      <div className="grid list-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
