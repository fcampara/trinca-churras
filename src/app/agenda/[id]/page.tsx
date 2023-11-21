import Card from "@/components/Card";
import { getScheduleById } from "@/services/schedule";

const PageAgendaId = async ({
  params,
}: {
  params: { id: string };
}) => {
  const data = await getScheduleById(params.id)
  console.log(data)
  return <Card>My Page {params.id}</Card>;
}

export default PageAgendaId
