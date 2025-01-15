import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.pc__page}>
      <form className={css.pc__form}>
        <h1>Delivery Order Price Calculator</h1>
        <h2>Details</h2>
        <label className={css.pc__label}>
          Venue slug
          <input className={css.pc__input}></input>
        </label>
        <label className={css.pc__label}>
          Cart value (EUR)
          <input className={css.pc__input} />
        </label>
        <label className={css.pc__label}>
          User latitude
          <input className={css.pc__input} />
        </label>
        <label className={css.pc__label}>
          User longitude
          <input className={css.pc__input} />
        </label>
        <button className={css.pc__button} type="submit">
          Get location
        </button>
        <button className={css.pc__button} type="submit">
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
