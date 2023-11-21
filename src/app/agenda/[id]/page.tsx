import Card from "@/components/Card";
import { getScheduleById } from "@/services/schedule";
import { formatDate, formatMoney } from "@/utils";
import IconPeople from "@/assets/images/icon_people.svg";
import IconMoney from "@/assets/images/icon_money.svg";
import styles from "@/app/agenda/[id]/agenda-detail.module.scss"
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";

const PageAgendaId = async ({
  params,
}: {
  params: { id: string };
}) => {
  const data = await getScheduleById(params.id)

  return (
    <Card>
      <div className={styles["agenda-detail"]}>
        <Card.Title level={2}>{formatDate(data.date)}</Card.Title>
        <Card.Icon
          src={IconPeople}
          alt="Icone de pessoas"
          text={data.totalPeople}
          />
        <Card.Title level={1}>{data.title}</Card.Title>
        <Card.Icon
          src={IconMoney}
          alt="Icone monetário"
          text={formatMoney(data.amount)}
        />
      </div>
      <ul>
        <li><Checkbox label={"Alice"}/> R$20,00</li>
      </ul>
      <Button fullWidth>
        Adicionar
      </Button>
    </Card>
  );
}

export default PageAgendaId
