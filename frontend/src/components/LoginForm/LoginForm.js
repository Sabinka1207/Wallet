import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import LogoWallet from "../LogoWallet/LogoWallet";
import Bottom from "../ButtonForm";
import ButtomLink from "../ButtonLinkForm";
import TextError from "../TextError";

import email from "../../img/icons/email.svg";
import password from "../../img/icons/lock.svg";

import "../../css/main.min.css";

export default function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Введите Ваш email корректно.")
      .required("Обязательное поле. Введите, Ваш email."),
    password: yup.string().required("Обязательное поле. Введите Ваш пароль."),
  });

  const onSubmit = (values, submitProps) => {
    console.log(values);
    submitProps.setSubmittingvalues(false);
    submitProps.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
            <div className="formComponentLog">
              <div className="logoForm">
                <LogoWallet />
              </div>
              <Form className="form">
                <div className="inputError">
                  <div className="input">
                    <img
                      src={email}
                      alt="email"
                      height={24}
                      className="formImg"
                    />
                    <Field
                      type="text"
                      id="email"
                      name="email"
                      placeholder="E-mail"
                      className="formField"
                    />
                  </div>
                  <ErrorMessage name="email" component={TextError} />
                </div>

                <div className="inputError">
                  <div className="input">
                    <img
                      src={password}
                      alt="password"
                      height={24}
                      className="formImg"
                    />
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Пароль"
                      className="formField"
                    />
                  </div>
                  <ErrorMessage name="password" component={TextError} />
                </div>
                <Bottom bottomTitle={"вход"} disabled={!formik.isValid} />
                <ButtomLink bottomTitle={"регистрация"} link={"/"} />
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
