export const COMMAND = {
  'NONE': null,
  'INCR': 'INCR',
  'GET': 'GET',
  'SET': 'SET'
}

export const VALUE_TYPE = {
  NUMBER: 'number',
  STRING: 'string'
}

export const COMMAND_SCHEMA = {
  GET: {
    requiredValues: [
      {
        name: 'key',
        type: 'string',
        defaultValue: ''
      }
    ],
    optionalGroups: []
  },
  SET: {
    requiredValues: [
      {
        name: 'key',
        type: 'string',
        defaultValue: ''
      },
      {
        name: 'value',
        type: 'string',
        defaultValue: ''
      }
    ],
    optionalGroups: [
      [
        {
          name: 'NX',
          type: 'boolean',
          defaultValue: null
        },
        {
          name: 'XX',
          type: 'boolean',
          defaultValue: null
        }
      ],
      [
        {
          name: 'GET',
          type: 'boolean',
          defaultValue: null
        }
      ],
      [
        {
          name: 'EX',
          type: 'number',
          defaultValue: 0
        },
        {
          name: 'PX',
          type: 'number',
          defaultValue: 0
        },
        {
          name: 'EXAT',
          type: 'number',
          defaultValue: 0
        },
        {
          name: 'PXAT',
          type: 'number',
          defaultValue: 0
        },
        {
          name: 'KEEPTTL',
          type: 'boolean',
          defaultValue: null
        }
      ]
    ]
  },
  INCR: {
    requiredValues: [
      {
        name: 'key',
        type: 'string',
        defaultValue: ''
      }
    ],
    optionalGroups: []
  },
  INCRBY: {
    requiredValues: [
      {
        name: 'key',
        type: 'string',
        defaultValue: ''
      },
      {
        name: 'increment',
        type: 'number',
        defaultValue: 1
      }
    ],
    optionalGroups: []
  }
}