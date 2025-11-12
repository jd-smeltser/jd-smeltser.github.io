// Utility functions for terminal commands

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Stream text to terminal with character-by-character animation
 * @param {WebSocket} ws - WebSocket connection
 * @param {string} text - Text to stream
 * @param {number} delayMs - Delay between characters (default: 15ms)
 */
async function streamText(ws, text, delayMs = 15) {
  const lines = text.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let buffer = '';

    for (const char of line) {
      buffer += char;
      ws.send(JSON.stringify({
        type: 'output',
        data: char
      }));

      // Faster for spaces, slower for punctuation
      let delay = delayMs;
      if (char === ' ') delay = delayMs * 0.5;
      if (['.', '!', '?', ':'].includes(char)) delay = delayMs * 4;
      if ([',', ';'].includes(char)) delay = delayMs * 2;

      await sleep(delay);
    }

    // Send newline
    if (i < lines.length - 1) {
      ws.send(JSON.stringify({
        type: 'output',
        data: '\r\n'
      }));
      await sleep(delayMs * 2);
    }
  }
}

/**
 * Send text instantly (no animation)
 * @param {WebSocket} ws - WebSocket connection
 * @param {string} text - Text to send
 */
function sendText(ws, text) {
  ws.send(JSON.stringify({
    type: 'output',
    data: text.replace(/\n/g, '\r\n')
  }));
}

/**
 * Send prompt
 * @param {WebSocket} ws - WebSocket connection
 */
function sendPrompt(ws) {
  ws.send(JSON.stringify({ type: 'prompt' }));
}

module.exports = {
  sleep,
  streamText,
  sendText,
  sendPrompt
};
