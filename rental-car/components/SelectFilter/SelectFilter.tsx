'use client';

import css from '@/components/SelectFilter/SelectFilter.module.css';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface SelectFilterProps {
  label: string;
  placeholder: string;
  options: string[];
  chosenValue: string | null;
  setChosenValue: (value: string) => void;
}

export default function SelectFilter({
  label,
  placeholder,
  options,
  chosenValue,
  setChosenValue,
}: SelectFilterProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (name: string) => {
    setChosenValue(name);
    setIsOpen(false);
  };
  return (
    <>
      {' '}
      <div className={css.selectWrapper}>
        <label className={css.selectLabel}>{label}</label>

        <div
          className={css.dropdown}
          ref={wrapperRef}>
          <button
            type="button"
            className={css.dropdownTrigger}
            onClick={() => setIsOpen((prev) => !prev)}>
            <span>{chosenValue || placeholder}</span>
            <MdKeyboardArrowDown
              size={20}
              className={clsx(css.arrow, isOpen && css.open)}
            />
          </button>

          {isOpen && (
            <div className={css.dropdownMenu}>
              {options.map((option) => (
                <div
                  key={option}
                  className={css.dropdownItem}
                  onClick={() => handleSelect(option)}>
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
