import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.PC__page}>
      <form className={css.PC__form}>
        <h1>Delivery Order Price Calculator</h1>
        <h2>Details</h2>
        <label className={css.PC__label}>
          Venue slug
          <input className={css.PC__input}></input>
        </label>
        <label className={css.PC__label}>
          Cart value (EUR)
          <input className={css.PC__input} />
        </label>
        <label className={css.PC__label}>
          User latitude
          <input className={css.PC__input} />
        </label>
        <label className={css.PC__label}>
          User longitude
          <input className={css.PC__input} />
        </label>
        <button className={css.PC__button} type="submit">
          Get location
        </button>
        <button className={css.PC__button} type="submit">
          Calculate delivery price
        </button>
        <ul>
          <h2> Price breakdown </h2>
          <li>Cart Value</li>
          <li>Delivery fee</li>
          <li>Delivery distance</li>
          <li>Small order surcharge</li>
          <li>Total price</li>
        </ul>
      </form>
    </div>
  );
};
