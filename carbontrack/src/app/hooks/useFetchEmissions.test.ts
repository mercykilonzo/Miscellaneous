import { renderHook, act, waitFor } from "@testing-library/react";
import useFetchEmissions from "../hooks/useFetchEmissions";
import { fetchEmissions } from "../utils/fetchEmissions";

jest.mock("../utils/fetchEmissions");

const mockEmissions = [
  {
    emissions_id: 1,
    emission_rate: "2.5",
    updated_at: "2025-09-19T10:00:00Z",
  },
  {
    emissions_id: 2,
    emission_rate: "1.5",
    updated_at: "2025-09-19T14:00:00Z",
  },
];

describe("useFetchEmissions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

it("loads emissions and calculates totals correctly", async () => {
  (fetchEmissions as jest.Mock).mockResolvedValue(mockEmissions);

  const { result } = renderHook(() => useFetchEmissions());

  // Wait until the hook has finished calculations
  await waitFor(() => {
    expect(result.current.todayTotal).toBe(4.0);
  });

  expect(result.current.error).toBeNull();
  expect(result.current.todayTotal).toBeCloseTo(4.0); // 2.5 + 1.5
  expect(result.current.monthTotal).toBeGreaterThan(0);
  expect(result.current.barData.length).toBe(12);
  expect(result.current.lineData.find(d => d.time === "10:00")?.value).toBeCloseTo(2.5);
  expect(result.current.lineData.find(d => d.time === "14:00")?.value).toBeCloseTo(1.5);
});


  it("handles API failure", async () => {
    (fetchEmissions as jest.Mock).mockRejectedValue(new Error("fail"));

    const { result } = renderHook(() => useFetchEmissions());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toBe("Failed to load data");
    expect(result.current.todayTotal).toBeNull();
    expect(result.current.monthTotal).toBeNull();
    expect(result.current.barData).toEqual([]);
    expect(result.current.lineData).toEqual([]);
  });

  it("recalculates totals when selectedDate changes", async () => {
    (fetchEmissions as jest.Mock).mockResolvedValue(mockEmissions);

    const { result } = renderHook(() => useFetchEmissions());

    await waitFor(() => expect(result.current.loading).toBe(false));

    act(() => {
      result.current.setSelectedDate(new Date("2025-09-18T00:00:00Z"));
    });

    expect(result.current.todayTotal).toBe(0);
    expect(result.current.lineData.every(d => d.value === 0)).toBe(true);
  });
});
