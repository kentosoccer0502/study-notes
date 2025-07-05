const GRAVITY: { [key: string]: number } = {
  Earth: 9.8,
  Jupiter: 24.79,
  Mars: 3.71,
  Pluto: 0.58,
  Moon: 1.62,
  Others: 0,
};
const EMOTION_LEVEL: Array<string> = [
  "terrified",
  "frighten",
  "scared",
  "afraid",
];

function getEmotion(height: number, planet: string): string {
  const speed = calculateSpeed(height, planet);
  if (getGravity(planet)) {
    if (speed >= 80) {
      return EMOTION_LEVEL[0];
    } else if (speed >= 60) {
      return EMOTION_LEVEL[1];
    } else if (speed >= 40) {
      return EMOTION_LEVEL[2];
    } else if (speed >= 0) {
      return EMOTION_LEVEL[3];
    }
  }
  return "no data";
}

function calculateSpeed(height: number, planet: string): number {
  return Math.sqrt(2 * getGravity(planet) * height);
}

function getGravity(planet: string): number {
  return planet in GRAVITY ? GRAVITY[planet] : GRAVITY["Others"];
}
