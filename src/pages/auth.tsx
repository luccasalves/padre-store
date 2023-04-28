import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/header";
import Layout from "@/layout";
import { v4 } from "uuid";

import { useEffect, useState, useRef } from "react";

import { Formik, Form, Field, FieldProps } from "formik";

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast,
} from "@chakra-ui/react";
import handler from "./api/users";
import Router from "next/router";
import { FormRegister } from "@/components/form-register";
import { FormLogin } from "@/components/form-login";

const inter = Inter({ subsets: ["latin"] });

export interface FormScheme {
  username: string;
  password: string;
}
export class User {
  username: string;
  password: string;
  id: string;

  constructor(name: string, pass: string) {
    this.username = name;
    this.password = pass;
    this.id = v4();
  }
}

export default function Auth() {
  const [isLoading, setLoading] = useState(false);
  let users: User[] = [];

  const toast = useToast({
    description: "Usuário criado",
    status: "success",
    position: "top-right",
  });
  const toastRef = useRef<any>();

  function showToast() {
    toastRef.current = toast({
      description: "Usuário ja existe",
      status: "error",
      position: "top-right",
    });
  }

  async function requestLogin(formData: FormScheme) {
    setLoading(true);
    const db = localStorage.getItem("ps-users");
    if (db) {
      const userList = JSON.parse(db) as User[];

      const result = userList.find(
        (user) =>
          user.username == formData.username &&
          user.password === formData.password
      );

      if (result) {
        setTimeout(() => {
          toast({
            description: `Bem vindo de volta ${formData.username} `,
            duration: 1500,
          });
          Router.push("/store");
          localStorage.setItem("ps-current-user", JSON.stringify(result));
          setLoading(false);
        }, 800);

        return;
      }

      toast({
        description: `Usuário não encontrado`,
        status: "warning",
      });

      setTimeout(() => {
        toast({
          description: `Que tal criar uma conta?`,
          status: "info",
        });
      }, 1500);
      setLoading(false);
    }
  }

  async function requestCreateUser(data: FormScheme) {
    setLoading(true);
    const newUser = new User(data.username, data.password);

    const userAlreadyExist = users.find(
      (user) => user.username === newUser.username
    );

    if (userAlreadyExist) {
      showToast();
      return;
    }

    users.push(newUser);
    localStorage.setItem("ps-users", JSON.stringify(users));
    localStorage.setItem("ps-current-user", JSON.stringify(newUser));

    setTimeout(() => {
      setLoading(false);
      toast();
      Router.push("/store");
    }, 1000);
  }

  function validateEmpty(value: string) {
    let error: string = "";
    if (!value) {
      error = "Campo obrigatório";
    }
    return error;
  }

  useEffect(() => {
    const db = localStorage.getItem("ps-users");
    if (db) {
      const list = JSON.parse(db) as User[];

      users = list;

      return;
    }
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Layout>
          <Tabs
            size="md"
            maxW={"400px"}
            margin={"auto"}
            mt={8}
            p={4}
            variant="enclosed"
          >
            <TabList>
              <Tab>Entrar</Tab>
              <Tab>Criar conta</Tab>
            </TabList>
            <TabPanels>
              <TabPanel
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="400"
              >
                <FormLogin
                  handleSubmit={requestLogin}
                  isLoading={isLoading}
                  validateEmpty={(value) => {
                    return validateEmpty(value);
                  }}
                />
              </TabPanel>

              <TabPanel
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="400"
              >
                <FormRegister
                  handleSubmit={requestCreateUser}
                  isLoading={isLoading}
                  validateEmpty={(value) => {
                    return validateEmpty(value);
                  }}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Layout>
      </main>
    </>
  );
}
