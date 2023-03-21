import Header from "@/components/Header";
import { verifyEmail, verifyHCaptcha } from "@/lib/helper-functions";
import {
  contactMeDefaultValues,
  contactMeReducer,
} from "@/reducers/contact-me-reducer";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { motion } from "framer-motion";
import { useReducer, useRef } from "react";
import HeadComponent from "../components/HeadComponent";

/**
 * Contact Page
 *
 * @returns ContactPage Component
 */
export default function ContactPage() {
  // Used for hCaptcha
  const hcaptchaRef = useRef<HCaptcha>(null);

  // State for the contact form
  const [state, dispatch] = useReducer(
    contactMeReducer,
    contactMeDefaultValues
  );

  // Variable to launch a toast for a successful request or an unsuccessful request
  const toast = useToast();

  /**
   * Helper function that will display a toast message stating if the submission was successful
   * or not
   *
   * @param success Variable stating if the request was successful or not
   * @param message Message to display in the toast
   */
  const showToast = (success: boolean, message: string) => {
    toast({
      title: success ? "Request Sent" : "Error occured",
      description: `${message}`,
      status: success ? "success" : "error",
      isClosable: true,
      duration: 3000,
      colorScheme: "blackAlpha",
    });
    dispatch({ type: "reset" });
  };

  /** Helper function that verifies the form data */
  const verifyData = () => {
    let nameError = false;
    let emailError = false;
    let subjectError = false;
    let messageError = false;
    let hcaptchaError = false;

    nameError = state.name === "" || state.isNameError;
    emailError = state.email === "" || state.isEmailError;
    subjectError = state.subject === "" || state.isSubjectError;
    messageError = state.message === "" || state.isMessageError;
    hcaptchaError = state.hcaptchaToken === "" || state.hcaptchaToken == null;

    dispatch({
      type: "update",
      payload: {
        ...state,
        isNameError: nameError,
        isEmailError: emailError,
        isSubjectError: subjectError,
        isMessageError: messageError,
        isHcaptchaError: hcaptchaError,
      },
    });

    return (
      !nameError &&
      !emailError &&
      !subjectError &&
      !messageError &&
      !hcaptchaError
    );
  };

  /**
   * This helper function will verify the form data and the hcaptcha token before sending
   * the message to discord
   */
  const submitContactForm = async () => {
    if (verifyData()) {
      // Verify HCaptcha Token
      const hcaptchaResponse = await verifyHCaptcha(state.hcaptchaToken);
      if (hcaptchaResponse.status == 200) {
        dispatch({
          type: "update",
          payload: { ...state, hcaptchaToken: null, isSubmitting: true, },
        });

        // Sends notification to discord
        const discordResponse = await fetch("/api/contact-me-request", {
          method: "POST",
          body: JSON.stringify({
            name: state.name,
            email: state.email,
            subject: state.subject,
            message: state.message,
          }),
          headers: {
            "Content-Type": "application/json",
          }
        });

        if (discordResponse.status == 200) {
          // Successfully send message to discord server
          showToast(
            true,
            "Successfully notified. We'll get back to you as soon as possible."
          );
        } else {
          // There was an issue sending the message to the discord server
          showToast(
            false,
            "An error occured when attempting to process your request. Try again."
          );
        }
      } else {
        // If there was an issue with the Hcaptcha
        showToast(
          false,
          "An error occured when attempting to process your request. Try again."
        );
      }
    }
  };

  return (
    <>
      <HeadComponent title="Contact | Frederick Asamoah Jr" />
      <Box as="main" height={"100%"}>
        <Flex width={"100%"} direction={"column"}>
          <Header />
          <Flex w={"100%"} direction={"column"} py={{ base: 8, md: 32 }}>
            <Text textStyle={"h2"} mb={8}>
              Contact Me
            </Text>
            {/** Contact Form */}
            <form
              id="submit-contact-form"
              onSubmit={(event) => {
                event.preventDefault();
                submitContactForm();
              }}
            >
              <VStack
                spacing={6}
                width={{ base: "90%", sm: "80%", md: "70%", lg: "40%" }}
                mx={"auto"}
              >
                {/** Name */}
                <FormControl isRequired isInvalid={state.isNameError}>
                  <FormLabel fontSize={14}>Name</FormLabel>
                  <Input
                    type={"text"}
                    variant={"outline"}
                    size={"md"}
                    fontSize={16}
                    minLength={2}
                    value={state.name}
                    maxLength={65336}
                    onChange={(event) => {
                      dispatch({
                        type: "update",
                        payload: {
                          ...state,
                          name: event.target.value,
                          isNameError: !event.target.validity.valid,
                          nameErrorMessage: event.target.validationMessage,
                        },
                      });
                    }}
                  />
                  {state.isNameError ? (
                    <FormErrorMessage>
                      {state.nameErrorMessage}
                    </FormErrorMessage>
                  ) : (
                    <></>
                  )}
                </FormControl>

                {/** Email */}
                <FormControl isRequired isInvalid={state.isEmailError}>
                  <FormLabel fontSize={14}>Email</FormLabel>
                  <Input
                    type={"text"}
                    variant={"outline"}
                    fontSize={16}
                    minLength={2}
                    value={state.email}
                    maxLength={65336}
                    onChange={(event) => {
                      const { invalid, errorMessage } = verifyEmail(event);
                      dispatch({
                        type: "update",
                        payload: {
                          ...state,
                          email: event.target.value,
                          isEmailError: invalid,
                          emailErrorMessage: errorMessage,
                        },
                      });
                    }}
                  />
                  {state.isEmailError ? (
                    <FormErrorMessage>
                      {state.emailErrorMessage}
                    </FormErrorMessage>
                  ) : (
                    <></>
                  )}
                </FormControl>

                {/** Subject */}
                <FormControl isRequired isInvalid={state.isSubjectError}>
                  <FormLabel fontSize={14}>Subject</FormLabel>
                  <Input
                    type={"text"}
                    variant={"outline"}
                    fontSize={16}
                    minLength={2}
                    maxLength={65336}
                    value={state.subject}
                    onChange={(event) => {
                      dispatch({
                        type: "update",
                        payload: {
                          ...state,
                          subject: event?.target.value,
                          isSubjectError: !event.target.validity.valid,
                          subjectErrorMessage: event.target.validationMessage,
                        },
                      });
                    }}
                  />
                  {state.isSubjectError ? (
                    <FormErrorMessage>
                      {state.subjectErrorMessage}
                    </FormErrorMessage>
                  ) : (
                    <></>
                  )}
                </FormControl>

                {/** Message */}
                <FormControl isRequired isInvalid={state.isMessageError}>
                  <FormLabel fontSize={14}>Message</FormLabel>
                  <Textarea
                    variant={"outline"}
                    fontSize={16}
                    value={state.message}
                    onChange={(event) => {
                      dispatch({
                        type: "update",
                        payload: {
                          ...state,
                          message: event.target.value,
                          isMessageError: !event.target.validity.valid,
                          messageTextErrorMessage:
                            event.target.validationMessage,
                        },
                      });
                    }}
                  />
                  {state.isMessageError ? (
                    <FormErrorMessage>
                      {state.messageTextErrorMessage}
                    </FormErrorMessage>
                  ) : (
                    <></>
                  )}
                </FormControl>

                {/** HCaptcha */}
                <FormControl isInvalid={state.isHcaptchaError}>
                  <Flex
                    align={"center"}
                    justify={"center"}
                    direction={"column"}
                  >
                    <HCaptcha
                      sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
                      ref={hcaptchaRef}
                      size={"normal"}
                      onVerify={(token) => {
                        dispatch({
                          type: "update",
                          payload: {
                            ...state,
                            hcaptchaToken: token,
                          },
                        });
                      }}
                    />
                    {state.isHcaptchaError ? (
                      <FormErrorMessage>
                        Please select the HCaptcha
                      </FormErrorMessage>
                    ) : (
                      <></>
                    )}
                  </Flex>
                </FormControl>

                <Button
                  type="submit"
                  form="submit-contact-form"
                  as={motion.button}
                  isLoading={state.isSubmitting}
                  loadingText='Submitting'
                  whileHover={{ scale: 0.9, transition: { duration: 0.1 } }}
                  whileTap={{ scale: 0.8, borderRadius: "5%" }}
                  fontWeight={400}
                  color={"white"}
                  size={"lg"}
                  bgColor={"black"}
                  _hover={{ bgColor: "gray.700" }}
                >
                  Submit
                </Button>
              </VStack>
            </form>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
