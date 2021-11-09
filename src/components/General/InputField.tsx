import React, { InputHTMLAttributes } from "react";
import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { useField } from "formik";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  padding?: any;
  mb?: string;
  w?: string;
  flex?: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={!!error}>
      <Input
        {...field}
        {...props}
        id={field.name}
        backgroundColor={"white"}
        placeholder={props.placeholder}
        _invalid={{
          borderColor: "darkRed",
          _placeholder: { color: "hsl(0, 87%, 85%)" },
        }}
        border={"3px solid transparent"}
        pl="0.75rem"
        fontSize="18px"
      />
      {error ? (
        <FormErrorMessage
          mt="1"
          color={"darkRed"}
          fontStyle={"italic"}
          position={{ sm: "absolute" }}
        >
          {error}
        </FormErrorMessage>
      ) : null}
    </FormControl>
  );
};
