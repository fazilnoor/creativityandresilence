import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { S as Slides } from "../../../../../chunks/Slides.js";
import { G as Gallery } from "../../../../../chunks/Gallery.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slideData = {
    slides: [
      {
        type: "slide",
        title: "<h2>Sharing the Passion of Fire</h2>",
        desc: '<p>In this space we invite you to share how you relate to the fire element. You can send your creative expressions of fire such as photos (below 5MB), short poems, artwork and short videos (up to 2 minutes). Please mention your location.<br><br></p><p>Send to:<br> <a href="mailto:creativeresilience@khyentsefoundation.org">creativeresilience@khyentsefoundation.org</a></p>',
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
        title: "The Guardian of the Fire painted by Tara di Gesu",
        desc: "A Fire Dakini painting by Tara di Gesu",
        slideMedia: `${base}/assets/fire/sharing-fire/fire_dakin_tara_di_gesu.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/fire/sharing-fire/fire_dakin_tara_di_gesu_360_th.webp`,
        thumbFallback: `${base}/assets/fire/sharing-fire/fire_dakin_tara_di_gesu_th.jpg`,
        alt: "Thumbnail of a Fire Dakini painting by Tara di Gesu",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Painting by Alicja Zmigrodzka. Poland.",
        desc: "A Fire Dakini painting by Alicja Zmigrodzka",
        slideMedia: `${base}/assets/fire/sharing-fire/fire_alicja_zmigrodzka_fire_dakini_2.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/fire/sharing-fire/fire_alicja_zmigrodzka_fire_dakini_2_360_th.webp`,
        thumbFallback: `${base}/assets/fire/sharing-fire/fire_alicja_zmigrodzka_fire_dakini_2_th.jpg`,
        alt: "Thumbnail of a Fire Dakini painting by Alicja Zmigrodzka",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Sandra Scales. Thailand.",
        desc: "A cremation ceremony in Thailand",
        slideMedia: `${base}/assets/fire/sharing-fire/fire_scales_cremation.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/fire/sharing-fire/fire_scales_cremation_360_th.webp`,
        thumbFallback: `${base}/assets/fire/sharing-fire/fire_scales_cremation_th.jpg`,
        alt: "Thumbnail of a cremation ceremony in Thailand",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Painting by Sandy Litchfield. Massachusetts.",
        desc: "Impressionist forest landscape rendered in yellow hues",
        slideMedia: `${base}/assets/fire/sharing-fire/fire_litchfield_sun_drenched.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/fire/sharing-fire/fire_litchfield_sun_drenched_360_th.webp`,
        thumbFallback: `${base}/assets/fire/sharing-fire/fire_litchfield_sun_drenched_th.jpg`,
        alt: "Thumbnail of Sandy Litchfield's painting.",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Painting by Andra Samelson. New York City.",
        desc: "Abstract painting of red splashes of color.",
        slideMedia: `${base}/assets/fire/sharing-fire/fire_andra_samuelson_1.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/fire/sharing-fire/fire_andra_samuelson_1_360_th.webp`,
        thumbFallback: `${base}/assets/fire/sharing-fire/fire_andra_samuelson_1_th.jpg`,
        alt: "Thumbnail of Andra Samelson's painting.",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Jason Papenfuss. Fireworks in Omaha, Nebraska.",
        desc: "Dozens of exploding fireworks filling a night sky",
        slideMedia: `${base}/assets/fire/sharing-fire/fire_jason_papenfuss_16.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/fire/sharing-fire/fire_jason_papenfuss_16_360_th.webp`,
        thumbFallback: `${base}/assets/fire/sharing-fire/fire_jason_papenfuss_16_th.jpg`,
        alt: "Thumbnail of night time fireworks.",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Paul Norden. Chicago, Illinois.",
        desc: "Red roses image incscribed with the poem by Rumi: 'If your beloved, has the live of fire, step in now and burn along.'",
        slideMedia: `${base}/assets/fire/sharing-fire/fire_paul_norden_19.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/fire/sharing-fire/fire_paul_norden_19_360_th.webp`,
        thumbFallback: `${base}/assets/fire/sharing-fire/fire_paul_norden_19_th.jpg`,
        alt: "Thumbnail of red roses.",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "image",
        title: "Photo by Alana Siegel. California",
        desc: "Glowing handprint incscribed with the poem by Yvonne Gold: 'I am warm, I am passionate, I am wild, I can transform, I can destroy, I can regenerate, I illumniate, You call me fire.'",
        slideMedia: `${base}/assets/fire/sharing-fire/fire_alana_siegel_fire3.jpg`,
        slideMediaFallback: "",
        thumb: `${base}/assets/fire/sharing-fire/fire_alana_siegel_fire3_360_th.webp`,
        thumbFallback: `${base}/assets/fire/sharing-fire/fire_alana_siegel_fire3_th.jpg`,
        alt: "Thumbnail of the glowing handprint.",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "video",
        title: "Video by Rohita Singh. Australia",
        desc: "",
        slideMedia: "https://player.vimeo.com/video/519338095?h=f23cd3965f",
        slideMediaFallback: "",
        thumb: `${base}/assets/fire/sharing-fire/fire-dance-video_360_th.webp`,
        thumbFallback: `${base}/assets/fire/sharing-fire/fire-dance-video_th.jpg`,
        alt: "Still capture from Rohita Singh's video ",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "video",
        title: "Video by Julien Ducret. France.",
        desc: "",
        slideMedia: "https://player.vimeo.com/video/517810096?h=f23cd3965f",
        slideMediaFallback: "",
        thumb: `${base}/assets/fire/sharing-fire/fire-sand-painting_360_th.webp`,
        thumbFallback: `${base}/assets/fire/sharing-fire/fire-sand-painting_th.jpg`,
        alt: "Still capture from Julien Ducret's video ",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "video",
        title: "Video by Jonathan Matas. India.",
        desc: "",
        slideMedia: "https://player.vimeo.com/video/510537867?h=f23cd3965f",
        slideMediaFallback: "",
        thumb: `${base}/assets/fire/sharing-fire/nourishing-fire-video_360_th.webp`,
        thumbFallback: `${base}/assets/fire/sharing-fire/nourishing-fire-video_th.jpg`,
        alt: "Still capture from Jonathan Matas' video ",
        bgSettings: "",
        copyColor: "",
        fontWeight: ""
      },
      {
        type: "slide",
        title: '<h3 class="subtitle">Other Fire Pages</h3>',
        desc: '<p><a href="../">Return to Fire</a><br><a href="../voice-of-fire">The Voice of Fire</a><br><a href="../dissolving-anger">Dissolving Anger</a><br><a href="../fire-meditation">Fire Meditation</a></p>',
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
  return `${$$result.head += `<!-- HEAD_svelte-150wjw6_START -->${$$result.title = `<title>Fire: Sharing the Passion of Fire</title>`, ""}<!-- HEAD_svelte-150wjw6_END -->`, ""}
<main class="content-page bleed no-pad" style="${"--grad-color: 25, 100%, 50%; --element-bg: linear-gradient(hsla(var(--grad-color), .5), hsla(60, 51%, 50%, .7)), url(" + escape(base, true) + "/assets/fire/sharing-fire-bg.webp) 0% 0%/100% auto no-repeat fixed; --element-mob-bg: linear-gradient(hsla(var(--grad-color), .5), hsla(60, 51%, 50%, .7)), url(" + escape(base, true) + "/assets/fire/sharing-fire-bg.webp) 0 0/auto 100vh repeat scroll; --element-color: 211, 85%, 26%; background-blend-mode: hard-light, normal;"}">${validate_component(Slides, "Slides").$$render($$result, Object.assign({}, slideData), {}, {})}
  ${validate_component(Gallery, "Gallery").$$render($$result, Object.assign({}, slideData), {}, {})}
  <a href="#ambient" id="audioCtl" class="gallery-audio-ctl sound-ctl stopped"></a>
  <audio loop id="ambient"><source src="${escape(base, true) + "/assets/fire/sharing-fire/fire_The_Biggest_Treasure.mp3"}" type="audio/mpeg"></audio></main>`;
});
export {
  Page as default
};
