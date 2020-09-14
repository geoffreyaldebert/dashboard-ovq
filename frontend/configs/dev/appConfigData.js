// const DATASETS_REPO_BASE = 'https://raw.githubusercontent.com/etalab/dashboard-aides-entreprises/master/frontend/static/' // in repo folder

const DATASETS_FOLDER = '/datasets' // in static folder

export const configAppData = {
  help: 'this file contains the data setup for the app',

  // FILTERS
  filters: [
    {
      arg: 'departement',
      filterCode: 'DEP',
      filterType: 'checkbox',
      isActivated: true,
      name: {
        fr: 'départements'
      },
      populate: 'from_options', // "from_api"
      options: [
        { value: '0', label: { fr: 'dep_1' } },
        { value: '1', label: { fr: 'dep_2' } }
      ]
    }
  ],

  // DEFAULT SETUP
  defaultDataSetup: {
    initData: {
      help:
        "populate 'store.data.state.initData' @ middleware getIniitData.js / from : url | localFile",
      store: [
        // ============================================================= //
        // INFOS
        // ============================================================= //
        {
          id: 'infos',
          help: '',
          from: 'rawObject',
          rawObject: {
            numbers: {
              montant: undefined,
              nombre: undefined,
              effectifs: undefined,
              nafs: undefined
            },
            texts: {
              levelname: 'échelle nationale',
              levelcode: 'national'
            },
            focusObject: undefined,
            switchers: {
              national: 'échelle nationale',
              regional: 'échelle régionale',
              departement: 'échelle départementale'
            }
          },
          displayed: true,
          copyTo: [
            {
              fieldToCopy: 'levelname',
              from: { objectRef: 'texts' },
              help: 'copy to another dataset (id) in displayedData | initData',
              toSpecialStore: 'levelname',
              format: undefined
            },
            {
              fieldToCopy: 'levelcode',
              from: { objectRef: 'texts' },
              help: 'copy to another dataset (id) in displayedData | initData',
              toSpecialStore: 'levelcode',
              format: undefined
            }
          ]
        },

        // ============================================================= //
        // TAXONOMIES
        // ============================================================= //
        {
          id: 'taxo-regions',
          help: '',
          from: 'static',
          //   url  : "http://pad-01.infra.data.gouv.fr:5000/region"
          url: `${DATASETS_FOLDER}/prod/taxonomies/regions.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/taxonomies/regions.json`,
          displayed: false
        },
        {
          id: 'taxo-departements',
          help: '',
          from: 'static',
          //   url  : "http://pad-01.infra.data.gouv.fr:5000/departement"
          url: `${DATASETS_FOLDER}/prod/taxonomies/departements.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/taxonomies/departements.json`,
          displayed: false
        },

        // ============================================================= //
        // GEOJSON (NO NEED EXCEPT CENTERS : SOURCES LOADED IN MAPBOX COMPONENT )
        // ============================================================= //
        {
          id: 'centers',
          help: 'geo centres régions et départements',
          from: 'static',
          // url: `${DATASETS_FOLDER}/geodata/centers.json`,
          // backupUrl: `${DATASETS_FOLDER}/geodata/centers.json`,
          url: `${DATASETS_FOLDER}/geodata/centers_corrected.json`,
          backupUrl: `${DATASETS_FOLDER}/geodata/centers_corrected.json`,
          displayed: true
        }

      ]
    }
  },

  // SOURCES FOR ROUTES
  routesData: {
    help: 'data sources not loaded at init but depending on routes',
    initData: {
      help: '',
      store: [
        // ============================================================= //
        // === DATASET : Plan Vélo
        // ============================================================= //
        {
          id: 'national-plan-velo-raw',
          dataset: 'plan-velo',
          help: 'serie chiffres aides à la maille nationale',
          from: 'static',
          url: `${DATASETS_FOLDER}/prod/plan-velo/plan-velo-national.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/plan-velo/plan-velo-national.json`,
          displayed: true,
          copyTo: [
            {
              fieldToCopy: undefined,
              from: { objectRef: 0 },
              help: 'copy to another dataset (id) in displayedData | initData',
              toSpecialStore: 'focusObject',
              format: undefined
            },
            {
              fieldToCopy: 'value',
              from: { objectRef: 0 },
              help: 'copy to another dataset (id) in displayedData | initData',
              toSpecialStore: 'value',
              format: undefined
            }
          ]
        },
        {
          id: 'regions-plan-velo-raw',
          dataset: 'plan-velo',
          help: 'serie chiffres plan velo à la maille regionale',
          from: 'static',
          url: `${DATASETS_FOLDER}/prod/plan-velo/plan-velo-regional.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/plan-velo/plan-velo-regional.json`,
          displayed: true
        },
        {
          id: 'departements-plan-velo-raw',
          dataset: 'plan-velo',
          help: 'serie chiffres plan velo à la maille departementale',
          from: 'static',
          url: `${DATASETS_FOLDER}/prod/plan-velo/plan-velo-departemental.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/plan-velo/plan-velo-departemental.json`,
          displayed: false
        },

        // ============================================================= //
        // === DATASET : Asile
        // ============================================================= //
        {
          id: 'national-asile-raw',
          dataset: 'asile',
          help: 'serie chiffres asile à la maille nationale',
          from: 'static',
          url: `${DATASETS_FOLDER}/prod/asile/asile-national.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/asile/asile-national.json`,
          displayed: true,
          copyTo: [
            {
              fieldToCopy: undefined,
              from: { objectRef: 0 },
              help: 'copy to another dataset (id) in displayedData | initData',
              toSpecialStore: 'focusObject',
              format: undefined
            },
            {
              fieldToCopy: 'value',
              from: { objectRef: 0 },
              help: 'copy to another dataset (id) in displayedData | initData',
              toSpecialStore: 'value',
              format: undefined
            }
          ]
        },
        {
          id: 'regions-asile-raw',
          dataset: 'asile',
          help: 'serie chiffres asile à la maille regionale',
          from: 'static',
          url: `${DATASETS_FOLDER}/prod/asile/asile-regional.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/asile/asile-regional.json`,
          displayed: true
        },
        {
          id: 'departements-asile-raw',
          dataset: 'asile',
          help: 'serie chiffres asile à la maille departementale',
          from: 'static',
          url: `${DATASETS_FOLDER}/prod/asile/asile-departemental.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/asile/asile-departemental.json`,
          displayed: false
        },

        // ============================================================= //
        // === DATASET : Plan Logement
        // ============================================================= //
        {
          id: 'national-plan-logement-raw',
          dataset: 'plan-logement',
          help: 'serie chiffres plan-logement à la maille nationale',
          from: 'static',
          url: `${DATASETS_FOLDER}/prod/plan-logement/plan-logement-national.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/plan-logement/plan-logement-national.json`,
          displayed: true,
          copyTo: [
            {
              fieldToCopy: undefined,
              from: { objectRef: 0 },
              help: 'copy to another dataset (id) in displayedData | initData',
              toSpecialStore: 'focusObject',
              format: undefined
            },
            {
              fieldToCopy: 'value',
              from: { objectRef: 0 },
              help: 'copy to another dataset (id) in displayedData | initData',
              toSpecialStore: 'value',
              format: undefined
            }
          ]
        },
        {
          id: 'regions-plan-logement-raw',
          dataset: 'plan-logement',
          help: 'serie chiffres plan-logement à la maille regionale',
          from: 'static',
          url: `${DATASETS_FOLDER}/prod/plan-logement/plan-logement-regional.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/plan-logement/plan-logement-regional.json`,
          displayed: true
        },
        {
          id: 'departements-plan-logement-raw',
          dataset: 'plan-logement',
          help: 'serie chiffres plan-logement à la maille departementale',
          from: 'static',
          url: `${DATASETS_FOLDER}/prod/plan-logement/plan-logement-departemental.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/plan-logement/plan-logement-departemental.json`,
          displayed: false
        },

        // ============================================================= //
        // === DATASET : THD
        // ============================================================= //
        {
          id: 'national-thd-raw',
          dataset: 'thd',
          help: 'serie chiffres thd à la maille nationale',
          from: 'static',
          url: `${DATASETS_FOLDER}/prod/thd/thd-national.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/thd/thd-national.json`,
          displayed: true,
          copyTo: [
            {
              fieldToCopy: undefined,
              from: { objectRef: 0 },
              help: 'copy to another dataset (id) in displayedData | initData',
              toSpecialStore: 'focusObject',
              format: undefined
            },
            {
              fieldToCopy: 'value',
              from: { objectRef: 0 },
              help: 'copy to another dataset (id) in displayedData | initData',
              toSpecialStore: 'value',
              format: undefined
            }
          ]
        },
        {
          id: 'regions-thd-raw',
          dataset: 'thd',
          help: 'serie chiffres thd à la maille regionale',
          from: 'static',
          url: `${DATASETS_FOLDER}/prod/thd/thd-regional.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/thd/thd-regional.json`,
          displayed: true
        },
        {
          id: 'departements-thd-raw',
          dataset: 'thd',
          help: 'serie chiffres thd à la maille departementale',
          from: 'static',
          url: `${DATASETS_FOLDER}/prod/thd/thd-departemental.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/thd/thd-departemental.json`,
          displayed: false
        },

        // ============================================================= //
        // === DATASET : Apprentissage
        // ============================================================= //
        {
          id: 'national-apprentissage-raw',
          dataset: 'apprentissage',
          help: 'serie chiffres apprentissage à la maille nationale',
          from: 'static',
          url: `${DATASETS_FOLDER}/prod/apprentissage/apprentissage-national.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/apprentissage/apprentissage-national.json`,
          displayed: true,
          copyTo: [
            {
              fieldToCopy: undefined,
              from: { objectRef: 0 },
              help: 'copy to another dataset (id) in displayedData | initData',
              toSpecialStore: 'focusObject',
              format: undefined
            },
            {
              fieldToCopy: 'value',
              from: { objectRef: 0 },
              help: 'copy to another dataset (id) in displayedData | initData',
              toSpecialStore: 'value',
              format: undefined
            }
          ]
        },
        {
          id: 'regions-apprentissage-raw',
          dataset: 'apprentissage',
          help: 'serie chiffres apprentissage à la maille regionale',
          from: 'static',
          url: `${DATASETS_FOLDER}/prod/apprentissage/apprentissage-regional.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/apprentissage/apprentissage-regional.json`,
          displayed: true
        },
        {
          id: 'departements-apprentissage-raw',
          dataset: 'apprentissage',
          help: 'serie chiffres apprentissage à la maille departementale',
          from: 'static',
          url: `${DATASETS_FOLDER}/prod/apprentissage/apprentissage-departemental.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/apprentissage/apprentissage-departemental.json`,
          displayed: false
        },

        // ============================================================= //
        // === DATASET : Ecole Inclusive
        // ============================================================= //
        {
          id: 'national-ecole-inclusive-raw',
          dataset: 'ecole-inclusive',
          help: 'serie chiffres ecole-inclusive à la maille nationale',
          from: 'static',
          url: `${DATASETS_FOLDER}/prod/ecole-inclusive/ecole-inclusive-national.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/ecole-inclusive/ecole-inclusive-national.json`,
          displayed: true,
          copyTo: [
            {
              fieldToCopy: undefined,
              from: { objectRef: 0 },
              help: 'copy to another dataset (id) in displayedData | initData',
              toSpecialStore: 'focusObject',
              format: undefined
            },
            {
              fieldToCopy: 'value',
              from: { objectRef: 0 },
              help: 'copy to another dataset (id) in displayedData | initData',
              toSpecialStore: 'value',
              format: undefined
            }
          ]
        },
        {
          id: 'regions-ecole-inclusive-raw',
          dataset: 'ecole-inclusive',
          help: 'serie chiffres ecole-inclusive à la maille regionale',
          from: 'static',
          url: `${DATASETS_FOLDER}/prod/ecole-inclusive/ecole-inclusive-regional.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/ecole-inclusive/ecole-inclusive-regional.json`,
          displayed: true
        },
        {
          id: 'departements-ecole-inclusive-raw',
          dataset: 'ecole-inclusive',
          help: 'serie chiffres ecole-inclusive à la maille departementale',
          from: 'static',
          url: `${DATASETS_FOLDER}/prod/ecole-inclusive/ecole-inclusive-departemental.json`,
          backupUrl: `${DATASETS_FOLDER}/prod/ecole-inclusive/ecole-inclusive-departemental.json`,
          displayed: false
        }
      ]
    }
  }
}
