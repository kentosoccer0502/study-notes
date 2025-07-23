const met = {
  running: 8,
  walking: 3,
  tennis: 5,
  "rope jump": 9,
};
const caloriesPerKg = 7700;
const currentWeight = 85.5;

function calcWeightByExercise(exercise: string, minutes: number): number {
  const reduceWeight =
    (caloriesPerMinute(met[exercise], currentWeight) * minutes) / caloriesPerKg;
  return Math.floor((currentWeight - reduceWeight) * 10) / 10;
}

function caloriesPerMinute(met: number, weight: number): number {
  return (met * 3.5 * weight) / 200;
}
