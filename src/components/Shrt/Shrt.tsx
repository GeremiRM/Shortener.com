import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Wrapper } from "../Wrapper";
import { Form, Formik } from "formik";
import { InputField } from "../InputField";
import { ButtonComp } from "../ButtonComp";

interface ShrtProps {
  shortenLink: (link: string) => void;
}

const LINK_RGX =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

export const Shrt: React.FC<ShrtProps> = ({ shortenLink }) => {
  return (
    <Box bg="linear-gradient(180deg, white 50%, hsl(257, 7%, 93%) 50%);">
      <Wrapper>
        <Formik
          initialValues={{ link: "" }}
          validate={({ link }) => {
            const errors: { link?: string } = {};

            // input empty
            if (!link || link === "") {
              errors.link = "Please add a link";
            } else if (!LINK_RGX.test(link)) {
              errors.link = "Invalid URL";
            }
            return errors;
          }}
          onSubmit={({ link }, { setSubmitting }) => {
            shortenLink(link);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Box
              bg="url('/images/bg-shorten-mobile.svg') no-repeat top right"
              backgroundColor={"bgDarkViolet"}
              p={{ base: "1.5rem", sm: "2rem" }}
              borderRadius={12}
            >
              <Form>
                <Flex
                  direction={{ base: "column", sm: "row" }}
                  align={{ sm: "center" }}
                  justify={{ sm: "center" }}
                >
                  <Box
                    title="URL in format www.example.com or https://www.example.com"
                    flex="1"
                  >
                    <InputField
                      placeholder="Shorten a link here..."
                      name="link"
                      padding="1.5rem"
                    ></InputField>
                  </Box>

                  <Box mt={{ base: "1rem", sm: "0" }} ml={{ sm: "1rem" }}>
                    <ButtonComp
                      bgColor={"bgCyan"}
                      color={"white"}
                      text="Shorten It!"
                      type="submit"
                      isLoading={isSubmitting}
                      width="100%"
                      padding="1.5rem"
                      height="55px"
                    ></ButtonComp>
                  </Box>
                </Flex>
              </Form>
            </Box>
          )}
        </Formik>
      </Wrapper>
    </Box>
  );
};
