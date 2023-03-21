/** Contact Me Form State */
export type ContactMeState = {
  name: string;
  isNameError: boolean;
  nameErrorMessage: string;

  email: string;
  isEmailError: boolean;
  emailErrorMessage: string;

  subject: string;
  isSubjectError: boolean;
  subjectErrorMessage: string;

  message: string;
  isMessageError: boolean;
  messageTextErrorMessage: string;

  hcaptchaToken: string | null,
  isHcaptchaError: boolean;
  selectedHCaptcha: boolean;
}

/** Contact Me Form Actions  */
export type ContactMeAction = | { type: 'reset' } | {
  type: "update",
  payload: {
    name: string;
    isNameError: boolean;
    nameErrorMessage: string;

    email: string;
    isEmailError: boolean;
    emailErrorMessage: string;

    subject: string;
    isSubjectError: boolean;
    subjectErrorMessage: string;

    message: string;
    isMessageError: boolean;
    messageTextErrorMessage: string;

    hcaptchaToken: string | null,
    isHcaptchaError: boolean;
    selectedHCaptcha: boolean;
  }
}

/** Default values for state used for the Contact Me Form */
export const contactMeDefaultValues = {
  name: '',
  isNameError: false,
  nameErrorMessage: '',

  email: '',
  isEmailError: false,
  emailErrorMessage: '',

  subject: '',
  isSubjectError: false,
  subjectErrorMessage: '',

  message: '',
  isMessageError: false,
  messageTextErrorMessage: '',

  hcaptchaToken: null,
  isHcaptchaError: false,
  selectedHCaptcha: false,
}

/** Reducer used for the contact me form. */
export const contactMeReducer = (state: ContactMeState, action: ContactMeAction) => {
  switch (action.type) {
    case 'reset':
      return contactMeDefaultValues;
    case 'update':
      return {
        name: action.payload.name,
        isNameError: action.payload.isNameError,
        nameErrorMessage: action.payload.nameErrorMessage,

        email: action.payload.email,
        isEmailError: action.payload.isEmailError,
        emailErrorMessage: action.payload.emailErrorMessage,

        subject: action.payload.subject,
        isSubjectError: action.payload.isSubjectError,
        subjectErrorMessage: action.payload.subjectErrorMessage,

        message: action.payload.message,
        isMessageError: action.payload.isMessageError,
        messageTextErrorMessage: action.payload.messageTextErrorMessage,

        hcaptchaToken: action.payload.hcaptchaToken,
        isHcaptchaError: action.payload.isHcaptchaError,
        selectedHCaptcha: action.payload.selectedHCaptcha
      }
    default:
      throw new Error(`Unknown action type: ${action}`);
  }
}