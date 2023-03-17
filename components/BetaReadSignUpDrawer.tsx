import { merriweather } from "@/fonts/merriweather";
import {
  betaReadDefaultValues,
  betaReadReducer,
} from "@/reducers/beta-read-reducer";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Link,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { ChangeEvent, useReducer } from "react";

/** Props for the BetaReadSignUpDrawer */
type BetaReadSignUpDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

/**
 * Sign Up Drawer to become a beta reader for a book
 *
 * @returns BetaReadSignUpDrawer Component
 */
export default function BetaReadSignUpDrawer({
  isOpen,
  onClose,
}: BetaReadSignUpDrawerProps) {
  // State for the form values
  const [state, dispatch] = useReducer(betaReadReducer, betaReadDefaultValues);
  // Variable to launch a toast for a successful request or an unsuccessful request
  const toast = useToast();

  // Custom function that will reset the form values and then close the drawer
  const closeDrawer = () => {
    dispatch({ type: "reset" });
    onClose();
  };

  // Regex to verify proper email address
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  /**
   * Verifies email input from a user
   *
   * @param event ChangeEvent
   * @returns An object containing a boolean value and a potential error message
   */
  function verifyEmail(event: ChangeEvent<HTMLInputElement>) {
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

  /**
   * Helper function that will display a toast message stating if the submission
   * was successful or not
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

  /**
   * Helper function that the necessary data was provided
   *
   * @returns Boolean value. True if the data is valid. False if something is missing or if the data
   * is invalid
   */
  const verifyData = () => {
    let nameError = false;
    let emailError = false;
    let sharingAckError = false;
    let triggerAckError = false;

    nameError = state.name === "" || state.isNameError;
    emailError = state.email === "" || state.isEmailError;
    triggerAckError = state.triggerAck.length == 0;
    sharingAckError = state.sharingAck.length == 0;

    return !nameError && !emailError && !triggerAckError && !sharingAckError;
  };

  /**
   * Helper function that will verify the data before submitting.
   * Calls the API route /beta-read-request which will send the data to a Google Spreadsheet.
   * Then will notify a discord server, if it was successful.
   */
  const submitRequest = async () => {
    // Verfies the data the user submitted
    if (verifyData()) {
      // Closes the drawer
      closeDrawer();
      // Calls a custom API route that will attempt to add the requestor to a
      // Google Spreadsheet. Will also send a notification to a discord server
      const response = await fetch("/api/beta-read-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          socialMedia: state.socialMedia,
        }),
      });

      // If it was sucessful, tell the user!
      if (response.status == 200) {
        showToast(true, "Successfully submitted your request.");
      }
      // If it was unsuccessfull, tell the user!
      else {
        showToast(
          false,
          "There was an error when attempting to process your request. Try again."
        );
      }
    }
  };

  return (
    <Drawer
      isOpen={isOpen}
      onClose={closeDrawer}
      size={{ base: "full", md: "lg" }}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>The Pivot: Beta Read Sign Up</DrawerHeader>
        <DrawerBody>
          <Text fontSize={"sm"}>
            This is the sign up form to become a beta reader for the novel{" "}
            <Text as={"span"} fontWeight={"bold"}>
              The Pivot by Fred Asamoah Jr
            </Text>
            . By completing this form, you agree to read the book and give
            constructive feedback by{" "}
            <Text as={"span"} fontWeight={"bold"}>
              Friday May 12th, 2023
            </Text>
            . Please read the prologue found here before signing up to ensure
            you like the writing style of Fred Asamoah Jr first. (Insert link
            here)
          </Text>
          <br />
          <Text fontSize={"sm"} fontWeight={"bold"}>
            This form is NOT a request for promotional purposes. There will be
            an ARC request at a later date for bloggers and reviewers.
          </Text>
          <br />
          <Text fontSize={"sm"}>
            If you have any questions, please reach fill out the contact form or{" "}
            <Link
              as={NextLink}
              href="mailto:fredasamoahjrwrite@gmail.com"
              target={"_blank"}
              textDecoration={"underline"}
              fontStyle={"italic"}
            >
              <strong>email me</strong>
            </Link>
          </Text>

          <form
            id="beta-read-form"
            onSubmit={(event) => {
              event.preventDefault();
              submitRequest();
            }}
          >
            <VStack spacing={8} align={"start"} width={"100%"}>
              {/** Name */}
              <FormControl mt={8} isRequired>
                <FormLabel fontSize={"sm"}>Name</FormLabel>
                <Input
                  type={"text"}
                  value={state.name}
                  onChange={(event) =>
                    dispatch({
                      type: "update",
                      payload: {
                        ...state,
                        name: event.target.value,
                        isNameError: !event.target.validity.valid,
                        nameErrorMessage: !event.target.validity.valid
                          ? event.target.validationMessage
                          : "",
                      },
                    })
                  }
                />
              </FormControl>

              {/** Email */}
              <FormControl mt={8} isRequired>
                <FormLabel fontSize={"sm"}>Email address</FormLabel>
                <Input
                  type={"email"}
                  value={state.email}
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
              </FormControl>

              {/** Social Media Handle */}
              <FormControl mt={8}>
                <FormLabel fontSize={"sm"}>Social media handle</FormLabel>
                <FormHelperText mb={4} fontSize={"sm"}>
                  Ex. @fred_asamoah_jr_write on TikTok
                </FormHelperText>
                <Input
                  type={"text"}
                  value={state.socialMedia}
                  onChange={(event) => {
                    dispatch({
                      type: "update",
                      payload: {
                        ...state,
                        socialMedia: event.target.value,
                      },
                    });
                  }}
                />
              </FormControl>

              {/** Trigger warnings */}
              <FormControl mt={8} isRequired>
                <FormLabel fontSize={"sm"}>
                  By checking this box, you agree that you have read through the
                  trigger warnings found here
                </FormLabel>
                <CheckboxGroup
                  value={state.triggerAck}
                  onChange={(value) => {
                    dispatch({
                      type: "update",
                      payload: {
                        ...state,
                        triggerAck: value,
                      },
                    });
                  }}
                >
                  <Checkbox
                    type={"checkbox"}
                    value="yes"
                    colorScheme={"black"}
                  />
                </CheckboxGroup>
              </FormControl>

              {/** No Sharing */}
              <FormControl mt={8} isRequired>
                <FormLabel fontSize={"sm"}>
                  By checking his box, you understand that you will be receiving
                  an early copy of{" "}
                  <Text as={"span"} fontWeight={"bold"}>
                    The Pivot by Fred Asamoah Jr
                  </Text>{" "}
                  in exchange for honest feedback and that the work is
                  copyrighted. Sharing it without express and written permission
                  from the author for any reason is prohibited.
                </FormLabel>
                <FormHelperText mb={8} fontSize={"sm"}>
                  Sharing includes any part of the book, in part or whole, for
                  any reason.
                </FormHelperText>
                <CheckboxGroup
                  value={state.sharingAck}
                  onChange={(value) => {
                    dispatch({
                      type: "update",
                      payload: {
                        ...state,
                        sharingAck: value,
                      },
                    });
                  }}
                >
                  <Checkbox
                    type={"checkbox"}
                    value="yes"
                    colorScheme={"black"}
                  />
                </CheckboxGroup>
              </FormControl>
            </VStack>
          </form>
        </DrawerBody>
        <DrawerFooter>
          <Button
            type="submit"
            form="beta-read-form"
            as={motion.button}
            whileHover={{ scale: 0.9, transition: { duration: 0.1 } }}
            whileTap={{ scale: 0.8, borderRadius: "5%" }}
            fontWeight={merriweather.style.fontWeight}
            color={"white"}
            size={"md"}
            bgColor={"black"}
            _hover={{ bgColor: "gray.700" }}
          >
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
