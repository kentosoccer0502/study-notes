function calculateLocation(latitude: number, longitude: number): string {
  // 経度と緯度が与えられ、それを元に東西南北を返す関数
  let latitude_pos: string = "";
  let longitude_pos: string = "";

  if (latitude > 0) {
    latitude_pos = "north";
  } else if (latitude < 0) {
    latitude_pos = "south";
  } else {
    latitude_pos = "equator";
  }

  if (longitude > 0) {
    longitude_pos = "east";
  } else if (longitude < 0) {
    longitude_pos = "west";
  } else {
    longitude_pos = "prime meridian";
  }

  return `${latitude_pos}/${longitude_pos}`;
}
