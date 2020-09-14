const COMMON_FUNCTIONS = {
  resetUrlPath: {
    funcName: 'cleanUrlPath',
    funcParams: {
    //   targets: [
    //     {
    //       from: undefined,
    //       urlArgs: {
    //         // datastore: 'initData',
    //         datasetid: 'regions',
    //         field: 'code',
    //         value: 'national'
    //       }
    //     }
    //   ]
    }
  },
  resetFitToPolygon: {
    funcName: 'resetFitToPolygon',
    funcParams: {}
  },
  resetSelectedPolygons: {
    funcName: 'resetSelectedPolygons',
    funcParams: {}
  }
}
const COMMONS_TARGETS = {
  resetLevelName: {
    from: 'store',
    fromPropKey: undefined,
    fromPropValue: 'national',
    fromStoreData: 'initData',
    fromDatasetId: 'infos',
    fromDatasetKey: 'switchers',
    fromDatasetField: undefined,
    targetSpecialStoreId: 'levelname',
    updatePath: true
  },
  resetMapZoom: {
    from: 'store',
    fromPropKey: undefined,
    fromPropValue: 8,
    fromStoreData: undefined,
    fromDatasetId: undefined,
    fromDatasetKey: undefined,
    fromDatasetField: undefined,
    targetSpecialStoreId: undefined
  }
}

export const configAppGlobalButtons = {
  help: 'this file contains the setup for the numbers components',

  // GLOBAL BUTTONS

  settingsIds: [
    // ============================================================= //
    // === BTN / Plan Velo
    // ============================================================= //
    {
      id: 'global-button-plan-velo',
      help: '',
      title: { fr: '' },
      titleI18n: 'buttons.button01.title',
      dividers: {
        before: false,
        after: false
      },

      btnsRowClass: 'align-center justify-center',
      btnsRowClassMobile: 'mt-0 pt-0 mb-2',

      componentButtons: [
        {
          id: 'first-button',
          title: { fr: 'retour au niveau national' },
          titleI18n: 'buttons.button01.title',

          btnClass: 'justify-center btn-gouv',

          block: false,
          icon: undefined,
          outlined: true,
          fab: false,
          color: 'primary',
          large: false,
          small: false,
          dark: false,
          tile: true,
          rounded: false,
          disabled: false,

          activatedIf: undefined,
          functions: [
            {
              funcName: 'resetStore',
              funcParams: {
                targets: [
                  COMMONS_TARGETS.resetLevelName,
                  {
                    from: 'store',
                    fromPropKey: undefined,
                    fromPropValue: undefined,
                    fromStoreData: 'initData',
                    fromDatasetId: 'national-plan-velo-raw',
                    fromDatasetKey: undefined,
                    fromDatasetIndex: 0,
                    fromDatasetField: 'value',
                    targetSpecialStoreId: 'value'
                  },
                  {
                    from: 'store',
                    fromPropKey: undefined,
                    fromPropValue: undefined,
                    fromStoreData: 'initData',
                    fromDatasetId: 'national-plan-velo-raw',
                    fromDatasetKey: undefined,
                    fromDatasetIndex: 0,
                    fromDatasetField: undefined,
                    targetSpecialStoreId: 'focusObject'
                  }
                ]
              }
            },
            {
              funcName: 'resetMapZoom',
              funcParams: {
                targets: [
                  COMMONS_TARGETS.resetMapZoom
                ]
              }
            },
            COMMON_FUNCTIONS.resetUrlPath,
            COMMON_FUNCTIONS.resetFitToPolygon,
            COMMON_FUNCTIONS.resetSelectedPolygons
          ],

          hideIfs: [
            { specialStoreId: 'levelname', value: 'échelle nationale' }
          ]
        }
      ]
    },

    // ============================================================= //
    // === BTN : Asile
    // ============================================================= //
    {
      id: 'global-button-asile',
      help: '',
      title: { fr: '' },
      titleI18n: 'buttons.button01.title',
      dividers: {
        before: false,
        after: false
      },

      btnsRowClass: 'align-center justify-center',
      btnsRowClassMobile: 'mt-0 pt-0 mb-2',

      componentButtons: [
        {
          id: 'first-button',
          title: { fr: 'retour au niveau national' },
          titleI18n: 'buttons.button01.title',

          btnClass: 'justify-center btn-gouv',

          block: false,
          icon: undefined,
          outlined: true,
          fab: false,
          color: 'primary',
          large: false,
          small: false,
          dark: false,
          tile: true,
          rounded: false,
          disabled: false,

          activatedIf: undefined,
          functions: [
            {
              funcName: 'resetStore',
              funcParams: {
                targets: [
                  COMMONS_TARGETS.resetLevelName,
                  {
                    from: 'store',
                    fromPropKey: undefined,
                    fromPropValue: undefined,
                    fromStoreData: 'initData',
                    fromDatasetId: 'national-asile-raw',
                    fromDatasetKey: undefined,
                    fromDatasetIndex: 0,
                    fromDatasetField: 'value',
                    targetSpecialStoreId: 'value'
                  },
                  {
                    from: 'store',
                    fromPropKey: undefined,
                    fromPropValue: undefined,
                    fromStoreData: 'initData',
                    fromDatasetId: 'national-asile-raw',
                    fromDatasetKey: undefined,
                    fromDatasetIndex: 0,
                    fromDatasetField: undefined,
                    targetSpecialStoreId: 'focusObject'
                  }
                ]
              }
            },
            {
              funcName: 'resetMapZoom',
              funcParams: {
                targets: [
                  COMMONS_TARGETS.resetMapZoom
                ]
              }
            },
            COMMON_FUNCTIONS.resetUrlPath,
            COMMON_FUNCTIONS.resetFitToPolygon,
            COMMON_FUNCTIONS.resetSelectedPolygons
          ],

          hideIfs: [
            { specialStoreId: 'levelname', value: 'échelle nationale' }
          ]
        }
      ]
    },

    // ============================================================= //
    // === BTN : Plan Logement
    // ============================================================= //
    {
      id: 'global-button-plan-logement',
      help: '',
      title: { fr: '' },
      titleI18n: 'buttons.button01.title',
      dividers: {
        before: false,
        after: false
      },

      btnsRowClass: 'align-center justify-center',
      btnsRowClassMobile: 'mt-0 pt-0 mb-2',

      componentButtons: [
        {
          id: 'first-button',
          title: { fr: 'retour au niveau national' },
          titleI18n: 'buttons.button01.title',

          btnClass: 'justify-center btn-gouv',

          block: false,
          icon: undefined,
          outlined: true,
          fab: false,
          color: 'primary',
          large: false,
          small: false,
          dark: false,
          tile: true,
          rounded: false,
          disabled: false,

          activatedIf: undefined,
          functions: [
            {
              funcName: 'resetStore',
              funcParams: {
                targets: [
                  COMMONS_TARGETS.resetLevelName,
                  {
                    from: 'store',
                    fromPropKey: undefined,
                    fromPropValue: undefined,
                    fromStoreData: 'initData',
                    fromDatasetId: 'national-plan-logement-raw',
                    fromDatasetKey: undefined,
                    fromDatasetIndex: 0,
                    fromDatasetField: 'value',
                    targetSpecialStoreId: 'value'
                  },
                  {
                    from: 'store',
                    fromPropKey: undefined,
                    fromPropValue: undefined,
                    fromStoreData: 'initData',
                    fromDatasetId: 'national-plan-logement-raw',
                    fromDatasetKey: undefined,
                    fromDatasetIndex: 0,
                    fromDatasetField: undefined,
                    targetSpecialStoreId: 'focusObject'
                  }
                ]
              }
            },
            {
              funcName: 'resetMapZoom',
              funcParams: {
                targets: [
                  COMMONS_TARGETS.resetMapZoom
                ]
              }
            },
            COMMON_FUNCTIONS.resetUrlPath,
            COMMON_FUNCTIONS.resetFitToPolygon,
            COMMON_FUNCTIONS.resetSelectedPolygons
          ],

          hideIfs: [
            { specialStoreId: 'levelname', value: 'échelle nationale' }
          ]
        }
      ]
    },

    // ============================================================= //
    // === BTN : THD
    // ============================================================= //
    {
      id: 'global-button-thd',
      help: '',
      title: { fr: '' },
      titleI18n: 'buttons.button01.title',
      dividers: {
        before: false,
        after: false
      },

      btnsRowClass: 'align-center justify-center',
      btnsRowClassMobile: 'mt-0 pt-0 mb-2',

      componentButtons: [
        {
          id: 'first-button',
          title: { fr: 'retour au niveau national' },
          titleI18n: 'buttons.button01.title',

          btnClass: 'justify-center btn-gouv',

          block: false,
          icon: undefined,
          outlined: true,
          fab: false,
          color: 'primary',
          large: false,
          small: false,
          dark: false,
          tile: true,
          rounded: false,
          disabled: false,

          activatedIf: undefined,
          functions: [
            {
              funcName: 'resetStore',
              funcParams: {
                targets: [
                  COMMONS_TARGETS.resetLevelName,
                  {
                    from: 'store',
                    fromPropKey: undefined,
                    fromPropValue: undefined,
                    fromStoreData: 'initData',
                    fromDatasetId: 'national-thd-raw',
                    fromDatasetKey: undefined,
                    fromDatasetIndex: 0,
                    fromDatasetField: 'value',
                    targetSpecialStoreId: 'value'
                  },
                  {
                    from: 'store',
                    fromPropKey: undefined,
                    fromPropValue: undefined,
                    fromStoreData: 'initData',
                    fromDatasetId: 'national-thd-raw',
                    fromDatasetKey: undefined,
                    fromDatasetIndex: 0,
                    fromDatasetField: undefined,
                    targetSpecialStoreId: 'focusObject'
                  }
                ]
              }
            },
            {
              funcName: 'resetMapZoom',
              funcParams: {
                targets: [
                  COMMONS_TARGETS.resetMapZoom
                ]
              }
            },
            COMMON_FUNCTIONS.resetUrlPath,
            COMMON_FUNCTIONS.resetFitToPolygon,
            COMMON_FUNCTIONS.resetSelectedPolygons
          ],

          hideIfs: [
            { specialStoreId: 'levelname', value: 'échelle nationale' }
          ]
        }
      ]
    },

    // ============================================================= //
    // === BTN : Apprentissage
    // ============================================================= //
    {
      id: 'global-button-apprentissage',
      help: '',
      title: { fr: '' },
      titleI18n: 'buttons.button01.title',
      dividers: {
        before: false,
        after: false
      },

      btnsRowClass: 'align-center justify-center',
      btnsRowClassMobile: 'mt-0 pt-0 mb-2',

      componentButtons: [
        {
          id: 'first-button',
          title: { fr: 'retour au niveau national' },
          titleI18n: 'buttons.button01.title',

          btnClass: 'justify-center btn-gouv',

          block: false,
          icon: undefined,
          outlined: true,
          fab: false,
          color: 'primary',
          large: false,
          small: false,
          dark: false,
          tile: true,
          rounded: false,
          disabled: false,

          activatedIf: undefined,
          functions: [
            {
              funcName: 'resetStore',
              funcParams: {
                targets: [
                  COMMONS_TARGETS.resetLevelName,
                  {
                    from: 'store',
                    fromPropKey: undefined,
                    fromPropValue: undefined,
                    fromStoreData: 'initData',
                    fromDatasetId: 'national-apprentissage-raw',
                    fromDatasetKey: undefined,
                    fromDatasetIndex: 0,
                    fromDatasetField: 'value',
                    targetSpecialStoreId: 'value'
                  },
                  {
                    from: 'store',
                    fromPropKey: undefined,
                    fromPropValue: undefined,
                    fromStoreData: 'initData',
                    fromDatasetId: 'national-apprentissage-raw',
                    fromDatasetKey: undefined,
                    fromDatasetIndex: 0,
                    fromDatasetField: undefined,
                    targetSpecialStoreId: 'focusObject'
                  }
                ]
              }
            },
            {
              funcName: 'resetMapZoom',
              funcParams: {
                targets: [
                  COMMONS_TARGETS.resetMapZoom
                ]
              }
            },
            COMMON_FUNCTIONS.resetUrlPath,
            COMMON_FUNCTIONS.resetFitToPolygon,
            COMMON_FUNCTIONS.resetSelectedPolygons
          ],

          hideIfs: [
            { specialStoreId: 'levelname', value: 'échelle nationale' }
          ]
        }
      ]
    },

    // ============================================================= //
    // === BTN : Ecole Inclusive
    // ============================================================= //
    {
      id: 'global-button-ecole-inclusive',
      help: '',
      title: { fr: '' },
      titleI18n: 'buttons.button01.title',
      dividers: {
        before: false,
        after: false
      },

      btnsRowClass: 'align-center justify-center',
      btnsRowClassMobile: 'mt-0 pt-0 mb-2',

      componentButtons: [
        {
          id: 'first-button',
          title: { fr: 'retour au niveau national' },
          titleI18n: 'buttons.button01.title',

          btnClass: 'justify-center btn-gouv',

          block: false,
          icon: undefined,
          outlined: true,
          fab: false,
          color: 'primary',
          large: false,
          small: false,
          dark: false,
          tile: true,
          rounded: false,
          disabled: false,

          activatedIf: undefined,
          functions: [
            {
              funcName: 'resetStore',
              funcParams: {
                targets: [
                  COMMONS_TARGETS.resetLevelName,
                  {
                    from: 'store',
                    fromPropKey: undefined,
                    fromPropValue: undefined,
                    fromStoreData: 'initData',
                    fromDatasetId: 'national-ecole-inclusive-raw',
                    fromDatasetKey: undefined,
                    fromDatasetIndex: 0,
                    fromDatasetField: 'value',
                    targetSpecialStoreId: 'value'
                  },
                  {
                    from: 'store',
                    fromPropKey: undefined,
                    fromPropValue: undefined,
                    fromStoreData: 'initData',
                    fromDatasetId: 'national-ecole-inclusive-raw',
                    fromDatasetKey: undefined,
                    fromDatasetIndex: 0,
                    fromDatasetField: undefined,
                    targetSpecialStoreId: 'focusObject'
                  }
                ]
              }
            },
            {
              funcName: 'resetMapZoom',
              funcParams: {
                targets: [
                  COMMONS_TARGETS.resetMapZoom
                ]
              }
            },
            COMMON_FUNCTIONS.resetUrlPath,
            COMMON_FUNCTIONS.resetFitToPolygon,
            COMMON_FUNCTIONS.resetSelectedPolygons
          ],

          hideIfs: [
            { specialStoreId: 'levelname', value: 'échelle nationale' }
          ]
        }
      ]
    }
  ]
}
