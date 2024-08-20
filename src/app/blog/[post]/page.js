'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export default function BlogPost() {
  const [post, setPost] = useState(null);
  const { post: postId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      // Simulating fetching a specific blog post from an API
      // Replace this with actual API call in a real application
      const dummyPost = {
        id: postId,
        title: `Blog Post ${postId}`,
        content: `This is the content of blog post ${postId}. It's a longer piece of text that would typically contain the full article.`,
        date: new Date().toLocaleDateString(),
      };
      setPost(dummyPost);
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div className='container mx-auto px-4 py-8'>Loading...</div>;
  }

  return (
    <div className='container mx-auto px-4 py-8 min-h-screen'>
      <Link
        href='/blog'
        className='inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6'
      >
        <FaArrowLeft className='mr-2' />
        Back to Blog Posts
      </Link>
      <article className='bg-white shadow-lg rounded-xl p-8'>
        <h1 className='text-4xl font-bold text-indigo-700 mb-4'>{post.title}</h1>
        <p className='text-gray-500 mb-6'>Published on {post.date}</p>
        <div className='prose max-w-none'>
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  );
}
