import { useState } from 'react';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';
import { ReactComponent as AddTransaction } from '../../img/icons/add.svg';

function ButtonAddTransaction() {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <AddTransaction />
      </button>
      {showModal && <ModalAddTransaction />}
    </>
  );
}

export default ButtonAddTransaction;
