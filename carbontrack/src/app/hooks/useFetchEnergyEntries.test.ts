import { renderHook, waitFor } from "@testing-library/react";
import { useFetchEnergyEntries } from "../hooks/useFetchEnergyEntries";
import { fetchEnergy } from "../utils/fetchEnergyEntries";

// Mock the API call
jest.mock("../utils/fetchEnergyEntries", () => ({
  fetchEnergy: jest.fn(),
}));

const mockEnergyData = [
  {
    factory: 10,
    co2_equivalent: "2.5",
    created_at: "2025-09-18T10:00:00.000Z",
  },
  {
    factory: 10,
    co2_equivalent: "1.5",
    created_at: "2025-09-18T14:00:00.000Z",
  },
  {
    factory: 11,
    co2_equivalent: "5.0",
    created_at: "2025-09-18T09:00:00.000Z",
  },
];

describe("useFetchEnergyEntries", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it("loads and sums CO₂ emissions for factoryId 10", async () => {
    (fetchEnergy as jest.Mock).mockResolvedValue(mockEnergyData);

    const { result } = renderHook(() => useFetchEnergyEntries());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBeNull();
    expect(result.current.totalCO2).toBeCloseTo(4.0); // 2.5 + 1.5
  });

  it("filters by selectedDate", async () => {
    (fetchEnergy as jest.Mock).mockResolvedValue(mockEnergyData);

    const selectedDate = new Date("2025-09-18");

    const { result } = renderHook(() =>
      useFetchEnergyEntries(selectedDate)
    );

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.totalCO2).toBeCloseTo(4.0);
  });

  it("returns 0 if no entries match factoryId 10", async () => {
    (fetchEnergy as jest.Mock).mockResolvedValue([
      { factory: 11, co2_equivalent: "5.0", created_at: "2025-09-18T09:00:00.000Z" },
    ]);

    const { result } = renderHook(() => useFetchEnergyEntries());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.totalCO2).toBe(0);
  });

  it("handles non-array response", async () => {
    (fetchEnergy as jest.Mock).mockResolvedValue({ bad: "data" });

    const { result } = renderHook(() => useFetchEnergyEntries());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.totalCO2).toBeNull();
  });

  it("handles missing factoryId in localStorage", async () => {
    // Overwrite the effect’s setItem
    Storage.prototype.setItem = jest.fn();

    (fetchEnergy as jest.Mock).mockResolvedValue(mockEnergyData);

    localStorage.clear(); // Simulate missing factoryId

    const { result } = renderHook(() => useFetchEnergyEntries());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.totalCO2).toBeNull();
  });
});
