import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { S as Slides } from "../../../../../chunks/Slides.js";
import { G as Gallery } from "../../../../../chunks/Gallery.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slideData = {
    slides: [
      {
        type: "slide",
        title: "<h2>Sharing the Beauty of Space</h2>",
        desc: '<p>This is a place where we share our inner and outer experience of becoming spacious like the sky. You are most welcome to send your experiences relating to the space element in the form of photos (below 5MB), short poems, artwork or short videos (up to 2 minutes). Please mention your location.<br><br>Send to:<br> <a href="mailto:creativeresilience@khyentsefoundation.org">creativeresilience@khyentsefoundation.org</a></p>',
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
        title: "The Guardian of Space Painted painted by Tara di Gesu",
        desc: "An Space Dakini painting by Tara di Gesu",
        slideMedia: `${base}/assets/space/sharing-space/space_dakini_closeup4.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/space/sharing-space/space_dakini_closeup4_320_th.webp`,
        thumbFallback: `${base}/assets/space/sharing-space/space_dakini_closeup4_th.jpg`,
        alt: "Thumbnail of a Space Dakini painting by Tara di Gesu",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Painting by Alicja Zmigrodzka. Poland.",
        desc: "A male and female figures embrace while they are weightlessly suspended in space.",
        slideMedia: `${base}/assets/space/sharing-space/space_alicja_zmigrodzka_angel_couple.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/space/sharing-space/space_alicja_zmigrodzka_angel_couple_320_th.webp`,
        thumbFallback: `${base}/assets/space/sharing-space/space_alicja_zmigrodzka_angel_couple_th.jpg`,
        alt: "Thumbnail of a Alicja Zmigrodzka's Painting",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Jason Papenfuss. Coast of Dubrovnik, Croatia.",
        desc: "Horizon over the blue ocean inscribed with the following: 'Every scar, Every wound, Every struggle, Every fear, Every doubt, Every piece of You is allowed to be here'",
        slideMedia: `${base}/assets/space/sharing-space/jason_papenfuss_34.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/space/sharing-space/jason_papenfuss_34_360_th.webp`,
        thumbFallback: `${base}/assets/space/sharing-space/jason_papenfuss_34_th.jpg`,
        alt: "Thumbnail of Jason Papenfuss's painting",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Plunge, painted by Andra Samelson. New York City, New York.",
        desc: "Abstact painting with splashes of blue in various shades and tints.",
        slideMedia: `${base}/assets/space/sharing-space/space_andra_samuelson_plunge.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/space/sharing-space/space_andra_samuelson_plunge_320_th.webp`,
        thumbFallback: `${base}/assets/space/sharing-space/space_andra_samuelson_plunge_th.jpg`,
        alt: "Thumbnail of Andra Samelson's painting",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Doug Pinto. New Mexico.",
        desc: "Landscape looking toward mountains with a billowy cloud floating above.",
        slideMedia: `${base}/assets/space/sharing-space/space_doug_pinto_35.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/space/sharing-space/space_doug_pinto_35_320_th.webp`,
        thumbFallback: `${base}/assets/space/sharing-space/space_doug_pinto_35_th.jpg`,
        alt: "Thumbnail of Doug Pinto's photo",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Doug Pinto. New Mexico.",
        desc: "White billowy clouds stand out amoungst gray ones.",
        slideMedia: `${base}/assets/space/sharing-space/space_doug_pinto_36.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/space/sharing-space/space_doug_pinto_36_320_th.webp`,
        thumbFallback: `${base}/assets/space/sharing-space/space_doug_pinto_36_th.jpg`,
        alt: "Thumbnail of Doug Pinto's painting",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Song from Nepal. Photo by Doug Pinto. New Mexico.",
        desc: "A crescent moon rises over a dark mountain inscribed with the following poem: You, oh moon, are like me -- Both of us are liars -- You and I are crying deep inside -- Yet laughing and smiling on the outside -- There's only one difference between us -- your tears make the morning dew -- and mine the evening song",
        slideMedia: `${base}/assets/space/sharing-space/space_doug_pinto_48.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/space/sharing-space/space_doug_pinto_48_320_th.webp`,
        thumbFallback: `${base}/assets/space/sharing-space/space_doug_pinto_48_th.jpg`,
        alt: "Thumbnail of Doug Pinto's photo",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Jason Papenfuss. Canon City, Colorado.",
        desc: "A rain cloud passes over grass field while a rainbow pierces through it.",
        slideMedia: `${base}/assets/space/sharing-space/space_jason_papenfuss_26.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/space/sharing-space/space_jason_papenfuss_26_320_th.webp`,
        thumbFallback: `${base}/assets/space/sharing-space/space_jason_papenfuss_26_th.jpg`,
        alt: "Thumbnail of Jason Papenfuss' photo",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Jason Papenfuss.",
        desc: "A gray, hazy sky streaked with light",
        slideMedia: `${base}/assets/space/sharing-space/space_jason_papenfuss_53.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/space/sharing-space/space_jason_papenfuss_53_320_th.webp`,
        thumbFallback: `${base}/assets/space/sharing-space/space_jason_papenfuss_53_th.jpg`,
        alt: "Thumbnail of Jason Papenfuss' photo",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Christie Longaker. France.",
        desc: "The setting sun casts colorful light across the sky over hilly landscape.",
        slideMedia: `${base}/assets/space/sharing-space/space_longaker_fr_sunset_gold_red_purple_hills.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/space/sharing-space/space_longaker_fr_sunset_gold_red_purple_hills_320_th.webp`,
        thumbFallback: `${base}/assets/space/sharing-space/space_longaker_fr_sunset_gold_red_purple_hills_th.jpg`,
        alt: "Thumbnail of Christie Longaker.'s painting",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Paul Norden. Wisconsin.",
        desc: "A sky full of wispy clouds and with rainbow colors being emitted from them.",
        slideMedia: `${base}/assets/space/sharing-space/space_paul_norden_17.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/space/sharing-space/space_paul_norden_17_320_th.webp`,
        thumbFallback: `${base}/assets/space/sharing-space/space_paul_norden_17_th.jpg`,
        alt: "Thumbnail of Paul Norden's painting",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Poem by Thinley Norbu Rinpoche, Photo by Jason Papenfuss.",
        desc: "Blue sky horizon overlaid with the following poem: The earthquake cannot harm the mysterious sky no matter how much its powerful shaking overturns and destroys. -- The ocean cannot harm the mysterious sky no matter how much its turbulent waves flood and destroy. -- The fire cannot harm the mysterious sky no matter how much its angry flame burns and destroys. -- The hurricane cannot harm the mysterious sky no matter how much its violent winds blow and destroy.",
        slideMedia: `${base}/assets/space/sharing-space/earthquake_poem.webp`,
        slideMediaFallback: "",
        thumb: `${base}/assets/space/sharing-space/earthquake_poem_320_th.webp`,
        thumbFallback: `${base}/assets/space/sharing-space/earthquake_poem_th.jpg`,
        alt: "Thumbnail of Jason Papenfuss' photo",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Alana Siegel. California.",
        desc: "Bright sunshine reflecting off the costal waters inscribed with: 'I am serene -- I am inclusive -- I am intangible -- I can accommodate -- I can create -- I can integrate -- I liberate -- you call me space —Yvonne Gold'",
        slideMedia: `${base}/assets/space/sharing-space/space_alana_siegel_space_1.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/space/sharing-space/space_alana_siegel_space_1_320_th.webp`,
        thumbFallback: `${base}/assets/space/sharing-space/space_alana_siegel_space_1_th.jpg`,
        alt: "Thumbnail of Alana Siegel's photo",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "video",
        title: "Video by Chime Lhamo. Auckland, New Zealand.",
        desc: "",
        slideMedia: "https://player.vimeo.com/video/505919447",
        slideMediaFallback: "",
        thumb: `${base}/assets/space/sharing-space/space-element-dance2_360_th.webp`,
        thumbFallback: `${base}/assets/space/sharing-space/space-element-dance2_th.jpg`,
        alt: "Still capture from Chime Lhamo's video ",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "video",
        title: "Video by Marisa Pearson. France.",
        desc: "",
        slideMedia: "https://player.vimeo.com/video/518505303",
        slideMediaFallback: "",
        thumb: `${base}/assets/space/sharing-space/space-marisa-perason_320_th.webp`,
        thumbFallback: `${base}/assets/space/sharing-space/space-marisa-perason_th.jpg`,
        alt: "Still capture from Marisa Pearson' video",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "slide",
        title: '<h3 class="subtitle">Other Space Pages</h3>',
        desc: '<p><a href="../">Return to Space</a><br><a href="../voice-of-space">The Voice of Space</a><br><a href="../letting-go">Letting Go</a><br><a href="../making-more-mental-space">Making More Mental Space</a></p>',
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
  return `${$$result.head += `<!-- HEAD_svelte-bs9sx1_START -->${$$result.title = `<title>Space: Sharing the Beauty of Space</title>`, ""}<!-- HEAD_svelte-bs9sx1_END -->`, ""}
<main class="content-page bleed no-pad" style="${"--grad-color: 255, 100%, 50%; --element-bg: linear-gradient(hsla(var(--grad-color), .3), hsla(255, 50%, 50%, .5)), url(" + escape(base, true) + "/assets/space/space-dakini-dark-rich-bg.webp) 0% 100%/180% auto no-repeat fixed; --element-mob-bg: url(" + escape(base, true) + "/assets/space/space-dakini-dark-rich-bg.webp) 25% 0/auto 180vh repeat scroll; --element-color: 211, 85%, 26%; background-blend-mode: hard-light, normal;"}">${validate_component(Slides, "Slides").$$render($$result, Object.assign({}, slideData), {}, {})}
  ${validate_component(Gallery, "Gallery").$$render($$result, Object.assign({}, slideData), {}, {})}
  <a href="#ambient" id="audioCtl" class="gallery-audio-ctl sound-ctl stopped"></a>
  <audio loop id="ambient"><source src="${escape(base, true) + "/assets/space/sharing-space/space_beethoven-moonlight-sonata-1-movement-op-27-nr-2-180627.mp3"}" type="audio/mpeg"></audio></main>`;
});
export {
  Page as default
};
