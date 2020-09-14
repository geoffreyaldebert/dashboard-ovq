export const configAppNavbarFooters = {
  help: 'this file contains the setup for the numbers components',

  // NAVBAR FOOTERS

  settingsIds: [
    {
      id: 'navbar-footer-01',
      help: '',

      activated: true,

      title: { fr: '' },
      titleI18n: 'navbars.footer.title',
      navbarFooterClass: '',

      height: 70,
      grow: true,
      shift: true,
      // showOnSizes: ['xs', 'sm'],

      defaultBtnNav: 'map',
      redirectAtBreakShow: { path: '/map', btnNav: 'map' },
      redirectAtBreakNoShow: { path: '/', btnNav: 'home' },

      buttons: [
        {
          title: { fr: 'accueil' },
          value: 'home',
          showTitle: true,
          icon: 'fas fa-th',
          action: 'toggleDivs', // goToUrl | scrollTo | toggleDivs
          divsToToggle: [
            {
              routeId: 'plan-velo',
              toggle: 'on',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-plan-velo-title',
                'text-plan-velo-infos'
              ]
            },
            {
              routeId: 'plan-velo',
              toggle: 'off',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'apexchart-plan-velo',
                'map-france-plan-velo-metro'
              ]
            },
            {
              routeId: 'asile',
              toggle: 'on',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-asile-title',
                'text-asile-infos'
              ]
            },
            {
              routeId: 'asile',
              toggle: 'off',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'apexchart-asile',
                'map-france-asile-metro'
              ]
            },
            {
              routeId: 'plan-logement',
              toggle: 'on',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-plan-logement-title',
                'text-plan-logement-infos'
              ]
            },
            {
              routeId: 'plan-logement',
              toggle: 'off',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'apexchart-plan-logement',
                'map-france-plan-logement-metro'
              ]
            },
            {
              routeId: 'thd',
              toggle: 'on',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-thd-title',
                'text-thd-infos'
              ]
            },
            {
              routeId: 'thd',
              toggle: 'off',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'apexchart-thd',
                'map-france-thd-metro'
              ]
            },
            {
              routeId: 'apprentissage',
              toggle: 'on',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-apprentissage-title',
                'text-apprentissage-infos'
              ]
            },
            {
              routeId: 'apprentissage',
              toggle: 'off',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'apexchart-apprentissage',
                'map-france-apprentissage-metro'
              ]
            },
            {
              routeId: 'ecole-inclusive',
              toggle: 'on',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-ecole-inclusive-title',
                'text-ecole-inclusive-infos'
              ]
            },
            {
              routeId: 'asile',
              toggle: 'off',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'apexchart-ecole-inclusive',
                'map-france-ecole-inclusive-metro'
              ]
            }
          ],
          // toUrl: "/",
          // to : '#text-text-01', // for scrollTo
          offset: 10
        },
        {
          title: { fr: 'carte' },
          value: 'map',
          showTitle: true,
          icon: 'fas fa-map',
          action: 'toggleDivs',
          divsToToggle: [
            {
              routeId: 'plan-velo',
              toggle: 'on',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-plan-velo-title',
                'map-france-plan-velo-metro'
              ]
            },
            {
              routeId: 'plan-velo',
              toggle: 'off',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-plan-velo-infos',
                'apexchart-plan-velo'
              ]
            },
            {
              routeId: 'asile',
              toggle: 'on',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-asile-title',
                'map-france-asile-metro'
              ]
            },
            {
              routeId: 'asile',
              toggle: 'off',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-asile-infos',
                'apexchart-asile'
              ]
            },
            {
              routeId: 'plan-logement',
              toggle: 'on',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-plan-logement-title',
                'map-france-plan-logement-metro'
              ]
            },
            {
              routeId: 'plan-logement',
              toggle: 'off',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-plan-logement-infos',
                'apexchart-plan-logement'
              ]
            },
            {
              routeId: 'thd',
              toggle: 'on',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-thd-title',
                'map-france-thd-metro'
              ]
            },
            {
              routeId: 'thd',
              toggle: 'off',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-thd-infos',
                'apexchart-thd'
              ]
            },
            {
              routeId: 'apprentissage',
              toggle: 'on',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-apprentissage-title',
                'map-france-apprentissage-metro'
              ]
            },
            {
              routeId: 'apprentissage',
              toggle: 'off',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-apprentissage-infos',
                'apexchart-apprentissage'
              ]
            },
            {
              routeId: 'ecole-inclusive',
              toggle: 'on',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-ecole-inclusive-title',
                'map-france-ecole-inclusive-metro'
              ]
            },
            {
              routeId: 'asile',
              toggle: 'off',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-asile-infos',
                'apexchart-asile'
              ]
            }
          ],
          // toUrl: "/map",
          // to : '#map-map-france-metro',
          offset: 10
        },
        {
          title: { fr: 'graphiques' },
          value: 'charts',
          showTitle: true,
          icon: 'fas fa-chart-bar',
          action: 'toggleDivs',
          divsToToggle: [
            {
              routeId: 'plan-velo',
              toggle: 'on',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-plan-velo-title',
                'apexchart-plan-velo'
              ]
            },
            {
              routeId: 'plan-velo',
              toggle: 'off',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-plan-velo-infos',
                'map-france-plan-velo-metro'
              ]
            },
            {
              routeId: 'asile',
              toggle: 'on',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-asile-title',
                'apexchart-asile'
              ]
            },
            {
              routeId: 'asile',
              toggle: 'off',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-asile-infos',
                'map-france-asile-metro'
              ]
            },
            {
              routeId: 'plan-logement',
              toggle: 'on',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-plan-logement-title',
                'apexchart-plan-logement'
              ]
            },
            {
              routeId: 'plan-logement',
              toggle: 'off',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-plan-logement-infos',
                'map-france-plan-logement-metro'
              ]
            },
            {
              routeId: 'thd',
              toggle: 'on',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-thd-title',
                'apexchart-thd'
              ]
            },
            {
              routeId: 'thd',
              toggle: 'off',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-thd-infos',
                'map-france-thd-metro'
              ]
            },
            {
              routeId: 'apprentissage',
              toggle: 'on',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-apprentissage-title',
                'apexchart-apprentissage'
              ]
            },
            {
              routeId: 'apprentissage',
              toggle: 'off',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-apprentissage-infos',
                'map-france-apprentissage-metro'
              ]
            },
            {
              routeId: 'ecole-inclusive',
              toggle: 'on',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-ecole-inclusive-title',
                'apexchart-ecole-inclusive'
              ]
            },
            {
              routeId: 'ecole-inclusive',
              toggle: 'off',
              toggleVisibility: ['isVisibleMobile'],
              divIds: [
                'text-ecole-inclusive-infos',
                'map-france-ecole-inclusive-metro'
              ]
            }
          ],
          // toUrl: "/charts",
          // to : '#apexcharts-apexchart-01',
          offset: 10
        }
      ]
    }
  ]
}
