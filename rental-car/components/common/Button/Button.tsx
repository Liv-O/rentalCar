import css from '@/components/common/Button/Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isDisabled: boolean;
  type: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  onClick,
  isDisabled,
  type,
}: ButtonProps) {
  return type === 'button' ? (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={css.button}>
      {children}
    </button>
  ) : (
    <button
      type={type}
      disabled={isDisabled}
      className={type === 'reset' ? css.buttonReset : css.buttonSubmit}>
      {children}
    </button>
  );
}
