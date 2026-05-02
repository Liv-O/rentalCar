import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/Header/Header.client';
import Hero from '@/components/Hero/Hero';

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
      </main>
    </>
  );
}
