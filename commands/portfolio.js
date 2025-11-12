// Portfolio command - showcase projects
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

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

  ws.send(JSON.stringify({
    type: 'output',
    data: '\x1b[1m\x1b[36m━━━ PORTFOLIO ━━━\x1b[0m\n'
  }));

  await sleep(300);

  for (const project of projects) {
    ws.send(JSON.stringify({
      type: 'output',
      data: `\n\x1b[1m\x1b[33m${project.name}\x1b[0m\n`
    }));
    await sleep(200);

    ws.send(JSON.stringify({
      type: 'output',
      data: `${project.description}\n\n\x1b[90mTech Stack:\x1b[0m ${project.tech}\n`
    }));
    await sleep(200);

    ws.send(JSON.stringify({
      type: 'output',
      data: '\x1b[90mHighlights:\x1b[0m\n'
    }));

    for (const highlight of project.highlights) {
      ws.send(JSON.stringify({
        type: 'output',
        data: `  • ${highlight}\n`
      }));
      await sleep(100);
    }

    await sleep(300);
  }

  ws.send(JSON.stringify({
    type: 'output',
    data: '\n\x1b[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n'
  }));

  ws.send(JSON.stringify({ type: 'prompt' }));
};
