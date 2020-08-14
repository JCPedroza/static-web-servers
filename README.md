<h1>Static Web Servers</h1>

<h2>Minimal HTTP server implementations for static content.</h2>

<p>
Server requirements:
<ul>
  <li>Can serve any http file inside the public directory.</li>
  <li>Accepts only GET requests, 404 for anything else.</li>
  <li>Accepts only .html extensions, 404 for anything else.</li>
  <li>Use public/not-found.html for 404s.</li>
</ul>
</p>
