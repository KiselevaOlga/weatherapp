export interface WeatherProps {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface TemperatureProps {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface DataProps {
  id: number;
  weather: WeatherProps[];
  temperature: TemperatureProps;
  city: string;
}
