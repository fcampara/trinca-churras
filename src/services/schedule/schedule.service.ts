import { fetcher } from "@/lib/fetcher/fetcher"
import { ScheduleDTO } from "./schedule.types"

export const getSchedules = async () => {
  const res = await fetcher<ScheduleDTO[]>('/schedules')
  return res
}
