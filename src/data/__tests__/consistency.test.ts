import { describe, expect, it } from "vitest";
import { CountryDetailSchema, CountrySummarySchema, type CountryDetail } from "@/lib/schema";
import { computePlaceStats, scoreCountry } from "@/lib/scoring";
import uz from "../countries/uz";
import sco from "../countries/sco";
import ita from "../countries/it";
import at from "../countries/at";
import se from "../countries/se";
import jp from "../countries/jp";
import gex from "../countries/ge";
import amx from "../countries/am";
import kzx from "../countries/kz";
import mnx from "../countries/mn";
import cnx from "../countries/cn";
import rox from "../countries/ro";
import bgx from "../countries/bg";
import rsx from "../countries/rs";
import bax from "../countries/ba";
import alx from "../countries/al";
import mdx from "../countries/md";
import eex from "../countries/ee";
import lvx from "../countries/lv";
import ltx from "../countries/lt";
import plx from "../countries/pl";
import trx from "../countries/tr";
import kgx from "../countries/kg";
import hux from "../countries/hu";
import skx from "../countries/sk";
import mkx from "../countries/mk";
import mex from "../countries/me";
import krx from "../countries/kr";
import cyx from "../countries/cy";
import grx from "../countries/gr";
import six from "../countries/si";
import hrx from "../countries/hr";

const ALL: CountryDetail[] = [uz, sco, ita, at, se, jp, gex, amx, kzx, mnx, cnx, rox, bgx, rsx, bax, alx, mdx, eex, lvx, ltx, plx, trx, kgx, hux, skx, mkx, mex, krx, cyx, grx, six, hrx];

const VOLATILE_SECTIONS = ["docs", "safety", "flights", "cost", "politics", "events"] as const;

describe.each(ALL.map((d) => [d.summary.id, d] as const))("país %s", (_id, d) => {
  it("valida contra los esquemas Zod", () => {
    expect(() => CountrySummarySchema.parse(d.summary)).not.toThrow();
    expect(() => CountryDetailSchema.parse(d)).not.toThrow();
  });

  it("placeStats coincide con computePlaceStats(places)", () => {
    const computed = computePlaceStats(d.places);
    const { spreadKm: sk1, ...rest1 } = d.summary.placeStats;
    const { spreadKm: sk2, ...rest2 } = computed;
    expect(rest1).toEqual(rest2);
    expect(Math.abs(sk1 - sk2)).toBeLessThanOrEqual(Math.max(20, sk2 * 0.1));
  });

  it("tiene 12 meses en orden", () => {
    expect(d.summary.months.map((m) => m.month)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it("todas las referencias de rutas y eventos resuelven", () => {
    const cityIds = new Set(d.cities.map((c) => c.id));
    const placeIds = new Set(d.places.map((p) => p.id));
    const festivalIds = new Set(d.summary.festivals.map((f) => f.id));
    for (const r of d.routes) {
      for (const s of r.stops) {
        expect(cityIds.has(s.cityId), `${r.id}: ciudad ${s.cityId}`).toBe(true);
        for (const p of s.placeIds) expect(placeIds.has(p), `${r.id}: sitio ${p}`).toBe(true);
      }
      const nights = r.stops.reduce((a, s) => a + s.nights, 0);
      expect(nights, `${r.id}: noches ${nights} ≠ días ${r.days}`).toBe(r.days);
    }
    for (const c of d.railCorridors) for (const s of c.stops) expect(cityIds.has(s), `${c.id}: parada ${s}`).toBe(true);
    for (const m of d.mapRoutes) {
      expect(cityIds.has(m.from), `${m.id}: from`).toBe(true);
      expect(cityIds.has(m.to), `${m.id}: to`).toBe(true);
    }
    for (const a of d.airports) expect(cityIds.has(a.cityId), `${a.code}: ciudad`).toBe(true);
    for (const p of d.places) {
      expect(p.countryId).toBe(d.summary.id);
      if (p.cityId) expect(cityIds.has(p.cityId), `${p.id}: ciudad ${p.cityId}`).toBe(true);
    }
    for (const e of d.events.entries) if (e.festivalId) expect(festivalIds.has(e.festivalId), `evento: festival ${e.festivalId}`).toBe(true);
  });

  it("las secciones volátiles están marcadas como tales", () => {
    for (const k of VOLATILE_SECTIONS) expect(d[k].meta.volatility, k).toBe("volatil");
    expect(d.summary.fx.meta.volatility).toBe("volatil");
    expect(d.summary.inputs.docs.meta.volatility).toBe("volatil");
    expect(d.summary.inputs.flights.meta.volatility).toBe("volatil");
    expect(d.summary.inputs.safety.meta.volatility).toBe("volatil");
    expect(d.summary.inputs.cost.meta.volatility).toBe("volatil");
    for (const c of d.railCorridors) expect(c.meta.volatility, c.id).toBe("volatil");
    for (const f of d.summary.festivals) expect(f.meta.volatility, f.id).toBe("volatil");
  });

  it("todo festival planificable aparece en el calendario de eventos", () => {
    for (const f of d.summary.festivals.filter((x) => x.planTripAround)) {
      expect(d.events.entries.some((e) => e.festivalId === f.id), f.id).toBe(true);
    }
  });

  it("puntúa sin errores y dentro de rango", () => {
    const s = scoreCountry(d.summary);
    expect(s.duke.value).toBeGreaterThanOrEqual(0);
    expect(s.duke.value).toBeLessThanOrEqual(100);
    expect(s.circo.value).toBeGreaterThan(0);
    expect(s.days.ideal).toBeGreaterThanOrEqual(5);
    expect(s.days.ideal).toBeLessThanOrEqual(18);
  });
});

describe("ids únicos entre países", () => {
  it("no hay ids de sitio, festival o ruta repetidos", () => {
    const ids = ALL.flatMap((d) => [...d.places.map((p) => p.id), ...d.summary.festivals.map((f) => f.id), ...d.routes.map((r) => r.id)]);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
