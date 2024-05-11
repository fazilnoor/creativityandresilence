import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = {  }
type RouteId = '/(main)';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type LayoutRouteId = RouteId | "/(main)/about" | "/(main)/earth" | "/(main)/earth/art-workshop" | "/(main)/earth/fresh-mind-cooking" | "/(main)/earth/fresh-mind-cooking/black-bean-soup" | "/(main)/earth/fresh-mind-cooking/cooking-with-herbs" | "/(main)/earth/fresh-mind-cooking/galettes" | "/(main)/earth/fresh-mind-cooking/meal-salad" | "/(main)/earth/fresh-mind-cooking/vegetable-soup" | "/(main)/earth/grounding-meditation" | "/(main)/earth/kindness-to-self" | "/(main)/earth/path-to-the-heart" | "/(main)/earth/quieting-inner-critic" | "/(main)/earth/self-hypnosis" | "/(main)/earth/sharing-earth" | "/(main)/earth/the-inner-critic" | "/(main)/earth/voice-of-earth" | "/(main)/faqs" | "/(main)/fire" | "/(main)/fire/dissolving-anger" | "/(main)/fire/fire-meditation" | "/(main)/fire/podcast-creativity" | "/(main)/fire/sharing-fire" | "/(main)/fire/stop-obsessive-thinking" | "/(main)/fire/voice-of-fire" | "/(main)/journals" | "/(main)/legal-disclaimers" | "/(main)/meet-the-guardians" | "/(main)/privacy-policy" | "/(main)/space" | "/(main)/space/dance-workshop" | "/(main)/space/letting-go" | "/(main)/space/making-more-mental-space" | "/(main)/space/present-moment-meditation" | "/(main)/space/sharing-space" | "/(main)/space/sky-eating" | "/(main)/space/space-meditation" | "/(main)/space/voice-of-space" | "/(main)/water" | "/(main)/water/art-of-listening" | "/(main)/water/finding-flexibility" | "/(main)/water/podcast-flow" | "/(main)/water/podcast-resilience" | "/(main)/water/sharing-water" | "/(main)/water/voice-of-water" | "/(main)/water/water-meditation" | "/(main)/wind" | "/(main)/wind/changing-your-mood" | "/(main)/wind/creating-new-pathways" | "/(main)/wind/generosity-and-the-brain" | "/(main)/wind/inaction-to-action" | "/(main)/wind/music-chamber" | "/(main)/wind/podcast-freedom" | "/(main)/wind/poetry-workshop" | "/(main)/wind/sharing-wind" | "/(main)/wind/voice-of-wind"
type LayoutParams = RouteParams & {  }
type LayoutParentData = EnsureDefined<import('../$types.js').LayoutData>;

export type LayoutServerData = null;
export type LayoutLoad<OutputData extends OutputDataShape<LayoutParentData> = OutputDataShape<LayoutParentData>> = Kit.Load<LayoutParams, LayoutServerData, LayoutParentData, OutputData, LayoutRouteId>;
export type LayoutLoadEvent = Parameters<LayoutLoad>[0];
export type LayoutData = Expand<Omit<LayoutParentData, keyof LayoutParentData & EnsureDefined<LayoutServerData>> & OptionalUnion<EnsureDefined<LayoutParentData & EnsureDefined<LayoutServerData>>>>;