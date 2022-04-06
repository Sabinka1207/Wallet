import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import TextError from "../TextError";

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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
        return (
          <Form>
            <div>
              <Field type="text" id="email" name="email" placeholder="E-mail" />
              <ErrorMessage name="email" component={TextError} />
            </div>

            <div>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Пароль"
              />
              <ErrorMessage name="password" component={TextError} />
            </div>

            <div>
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Подтвердите пароль"
              />
              <ErrorMessage name="confirmPassword" component={TextError} />
            </div>

            <div>
              <Field type="text" name="name" id="name" placeholder="Ваше имя" />
              <ErrorMessage name="name" component={TextError} />
            </div>

            <button type="submit" disabled={!formik.isValid}>
              РЕГИСТРАЦИЯ
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
