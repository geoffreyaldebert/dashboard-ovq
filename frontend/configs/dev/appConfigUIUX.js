export const configAppUIUX = {
  help: 'this file contains the setup for the UI-UX',

  // GLOBAL
  appTitle: {
    fr: 'OVQ'
  },
  appMetas: [],
  appVersion: 'v.2.1.0',
  appLogo: 'https://',

  // INTERATIONALIZATION
  lang: {
    defaultLocale: 'fr',
    locales: [{ code: 'fr', name: 'Français', file: 'fr-FR.js' }]
  },

  // UX
  UX_config: {
    hasDrawer: false,

    mobileBreakpoints: ['xs', 'sm'],
    overrideIframeMaxHeight: undefined,

    navbar: {
      height: 64, // in pixels
      mobileHeight: 45,

      fixed: true,
      fixedBtn: false,

      clipped: true,
      clippedBtn: false,

      drawer: false,
      drawerBtn: false,

      miniVariant: true,
      miniVariantBtn: false,

      right: false,
      rightBtn: false,

      rightDrawer: false,
      rightDrawerBtn: false,

      // HORIZ BUTTONS
      buttons: [
        {
          to: '/about',
          icon: 'mdi-apps',
          i18nTitle: 'menu.about',
          switch: false
        }
      ],

      // ITEMS IN RIGHT DRAWER
      items: [
        {
          to: '/',
          // icon: "mdi-apps",
          // icon: "fas fa-home",
          icon: 'fas fa-th',
          i18nTitle: 'menu.welcome',
          isVisible: true
        },
        {
          to: '/map',
          icon: 'fas fa-map',
          i18nTitle: 'menu.map',
          isVisible: true
        },
        {
          to: '/charts',
          icon: 'fas fa-chart-bar',
          i18nTitle: 'menu.charts',
          isVisible: true
        },
        // { to: "/table",
        //   icon: "fas fa-table",
        //   i18nTitle: "menu.table",
        //   isVisible : false,
        // },
        {
          to: '/rawData',
          icon: 'fas fa-database',
          i18nTitle: 'menu.data',
          isVisible: false
        }
      ]
    },

    tabsRoutes: {

      isActivated: true,
      grow: true,
      dark: true,
      backgroundColor: 'info',
      hasIcons: false,
      hasSlider: true,
      height: 35,
      slidersClass: 'primary',
      format: 'tabs', // todo : as buttons too
      tabsClass: 'text-none',

      // ITEMS ROUTES TABS
      tabs: [
        {
          to: '/?routeId=asile',
          href: '/asile',
          // href: '/?routeId=pge',
          isVisible: true,
          icon: undefined,
          title: { fr: "Asile" },
          titleMobile: { fr: "Asile" },
          tooltip: { fr: "asile" },
          isNuxtLink: false,
          addUrlParams: true
        },
        {
          to: '/?routeId=plan-velo',
          href: '/plan-velo',
          // href: '/?routeId=fds',
          isVisible: true,
          icon: undefined,
          title: { fr: 'Plan Vélo' },
          titleMobile: { fr: 'Plan Vélo' },
          tooltip: { fr: 'plan vélo' },
          isNuxtLink: false,
          addUrlParams: true
        },
        {
          to: '/?routeId=plan-logement',
          href: '/plan-logement',
          // href: '/?routeId=pge',
          isVisible: true,
          icon: undefined,
          title: { fr: "Plan Logement" },
          titleMobile: { fr: "Plan Logement" },
          tooltip: { fr: "plan logement" },
          isNuxtLink: false,
          addUrlParams: true
        },
        {
          to: '/?routeId=thd',
          href: '/thd',
          // href: '/?routeId=pge',
          isVisible: true,
          icon: undefined,
          title: { fr: "Très Haut Débit" },
          titleMobile: { fr: "Très Haut Débit" },
          tooltip: { fr: "très haut débit" },
          isNuxtLink: false,
          addUrlParams: true
        },
        {
          to: '/?routeId=apprentissage',
          href: '/apprentissage',
          // href: '/?routeId=pge',
          isVisible: true,
          icon: undefined,
          title: { fr: "Apprentissage" },
          titleMobile: { fr: "Apprentissage" },
          tooltip: { fr: "apprentissage" },
          isNuxtLink: false,
          addUrlParams: true
        },
        {
          to: '/?routeId=ecole-inclusive',
          href: '/ecole-inclusive',
          // href: '/?routeId=pge',
          isVisible: true,
          icon: undefined,
          title: { fr: "Ecole inclusive" },
          titleMobile: { fr: "Ecole inclusive" },
          tooltip: { fr: "école inclusive" },
          isNuxtLink: false,
          addUrlParams: true
        }
      ]
    },

    filters: {
      isVisible: false
    }
  },

  // UI
  UI_config: {
    isDarkTheme: false,

    navbar: {
      elevation: 0,
      navbarClass: '',
      color: 'primary',
      dark: true,
      titleClass: 'white--text font-weight-black',
      sizeDesktop: 'headline',
      sizeMobile: 'subtitle-1'
    },

    filters: {
      elevation: 0
    },

    themes: {
      light: {
        primary: '#000091',
        accent: '#572a99',
        secondary: '#b1133b',
        info: '#53657D',
        warning: '#ff9947',
        error: '#D1335B;',
        success: '#03BD5B'
      },

      dark: {
        primary: '#000091',
        accent: '#572a99',
        secondary: '#b1133b',
        info: '#53657D',
        warning: '#ff9947',
        error: '#D1335B;',
        success: '#03BD5B'
      }
    },

    map: {
      loader: {
        color: '#000091',
        width: '6px',
        height: '6px'
      }
    },

    typos: {},

    customCSS: [
      {
        class: '.btn-gouv',
        config: `
          background-color: #fff !important;
          border-bottom: 1px solid #000091 !important;
          border-right: 1px solid #000091 !important;
          margin: .3em !important;
        `
      },
      {
        class: '.btn-gouv.selected',
        config: `
          color: #FFF;
          background-color: #000091;
        `
      }
    ]
  }
}
