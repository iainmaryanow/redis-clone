export const COMMAND = {
  PING: 'PING',
  INCR: 'INCR',
  GET: 'GET',
  SET: 'SET'
}

export const VALUE_TYPE = {
  NUMBER: 'number',
  STRING: 'string',
  BOOLEAN: 'boolean'
}

export const COMMAND_SCHEMA = {
  GET: {
    requiredValues: [
      {
        name: 'key',
        type: VALUE_TYPE.STRING,
        defaultValue: ''
      }
    ],
    optionalGroups: []
  },
  SET: {
    requiredValues: [
      {
        name: 'key',
        type: VALUE_TYPE.STRING,
        defaultValue: ''
      },
      {
        name: 'value',
        type: VALUE_TYPE.STRING,
        defaultValue: ''
      }
    ],
    optionalGroups: [
      [
        {
          name: 'nx',
          type: VALUE_TYPE.BOOLEAN,
          defaultValue: null
        },
        {
          name: 'xx',
          type: VALUE_TYPE.BOOLEAN,
          defaultValue: null
        }
      ],
      [
        {
          name: 'get',
          type: VALUE_TYPE.BOOLEAN,
          defaultValue: null
        }
      ],
      [
        {
          name: 'ex',
          type: VALUE_TYPE.NUMBER,
          defaultValue: 0
        },
        {
          name: 'px',
          type: VALUE_TYPE.NUMBER,
          defaultValue: 0
        },
        {
          name: 'exat',
          type: VALUE_TYPE.NUMBER,
          defaultValue: 0
        },
        {
          name: 'pxat',
          type: VALUE_TYPE.NUMBER,
          defaultValue: 0
        },
        {
          name: 'keepttl',
          type: VALUE_TYPE.BOOLEAN,
          defaultValue: null
        }
      ]
    ]
  },
  INCR: {
    requiredValues: [
      {
        name: 'key',
        type: VALUE_TYPE.STRING,
        defaultValue: ''
      }
    ],
    optionalGroups: []
  },
  INCRBY: {
    requiredValues: [
      {
        name: 'key',
        type: VALUE_TYPE.STRING,
        defaultValue: ''
      },
      {
        name: 'increment',
        type: VALUE_TYPE.NUMBER,
        defaultValue: 1
      }
    ],
    optionalGroups: []
  }
}