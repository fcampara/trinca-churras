import Card from "@/components/Card"
import { FC } from "react";
import { CardScheduleProps } from "./CardSchedule.types";
import styles from "./CardSchedule.module.scss"
import Image from "next/image";
import IconPeople from "@/assets/images/icon_people.svg";
import IconMoney from "@/assets/images/icon_money.svg";
import clsx from "clsx";
import IconDetail from "@/components/IconDetail/IconDetail";

const padStarDate = (date: number) => String(date).padStart(2, "0");
const DEFAULT_INVALID_DATE = "Data inválida"

function formatDate(value: string) {
  if (!value) return DEFAULT_INVALID_DATE;
  const date = new Date(value)
  const day = date.getDate();
  const month = date.getMonth() + 1;
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
  const { amount = 0, date, title, totalPeople, id } = props;
  const formattedAmount = formateMoney(amount);
  const formattedDate = formatDate(date);

  return (
    <li>
      <Card<"a"> tag="a" href={`agenda/${id}`} className={styles["card-schedule"]}>
        <div className={styles["card-schedule--principal"]}>
          <Card.Title level={1}>{formattedDate}</Card.Title>
          <Card.Title level={2}>{title}</Card.Title>
        </div>
        <IconDetail
          src={IconPeople}
          alt="Icone de pessoas"
          text={totalPeople}
          className={styles["card-schedule--people"]}
        />
        <IconDetail
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
