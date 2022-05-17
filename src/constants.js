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
          default: false
        },
        {
          name: 'XX',
          type: 'boolean',
          default: false
        }
      ],
      [
        {
          name: 'GET',
          type: 'boolean',
          default: false
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
          default: false
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