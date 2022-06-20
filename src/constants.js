export const COMMAND = {
  PING: 'PING',
  GET: 'GET',
  SET: 'SET',
  INCR: 'INCR',
  INCRBY: 'INCRBY',
  DECR: 'DECR',
  DECRBY: 'DECRBY',
  STRLEN: 'STRLEN'
}

export const COMMAND_TO_PHRASE = {
  [COMMAND.GET]: 'Get',
  [COMMAND.SET]: 'Update',
  [COMMAND.INCR]: 'Increment',
  [COMMAND.INCRBY]: 'Increment by',
  [COMMAND.DECR]: 'Decrement',
  [COMMAND.DECRBY]: 'Decrement by',
  [COMMAND.STRLEN]: 'String length'
}

export const VALUE_TYPE = {
  NUMBER: 'number',
  STRING: 'string',
  BOOLEAN: 'boolean'
}

export const VALUE_TYPE_TO_INPUT_TYPE = {
  [VALUE_TYPE.STRING]: 'text',
  [VALUE_TYPE.BOOLEAN]: 'radio',
  [VALUE_TYPE.NUMBER]: 'number'
}

export const VALUE_TYPE_TO_COMMANDS = {
  [VALUE_TYPE.NUMBER]: [COMMAND.INCR, COMMAND.INCRBY, COMMAND.DECR, COMMAND.DECRBY],
  [VALUE_TYPE.STRING]: [COMMAND.SET, COMMAND.STRLEN]
}

export const COMMAND_TO_METHOD = {
  [COMMAND.PING]: 'get',
  [COMMAND.GET]: 'get',
  [COMMAND.SET]: 'put',
  [COMMAND.INCR]: 'put',
  [COMMAND.INCRBY]: 'put',
  [COMMAND.DECR]: 'put',
  [COMMAND.DECRBY]: 'put',
  [COMMAND.STRLEN]: 'get'
}

export const COMMAND_SCHEMA = {
  [COMMAND.GET]: {
    requiredValues: [
      {
        name: 'key',
        type: VALUE_TYPE.STRING,
        defaultValue: ''
      }
    ],
    optionalGroups: []
  },
  [COMMAND.SET]: {
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
  [COMMAND.INCR]: {
    requiredValues: [
      {
        name: 'key',
        type: VALUE_TYPE.STRING,
        defaultValue: ''
      }
    ],
    optionalGroups: []
  },
  [COMMAND.INCRBY]: {
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
  },
  [COMMAND.DECR]: {
    requiredValues: [
      {
        name: 'key',
        type: VALUE_TYPE.STRING,
        defaultValue: ''
      }
    ],
    optionalGroups: []
  },
  [COMMAND.DECRBY]: {
    requiredValues: [
      {
        name: 'key',
        type: VALUE_TYPE.STRING,
        defaultValue: ''
      },
      {
        name: 'decrement',
        type: VALUE_TYPE.NUMBER,
        defaultValue: 1
      }
    ],
    optionalGroups: []
  },
  [COMMAND.STRLEN]: {
    requiredValues: [
      {
        name: 'key',
        type: VALUE_TYPE.STRING,
        defaultValue: ''
      }
    ],
    optionalGroups: []
  }
}