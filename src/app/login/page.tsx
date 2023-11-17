"use client";

import Input from "@/app/components/Input";
import styles from "@/app/login/login.module.scss";
import Button from "../components/Button";
import submit from "@/app/login/actions";

const PageLogin = () => {
  return (
    <form action={submit} className={styles["login__form"]}>
      <Input label="login" placeholder="e-mail" />
      <Input label="senha" type="password" placeholder="senha" />
      <Button type="submit">Entrar</Button>
    </form>
  );
};

export default PageLogin;
