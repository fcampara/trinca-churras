import Card from "@/components/Card"
import { FC } from "react";
import { CardScheduleProps } from "./CardSchedule.types";
import styles from "./CardSchedule.module.scss"
import IconPeople from "@/assets/images/icon_people.svg";
import IconMoney from "@/assets/images/icon_money.svg";
import { formatDate, formatMoney } from "@/utils";


const CardSchedule: FC<CardScheduleProps> = (props) => {
  const { amount = 0, date, title, totalPeople, id } = props;
  const formattedAmount = formatMoney(amount);
  const formattedDate = formatDate(date);

  return (
    <li>
      <Card<"a">
        tag="a"
        href={`agenda/${id}`}
        className={styles["card-schedule"]}
      >
        <div className={styles["card-schedule--principal"]}>
          <Card.Title level={1}>{formattedDate}</Card.Title>
          <Card.Title level={2}>{title}</Card.Title>
        </div>
        <Card.Icon
          src={IconPeople}
          alt="Icone de pessoas"
          text={totalPeople}
          className={styles["card-schedule--people"]}
        />
        <Card.Icon
          src={IconMoney}
          alt="Icone monetário"
          text={formattedAmount}
          className={styles["card-schedule--amount"]}
        />
      </Card>
    </li>
  );
}

export default CardSchedule;
