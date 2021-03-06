'use strict';

/** *****************************************************************************
* This is a guide for defaults.json configuration file. Please don't modify this
* file for changing the settings, instead, modify defaults.json.
* If you are using opspec editor as a dependency, opspec editor will make an
* XHR request to '/config/defaults.json' to get it's settings.
*******************************************************************************/

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "defaults" }]*/
var defaults = {
  /*
   * Analytics section is used for user tracking configurations. At the moment
   * only Google Analytics is supported.
  */
  analytics: {
    google: {
      /*
       * Put your Google Analytics ID here
      */
      id: 'YOUR_GOOGLE_ANALYTICS_ID'
    }
  },

  /*
   * Folder that example files are located
   * Note that this string will be used in between two other url segments
   * so you always need the trailing and leading slashes
  */
  examplesFolder: 'examples/',

  /*
   * Ace editor options. This object will overload existing editor options.
   * See all possible options here: http://ace.c9.io/#nav=api&api=ace
  */
  editorOptions: {},

  /*
   * List of example files to show to user to pick from. The URL to fetch each
   * example is a combination of `examplesFolder` and file name
  */
  exampleFiles: [
    "docker/build/op.yml",
    "docker/build-login-push/op.yml",
    "docker/login/op.yml",
    "docker/push/op.yml",
    "nodejs/debug/op.yml",
    "nodejs/debug-node/op.yml",
    "nodejs/install-deps/op.yml"
  ],

  /*
   * Keywords for auto-complete are generated from a JavaScript object.
   * See keyword-map.js for object format
  */
  autocompleteExtension: {},

  /*
   * Use a back-end for storing the document instead of browser local storage
  */
  useBackendForStorage: false,

  /*
   * Change how many milliseconds after the last keypress the editor should
   * respond to change.
  */
  keyPressDebounceTime: 200,

  /*
   * The timeout for throttling backend calls
  */
  backendThrottle: 200,

  /*
   * URL of the Back-end for storing swagger document. Editor will PUT and GET
   * to this URL to **Save** and **Read** the Swagger document
  */
  backendEndpoint: '/editor/spec',

  /*
   * When using a back-end, editor by default PUTs JSON document for Saving.
   * Enable this to use YAML instead
  */
  useYamlBackend: false,

  /*
   * Disables File menu which includes New, Open Example and Import commands
  */
  disableFileMenu: false,

  /*
   * When it's enabled:
   *  * Editor will append `brandingCssClass` class to body tag
   *  * Editor will include branding templates at
   *      app/templates/branding-left.html and
   *      app/templates/branding-left.html
   *       to it's header
  */
  headerBranding: false,

  /*
   * Enables Try Operation functionality
  */
  enableTryIt: true,

  /*
   * When `headerBranding` is enabled, this will be appended to body tag
  */
  brandingCssClass: '',

  /*
   * Disables the overlay introduction panel
  */
  disableNewUserIntro: false,

  /*
   * When Editor imports a file from a URL, it will prepend this URL to make
   * it possible to import contents that are not allowed to be loaded from a
   * different origin. If you're hosting your own editor, please replace this
  */
  importProxyUrl: 'https://cors-it.herokuapp.com/?url=',

  /*
   * Use this base path for resolving JSON Pointers ($ref).
   * This value should be a valid URL.
   *
   * Example: http://example.com/swaggers
   *
   * More info: https://github.com/swagger-api/swagger-editor/issues/977#issuecomment-232254578
  */
  pointerResolutionBasePath: null
};
