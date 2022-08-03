import { Link } from "@remix-run/react";

export default function Posts() {
  return (
    <main>
      <h1 className="text-2xl font-bold">Posts</h1>
      <ul className="list-disc">
        <li>
          <Link to="post-a">Post A</Link>
        </li>
        <li>
          <Link to="post-b">Post B</Link>
        </li>
      </ul>
    </main>
  );
}
