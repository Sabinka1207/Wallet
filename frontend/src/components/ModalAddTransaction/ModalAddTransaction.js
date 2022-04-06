import { createPortal } from 'react-dom';
import { useState } from 'react';
import { ReactComponent as AddTransaction } from '../../img/icons/add.svg';
import { ReactComponent as Calendar } from '../../img/icons/calendar.svg';
import { ReactComponent as Spending } from '../../img/icons/spending-button.svg';
import { ReactComponent as CloseModal } from '../../img/icons/close.svg';
import './ModalAddTransaction.scss';
const modalRoot = document.getElementById('modal-root');

function ModalAddTransaction() {
  const [income, setIncome] = useState(false);
  return createPortal(
    <div>
      <CloseModal />
      <h2>Добавить транзакцию</h2>
      <div>
        <span>Доход</span>
        <button>
          <label className="switch">
            <input type="checkbox" onClick={() => setIncome(!income)} />
            {income ? <AddTransaction /> : <Spending />}
            <span className="slider round"></span>
          </label>
        </button>
        <span>Расход</span>
      </div>

      <form>
        <select placeholder="Выберите категорию"></select>
        <label htmlFor="">
          <input type="text" placeholder="0.00" />
        </label>
        <label htmlFor="">
          <input type="text" />
          <Calendar />
        </label>
        <label htmlFor="">
          <input type="text" placeholder="Комментарий" />
        </label>
        <button>Добавить</button>
        <button>Отмена</button>
      </form>
    </div>,
    modalRoot,
  );
}

export default ModalAddTransaction;
