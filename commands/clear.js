// Clear command - clears the terminal
module.exports = async (ws, args) => {
  ws.send(JSON.stringify({ type: 'clear' }));
  ws.send(JSON.stringify({ type: 'prompt' }));
};
