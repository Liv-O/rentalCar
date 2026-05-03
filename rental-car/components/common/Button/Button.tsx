import css from '@/components/common/Button/Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return <button className={css.button}>{children}</button>;
}
