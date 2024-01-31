import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import fetchMock from "jest-fetch-mock";

import App from "./App";

const mockData = {
  id: 1,
  name: "London",
  main: {
    temp: 1,
    feels_like: 3,
    temp_min: 1,
    temp_max: 1,
    pressure: 100,
    humidity: 0,
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04d",
    },
  ],
};

fetchMock.enableMocks();

describe("App Component", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("renders App", () => {
    render(<App />);
    expect(screen.getByTestId("submitBtn")).toBeInTheDocument();
  });

  test("shows the fetched weather data", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData), { status: 200 });

    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Start typing.../i);
    const searchButton = screen.getByTestId("submitBtn");

    fireEvent.change(searchInput, { target: { value: "London" } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/London/i)).toBeInTheDocument();
    });
  });

  test("adds city to my list", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData), { status: 200 });

    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Start typing.../i);
    const searchButton = screen.getByTestId("submitBtn");

    fireEvent.change(searchInput, { target: { value: "London" } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/London/i)).toBeInTheDocument();
    });

    const addButton = screen.getByTestId("addBtn");
    fireEvent.click(addButton);

    const removeButton = screen.getByTestId("removeBtn");

    await waitFor(() => {
      expect(removeButton).toBeInTheDocument();
    });
  });
});
