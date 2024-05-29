import Link from "next/link";
import { BlogPost } from "../lib/posts";
import Image from "next/image";
import PulsatingBorderButton from "./ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, excerpt, imageUrl } = post;

  return (
    <div className="mt-4 mb-4 p-4 border backdrop-blur bg-opacity-20 bg-white rounded shadow hover:shadow-md transition-shadow">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={`Cover image for ${title}`}
          layout="responsive"
          width={500}
          height={500}
          className="rounded mb-4"
        />
      )}
      <Link
        href={`/posts/${id}`}
        className="headerOne text-2xl text-gray-200 font-bold underline hover:text-[#a60000]"
      >
        {title}
      </Link>
      <p className="text-gray-600 text-lg mb-2 mt-2">{excerpt}</p>
      <Link href={`/posts/${id}`}>
        <PulsatingBorderButton onClick={""} className="">
          Read More{" "}
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="ml-2 icon-animate"
          />
        </PulsatingBorderButton>
      </Link>
    </div>
  );
}
