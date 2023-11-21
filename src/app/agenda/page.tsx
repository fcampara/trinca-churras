import {CardSchedule, CardAdd } from "@/app/agenda/components";
import styles from "@/app/agenda/agenda.module.scss"
import { getSchedules } from "@/services/schedule"

const PageSchedule = async () => {
  const schedules = await getSchedules();

  return (
    <div>
      <ul className={styles["agenda--list"]}>
        {schedules.map((schedule) => (
          <CardSchedule key={schedule.id} {...schedule} />
        ))}
        <CardAdd />
      </ul>
    </div>
  );
}

export default PageSchedule;
