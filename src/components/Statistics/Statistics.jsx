import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      <div className={style.wrap}>
        {title && <h2 className={style.title}>{title}</h2>}

        <ul className={style.stat__list}>
          {stats.map(({ id, label, percentage }) => (
            <li
              className={style.item}
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={style.label}>{label}</span>
              <span className={style.percentage}>{percentage} %</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
