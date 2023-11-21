import fetcher from "@/lib/fetcher"
import { PeopleDTO } from "./people.types"

export const getPeople = async () => {
  const res = await fetcher.get<PeopleDTO[]>('/people')
  return res
}
