// Main.jsx
import React from 'react';
import posts from '../../src/post.json';

const Main = () => {
  return (
    <main>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </main>
  );
};

export default Main;
