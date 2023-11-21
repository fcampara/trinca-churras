import fetcher from "@/lib/fetcher"
import { CreateScheduleDTO, ScheduleDTO } from "./schedule.types"

export const getSchedules = async () => {
  const res = await fetcher.get<ScheduleDTO[]>('/schedules')
  return res
}

export const createSchedule = async (payload: CreateScheduleDTO) => {
  const res = await fetcher.post('/schedules', {
    body: payload
  })
  return res
}
