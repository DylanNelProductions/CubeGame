// Palette: Vibrant Modern Neon/Pastel Mix
// Using HSL-like saturation for pop
export const COLORS = [
  0xff3b30, // Vibrant Red
  0xff9500, // Vibrant Orange
  0xffcc00, // Vibrant Yellow
  0x34c759, // Vibrant Green
  0x00c7be, // Teal
  0x30b0ff, // Sky Blue
  0x5856d6, // Indigo
  0xaf52de, // Purple
  0xff2d55  // Pink
];

export function getColor(id) {
  return COLORS[id % COLORS.length];
}
