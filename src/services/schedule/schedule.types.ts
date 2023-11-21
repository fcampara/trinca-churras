
export interface ScheduleDTO {
  id: number;
  amount: number;
  date: string;
  title: string
  totalPeople: number
}

export type CreateScheduleDTO = Omit<ScheduleDTO, "id">

