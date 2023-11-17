import CardSchedule from "@/app/agenda/components/CardSchedule";
import styles from "@/app/agenda/agenda.module.scss"

const PageSchedule = () => {
  return (
    <div>
      <ul className={styles["agenda--list"]}>
        <CardSchedule
          amount={280}
          date={new Date("12/01/2023")}
          title="Níver do Gui"
          totalPeople={15}
        />
        <CardSchedule
          amount={400}
          date={new Date("23/12/2023")}
          title="Teste"
          totalPeople={4}
        />
        <CardSchedule
          amount={140}
          date={new Date("01/06/2023")}
          title="Teste"
          totalPeople={4}
        />
        <CardSchedule
          amount={54.3}
          date={new Date()}
          title="Teste"
          totalPeople={4}
        />
      </ul>
    </div>
  );
}

export default PageSchedule;
