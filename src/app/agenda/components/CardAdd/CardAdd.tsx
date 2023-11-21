import Card from "@/components/Card"
import { FC } from "react";
import { CardScheduleProps } from "./CardAdd.types";
import styles from "./CardAdd.module.scss"
import Image from "next/image";
import ImgBBQ from "@/assets/images/icon_bbq.svg"
import Link from "next/link";

const CardSchedule: FC = (props) => {
  return (
    <li>
      <Card<"a">
        tag="a"
        href={"/agendamento"}
        color="gray"
        className={styles["card-add"]}
      >
        <div className={styles["card-add__image"]}>
          <Image src={ImgBBQ} alt="Icone churrasqueira" />
        </div>
        <Card.Title>Adicionar churras</Card.Title>
      </Card>
    </li>
  );
}

export default CardSchedule;
