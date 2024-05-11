import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { S as Slides } from "../../../../../chunks/Slides.js";
import { G as Gallery } from "../../../../../chunks/Gallery.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slideData = {
    slides: [
      {
        type: "slide",
        title: "<h2>Sharing Visions of Water</h2>",
        desc: '<p>Here in this space we invite you to share your visions of water. Please feel free to send short poems, artwork, photos (below 5MB), or short videos (up to 2 minutes) relating to the essence of water. Please mention your location.<br><br></p><p>Send to:<br> <a href="mailto:creativeresilience@khyentsefoundation.org">creativeresilience@khyentsefoundation.org</a></p>',
        slideMedia: "",
        slideMediaFallback: "",
        thumb: "",
        thumbFallback: "",
        alt: "",
        bgSettings: "radial-gradient(hsla(300, 100%, 7%, 7), hsla(300, 100%, 2%, .2)), hsl(255, 0%, 0%)",
        copyColor: "var(--light-color)",
        fontWeight: "300"
      },
      {
        type: "image",
        title: "The Guardian of the Water Painted by Tara di Gesu",
        desc: "A Water Dakini painting by Tara di Gesu",
        slideMedia: `${base}/assets/water/sharing-water/water_dakini_closeup.webp`,
        slideMediaFallback: "",
        thumb: `${base}/assets/water/sharing-water/water_dakini_closeup_320_th.webp`,
        thumbFallback: `${base}/assets/water/sharing-water/water_dakini_closeup_th.jpg`,
        alt: "Thumbnail of a Water Dakini painting by Tara di Gesu",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Gondola, Gondola by Tom Bottoms. Santa Cruz, California",
        desc: "A painting of a gondola on water viewed from above",
        slideMedia: `${base}/assets/water/sharing-water/water_tom_bottom.webp`,
        slideMediaFallback: "",
        thumb: `${base}/assets/water/sharing-water/water_tom_bottom_320_th.webp`,
        thumbFallback: `${base}/assets/water/sharing-water/water_tom_bottom_th.jpg`,
        alt: "Thumbnail of Tom Bottoms' painting",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Doug Pinto. Santa Fe, New Mexico.",
        desc: "Photo of snow-blanketed, evergreen trees against a clear blue sky",
        slideMedia: `${base}/assets/water/sharing-water/water_doug_pinto_52.webp`,
        slideMediaFallback: "",
        thumb: `${base}/assets/water/sharing-water/water_doug_pinto_52_320_th.webp`,
        thumbFallback: `${base}/assets/water/sharing-water/water_doug_pinto_52_th.jpg`,
        alt: "Thumbnail of Doug Pinto's landscape",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Christie Longaker. Ireland.",
        desc: "Waves splashing against black cliffs viewed from above",
        slideMedia: `${base}/assets/water/sharing-water/water_longaker_mex_black_cliffs_turquoise_ocean.webp`,
        slideMediaFallback: "",
        thumb: `${base}/assets/water/sharing-water/water_longaker_mex_black_cliffs_turquoise_ocean_320_th.webp`,
        thumbFallback: `${base}/assets/water/sharing-water/water_longaker_mex_black_cliffs_turquoise_ocean_th.jpg`,
        alt: "Thumbnail  of Christie Longaker's landscape",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Jason Papenfuss. Bahamas.",
        desc: "The horizon of the ocean",
        slideMedia: `${base}/assets/water/sharing-water/water_jason_papenfuss_20.webp`,
        slideMediaFallback: "",
        thumb: `${base}/assets/water/sharing-water/water_jason_papenfuss_20_320_th.webp`,
        thumbFallback: `${base}/assets/water/sharing-water/water_jason_papenfuss_20_th.jpg`,
        alt: "Thumbnail of Jason Papenfuss' ocean scene",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Painting by Terrell Minton",
        desc: "A painting of a koi pond with several varieties of koi fish",
        slideMedia: `${base}/assets/water/sharing-water/water_minton_fish_in_water.webp`,
        slideMediaFallback: "",
        thumb: `${base}/assets/water/sharing-water/water_minton_fish_in_water_320_th.webp`,
        thumbFallback: `${base}/assets/water/sharing-water/water_minton_fish_in_water_th.jpg`,
        alt: "Thumbnail of Terrell Minton's painting",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Green Waves Painting by Susan Killfoil",
        desc: "A painting of roiling ocean waves",
        slideMedia: `${base}/assets/water/sharing-water/susan_killfoil_green_waves.webp`,
        slideMediaFallback: "",
        thumb: `${base}/assets/water/sharing-water/susan_killfoil_green_waves_320_th.webp`,
        thumbFallback: `${base}/assets/water/sharing-water/susan_killfoil_green_waves_th.png`,
        alt: "Thumbnail of Susan Killfoil's painting",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Solitude Painting by Susan Killfoil",
        desc: "A painting of a brown bear glancing back while standing at a precipice overlooking water",
        slideMedia: `${base}/assets/water/sharing-water/susan_killfoil_solitude.webp`,
        slideMediaFallback: "",
        thumb: `${base}/assets/water/sharing-water/susan_killfoil_solitude_320_th.webp`,
        thumbFallback: `${base}/assets/water/sharing-water/susan_killfoil_solitude_th.png`,
        alt: "Thumbnail of Susan Killfoil's painting",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Christie Longaker. Netherlands.",
        desc: "A photo of a swan floating on a canal with cows in the background drinking the water.",
        slideMedia: `${base}/assets/water/sharing-water/water_longaker_nl_canal_swan_2_cows.webp`,
        slideMediaFallback: "",
        thumb: `${base}/assets/water/sharing-water/water_longaker_nl_canal_swan_2_cows_320_th.webp`,
        thumbFallback: `${base}/assets/water/sharing-water/water_longaker_nl_canal_swan_2_cows_th.jpg`,
        alt: "Thumbnail of Christie Longaker's scene",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Christie Longaker. Netherlands.",
        desc: "A photo of a swan floating on a public park pond with orange tulips in the foreground.",
        slideMedia: `${base}/assets/water/sharing-water/water_longaker_nl_fountain_swan_canal_orange_tulips.webp`,
        slideMediaFallback: "",
        thumb: `${base}/assets/water/sharing-water/water_longaker_nl_fountain_swan_canal_orange_tulips_320_th.webp`,
        thumbFallback: `${base}/assets/water/sharing-water/water_longaker_nl_fountain_swan_canal_orange_tulips_th.jpg`,
        alt: "Thumbnail of Christie Longaker's scene",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Paul Norden. Iguazu Falls, Brazil.",
        desc: "The Iguazu Falls in Brazil",
        slideMedia: `${base}/assets/water/sharing-water/water_paul_norden_9.webp`,
        slideMediaFallback: "",
        thumb: `${base}/assets/water/sharing-water/water_paul_norden_9_320_th.webp`,
        thumbFallback: `${base}/assets/water/sharing-water/water_paul_norden_9_th.jpg`,
        alt: "",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Painting by Alicja Zmigrodzka. Poland.",
        desc: "A photo of Alicja Zmigrodzka's painting",
        slideMedia: `${base}/assets/water/sharing-water/water_alicja_zmigrodzka_water_dakini_1.webp`,
        slideMediaFallback: "",
        thumb: `${base}/assets/water/sharing-water/water_alicja_zmigrodzka_water_dakini_1_320_th.webp`,
        thumbFallback: `${base}/assets/water/sharing-water/water_alicja_zmigrodzka_water_dakini_1_th.jpg`,
        alt: "Thumbnail of Christie Longaker's scene",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Christie Longaker. Netherlands.",
        desc: "Poem by Yvonne Gold overlaying a tropical water fall photo: I am mist, I am fluid, I am solid, I can calm, I can invigorate, I can empower, I purify, You call me water",
        slideMedia: `${base}/assets/water/sharing-water/water_longaker_nl_waterfall_small_bottom_poem.webp`,
        slideMediaFallback: "",
        thumb: `${base}/assets/water/sharing-water/water_longaker_nl_waterfall_small_bottom_poem_320_th.webp`,
        thumbFallback: `${base}/assets/water/sharing-water/water_longaker_nl_waterfall_small_bottom_poem_th.jpg`,
        alt: "Thumbnail of Christie Longaker's scene",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "video",
        title: "Video by Marisa Pearson. France",
        desc: "",
        slideMedia: "https://player.vimeo.com/video/517806361?h=5da8ddceff",
        slideMediaFallback: "",
        thumb: `${base}/assets/water/sharing-water/water_marisa_pearson_france_320_th.webp`,
        thumbFallback: `${base}/assets/water/sharing-water/water_marisa_pearson_france_th.jpg`,
        alt: "Still capture from Marisa Pearson's Video",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "video",
        title: "Video by Noa Jones. Iceland",
        desc: "",
        slideMedia: "https://player.vimeo.com/video/548311525?h=7642d44b14",
        slideMediaFallback: "",
        thumb: `${base}/assets/water/sharing-water/water_noa_jones_iceland_320_th.webp`,
        thumbFallback: `${base}/assets/water/sharing-water/water_noa_jones_iceland_th.jpg`,
        alt: "Still capture from Noa Jones' Video",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "slide",
        title: '<h3 class="subtitle">Other Water Pages</h3>',
        desc: '<p><a href="../">Return to Water</a><br><a href="../voice-of-water">Voice of Water</a><br><a href="../art-of-listening">The Art of Listening</a><br><a href="../finding-flexibility">Finding Flexibility</a><br><a href="../water-meditation">Water Meditation</a></p>',
        slideMedia: "",
        slideMediaFallback: "",
        thumb: "",
        thumbFallback: "",
        alt: "",
        bgSettings: "radial-gradient(hsla(300, 100%, 7%, 7), hsla(300, 100%, 2%, .2)), hsl(255, 0%, 0%)",
        copyColor: "var(--light-color)",
        fontWeight: "300"
      }
    ]
  } } = $$props;
  slideData.slides.length;
  if ($$props.slideData === void 0 && $$bindings.slideData && slideData !== void 0)
    $$bindings.slideData(slideData);
  return `${$$result.head += `<!-- HEAD_svelte-r7ke1x_START -->${$$result.title = `<title>Water: Sharing Visions of Water</title>`, ""}<!-- HEAD_svelte-r7ke1x_END -->`, ""}
<main class="content-page bleed no-pad" style="${"--element-bg: linear-gradient(hsla(200, 100%, 25%, .6), hsla(185, 51%, 50%, .8)), url(" + escape(base, true) + "/assets/water/water-element-lg-bg-lighten.webp) 100% 100%/150% auto no-repeat fixed; --element-mob-bg: linear-gradient(hsla(185, 51%, 50%, .5), hsla(185, 51%, 50%, .8)), url(" + escape(base, true) + "/assets/water/water-element-lg-bg-lighten.webp) 0 0/auto 100vh repeat; --element-color: 211, 85%, 26%;"}">${validate_component(Slides, "Slides").$$render($$result, Object.assign({}, slideData), {}, {})}
  ${validate_component(Gallery, "Gallery").$$render($$result, Object.assign({}, slideData), {}, {})}


  <a href="#ambient" id="audioCtl" class="gallery-audio-ctl sound-ctl stopped"></a>
  <audio loop id="ambient"><source src="${escape(base, true) + "/assets/water/sharing-water/water_ bach-prelude-c-major-156935.mp3"}" type="audio/mpeg"></audio></main>`;
});
export {
  Page as default
};
