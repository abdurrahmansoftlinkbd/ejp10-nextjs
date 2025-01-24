"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./Loading";
import { useRouter } from "next/navigation";

const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

const Posts = () => {
  const router = useRouter();
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const handleReadMore = (postId) => {
    router.push(`/posts/${postId}`);
  };

  if (isLoading) return <Loading></Loading>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts
        .map((post) => (
          <div
            key={post.id}
            className="card bg-base-100 shadow-xl border border-base-200"
          >
            <div className="card-body">
              <h2 className="card-title text-default font-lustria">
                {post.title.slice(0, 30)}...
              </h2>
              <p>{post.body.slice(0, 100)}...</p>
              <div className="card-actions">
                <button
                  className="btn btn-sm bg-second border-second text-white hover:bg-default hover:border-default"
                  onClick={() => handleReadMore(post.id)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))
        .slice(0, 6)}
    </div>
  );
};

export default Posts;
