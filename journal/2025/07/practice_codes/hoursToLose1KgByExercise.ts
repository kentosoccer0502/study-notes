const metByExerciseType = {
  running: 8,
  walking: 3,
  tennis: 5,
  "rope jump": 9,
};
const caloriesPerKg: number = 7700;
const vo2: number = 3.5;
const minuteToLoseCalories: number = 200;
const currentWeight: number = 85.5;
const hoursToMinute: number = 60;

function hoursToLose1KgByExercise(exercise: string): number {
  let met = 0;
  switch (exercise) {
    case "running":
      met = metByExerciseType.running;
      break;
    case "walking":
      met = metByExerciseType.walking;
      break;
    case "tennis":
      met = metByExerciseType.tennis;
      break;
    case "rope jump":
      met = metByExerciseType["rope jump"];
      break;
    default:
      console.log("Unknown exercise");
      met = 0;
  }
  return (
    Math.floor(
      (caloriesPerKg /
        (((met * vo2 * currentWeight) / minuteToLoseCalories) *
          hoursToMinute)) *
        10
    ) / 10
  );
}
