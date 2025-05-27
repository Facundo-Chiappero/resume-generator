import { useEffect, useState } from "react"

export function useLocalStorage<T>({ itemName }: { itemName: string }) {
  const [items, setItems] = useState<T[]>(() => {
    const stored = localStorage.getItem(itemName)
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem(itemName, JSON.stringify(items))
  }, [items, itemName])

  return { items, setItems }
}
