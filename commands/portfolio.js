// Portfolio command - showcase projects
const { sleep, sendFadeSection, sendText, sendPrompt } = require('./utils');

module.exports = async (ws, args) => {
  const projects = [
    {
      name: "Pocket OS",
      description: "File-based operating system where Claude Code is the interface",
      tech: "Node.js, Next.js, Claude Code API",
      highlights: [
        "Spec-driven development using CLAUDE.md files",
        "Apps emerge organically through conversation",
        "Protocol-first architecture for app ecosystem"
      ]
    },
    {
      name: "Make.com Sales Automation",
      description: "End-to-end sales pipeline integration with Salesforce & Linear",
      tech: "Make.com, Salesforce API, Linear GraphQL, Supabase",
      highlights: [
        "Automated opportunity tracking across platforms",
        "Real-time data sync with intelligent routing",
        "Custom demo scripts with guided workflows"
      ]
    },
    {
      name: "AI-Native Resume Builder",
      description: "GitHub Pages portfolio with live editing via Claude",
      tech: "HTML/CSS, GitHub API, Claude Code",
      highlights: [
        "Token-based authentication for direct GitHub updates",
        "Comment system for iterative improvements",
        "Progressive disclosure terminal interface"
      ]
    }
  ];

  sendText(ws, '\x1b[1m\x1b[36m━━━ PORTFOLIO ━━━\x1b[0m\n');
  await sleep(300);

  for (const project of projects) {
    const highlights = project.highlights.map(h => `  • ${h}`).join('\n');
    const section = `\n\x1b[1m\x1b[33m${project.name}\x1b[0m\n${project.description}\n\n\x1b[90mTech Stack:\x1b[0m ${project.tech}\n\x1b[90mHighlights:\x1b[0m\n${highlights}\n`;
    sendFadeSection(ws, section);
    await sleep(800);
  }

  sendText(ws, '\n\x1b[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n');
  sendPrompt(ws);
};
