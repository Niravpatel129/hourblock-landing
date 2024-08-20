'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaBook, FaChevronRight } from 'react-icons/fa';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulating fetching blog posts from an API
    const fetchPosts = async () => {
      // Replace this with actual API call in a real application
      const dummyPosts = [
        { id: 1, title: 'First Blog Post', excerpt: 'This is the first blog post...' },
        { id: 2, title: 'Second Blog Post', excerpt: 'This is the second blog post...' },
        { id: 3, title: 'Third Blog Post', excerpt: 'This is the third blog post...' },
      ];
      setPosts(dummyPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className='container mx-auto px-4 py-8  min-h-screen'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-4xl font-bold text-indigo-700 flex items-center'>
          <FaBook className='mr-3' />
          Blog Posts
        </h1>
        <Link
          href='/'
          className='bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition-colors flex items-center'
        >
          <FaArrowLeft className='mr-2' />
          Go Back
        </Link>
      </div>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post) => (
          <div
            key={post.id}
            className='bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow'
          >
            <h2 className='text-2xl font-semibold mb-3 text-indigo-600'>{post.title}</h2>
            <p className='text-gray-600 mb-4'>{post.excerpt}</p>
            <Link
              href={`/blog/${post.id}`}
              className='text-indigo-500 hover:text-indigo-700 font-medium flex items-center'
            >
              Read more
              <FaChevronRight className='ml-2' />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
