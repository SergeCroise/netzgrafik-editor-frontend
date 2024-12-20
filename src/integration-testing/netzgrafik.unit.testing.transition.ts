import {
  HaltezeitFachCategories,
  LinePatternRefs,
  NetzgrafikDto,
} from "../app/data-structures/business.data.structures";

export class NetzgrafikUnitTestingTransition {
  static getUnitTestTransitionNetzgrafik(): NetzgrafikDto {
    return {
      nodes: [
        {
          id: 1,
          betriebspunktName: "OL",
          fullName: "Olten",
          positionX: 864,
          positionY: 448,
          ports: [
            {
              id: 188,
              trainrunSectionId: 19,
              positionIndex: 0,
              positionAlignment: 2,
            },
            {
              id: 155,
              trainrunSectionId: 21,
              positionIndex: 1,
              positionAlignment: 2,
            },
            {
              id: 152,
              trainrunSectionId: 33,
              positionIndex: 2,
              positionAlignment: 2,
            },
            {
              id: 148,
              trainrunSectionId: 32,
              positionIndex: 3,
              positionAlignment: 2,
            },
            {
              id: 189,
              trainrunSectionId: 36,
              positionIndex: 0,
              positionAlignment: 3,
            },
            {
              id: 156,
              trainrunSectionId: 34,
              positionIndex: 1,
              positionAlignment: 3,
            },
            {
              id: 151,
              trainrunSectionId: 27,
              positionIndex: 2,
              positionAlignment: 3,
            },
            {
              id: 147,
              trainrunSectionId: 23,
              positionIndex: 3,
              positionAlignment: 3,
            },
          ],
          transitions: [
            {
              id: 1,
              port1Id: 147,
              port2Id: 148,
              isNonStopTransit: false,
            },
            {
              id: 2,
              port1Id: 151,
              port2Id: 152,
              isNonStopTransit: false,
            },
            {
              id: 3,
              port1Id: 155,
              port2Id: 156,
              isNonStopTransit: false,
            },
            {
              id: 4,
              port1Id: 188,
              port2Id: 189,
              isNonStopTransit: false,
            },
          ],
          connections: [],
          resourceId: 2,
          perronkanten: 10,
          connectionTime: 5,
          trainrunCategoryHaltezeiten: {
            [HaltezeitFachCategories.IPV]: {haltezeit: 2, no_halt: false},
            [HaltezeitFachCategories.A]: {haltezeit: 2, no_halt: false},
            [HaltezeitFachCategories.B]: {haltezeit: 2, no_halt: false},
            [HaltezeitFachCategories.C]: {haltezeit: 1.5, no_halt: false},
            [HaltezeitFachCategories.D]: {haltezeit: 1, no_halt: false},
            [HaltezeitFachCategories.Uncategorized]: {
              haltezeit: 0,
              no_halt: true,
            },
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: [],
        },
        {
          id: 4,
          betriebspunktName: "ZF",
          fullName: "Zofingen",
          positionX: 1440,
          positionY: 256,
          ports: [
            {
              id: 185,
              trainrunSectionId: 36,
              positionIndex: 0,
              positionAlignment: 2,
            },
            {
              id: 154,
              trainrunSectionId: 34,
              positionIndex: 1,
              positionAlignment: 2,
            },
            {
              id: 82,
              trainrunSectionId: 27,
              positionIndex: 2,
              positionAlignment: 2,
            },
            {
              id: 99,
              trainrunSectionId: 23,
              positionIndex: 3,
              positionAlignment: 2,
            },
          ],
          transitions: [],
          connections: [],
          resourceId: 5,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            [HaltezeitFachCategories.IPV]: {haltezeit: 2, no_halt: false},
            [HaltezeitFachCategories.A]: {haltezeit: 2, no_halt: false},
            [HaltezeitFachCategories.B]: {haltezeit: 2, no_halt: false},
            [HaltezeitFachCategories.C]: {haltezeit: 1.5, no_halt: false},
            [HaltezeitFachCategories.D]: {haltezeit: 1, no_halt: false},
            [HaltezeitFachCategories.Uncategorized]: {
              haltezeit: 0,
              no_halt: true,
            },
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: [],
        },
        {
          id: 5,
          betriebspunktName: "ZG",
          fullName: "Zug",
          positionX: 320,
          positionY: 288,
          ports: [
            {
              id: 97,
              trainrunSectionId: 19,
              positionIndex: 0,
              positionAlignment: 3,
            },
            {
              id: 70,
              trainrunSectionId: 21,
              positionIndex: 1,
              positionAlignment: 3,
            },
            {
              id: 150,
              trainrunSectionId: 33,
              positionIndex: 2,
              positionAlignment: 3,
            },
            {
              id: 146,
              trainrunSectionId: 32,
              positionIndex: 3,
              positionAlignment: 3,
            },
          ],
          transitions: [],
          connections: [],
          resourceId: 6,
          perronkanten: 5,
          connectionTime: 5,
          trainrunCategoryHaltezeiten: {
            [HaltezeitFachCategories.IPV]: {haltezeit: 2, no_halt: false},
            [HaltezeitFachCategories.A]: {haltezeit: 2, no_halt: false},
            [HaltezeitFachCategories.B]: {haltezeit: 2, no_halt: false},
            [HaltezeitFachCategories.C]: {haltezeit: 1.5, no_halt: false},
            [HaltezeitFachCategories.D]: {haltezeit: 1, no_halt: false},
            [HaltezeitFachCategories.Uncategorized]: {
              haltezeit: 0,
              no_halt: true,
            },
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: [],
        },
        {
          id: 11,
          betriebspunktName: "BS",
          fullName: "Basel",
          positionX: 864,
          positionY: 128,
          ports: [],
          transitions: [],
          connections: [],
          resourceId: 12,
          perronkanten: 5,
          connectionTime: 3,
          trainrunCategoryHaltezeiten: {
            [HaltezeitFachCategories.IPV]: {haltezeit: 2, no_halt: false},
            [HaltezeitFachCategories.A]: {haltezeit: 2, no_halt: false},
            [HaltezeitFachCategories.B]: {haltezeit: 2, no_halt: false},
            [HaltezeitFachCategories.C]: {haltezeit: 1.5, no_halt: false},
            [HaltezeitFachCategories.D]: {haltezeit: 1, no_halt: false},
            [HaltezeitFachCategories.Uncategorized]: {
              haltezeit: 0,
              no_halt: true,
            },
          },
          symmetryAxis: null,
          warnings: null,
          labelIds: [],
        },
      ],
      trainrunSections: [
        {
          id: 19,
          sourceNodeId: 5,
          sourcePortId: 97,
          targetNodeId: 1,
          targetPortId: 188,
          travelTime: {
            time: 10,
            consecutiveTime: 10,
            lock: true,
            warning: null,
            timeFormatter: null,
          },
          sourceDeparture: {
            time: 48,
            consecutiveTime: 48,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          sourceArrival: {
            time: 12,
            consecutiveTime: 72,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetDeparture: {
            time: 2,
            consecutiveTime: 62,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetArrival: {
            time: 58,
            consecutiveTime: 58,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          numberOfStops: 0,
          trainrunId: 6,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 418,
                y: 304,
              },
              {
                x: 482,
                y: 304,
              },
              {
                x: 798,
                y: 464,
              },
              {
                x: 862,
                y: 464,
              },
            ],
            textPositions: {
              0: {
                x: 436,
                y: 316,
              },
              1: {
                x: 464,
                y: 292,
              },
              2: {
                x: 844,
                y: 452,
              },
              3: {
                x: 816,
                y: 476,
              },
              4: {
                x: 640,
                y: 372,
              },
              5: {
                x: 640,
                y: 372,
              },
              6: {
                x: 640,
                y: 396,
              },
            },
          },
          warnings: null,
        },
        {
          id: 21,
          sourceNodeId: 5,
          sourcePortId: 70,
          targetNodeId: 1,
          targetPortId: 155,
          travelTime: {
            time: 10,
            consecutiveTime: 10,
            lock: true,
            warning: null,
            timeFormatter: null,
          },
          sourceDeparture: {
            time: 0,
            consecutiveTime: 0,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          sourceArrival: {
            time: 0,
            consecutiveTime: 60,
            lock: false,
            warning: {
              title: "Source Arrival Warning",
              description: "Target arrival time cannot be reached",
            },
            timeFormatter: null,
          },
          targetDeparture: {
            time: 51,
            consecutiveTime: 51,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetArrival: {
            time: 10,
            consecutiveTime: 10,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          numberOfStops: 0,
          trainrunId: 7,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 418,
                y: 336,
              },
              {
                x: 482,
                y: 336,
              },
              {
                x: 798,
                y: 496,
              },
              {
                x: 862,
                y: 496,
              },
            ],
            textPositions: {
              0: {
                x: 436,
                y: 348,
              },
              1: {
                x: 464,
                y: 324,
              },
              2: {
                x: 844,
                y: 484,
              },
              3: {
                x: 816,
                y: 508,
              },
              4: {
                x: 640,
                y: 404,
              },
              5: {
                x: 640,
                y: 404,
              },
              6: {
                x: 640,
                y: 428,
              },
            },
          },
          warnings: null,
        },
        {
          id: 23,
          sourceNodeId: 4,
          sourcePortId: 99,
          targetNodeId: 1,
          targetPortId: 147,
          travelTime: {
            time: 9,
            consecutiveTime: 10,
            lock: true,
            warning: null,
            timeFormatter: null,
          },
          sourceDeparture: {
            time: 49,
            consecutiveTime: 49,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          sourceArrival: {
            time: 11,
            consecutiveTime: 71,
            lock: false,
            warning: {
              title: "Source Arrival Warning",
              description: "Target arrival time cannot be reached",
            },
            timeFormatter: null,
          },
          targetDeparture: {
            time: 3,
            consecutiveTime: 63,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetArrival: {
            time: 58,
            consecutiveTime: 58,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          numberOfStops: 0,
          trainrunId: 8,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1438,
                y: 368,
              },
              {
                x: 1374,
                y: 368,
              },
              {
                x: 1026,
                y: 560,
              },
              {
                x: 962,
                y: 560,
              },
            ],
            textPositions: {
              0: {
                x: 1420,
                y: 356,
              },
              1: {
                x: 1392,
                y: 380,
              },
              2: {
                x: 980,
                y: 572,
              },
              3: {
                x: 1008,
                y: 548,
              },
              4: {
                x: 1200,
                y: 452,
              },
              5: {
                x: 1200,
                y: 452,
              },
              6: {
                x: 1200,
                y: 476,
              },
            },
          },
          warnings: null,
        },
        {
          id: 27,
          sourceNodeId: 4,
          sourcePortId: 82,
          targetNodeId: 1,
          targetPortId: 151,
          travelTime: {
            time: 10,
            consecutiveTime: 10,
            lock: true,
            warning: null,
            timeFormatter: null,
          },
          sourceDeparture: {
            time: 0,
            consecutiveTime: 0,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          sourceArrival: {
            time: 0,
            consecutiveTime: 60,
            lock: false,
            warning: {
              title: "Source Arrival Warning",
              description: "Target arrival time cannot be reached",
            },
            timeFormatter: null,
          },
          targetDeparture: {
            time: 51,
            consecutiveTime: 51,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetArrival: {
            time: 10,
            consecutiveTime: 10,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          numberOfStops: 0,
          trainrunId: 10,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 1438,
                y: 336,
              },
              {
                x: 1374,
                y: 336,
              },
              {
                x: 1026,
                y: 528,
              },
              {
                x: 962,
                y: 528,
              },
            ],
            textPositions: {
              0: {
                x: 1420,
                y: 324,
              },
              1: {
                x: 1392,
                y: 348,
              },
              2: {
                x: 980,
                y: 540,
              },
              3: {
                x: 1008,
                y: 516,
              },
              4: {
                x: 1200,
                y: 420,
              },
              5: {
                x: 1200,
                y: 420,
              },
              6: {
                x: 1200,
                y: 444,
              },
            },
          },
          warnings: null,
        },
        {
          id: 32,
          sourceNodeId: 1,
          sourcePortId: 148,
          targetNodeId: 5,
          targetPortId: 146,
          travelTime: {
            time: 8,
            consecutiveTime: 10,
            lock: true,
            warning: null,
            timeFormatter: null,
          },
          sourceDeparture: {
            time: 0,
            consecutiveTime: 60,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          sourceArrival: {
            time: 1,
            consecutiveTime: 61,
            lock: false,
            warning: {
              title: "Source Arrival Warning",
              description: "Target arrival time cannot be reached",
            },
            timeFormatter: null,
          },
          targetDeparture: {
            time: 52,
            consecutiveTime: 52,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetArrival: {
            time: 8,
            consecutiveTime: 68,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          numberOfStops: 0,
          trainrunId: 8,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 862,
                y: 560,
              },
              {
                x: 798,
                y: 560,
              },
              {
                x: 482,
                y: 400,
              },
              {
                x: 418,
                y: 400,
              },
            ],
            textPositions: {
              0: {
                x: 844,
                y: 548,
              },
              1: {
                x: 816,
                y: 572,
              },
              2: {
                x: 436,
                y: 412,
              },
              3: {
                x: 464,
                y: 388,
              },
              4: {
                x: 640,
                y: 468,
              },
              5: {
                x: 640,
                y: 468,
              },
              6: {
                x: 640,
                y: 492,
              },
            },
          },
          warnings: null,
        },
        {
          id: 33,
          sourceNodeId: 1,
          sourcePortId: 152,
          targetNodeId: 5,
          targetPortId: 150,
          travelTime: {
            time: 9,
            consecutiveTime: 10,
            lock: true,
            warning: null,
            timeFormatter: null,
          },
          sourceDeparture: {
            time: 13,
            consecutiveTime: 13,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          sourceArrival: {
            time: 48,
            consecutiveTime: 48,
            lock: false,
            warning: {
              title: "Source Arrival Warning",
              description: "Target arrival time cannot be reached",
            },
            timeFormatter: null,
          },
          targetDeparture: {
            time: 38,
            consecutiveTime: 38,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetArrival: {
            time: 22,
            consecutiveTime: 22,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          numberOfStops: 0,
          trainrunId: 10,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 862,
                y: 528,
              },
              {
                x: 798,
                y: 528,
              },
              {
                x: 482,
                y: 368,
              },
              {
                x: 418,
                y: 368,
              },
            ],
            textPositions: {
              0: {
                x: 844,
                y: 516,
              },
              1: {
                x: 816,
                y: 540,
              },
              2: {
                x: 436,
                y: 380,
              },
              3: {
                x: 464,
                y: 356,
              },
              4: {
                x: 640,
                y: 436,
              },
              5: {
                x: 640,
                y: 436,
              },
              6: {
                x: 640,
                y: 460,
              },
            },
          },
          warnings: null,
        },
        {
          id: 34,
          sourceNodeId: 1,
          sourcePortId: 156,
          targetNodeId: 4,
          targetPortId: 154,
          travelTime: {
            time: 9,
            consecutiveTime: 10,
            lock: true,
            warning: null,
            timeFormatter: null,
          },
          sourceDeparture: {
            time: 13,
            consecutiveTime: 13,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          sourceArrival: {
            time: 48,
            consecutiveTime: 48,
            lock: false,
            warning: {
              title: "Source Arrival Warning",
              description: "Target arrival time cannot be reached",
            },
            timeFormatter: null,
          },
          targetDeparture: {
            time: 38,
            consecutiveTime: 38,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetArrival: {
            time: 22,
            consecutiveTime: 22,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          numberOfStops: 0,
          trainrunId: 7,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 962,
                y: 496,
              },
              {
                x: 1026,
                y: 496,
              },
              {
                x: 1374,
                y: 304,
              },
              {
                x: 1438,
                y: 304,
              },
            ],
            textPositions: {
              0: {
                x: 980,
                y: 508,
              },
              1: {
                x: 1008,
                y: 484,
              },
              2: {
                x: 1420,
                y: 292,
              },
              3: {
                x: 1392,
                y: 316,
              },
              4: {
                x: 1200,
                y: 388,
              },
              5: {
                x: 1200,
                y: 388,
              },
              6: {
                x: 1200,
                y: 412,
              },
            },
          },
          warnings: null,
        },
        {
          id: 36,
          sourceNodeId: 1,
          sourcePortId: 189,
          targetNodeId: 4,
          targetPortId: 185,
          travelTime: {
            time: 10,
            consecutiveTime: 10,
            lock: true,
            warning: null,
            timeFormatter: null,
          },
          sourceDeparture: {
            time: 0,
            consecutiveTime: 60,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          sourceArrival: {
            time: 0,
            consecutiveTime: 60,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetDeparture: {
            time: 50,
            consecutiveTime: 50,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          targetArrival: {
            time: 10,
            consecutiveTime: 70,
            lock: false,
            warning: null,
            timeFormatter: null,
          },
          numberOfStops: 0,
          trainrunId: 6,
          resourceId: 0,
          specificTrainrunSectionFrequencyId: null,
          path: {
            path: [
              {
                x: 962,
                y: 464,
              },
              {
                x: 1026,
                y: 464,
              },
              {
                x: 1374,
                y: 272,
              },
              {
                x: 1438,
                y: 272,
              },
            ],
            textPositions: {
              0: {
                x: 980,
                y: 476,
              },
              1: {
                x: 1008,
                y: 452,
              },
              2: {
                x: 1420,
                y: 260,
              },
              3: {
                x: 1392,
                y: 284,
              },
              4: {
                x: 1200,
                y: 356,
              },
              5: {
                x: 1200,
                y: 356,
              },
              6: {
                x: 1200,
                y: 380,
              },
            },
          },
          warnings: null,
        },
      ],
      trainruns: [
        {
          id: 6,
          name: "X",
          categoryId: 0,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [],
        },
        {
          id: 7,
          name: "X",
          categoryId: 1,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [],
        },
        {
          id: 8,
          name: "X",
          categoryId: 3,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [],
        },
        {
          id: 10,
          name: "X",
          categoryId: 2,
          frequencyId: 3,
          trainrunTimeCategoryId: 0,
          labelIds: [],
        },
      ],
      resources: [
        {
          id: 1,
          capacity: 2,
        },
        {
          id: 2,
          capacity: 2,
        },
        {
          id: 3,
          capacity: 2,
        },
        {
          id: 4,
          capacity: 2,
        },
        {
          id: 5,
          capacity: 2,
        },
        {
          id: 6,
          capacity: 2,
        },
        {
          id: 7,
          capacity: 2,
        },
        {
          id: 8,
          capacity: 2,
        },
        {
          id: 9,
          capacity: 2,
        },
        {
          id: 10,
          capacity: 2,
        },
        {
          id: 11,
          capacity: 2,
        },
        {
          id: 12,
          capacity: 2,
        },
        {
          id: 13,
          capacity: 2,
        },
      ],
      metadata: {
        analyticsSettings: {
          originDestinationSettings: {
            connectionPenalty: 5,
          }
        },
        trainrunCategories: [
          {
            id: 0,
            order: 0,
            shortName: "EC",
            name: "International",
            colorRef: "EC",
            fachCategory: HaltezeitFachCategories.IPV,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          }, // -> Gruppe ROT
          {
            id: 1,
            order: 1,
            shortName: "IC",
            name: "InterCity",
            colorRef: "IC",
            fachCategory: HaltezeitFachCategories.A,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          }, // -> Gruppe ROT
          {
            id: 2,
            order: 2,
            shortName: "IR",
            name: "InterRegio",
            colorRef: "IR",
            fachCategory: HaltezeitFachCategories.B,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          }, // -> Gruppe BLAU
          {
            id: 3,
            order: 3,
            shortName: "RE",
            name: "RegioExpress",
            colorRef: "RE",
            fachCategory: HaltezeitFachCategories.C,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          }, // -> Gruppe GRÜN
          {
            id: 4,
            order: 4,
            shortName: "S",
            name: "RegioUndSBahnverkehr",
            colorRef: "S",
            fachCategory: HaltezeitFachCategories.D,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 2,
            nodeHeadwayNonStop: 2,
            sectionHeadway: 2,
          }, // -> Gruppe SCHWARZ
          {
            id: 5,
            order: 5,
            shortName: "GEX",
            name: "GüterExpress",
            colorRef: "GEX",
            fachCategory: HaltezeitFachCategories.Uncategorized,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 3,
            nodeHeadwayNonStop: 3,
            sectionHeadway: 3,
          }, // -> Gruppe BLAUVIOLETT
          {
            id: 6,
            order: 6,
            shortName: "G",
            name: "Güterverkehr",
            colorRef: "G",
            fachCategory: HaltezeitFachCategories.Uncategorized,
            minimalTurnaroundTime: 4,
            nodeHeadwayStop: 3,
            nodeHeadwayNonStop: 3,
            sectionHeadway: 3,
          }, // -> Gruppe BLAUVIOLETT
        ],
        trainrunFrequencies: [
          {
            id: 0,
            order: 0,
            frequency: 15,
            offset: 0,
            shortName: "15",
            name: "verkehrt viertelstündlich",
            linePatternRef: LinePatternRefs.Freq15,
          },
          {
            id: 1,
            order: 0,
            frequency: 20,
            offset: 0,
            shortName: "20",
            name: "verkehrt im 20 Minuten Takt",
            linePatternRef: LinePatternRefs.Freq20,
          },
          {
            id: 2,
            order: 0,
            frequency: 30,
            offset: 0,
            shortName: "30",
            name: "verkehrt halbstündlich",
            linePatternRef: LinePatternRefs.Freq30,
          },
          {
            id: 3,
            order: 0,
            frequency: 60,
            offset: 0,
            shortName: "60",
            name: "verkehrt stündlich",
            linePatternRef: LinePatternRefs.Freq60,
          },
          {
            id: 4,
            order: 0,
            frequency: 120,
            offset: 0,
            shortName: "120",
            name: "verkehrt zweistündlich",
            linePatternRef: LinePatternRefs.Freq120,
          },
        ],
        trainrunTimeCategories: [
          {
            id: 0,
            order: 0,
            shortName: "7/24",
            name: "verkehrt uneingeschränkt",
            dayTimeInterval: [],
            weekday: [1, 2, 3, 4, 5, 6, 7],
            linePatternRef: LinePatternRefs.TimeCat7_24,
          },
          {
            id: 1,
            order: 0,
            shortName: "HVZ",
            name: "verkehrt zur Hauptverkehrszeit",
            dayTimeInterval: [
              {from: 360, to: 420},
              {from: 960, to: 1140},
            ],
            weekday: [1, 2, 3, 4, 5, 6, 7],
            linePatternRef: LinePatternRefs.TimeCatHVZ,
          },
          {
            id: 2,
            order: 0,
            shortName: "zeitweise",
            name: "verkehrt zeitweise",
            dayTimeInterval: [],
            weekday: [],
            linePatternRef: LinePatternRefs.TimeZeitweise,
          },
        ],
        netzgrafikColors: [],
      },
      freeFloatingTexts: [],
      labels: [],
      labelGroups: [],
      filterData: {
        filterSettings: [],
      },
    };
  }
}
