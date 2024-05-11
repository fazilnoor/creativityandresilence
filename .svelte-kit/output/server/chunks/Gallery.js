import { c as create_ssr_component, d as each, e as escape, f as add_attribute } from "./index.js";
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slides } = $$props;
  if ($$props.slides === void 0 && $$bindings.slides && slides !== void 0)
    $$bindings.slides(slides);
  return `<section class="media-gallery"><ul class="thumbs">${each(slides, (thumb, i) => {
    return `<li><a href="${"#slide-" + escape(i + 1, true)}" class="slide">${thumb.type === "slide" ? `<div class="media-slide text-slide" style="${"--bg-settings: " + escape(thumb.bgSettings, true) + "; --copy-color: " + escape(thumb.copyColor, true) + "; --font-weight: " + escape(thumb.fontWeight, true)}"><!-- HTML_TAG_START -->${thumb.title}<!-- HTML_TAG_END -->
                 <!-- HTML_TAG_START -->${thumb.desc}<!-- HTML_TAG_END -->
            </div>` : `<img${add_attribute("src", thumb.thumbFallback, 0)}${add_attribute("alt", thumb.alt, 0)} srcset="${escape(thumb.thumb, true) + " 288w, " + escape(thumb.thumbFallback, true) + " 320w, " + escape(thumb.thumb, true) + " 634w"}" sizes="(max-width: 600px) 18em, (min-width: 601px) and (max-width: 1024px) 20em, 39em">`}</a>
      </li>`;
  })}</ul></section>`;
});
export {
  Gallery as G
};
