'use client';
import { useState } from 'react';
import Button from '../common/Button/Button';
import SelectFilter from '../SelectFilter/SelectFilter';
import css from './SearchForm.module.css';

interface SearchFormProps {
  brands: string[];
}

export default function SearchForm({ brands }: SearchFormProps) {
  const [chosenBrand, setChosenBrand] = useState<string | null>(null);
  const [chosenPrice, setChosenPrice] = useState<string | null>(null);
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');
  const priceOptions = ['30', '40', '50', '60', '70', '80'];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({
      brand: chosenBrand,
      price: chosenPrice,
      from: mileageFrom,
      to: mileageTo,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
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
        options={priceOptions}
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
