const express = require('express');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>SAST DAST Demo</title></head>
      <body>
        <h1>SAST + DAST Demo App</h1>
        <p>This app is used to test GitHub Actions CodeQL and OWASP ZAP Baseline.</p>
        <ul>
          <li><a href="/health">Health Check</a></li>
          <li><a href="/api/profile?name=Nada">Profile API</a></li>
        </ul>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'nodejs-sast-dast-demo' });
});

app.get('/api/profile', (req, res) => {
  const name = req.query.name || 'Guest';
  res.json({ message: `Hello ${name}`, role: 'DevOps testing app' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(port, () => {
  console.log(`Demo app listening on port ${port}`);
});
