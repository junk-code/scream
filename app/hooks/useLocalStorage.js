/* global localStorage */
import { useState, useEffect } from 'react'
export const useLocalStorage = (key, initalValue) => {
  const [ value, setValue ] = useState(JSON.parse(localStorage.getItem(key)).value || initalValue)
  useEffect(() => localStorage.setItem(key, JSON.stringify({ value })), [ value ])
  return [ value, setValue ]
}
