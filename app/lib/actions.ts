"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function setSelection(selection: string) {
   console.log('still something to prove')
   try {
      const cookieStorage = await cookies(); 
      cookieStorage.set('selection', selection)
   }
   catch(err) {
      throw new Error('There was an error when clicking on selection button: ' + err)
   }

   redirect('/')
}

export async function getSelection() {
   try {
      const cookieStorage = await cookies(); 
      const selection = cookieStorage.get('selection')
      return selection
   }
   catch(err) {
      throw new Error('There was an error when getting the selection: ' + err)
   }
}