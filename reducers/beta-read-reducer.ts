// Beta Read Form State
export type BetaReadState = {
  name: string,
  isNameError: boolean,
  nameErrorMessage: string,

  email: string,
  isEmailError: boolean,
  emailErrorMessage: string,

  socialMedia: string,

  triggerAck: (string | number)[],
  sharingAck: (string | number)[],
}

// Beta Read Form Actions
export type BetaReadAction = | {
  type: 'reset'
} | {
  type: 'update',
  payload: {
    name: string,
    isNameError: boolean,
    nameErrorMessage: string,

    email: string,
    isEmailError: boolean,
    emailErrorMessage: string,

    socialMedia: string,

    triggerAck: (string | number)[],
    sharingAck: (string | number)[],
  }
}

// Beta Read Form Default Values
export const betaReadDefaultValues = {
  name: "",
  isNameError: false,
  nameErrorMessage: "",

  email: "",
  isEmailError: false,
  emailErrorMessage: "",
  
  socialMedia: "",
  
  triggerAck: [],
  sharingAck: [],
}

// Beta Read Reducer
export const betaReadReducer = (state: BetaReadState, action: BetaReadAction) => {
  switch (action.type) {
    case "reset":
      return betaReadDefaultValues;
    case "update":
      return {
        ...state,
        name: action.payload.name,
        isNameError: action.payload.isNameError,
        nameErrorMessage: action.payload.nameErrorMessage,

        email: action.payload.email,
        isEmailError: action.payload.isEmailError,
        emailErrorMessage: action.payload.emailErrorMessage,

        socialMedia: action.payload.socialMedia,
        triggerAck: action.payload.triggerAck,
        sharingAck: action.payload.sharingAck,
      }
    default:
      throw new Error(`Unknown action type: ${action}`);
  }
}