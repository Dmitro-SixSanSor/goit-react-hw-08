import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <input
      className={css.input}
      type="text"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
      placeholder="Search by name or number"
    />
  );
}