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
        desc: "Everything you need to know about TypeScript in 50 short lessons",
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
      {
        title: "Guia Foca",
        link: "https://www.guiafoca.org/",
        desc: "O GuiaFoca é um guia que traz desde explicações básicas sobre computadores e o sistema GNU/Linux até a administração e segurança do sistema.",
      },
      {
        title: "Inclusive components",
        link: "https://inclusive-components.design/",
        desc: "A blog trying to be a pattern library. All about designing inclusive web interfaces, piece by piece.",
      },
      {
        title: "OWASP",
        link: "https://owasp.org/",
        desc: "Explore the world of cyber security",
      },
      {
        title: "Understanding Interaction to Next Paint (INP)",
        link: "https://codelabs.developers.google.com/understanding-inp",
      },
      {
        title: "Dropbox Engineering Career Framework",
        link: "https://dropbox.github.io/dbx-career-framework/overview.html",
      },
      {
        title: "JavaScript reference",
        link: "https://devdocs.io/javascript/",
      },
    ],
    acessibility: [
      {
        title: "Cartilhas de diversidade e inclusão",
        link: "https://egg.seplag.niteroi.rj.gov.br/diversidade-e-inclusao/",
        desc: "Possuem ações que podem ser adotadas para fazer a diferença, conceitos que precisam ser repensados e outros locais e conteúdos para se aprofundar mais em determinadas questões.",
      },
      {
        title: "Guia de Boas Práticas para Acessibilidade Digital",
        link: "https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf",
        desc: "Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital",
      },
      {
        title: "eMAG - Modelo de Acessibilidade em Governo Eletrônico",
        link: "https://emag.governoeletronico.gov.br/",
        desc: "O Modelo de Acessibilidade em Governo Eletrônico (eMAG) tem o compromisso de ser o norteador no desenvolvimento e a adaptação de conteúdos digitais do governo federal, garantindo o acesso a todos.",
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
      {
        title: "Reinaldo Ferraz",
        link: "https://reinaldoferraz.com.br/",
        desc: "Site do Reinaldo Ferraz que traz artigos, cursos, livros, etc",
      },
      {
        title: "Academind",
        link: "https://academind.com/articles",
        desc: "Site da academind que traz cursos, artigos, etc",
      },
      {
        title: "Irrational Exuberance",
        link: "https://lethain.com/",
      },
      {
        title: "Josh Comeau",
        link: "https://www.joshwcomeau.com/",
      },
      {
        title: "Nitin Ranganath",
        link: "https://vscode-portfolio.vercel.app/",
      },
      {
        title: "Felipe Marciano",
        link: "https://www.fx.dev.br/",
      },
      {
        title: "Adrian Roselli",
        link: "https://adrianroselli.com/",
      },
        {
        title: "Chip Huyen",
        link: "https://huyenchip.com/",
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
      {
        title: "Uma Introdução Completa aos Componentes da Web",
        link: "https://kinsta.com/pt/blog/componentes-web/",
      },
      {
        title: "Tudo que você precisa saber pra usar Docker",
        link: "https://blog.cadumagalhaes.dev/tudo-que-voce-precisa-saber-pra-usar-docker",
      },
      {
        title: "Generative AI exists because of the transformer",
        link: "https://ig.ft.com/generative-ai/",
      },
      {
        title: "Send emails in Node.js using Nodemailer, Gmail & oAuth2",
        link: "https://rupali.hashnode.dev/send-emails-in-nodejs-using-nodemailer-gmail-oauth2#heading-configure-oauth-consent-screen",
      },
      {
        title:
          "Blogged Answers: A (Mostly) Complete Guide to React Rendering Behavior",
        link: "https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/",
      },
      {
        title: "Airbnb Tech Blog",
        link: "https://airbnb.tech/blog/",
        desc: "Learn about the people, ideas, and technology at the heart of Airbnb",
      },
      {
        title:
          "Creating React Components that can be Controlled and Uncontrolled",
        link: "https://maxschmitt.me/posts/react-components-controlled-uncontrolled",
      },
      {
        title: "Yalc, the `npm link` alternative that does work",
        link: "https://www.divotion.com/blog/yalc-npm-link-alternative-that-does-work",
      },
      {
        title: "MIT Technology Review",
        link: "https://mittechreview.com.br/",
      },
    ],
    learning: [
      {
        title: "How do I learn X",
        link: "https://blog.ncase.me/how-do-i-learn-x/",
      },
    ],
    design: [
      {
        title: "Nielsen Norman Group",
        link: "https://www.nngroup.com/articles/",
        desc: "UX research & guidelines",
      },
      {
        title: "Prototypr",
        link: "https://prototypr.io/",
        desc: "UX research & guidelines",
      },
    ],
    acessibility: [
      {
        title:
          "PRÁTICAS DE ACESSIBILIDADE PARA PCD (PESSOAS COM DEFICIÊNCIA) EM SOFTWARE E SISTEMAS WEB",
        link: "https://revista.fatectq.edu.br/interfacetecnologica/en/article/view/1740/938",
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
      {
        title: "API para desenvolvedores",
        link: "https://api.invertexto.com/",
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
      {
        title: "Photoroom",
        link: "https://www.photoroom.com/tools/background-remover",
      },
    ],
    illustrations: [
      {
        title: "unDraw",
        link: "https://undraw.co/illustrations/",
        desc: "Open-source illustrations for any idea you can imagine and create.",
      },
      {
        title: "storyset",
        link: "https://storyset.com/",
        desc: "Awesome free customizable illustrations for your next project",
      },
      {
        title: "humaaans",
        link: "https://www.humaaans.com/",
        desc: "Mix-&-match illustrations of people with a design library",
      },
    ],
    icons: [
      {
        title: "iconmonstr",
        link: "https://iconmonstr.com/",
        desc: "Discover 4784+ free icons in 316 collections",
      },
      {
        title: "streamline",
        link: "https://home.streamlinehq.com/",
        desc: "Your Ultimate Icon Library",
      },
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
    ["design inspirations"]: [
      {
        title: "lapa",
        link: "https://www.lapa.ninja/",
        desc: "The Best Landing Page Design Inspiration, Learn Design and More",
      },
      {
        title: "typespiration",
        link: "https://typespiration.com/",
        desc: "Free Font Combinations and Color Palettes to Inspire Your Designs",
      },
      {
        title: "Lemonade",
        link: "https://www.lemonade.com/giveback-2019",
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
      {
        title: "Huemint",
        link: "https://huemint.com/",
        desc: "Color palette generator",
      },
      {
        title: "TailwindColors",
        link: "https://tailwindcolor.com/",
      },
      {
        title: "color generator",
        link: "https://kigen.design/color",
      },
    ],
    fonts: [
      {
        title: "Google fonts",
        link: "https://fonts.google.com/",
      },
      {
        title: "Online WebFonts",
        link: "https://www.onlinewebfonts.com/fonts",
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
      {
        title: "HTML to PDF",
        link: "https://wkhtmltopdf.org/index.html",
      },
      {
        title: "Webp converter",
        link: "https://cloudconvert.com/webp-converter",
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
    generators: [
      {
        title: "Gerador NV",
        link: "https://geradornv.com.br/",
        desc: "Auxiliar desenvolvedores, analistas de sistemas, DBAs, testadores de software e estudantes na geração de números de documentos válidos, frequentemente necessários para testar seus softwares em desenvolvimento.",
      },
    ],
    tech: [
      {
        title: "htmx",
        link: "https://htmx.org/docs/",
        desc: "htmx is a library that allows you to access modern browser features directly from HTML, rather than using javascript.",
      },
      {
        title: "runjs",
        link: "https://runjs.app/play",
        desc: "Online JavaScript Playground",
      },
      {
        title: "Metabase",
        link: "https://www.metabase.com/",
        desc: "Open source AI analytics you can verify",
      },
      {
        title: "Effect",
        link: "https://www.effect.website/",
      },
      {
        title: "threejs",
        link: "https://threejs.org/",
      },
      {
        title: "Free Online and Web-Based Tools",
        link: "https://www.toptal.com/utilities-tools",
      },
      {
        title: "JavaScript Key Code",
        link: "https://www.toptal.com/developers/keycode",
      },
      {
        title: "Bundlephobia",
        link: "https://bundlephobia.com/",
        desc: "find the cost of adding a npm package to your bundle",
      },
      {
        title: "drawDB",
        link: "https://www.drawdb.app/",
        desc: "The visual database schema tool for clear, fast, collaborative design.",
      },
      {
        title: "Markdown Live Preview",
        link: "https://markdownlivepreview.com/",
      },
    ],
    content: [
      {
        title: "Free & Premium stock content made for creators",
        link: "https://www.magnific.com/stock",
      },
      {
        title: "Milanote",
        link: "https://milanote.com/",
      },
      {
        title: "ICONS",
        link: "https://icons8.com/",
      },
    ],
    resume: [
      {
        title: "ResumeMaker.Online",
        link: "https://www.resumemaker.online/free-tools/resume-checker-free",
        desc: "AI Resume Checker: Get a Free Resume Review & Score",
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
      {
        title: "Rome2Rio",
        link: "https://www.rome2rio.com/",
      },
      {
        title: "VS Code Themes",
        link: "https://vscodethemes.com/",
      },
      {
        title: "Raycast",
        link: "https://www.raycast.com/",
      },
      {
        title: "monkeytype",
        link: "https://monkeytype.com/",
      },
      {
        title: "Web Design Museum",
        link: "https://www.webdesignmuseum.org/gallery",
        desc: "Gallery of Web Design History",
      },
      {
        title: "Internet Archive",
        link: "https://archive.org/",
        desc: "Internet Archive is a non-profit library of millions of free texts, movies, software, music, websites, and more.",
      },
      {
        title: "AOTY",
        link: "https://www.albumoftheyear.org/",
      },
      {
        title: "Laboratório Virtual de Física Simulações Interativas",
        link: "https://www.laboratoriovirtual.fisica.ufc.br/",
      },
      {
        title: "Studio ghibli filmografia",
        link: "https://studioghibli.com.br/filmografia/",
      },
      {
        title: "Readme Typing SVG",
        link: "https://readme-typing-svg.herokuapp.com/demo/",
      },
      {
        title: "Skill Icons",
        link: "https://skillicons.dev/",
      },
      {
        title: "Brilliant",
        link: "https://brilliant.org/",
      },
      {
        title: "Lumon industries",
        link: "https://lumon-industries.com/",
      },
      {
        title: "Word tips",
        link: "https://word.tips/",
      },
      {
        title: "Can I use",
        link: "https://caniuse.com/",
      },
      {
        title: "Suncalc",
        link: "https://www.suncalc.org",
      },
      {
        title: "Suncalc",
        link: "https://suncalc.net",
      },
      {
        title: "Igor Kieryluk",
        link: "https://www.artstation.com/igorkieryluk",
      },
    ],
    games: [
      {
        title: "what beats rock?",
        link: "https://www.whatbeatsrock.com/",
      },
      {
        title: "Learn VIM",
        link: "https://vim-adventures.com/",
      },
      {
        title: "Horizon drive",
        link: "https://www.shopify.com/ca/editions/summer2025/drive",
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
      {
        title: "Leetcode",
        link: "https://leetcode.com/explore/",
      },
    ],
  },
  useful: {
    finance: [
      {
        title: "Códigos bancários Febraban",
        link: "https://abrircontacorrente.com.br/codigos-bancarios-febraban/",
        desc: "Cada banco, instituição financeira e/ou fintech possui um código que o identifica junto a Federação Brasileira de Bancos (FEBRABAN), órgão que regulamenta e regulariza as instituições financeiras em funcionamento no Brasil. Saber o número de compensação bancária é extremamente importante quando realizamos transferências bancárias como Ted, Doc.",
      },
    ],
  },
};

export default data;
