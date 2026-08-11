interface Data {
  [category: string]: {
    [subcategory: string]: Array<{
      title: string;
      link: string;
      desc?: string;
    }>;
  };
}

const data: Data = {
  books: {
    tech: [
      {
        title: "Typescript in 50 lessons",
        link: "https://typescript-book.com/",
      },
      {
        title: "concorrencia101",
        link: "https://concorrencia101.leandronsp.com/",
      },
      {
        title: "Engenharia de Software Moderna",
        link: "https://engsoftmoderna.info/",
      },
      {
        title:
          "Redes de Computadores para quem está começando: entenda a jornada por trás de cada clique",
        link: "https://a.co/d/0fD9GkmJ",
      },
    ],
    design: [
      {
        title:
          "The Non-Designer's Design Book: Design and Typographic Principles for the Visual Novice",
        link: "https://a.co/d/09Q6zjHi",
      },
      {
        title: "The Design of Everyday Things",
        link: "https://a.co/d/0cWZ2eD3",
      },
      {
        title: "29 dicas de UI Design",
        link: "https://sheisacreative.com.br/freebie/e-glurp",
      },
    ],
  },
  guides: {
    tech: [
      {
        title: "Fundamentos do Git, um guia completo",
        link: "https://leandronsp.com/articles/pt-br-fundamentos-do-git-um-guia-completo-2djh",
      },
      {
        title: "Front End Interview Handbook",
        link: "https://www.frontendinterviewhandbook.com/",
      },
      {
        title: "Tech Interview Handbook",
        link: "https://www.techinterviewhandbook.org/",
      },
      {
        title: "Windows CMD commands",
        link: "https://ss64.com/nt/",
      },
      {
        title: "TypeScript hints",
        link: "https://typehints.org/",
      },
      {
        title: "Roadmaps",
        link: "https://roadmap.sh/",
      },
      {
        title: "WEB DEV",
        link: "https://web.dev/",
      },
      {
        title: "Maujor",
        link: "https://www.maujor.com/",
        desc: "Ensinamentos de CSS",
      },
    ],
    design: [
      {
        title: "Web design resources",
        link: "https://vakoshvili.com/resource",
      },
    ],
  },
  people: {
    tech: [
      {
        title: "Addy Osmani",
        link: "https://addyosmani.com/",
      },
      {
        title: "Daniel Castro",
        link: "https://danieldcs.com/",
      },
    ],
  },
  articles: {
    tech: [
      {
        title: "CSS Tricks",
        link: "https://css-tricks.com",
      },
      {
        title: "HTTP headers",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",
      },
      {
        title: "How to check for undefined in JavaScript",
        link: "https://ui.dev/check-for-undefined-javascript",
      },
      {
        title: "O processo de software",
        link: "https://www.macoratti.net/proc_sw1.htm",
      },
      {
        title: "Tabela de verbos irregulares em inglês",
        link: "https://www.wizard.com.br/idiomas/tabela-de-verbos-irregulares-em-ingles/",
      },
      {
        title: "Guia de unidades no CSS",
        link: "https://www.alura.com.br/artigos/guia-de-unidades-no-css?gclid=Cj0KCQjwvaeJBhCvARIsABgTDM6Sg80J1nN0s9rF4UD2-DLAI6Ffl88ES_ICPJRrEKj7SDJ4LBaodI4aAkfmEALw_wcB",
      },
      {
        title: "Adaptive Photo Layout with Flexbox",
        link: "https://css-tricks.com/adaptive-photo-layout-with-flexbox/",
      },
      {
        title: "Tabela de cores html",
        link: "https://celke.com.br/artigo/tabela-de-cores-html-nome-hexadecimal-rgb",
      },
      {
        title: "Regex: o guia essencial das expressões regulares",
        link: "https://blog.dp6.com.br/regex-o-guia-essencial-das-express%C3%B5es-regulares-2fc1df38a481",
      },
      {
        title: "Como instalar o xampp no linux",
        link: "https://www.edivaldobrito.com.br/como-instalar-o-xampp-no-linux/",
      },
      {
        title:
          "Support for password authentication was removed on August 13, 2021. Please use a personal access token instead",
        link: "https://bobbyhadz.com/blog/support-for-password-authentication-was-removed-on-august",
      },
      {
        title: "Percent-encoding",
        link: "https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding",
      },
      {
        title: "Web dev simplified blog",
        link: "https://blog.webdevsimplified.com/",
      },
    ],
  },
  podcasts: {
    tech: [
      {
        title: "Dev show",
        link: "https://devshow.com.br/",
      },
    ],
  },
  courses: {
    tech: [
      {
        title: "dio",
        link: "https://www.dio.me/en",
      },
      {
        title: "speakerdeck/jessilyneh",
        link: "https://speakerdeck.com/jessilyneh",
      },
    ],
    languages: [
      {
        title: "Cambly",
        link: "https://cambly.com/",
      },
    ],
    general: [
      {
        title: "Khanacademy",
        link: "https://www.khanacademy.org/",
      },
    ],
  },
  apis: {
    apis: [
      {
        title: "The CAT API",
        link: "https://thecatapi.com/",
      },
      {
        title: "Pokemon",
        link: "https://pokeapi.co/",
      },
      {
        title: "Github",
        link: "https://api.github.com/",
      },
      {
        title: "Brasil aberto",
        link: "https://brasilaberto.com/",
      },
    ],
  },
  tooling: {
    image: [
      {
        title: "tinify",
        link: "https://tinypng.com/",
        desc: "Smart AVIF, WebP, PNG and JPEG Compression for Faster Websites",
      },
      {
        title: "GRATISPNG",
        link: "https://www.gratispng.com/",
      },
      {
        title: "Shopify stock photos",
        link: "https://www.shopify.com/stock-photos",
      },
      {
        title: "removebg",
        link: "https://www.remove.bg/pt-br/upload",
      },
      {
        title: "removal.ai",
        link: "https://removal.ai/upload/",
      },
      {
        title: "Image color picker",
        link: "https://imagecolorpicker.com/",
      },
      {
        title: "Giphy",
        link: "https://giphy.com",
      },
      {
        title: "SVG Repo",
        link: "https://www.svgrepo.com/",
      },
      {
        title: "GIFER",
        link: "https://gifer.com/en",
      },
      {
        title: "SVG Silh",
        link: "https://svgsilh.com/",
      },
      {
        title: "Boxy SVG",
        link: "https://boxy-svg.com/",
      },
      {
        title: "I Love IMG",
        link: "https://www.iloveimg.com/",
      },
    ],
    colors: [
      {
        title: "Flat Ui Colors",
        link: "https://flatuicolors.com/",
      },
      {
        title: "WebFX Color Picker",
        link: "https://www.webfx.com/web-design/color-picker/",
      },
      {
        title: "Color Hunt",
        link: "https://colorhunt.co/",
      },
      {
        title: "Encycolorpedia",
        link: "https://encycolorpedia.pt/",
      },
      {
        title: "Color Wheel",
        link: "https://color.adobe.com/pt/create/color-wheel",
      },
      {
        title: "Trending Color Palettes",
        link: "https://coolors.co/palettes/trending",
      },
      {
        title: "Color Contrast Checker",
        link: "https://codepen.io/alvaromontoro/pen/YgpWZG",
      },
    ],
    icons: [
      {
        title: "Icons DB",
        link: "https://www.iconsdb.com/",
      },
      {
        title: "FlatIcon",
        link: "https://www.flaticon.com/",
      },
      {
        title: "Ionicons",
        link: "https://ionic.io/ionicons",
      },
    ],
    fonts: [
      {
        title: "Google fonts",
        link: "https://fonts.google.com/",
      },
    ],
    audiovisual: [
      {
        title: "Online video cutter",
        link: "https://online-video-cutter.com/pt/",
      },
      {
        title: "Clipchamp",
        link: "https://app.clipchamp.com/",
      },
    ],
    converters: [
      {
        title: "SVG to CSS",
        link: "https://www.svgbackgrounds.com/tools/svg-to-css/",
      },
      {
        title: "I Love PDF",
        link: "https://www.ilovepdf.com/pt",
      },
      {
        title: "Unminify",
        link: "https://unminify.com/",
      },
      {
        title: "readme",
        link: "https://readme.so/editor",
      },
      {
        title: "Adobe express GIF conversion",
        link: "https://new.express.adobe.com/tools/convert-to-gif",
      },
      {
        title: "SVG to JSX",
        link: "https://svg2jsx.com/",
      },
      {
        title: "JS to TS",
        link: "https://www.codeconvert.ai/javascript-to-typescript-converter",
      },
      {
        title: "Pug.js to HTML",
        link: "https://pughtml.com/",
      },
    ],
    performance: [
      {
        title: "Page speed",
        link: "https://pagespeed.web.dev/",
      },
      {
        title: "BrowserStack",
        link: "https://www.browserstack.com/",
      },
      {
        title: "Can I use",
        link: "https://caniuse.com/",
      },
      {
        title: "ES6 Compatibility",
        link: "https://compat-table.github.io/compat-table/es6/",
      },
    ],
  },
  ["cool stuff"]: {
    ["cool stuff"]: [
      {
        title: "DRIVEN AND LISTEN",
        link: "https://driveandlisten.herokuapp.com/",
      },
      {
        title: "LETMEGOOGLETHAT",
        link: "https://letmegooglethat.com/",
      },
      {
        title: "EMOJIPEDIA",
        link: "https://emojipedia.org/",
      },
      {
        title: "BADGES",
        link: "https://badges.pages.dev/",
      },
      {
        title: "D3.JS GRAPH GALLERY",
        link: "https://d3-graph-gallery.com/",
      },
      {
        title: "ANIMISTA",
        link: "https://animista.net/",
      },
      {
        title: "LINGSCARS",
        link: "https://www.lingscars.com/",
      },
      {
        title: "WolframAlpha",
        link: "https://www.wolframalpha.com/",
      },
      {
        title: "Flexbox Defense",
        link: "http://www.flexboxdefense.com/",
      },
      {
        title: "Flexbox Froggy",
        link: "https://flexboxfroggy.com/",
      },
      {
        title: "Grid Garden",
        link: "https://cssgridgarden.com/",
      },
      {
        title: "Uppbeat",
        link: "https://uppbeat.io/browse/music/sunny-beats",
      },
      {
        title: "Fluent in 3 months",
        link: "https://www.fluentin3months.com/",
      },
      {
        title: "Brain facts",
        link: "https://www.brainfacts.org/",
      },
      {
        title: "Starship",
        link: "https://starship.rs/",
      },
      {
        title: "regex101",
        link: "https://regex101.com/",
      },
      {
        title: "Excalidraw",
        link: "https://excalidraw.com/",
      },
    ],
  },
  exercises: {
    challenges: [
      {
        title: "DevChallenge",
        link: "https://www.devchallenge.com.br/",
      },
      {
        title: "edabit JS Challenges",
        link: "https://edabit.com/challenges/javascript",
      },
    ],
    practice: [
      {
        title: "exercism",
        link: "https://exercism.org/",
      },
      {
        title: "Hackerrank",
        link: "https://www.hackerrank.com/dashboard",
      },
    ],
  },
};

export default data;
