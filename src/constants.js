export const COMMAND = {
  'INCR': 'INCR',
  'GET': 'GET',
  'SET': 'SET'
}

export const VALUE_TYPE = {
  INTEGER: 'integer',
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
          type: 'integer',
          defaultValue: 0
        },
        {
          name: 'PX',
          type: 'integer',
          defaultValue: 0
        },
        {
          name: 'EXAT',
          type: 'integer',
          defaultValue: 0
        },
        {
          name: 'PXAT',
          type: 'integer',
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
        type: 'integer',
        defaultValue: 1
      }
    ],
    optionalGroups: []
  }
}