import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

/**
 * loader comoponent
 * @returns 
 */
export const loader = async () => {
  return json({ posts: await getPosts() });
};

/**
 * Posts Component
 * @returns 
 */
export default function Posts() {
  // get posts
  const { 
    posts 
  } = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>Posts</h1>
      <Link 
        to="admin" 
        className="text-red-600 underline"
      >
        Admin
      </Link>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={post.slug}
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}