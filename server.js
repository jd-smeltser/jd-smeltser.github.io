const express = require('express');
const WebSocket = require('ws');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files
app.use(express.static(__dirname));

// Start HTTP server
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// WebSocket server for terminal communication
const wss = new WebSocket.Server({ server });

// Command handlers
const commands = {
  help: require('./commands/help'),
  resume: require('./commands/resume'),
  portfolio: require('./commands/portfolio'),
  recommendations: require('./commands/recommendations'),
  clear: require('./commands/clear')
};

// Banner generator
const generateBanner = require('./commands/banner');

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Send welcome message with gradient banner
  const banner = generateBanner();
  const welcome = banner + '\nType \'help\' to get started\n';

  ws.send(JSON.stringify({ type: 'output', data: welcome }));
  ws.send(JSON.stringify({ type: 'prompt' }));

  ws.on('message', async (message) => {
    try {
      const data = JSON.parse(message);

      if (data.type === 'command') {
        const input = data.data.trim();
        const [cmd, ...args] = input.split(' ');

        if (commands[cmd]) {
          await commands[cmd](ws, args);
        } else if (cmd === '') {
          // Empty command, just show prompt
          ws.send(JSON.stringify({ type: 'prompt' }));
        } else {
          ws.send(JSON.stringify({
            type: 'output',
            data: `\x1b[31mCommand not found: ${cmd}\x1b[0m\nType 'help' for available commands\n`
          }));
          ws.send(JSON.stringify({ type: 'prompt' }));
        }
      }
    } catch (error) {
      console.error('Error processing message:', error);
      ws.send(JSON.stringify({
        type: 'output',
        data: `\x1b[31mError: ${error.message}\x1b[0m\n`
      }));
      ws.send(JSON.stringify({ type: 'prompt' }));
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
