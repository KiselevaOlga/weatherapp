import styled from "styled-components";

export const MainWrapper = styled.main`
  background-image: url("/images/pinksky.jpg");
  background-size: cover;
  background-color: white;
  min-height: 100dvh;
`;

export const FormWrapper = styled.form`
  display: flex;
  gap: 1rem;
  padding: 3rem;
  justify-content: center;
`;

export const StyledInput = styled.input`
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  padding: 0.5rem;
  text-transform: uppercase;
`;

export const SearchButton = styled.button`
  border-radius: 10px;
  border: none;
  padding: 0.5rem;
  text-transform: uppercase;
  background: #3b0000;
  opacity: 0.8;
  color: white;
`;

export const StyledH2 = styled.h2`
  text-transform: uppercase;
  color: #3b0000;
`;

export const ResultsWrapper = styled.div<{ $alignLeft?: boolean }>`
  padding: 1rem;
  display: flex;
  place-content: ${(props) => (props.$alignLeft ? "start" : "center")};
  gap: 1rem;
  flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 1rem;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  max-width: 300px;
  flex: 1;
  color: #3b0000;

  /* box-shadow: 0px 0px 8px 4px rgba(255, 255, 255, 0.71);
  -webkit-box-shadow: 0px 0px 8px 4px rgba(255, 255, 255, 0.71);
  -moz-box-shadow: 0px 0px 8px 4px rgba(255, 255, 255, 0.71); */
`;

export const ImageWrapper = styled.div`
  display: flex;
  place-content: center;
  & > img {
  }
`;

export const WeatherInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-content: center;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHr = styled.hr`
  height: 1px;
  background-color: white;
  border: unset;
`;

export const StyledButton = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  border: unset;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 200ms;
  padding: 0.5rem;
  color: #3b0000;

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

export const StyledP = styled.p<{ $bigger?: boolean; $white?: boolean }>`
  margin: unset;
  font-size: ${(props) => (props.$bigger ? "34px" : "16px")};
  color: ${(props) => props.$white && "white"};
`;

export const StyledH4 = styled.h4`
  margin: unset;
`;

export const StyledSpan = styled.span`
  font-size: 14px;
`;
export const CityDateWrapper = styled.div`
  text-align: left;
`;
