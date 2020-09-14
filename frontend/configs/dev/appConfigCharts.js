// const KEY_DIVISION_NAF = 'division_naf'
// const KEY_DIVISION_NAF_LABEL = 'libelle_division_naf'

const KEY_NOMBRE = 'value'
const KEY_DATE = 'date'


const COMMON_FORMATTERS = {

  millionsEuros: {
    type: 'float',
    sepThousands: ' ',
    sepComma: ',',
    unit: 'M€'
  },
  toMillionsWithComma: [
    {
      utilsFnName: 'toMillionsOrElse',
      params: { divider: 1, fixed: 1 }
    }
  ],
  toMillionsWithoutComma: [
    {
      utilsFnName: 'toMillionsOrElse',
      params: { divider: 1000000, fixed: 0 }
    }
  ],
  integerEuropeanFormat: {
    type: 'integer',
    sepThousands: ' '
  }
}

const COMMON_SERIES_MAPPERS = {
  DateByNumber: {
    dataFromKey: KEY_NOMBRE,
    serieName: 'nombre',
    format: COMMON_FORMATTERS.toMillionsWithComma,
    sortDataSerieBy: {
      sortByType: 'sortByFieldValue',
      fieldName: KEY_NOMBRE,
      toNumber: true
    },

    buildAxisCategsX: true,
    buildAxisCategsXsettings: {
      fromKey: KEY_DATE,
      capitalize: false
    },
  }
}
const COMMON_CHART_OPTIONS = {
  categHorizH300: {
    chart: {
      type: 'bar',
      height: '300px',
      width: '390px',
      toolbar: {
        show: false
      }
    },
    legend: {
      show: false
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true // nerd-pride....
      }
    },
    theme: {
      mode: 'light'
    },

    dataLabels: {
      enabled: true
    },

    xaxis: {
      type: 'category',
      labels: {
        show: false,
        style: {
          fontSize: '9px'
        }
      }
    },

    responsive: [
      {
        breakpoint: 960,
        options: {
          chart: {
            // height: "370px",
            width: '350px'
          },
          xaxis: {
            type: 'numeric',
            labels: {
              show: false,
              style: {
                fontSize: '9px'
              }
            }
          }
        }
      }
    ]
  },
  categHorizH390: {
    chart: {
      type: 'bar',
      height: '390px',
      width: '390px',
      toolbar: {
        show: false
      }
    },
    legend: {
      show: false
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true // nerd-pride....
      }
    },
    theme: {
      mode: 'light'
    },

    dataLabels: {
      enabled: true
    },

    xaxis: {
      type: 'category',
      labels: {
        show: false,
        style: {
          fontSize: '9px'
        }
      }
    },

    responsive: [
      {
        breakpoint: 960,
        options: {
          chart: {
            // height: "370px",
            width: '350px'
          },
          xaxis: {
            type: 'numeric',
            labels: {
              show: false,
              style: {
                fontSize: '9px'
              }
            }
          }
        }
      }
    ]
  },

  categVertH390: {
    chart: {
      type: 'bar',
      height: '390px',
      width: '490px',
      toolbar: {
        show: false
      }
    },
    legend: {
      show: false
    },
    theme: {
      mode: 'light'
    },

    dataLabels: {
      enabled: false
    },

    xaxis: {
      type: 'category',
      labels: {
        show: true,
        style: {
          fontSize: '9px'
        }
      }
    },
    xyxis: {
      type: 'category',
      labels: {
        show: false,
        style: {
          fontSize: '9px'
        }
      }
    },

    responsive: [
      {
        breakpoint: 960,
        options: {
          chart: {
            // height: "370px",
            width: '350px'
          },
          xaxis: {
            type: 'numeric',
            labels: {
              show: false,
              style: {
                fontSize: '9px'
              }
            }
          }
        }
      }
    ]
  },
  categHorizH170: {
    chart: {
      type: 'bar',
      height: '170px',
      width: '390px',
      toolbar: {
        show: false
      }
    },
    legend: {
      show: false
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true // nerd-pride....
      }
    },
    theme: {
      mode: 'light'
    },

    dataLabels: {
      enabled: true
    },

    xaxis: {
      type: 'category',
      labels: {
        show: false,
        style: {
          fontSize: '9px'
        }
      }
    },

    responsive: [
      {
        breakpoint: 960,
        options: {
          chart: {
            // height: "370px",
            width: '350px'
          },
          xaxis: {
            type: 'numeric',
            labels: {
              show: false,
              style: {
                fontSize: '9px'
              }
            }
          }
        }
      }
    ]
  },
  categPieH250: {
    chart: {
      type: 'donut',
      height: '250px',
      width: '390px',
      toolbar: {
        show: false
      }
    },
    legend: {
      position: 'bottom'
    },
    theme: {
      palette: 'palette7',
      mode: 'light'
    },

    dataLabels: {
      enabled: true
    },
    plotOptions: {
      pie: {
        donut: {
          size: '45%'
        }
      }
    },
    responsive: [
      {
        breakpoint: 960,
        options: {
          chart: {
            // height: "370px",
            width: '350px'
          }
        }
      }
    ]
  }
}

export const configAppCharts = {
  help: 'this file contains the setup for the apex charts',

  // CHARTS

  settingsIds: [
    // APEX CHARTS

    // ============================================================= //
    // HOME / Plan Vélo
    // ============================================================= //
    // BAR HORIZ - APE X MONTANTS
    {
      id: 'apexchart-plan-velo-1',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Part modale domicile-travail
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'part-modale-domicile-travail',

        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],

        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }
    },
    {
      id: 'apexchart-plan-velo-2',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Aménagement cyclables (en km)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'amenagement-cyclables',

        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],

        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }
    },
    {
      id: 'apexchart-plan-velo-3',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre d’attestations savoir rouler à vélo
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-attestation',

        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],

        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }
    },
    {
      id: 'apexchart-plan-velo-4',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre de vélos marqués
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-velos-marques',

        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],

        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }
    },
    {
      id: 'apexchart-plan-velo-5',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre de vélos volés
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-voles-voles',

        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],

        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }
    },
    {
      id: 'apexchart-plan-velo-6',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Total subventions accordées (fonds mobilités actives en millions d'euros)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'total-subvention',

        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],

        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }
    },
    {
      id: 'apexchart-plan-velo-7',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre de bénéficiaires du forfait mobilité durable
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-beneficiaires-forfait-mobilite-durable',

        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],

        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }
    },
    {
      id: 'apexchart-plan-velo-8',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre cyclistes tués
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-cyclistes-tues',

        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],

        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }
    },
    {
      id: 'apexchart-plan-velo-9',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Taux de réalisation du schéma national des véloroutes
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'tx-real-schema-nat-veloroutes',

        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],

        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }
    },
    {
      id: 'apexchart-plan-velo-10',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre de ménages victimes de vol
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-menages-victimes-vol',

        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],

        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }
    },
    {
      id: 'apexchart-plan-velo-11',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Vente de vélos à assistance électrique
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'vente-vae',

        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],

        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }
    },
    {
      id: 'apexchart-plan-velo-12',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Montant annuel des projets mobilités douces financés par la DSIL (en millions €)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'montant-dsil',

        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],

        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }
    },
    {
      id: 'apexchart-plan-velo-13',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre  de continuités cyclables restaurées (fonds mobilités actives)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-continuites-cyclables-restaures',

        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],

        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }
    },

    // ============================================================= //
    // Asile
    // ============================================================= //
    // BAR HORIZ - APE X MONTANTS
    {
      id: 'apexchart-asile-1',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Délai moyen constaté de traitement de la demande d\'asile (en mois)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'delai-moyen-traitement',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-asile-2',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Délai prévisible
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'delai-previsible',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    // ============================================================= //
    // Plan Logement
    // ============================================================= //
    // BAR HORIZ - APE X MONTANTS
    {
      id: 'apexchart-plan-logement-1',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre de logements mobilisés pour les réfugiés
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-logements-refugies',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-plan-logement-2',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre de personnes sorties de la rue ou de l'hébergement généraliste
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-personnes-sortis',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-plan-logement-3',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Places en intermédiation locative ouvertes
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'places-intermediation-locative-ouvertes',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-plan-logement-4',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Places en pensions de famille ouvertes
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'places-pensions-famille-ouvertes',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-plan-logement-5',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre d’agréments de prêts locatifs aidés d’intégration (PLAI) pensions de famille
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-plai',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-plan-logement-6',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre de logements locatifs sociaux (LLS) attribués à des ménages de l’hébergement généraliste
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-lls',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-plan-logement-7',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Part de logements très sociaux financés (PLAI)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'part-plai',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    // ============================================================= //
    // THD
    // ============================================================= //
    // BAR HORIZ - APE X MONTANTS
    {
      id: 'apexchart-thd-1',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre de locaux éligibles à la fibre optique (en millions)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-locaux-elligibles',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-thd-2',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Part des locaux couverts en THD filaire (en %)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'tx-locaux-elligibles',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-thd-3',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre de locaux réseaux d’initiative publique (RIP) éligibles à la fibre optique (en millions)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-rip',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    // ============================================================= //
    // Apprentissage
    // ============================================================= //
    // BAR HORIZ - APE X MONTANTS
    {
      id: 'apexchart-apprentissage-1',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre d'entrées garantie Jeunes
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-gantie-jeunes',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },  

    {
      id: 'apexchart-apprentissage-2',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre  d'entrées PACEA (Accompagnement)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-pacea',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-apprentissage-3',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre  de contrats d'apprentissage
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-contrats-apprentissage',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-apprentissage-4',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Taux de Satisfaction des apprentis (en %)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'tx-satisfaction-apprentis',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-apprentissage-5',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Taux d’insertion dans l’emploi à l’issue d’un contrat d’apprentissage (en %)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'tx-insertion-emploi',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-apprentissage-6',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Taux de notoriété (en %)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'tx-notoriete',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-apprentissage-7',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre de nouveaux centres de formation des apprentis CFA (depuis le 1er janvier 2020)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-centres-cfa',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-apprentissage-8',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre de CFA entreprises
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-cfa-entreprises',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    // ============================================================= //
    // Ecole Inclusive
    // ============================================================= //
    // BAR HORIZ - APE X MONTANTS
    {
      id: 'apexchart-ecole-inclusive-1',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Taux d’élèves en attente d’un accompagnant (en %)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'tx-eleves-attente',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-ecole-inclusive-2',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre  de PIAL
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-pial',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-ecole-inclusive-3',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Taux d’écoles en PIAL (en %)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'tx-ecoles-pial',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-ecole-inclusive-4',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Taux de collèges en PIAL (en %)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'tx-colleges-pial',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-ecole-inclusive-5',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Taux de lycées en PIAL (en %)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'tx-lycees-pial',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-ecole-inclusive-6',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre de PIAL renforcés
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-pial-renforces',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-ecole-inclusive-7',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre  de sollicitations traitées par les cellules d’écoute
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-sollicitations-traites',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-ecole-inclusive-8',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre d’unités localisées pour  l’inclusion scolaire (ULIS) écoles/collèges/lycées
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-ulis',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-ecole-inclusive-9',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Nombre d’UEMA/UEEA (Plan Autisme)
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'nb-uema-ueea',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    },

    {
      id: 'apexchart-ecole-inclusive-10',
      serie_id: 'stat-bar-horiz',
      help: 'bar horiz / kpi_top_10_naf X montant',
      titleI18n: 'charts.chart01.title',
      chartTitle: {
        fr: `
          Evolution  dans le temps de l’opinion des parents sur le niveau de préparation des  établissements scolaires aux différents types de handicap
          <br><br>
        `
      },
      chartTitleClass: 'subtitle-2 text-center',

      titlePreffixSpecialStoreId: undefined,
      titleSuffixSpecialStoreId: 'levelname',
      titleSuffixClass: 'accent--text',

      dividers: {
        before: false,
        after: true,
        afterHideOnMobile: true
      },

      datasetMappers: {
        specialStoreId: 'focusObject',
        fromDatasetKey: 'evolution-opinion-parents',
        seriesMappers: [
          COMMON_SERIES_MAPPERS.DateByNumber
        ],
        chartOptions: COMMON_CHART_OPTIONS.categVertH390,
        format: COMMON_FORMATTERS.integerEuropeanFormat
      }

    }

  ]
}
