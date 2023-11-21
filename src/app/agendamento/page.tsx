import Input from "@/components/Input";
import styles from "@/app/agendamento/agendamento.module.scss"
import Button from "@/components/Button";
import submit from "@/app/agendamento/actions"

const PageAgendamento = () => {
  return (
    <form action={submit} className={styles["agendamento"]}>
      <Input required name="title" label="Título" />
      <Input
        required
        name="totalPeople"
        type="number"
        label="Total de pessoas"
      />
      <Input required name="amount" type="number" label="Total de custos" />
      <Input required name="date" type="date" label="Data" />
      <Button type="submit">Salvar</Button>
    </form>
  );
};

export default PageAgendamento;
