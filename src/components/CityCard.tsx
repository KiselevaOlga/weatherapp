import { getWeatherIconUrl, currentDate } from "../utils";
import {
  CardWrapper,
  CityDateWrapper,
  StyledH4,
  StyledP,
  StyledHr,
  WeatherInfo,
  ImageWrapper,
  StyledSpan,
  StyledButton,
} from "../styles";
import { DataProps } from "../types";

interface Props {
  onAddToList?: () => void;
  onRemove?: (id: number) => void;
  data: DataProps;
}

export const CityCard = ({
  onAddToList = undefined,
  onRemove = undefined,
  data,
}: Props) => {
  const { id, weather, temperature, city } = data;
  return (
    <CardWrapper>
      <CityDateWrapper>
        <StyledH4>{city}</StyledH4>
        <StyledP>{currentDate}</StyledP>
      </CityDateWrapper>
      <StyledHr />
      <WeatherInfo>
        <div>
          <ImageWrapper>
            <img
              src={getWeatherIconUrl(weather[0].icon)}
              alt={weather[0].description}
            />
          </ImageWrapper>
          <StyledSpan>{weather[0].main}</StyledSpan>
        </div>
        <div>
          <StyledP $bigger $white>
            {Math.ceil(temperature.temp)}°C
          </StyledP>
          <div>
            <StyledSpan>{Math.ceil(temperature.temp_max)}°C</StyledSpan> /
            <StyledSpan>{Math.ceil(temperature.temp_min)}°C</StyledSpan>
          </div>
        </div>
      </WeatherInfo>
      {onAddToList && (
        <>
          <StyledHr />
          <StyledButton onClick={onAddToList} data-testid="addBtn">
            Add to my list
          </StyledButton>
        </>
      )}
      {onRemove && (
        <>
          <StyledHr />
          <StyledButton data-testid="removeBtn" onClick={() => onRemove(id)}>
            Remove from my list
          </StyledButton>
        </>
      )}
    </CardWrapper>
  );
};
