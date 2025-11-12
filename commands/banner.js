// Banner generator with Unicode blocks and gradient
module.exports = function generateBanner() {
  // Hand-crafted block banner for "smeltser.dev"
  const lines = [
    '╔═══════════════════════════════════════════════════════════════╗',
    '║                                                               ║',
    '║   ███████╗███╗   ███╗███████╗██╗  ████████╗███████╗███████╗ ║',
    '║   ██╔════╝████╗ ████║██╔════╝██║  ╚══██╔══╝██╔════╝██╔══██╗ ║',
    '║   ███████╗██╔████╔██║█████╗  ██║     ██║   ███████╗███████║ ║',
    '║   ╚════██║██║╚██╔╝██║██╔══╝  ██║     ██║   ╚════██║██╔══██║ ║',
    '║   ███████║██║ ╚═╝ ██║███████╗███████╗██║   ███████║██║  ██║ ║',
    '║   ╚══════╝╚═╝     ╚═╝╚══════╝╚══════╝╚═╝   ╚══════╝╚═╝  ╚═╝ ║',
    '║                                                               ║',
    '║        ██████╗ ███████╗██╗   ██╗                             ║',
    '║        ██╔══██╗██╔════╝██║   ██║                             ║',
    '║        ██║  ██║█████╗  ██║   ██║                             ║',
    '║        ██║  ██║██╔══╝  ╚██╗ ██╔╝                             ║',
    '║        ██████╔╝███████╗ ╚████╔╝                              ║',
    '║        ╚═════╝ ╚══════╝  ╚═══╝                               ║',
    '║                                                               ║',
    '╚═══════════════════════════════════════════════════════════════╝'
  ];

  // ANSI 256 color codes for autumn gradient
  // Gradient flows from rust brown → burnt sienna → chocolate → goldenrod → burlywood
  const autumnGradient = [
    130, // rust brown
    131,
    166, // burnt sienna
    167,
    172, // chocolate
    173,
    178, // dark goldenrod
    179,
    136, // goldenrod
    137,
    101  // burlywood/khaki
  ];

  // Apply gradient to each line
  const coloredLines = lines.map((line, lineIndex) => {
    let colored = '';
    let charIndex = 0;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      // Only color the block characters and box drawing, not spaces inside
      if (char === '█' || char === '╗' || char === '╝' || char === '║' ||
          char === '╔' || char === '╚' || char === '═') {
        // Calculate gradient position based on character position across entire width
        const gradientPosition = (i / line.length) * (autumnGradient.length - 1);
        const colorIndex = Math.floor(gradientPosition);
        const color = autumnGradient[colorIndex];

        colored += `\x1b[38;5;${color}m${char}\x1b[0m`;
      } else {
        colored += char;
      }

      charIndex++;
    }

    return colored;
  });

  return coloredLines.join('\n') + '\n\njonathan smeltser / ai engineer\n';
};
