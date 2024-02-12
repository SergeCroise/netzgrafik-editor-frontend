import {
  HaltezeitFachCategories,
  LinePatternRefs,
  NetzgrafikDto
} from '../data-structures/business.data.structures';

export class NetzgrafikDefault {
  static getDefaultNetzgrafik(): NetzgrafikDto {
    return {
      nodes: [
        {
          id: 0,
          betriebspunktName: 'BN',
          fullName: 'Bern',
          positionX: -192,
          positionY: 32,
          ports: [],
          transitions: [],
          connections: [],
          resourceId: null,
          perronkanten: 10,
          connectionTime: 5,
          trainrunCategoryHaltezeiten: null,
          symmetryAxis: 0,
          warnings: null,
          labelIds: []
        },
        {
          id: 1,
          betriebspunktName: 'OL',
          fullName: 'Olten',
          positionX: 832,
          positionY: 32,
          ports: [],
          transitions: [],
          connections: [],
          resourceId: null,
          perronkanten: 10,
          connectionTime: 5,
          trainrunCategoryHaltezeiten: null,
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 2,
          betriebspunktName: 'ZUE',
          fullName: 'Zuerich',
          positionX: 1632,
          positionY: 32,
          ports: [],
          transitions: [],
          connections: [],
          resourceId: null,
          perronkanten: 10,
          connectionTime: 5,
          trainrunCategoryHaltezeiten: null,
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 3,
          betriebspunktName: 'LZ',
          fullName: 'Luzern',
          positionX: 1184,
          positionY: 960,
          ports: [],
          transitions: [],
          connections: [],
          resourceId: null,
          perronkanten: 10,
          connectionTime: 5,
          trainrunCategoryHaltezeiten: null,
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 4,
          betriebspunktName: 'ZF',
          fullName: 'Zofingen',
          positionX: 832,
          positionY: 448,
          ports: [],
          transitions: [],
          connections: [],
          resourceId: null,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: null,
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 5,
          betriebspunktName: 'ZG',
          fullName: 'Zug',
          positionX: 1184,
          positionY: 576,
          ports: [],
          transitions: [],
          connections: [],
          resourceId: null,
          perronkanten: 5,
          connectionTime: 5,
          trainrunCategoryHaltezeiten: null,
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 6,
          betriebspunktName: 'SS',
          fullName: 'Sursee',
          positionX: 672,
          positionY: 800,
          ports: [],
          transitions: [],
          connections: [],
          resourceId: null,
          perronkanten: 5,
          connectionTime: 6,
          trainrunCategoryHaltezeiten: null,
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 7,
          betriebspunktName: 'RTR',
          fullName: 'Rothrist',
          positionX: 320,
          positionY: 32,
          ports: [],
          transitions: [],
          connections: [],
          resourceId: null,
          perronkanten: 5,
          connectionTime: 5,
          trainrunCategoryHaltezeiten: null,
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 8,
          betriebspunktName: 'LTH',
          fullName: 'Langenthal',
          positionX: 320,
          positionY: 192,
          ports: [],
          transitions: [],
          connections: [],
          resourceId: null,
          perronkanten: 5,
          connectionTime: 5,
          trainrunCategoryHaltezeiten: null,
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 9,
          betriebspunktName: 'BAA',
          fullName: 'Baar',
          positionX: 1536,
          positionY: 480,
          ports: [],
          transitions: [],
          connections: [],
          resourceId: null,
          perronkanten: 5,
          connectionTime: 5,
          trainrunCategoryHaltezeiten: null,
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        },
        {
          id: 10,
          betriebspunktName: 'GD',
          fullName: 'Goldau',
          positionX: 1728,
          positionY: 960,
          ports: [],
          transitions: [],
          connections: [],
          resourceId: null,
          perronkanten: 5,
          connectionTime: 5,
          trainrunCategoryHaltezeiten: null,
          symmetryAxis: null,
          warnings: null,
          labelIds: []
        }
      ],
      trainrunSections: [],
      trainruns: [],
      resources: [],
      metadata: {
        trainrunCategories: [
          {
            id: 0, order: 0, shortName: 'EC', name: 'International', colorRef: 'EC',
            fachCategory: HaltezeitFachCategories.IPV,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          },                // -> Gruppe ROT
          {
            id: 1, order: 1, shortName: 'IC', name: 'InterCity', colorRef: 'IC',
            fachCategory: HaltezeitFachCategories.A,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          },                // -> Gruppe ROT
          {
            id: 2, order: 2, shortName: 'IR', name: 'InterRegio', colorRef: 'IR',
            fachCategory: HaltezeitFachCategories.B,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          },                // -> Gruppe BLAU
          {
            id: 3, order: 3, shortName: 'RE', name: 'RegioExpress', colorRef: 'RE',
            fachCategory: HaltezeitFachCategories.C,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          },                 // -> Gruppe GRÜN
          {
            id: 4, order: 4, shortName: 'S', name: 'RegioUndSBahnverkehr', colorRef: 'S',
            fachCategory: HaltezeitFachCategories.D,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          },                 // -> Gruppe SCHWARZ
          {
            id: 5, order: 5, shortName: 'GEX', name: 'GüterExpress', colorRef: 'GEX',
            fachCategory: HaltezeitFachCategories.Uncategorized,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 3,
            nodeHeadwayNonStop: 3,
            sectionHeadway: 3,
          },     // -> Gruppe BLAUVIOLETT
          {
            id: 6, order: 6, shortName: 'G', name: 'Güterverkehr', colorRef: 'G',
            fachCategory: HaltezeitFachCategories.Uncategorized,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 3,
            nodeHeadwayNonStop: 3,
            sectionHeadway: 3,
          },     // -> Gruppe BLAUVIOLETT
        ],
        trainrunFrequencies: [
          {
            id: 0,
            order: 0,
            frequency: 15,
            offset: 0,
            shortName: '15',
            name: 'verkehrt viertelstündlich',
            linePatternRef: LinePatternRefs.Freq15
          },
          {
            id: 1,
            order: 0,
            frequency: 20,
            offset: 0,
            shortName: '20',
            name: 'verkehrt im 20 Minuten Takt',
            linePatternRef: LinePatternRefs.Freq20
          },
          {
            id: 2,
            order: 0,
            frequency: 30,
            offset: 0,
            shortName: '30',
            name: 'verkehrt halbstündlich',
            linePatternRef: LinePatternRefs.Freq30
          },
          {
            id: 3,
            order: 0,
            frequency: 60,
            offset: 0,
            shortName: '60',
            name: 'verkehrt stündlich',
            linePatternRef: LinePatternRefs.Freq60
          },
          {
            id: 4,
            order: 0,
            frequency: 120,
            offset: 0,
            shortName: '120',
            name: 'verkehrt zweistündlich (gerade)',
            linePatternRef: LinePatternRefs.Freq120
          },
          {
            id: 5,
            order: 0,
            frequency: 120,
            offset: 60,
            shortName: '120+',
            name: 'verkehrt zweistündlich (ungerade)',
            linePatternRef: LinePatternRefs.Freq120
          },
        ],
        trainrunTimeCategories: [
          {
            id: 0,
            order: 0,
            shortName: '7/24', name: 'verkehrt uneingeschränkt',
            dayTimeInterval: [],
            weekday: [1, 2, 3, 4, 5, 6, 7],
            linePatternRef: LinePatternRefs.TimeCat7_24
          },
          {
            id: 1,
            order: 0,
            shortName: 'HVZ',
            name: 'verkehrt zur Hauptverkehrszeit',
            dayTimeInterval: [{from: 360, to: 420}, {from: 960, to: 1140}],
            weekday: [1, 2, 3, 4, 5, 6, 7],
            linePatternRef: LinePatternRefs.TimeCatHVZ
          },
          {
            id: 2,
            order: 0,
            shortName: 'zeitweise',
            name: 'verkehrt zeitweise',
            dayTimeInterval: [],
            weekday: [],
            linePatternRef: LinePatternRefs.TimeZeitweise
          },
        ],
        netzgrafikColors: []
      },
      freeFloatingTexts: [],
      labels: [],
      labelGroups: [],
      filterData: {
        filterSettings: []
      }
    };
  }
}