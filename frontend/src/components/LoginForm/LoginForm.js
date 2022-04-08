import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import TextError from "../TextError";

export default function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Введите, пожалуйста, Ваш email корректно.")
      .required("Обязательное поле. Введите, пожалуйста, Ваш email."),
    password: yup
      .string()
      .required("Обязательное поле. Введите, пожалуйста, Ваш пароль."),
  });

  const onSubmit = (values, submitProps) => {
    // console.log(values);
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

            <button type="submit" disabled={!formik.isValid}>
              ВХОД
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
