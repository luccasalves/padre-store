import { FormScheme } from "@/pages/auth";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

interface Props {
  handleSubmit(data: FormScheme): void;
  validateEmpty(value: string): string;
  isLoading: boolean;
}

export function FormLogin({ handleSubmit, isLoading, validateEmpty }: Props) {
  return (
    <Box maxW={400} margin={"auto"} py={8}>
      <Text fontSize={"4xl"} as={"b"}>
        Login
      </Text>

      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, actions) => {
          handleSubmit(values);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Field name="username" validate={validateEmpty}>
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.username && form.touched.username}
                >
                  <FormLabel>Usuário</FormLabel>
                  <Input {...field} placeholder="Nome de usuário" />
                  <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password" validate={validateEmpty}>
              {({ field, form }: any) => (
                <FormControl
                  mt={4}
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel>Senha</FormLabel>
                  <Input {...field} placeholder="Senha" type="password" />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={8}
              w={"full"}
              bg={"blackAlpha.900"}
              colorScheme="blackAlpha"
              isLoading={isLoading}
              type="submit"
            >
              Entrar
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
