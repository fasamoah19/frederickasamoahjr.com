import { ChangeEvent, Dispatch, SetStateAction } from "react";

// Regex to verify proper email address
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/**
 * Verifies email input from a user
 *
 * @param event ChangeEvent
 * @returns An object containing a boolean value and a potential error message
 */
export function verifyEmail(event: ChangeEvent<HTMLInputElement>) {
  let invalid: boolean = false;
  let errorMessage: string = "";

  if (!event.target.validity.valid) {
    invalid = !event.target.validity.valid;
    if (event.target.validity.tooLong) {
      errorMessage = "The email entered is too long.";
    } else if (!event.target.value.match(mailformat)) {
      errorMessage = "Enter a valid email address";
    }
  }

  return { invalid, errorMessage };
}

/** Email object for adding a new subscriber to the newsletter */
export type EmailObject = {
  emailAddress: string;
  isError: boolean;
  errorMessage: string;
  submittedSuccessfully: boolean;
};

/**
 * Adds a new subscriber to the mailing list if a valid email is present.
 * 
 * @param email State object containing email
 * @param setEmail Dispatch function that will set state
 */
export async function joinMailingList(email: EmailObject, setEmail: Dispatch<SetStateAction<EmailObject>>) {
  // Verfiies the email is not empty and that there is no error 
  if (email.emailAddress !== "" && !email.isError) {
    const response = await fetch(
      process.env.NEXT_PUBLIC_MAILER_LITE_API_LINK!,
      {
        method: "POST",
        body: JSON.stringify({
          email: email.emailAddress,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env
            .NEXT_PUBLIC_MAILERLITE_API_TOKEN!}`,
        },
      }
    );
    if (response.status == 201) {
      setEmail({
        emailAddress: "",
        isError: false,
        errorMessage: "false",
        submittedSuccessfully: true,
      });
    }
    else {
      setEmail({
        emailAddress: "",
        isError: true,
        errorMessage: "There was an issue adding this email as a subscriber to the newsletter. Please try again",
        submittedSuccessfully: false,
      });
    }

  } else {
    setEmail({
      ...email,
      isError: true,
      errorMessage: "Please enter a valid email address",
    });
  }
};

/**
 * Helper functiont that verifies the HCaptcha token
 * 
 * @param hcaptchaToken HCaptcha token
 * @returns Response from the server
 */
export async function verifyHCaptcha(hcaptchaToken: string | null) {
  const response = await fetch("/api/verify_hcaptcha", {
    method: "POST",
    body: JSON.stringify({
      hcaptcha: hcaptchaToken,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })

  return response;
}