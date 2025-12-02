// Theme System - Changes every 10 levels
// Each theme has highly contrasting colors for better visual distinction
export const THEMES = [
  {
    id: 1, // Levels 1-10
    name: "Neon Classic",
    colors: [
      0xff3b30, // Red
      0xff9500, // Orange
      0xffcc00, // Yellow
      0x34c759, // Green
      0x00c7be, // Teal
      0x30b0ff, // Sky Blue
      0x5856d6, // Indigo
      0xaf52de, // Purple
      0xff2d55  // Pink
    ],
    background: 0x202025,
    iceColor: 0xaaddff,
    floorColor: 0x2a2a2a
  },
  {
    id: 2, // Levels 11-20
    name: "Ocean Depths",
    colors: [
      0xff0066, // Hot Pink - High contrast
      0x00ffcc, // Bright Cyan - High contrast
      0x0066ff, // Deep Blue
      0x00ff66, // Bright Green
      0xffcc00, // Gold/Yellow
      0xff3300, // Red-Orange
      0x9900ff, // Purple
      0x00ccff, // Sky Blue
      0xffff00  // Bright Yellow
    ],
    background: 0x0a1a2e,
    iceColor: 0x88ccff,
    floorColor: 0x1a2a3a
  },
  {
    id: 3, // Levels 21-30
    name: "Sunset Fire",
    colors: [
      0xff0000, // Pure Red
      0xff6600, // Bright Orange
      0xffcc00, // Gold
      0x00ff00, // Bright Green
      0x00ccff, // Cyan
      0x0066ff, // Blue
      0x9900ff, // Purple
      0xff00cc, // Magenta
      0xffff00  // Yellow
    ],
    background: 0x2a1a0a,
    iceColor: 0xffaadd,
    floorColor: 0x3a2a1a
  },
  {
    id: 4, // Levels 31-40
    name: "Forest Magic",
    colors: [
      0x00ff00, // Bright Green
      0xff00ff, // Magenta - High contrast
      0x00ffff, // Cyan - High contrast
      0xff6600, // Orange
      0x0066ff, // Blue
      0xffcc00, // Yellow
      0x9900ff, // Purple
      0xff0066, // Hot Pink
      0x00ff99  // Mint Green
    ],
    background: 0x0a2a1a,
    iceColor: 0x99ffcc,
    floorColor: 0x1a3a2a
  },
  {
    id: 5, // Levels 41-50
    name: "Cosmic Purple",
    colors: [
      0xff00ff, // Magenta
      0x00ffff, // Cyan - High contrast
      0xffcc00, // Gold/Yellow - High contrast
      0x00ff00, // Green - High contrast
      0xff0066, // Hot Pink
      0x0066ff, // Blue
      0xff6600, // Orange
      0x9900ff, // Purple
      0xffff00  // Yellow
    ],
    background: 0x1a0a2a,
    iceColor: 0xcc99ff,
    floorColor: 0x2a1a3a
  }
];

export function getTheme(levelId) {
  const themeIndex = Math.floor((levelId - 1) / 10);
  return THEMES[Math.min(themeIndex, THEMES.length - 1)];
}

export function getColorForTheme(theme, colorId) {
  return theme.colors[colorId % theme.colors.length];
}
