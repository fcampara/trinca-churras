'use server'

import { CreateScheduleDTO, createSchedule } from '@/services/schedule'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const submit = async (formData: FormData) => {
  const payload: Record<string, any> = {}
  for (const [key, value] of formData) {
    if (!key.includes("ACTION_ID")) payload[key] = value
  }

  await createSchedule(payload as CreateScheduleDTO)
  revalidatePath('/agenda')
  redirect('/agenda')
}

export default submit
