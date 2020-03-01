/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'bluelinky', // Title for your website.
  tagline: 'The Hyundai BlueLink API Library',
  url: 'https://hacksore.github.io',
  baseUrl: '/bluelinky-docs/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'bluelinky-docs',
  organizationName: 'hacksore',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'getting-started', label: 'Docs' },
    { doc: 'api-reference', label: 'API' },
    { page: 'help', label: 'Help' },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/logo.png',

  /* Colors for website */
  colors: {
    primaryColor: '#00529F',
    secondaryColor: '#510e00',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.

  highlight: {
    // The name of the theme used by Highlight.js when highlighting code.
    // You can find the list of supported themes here:
    // https://github.com/isagalaev/highlight.js/tree/master/src/styles
    theme: 'dracula',

    // The particular version of Highlight.js to be used.
    version: '9.12.0',

    // Escape valve by passing an instance of Highlight.js to the function specified here, allowing additional languages to be registered for syntax highlighting.
    hljs: function(highlightJsInstance) {
      // do something here
    },

    // Default language.
    // It will be used if one is not specified at the top of the code block. You can find the list of supported languages here:
    // https://github.com/isagalaev/highlight.js/tree/master/src/languages

    defaultLang: 'javascript',

    // custom URL of CSS theme file that you want to use with Highlight.js. If this is provided, the `theme` and `version` fields will be ignored.
    // themeUrl: 'http://foo.bar/custom.css'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  algolia: {
    apiKey: '',
    indexName: 'bluelinky',
    algoliaOptions: {}
  },
};

module.exports = siteConfig;
