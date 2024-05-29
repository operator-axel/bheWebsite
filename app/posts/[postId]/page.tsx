import { getSortedPostsData, getPostData } from "../../../lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import PulsatingBorderButton from "@/components/ui/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, contentHtml } = await getPostData(postId);

  return (
    <main className="px-6 prose prose-xl prose-slate mx-auto">
      <h1 className="text-3xl mt-8 mb-0">{title}</h1>
      <p className="mt-4 mx-auto"></p>
      <article className="blogMain indent-3 mx-auto">
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>

      <div className="flex justify-center space-x-4 mt-8">
        <Link href="/blog">
          <PulsatingBorderButton className="mb-4" onClick={""}>
            Back to Blog
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="ml-2 mx-auto icon-animate"
            />
          </PulsatingBorderButton>
        </Link>
        <Link href="/">
          <PulsatingBorderButton className={""} onClick={""}>
            Back Home
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="ml-2 mx-auto icon-animate"
            />
          </PulsatingBorderButton>
        </Link>
      </div>
    </main>
  );
}
