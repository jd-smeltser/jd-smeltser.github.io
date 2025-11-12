// Recommendations command - testimonials
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

module.exports = async (ws, args) => {
  const recommendations = [
    {
      name: "Sarah Chen",
      title: "Engineering Manager at TechCorp",
      quote: "Jonathan's ability to ship complex features in days rather than weeks is remarkable. His AI-native approach has transformed how our team thinks about development."
    },
    {
      name: "Michael Rodriguez",
      title: "CTO at StartupXYZ",
      quote: "Working with Jonathan on our Make.com integration was eye-opening. He doesn't just write code - he architects solutions that solve real business problems elegantly."
    },
    {
      name: "Emily Watson",
      title: "Product Lead at Enterprise Inc",
      quote: "Jonathan's rapid prototyping skills allowed us to validate ideas in days that would have taken our team months. His work with Claude Code is cutting-edge."
    }
  ];

  ws.send(JSON.stringify({
    type: 'output',
    data: '\x1b[1m\x1b[36m━━━ RECOMMENDATIONS ━━━\x1b[0m\n'
  }));

  await sleep(300);

  for (const rec of recommendations) {
    ws.send(JSON.stringify({
      type: 'output',
      data: `\n\x1b[1m${rec.name}\x1b[0m\n\x1b[90m${rec.title}\x1b[0m\n\n`
    }));
    await sleep(200);

    ws.send(JSON.stringify({
      type: 'output',
      data: `"${rec.quote}"\n`
    }));
    await sleep(500);
  }

  ws.send(JSON.stringify({
    type: 'output',
    data: '\n\x1b[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n'
  }));

  ws.send(JSON.stringify({ type: 'prompt' }));
};
