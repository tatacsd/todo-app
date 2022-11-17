import clipboardIMG from '../../assets/clipboard.svg';
import css from './Empty.module.css';
export function Empty() {
  return (
    <div className={css.container}>
      <img src={clipboardIMG} alt="clipboard" />
      <p>
        <strong>You don't have any tasks registered yet</strong>
      </p>
      <p>Create tasks and organize your to-do items</p>
    </div>
  );
}
