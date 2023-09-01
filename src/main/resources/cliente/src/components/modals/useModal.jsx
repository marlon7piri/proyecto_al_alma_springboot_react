import React, { useState } from 'react'

export  function useModal(initialValue = false) {
const [isOpen, setIsopen] = useState(initialValue)
  

 const openModal =()=>setIsopen(true)
 const closeModal =()=>setIsopen(false)


 return [isOpen,openModal,closeModal]
  
}
