import Card from "@/components/Card";
import { getScheduleById } from "@/services/schedule";
import { formatDate, formatMoney } from "@/utils";
import IconPeople from "@/assets/images/icon_people.svg";
import IconMoney from "@/assets/images/icon_money.svg";
import styles from "@/app/agenda/[id]/agenda-detail.module.scss"
import Checkbox from "@/components/Checkbox";
import { getPeople } from "@/services/people";

const PageAgendaId = async ({
  params,
}: {
  params: { id: string };
}) => {
  const schedules = await getScheduleById(params.id)
  const people = await getPeople()

  return (
    <Card>
      <div className={styles["agenda-detail"]}>
        <Card.Title level={2}>{formatDate(schedules.date)}</Card.Title>
        <Card.Icon
          src={IconPeople}
          alt="Icone de pessoas"
          text={schedules.totalPeople}
        />
        <Card.Title level={1} color="light">
          {schedules.title}
        </Card.Title>
        <Card.Icon
          src={IconMoney}
          alt="Icone monetário"
          text={formatMoney(schedules.amount)}
        />
      </div>
      <ul className={styles["agenda-detail__list"]}>
        {people.map(({ name, value }) => (
          <li key={name}>
            <Checkbox label={name} />
            <span className={styles["agenda-detail__list-price"]}>
              {formatMoney(value, {
                notation: "standard",
              })}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default PageAgendaId
