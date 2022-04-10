import { ReactComponent as Calendar } from '../../img/icons/calendar.svg';
import { ReactComponent as SelectArrow } from '../../img/icons/select-arrow.svg';
import { Formik } from 'formik';
import Datetime from 'react-datetime';
import { useState } from 'react';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import { addTransaction } from './api/transaction';

function ModalForm({ closeModal, income, categories }) {
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [comment, setComment] = useState('');

  const incomeCategories = categories.filter(
    category => category.type === 'income',
  );
  const spendingCategories = categories.filter(
    category => category.type === 'spending',
  );

  const yesterday = moment().subtract(1, 'day');
  function valid(current) {
    return current.isAfter(yesterday);
  }

  const setSelect = e => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  today = dd + '.' + mm + '.' + yyyy;

  const handleComment = e => {
    setComment(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const transactionObject = {
      category: category,
      income: income,
      date: date,
      comment: comment,
    };
    try {
      await addTransaction(transactionObject);
    } catch (error) {
      console.log(error.toString());
    }
  };

  return (
    <Formik
      initialValues={{ date: '', category: '', amount: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form className="Modal__form" onSubmit={onSubmit}>
          <div className="Modal__select">
            {income ? (
              <>
                <SelectArrow />
                <select
                  className="Select__income"
                  name="category"
                  onChange={setSelect}
                >
                  <option defaultValue="" disabled selected>
                    Выберите категорию
                  </option>
                  {incomeCategories.length > 0 &&
                    incomeCategories.map(({ _id, nameDropdown }) => (
                      <option key={_id} value={_id}>
                        {nameDropdown}
                      </option>
                    ))}
                </select>
              </>
            ) : (
              <>
                <SelectArrow />
                <select
                  className="Select__spending"
                  name="category"
                  onChange={setSelect}
                >
                  <option defaultValue="" disabled selected>
                    Выберите категорию
                  </option>
                  {spendingCategories.length > 0 &&
                    spendingCategories.map(({ _id, nameDropdown }) => (
                      <option key={_id} value={_id}>
                        {nameDropdown}
                      </option>
                    ))}
                </select>
              </>
            )}
          </div>
          <div>
            <input
              type="text"
              name="amount"
              placeholder="0.00"
              className="Modal__input"
            />
            <span className="Modal__date">
              <Datetime
                className="Modal__calendar"
                closeOnSelect="true"
                isValidDate={valid}
                onChange={setDate(today)}
                value={today}
              />
              <Calendar />
            </span>
          </div>
          <input
            type="text"
            placeholder="Комментарий"
            className="Modal__input"
            name="comment"
            onChange={handleComment}
          />
          <div className="Modal__controllers">
            <button type="submit" className="Modal__add">
              Добавить
            </button>
            <button onClick={() => closeModal(false)} className="Modal__cancel">
              Отмена
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default ModalForm;
