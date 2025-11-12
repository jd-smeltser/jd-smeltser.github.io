# smeltser.dev - Terminal Portfolio

A real terminal emulator-based portfolio using xterm.js and WebSocket communication.

## Features

- **Real Terminal Emulator**: Uses xterm.js for authentic terminal experience
- **Interactive Commands**: Guided tours through resume, portfolio, and recommendations
- **WebSocket Backend**: Node.js server handling command execution
- **Themed**: Light/dark mode with autumn color accents
- **Progressive Output**: Commands reveal content with natural timing

## Running Locally

```bash
# Install dependencies
npm install

# Start the server
npm start

# Open in browser
http://localhost:3001/terminal.html
```

## Available Commands

- `help` - Show available commands
- `resume` - View professional experience
- `portfolio` - Browse projects
- `recommendations` - Read testimonials
- `clear` - Clear terminal screen

## Architecture

- **Frontend**: `terminal.html` - xterm.js terminal emulator
- **Backend**: `server.js` - Express + WebSocket server
- **Commands**: `commands/*.js` - Individual command handlers

Each command runs like an interactive script, using ANSI colors and progressive output.

## Development

Commands are in the `commands/` directory. Each exports an async function:

```javascript
module.exports = async (ws, args) => {
  ws.send(JSON.stringify({ type: 'output', data: 'Hello!\n' }));
  ws.send(JSON.stringify({ type: 'prompt' }));
};
```

Message types:
- `output` - Write text to terminal
- `prompt` - Show prompt and enable input
- `clear` - Clear terminal screen

## Deployment

For GitHub Pages, you'll need to:
1. Deploy the Node.js backend to a hosting service (Heroku, Railway, Fly.io)
2. Update WebSocket URL in terminal.html to point to deployed backend
3. Push terminal.html to GitHub Pages
