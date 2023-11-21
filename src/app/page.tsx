import Input from "@/components/Input";
import styles from "@/app/login.module.scss";
import Button from "@/components/Button";
import submit from "@/app/actions";

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
