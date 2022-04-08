import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import TextError from "../TextError";
import Bottom from "../ButtonForm";
import ButtomLink from "../ButtonLinkForm";

import email from "../../img/icons/email.svg";
import password from "../../img/icons/lock.svg";
import name from "../../img/icons/name.svg";

import "../../css/main.min.css";

export default function RegisterForm() {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Введите, пожалуйста, Ваш email корректно.")
      .required("Обязательное поле. Введите, пожалуйста, Ваш email."),
    password: yup
      .string()
      .min(6, "Введите минимум 6 символов.")
      .max(12, "Введите максимум 12 символов.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/,
        "Пароль должен содержать цифры, буквы большие и маленькие."
      )
      .required("Обязательное поле. Введите, пожалуйста, Ваш пароль."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Пароли не совпадают.")
      .required("Обязательное поле. Повторите, пожалуйста, пароль."),
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Введите только буквы."
      )
      .min(1, "Введите, пожалуйста, Ваше имя.")
      .max(12, "Введите максимум 12 символов.")
      .required("Введите, пожалуйста, Ваше имя."),
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
            <div className="formComponent">
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
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Подтвердите пароль"
                      className="formField"
                    />
                  </div>
                  <ErrorMessage name="confirmPassword" component={TextError} />
                </div>

                <div className="inputError">
                  <div className="input">
                    <img
                      src={name}
                      alt="password"
                      height={24}
                      className="formImg"
                    />
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Ваше имя"
                      className="formField"
                    />
                  </div>
                  <ErrorMessage name="name" component={TextError} />
                </div>
                <Bottom
                  bottomTitle={"регистрация"}
                  disabled={!formik.isValid}
                />
              </Form>
              <ButtomLink bottomTitle={"вход"} link={"/login"} />
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
