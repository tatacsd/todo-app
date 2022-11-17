import { Trash } from 'phosphor-react';
import { useState } from 'react';
import checkIMG from '../../assets/check.svg';
import uncheckIMG from '../../assets/uncheck.svg';
import css from './Task.module.css';

export function Task() {
  const [isCheck, setIsCheck] = useState(false);

  const handleCheckButtonClick = () => {
    setIsCheck(!isCheck);
  };

  const handleDeleteComment = () => {
    console.log('delete');
  };

  return (
    <div className={css.container}>
      {isCheck ? (
        <img src={checkIMG} alt="check" onClick={handleCheckButtonClick} />
      ) : (
        <img src={uncheckIMG} alt="uncheck" onClick={handleCheckButtonClick} />
      )}

      <p className={isCheck ? css.checkedText : ''}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button title="Delete comment" onClick={handleDeleteComment}>
        <Trash size={20} />
      </button>
    </div>
  );
}
