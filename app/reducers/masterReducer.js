export const masterReducer = (state, { type, light, value }) => {
  switch (type) {
    case 'setLightValue': {
      return {
        ...state,
        [`light${light}`]: value
      }
    }
    case 'getMessageFromServer': {
      break
    }
    case 'sendMessageToServer': {
      break
    }
    default: {
      return state
    }
  }
}
