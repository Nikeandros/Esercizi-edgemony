import React from 'react';

const Main = () => {
  return (
    <main>
      <aside>
        <ul>
          <li>Static Item 1</li>
          <li>Static Item 2</li>
          <li>Static Item 3</li>
        </ul>
      </aside>
      <section>
        <article>
          <h2>Post Title 1</h2>
          <p>Post content 1</p>
          <p><strong>Author:</strong> User 1</p>
        </article>
        <article>
          <h2>Post Title 2</h2>
          <p>Post content 2</p>
          <p><strong>Author:</strong> User 2</p>
        </article>
        <article>
          <h2>Post Title 3</h2>
          <p>Post content 3</p>
          <p><strong>Author:</strong> User 3</p>
        </article>
      </section>
    </main>
  );
};

export default Main;
