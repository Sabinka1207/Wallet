import { useState } from 'react';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';
import { ReactComponent as AddTransaction } from '../../img/icons/add.svg';

function ButtonAddTransaction() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <AddTransaction />
      </button>
      {isOpen && <ModalAddTransaction closeModal={setIsOpen} />}
    </>
  );
}

export default ButtonAddTransaction;
