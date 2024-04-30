export const transformWeatherData = (data) => {
  //city name,
  //temp
  //weather description
  //recommended activites

  const condition = data?.current?.condition?.text.toLowerCase();
  let recommendation = [];
  switch (condition) {
    case condition.includes("sun"):
      recommendation = [
        "Go for a walk",
        "Apply sunscreen",
        "Nice day for a swim",
      ];
      break;
    case condition.includes("cloud"):
      recommendation = ["Chances of rain", "Carry Umbrella"];
      break;
    case condition.includes("rain"):
      recommendation = [
        "avoid going outside",
        "carry an umbrella",
        "play indoor games",
      ];
      break;

    default:
      //   recommendation = ["go for a walk", "nice day for a picnic"];
      break;
  }

  let transformed = {
    cityName: data?.location?.name,
    temperature: data?.current?.temp_c,
    description: data?.current?.condition?.text,
    recommendedActivities: recommendation.length
      ? recommendation
      : ["go for a walk", "nice day for a picnic"],
  };

  return transformed;
};
