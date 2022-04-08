import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import { ReactComponent as Calendar } from '../../img/icons/calendar.svg';
import { ReactComponent as CloseModal } from '../../img/icons/close.svg';
import { ReactComponent as SelectArrow } from '../../img/icons/select-arrow.svg';
import '../../css/main.min.css';
import axios from 'axios';

const modalRoot = document.getElementById('modal-root');

function ModalAddTransaction({ closeModal }) {
  const [income, setIncome] = useState(false);
  const [categories, setCategories] = useState([]);
  console.log(income);
  console.log(categories);

  useEffect(() => {
    axios
      .get('https://pure-atoll-67904.herokuapp.com/api/transactions/categories')
      .then(results => setCategories(results.data))
      .catch(error => console.log(error.message));
  }, []);

  return createPortal(
    <div className="Overlay">
      <div className="ModalAddTransaction">
        <CloseModal
          className="Modal__close"
          onClick={() => closeModal(false)}
        />
        <h2 className="Modal__heading">Добавить транзакцию</h2>
        <div class="Switcher">
          <span className="Switcher__option Switcher__income">Доход</span>
          <div className="Switcher__control">
            <input
              onClick={() => setIncome(!income)}
              className="Switcher__toggle"
              type="checkbox"
              name="transaction-type"
              id="switcher-toggle"
              defaultChecked
              aria-label="Выбрать расход или доход"
            />
            <label
              aria-hidden="true"
              class="Switcher__track"
              for="switcher-toggle"
            ></label>
            <div aria-hidden="true" class="Switcher__marker"></div>
          </div>
          <span className="Switcher__option Switcher__spending">Расход</span>
        </div>

        <form className="Modal__form">
          <div className="Modal__select">
            {income ? (
              <select className="Select__income">
                <option defaultValue="" disabled selected>
                  Выберите категорию <SelectArrow />
                </option>
                <option value="">Регулярный</option>
                <option value="">Нерегулярный</option>
              </select>
            ) : (
              <select className="Select__spending">
                <option defaultValue="" disabled selected>
                  Выберите категорию <SelectArrow />
                </option>
                <option value="">Еда</option>
                <option value="">Основное</option>
                <option value="">Досуг</option>
                <option value="">Дети</option>
                <option value="">Развитие</option>
                <option value="">Машина</option>
              </select>
            )}
          </div>
          <div>
            <input type="text" placeholder="0.00" className="Modal__input" />
            <span>
              <Calendar />
            </span>
          </div>
          <input
            type="text"
            placeholder="Комментарий"
            className="Modal__input"
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
      </div>
    </div>,
    modalRoot,
  );
}

export default ModalAddTransaction;
