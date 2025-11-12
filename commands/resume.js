// Resume command - interactive guide through experience
const { sleep, streamText, sendText, sendPrompt } = require('./utils');

module.exports = async (ws, args) => {
  const sections = [
    {
      title: "Professional Summary",
      content: `As an early adopter in AI-native engineering, I've refined my skill set in rapid prototyping. What would typically take weeks or months of effort, I can ship in a few days.

I've led innovation in AI-driven development, integrating Claude Code and Make.com automation to accelerate workflows and deliver complex solutions efficiently.`
    },
    {
      title: "Recent Experience",
      content: `\x1b[36mSenior Solutions Engineer\x1b[0m - Make.com (via Ripple + 3rd party)
\x1b[90m2024 - Present\x1b[0m

• Built full-stack applications with AI-first workflows
• Architected integrations connecting Make.com, Salesforce, Linear
• Reduced development cycles from weeks to days using Claude Code
• Created custom automation solutions for enterprise clients`
    },
    {
      title: "Previous Roles",
      content: `\x1b[36mTechnical Lead\x1b[0m - Various Startups
\x1b[90m2020 - 2024\x1b[0m

• Led development teams building modern web applications
• Specialized in rapid prototyping and MVP delivery
• Implemented CI/CD pipelines and DevOps best practices
• Mentored junior developers in AI-augmented workflows`
    },
    {
      title: "Technical Skills",
      content: `\x1b[33mLanguages:\x1b[0m JavaScript/Node.js, Python, TypeScript, Bash
\x1b[33mFrameworks:\x1b[0m React, Next.js, Express, FastAPI
\x1b[33mTools:\x1b[0m Claude Code, Make.com, GitHub, Docker, Vercel
\x1b[33mSpecialties:\x1b[0m AI-native development, rapid prototyping, automation`
    }
  ];

  // Send resume header
  sendText(ws, '\x1b[1m\x1b[36m━━━ RESUME ━━━\x1b[0m\n');
  await sleep(100);

  // Stream each section
  for (const section of sections) {
    sendText(ws, `\n\x1b[1m${section.title}\x1b[0m\n`);
    await sleep(50);
    await streamText(ws, section.content, 20);
    sendText(ws, '\n');
    await sleep(200);
  }

  // Footer
  sendText(ws, '\n\x1b[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n');
  sendPrompt(ws);
};
