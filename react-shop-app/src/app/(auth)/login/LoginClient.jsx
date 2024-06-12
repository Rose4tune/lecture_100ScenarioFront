'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import LogoPath from '@/assets/colorful.svg';
import { useRouter } from 'next/navigation';
import styles from './Auth.module.scss';
import Loader from '@/components/loader/Loader';

const LoginClient = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();
  const redirectionUser = () => router.push('/');

  const loginUser = (e) => {
    //인증은 firebase 사용할 것임
    e.preventDefault();
    setIsLoading(true);
  }

  const signInWithGoogle = () => {
    //인증은 firebase 사용할 것임
  }

  return (
    <>
      <Loader/>
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image priority src={LogoPath} alt='logo' />
          </h1>
          <form onSubmit={loginUser} className={styles.form}>
            {/* input */}
            input
            <div className={styles.group}>
              {/* 자동 로구인, 비밀반호 수정 */}
              자동 로구인, 비밀반호 수정
            </div>
            <div className={styles.buttonGroup}>
              {/* Button */}
              Button
              <div>
                {/* Button */}
                Button
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default LoginClient