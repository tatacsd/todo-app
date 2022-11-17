import { Trash } from 'phosphor-react';
import { useState } from 'react';
import checkIMG from '../../assets/check.svg';
import uncheckIMG from '../../assets/uncheck.svg';
import css from './Task.module.css';

export interface TaskProps {
  id: string;
  isChecked: boolean;
  text: string;
  onCheck?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export function Task({ id, isChecked, text, onCheck, onDelete }: TaskProps) {
  const [isCheck, setIsCheck] = useState(isChecked);

  const handleCheckButtonClick = () => {
    setIsCheck(!isCheck);
    onCheck && onCheck(id);
  };

  const handleDeleteComment = () => {
    onDelete && onDelete(id);
  };

  return (
    <div className={css.container}>
      {isCheck ? (
        <img src={checkIMG} alt="check" onClick={handleCheckButtonClick} />
      ) : (
        <img src={uncheckIMG} alt="uncheck" onClick={handleCheckButtonClick} />
      )}

      <p className={isCheck ? css.checkedText : ''}>{text}</p>
      <button title="Delete comment" onClick={handleDeleteComment}>
        <Trash size={20} />
      </button>
    </div>
  );
}
