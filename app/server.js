var express = require('express');
const pino = require('pino');

var app = express();

const logger = pino({ level: 'info' });

logger.info('hello world');
logger.info('This is a nodejs app for testing!');

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Node.js Application</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #f4f4f4;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .container {
                    background: #fff;
                    padding: 2rem;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    text-align: center;
                }
                h1 {
                    color: #2E86C1;
                    margin-bottom: 1rem;
                }
                p {
                    color: #555;
                    font-size: 1.2rem;
                }
                .highlight {
                    font-weight: bold;
                    color: #C0392B;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to My Node.js Application</h1>
                <p class="highlight">Hello, World!</p>
                <p>I am <span class="highlight">DEPI- DevOps learner</span>.</p>
                <p>This is a <span class="highlight">nodejs app</span> for testing!</p>
                <!-- Add the animated GIF below -->
                <img src="https://gifdb.com/images/high/energetic-leonardo-dicaprio-celebration-dance-0dz1c60cw9lemqiq.webp" alt="Celebration GIF" style="width: 300px; height: auto;">
            </div>
        </body>
        </html>
    `);
});

app.listen(3000, function () {
    logger.info("app listening on port 3000!");
});
