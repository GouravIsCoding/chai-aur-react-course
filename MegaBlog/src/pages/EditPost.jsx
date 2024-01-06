import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appWriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
export default function EditPost(props) {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      appWriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}
