import CardSchedule from "@/app/agenda/components/CardSchedule";
import styles from "@/app/agenda/agenda.module.scss"
import { getSchedules } from "@/services/schedule"

const PageSchedule = async () => {
  const schedules = await getSchedules();

  return (
    <div>
      <ul className={styles["agenda--list"]}>
        {schedules.map((schedule) => (
          <CardSchedule
            key={schedule.id}
            amount={schedule.amount}
            date={new Date(schedule.date)}
            title={schedule.title}
            totalPeople={schedule.totalPeople}
          />
        ))}
      </ul>
    </div>
  );
}

export default PageSchedule;
