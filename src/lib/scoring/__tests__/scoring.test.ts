import { describe, expect, it } from "vitest";
import { bcnEase, costFromDaily, dukeScore, noCarLight, verdictFor } from "@/lib/scoring";
import { CIRCO_WEIGHTS, DUKE_POINTS, DUKE_VERDICT } from "@/lib/scoring/weights";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-01-01", volatility: "volatil" });

describe("pesos", () => {
  it("Circo Score suma 1", () => {
    const sum = Object.values(CIRCO_WEIGHTS).reduce((a, b) => a + b, 0);
    expect(Math.abs(sum - 1)).toBeLessThan(1e-9);
  });
  it("Duke Score suma 100 puntos", () => {
    expect(Object.values(DUKE_POINTS).reduce((a, b) => a + b, 0)).toBe(100);
  });
});

describe("curva de coste", () => {
  it("interpola los puntos de la curva", () => {
    expect(costFromDaily(40)).toBe(1);
    expect(costFromDaily(100)).toBe(5);
    expect(costFromDaily(55)).toBe(2);
    expect(costFromDaily(300)).toBe(10);
    expect(costFromDaily(10)).toBe(0);
  });
});

describe("facilidad desde BCN", () => {
  it("directo low-cost diario → 10", () => {
    expect(bcnEase({ direct: true, directHours: 2.7, directWeekly: 20, lowCostDirect: true, oneStopMinHours: 5, oneStopDailyOptions: 10, meta: m }).value).toBe(10);
  });
  it("sin directo, escala larga → alrededor de 5", () => {
    const v = bcnEase({ direct: false, lowCostDirect: false, oneStopMinHours: 9.5, oneStopDailyOptions: 3, meta: m }).value;
    expect(v).toBeGreaterThan(4.5);
    expect(v).toBeLessThan(6);
  });
});

describe("semáforo y veredicto", () => {
  it("umbrales del semáforo", () => {
    expect(noCarLight(7.5)).toBe("verde");
    expect(noCarLight(6)).toBe("amarillo");
    expect(noCarLight(4.5)).toBe("naranja");
    expect(noCarLight(4.4)).toBe("rojo");
  });
  it("veredicto por Duke", () => {
    expect(verdictFor(DUKE_VERDICT.mucho)).toBe("mucho");
    expect(verdictFor(DUKE_VERDICT.si)).toBe("si");
    expect(verdictFor(DUKE_VERDICT.depende)).toBe("depende");
    expect(verdictFor(DUKE_VERDICT.depende - 1)).toBe("poco");
  });
  it("penaliza zona de riesgo y coche necesario", () => {
    const base = { circo: 9, noCar: 8, noCarLight: "verde" as const, cost: 2, transport: 8, safety: 8, bcn: 6, season: 6, language: 7, digital: 6, stability: 7 };
    const ok = dukeScore(base);
    const risky = dukeScore({ ...base, stability: 3 });
    const car = dukeScore({ ...base, noCarLight: "rojo", noCar: 3 });
    expect(ok.penalties).toHaveLength(0);
    expect(risky.penalties.map((p) => p.key)).toContain("riskZone");
    expect(car.penalties.map((p) => p.key)).toContain("needsCar");
    expect(risky.value).toBeLessThan(ok.value);
  });
});
