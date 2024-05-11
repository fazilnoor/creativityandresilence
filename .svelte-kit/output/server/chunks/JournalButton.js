import { c as create_ssr_component, e as escape, d as each } from "./index.js";
const Journal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { questions } = $$props;
  let { bgColor } = $$props;
  let { bgImg } = $$props;
  let { bgPosition } = $$props;
  let { title } = $$props;
  let { bgSize } = $$props;
  let { bullets } = $$props;
  if ($$props.questions === void 0 && $$bindings.questions && questions !== void 0)
    $$bindings.questions(questions);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.bgImg === void 0 && $$bindings.bgImg && bgImg !== void 0)
    $$bindings.bgImg(bgImg);
  if ($$props.bgPosition === void 0 && $$bindings.bgPosition && bgPosition !== void 0)
    $$bindings.bgPosition(bgPosition);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.bgSize === void 0 && $$bindings.bgSize && bgSize !== void 0)
    $$bindings.bgSize(bgSize);
  if ($$props.bullets === void 0 && $$bindings.bullets && bullets !== void 0)
    $$bindings.bullets(bullets);
  return `<section id="journal" class="journal-questions modal"><a href="#" tabindex="-1" hidden class="modalClose">Close journal questions</a>
  <div style="${"--journal-bgColor: " + escape(bgColor, true) + "; --modalBoxBg: " + escape(bgColor, true) + " url(" + escape(bgImg, true) + ") " + escape(bgPosition, true) + "/" + escape(bgSize, true) + " no-repeat;"}"><a href="#" class="modalClose closeCta" hidden tabindex="-1"><span>Close journal questions</span></a>
    <div class="journal-content"><div class="wrap"><div class="content" style="${"--journal-bullets: " + escape(bullets, true) + ";"}"><h2>${escape(title)}</h2>
          <p class="instr">If any of these questions speak to you… ponder them, write in your journal or share with a friend, as you like.</p>
          <ul class="journal-questions">${each(questions, (question) => {
    return `<li>${escape(question)}</li>`;
  })}</ul></div></div></div></div></section>`;
});
const JournalButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { right } = $$props;
  let { top } = $$props;
  let { glow } = $$props;
  let { posType } = $$props;
  let { alpha } = $$props;
  let { mobTop } = $$props;
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.glow === void 0 && $$bindings.glow && glow !== void 0)
    $$bindings.glow(glow);
  if ($$props.posType === void 0 && $$bindings.posType && posType !== void 0)
    $$bindings.posType(posType);
  if ($$props.alpha === void 0 && $$bindings.alpha && alpha !== void 0)
    $$bindings.alpha(alpha);
  if ($$props.mobTop === void 0 && $$bindings.mobTop && mobTop !== void 0)
    $$bindings.mobTop(mobTop);
  return `<p class="journal-prompt" style="${"--top: " + escape(top, true) + "; --right: " + escape(right, true) + "; --mobTop: " + escape(mobTop, true) + "; --glow: " + escape(glow, true) + "; --posType: " + escape(posType, true) + "; --jpAlpha: " + escape(alpha, true) + ";"}"><a href="#journal" class="journal-cta">Explore Your Experience</a></p>`;
});
export {
  JournalButton as J,
  Journal as a
};
