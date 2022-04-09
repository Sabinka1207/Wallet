import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Progress } from 'antd';

import LogoWallet from '../LogoWallet/LogoWallet'; //!!!!!!
import Button from '../ButtonForm';
import ButtonLink from '../ButtonLinkForm';
import TextError from '../TextError';

import email from '../../img/icons/email.svg';
import password from '../../img/icons/lock.svg';
import name from '../../img/icons/name.svg';

import "../../css/main.min.css";

export default function RegisterForm() {
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    progress: 0,
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Введите Ваш email корректно.')
      .required('Обязательное поле. Введите Ваш email.'),
    password: yup
      .string()
      .min(6, 'Введите минимум 6 символов.')
      .max(12, 'Введите максимум 12 символов.')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/,
        'Пароль не соответсвует требованям безопасности.',
      )
      .required('Обязательное поле. Введите Ваш пароль.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают.')
      .required('Обязательное поле. Повторите пароль.'),
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Введите только буквы.',
      )
      .min(1, 'Обязательное поле. Введите Ваше имя.')
      .max(12, 'Введите максимум 12 символов.')
      .required('Обязательное поле. Введите Ваше имя.'),
  });

  const onSubmit = (values, submitProps) => {
    console.log(values);
    submitProps.setSubmittingvalues(false);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur={true}
        enableReinitialize
      >
        {({
          values,
          errors,
          touched,

          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => {
          return (
            <div className="formComponentReg">
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
                      value={values.email}
                      placeholder="E-mail"
                      className="formField"
                      onBlur={e => {
                        console.log(e);
                        if (e.currentTarget.value !== '') {
                          values.progress += 25;
                        }
                        handleBlur(e);
                      }}
                    />
                  </div>
                  <ErrorMessage name="email" component={TextError} />
                </div>
                <div className="inputError">
                  <div className="input tooltip">
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
                      value={values.password}
                      placeholder="Пароль"
                      className="formField"
                      onBlur={e => {
                        if (e.currentTarget.value !== '') {
                          values.progress += 25;
                        }
                        handleBlur(e);
                      }}
                    />
                    <span className="tooltiptext">
                      Больше 6 и меньше 12 симвовлов. Содержать цифры, буквы
                      большие и маленькие
                    </span>
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
                      value={values.confirmPassword}
                      placeholder="Подтвердите пароль"
                      className="formField"
                      onBlur={e => {
                        if (e.currentTarget.value !== '') {
                          values.progress += 25;
                        }
                        handleBlur(e);
                      }}
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
                      value={values.name}
                      placeholder="Ваше имя"
                      className="formField"
                      onBlur={e => {
                        if (e.currentTarget.value !== '') {
                          values.progress += 25;
                        }
                        handleBlur(e);
                      }}
                    />
                  </div>
                  <ErrorMessage name="name" component={TextError} />
                  <Progress
                    strokeColor={{ from: '#24CCA7', to: '#24CCA7' }}
                    percent={values.progress}
                    showInfo={false}
                    status="active"
                    className="progressForm"
                  />
                </div>

                <Button bottomTitle={'регистрация'} />
                <ButtonLink bottomTitle={'вход'} link={'/login'} />
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
