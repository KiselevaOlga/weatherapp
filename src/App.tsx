import { useState } from "react";
import "./App.css";
import { CityCard } from "./components/CityCard";
import {
  FormWrapper,
  MainWrapper,
  ResultsWrapper,
  SearchButton,
  StyledH2,
  StyledInput,
  StyledP,
} from "./styles";
import { DataProps } from "./types";

function App() {
  const [currentCity, setCurrentCity] = useState<DataProps | null>(null);
  const [cities, setCities] = useState<DataProps[]>([]);

  const [searchQuery, setSearchQuery] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const fetchWeatherData = async (cityName: string) => {
    setLoading(true);
    try {
      const rawResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      const JSONResponse = await rawResponse.json();

      if (rawResponse.ok) {
        setLoading(false);

        return {
          id: JSONResponse.id,
          weather: JSONResponse.weather,
          temperature: JSONResponse.main,
          city: JSONResponse.name,
        };
      } else {
        setLoading(false);
        // If 404 (City not found)
        if (JSONResponse.cod === "404") {
          setError("City not found. Please check the spelling and try again.");
        } else {
          setError("Error fetching weather data. Please try again later.");
        }
      }
    } catch {
      setLoading(false);
      setError("Error fetching weather data. Please try again later.");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchWeatherData(searchQuery).then((res: DataProps | undefined) => {
      if (res !== undefined) {
        setCurrentCity(res);
      }
    });
  };

  const handleAddToList = () => {
    if (!currentCity) {
      return;
    }
    // check in case the user will try to add the same city again
    if (!cities.some((city) => city.id === currentCity.id)) {
      setCities(cities.concat(currentCity));
    }
    // ideally would add transition when current city card dissapears if i had more time
    setCurrentCity(null);
    setSearchQuery("");
  };

  const handleOnRemove = (id: number) => {
    setCities(cities.filter((city) => city.id !== id));
  };

  return (
    <div className="App">
      <MainWrapper>
        <FormWrapper onSubmit={handleSubmit}>
          <StyledInput
            id="search"
            type="text"
            name="search"
            placeholder="Start typing..."
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />

          <SearchButton type="submit" data-testid="submitBtn">
            Search
          </SearchButton>
        </FormWrapper>

        <ResultsWrapper>
          {error && <StyledP>{error}</StyledP>}
          {loading && <StyledP>Loading...</StyledP>}

          {currentCity && (
            <CityCard onAddToList={handleAddToList} data={currentCity} />
          )}
        </ResultsWrapper>

        <StyledH2>My list</StyledH2>
        {cities.length > 0 ? (
          <ResultsWrapper $alignLeft>
            {cities.map((city) => {
              return (
                <CityCard key={city.id} onRemove={handleOnRemove} data={city} />
              );
            })}
          </ResultsWrapper>
        ) : (
          <StyledP>The list is empty. Please search a city</StyledP>
        )}
      </MainWrapper>
    </div>
  );
}

export default App;
