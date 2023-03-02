import React from 'react';
import styles from './Filter.module.css';
import { useSelector, useDispatch } from "react-redux";
import { updFilter } from '..//..//redux/filterSlise';
import { getFiltrState } from 'redux/selectors'

const Filter = () => {
  const filterState = useSelector(getFiltrState);
  const dispatch = useDispatch();

  const  hendleChange = (e) => {
      const findName = e.currentTarget.value;
      dispatch(updFilter(findName));
   };

  return (
    <>
      <p  className={styles.item}>Find contacts by name</p>
      <label className={styles.FilterLable}>
        <input
        className={styles.input}
          onChange={hendleChange}
          type="text"
          name="filter"
          placeholder="Enter name..."
          value={ filterState }
        />
      </label>
    </>
  );
};
export default Filter;


