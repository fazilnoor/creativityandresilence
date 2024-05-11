import { c as create_ssr_component, e as escape, d as each, f as add_attribute } from "./index.js";
const Slides = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slides } = $$props;
  if ($$props.slides === void 0 && $$bindings.slides && slides !== void 0)
    $$bindings.slides(slides);
  return `<section class="media-carousel"><div id="carouselDeck" class="carousel-deck"><a href="${"#slide-" + escape(slides.length, true)}" class="slide-nav slide-prev"><span>previous slide</span></a>
    <div class="track">${each(slides, (slide, i) => {
    return `<div id="${"slide-" + escape(i + 1, true)}" class="${"slide" + escape(slide.type === "image" ? " image" : "", true)}">${slide.type === "slide" ? `<div class="media-slide text-slide" style="${"--bg-settings: " + escape(slide.bgSettings, true) + "; --copy-color: " + escape(slide.copyColor, true) + ";--font-weight: " + escape(slide.fontWeight, true) + ";"}"><!-- HTML_TAG_START -->${slide.title}<!-- HTML_TAG_END -->
              <!-- HTML_TAG_START -->${slide.desc}<!-- HTML_TAG_END --></div>
            <div class="caption"></div>` : `${slide.type === "video" ? `<iframe${add_attribute("src", slide.slideMedia, 0)} class="media-video video-player" title="vimeo-player" allowfullscreen frameborder="0"></iframe>
            <p class="caption">${escape(slide.title)}</p>` : `<img${add_attribute("src", slide.slideMedia, 0)}${add_attribute("alt", slide.desc, 0)} class="media-image">
            <p class="caption">${escape(slide.title)}</p>`}`}
        </div>`;
  })}</div>
    <a href="#slide-2" class="slide-nav slide-next"><span>next slide</span></a></div></section>`;
});
export {
  Slides as S
};
