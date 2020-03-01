/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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

  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/logo.png',

  /* Colors for website */
  colors: {
    primaryColor: '#00529F',
    secondaryColor: '#2971b5',
  },

  highlight: {
    theme: 'dracula',
    version: '9.12.0',
    hljs: function(highlightJsInstance) {
      // do something here
    },
    defaultLang: 'javascript'
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
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  algolia: {
    apiKey: '',
    indexName: 'bluelinky',
    algoliaOptions: {}
  },
};

module.exports = siteConfig;
