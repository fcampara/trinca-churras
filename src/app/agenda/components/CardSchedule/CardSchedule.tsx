import Card from "@/components/Card"
import { FC } from "react";
import { CardScheduleProps } from "./CardSchedule.types";
import styles from "./CardSchedule.module.scss"
import Image from "next/image";
import IconPeople from "@/assets/images/icon_people.svg";
import IconMoney from "@/assets/images/icon_money.svg";
import clsx from "clsx";

const padStarDate = (date: number) => String(date).padStart(2, "0");
const DEFAULT_INVALID_DATE = "Data inválida"

function formatDate(data: Date) {
  if (!data) return DEFAULT_INVALID_DATE;
  const day = data.getDate();
  const month = data.getMonth() + 1;
  if (isNaN(day) || isNaN(month)) return DEFAULT_INVALID_DATE;
  return `${padStarDate(day)}/${padStarDate(month)}`;
}

function formateMoney(money: number = 0) {
   return new Intl.NumberFormat("pt-BR", {
     notation: "compact",
     style: "currency",
     currency: "BRL",
   }).format(money);
}

const CardSchedule: FC<CardScheduleProps> = (props) => {
  const { amount = 0, date, title, totalPeople } = props;
  const formattedAmount = formateMoney(amount);
  const formattedDate = formatDate(date);

  return (
    <Card tag="li" className={styles["card-schedule"]}>
      <div className={styles["card-schedule--principal"]}>
        <Card.Title level={1}>{formattedDate}</Card.Title>
        <Card.Title level={2}>{title}</Card.Title>
      </div>
      <div
        className={clsx(
          styles["card-schedule--people"],
          styles["card-schedule__detail"]
        )}
      >
        <Image src={IconPeople} alt="Icone de pessoas" />
        {totalPeople}
      </div>
      <div
        className={clsx(
          styles["card-schedule--amount"],
          styles["card-schedule__detail"]
        )}
      >
        <Image src={IconMoney} alt="Icone monetário" />
        {formattedAmount}
      </div>
    </Card>
  );
}

export default CardSchedule;
