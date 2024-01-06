import React from "react";
import { PostForm, Container } from "../components";

export default function AddPost(props) {
  return (
    <div className="py-8">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}
