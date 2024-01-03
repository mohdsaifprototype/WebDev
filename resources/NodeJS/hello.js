// console.log("Hello world");

const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');

  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS before and after pseudo selector</title>
  
      <style>
          body {
              background-color: black;
              color: white;
              margin: 0;
              padding: 0;
          }
          
          header::before{
              background: url('https://picsum.photos/1920/1080') no-repeat center center/cover;
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
              opacity: 0.5;
          }
  
          .navigation {
              /* border: 2px solid red; */
              display: flex;
              font-size: 20px;
          }
  
          li {
              /* border: 2px solid white; */
              list-style: none;
              padding: 20px 23px;
          }
  
          section {
              /* border: 2px solid yellow; */
              height: 344px;
              margin: 3px 230px;
              display: flex;
              flex-direction: column;
              /* text-align: center; */
              align-items: center;
              justify-content: center;
          }
  
          /* section::after{
              content: "This is a content";
          } */
  
          h1{
              font-size: 4rem;
          }
          p{
              text-align: center;
          }
  
          
      </style>
  </head>
  
  <body>
      <header>
          <nav class="navbar">
              <ul class="navigation">
                  <li class="item">Home</li>
                  <li class="item">About</li>
                  <li class="item">Services</li>
                  <li class="item">Contact us</li>
              </ul>
          </nav>
      </header>
          <section>
              <h1>Welcome to coding world!</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sint iste commodi est deserunt! Nostrum cum at error veniam voluptatibus iste, voluptatem maiores saepe iure aspernatur minima ipsam corrupti non fuga tempore magni libero.</p>
          </section>
          <!-- <hr> -->
  </body>
  
  </html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});