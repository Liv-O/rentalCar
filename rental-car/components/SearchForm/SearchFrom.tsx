'use client';
import { useState } from 'react';
import Button from '../common/Button/Button';
import SelectFilter from '../SelectFilter/SelectFilter';
import css from './SearchForm.module.css';

interface SearchFormProps {
  brands: string[];
  prices: { min: number; max: number };
  onSearch: (filters: {
    brand: string;
    price: string;
    from: string;
    to: string;
  }) => void;
}
export const convertKmToMiles = (km: number) => {
  return String(Math.round(km / 1.60934));
};

export default function SearchForm({
  brands,
  prices,
  onSearch,
}: SearchFormProps) {
  const [chosenBrand, setChosenBrand] = useState<string>('');
  const [chosenPrice, setChosenPrice] = useState<string>('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const pricesOptions = [];
  for (let i = prices.min; i <= prices.max; i += 10) {
    pricesOptions.push(String(i));
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch({
      brand: chosenBrand,
      price: chosenPrice,
      from: mileageFrom ? convertKmToMiles(Number(mileageFrom)) : '',
      to: mileageTo ? convertKmToMiles(Number(mileageTo)) : '',
    });
  };

  const handleReset = () => {
    setChosenBrand('');
    setChosenPrice('');

    setMileageFrom('');
    setMileageTo('');

    onSearch({
      brand: '',
      price: '',
      from: '',
      to: '',
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      className={css.searchForm}>
      {/* <div className={css.filterWrapper}> */}
      <SelectFilter
        label={'Car brand'}
        placeholder={'Choose a brand'}
        options={brands}
        chosenValue={chosenBrand}
        setChosenValue={setChosenBrand}></SelectFilter>

      <SelectFilter
        label={'Price/ 1 hour'}
        placeholder={'Choose a price'}
        options={pricesOptions}
        chosenValue={chosenPrice ? `To $${chosenPrice}` : null}
        setChosenValue={setChosenPrice}></SelectFilter>

      <div className={css.mileageWrapper}>
        <p className={css.mileageLabel}>Car mileage / km</p>

        <div className={css.inputsMileageWrapper}>
          <div className={css.mileageInputBox}>
            <span className={css.placeholder}>From</span>

            <input
              type="text"
              className={css.input}
              value={mileageFrom}
              onChange={(e) => setMileageFrom(e.target.value)}
            />
          </div>

          <div className={css.divider}></div>

          <div className={css.mileageInputBox}>
            <span className={css.placeholder}>To</span>

            <input
              type="text"
              className={css.input}
              value={mileageTo}
              onChange={(e) => setMileageTo(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={css.formButtonsWrapper}>
        <Button
          type="submit"
          isDisabled={false}>
          Search
        </Button>
        <Button
          type="reset"
          isDisabled={false}>
          Clear filters
        </Button>
      </div>
      {/* </div> */}
    </form>
  );
}
