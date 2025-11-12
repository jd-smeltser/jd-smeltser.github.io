// Help command - shows available commands
module.exports = async (ws, args) => {
  const helpText = `
\x1b[36mAvailable Commands:\x1b[0m

  \x1b[33mhelp\x1b[0m                 Show this help message
  \x1b[33mresume\x1b[0m               View my professional experience
  \x1b[33mportfolio\x1b[0m            Browse my projects and work
  \x1b[33mrecommendations\x1b[0m      Read what others say about me
  \x1b[33mclear\x1b[0m                Clear the terminal

\x1b[90mTip: Each command runs an interactive guide\x1b[0m
`;

  ws.send(JSON.stringify({ type: 'output', data: helpText }));
  ws.send(JSON.stringify({ type: 'prompt' }));
};
