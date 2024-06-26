document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
  
    const header = document.createElement('header');
    header.innerHTML = `
      <div>
        <img src="logo.png" alt="Logo" style="height: 40px;">
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
      </nav>
    `;
    app.appendChild(header);
  
    const sidebar = document.createElement('sidebar');
    sidebar.innerHTML = `
      <ul>
        <li>Static Item 1</li>
        <li>Static Item 2</li>
        <li>Static Item 3</li>
      </ul>
    `;
    app.appendChild(sidebar);
  
    const main = document.createElement('main');
    app.appendChild(main);
  
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        posts.forEach(post => {
          const article = document.createElement('article');
          article.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <p><strong>Author:</strong> User ${post.userId}</p>
          `;
          main.appendChild(article);
        });
      });
  
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <div>
        <img src="logo.png" alt="Logo" style="height: 20px;">
      </div>
      <nav>
        <div>
          <h4>Footer Menu 1</h4>
          <a href="#">Submenu 1</a>
          <a href="#">Submenu 2</a>
        </div>
        <div>
          <h4>Footer Menu 2</h4>
          <a href="#">Submenu 1</a>
          <a href="#">Submenu 2</a>
        </div>
      </nav>
    `;
    app.appendChild(footer);
  });
  