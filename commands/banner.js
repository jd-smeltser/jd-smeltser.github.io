// Banner generator with Unicode blocks and mustard yellow gradient
module.exports = function generateBanner() {
  // Hand-crafted block banner for "SMELTSER.DEV"
  const lines = [
    '╔═══════════════════════════════════════════════════════════════╗',
    '║                                                               ║',
    '║    ███████╗███╗   ███╗███████╗██╗  ████████╗███████╗███████╗ ║',
    '║    ██╔════╝████╗ ████║██╔════╝██║  ╚══██╔══╝██╔════╝██╔══██╗ ║',
    '║    ███████╗██╔████╔██║█████╗  ██║     ██║   ███████╗███████║ ║',
    '║    ╚════██║██║╚██╔╝██║██╔══╝  ██║     ██║   ╚════██║██╔══██║ ║',
    '║    ███████║██║ ╚═╝ ██║███████╗███████╗██║   ███████║██║  ██║ ║',
    '║    ╚══════╝╚═╝     ╚═╝╚══════╝╚══════╝╚═╝   ╚══════╝╚═╝  ╚═╝ ║',
    '║                                                               ║',
    '║           ██████╗ ███████╗██╗   ██╗                          ║',
    '║           ██╔══██╗██╔════╝██║   ██║                          ║',
    '║           ██║  ██║█████╗  ██║   ██║                          ║',
    '║           ██║  ██║██╔══╝  ╚██╗ ██╔╝                          ║',
    '║           ██████╔╝███████╗ ╚████╔╝                           ║',
    '║           ╚═════╝ ╚══════╝  ╚═══╝                            ║',
    '║                                                               ║',
    '╚═══════════════════════════════════════════════════════════════╝'
  ];

  // Monochrome mustard yellow gradient - darker to lighter
  // Using ANSI 256 colors from dark mustard to bright yellow
  const mustardGradient = [
    100, // dark olive/mustard
    136, // medium mustard
    142, // yellow-green mustard
    178, // golden mustard
    184, // light mustard yellow
    220, // bright golden yellow
    226, // bright yellow
    228  // very bright yellow
  ];

  // Apply gradient to each line
  const coloredLines = lines.map((line, lineIndex) => {
    let colored = '';

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      // Only color the block characters and box drawing, not spaces inside
      if (char === '█' || char === '╗' || char === '╝' || char === '║' ||
          char === '╔' || char === '╚' || char === '═' || char === '╬' ||
          char === '╩' || char === '╦' || char === '╠' || char === '╣') {
        // Calculate gradient position based on character position across entire width
        const gradientPosition = (i / line.length) * (mustardGradient.length - 1);
        const colorIndex = Math.floor(gradientPosition);
        const color = mustardGradient[colorIndex];

        colored += `\x1b[38;5;${color}m${char}\x1b[0m`;
      } else {
        colored += char;
      }
    }

    return colored;
  });

  return coloredLines.join('\n') + '\n\njonathan smeltser / ai engineer\n';
};
