import clipboardIMG from '../../assets/clipboard.svg';
import css from './Empty.module.css';
export function Empty() {
  return (
    <div className={css.container}>
      <img src={clipboardIMG} alt="clipboard" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
