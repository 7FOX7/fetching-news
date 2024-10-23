"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { AnimalData } from "./definitions";

export async function setSelection(selection: string) {
   try {
      const cookieStorage = await cookies(); 
      cookieStorage.set('selection', selection)
   }
   catch(err) {
      throw new Error('There was an error when clicking on selection button: ' + err)
   }

   redirect('/?page=1')
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

export async function getAnimalData() {
   const [selection, data] = await Promise.all([
      getSelection(), 
      getData()
   ])
   .catch((err) => {
      throw new Error('Promise failed when trying to resolve two async functions. More info: ' + err)
   })

   if(selection && data) {
      const animalData: AnimalData = data[selection.value][0]
      return animalData
   }
   redirect('/selection')
}

export async function getData() {
   try {
      const res = await fetch('https://raw.githubusercontent.com/7FOX7/fetching-news-json/refs/heads/main/animals.json'); 
      const data = await res.json();
      return data
   }
   catch(err) {
      throw new Error('There was an error when fetching the data: ' + err)
   }
}