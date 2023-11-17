'use server'

import { redirect } from 'next/navigation'

const submit = () => {
  redirect('/agenda')
}

export default submit
