// - - - - - - - - - - - - - - - - - - - - - //
// COMMON PAINT SETTINGS
// - - - - - - - - - - - - - - - - - - - - - //

// CONSTANTS

// switch between facts on region / departement level
const ZOOM_THRESHOLD = 5.3
const ZOOM_THRESHOLD_BIS = ZOOM_THRESHOLD - 0.1
// const ZOOM_THRESHOLD_TER = ZOOM_THRESHOLD + 0.1

// colors
// const FR_GOUV_BLUE = '#000091'
// const PRIMARYFILLCOLOR = '#7373FF'
const SECONDARYFILLCOLOR = '#526781'
const HIGHLIGHTCOLOR = '#572a99'

const OUTLINECOLOR = '#627BC1'
const OUTLINECOLOR2 = '#6c87ab'

const FILLCOLOR_PLANVELO = '#7373FF'
const FILLCOLOR_ASILE = '#00A17F'
const FILLCOLOR_PLANLOGEMENT = '#D66200'
const FILLCOLOR_THD = '#1E88E5'
const FILLCOLOR_APPRENTISSAGE = '#C95DC9'
const FILLCOLOR_ECOLEINCLUSIVE = '#7373FF'

// layer fonts : ["Open Sans Regular","Arial Unicode MS Regular"]

const fillPaintRegions = {
  'fill-color': [
    'case',
    ['boolean', ['feature-state', 'selected'], false],
    HIGHLIGHTCOLOR,
    SECONDARYFILLCOLOR
  ],
  'fill-outline-color': OUTLINECOLOR,
  'fill-opacity': [
    'case',
    [
      'boolean',
      ['feature-state', 'selected'],
      ['feature-state', 'hover'],
      false
    ],
    0.15,
    0
  ]
}
const fillPaintDepartements = {
  'fill-color': [
    'case',
    ['boolean', ['feature-state', 'selected'], false],
    HIGHLIGHTCOLOR,
    SECONDARYFILLCOLOR
  ],
  'fill-outline-color': OUTLINECOLOR,
  'fill-opacity': [
    'case',
    [
      'boolean',
      ['feature-state', 'selected'],
      ['feature-state', 'hover'],
      false
    ],
    0.35,
    0
  ]
}

const zoomRectifier = -0.29999999999999935051953056
const maxCircleRadius = 60
const minCircleRadius = 10
// const minCircleRadiusBis = 4

function getRadius (val, maxVal) {
  const deltaRad = maxCircleRadius - minCircleRadius
  return (val * deltaRad / maxVal)
}

function getRadiusFull (val, maxVal) {
  return minCircleRadius + getRadius(val, maxVal)
}

function getRadiusFullSqrt (val, valMax) {
  return Math.sqrt(getRadiusFull(val, valMax))
}

function donutRadiusFormula (valName, maxVal) {
  const fullRadius = [
    'sqrt',
    ['+',
      ['*',
        ['/',
          ['number', ['get', valName]],
          maxVal
        ],
        ['-',
          maxCircleRadius,
          minCircleRadius
        ]
      ],
      minCircleRadius
    ]
  ]
  return fullRadius
}

const maxRegPlanVelo = 1000
const maxDepPlanVelo = 300
const maxRadRegPlanVelo = getRadiusFullSqrt(maxRegPlanVelo, maxRegPlanVelo)
const maxRadDepPlanVelo = getRadiusFullSqrt(maxDepPlanVelo, maxDepPlanVelo)
// const maxRadRegFDS = Math.sqrt(maxRegFDS)
// const maxRadDepFDS = Math.sqrt(maxDepFDS)
const circlePaintPlanVelo = {
  'circle-opacity': 0.6,
  'circle-color': FILLCOLOR_PLANVELO,
  'circle-radius': [
    'step',
    ['zoom'],
    [
      'interpolate',
      ['linear'],
      // ['sqrt', ['number', ['get', 'montantMillions']]],
      donutRadiusFormula('montantMillions', maxRegPlanVelo),
      getRadiusFullSqrt(0, maxRegPlanVelo), minCircleRadius,
      maxRadRegPlanVelo, maxCircleRadius
    ],
    ZOOM_THRESHOLD + zoomRectifier, [
      'interpolate',
      ['linear'],
      // ['sqrt', ['number', ['get', 'montantMillions']]],
      donutRadiusFormula('montantMillions', maxDepPlanVelo),
      getRadiusFullSqrt(0, maxDepPlanVelo), minCircleRadius,
      maxRadDepPlanVelo, maxCircleRadius
    ]
  ]
}

const maxRegAsile = 40000
const maxDepAsile = 11000
const maxRadRegAsile = getRadiusFullSqrt(maxRegAsile, maxRegAsile)
const maxRadDepAsile = getRadiusFullSqrt(maxDepAsile, maxDepAsile)
// const maxRadRegPGE = Math.sqrt(maxRegPGE)
// const maxRadDepPGE = Math.sqrt(maxDepPGE)
const circlePaintAsile = {
  'circle-opacity': 0.6,
  'circle-color': FILLCOLOR_ASILE,
  'circle-radius': [
    'step',
    ['zoom'],
    [
      'interpolate',
      ['linear'],
      // ['sqrt', ['number', ['get', 'montantMillions']]],
      donutRadiusFormula('montantMillions', maxRegAsile),
      getRadiusFullSqrt(0, maxRegAsile), minCircleRadius,
      maxRadRegAsile, maxCircleRadius
    ],
    ZOOM_THRESHOLD + zoomRectifier, [
      'interpolate',
      ['linear'],
      donutRadiusFormula('montantMillions', maxDepAsile),
      getRadiusFullSqrt(0, maxDepAsile), minCircleRadius,
      maxRadDepAsile, maxCircleRadius
    ]
  ]
}

const maxRegPlanLogement = 40000
const maxDepPlanLogement = 11000
const maxRadRegPlanLogement = getRadiusFullSqrt(maxRegPlanLogement, maxRegPlanLogement)
const maxRadDepPlanLogement = getRadiusFullSqrt(maxDepPlanLogement, maxDepPlanLogement)
// const maxRadRegPGE = Math.sqrt(maxRegPGE)
// const maxRadDepPGE = Math.sqrt(maxDepPGE)
const circlePaintPlanLogement = {
  'circle-opacity': 0.6,
  'circle-color': FILLCOLOR_PLANLOGEMENT,
  'circle-radius': [
    'step',
    ['zoom'],
    [
      'interpolate',
      ['linear'],
      // ['sqrt', ['number', ['get', 'montantMillions']]],
      donutRadiusFormula('montantMillions', maxRegPlanLogement),
      getRadiusFullSqrt(0, maxRegPlanLogement), minCircleRadius,
      maxRadRegPlanLogement, maxCircleRadius
    ],
    ZOOM_THRESHOLD + zoomRectifier, [
      'interpolate',
      ['linear'],
      donutRadiusFormula('montantMillions', maxDepPlanLogement),
      getRadiusFullSqrt(0, maxDepPlanLogement), minCircleRadius,
      maxRadDepPlanLogement, maxCircleRadius
    ]
  ]
}

const maxRegTHD = 40000
const maxDepTHD = 11000
const maxRadRegTHD = getRadiusFullSqrt(maxRegTHD, maxRegTHD)
const maxRadDepTHD = getRadiusFullSqrt(maxDepTHD, maxDepTHD)
// const maxRadRegPGE = Math.sqrt(maxRegPGE)
// const maxRadDepPGE = Math.sqrt(maxDepPGE)
const circlePaintTHD = {
  'circle-opacity': 0.6,
  'circle-color': FILLCOLOR_THD,
  'circle-radius': [
    'step',
    ['zoom'],
    [
      'interpolate',
      ['linear'],
      // ['sqrt', ['number', ['get', 'montantMillions']]],
      donutRadiusFormula('montantMillions', maxRegTHD),
      getRadiusFullSqrt(0, maxRegTHD), minCircleRadius,
      maxRadRegTHD, maxCircleRadius
    ],
    ZOOM_THRESHOLD + zoomRectifier, [
      'interpolate',
      ['linear'],
      donutRadiusFormula('montantMillions', maxDepTHD),
      getRadiusFullSqrt(0, maxDepTHD), minCircleRadius,
      maxRadDepTHD, maxCircleRadius
    ]
  ]
}

const maxRegApprentissage = 40000
const maxDepApprentissage = 11000
const maxRadRegApprentissage = getRadiusFullSqrt(maxRegApprentissage, maxRegApprentissage)
const maxRadDepApprentissage = getRadiusFullSqrt(maxDepApprentissage, maxDepApprentissage)
// const maxRadRegPGE = Math.sqrt(maxRegPGE)
// const maxRadDepPGE = Math.sqrt(maxDepPGE)
const circlePaintApprentissage = {
  'circle-opacity': 0.6,
  'circle-color': FILLCOLOR_APPRENTISSAGE,
  'circle-radius': [
    'step',
    ['zoom'],
    [
      'interpolate',
      ['linear'],
      // ['sqrt', ['number', ['get', 'montantMillions']]],
      donutRadiusFormula('montantMillions', maxRegApprentissage),
      getRadiusFullSqrt(0, maxRegApprentissage), minCircleRadius,
      maxRadRegApprentissage, maxCircleRadius
    ],
    ZOOM_THRESHOLD + zoomRectifier, [
      'interpolate',
      ['linear'],
      donutRadiusFormula('montantMillions', maxDepApprentissage),
      getRadiusFullSqrt(0, maxDepApprentissage), minCircleRadius,
      maxRadDepApprentissage, maxCircleRadius
    ]
  ]
}

const maxRegEcoleInclusive = 40000
const maxDepEcoleInclusive = 11000
const maxRadRegEcoleInclusive = getRadiusFullSqrt(maxRegEcoleInclusive, maxRegEcoleInclusive)
const maxRadDepEcoleInclusive = getRadiusFullSqrt(maxDepEcoleInclusive, maxDepEcoleInclusive)
// const maxRadRegPGE = Math.sqrt(maxRegPGE)
// const maxRadDepPGE = Math.sqrt(maxDepPGE)
const circlePaintEcoleInclusive = {
  'circle-opacity': 0.6,
  'circle-color': FILLCOLOR_ECOLEINCLUSIVE,
  'circle-radius': [
    'step',
    ['zoom'],
    [
      'interpolate',
      ['linear'],
      // ['sqrt', ['number', ['get', 'montantMillions']]],
      donutRadiusFormula('montantMillions', maxRegEcoleInclusive),
      getRadiusFullSqrt(0, maxRegEcoleInclusive), minCircleRadius,
      maxRadRegEcoleInclusive, maxCircleRadius
    ],
    ZOOM_THRESHOLD + zoomRectifier, [
      'interpolate',
      ['linear'],
      donutRadiusFormula('montantMillions', maxDepEcoleInclusive),
      getRadiusFullSqrt(0, maxDepEcoleInclusive), minCircleRadius,
      maxRadDepEcoleInclusive, maxCircleRadius
    ]
  ]
}


// - - - - - - - - - - - - - - - - - - - - - //
// COMMON PROPERTIES SETTINGS
// - - - - - - - - - - - - - - - - - - - - - //

const planVeloProperties = [
  {
    propName: 'montantMillions',
    itemField: 'value',
    needFormatting: true,
    format: [
      {
        utilsFnName: 'toMillionsOrElse',
        params: { divider: 1, fixed: 0 }
      }
    ]
  },
  {
    propName: 'value',
    itemField: 'value',
    needFormatting: true,
    format: [
      {
        utilsFnName: 'toFloat',
        params: undefined
      }
    ]
  }
]

// - - - - - - - - - - - - - - - - - - - - - //
// COMMON FORMATTED TEXTS
// - - - - - - - - - - - - - - - - - - - - - //

const COMMON_TEXTS = {
  millions: {
    'text-field':
    // '{montantMillions} M€',
    ['format',
      ['number-format',
        ['number', ['get', 'montantMillions']],
        {
          locale: 'fr-CA',
          'min-fraction-digits': 0,
          'max-fraction-digits': 0
        }
      ], {},
      '', { 'font-scale': 0.8 }
    ],
    'text-font': ['Open Sans Regular'],
    'text-size': 14
  },
  salaries: {
    'text-field':
    [
      'format',
      ['number-format',
        ['number', ['get', 'nombreSalaries']],
        {
          locale: 'fr-CA'
        }
      ], {},
      '\nsalariés', { 'font-scale': 0.8 }
    ],
    'text-font': ['Open Sans Regular'],
    'text-size': 14
  }
}

// - - - - - - - - - - - - - - - - - - - - - //
// COMMON GEOJSON SOUURCES
// - - - - - - - - - - - - - - - - - - - - - //

const COMMON_SOURCES = {
  FranceRegions: {
    id: 'regions',
    help: 'geojson des contours des régions',
    from: 'url',
    url: '/datasets/geodata/regions-1000m.geojson', // local file in `/static` folder
    // url  : 'https://raw.githubusercontent.com/etalab/dashboard-aides-entreprises/master/static-data/geodata/regions-1000m.geojson',
    // url  : 'https://raw.githubusercontent.com/etalab/dashboard-aides-entreprises/master/frontend/datasets/geodata/regions-1000m.geojson',
    // url  : 'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions-version-simplifiee.geojson',
    type: 'geojson',
    generateId: true,
    licence: 'open licence',
    loadInStore: true,
    popupSettings: true
  },
  FranceDepartements: {
    id: 'departements',
    help: 'geojson des contours des départements',
    from: 'url',
    url: '/datasets/geodata/departements-1000m.geojson',
    // url  : 'https://raw.githubusercontent.com/etalab/dashboard-aides-entreprises/master/static-data/geodata/departements-1000m.geojson',
    // url  : 'https://raw.githubusercontent.com/etalab/dashboard-aides-entreprises/j_front/frontend/datasets/geodata/departements-1000m.geojson',
    // url  : 'https://raw.githubusercontent.com/etalab/DVF-app/master/static/donneesgeo/departements-100m.geojson',
    // url  : 'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements-version-simplifiee.geojson',
    type: 'geojson',
    generateId: true,
    licence: '',
    loadInStore: true,
    popupSettings: undefined
  }
}

// - - - - - - - - - - - - - - - - - - - - - //
// COMMON MAP CONFIGURATIONS ELEMENTS
// - - - - - - - - - - - - - - - - - - - - - //
// ADAPT TO MAPBOX-GL-JS OPTIONS

const COMMON_OPTIONS = {
  FranceMetro: {
    mapStyle: 'EtalabUrl',
    center: [46.2276, 2.2137],
    currentCenter: [46.2276, 2.2137],
    bbox: [41.277, -5.317, 51.234, 9.689],
    zoom: 4.8,
    maxZoom: 9.5,
    minZoom: 2,
    noScroll: false
  },
  FranceGuadeloupe: {
    mapStyle: 'EtalabUrl',
    center: [16.172, -61.406],
    currentCenter: [16.172, -61.406],
    bbox: [15.833, -61.81, 16.511, -61.003],
    zoom: 4.8,
    maxZoom: 9.5,
    minZoom: 2,
    noScroll: false
  },
  FranceMartinique: {
    mapStyle: 'EtalabUrl',
    center: [14.637, -61.02],
    currentCenter: [14.637, -61.02],
    bbox: [-14.395, 61.229, 14.879, -60.811],
    zoom: 4.8,
    maxZoom: 9.5,
    minZoom: 2,
    noScroll: false
  },
  FranceGuyane: {
    mapStyle: 'EtalabUrl',
    center: [3.931, -53.119],
    currentCenter: [3.931, -53.119],
    bbox: [2.111, -54.603, 5.751, -51.635],
    zoom: 4.8,
    maxZoom: 9.5,
    minZoom: 2,
    noScroll: false
  },
  FranceReunion: {
    mapStyle: 'EtalabUrl',
    center: [-21.13, 55.527],
    currentCenter: [-21.13, 55.527],
    bbox: [-21.389, 55.216, -20.872, 55.837],
    zoom: 4.8,
    maxZoom: 9.5,
    minZoom: 2,
    noScroll: false
  },
  FranceMayotte: {
    mapStyle: 'EtalabUrl',
    center: [-12.818, 45.158],
    currentCenter: [-12.818, 45.158],
    bbox: [-13, 45.018, -12.637, 45.298],
    zoom: 4.8,
    maxZoom: 9.5,
    minZoom: 2,
    noScroll: false
  }
}
const COMMON_LAYERS = {

  FranceRegionsFill: {
    id: 'regions-fill',
    type: 'fill',
    source: 'regions',
    layout: {
      visibility: 'visible'
    },
    paint: fillPaintRegions
  },
  FranceRegionsLines: {
    id: 'regions-lines',
    type: 'line',
    source: 'regions',
    layout: {
      visibility: 'visible'
    },
    paint: {
      'line-color': OUTLINECOLOR,
      'line-width': 1
    }
  },

  FranceDepartementsFill: {
    id: 'departements-fill',
    type: 'fill',
    source: 'departements',
    layout: {
      // visibility: 'none' ,
    },
    paint: fillPaintDepartements,
    minzoom: ZOOM_THRESHOLD
  },
  FranceDepartementsLines: {
    id: 'departements-lines',
    type: 'line',
    source: 'departements',
    layout: {
      // visibility: 'none' ,
    },
    paint: {
      'line-color': OUTLINECOLOR2,
      'line-width': 1,
      // 'line-gap-width': 1,
      'line-dasharray': [2, 3]
    },
    minzoom: ZOOM_THRESHOLD
  }

}
const COMMON_SIZES = {

  defaultSizes: {
    desktop: {
      maxHeight: undefined,
      maxHeightIframe: undefined
    },
    mobile: {
      maxHeight: undefined,
      maxHeightIframe: undefined
    }
  }

}
const COMMON_CLICK_EVENTS = {

  toggleSelectedOn: {
    funcName: 'toggleSelectedOn',
    help: 'toggle selected polygon as on',
    funcParams: {}
  },
  goToPolygon: {
    funcName: 'goToPolygon',
    help: 'fly to polygon',
    funcParams: {
      zoomRange: {
        minZoom: undefined,
        maxZoom: ZOOM_THRESHOLD
      },
      propName: 'code'
    }
  },
  goToPolygonPlus: {
    funcName: 'goToPolygon',
    help: 'fly to polygon with a slightly different zoom level',
    funcParams: {
      zoomRange: {
        minZoom: undefined,
        maxZoom: ZOOM_THRESHOLD + 3
      },
      propName: 'code'
    }
  },
  toggleHighlightOn: {
    funcName: 'toggleHighlightOn',
    help: 'highlight polygon / geo element as on',
    funcParams: {}
  },
  toggleHighlightOff: {
    funcName: 'toggleHighlightOff',
    help: 'highlight polygon / geo element as off',
    funcParams: {}
  },
  updateUrlPathRegions: {
    funcName: 'updateUrlPath',
    help: 'update url path without reloading page for constant focus object form dataset to dataset',
    funcParams: {
      zoomRange: {
        minZoom: undefined,
        maxZoom: ZOOM_THRESHOLD_BIS
      },
      propName: 'code',
      targets: [
        {
          from: 'prop',
          urlArgs: {
            datasetid: 'regions',
            field: 'code',
            value: 'prop',
            highlight: undefined
          }
        }
      ]
    }
  },
  updateUrlPathDepartements: {
    funcName: 'updateUrlPath',
    help: 'update url path without reloading page for constant focus object form dataset to dataset',
    funcParams: {
      zoomRange: {
        minZoom: ZOOM_THRESHOLD_BIS,
        maxZoom: undefined
      },
      propName: 'code',
      targets: [
        {
          from: 'prop',
          urlArgs: {
            datasetid: 'departements',
            field: 'code',
            value: 'prop',
            highlight: undefined
          }
        }
      ]
    }
  }

}

// - - - - - - - - - - - - - - - - - - - - - //
// MAIN MAPBOX COMPONENT SETTINGS
// - - - - - - - - - - - - - - - - - - - - - //

export const configAppMap = {
  help: 'this file contains the setup for the MapboxGL layout / component',

  // MAPS

  settingsIds: [

    // ====================================== //
    // === DATASET : Plan Velo ================== //
    // ====================================== //

    // FRANCE METRO
    {
      id: 'map-france-plan-velo-metro',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceMetro,

      sizes: COMMON_SIZES.defaultSizes,

      // - - - - - - - - - - - - - - - - - - - - - - //
      // SOURCES LOADED AT MAP LOADED
      // - - - - - - - - - - - - - - - - - - - - - - //
      sources: [

        COMMON_SOURCES.FranceRegions,
        COMMON_SOURCES.FranceDepartements,
        {
          id: 'regions-plan-velo',
          help: 'montants des aides au niveau regional - as geojson from raw',
          from: 'store',
          fromId: 'regions-plan-velo-raw',
          type: 'geojson',
          generateId: true,
          needTransform: true,
          transformTo: {
            srcKey: 'reg',
            geoCanvasId: 'centers',
            canvasKey: {
              keyIsFieldName: true,
              field: undefined,
              canvasKeyPrefix: 'REG-',
              canvasKeySuffix: ''
            },
            properties: planVeloProperties,
            geometry: {
              type: 'Point'
            }
          },
          licence: ''
        },
        {
          id: 'departements-plan-velo',
          help:
            'montants des aides au niveau départemental - as geojson from raw',
          from: 'store',
          fromId: 'departements-plan-velo-raw',
          type: 'geojson',
          generateId: false,
          needTransform: true,
          transformTo: {
            srcKey: 'dep',
            geoCanvasId: 'centers',
            canvasKey: {
              keyIsFieldName: true,
              field: undefined,
              canvasKeyPrefix: 'DEP-',
              canvasKeySuffix: ''
            },
            properties: planVeloProperties,
            geometry: {
              type: 'Point'
            }
          },
          licence: ''
        }
      ],

      // - - - - - - - - - - - - - - - - - - - - - - //
      // MAPS : GROUPS OF LAYERS + CLICK EVENTS
      // - - - - - - - - - - - - - - - - - - - - - - //
      maps: [
        {
          id: 'map-plan-velo-reg',
          name: 'Carte plan velo par région',
          category: 'regional',
          properties: 'plan-velo',
          data: 'plan-velo',
          layers: [
            'regions-fill',
            'regions-lines',
            'regions-plan-velo',
            'regions-plan-velo-values'
          ],
          clicEvents: [
            {
              event: 'click',
              layer: 'regions-fill',
              // zoomRange : { minZoom : undefined, maxZoom : ZOOM_THRESHOLD },
              functions: [
                COMMON_CLICK_EVENTS.toggleSelectedOn,
                COMMON_CLICK_EVENTS.goToPolygonPlus,
                {
                  funcName: 'updateDisplayedData',
                  help: 'update several data (targets) from store',
                  funcParams: {
                    zoomRange: {
                      minZoom: undefined,
                      maxZoom: ZOOM_THRESHOLD_BIS
                    },
                    propName: 'code',
                    targets: [
                      // { from : 'store',
                      //   fromPropKey : undefined,
                      //   propValue : 'regional',
                      //   fromStoreData : 'initData',
                      //   fromDatasetId : 'infos',
                      //   fromDatasetKey : 'switchers',
                      //   fromDatasetField : undefined,
                      //   targetSpecialStoreId : 'levelname',
                      // },

                      {
                        from: 'store',
                        fromPropKey: 'code',
                        fromStoreData: 'initData',
                        fromDatasetId: 'taxo-regions',
                        fromDatasetKey: 'reg',
                        fromDatasetField: 'libelle',
                        targetSpecialStoreId: 'levelname'
                      },
                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'regions-plan-velo-raw',
                        fromDatasetKey: 'reg',
                        fromDatasetField: 'value',
                        targetSpecialStoreId: 'value'
                      },
                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'regions-plan-velo-raw',
                        fromDatasetKey: 'reg',
                        fromDatasetField: undefined,
                        targetSpecialStoreId: 'focusObject'
                      }
                    ]
                  }
                },
                COMMON_CLICK_EVENTS.updateUrlPathRegions,

                // TO DO ...
                {
                  funcName: 'setChildrenPolygons',
                  help: 'to do still',
                  funcParams: {
                    propName: 'code',
                    zoomRange: { minZoom: undefined, maxZoom: ZOOM_THRESHOLD },
                    targets: [
                      { targetSource: 'departement', targetPropName: 'region' }
                    ]
                  }
                }

              ]
            },

            {
              event: 'mousemove',
              layer: 'regions-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOn
              ]
            },

            {
              event: 'mouseleave',
              layer: 'regions-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOff
              ]
            }
          ]
        },

        {
          id: 'map-plan-velo-dep',
          name: 'Carte plan velo par departement',
          category: 'departemental',
          properties: 'plan-velo',
          data: 'plan-velo',
          layers: [
            'departements-fill',
            'departements-lines',
            'departements-plan-velo',
            'departements-plan-velo-values'
          ],
          clicEvents: [
            {
              event: 'click',
              layer: 'departements-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleSelectedOn,
                {
                  funcName: 'updateDisplayedData',
                  help: 'update several data (targets) from store',
                  funcParams: {
                    zoomRange: {
                      minZoom: ZOOM_THRESHOLD,
                      maxZoom: undefined
                    },
                    propName: 'code',
                    targets: [
                      {
                        from: 'store',
                        fromPropKey: 'code',
                        fromStoreData: 'initData',
                        fromDatasetId: 'taxo-departements',
                        fromDatasetKey: 'dep',
                        fromDatasetField: 'libelle',
                        targetSpecialStoreId: 'levelname'
                      },
                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'departements-plan-velo-raw',
                        fromDatasetKey: 'dep',
                        fromDatasetField: 'value',
                        targetSpecialStoreId: 'value'
                      },
                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'departements-plan-velo-raw',
                        fromDatasetKey: 'dep',
                        fromDatasetField: undefined,
                        targetSpecialStoreId: 'focusObject'
                      }
                    ]
                  }
                },
                COMMON_CLICK_EVENTS.updateUrlPathDepartements
              ]
            },

            {
              event: 'mousemove',
              layer: 'departements-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOn
              ]
            },

            {
              event: 'mouseleave',
              layer: 'departements-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOff
              ]
            }
          ]
        }
      ],

      // - - - - - - - - - - - - - - - - - - - - - - //
      // LAYERS : MAPBOX LAYERS
      // - - - - - - - - - - - - - - - - - - - - - - //
      layers: [
        // REGIONS
        COMMON_LAYERS.FranceRegionsFill,
        COMMON_LAYERS.FranceRegionsLines,
        {
          id: 'regions-plan-velo',
          type: 'circle',
          source: 'regions-plan-velo',
          layout: {
            visibility: 'visible'
          },
          maxzoom: ZOOM_THRESHOLD,
          paint: circlePaintPlanVelo
        },
        {
          id: 'regions-plan-velo-values',
          type: 'symbol',
          source: 'regions-plan-velo',
          layout: {
            ...COMMON_TEXTS.millions
          },
          maxzoom: ZOOM_THRESHOLD
        },

        // DEPARTEMENTS
        COMMON_LAYERS.FranceDepartementsFill,
        COMMON_LAYERS.FranceDepartementsLines,
        {
          id: 'departements-plan-velo',
          type: 'circle',
          source: 'departements-plan-velo',
          layout: {
            // visibility: 'none'
          },
          paint: circlePaintPlanVelo,
          minzoom: ZOOM_THRESHOLD
        },
        {
          id: 'departements-plan-velo-values',
          type: 'symbol',
          source: 'departements-plan-velo',
          layout: {
            ...COMMON_TEXTS.millions
          },
          minzoom: ZOOM_THRESHOLD
        }
      ],

      // - - - - - - - - - - - - - - - - - - - - - - //
      // LAYERS VISIBILITY DRAWER
      // - - - - - - - - - - - - - - - - - - - - - - //
      maps_visibility: {
        title: { fr: 'calques' },
        is_activated: false,
        is_drawer_open: true,
        map_switches: [
          {
            id: 'regions',
            mapId: 'map-plan-velo-reg',
            label: { fr: 'régions' },
            default_visible: true
          },
          {
            id: 'departements',
            mapId: 'map-plan-velo-dep',
            label: { fr: 'départements' },
            default_visible: false
          }
        ]
      }
    },
    // GUYANE
    {
      id: 'map-france-plan-velo-guyane',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceGuyane,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-plan-velo-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // GUADELOUPE
    {
      id: 'map-france-plan-velo-guadeloupe',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceGuadeloupe,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-plan-velo-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // MARTINIQUE
    {
      id: 'map-france-plan-velo-martinique',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceMartinique,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-plan-velo-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // LA REUNION
    {
      id: 'map-france-plan-velo-la-reunion',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceReunion,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-plan-velo-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // MAYOTTE
    {
      id: 'map-france-plan-velo-mayotte',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceMayotte,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-plan-velo-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },

    // ====================================== //
    // === DATASET : Asile ==================== //
    // ====================================== //

    // FRANCE METRO
    {
      id: 'map-france-asile-metro',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceMetro,

      sizes: COMMON_SIZES.defaultSizes,

      // - - - - - - - - - - - - - - - - - - //
      // SOURCES LOADED AT MAP LOADED
      // - - - - - - - - - - - - - - - - - - //
      sources: [
        COMMON_SOURCES.FranceRegions,
        COMMON_SOURCES.FranceDepartements,
        {
          id: 'regions-asile',
          help: 'montants des asile au niveau regional - as geojson from raw',
          from: 'store',
          fromId: 'regions-asile-raw',
          type: 'geojson',
          generateId: true,
          needTransform: true,
          transformTo: {
            srcKey: 'reg',
            geoCanvasId: 'centers',
            canvasKey: {
              keyIsFieldName: true,
              field: undefined,
              canvasKeyPrefix: 'REG-',
              canvasKeySuffix: ''
            },
            properties: planVeloProperties,
            geometry: {
              type: 'Point'
            }
          },
          licence: ''
        },
        {
          id: 'departements-asile',
          help:
            'montants des asile au niveau départemental - as geojson from raw',
          from: 'store',
          fromId: 'departements-asile-raw',
          type: 'geojson',
          generateId: false,
          needTransform: true,
          transformTo: {
            srcKey: 'dep',
            geoCanvasId: 'centers',
            canvasKey: {
              keyIsFieldName: true,
              field: undefined,
              canvasKeyPrefix: 'DEP-',
              canvasKeySuffix: ''
            },
            properties: planVeloProperties,
            geometry: {
              type: 'Point'
            }
          },
          licence: ''
        }
      ],

      // - - - - - - - - - - - - - - - - - - //
      // MAPS
      // - - - - - - - - - - - - - - - - - - //
      maps: [
        {
          id: 'map-asile-reg',
          name: 'Carte asile par région',
          category: 'regional',
          properties: 'asile',
          data: 'asile',
          layers: [
            'regions-fill',
            'regions-lines',
            'regions-asile',
            'regions-asile-values'
          ],
          clicEvents: [
            {
              event: 'click',
              layer: 'regions-fill',
              // zoomRange : { minZoom : undefined, maxZoom : ZOOM_THRESHOLD },
              functions: [
                COMMON_CLICK_EVENTS.toggleSelectedOn,
                COMMON_CLICK_EVENTS.goToPolygonPlus,
                {
                  funcName: 'updateDisplayedData',
                  help: 'update several data (targets) from store',
                  funcParams: {
                    zoomRange: {
                      minZoom: undefined,
                      maxZoom: ZOOM_THRESHOLD_BIS
                    },
                    propName: 'code',
                    targets: [

                      {
                        from: 'store',
                        fromPropKey: 'code',
                        fromStoreData: 'initData',
                        fromDatasetId: 'taxo-regions',
                        fromDatasetKey: 'reg',
                        fromDatasetField: 'libelle',
                        targetSpecialStoreId: 'levelname'
                      },

                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'regions-asile-raw',
                        fromDatasetKey: 'reg',
                        fromDatasetField: 'value',
                        targetSpecialStoreId: 'value'
                      },


                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'regions-asile-raw',
                        fromDatasetKey: 'reg',
                        fromDatasetField: undefined,
                        targetSpecialStoreId: 'focusObject'
                      }
                    ]
                  }
                },
                COMMON_CLICK_EVENTS.updateUrlPathRegions

              ]
            },

            {
              event: 'mousemove',
              layer: 'regions-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOn
              ]
            },

            {
              event: 'mouseleave',
              layer: 'regions-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOff
              ]
            }
          ]
        },

        {
          id: 'map-asile-dep',
          name: 'Carte asile par departement',
          category: 'departemental',
          properties: 'pge',
          data: 'pge',
          layers: [
            'departements-fill',
            'departements-lines',
            'departements-asile',
            'departements-asile-values'
          ],
          clicEvents: [
            {
              event: 'click',
              layer: 'departements-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleSelectedOn,
                {
                  funcName: 'updateDisplayedData',
                  help: 'update several data (targets) from store',
                  funcParams: {
                    zoomRange: {
                      minZoom: ZOOM_THRESHOLD,
                      maxZoom: undefined
                    },
                    propName: 'code',
                    targets: [
                      {
                        from: 'store',
                        fromPropKey: 'code',
                        fromStoreData: 'initData',
                        fromDatasetId: 'taxo-departements',
                        fromDatasetKey: 'dep',
                        fromDatasetField: 'libelle',
                        targetSpecialStoreId: 'levelname'
                      },

                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'departements-asile-raw',
                        fromDatasetKey: 'dep',
                        fromDatasetField: 'value',
                        targetSpecialStoreId: 'value'
                      },

                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'departements-asile-raw',
                        fromDatasetKey: 'dep',
                        fromDatasetField: undefined,
                        targetSpecialStoreId: 'focusObject'
                      }
                    ]
                  }
                },
                COMMON_CLICK_EVENTS.updateUrlPathDepartements
              ]
            },

            {
              event: 'mousemove',
              layer: 'departements-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOn
              ]
            },

            {
              event: 'mouseleave',
              layer: 'departements-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOff
              ]
            }
          ]
        }
      ],

      // - - - - - - - - - - - - - - - - - - //
      // LAYERS
      // - - - - - - - - - - - - - - - - - - //
      layers: [

        // REGIONS
        COMMON_LAYERS.FranceRegionsFill,
        COMMON_LAYERS.FranceRegionsLines,
        {
          id: 'regions-asile',
          type: 'circle',
          source: 'regions-asile',
          layout: {
            visibility: 'visible'
          },
          maxzoom: ZOOM_THRESHOLD,
          paint: circlePaintAsile
        },
        {
          id: 'regions-asile-values',
          type: 'symbol',
          source: 'regions-asile',
          layout: {
            ...COMMON_TEXTS.millions
          },
          maxzoom: ZOOM_THRESHOLD
        },

        // DEPARTEMENTS
        COMMON_LAYERS.FranceDepartementsFill,
        COMMON_LAYERS.FranceDepartementsLines,
        {
          id: 'departements-asile',
          type: 'circle',
          source: 'departements-asile',
          layout: {
            // visibility: 'none'
          },
          paint: circlePaintAsile,
          minzoom: ZOOM_THRESHOLD
        },
        {
          id: 'departements-asile-values',
          type: 'symbol',
          source: 'departements-asile',
          layout: {
            ...COMMON_TEXTS.millions
          },
          minzoom: ZOOM_THRESHOLD
        }
      ],

      // - - - - - - - - - - - - - - - - - - //
      // LAYERS VISIBILITY DRAWER
      // - - - - - - - - - - - - - - - - - - //
      maps_visibility: {
        title: { fr: 'calques' },
        is_activated: false,
        is_drawer_open: true,
        map_switches: [
          {
            id: 'regions',
            mapId: 'map-asile-reg',
            label: { fr: 'régions' },
            default_visible: true
          },
          {
            id: 'departements',
            mapId: 'map-asile-dep',
            label: { fr: 'départements' },
            default_visible: false
          }
        ]
      }
    },
    // GUYANE
    {
      id: 'map-france-asile-guyane',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceGuyane,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-asile-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // GUADELOUPE
    {
      id: 'map-france-asile-guadeloupe',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceGuadeloupe,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-asile-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // MARTINIQUE
    {
      id: 'map-france-asile-martinique',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceMartinique,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-asile-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // LA REUNION
    {
      id: 'map-france-asile-la-reunion',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceReunion,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-asile-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // MAYOTTE
    {
      id: 'map-france-asile-mayotte',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceMayotte,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-asile-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },

    // ====================================== //
    // === DATASET : Plan Logement ==================== //
    // ====================================== //

    // FRANCE METRO
    {
      id: 'map-france-plan-logement-metro',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceMetro,

      sizes: COMMON_SIZES.defaultSizes,

      // - - - - - - - - - - - - - - - - - - //
      // SOURCES LOADED AT MAP LOADED
      // - - - - - - - - - - - - - - - - - - //
      sources: [
        COMMON_SOURCES.FranceRegions,
        COMMON_SOURCES.FranceDepartements,
        {
          id: 'regions-plan-logement',
          help: 'montants des plan-logement au niveau regional - as geojson from raw',
          from: 'store',
          fromId: 'regions-plan-logement-raw',
          type: 'geojson',
          generateId: true,
          needTransform: true,
          transformTo: {
            srcKey: 'reg',
            geoCanvasId: 'centers',
            canvasKey: {
              keyIsFieldName: true,
              field: undefined,
              canvasKeyPrefix: 'REG-',
              canvasKeySuffix: ''
            },
            properties: planVeloProperties,
            geometry: {
              type: 'Point'
            }
          },
          licence: ''
        },
        {
          id: 'departements-plan-logement',
          help:
            'montants des plan-logement au niveau départemental - as geojson from raw',
          from: 'store',
          fromId: 'departements-plan-logement-raw',
          type: 'geojson',
          generateId: false,
          needTransform: true,
          transformTo: {
            srcKey: 'dep',
            geoCanvasId: 'centers',
            canvasKey: {
              keyIsFieldName: true,
              field: undefined,
              canvasKeyPrefix: 'DEP-',
              canvasKeySuffix: ''
            },
            properties: planVeloProperties,
            geometry: {
              type: 'Point'
            }
          },
          licence: ''
        }
      ],

      // - - - - - - - - - - - - - - - - - - //
      // MAPS
      // - - - - - - - - - - - - - - - - - - //
      maps: [
        {
          id: 'map-plan-logement-reg',
          name: 'Carte plan-logement par région',
          category: 'regional',
          properties: 'plan-logement',
          data: 'plan-logement',
          layers: [
            'regions-fill',
            'regions-lines',
            'regions-plan-logement',
            'regions-plan-logement-values'
          ],
          clicEvents: [
            {
              event: 'click',
              layer: 'regions-fill',
              // zoomRange : { minZoom : undefined, maxZoom : ZOOM_THRESHOLD },
              functions: [
                COMMON_CLICK_EVENTS.toggleSelectedOn,
                COMMON_CLICK_EVENTS.goToPolygonPlus,
                {
                  funcName: 'updateDisplayedData',
                  help: 'update several data (targets) from store',
                  funcParams: {
                    zoomRange: {
                      minZoom: undefined,
                      maxZoom: ZOOM_THRESHOLD_BIS
                    },
                    propName: 'code',
                    targets: [

                      {
                        from: 'store',
                        fromPropKey: 'code',
                        fromStoreData: 'initData',
                        fromDatasetId: 'taxo-regions',
                        fromDatasetKey: 'reg',
                        fromDatasetField: 'libelle',
                        targetSpecialStoreId: 'levelname'
                      },

                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'regions-plan-logement-raw',
                        fromDatasetKey: 'reg',
                        fromDatasetField: 'value',
                        targetSpecialStoreId: 'value'
                      },


                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'regions-plan-logement-raw',
                        fromDatasetKey: 'reg',
                        fromDatasetField: undefined,
                        targetSpecialStoreId: 'focusObject'
                      }
                    ]
                  }
                },
                COMMON_CLICK_EVENTS.updateUrlPathRegions

              ]
            },

            {
              event: 'mousemove',
              layer: 'regions-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOn
              ]
            },

            {
              event: 'mouseleave',
              layer: 'regions-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOff
              ]
            }
          ]
        },

        {
          id: 'map-plan-logement-dep',
          name: 'Carte plan-logement par departement',
          category: 'departemental',
          properties: 'pge',
          data: 'pge',
          layers: [
            'departements-fill',
            'departements-lines',
            'departements-plan-logement',
            'departements-plan-logement-values'
          ],
          clicEvents: [
            {
              event: 'click',
              layer: 'departements-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleSelectedOn,
                {
                  funcName: 'updateDisplayedData',
                  help: 'update several data (targets) from store',
                  funcParams: {
                    zoomRange: {
                      minZoom: ZOOM_THRESHOLD,
                      maxZoom: undefined
                    },
                    propName: 'code',
                    targets: [
                      {
                        from: 'store',
                        fromPropKey: 'code',
                        fromStoreData: 'initData',
                        fromDatasetId: 'taxo-departements',
                        fromDatasetKey: 'dep',
                        fromDatasetField: 'libelle',
                        targetSpecialStoreId: 'levelname'
                      },

                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'departements-plan-logement-raw',
                        fromDatasetKey: 'dep',
                        fromDatasetField: 'value',
                        targetSpecialStoreId: 'value'
                      },

                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'departements-plan-logement-raw',
                        fromDatasetKey: 'dep',
                        fromDatasetField: undefined,
                        targetSpecialStoreId: 'focusObject'
                      }
                    ]
                  }
                },
                COMMON_CLICK_EVENTS.updateUrlPathDepartements
              ]
            },

            {
              event: 'mousemove',
              layer: 'departements-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOn
              ]
            },

            {
              event: 'mouseleave',
              layer: 'departements-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOff
              ]
            }
          ]
        }
      ],

      // - - - - - - - - - - - - - - - - - - //
      // LAYERS
      // - - - - - - - - - - - - - - - - - - //
      layers: [

        // REGIONS
        COMMON_LAYERS.FranceRegionsFill,
        COMMON_LAYERS.FranceRegionsLines,
        {
          id: 'regions-plan-logement',
          type: 'circle',
          source: 'regions-plan-logement',
          layout: {
            visibility: 'visible'
          },
          maxzoom: ZOOM_THRESHOLD,
          paint: circlePaintPlanLogement
        },
        {
          id: 'regions-plan-logement-values',
          type: 'symbol',
          source: 'regions-plan-logement',
          layout: {
            ...COMMON_TEXTS.millions
          },
          maxzoom: ZOOM_THRESHOLD
        },

        // DEPARTEMENTS
        COMMON_LAYERS.FranceDepartementsFill,
        COMMON_LAYERS.FranceDepartementsLines,
        {
          id: 'departements-plan-logement',
          type: 'circle',
          source: 'departements-plan-logement',
          layout: {
            // visibility: 'none'
          },
          paint: circlePaintPlanLogement,
          minzoom: ZOOM_THRESHOLD
        },
        {
          id: 'departements-plan-logement-values',
          type: 'symbol',
          source: 'departements-plan-logement',
          layout: {
            ...COMMON_TEXTS.millions
          },
          minzoom: ZOOM_THRESHOLD
        }
      ],

      // - - - - - - - - - - - - - - - - - - //
      // LAYERS VISIBILITY DRAWER
      // - - - - - - - - - - - - - - - - - - //
      maps_visibility: {
        title: { fr: 'calques' },
        is_activated: false,
        is_drawer_open: true,
        map_switches: [
          {
            id: 'regions',
            mapId: 'map-plan-logement-reg',
            label: { fr: 'régions' },
            default_visible: true
          },
          {
            id: 'departements',
            mapId: 'map-plan-logement-dep',
            label: { fr: 'départements' },
            default_visible: false
          }
        ]
      }
    },
    // GUYANE
    {
      id: 'map-france-plan-logement-guyane',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceGuyane,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-plan-logement-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // GUADELOUPE
    {
      id: 'map-france-plan-logement-guadeloupe',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceGuadeloupe,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-plan-logement-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // MARTINIQUE
    {
      id: 'map-france-plan-logement-martinique',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceMartinique,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-plan-logement-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // LA REUNION
    {
      id: 'map-france-plan-logement-la-reunion',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceReunion,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-plan-logement-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // MAYOTTE
    {
      id: 'map-france-plan-logement-mayotte',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceMayotte,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-plan-logement-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },

    // ====================================== //
    // === DATASET : THD ==================== //
    // ====================================== //

    // FRANCE METRO
    {
      id: 'map-france-thd-metro',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceMetro,

      sizes: COMMON_SIZES.defaultSizes,

      // - - - - - - - - - - - - - - - - - - //
      // SOURCES LOADED AT MAP LOADED
      // - - - - - - - - - - - - - - - - - - //
      sources: [
        COMMON_SOURCES.FranceRegions,
        COMMON_SOURCES.FranceDepartements,
        {
          id: 'regions-thd',
          help: 'montants des thd au niveau regional - as geojson from raw',
          from: 'store',
          fromId: 'regions-thd-raw',
          type: 'geojson',
          generateId: true,
          needTransform: true,
          transformTo: {
            srcKey: 'reg',
            geoCanvasId: 'centers',
            canvasKey: {
              keyIsFieldName: true,
              field: undefined,
              canvasKeyPrefix: 'REG-',
              canvasKeySuffix: ''
            },
            properties: planVeloProperties,
            geometry: {
              type: 'Point'
            }
          },
          licence: ''
        },
        {
          id: 'departements-thd',
          help:
            'montants des thd au niveau départemental - as geojson from raw',
          from: 'store',
          fromId: 'departements-thd-raw',
          type: 'geojson',
          generateId: false,
          needTransform: true,
          transformTo: {
            srcKey: 'dep',
            geoCanvasId: 'centers',
            canvasKey: {
              keyIsFieldName: true,
              field: undefined,
              canvasKeyPrefix: 'DEP-',
              canvasKeySuffix: ''
            },
            properties: planVeloProperties,
            geometry: {
              type: 'Point'
            }
          },
          licence: ''
        }
      ],

      // - - - - - - - - - - - - - - - - - - //
      // MAPS
      // - - - - - - - - - - - - - - - - - - //
      maps: [
        {
          id: 'map-thd-reg',
          name: 'Carte thd par région',
          category: 'regional',
          properties: 'thd',
          data: 'thd',
          layers: [
            'regions-fill',
            'regions-lines',
            'regions-thd',
            'regions-thd-values'
          ],
          clicEvents: [
            {
              event: 'click',
              layer: 'regions-fill',
              // zoomRange : { minZoom : undefined, maxZoom : ZOOM_THRESHOLD },
              functions: [
                COMMON_CLICK_EVENTS.toggleSelectedOn,
                COMMON_CLICK_EVENTS.goToPolygonPlus,
                {
                  funcName: 'updateDisplayedData',
                  help: 'update several data (targets) from store',
                  funcParams: {
                    zoomRange: {
                      minZoom: undefined,
                      maxZoom: ZOOM_THRESHOLD_BIS
                    },
                    propName: 'code',
                    targets: [

                      {
                        from: 'store',
                        fromPropKey: 'code',
                        fromStoreData: 'initData',
                        fromDatasetId: 'taxo-regions',
                        fromDatasetKey: 'reg',
                        fromDatasetField: 'libelle',
                        targetSpecialStoreId: 'levelname'
                      },

                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'regions-thd-raw',
                        fromDatasetKey: 'reg',
                        fromDatasetField: 'value',
                        targetSpecialStoreId: 'value'
                      },


                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'regions-thd-raw',
                        fromDatasetKey: 'reg',
                        fromDatasetField: undefined,
                        targetSpecialStoreId: 'focusObject'
                      }
                    ]
                  }
                },
                COMMON_CLICK_EVENTS.updateUrlPathRegions

              ]
            },

            {
              event: 'mousemove',
              layer: 'regions-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOn
              ]
            },

            {
              event: 'mouseleave',
              layer: 'regions-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOff
              ]
            }
          ]
        },

        {
          id: 'map-thd-dep',
          name: 'Carte thd par departement',
          category: 'departemental',
          properties: 'pge',
          data: 'pge',
          layers: [
            'departements-fill',
            'departements-lines',
            'departements-thd',
            'departements-thd-values'
          ],
          clicEvents: [
            {
              event: 'click',
              layer: 'departements-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleSelectedOn,
                {
                  funcName: 'updateDisplayedData',
                  help: 'update several data (targets) from store',
                  funcParams: {
                    zoomRange: {
                      minZoom: ZOOM_THRESHOLD,
                      maxZoom: undefined
                    },
                    propName: 'code',
                    targets: [
                      {
                        from: 'store',
                        fromPropKey: 'code',
                        fromStoreData: 'initData',
                        fromDatasetId: 'taxo-departements',
                        fromDatasetKey: 'dep',
                        fromDatasetField: 'libelle',
                        targetSpecialStoreId: 'levelname'
                      },

                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'departements-thd-raw',
                        fromDatasetKey: 'dep',
                        fromDatasetField: 'value',
                        targetSpecialStoreId: 'value'
                      },

                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'departements-thd-raw',
                        fromDatasetKey: 'dep',
                        fromDatasetField: undefined,
                        targetSpecialStoreId: 'focusObject'
                      }
                    ]
                  }
                },
                COMMON_CLICK_EVENTS.updateUrlPathDepartements
              ]
            },

            {
              event: 'mousemove',
              layer: 'departements-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOn
              ]
            },

            {
              event: 'mouseleave',
              layer: 'departements-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOff
              ]
            }
          ]
        }
      ],

      // - - - - - - - - - - - - - - - - - - //
      // LAYERS
      // - - - - - - - - - - - - - - - - - - //
      layers: [

        // REGIONS
        COMMON_LAYERS.FranceRegionsFill,
        COMMON_LAYERS.FranceRegionsLines,
        {
          id: 'regions-thd',
          type: 'circle',
          source: 'regions-thd',
          layout: {
            visibility: 'visible'
          },
          maxzoom: ZOOM_THRESHOLD,
          paint: circlePaintTHD
        },
        {
          id: 'regions-thd-values',
          type: 'symbol',
          source: 'regions-thd',
          layout: {
            ...COMMON_TEXTS.millions
          },
          maxzoom: ZOOM_THRESHOLD
        },

        // DEPARTEMENTS
        COMMON_LAYERS.FranceDepartementsFill,
        COMMON_LAYERS.FranceDepartementsLines,
        {
          id: 'departements-thd',
          type: 'circle',
          source: 'departements-thd',
          layout: {
            // visibility: 'none'
          },
          paint: circlePaintTHD,
          minzoom: ZOOM_THRESHOLD
        },
        {
          id: 'departements-thd-values',
          type: 'symbol',
          source: 'departements-thd',
          layout: {
            ...COMMON_TEXTS.millions
          },
          minzoom: ZOOM_THRESHOLD
        }
      ],

      // - - - - - - - - - - - - - - - - - - //
      // LAYERS VISIBILITY DRAWER
      // - - - - - - - - - - - - - - - - - - //
      maps_visibility: {
        title: { fr: 'calques' },
        is_activated: false,
        is_drawer_open: true,
        map_switches: [
          {
            id: 'regions',
            mapId: 'map-thd-reg',
            label: { fr: 'régions' },
            default_visible: true
          },
          {
            id: 'departements',
            mapId: 'map-thd-dep',
            label: { fr: 'départements' },
            default_visible: false
          }
        ]
      }
    },
    // GUYANE
    {
      id: 'map-france-thd-guyane',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceGuyane,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-thd-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // GUADELOUPE
    {
      id: 'map-france-thd-guadeloupe',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceGuadeloupe,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-thd-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // MARTINIQUE
    {
      id: 'map-france-thd-martinique',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceMartinique,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-thd-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // LA REUNION
    {
      id: 'map-france-thd-la-reunion',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceReunion,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-thd-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // MAYOTTE
    {
      id: 'map-france-thd-mayotte',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceMayotte,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-thd-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },

    // ====================================== //
    // === DATASET : Apprentissage ==================== //
    // ====================================== //

    // FRANCE METRO
    {
      id: 'map-france-apprentissage-metro',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceMetro,

      sizes: COMMON_SIZES.defaultSizes,

      // - - - - - - - - - - - - - - - - - - //
      // SOURCES LOADED AT MAP LOADED
      // - - - - - - - - - - - - - - - - - - //
      sources: [
        COMMON_SOURCES.FranceRegions,
        COMMON_SOURCES.FranceDepartements,
        {
          id: 'regions-apprentissage',
          help: 'montants des apprentissage au niveau regional - as geojson from raw',
          from: 'store',
          fromId: 'regions-apprentissage-raw',
          type: 'geojson',
          generateId: true,
          needTransform: true,
          transformTo: {
            srcKey: 'reg',
            geoCanvasId: 'centers',
            canvasKey: {
              keyIsFieldName: true,
              field: undefined,
              canvasKeyPrefix: 'REG-',
              canvasKeySuffix: ''
            },
            properties: planVeloProperties,
            geometry: {
              type: 'Point'
            }
          },
          licence: ''
        },
        {
          id: 'departements-apprentissage',
          help:
            'montants des apprentissage au niveau départemental - as geojson from raw',
          from: 'store',
          fromId: 'departements-apprentissage-raw',
          type: 'geojson',
          generateId: false,
          needTransform: true,
          transformTo: {
            srcKey: 'dep',
            geoCanvasId: 'centers',
            canvasKey: {
              keyIsFieldName: true,
              field: undefined,
              canvasKeyPrefix: 'DEP-',
              canvasKeySuffix: ''
            },
            properties: planVeloProperties,
            geometry: {
              type: 'Point'
            }
          },
          licence: ''
        }
      ],

      // - - - - - - - - - - - - - - - - - - //
      // MAPS
      // - - - - - - - - - - - - - - - - - - //
      maps: [
        {
          id: 'map-apprentissage-reg',
          name: 'Carte apprentissage par région',
          category: 'regional',
          properties: 'apprentissage',
          data: 'apprentissage',
          layers: [
            'regions-fill',
            'regions-lines',
            'regions-apprentissage',
            'regions-apprentissage-values'
          ],
          clicEvents: [
            {
              event: 'click',
              layer: 'regions-fill',
              // zoomRange : { minZoom : undefined, maxZoom : ZOOM_THRESHOLD },
              functions: [
                COMMON_CLICK_EVENTS.toggleSelectedOn,
                COMMON_CLICK_EVENTS.goToPolygonPlus,
                {
                  funcName: 'updateDisplayedData',
                  help: 'update several data (targets) from store',
                  funcParams: {
                    zoomRange: {
                      minZoom: undefined,
                      maxZoom: ZOOM_THRESHOLD_BIS
                    },
                    propName: 'code',
                    targets: [

                      {
                        from: 'store',
                        fromPropKey: 'code',
                        fromStoreData: 'initData',
                        fromDatasetId: 'taxo-regions',
                        fromDatasetKey: 'reg',
                        fromDatasetField: 'libelle',
                        targetSpecialStoreId: 'levelname'
                      },

                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'regions-apprentissage-raw',
                        fromDatasetKey: 'reg',
                        fromDatasetField: 'value',
                        targetSpecialStoreId: 'value'
                      },


                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'regions-apprentissage-raw',
                        fromDatasetKey: 'reg',
                        fromDatasetField: undefined,
                        targetSpecialStoreId: 'focusObject'
                      }
                    ]
                  }
                },
                COMMON_CLICK_EVENTS.updateUrlPathRegions

              ]
            },

            {
              event: 'mousemove',
              layer: 'regions-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOn
              ]
            },

            {
              event: 'mouseleave',
              layer: 'regions-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOff
              ]
            }
          ]
        },

        {
          id: 'map-apprentissage-dep',
          name: 'Carte apprentissage par departement',
          category: 'departemental',
          properties: 'pge',
          data: 'pge',
          layers: [
            'departements-fill',
            'departements-lines',
            'departements-apprentissage',
            'departements-apprentissage-values'
          ],
          clicEvents: [
            {
              event: 'click',
              layer: 'departements-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleSelectedOn,
                {
                  funcName: 'updateDisplayedData',
                  help: 'update several data (targets) from store',
                  funcParams: {
                    zoomRange: {
                      minZoom: ZOOM_THRESHOLD,
                      maxZoom: undefined
                    },
                    propName: 'code',
                    targets: [
                      {
                        from: 'store',
                        fromPropKey: 'code',
                        fromStoreData: 'initData',
                        fromDatasetId: 'taxo-departements',
                        fromDatasetKey: 'dep',
                        fromDatasetField: 'libelle',
                        targetSpecialStoreId: 'levelname'
                      },

                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'departements-apprentissage-raw',
                        fromDatasetKey: 'dep',
                        fromDatasetField: 'value',
                        targetSpecialStoreId: 'value'
                      },

                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'departements-apprentissage-raw',
                        fromDatasetKey: 'dep',
                        fromDatasetField: undefined,
                        targetSpecialStoreId: 'focusObject'
                      }
                    ]
                  }
                },
                COMMON_CLICK_EVENTS.updateUrlPathDepartements
              ]
            },

            {
              event: 'mousemove',
              layer: 'departements-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOn
              ]
            },

            {
              event: 'mouseleave',
              layer: 'departements-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOff
              ]
            }
          ]
        }
      ],

      // - - - - - - - - - - - - - - - - - - //
      // LAYERS
      // - - - - - - - - - - - - - - - - - - //
      layers: [

        // REGIONS
        COMMON_LAYERS.FranceRegionsFill,
        COMMON_LAYERS.FranceRegionsLines,
        {
          id: 'regions-apprentissage',
          type: 'circle',
          source: 'regions-apprentissage',
          layout: {
            visibility: 'visible'
          },
          maxzoom: ZOOM_THRESHOLD,
          paint: circlePaintApprentissage
        },
        {
          id: 'regions-apprentissage-values',
          type: 'symbol',
          source: 'regions-apprentissage',
          layout: {
            ...COMMON_TEXTS.millions
          },
          maxzoom: ZOOM_THRESHOLD
        },

        // DEPARTEMENTS
        COMMON_LAYERS.FranceDepartementsFill,
        COMMON_LAYERS.FranceDepartementsLines,
        {
          id: 'departements-apprentissage',
          type: 'circle',
          source: 'departements-apprentissage',
          layout: {
            // visibility: 'none'
          },
          paint: circlePaintApprentissage,
          minzoom: ZOOM_THRESHOLD
        },
        {
          id: 'departements-apprentissage-values',
          type: 'symbol',
          source: 'departements-apprentissage',
          layout: {
            ...COMMON_TEXTS.millions
          },
          minzoom: ZOOM_THRESHOLD
        }
      ],

      // - - - - - - - - - - - - - - - - - - //
      // LAYERS VISIBILITY DRAWER
      // - - - - - - - - - - - - - - - - - - //
      maps_visibility: {
        title: { fr: 'calques' },
        is_activated: false,
        is_drawer_open: true,
        map_switches: [
          {
            id: 'regions',
            mapId: 'map-apprentissage-reg',
            label: { fr: 'régions' },
            default_visible: true
          },
          {
            id: 'departements',
            mapId: 'map-apprentissage-dep',
            label: { fr: 'départements' },
            default_visible: false
          }
        ]
      }
    },
    // GUYANE
    {
      id: 'map-france-apprentissage-guyane',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceGuyane,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-apprentissage-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // GUADELOUPE
    {
      id: 'map-france-apprentissage-guadeloupe',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceGuadeloupe,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-apprentissage-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // MARTINIQUE
    {
      id: 'map-france-apprentissage-martinique',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceMartinique,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-apprentissage-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // LA REUNION
    {
      id: 'map-france-apprentissage-la-reunion',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceReunion,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-apprentissage-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // MAYOTTE
    {
      id: 'map-france-apprentissage-mayotte',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceMayotte,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-apprentissage-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },

    // ====================================== //
    // === DATASET : Ecole Inclusive ==================== //
    // ====================================== //

    // FRANCE METRO
    {
      id: 'map-france-ecole-inclusive-metro',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceMetro,

      sizes: COMMON_SIZES.defaultSizes,

      // - - - - - - - - - - - - - - - - - - //
      // SOURCES LOADED AT MAP LOADED
      // - - - - - - - - - - - - - - - - - - //
      sources: [
        COMMON_SOURCES.FranceRegions,
        COMMON_SOURCES.FranceDepartements,
        {
          id: 'regions-ecole-inclusive',
          help: 'montants des ecole-inclusive au niveau regional - as geojson from raw',
          from: 'store',
          fromId: 'regions-ecole-inclusive-raw',
          type: 'geojson',
          generateId: true,
          needTransform: true,
          transformTo: {
            srcKey: 'reg',
            geoCanvasId: 'centers',
            canvasKey: {
              keyIsFieldName: true,
              field: undefined,
              canvasKeyPrefix: 'REG-',
              canvasKeySuffix: ''
            },
            properties: planVeloProperties,
            geometry: {
              type: 'Point'
            }
          },
          licence: ''
        },
        {
          id: 'departements-ecole-inclusive',
          help:
            'montants des ecole-inclusive au niveau départemental - as geojson from raw',
          from: 'store',
          fromId: 'departements-ecole-inclusive-raw',
          type: 'geojson',
          generateId: false,
          needTransform: true,
          transformTo: {
            srcKey: 'dep',
            geoCanvasId: 'centers',
            canvasKey: {
              keyIsFieldName: true,
              field: undefined,
              canvasKeyPrefix: 'DEP-',
              canvasKeySuffix: ''
            },
            properties: planVeloProperties,
            geometry: {
              type: 'Point'
            }
          },
          licence: ''
        }
      ],

      // - - - - - - - - - - - - - - - - - - //
      // MAPS
      // - - - - - - - - - - - - - - - - - - //
      maps: [
        {
          id: 'map-ecole-inclusive-reg',
          name: 'Carte ecole-inclusive par région',
          category: 'regional',
          properties: 'ecole-inclusive',
          data: 'ecole-inclusive',
          layers: [
            'regions-fill',
            'regions-lines',
            'regions-ecole-inclusive',
            'regions-ecole-inclusive-values'
          ],
          clicEvents: [
            {
              event: 'click',
              layer: 'regions-fill',
              // zoomRange : { minZoom : undefined, maxZoom : ZOOM_THRESHOLD },
              functions: [
                COMMON_CLICK_EVENTS.toggleSelectedOn,
                COMMON_CLICK_EVENTS.goToPolygonPlus,
                {
                  funcName: 'updateDisplayedData',
                  help: 'update several data (targets) from store',
                  funcParams: {
                    zoomRange: {
                      minZoom: undefined,
                      maxZoom: ZOOM_THRESHOLD_BIS
                    },
                    propName: 'code',
                    targets: [

                      {
                        from: 'store',
                        fromPropKey: 'code',
                        fromStoreData: 'initData',
                        fromDatasetId: 'taxo-regions',
                        fromDatasetKey: 'reg',
                        fromDatasetField: 'libelle',
                        targetSpecialStoreId: 'levelname'
                      },

                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'regions-ecole-inclusive-raw',
                        fromDatasetKey: 'reg',
                        fromDatasetField: 'value',
                        targetSpecialStoreId: 'value'
                      },


                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'regions-ecole-inclusive-raw',
                        fromDatasetKey: 'reg',
                        fromDatasetField: undefined,
                        targetSpecialStoreId: 'focusObject'
                      }
                    ]
                  }
                },
                COMMON_CLICK_EVENTS.updateUrlPathRegions

              ]
            },

            {
              event: 'mousemove',
              layer: 'regions-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOn
              ]
            },

            {
              event: 'mouseleave',
              layer: 'regions-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOff
              ]
            }
          ]
        },

        {
          id: 'map-ecole-inclusive-dep',
          name: 'Carte ecole-inclusive par departement',
          category: 'departemental',
          properties: 'pge',
          data: 'pge',
          layers: [
            'departements-fill',
            'departements-lines',
            'departements-ecole-inclusive',
            'departements-ecole-inclusive-values'
          ],
          clicEvents: [
            {
              event: 'click',
              layer: 'departements-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleSelectedOn,
                {
                  funcName: 'updateDisplayedData',
                  help: 'update several data (targets) from store',
                  funcParams: {
                    zoomRange: {
                      minZoom: ZOOM_THRESHOLD,
                      maxZoom: undefined
                    },
                    propName: 'code',
                    targets: [
                      {
                        from: 'store',
                        fromPropKey: 'code',
                        fromStoreData: 'initData',
                        fromDatasetId: 'taxo-departements',
                        fromDatasetKey: 'dep',
                        fromDatasetField: 'libelle',
                        targetSpecialStoreId: 'levelname'
                      },

                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'departements-ecole-inclusive-raw',
                        fromDatasetKey: 'dep',
                        fromDatasetField: 'value',
                        targetSpecialStoreId: 'value'
                      },

                      {
                        from: 'store',
                        fromPropKey: 'code', // use props region code
                        fromStoreData: 'initData',
                        fromDatasetId: 'departements-ecole-inclusive-raw',
                        fromDatasetKey: 'dep',
                        fromDatasetField: undefined,
                        targetSpecialStoreId: 'focusObject'
                      }
                    ]
                  }
                },
                COMMON_CLICK_EVENTS.updateUrlPathDepartements
              ]
            },

            {
              event: 'mousemove',
              layer: 'departements-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOn
              ]
            },

            {
              event: 'mouseleave',
              layer: 'departements-fill',
              functions: [
                COMMON_CLICK_EVENTS.toggleHighlightOff
              ]
            }
          ]
        }
      ],

      // - - - - - - - - - - - - - - - - - - //
      // LAYERS
      // - - - - - - - - - - - - - - - - - - //
      layers: [

        // REGIONS
        COMMON_LAYERS.FranceRegionsFill,
        COMMON_LAYERS.FranceRegionsLines,
        {
          id: 'regions-ecole-inclusive',
          type: 'circle',
          source: 'regions-ecole-inclusive',
          layout: {
            visibility: 'visible'
          },
          maxzoom: ZOOM_THRESHOLD,
          paint: circlePaintEcoleInclusive
        },
        {
          id: 'regions-ecole-inclusive-values',
          type: 'symbol',
          source: 'regions-ecole-inclusive',
          layout: {
            ...COMMON_TEXTS.millions
          },
          maxzoom: ZOOM_THRESHOLD
        },

        // DEPARTEMENTS
        COMMON_LAYERS.FranceDepartementsFill,
        COMMON_LAYERS.FranceDepartementsLines,
        {
          id: 'departements-ecole-inclusive',
          type: 'circle',
          source: 'departements-ecole-inclusive',
          layout: {
            // visibility: 'none'
          },
          paint: circlePaintEcoleInclusive,
          minzoom: ZOOM_THRESHOLD
        },
        {
          id: 'departements-ecole-inclusive-values',
          type: 'symbol',
          source: 'departements-ecole-inclusive',
          layout: {
            ...COMMON_TEXTS.millions
          },
          minzoom: ZOOM_THRESHOLD
        }
      ],

      // - - - - - - - - - - - - - - - - - - //
      // LAYERS VISIBILITY DRAWER
      // - - - - - - - - - - - - - - - - - - //
      maps_visibility: {
        title: { fr: 'calques' },
        is_activated: false,
        is_drawer_open: true,
        map_switches: [
          {
            id: 'regions',
            mapId: 'map-ecole-inclusive-reg',
            label: { fr: 'régions' },
            default_visible: true
          },
          {
            id: 'departements',
            mapId: 'map-ecole-inclusive-dep',
            label: { fr: 'départements' },
            default_visible: false
          }
        ]
      }
    },
    // GUYANE
    {
      id: 'map-france-ecole-inclusive-guyane',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceGuyane,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-ecole-inclusive-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // GUADELOUPE
    {
      id: 'map-france-ecole-inclusive-guadeloupe',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceGuadeloupe,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-ecole-inclusive-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // MARTINIQUE
    {
      id: 'map-france-ecole-inclusive-martinique',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceMartinique,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-ecole-inclusive-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // LA REUNION
    {
      id: 'map-france-ecole-inclusive-la-reunion',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceReunion,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-ecole-inclusive-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    },
    // MAYOTTE
    {
      id: 'map-france-ecole-inclusive-mayotte',
      isActivated: true,
      titleI18n: 'maps.map01.title',

      map_options: COMMON_OPTIONS.FranceMayotte,

      maps_visibility: {
        is_activated: false
      },

      copySettingsFrom: [
        {
          copyFromId: 'map-france-ecole-inclusive-metro',
          fieldsToCopy: [
            'sources',
            'maps',
            'layers',
            'maps_visibility'
          ]
        }
      ]
    }

  ]
}
