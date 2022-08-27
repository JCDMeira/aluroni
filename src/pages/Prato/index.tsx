import React from 'react';
import { useParams } from 'react-router-dom';

// import styles from './Prato.module.scss';

const Prato: React.FC = () => {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <h1>prato</h1>
    </div>
  );
};

export default Prato;
