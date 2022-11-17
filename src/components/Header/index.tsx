import rocketImg from '../../assets/rocket.svg';
import todoImg from '../../assets/todo.svg';
import css from './Header.module.css';

export function Header() {
  return (
    <header className={css.container}>
      <img src={rocketImg} alt="Rocket" />
      <img src={todoImg} alt="Todo" />
    </header>
  );
}
