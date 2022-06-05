export const VALUE_TYPE = {
  INTEGER: 'integer',
  STRING: 'string'
}

export const COMMAND_SCHEMAS = {
  GET: {
    requiredValues: [
      {
        name: 'key',
        type: 'string',
        default: ''
      }
    ],
    optionalGroups: []
  },
  SET: {
    requiredValues: [
      {
        name: 'key',
        type: 'string',
        default: ''
      },
      {
        name: 'value',
        type: 'string',
        default: ''
      }
    ],
    optionalGroups: [
      [
        {
          name: 'NX',
          type: 'boolean',
          default: null
        },
        {
          name: 'XX',
          type: 'boolean',
          default: null
        }
      ],
      [
        {
          name: 'GET',
          type: 'boolean',
          default: null
        }
      ],
      [
        {
          name: 'EX',
          type: 'integer',
          default: 0
        },
        {
          name: 'PX',
          type: 'integer',
          default: 0
        },
        {
          name: 'EXAT',
          type: 'integer',
          default: 0
        },
        {
          name: 'PXAT',
          type: 'integer',
          default: 0
        },
        {
          name: 'KEEPTTL',
          type: 'boolean',
          default: null
        }
      ]
    ]
  },
  INCR: {
    requiredValues: [
      {
        name: 'key',
        type: 'string',
        default: ''
      }
    ],
    optionalGroups: []
  },
  INCRBY: {
    requiredValues: [
      {
        name: 'key',
        type: 'string',
        default: ''
      },
      {
        name: 'increment',
        type: 'integer',
        default: 1
      }
    ],
    optionalGroups: []
  }
}