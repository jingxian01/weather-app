export interface DataType {
  cod: string;
  name: string;
  main: Main;
  coord: Coordinate;
  message?: string;
}

interface Main {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface Coordinate {
  lat: number;
  lon: number;
}
