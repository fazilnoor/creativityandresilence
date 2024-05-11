import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.60fe06ea.js","_app/immutable/chunks/index.bd1827a9.js"];
export const stylesheets = [];
export const fonts = [];
