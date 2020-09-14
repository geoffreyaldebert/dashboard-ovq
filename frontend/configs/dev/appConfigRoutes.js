const COMMONN_URL_ARGS = {
  objectArgs: [
    'datasetid',
    'field',
    'value'
  ],
  mapArgs: [
    'zoom',
    'centerlat',
    'centerlng',
    'selected'
  ]
}
const COMMON_TARGETS = {

  // LIBELLES
  setLibelleRegion: {
    ifQuery: [{ field: 'datasetid', val: 'regions' }],
    fromQueryKey: 'code',
    fromStoreData: 'initData',
    fromDatasetId: 'taxo-regions',
    fromDatasetKey: 'reg',
    fromDatasetField: 'libelle',
    targetSpecialStoreId: 'levelname'
  },
  setLibelleDepartement: {
    ifQuery: [{ field: 'datasetid', val: 'departements' }],
    fromQueryKey: 'code',
    fromStoreData: 'initData',
    fromDatasetId: 'taxo-departements',
    fromDatasetKey: 'dep',
    fromDatasetField: 'libelle',
    targetSpecialStoreId: 'levelname'
  },

  // OBJECTS - REGIONS
  setObjectsRegionsPlanVelo: [
    {
      ifQuery: [{ field: 'datasetid', val: 'regions' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'regions-plan-velo-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: 'value',
      targetSpecialStoreId: 'value'
    },
    {
      ifQuery: [{ field: 'datasetid', val: 'regions' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'regions-plan-velo-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: undefined,
      targetSpecialStoreId: 'focusObject'
    }
  ],
  setObjectsRegionsAsile: [
    {
      ifQuery: [{ field: 'datasetid', val: 'regions' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'regions-asile-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: 'value',
      targetSpecialStoreId: 'value'
    },
    {
      ifQuery: [{ field: 'datasetid', val: 'regions' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'regions-asile-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: undefined,
      targetSpecialStoreId: 'focusObject'
    }
  ],
  setObjectsRegionsPlanLogement: [
    {
      ifQuery: [{ field: 'datasetid', val: 'regions' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'regions-plan-logement-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: 'value',
      targetSpecialStoreId: 'value'
    },
    {
      ifQuery: [{ field: 'datasetid', val: 'regions' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'regions-plan-logement-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: undefined,
      targetSpecialStoreId: 'focusObject'
    }
  ],
  setObjectsRegionsTHD: [
    {
      ifQuery: [{ field: 'datasetid', val: 'regions' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'regions-thd-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: 'value',
      targetSpecialStoreId: 'value'
    },
    {
      ifQuery: [{ field: 'datasetid', val: 'regions' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'regions-thd-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: undefined,
      targetSpecialStoreId: 'focusObject'
    }
  ],
  setObjectsRegionsApprentissage: [
    {
      ifQuery: [{ field: 'datasetid', val: 'regions' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'regions-apprentissage-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: 'value',
      targetSpecialStoreId: 'value'
    },
    {
      ifQuery: [{ field: 'datasetid', val: 'regions' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'regions-apprentissage-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: undefined,
      targetSpecialStoreId: 'focusObject'
    }
  ],
  setObjectsRegionsEcoleInclusive: [
    {
      ifQuery: [{ field: 'datasetid', val: 'regions' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'regions-ecole-inclusive-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: 'value',
      targetSpecialStoreId: 'value'
    },
    {
      ifQuery: [{ field: 'datasetid', val: 'regions' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'regions-ecole-inclusive-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: undefined,
      targetSpecialStoreId: 'focusObject'
    }
  ],

  // OBJECTS - DEPARTEMENTS
  setObjectsDepartementsPlanVelo: [
    {
      ifQuery: [{ field: 'datasetid', val: 'departements' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'departements-plan-velo-raw',
      fromDatasetKey: 'dep',
      fromDatasetField: 'value',
      targetSpecialStoreId: 'value'
    },
    {
      ifQuery: [{ field: 'datasetid', val: 'departements' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'departements-plan-velo-raw',
      fromDatasetKey: 'dep',
      fromDatasetField: undefined,
      targetSpecialStoreId: 'focusObject'
    }
  ],
  setObjectsDepartementsAsile: [
    {
      ifQuery: [{ field: 'datasetid', val: 'departements' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'departements-asile-raw',
      fromDatasetKey: 'dep',
      fromDatasetField: 'value',
      targetSpecialStoreId: 'value'
    },
    {
      ifQuery: [{ field: 'datasetid', val: 'departements' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'departements-asile-raw',
      fromDatasetKey: 'dep',
      fromDatasetField: undefined,
      targetSpecialStoreId: 'focusObject'
    }
  ],



  setObjectsDepartementsPlanLogement: [
    {
      ifQuery: [{ field: 'datasetid', val: 'departements' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'departements-plan-logement-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: 'value',
      targetSpecialStoreId: 'value'
    },
    {
      ifQuery: [{ field: 'datasetid', val: 'departements' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'departements-plan-logement-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: undefined,
      targetSpecialStoreId: 'focusObject'
    }
  ],
  setObjectsDepartementsTHD: [
    {
      ifQuery: [{ field: 'datasetid', val: 'departements' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'departements-thd-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: 'value',
      targetSpecialStoreId: 'value'
    },
    {
      ifQuery: [{ field: 'datasetid', val: 'departements' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'departements-thd-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: undefined,
      targetSpecialStoreId: 'focusObject'
    }
  ],
  setObjectsDepartementsApprentissage: [
    {
      ifQuery: [{ field: 'datasetid', val: 'departements' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'departements-apprentissage-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: 'value',
      targetSpecialStoreId: 'value'
    },
    {
      ifQuery: [{ field: 'datasetid', val: 'departements' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'departements-apprentissage-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: undefined,
      targetSpecialStoreId: 'focusObject'
    }
  ],
  setObjectsDepartementsEcoleInclusive: [
    {
      ifQuery: [{ field: 'datasetid', val: 'departements' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'departements-ecole-inclusive-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: 'value',
      targetSpecialStoreId: 'value'
    },
    {
      ifQuery: [{ field: 'datasetid', val: 'departements' }],
      fromQueryKey: 'code',
      fromStoreData: 'initData',
      fromDatasetId: 'departements-ecole-inclusive-raw',
      fromDatasetKey: 'reg',
      fromDatasetField: undefined,
      targetSpecialStoreId: 'focusObject'
    }
  ],



  // SET MAP ZOOM
  setMapZoomByCenter: {
    ifQuery: [{ field: 'datasetid', val: 'departements' }],
    zoomBy: 'centerAndZoom',
    zoomField: 'zoom',
    centerLngField: 'centerlng',
    centerLatField: 'centerlat'
  },
  setMapZoomRegions: {
    ifQuery: [{ field: 'datasetid', val: 'regions' }],
    zoomBy: 'polygon',
    sourceField: 'datasetid',
    propField: 'value',
    propNameField: 'field'
  },
  setMapZoomDepartements: {
    ifQuery: [{ field: 'datasetid', val: 'departements' }],
    zoomBy: 'polygon',
    sourceField: 'datasetid',
    propField: 'value',
    propNameField: 'field'
  },

  // SET SELECTED POLYGONS
  setSelectedPolygons: {
    ifQuery: undefined,
    selectedField: 'selected',
    selectedSeparator: ',',
    selectedObjectSeparator: ':'
  }

}
const COMMON_URL_FOCUS = {
  setFocusObjectsPlanVelo: {
    urlArgs: [
      ...COMMONN_URL_ARGS.objectArgs,
      ...COMMONN_URL_ARGS.mapArgs
    ],
    functions: [
      {
        funcName: 'updateDataStore',
        help: 'set store/data/specialStore',
        funcParams: {
          targets: [
            COMMON_TARGETS.setLibelleRegion,
            COMMON_TARGETS.setLibelleDepartement,
            ...COMMON_TARGETS.setObjectsRegionsPlanVelo,
            ...COMMON_TARGETS.setObjectsDepartementsPlanVelo
          ]
        }
      },
      {
        funcName: 'goToPolygon',
        help: 'set map zoom',
        funcParams: {
          targets: [
            COMMON_TARGETS.setMapZoomRegions,
            // COMMON_TARGETS.setMapZoomDepartements,
            COMMON_TARGETS.setMapZoomByCenter
          ]
        }
      },
      {
        funcName: 'toggleSelected',
        help: 'set selected polygon on map',
        funcParams: {
          targets: [
            COMMON_TARGETS.setSelectedPolygons
          ]
        }
      }
    ]
  },
  setFocusObjectsAsile: {
    urlArgs: [
      ...COMMONN_URL_ARGS.objectArgs,
      ...COMMONN_URL_ARGS.mapArgs
    ],
    functions: [
      {
        funcName: 'updateDataStore',
        help: 'set store/data/specialStore',
        funcParams: {
          targets: [
            COMMON_TARGETS.setLibelleRegion,
            COMMON_TARGETS.setLibelleDepartement,
            ...COMMON_TARGETS.setObjectsRegionsAsile,
            ...COMMON_TARGETS.setObjectsDepartementsAsile
          ]
        }
      },
      {
        funcName: 'goToPolygon',
        help: 'set map zoom',
        funcParams: {
          targets: [
            COMMON_TARGETS.setMapZoomRegions,
            // COMMON_TARGETS.setMapZoomDepartements,
            COMMON_TARGETS.setMapZoomByCenter
          ]
        }
      },
      {
        funcName: 'toggleSelected',
        help: 'set selected polygon on map',
        funcParams: {
          targets: [
            COMMON_TARGETS.setSelectedPolygons
          ]
        }
      }
    ]
  },
  setFocusObjectsPlanLogement: {
    urlArgs: [
      ...COMMONN_URL_ARGS.objectArgs,
      ...COMMONN_URL_ARGS.mapArgs
    ],
    functions: [
      {
        funcName: 'updateDataStore',
        help: 'set store/data/specialStore',
        funcParams: {
          targets: [
            COMMON_TARGETS.setLibelleRegion,
            COMMON_TARGETS.setLibelleDepartement,
            ...COMMON_TARGETS.setObjectsRegionsPlanLogement,
            ...COMMON_TARGETS.setObjectsDepartementsPlanLogement
          ]
        }
      },
      {
        funcName: 'goToPolygon',
        help: 'set map zoom',
        funcParams: {
          targets: [
            COMMON_TARGETS.setMapZoomRegions,
            // COMMON_TARGETS.setMapZoomDepartements,
            COMMON_TARGETS.setMapZoomByCenter
          ]
        }
      },
      {
        funcName: 'toggleSelected',
        help: 'set selected polygon on map',
        funcParams: {
          targets: [
            COMMON_TARGETS.setSelectedPolygons
          ]
        }
      }
    ]
  },
  setFocusObjectsTHD: {
    urlArgs: [
      ...COMMONN_URL_ARGS.objectArgs,
      ...COMMONN_URL_ARGS.mapArgs
    ],
    functions: [
      {
        funcName: 'updateDataStore',
        help: 'set store/data/specialStore',
        funcParams: {
          targets: [
            COMMON_TARGETS.setLibelleRegion,
            COMMON_TARGETS.setLibelleDepartement,
            ...COMMON_TARGETS.setObjectsRegionsTHD,
            ...COMMON_TARGETS.setObjectsDepartementsTHD
          ]
        }
      },
      {
        funcName: 'goToPolygon',
        help: 'set map zoom',
        funcParams: {
          targets: [
            COMMON_TARGETS.setMapZoomRegions,
            // COMMON_TARGETS.setMapZoomDepartements,
            COMMON_TARGETS.setMapZoomByCenter
          ]
        }
      },
      {
        funcName: 'toggleSelected',
        help: 'set selected polygon on map',
        funcParams: {
          targets: [
            COMMON_TARGETS.setSelectedPolygons
          ]
        }
      }
    ]
  },
  setFocusObjectsApprentissage: {
    urlArgs: [
      ...COMMONN_URL_ARGS.objectArgs,
      ...COMMONN_URL_ARGS.mapArgs
    ],
    functions: [
      {
        funcName: 'updateDataStore',
        help: 'set store/data/specialStore',
        funcParams: {
          targets: [
            COMMON_TARGETS.setLibelleRegion,
            COMMON_TARGETS.setLibelleDepartement,
            ...COMMON_TARGETS.setObjectsRegionsApprentissage,
            ...COMMON_TARGETS.setObjectsDepartementsApprentissage
          ]
        }
      },
      {
        funcName: 'goToPolygon',
        help: 'set map zoom',
        funcParams: {
          targets: [
            COMMON_TARGETS.setMapZoomRegions,
            // COMMON_TARGETS.setMapZoomDepartements,
            COMMON_TARGETS.setMapZoomByCenter
          ]
        }
      },
      {
        funcName: 'toggleSelected',
        help: 'set selected polygon on map',
        funcParams: {
          targets: [
            COMMON_TARGETS.setSelectedPolygons
          ]
        }
      }
    ]
  },
  setFocusObjectsEcoleInclusive: {
    urlArgs: [
      ...COMMONN_URL_ARGS.objectArgs,
      ...COMMONN_URL_ARGS.mapArgs
    ],
    functions: [
      {
        funcName: 'updateDataStore',
        help: 'set store/data/specialStore',
        funcParams: {
          targets: [
            COMMON_TARGETS.setLibelleRegion,
            COMMON_TARGETS.setLibelleDepartement,
            ...COMMON_TARGETS.setObjectsRegionsEcoleInclusive,
            ...COMMON_TARGETS.setObjectsDepartementsEcoleInclusive
          ]
        }
      },
      {
        funcName: 'goToPolygon',
        help: 'set map zoom',
        funcParams: {
          targets: [
            COMMON_TARGETS.setMapZoomRegions,
            // COMMON_TARGETS.setMapZoomDepartements,
            COMMON_TARGETS.setMapZoomByCenter
          ]
        }
      },
      {
        funcName: 'toggleSelected',
        help: 'set selected polygon on map',
        funcParams: {
          targets: [
            COMMON_TARGETS.setSelectedPolygons
          ]
        }
      }
    ]
  }
}

export const configAppRoutes = {
  help: 'this file contains the setup for the routes',

  // ROUTES / PAGES
  routes: [

    // ============================================================= //
    // HOME / Plan Velo
    // ============================================================= //
    {
      id: 'plan-velo',
      name: 'homepage',
      help: 'route home viewfor ',
      title: { fr: '' },
      titleI18n: 'routes.home.title',
      urls: ['/plan-velo', '/plan-velo/'],
      sourcesIds: [
        'national-plan-velo-raw',
        'regions-plan-velo-raw',
        'departements-plan-velo-raw'
      ],
      rawHtml: undefined,
      navbarFooter: {
        activated: true,
        settings: {
          id: 'navbar-footer-01'
        }
      },
      pageRows: [
        {
          id: 'row1',
          rowNumber: 1,
          activated: true,
          help: '',
          columns: [
            {
              id: 'col1',
              colName: 'Numbers and tables',
              activated: true,
              colClass: 'col-12 col-sm-12 col-md-6 col-lg-5 col-xl-4',
              hasScrollbar: true,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'text',
                  activated: true,
                  smallScreenVerticalOrder: 1,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'text-plan-velo-title',
                    containerClass: 'pt-2 pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'globalButtons',
                  activated: true,
                  smallScreenVerticalOrder: 1,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'global-button-plan-velo',
                    containerClass: 'py-0 my-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-velo-1',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-velo-2',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-velo-3',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-velo-4',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-velo-5',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-velo-6',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-velo-7',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-velo-8',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-velo-9',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-velo-10',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-velo-11',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-velo-12',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-velo-13',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                }
              ]
            },

            {
              id: 'col2',
              colName: 'main map',
              activated: true,
              colClass: 'col-12 col-sm-12 col-md-6 col-lg-7 col-xl-8',
              hasScrollbar: false,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'map',
                  activated: true,
                  smallScreenVerticalOrder: 2,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'map-france-plan-velo-metro',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                }
              ]
            }
          ]
        },
        {
          id: 'row2',
          rowNumber: 2,
          activated: false,
          help: '',
          columns: [
            {
              id: 'col1',
              colName: 'text',
              activated: true,
              colClass: '',
              hasScrollbar: false,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'text',
                  activated: true,
                  smallScreenVerticalOrder: undefined,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'text-03',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: false
                  }
                }
              ]
            }
          ]
        }
      ],
      setUpRouteViews: COMMON_URL_FOCUS.setFocusObjectsPlanVelo
    },


    // ============================================================= //
    // Asile
    // ============================================================= //
    {
      id: 'asile',
      name: 'asile page',
      help: 'route view for asile dataset',
      title: { fr: '' },
      titleI18n: 'routes.asile.title',
      urls: ['/','/asile', '/asile/'],
      sourcesIds: [
        'national-asile-raw',
        'regions-asile-raw',
        'departements-asile-raw'
      ],
      rawHtml: undefined,
      navbarFooter: {
        activated: true,
        settings: {
          id: 'navbar-footer-01'
        }
      },
      pageRows: [
        {
          id: 'row1',
          rowNumber: 1,
          activated: true,
          help: '',
          columns: [
            {
              id: 'col1',
              colName: 'Numbers and tables',
              activated: true,
              colClass: 'col-12 col-sm-12 col-md-6 col-lg-5 col-xl-4',
              hasScrollbar: true,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'text',
                  activated: true,
                  smallScreenVerticalOrder: 1,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'text-asile-title',
                    containerClass: 'pt-2 pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'globalButtons',
                  activated: true,
                  smallScreenVerticalOrder: 1,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'global-button-asile',
                    containerClass: 'py-0 my-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-asile-1',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-asile-2',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                }
              ]
            },

            {
              id: 'col2',
              colName: 'main map',
              activated: true,
              colClass: 'col-12 col-sm-12 col-md-6 col-lg-7 col-xl-8',
              hasScrollbar: false,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'map',
                  activated: true,
                  smallScreenVerticalOrder: 2,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'map-france-asile-metro',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                }
              ]
            }
          ]
        },
        {
          id: 'row2',
          rowNumber: 2,
          activated: false,
          help: '',
          columns: [
            {
              id: 'col1',
              colName: 'text',
              activated: true,
              colClass: '',
              hasScrollbar: false,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'text',
                  activated: true,
                  smallScreenVerticalOrder: undefined,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'text-03',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: false
                  }
                }
              ]
            }
          ]
        }
      ],
      setUpRouteViews: COMMON_URL_FOCUS.setFocusObjectsAsile
    },


    // ============================================================= //
    // Plan Logement
    // ============================================================= //
    {
      id: 'plan-logemet',
      name: 'plan logement page',
      help: 'route view for plan logement dataset',
      title: { fr: '' },
      titleI18n: 'routes.plan-logement.title',
      urls: ['/plan-logement', '/plan-logement/'],
      sourcesIds: [
        'national-plan-logement-raw',
        'regions-plan-logement-raw',
        'departements-plan-logement-raw'
      ],
      rawHtml: undefined,
      navbarFooter: {
        activated: true,
        settings: {
          id: 'navbar-footer-01'
        }
      },
      pageRows: [
        {
          id: 'row1',
          rowNumber: 1,
          activated: true,
          help: '',
          columns: [
            {
              id: 'col1',
              colName: 'Numbers and tables',
              activated: true,
              colClass: 'col-12 col-sm-12 col-md-6 col-lg-5 col-xl-4',
              hasScrollbar: true,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'text',
                  activated: true,
                  smallScreenVerticalOrder: 1,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'text-plan-logement-title',
                    containerClass: 'pt-2 pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'globalButtons',
                  activated: true,
                  smallScreenVerticalOrder: 1,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'global-button-plan-logement',
                    containerClass: 'py-0 my-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-logement-1',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-logement-2',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-logement-3',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-logement-4',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-logement-5',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-logement-6',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-plan-logement-7',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                }
              ]
            },

            {
              id: 'col2',
              colName: 'main map',
              activated: true,
              colClass: 'col-12 col-sm-12 col-md-6 col-lg-7 col-xl-8',
              hasScrollbar: false,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'map',
                  activated: true,
                  smallScreenVerticalOrder: 2,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'map-france-plan-logement-metro',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                }
              ]
            }
          ]
        },
        {
          id: 'row2',
          rowNumber: 2,
          activated: false,
          help: '',
          columns: [
            {
              id: 'col1',
              colName: 'text',
              activated: true,
              colClass: '',
              hasScrollbar: false,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'text',
                  activated: true,
                  smallScreenVerticalOrder: undefined,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'text-03',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: false
                  }
                }
              ]
            }
          ]
        }
      ],
      setUpRouteViews: COMMON_URL_FOCUS.setFocusObjectsPlanLogement
    },

    // ============================================================= //
    // Très Haut Débit
    // ============================================================= //
    {
      id: 'thd',
      name: 'thd page',
      help: 'route view for thd dataset',
      title: { fr: '' },
      titleI18n: 'routes.thd.title',
      urls: ['/thd', '/thd/'],
      sourcesIds: [
        'national-thd-raw',
        'regions-thd-raw',
        'departements-thd-raw'
      ],
      rawHtml: undefined,
      navbarFooter: {
        activated: true,
        settings: {
          id: 'navbar-footer-01'
        }
      },
      pageRows: [
        {
          id: 'row1',
          rowNumber: 1,
          activated: true,
          help: '',
          columns: [
            {
              id: 'col1',
              colName: 'Numbers and tables',
              activated: true,
              colClass: 'col-12 col-sm-12 col-md-6 col-lg-5 col-xl-4',
              hasScrollbar: true,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'text',
                  activated: true,
                  smallScreenVerticalOrder: 1,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'text-thd-title',
                    containerClass: 'pt-2 pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'globalButtons',
                  activated: true,
                  smallScreenVerticalOrder: 1,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'global-button-thd',
                    containerClass: 'py-0 my-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-thd-1',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-thd-2',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                  {
                    component: 'apexchart',
                    activated: true,
                    smallScreenVerticalOrder: 4,
                    justify: 'center',
                    align: 'center',
                    settings: {
                      id: 'apexchart-thd-3',
                      containerClass: 'mt-4 pt-3 pb-0',
                      mobileIsVisibleDefault: false,
                      desktopIsVisibleDefault: true
                    }
                }
              ]
            },

            {
              id: 'col2',
              colName: 'main map',
              activated: true,
              colClass: 'col-12 col-sm-12 col-md-6 col-lg-7 col-xl-8',
              hasScrollbar: false,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'map',
                  activated: true,
                  smallScreenVerticalOrder: 2,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'map-france-thd-metro',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                }
              ]
            }
          ]
        },
        {
          id: 'row2',
          rowNumber: 2,
          activated: false,
          help: '',
          columns: [
            {
              id: 'col1',
              colName: 'text',
              activated: true,
              colClass: '',
              hasScrollbar: false,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'text',
                  activated: true,
                  smallScreenVerticalOrder: undefined,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'text-03',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: false
                  }
                }
              ]
            }
          ]
        }
      ],
      setUpRouteViews: COMMON_URL_FOCUS.setFocusObjectsTHD
    },

    // ============================================================= //
    // Apprentissage
    // ============================================================= //
    {
      id: 'asile',
      name: 'apprentissage page',
      help: 'route view for apprentissage dataset',
      title: { fr: '' },
      titleI18n: 'routes.apprentissage.title',
      urls: ['/apprentissage', '/apprentissage/'],
      sourcesIds: [
        'national-apprentissage-raw',
        'regions-apprentissage-raw',
        'departements-apprentissage-raw'
      ],
      rawHtml: undefined,
      navbarFooter: {
        activated: true,
        settings: {
          id: 'navbar-footer-01'
        }
      },
      pageRows: [
        {
          id: 'row1',
          rowNumber: 1,
          activated: true,
          help: '',
          columns: [
            {
              id: 'col1',
              colName: 'Numbers and tables',
              activated: true,
              colClass: 'col-12 col-sm-12 col-md-6 col-lg-5 col-xl-4',
              hasScrollbar: true,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'text',
                  activated: true,
                  smallScreenVerticalOrder: 1,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'text-apprentissage-title',
                    containerClass: 'pt-2 pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'globalButtons',
                  activated: true,
                  smallScreenVerticalOrder: 1,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'global-button-apprentissage',
                    containerClass: 'py-0 my-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-apprentissage-1',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-apprentissage-2',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-apprentissage-3',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-apprentissage-4',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-apprentissage-5',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-apprentissage-6',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-apprentissage-7',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-apprentissage-8',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                }
              ]
            },

            {
              id: 'col2',
              colName: 'main map',
              activated: true,
              colClass: 'col-12 col-sm-12 col-md-6 col-lg-7 col-xl-8',
              hasScrollbar: false,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'map',
                  activated: true,
                  smallScreenVerticalOrder: 2,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'map-france-apprentissage-metro',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                }
              ]
            }
          ]
        },
        {
          id: 'row2',
          rowNumber: 2,
          activated: false,
          help: '',
          columns: [
            {
              id: 'col1',
              colName: 'text',
              activated: true,
              colClass: '',
              hasScrollbar: false,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'text',
                  activated: true,
                  smallScreenVerticalOrder: undefined,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'text-03',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: false
                  }
                }
              ]
            }
          ]
        }
      ],
      setUpRouteViews: COMMON_URL_FOCUS.setFocusObjectsApprentissage
    },

    // ============================================================= //
    // ecole-inclusive
    // ============================================================= //
    {
      id: 'ecole-inclusive',
      name: 'ecole-inclusive page',
      help: 'route view for ecole-inclusive dataset',
      title: { fr: '' },
      titleI18n: 'routes.ecole-inclusive.title',
      urls: ['/ecole-inclusive', '/ecole-inclusive/'],
      sourcesIds: [
        'national-ecole-inclusive-raw',
        'regions-ecole-inclusive-raw',
        'departements-ecole-inclusive-raw'
      ],
      rawHtml: undefined,
      navbarFooter: {
        activated: true,
        settings: {
          id: 'navbar-footer-01'
        }
      },
      pageRows: [
        {
          id: 'row1',
          rowNumber: 1,
          activated: true,
          help: '',
          columns: [
            {
              id: 'col1',
              colName: 'Numbers and tables',
              activated: true,
              colClass: 'col-12 col-sm-12 col-md-6 col-lg-5 col-xl-4',
              hasScrollbar: true,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'text',
                  activated: true,
                  smallScreenVerticalOrder: 1,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'text-ecole-inclusive-title',
                    containerClass: 'pt-2 pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'globalButtons',
                  activated: true,
                  smallScreenVerticalOrder: 1,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'global-button-ecole-inclusive',
                    containerClass: 'py-0 my-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-ecole-inclusive-1',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-ecole-inclusive-2',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-ecole-inclusive-3',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-ecole-inclusive-4',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-ecole-inclusive-5',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-ecole-inclusive-6',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-ecole-inclusive-7',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-ecole-inclusive-8',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-ecole-inclusive-9',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 4,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-ecole-inclusive-10',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: true
                  }
                }
              ]
            },

            {
              id: 'col2',
              colName: 'main map',
              activated: true,
              colClass: 'col-12 col-sm-12 col-md-6 col-lg-7 col-xl-8',
              hasScrollbar: false,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'map',
                  activated: true,
                  smallScreenVerticalOrder: 2,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'map-france-ecole-inclusive-metro',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                }
              ]
            }
          ]
        },
        {
          id: 'row2',
          rowNumber: 2,
          activated: false,
          help: '',
          columns: [
            {
              id: 'col1',
              colName: 'text',
              activated: true,
              colClass: '',
              hasScrollbar: false,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'text',
                  activated: true,
                  smallScreenVerticalOrder: undefined,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'text-03',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: false,
                    desktopIsVisibleDefault: false
                  }
                }
              ]
            }
          ]
        }
      ],
      setUpRouteViews: COMMON_URL_FOCUS.setFocusObjectsEcoleInclusive
    },
    // ============================================================= //
    // ============================================================= //
    // ============================================================= //

    // ONLY MAP
    {
      id: 'map',
      name: 'map',
      help: 'route map viewfor ',
      title: { fr: '' },
      titleI18n: 'routes.map.title',
      urls: ['/map'],
      rawHtml: undefined,
      navbarFooter: {
        activated: true,
        settings: {
          id: 'navbar-footer-01'
        }
      },
      pageRows: [
        {
          id: 'row1',
          rowNumber: 1,
          activated: true,
          help: '',
          columns: [
            {
              id: 'col1',
              colName: 'map',
              activated: true,
              colClass: '',
              hasScrollbar: true,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'text',
                  activated: true,
                  smallScreenVerticalOrder: undefined,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'text-01',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'globalButtons',
                  activated: true,
                  smallScreenVerticalOrder: 1,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'global-button-01',
                    containerClass: 'pt-0 mt-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'numbers',
                  activated: true,
                  smallScreenVerticalOrder: undefined,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'numbers-01',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'map',
                  activated: true,
                  smallScreenVerticalOrder: undefined,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'map-france-metro',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                }
              ]
            }
          ]
        }
      ]
    },

    // ONLY CHARTS
    {
      id: 'charts',
      name: 'charts',
      help: 'route for charts view',
      title: { fr: '' },
      titleI18n: 'routes.charts.title',
      urls: ['/charts'],
      rawHtml: undefined,
      navbarFooter: {
        activated: true,
        settings: {
          id: 'navbar-footer-01'
        }
      },
      pageRows: [
        {
          id: 'row1',
          rowNumber: 1,
          activated: true,
          help: '',
          columns: [
            {
              id: 'col1',
              colName: 'chart',
              activated: true,
              colClass: '',
              hasScrollbar: true,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'text',
                  activated: true,
                  smallScreenVerticalOrder: undefined,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'text-01',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'globalButtons',
                  activated: true,
                  smallScreenVerticalOrder: 1,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'global-button-01',
                    containerClass: 'pt-0 mt-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'numbers',
                  activated: true,
                  smallScreenVerticalOrder: undefined,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'numbers-01',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: undefined,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-01',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'apexchart',
                  activated: true,
                  smallScreenVerticalOrder: 5,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'apexchart-01bis',
                    containerClass: 'mt-4 pt-3 pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                },
                {
                  component: 'text',
                  activated: true,
                  smallScreenVerticalOrder: 1,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'text-02',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                }
              ]
            }
          ]
        }
      ]
    },

    // ONLY TABLE
    {
      id: 'table',
      name: 'table',
      help: 'route for table view',
      title: { fr: '' },
      titleI18n: 'routes.table.title',
      urls: ['/table'],
      rawHtml: undefined,
      navbarFooter: {
        activated: true,
        settings: {
          id: 'navbar-footer-01'
        }
      },
      pageRows: [
        {
          id: 'row1',
          rowNumber: 1,
          activated: true,
          help: '',
          columns: [
            {
              id: 'col1',
              colName: 'table',
              activated: true,
              colClass: '',
              hasScrollbar: false,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'table',
                  activated: true,
                  smallScreenVerticalOrder: undefined,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'table-01',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                }
              ]
            }
          ]
        }
      ]
    },

    // ONLY RAW DATA
    {
      id: 'rawData',
      name: 'rawData',
      help: 'route for rawData view',
      title: { fr: '' },
      titleI18n: 'routes.rawData.title',
      urls: ['/rawData'],
      rawHtml: undefined,
      navbarFooter: {
        activated: true,
        settings: {
          id: 'navbar-footer-01',
          containerClass: '',
          mobileIsVisibleDefault: true,
          desktopIsVisibleDefault: true
        }
      },
      pageRows: [
        {
          id: 'row1',
          rowNumber: 1,
          activated: true,
          help: '',
          columns: [
            {
              id: 'col1',
              colName: 'rawData',
              activated: true,
              colClass: '',
              hasScrollbar: false,
              smallScreenVerticalOrder: undefined,
              colRows: [
                {
                  component: 'rawData',
                  activated: true,
                  smallScreenVerticalOrder: undefined,
                  justify: 'center',
                  align: 'center',
                  settings: {
                    id: 'chart-01',
                    containerClass: 'pb-0',
                    mobileIsVisibleDefault: true,
                    desktopIsVisibleDefault: true
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
