"use client";

import Loading from "@/components/Loading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";

const fetchPostDetail = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};

const PostDetail = () => {
  const params = useParams();
  const postId = params.id;

  const { data: post, isLoading } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPostDetail(postId),
  });

  if (isLoading) return <Loading></Loading>;

  return (
    <div className="container w-11/12 mx-auto min-h-screen flex justify-center items-center">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-3xl text-default font-bold font-lustria mb-4">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">{post.body}</p>
      </div>
    </div>
  );
};

export default PostDetail;
