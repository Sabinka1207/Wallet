import { useState } from 'react';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';
import { ReactComponent as AddTransaction } from '../../img/icons/add.svg';

function ButtonAddTransaction() {
  const [isOpen, setIsOpen] = useState(false);

  const modalOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  return (
    <>
      <button onClick={modalOpen} className="ButtonAdd">
        <AddTransaction />
      </button>
      {isOpen && <ModalAddTransaction isOpen={setIsOpen} />}
    </>
  );
}

export default ButtonAddTransaction;
