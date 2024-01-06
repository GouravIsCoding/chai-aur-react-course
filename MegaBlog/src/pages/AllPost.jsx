import React, { useState, useEffect } from "react";
import appWriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

export default function AllPost(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appWriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="py-8 w-full">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
