import css from '@/components/common/Button/Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  isDisabled: boolean;
}

export default function Button({ children, onClick, isDisabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={css.button}>
      {children}
    </button>
  );
}
