import React, { useState } from 'react';
import { IPipe } from '../../interfaces/pipe.interface';
import Modal from '../Modal/Modal';
import './Pipe.scss';

const Pipe = (pipe: IPipe) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={`pipe pipe--${pipe?.color}`}
      onClick={() => setIsModalOpen(true)}
    >
      <p className="pipe__name">{pipe?.name}</p>
      <p className="pipe__count">{pipe?.cards_count} cards</p>
      <Modal
        isModalOpen={isModalOpen}
        pipe={pipe}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default Pipe;
