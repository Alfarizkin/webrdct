// hooks/useSmoothScroll.js
import { useEffect } from "react"

export default function useSmoothScroll() {

  useEffect(() => {

    function handleClick(e){
      e.preventDefault()

      const target = document.querySelector(
        e.currentTarget.getAttribute("href")
      )

      if(target){
        target.scrollIntoView({
          behavior:"smooth",
          block:"start"
        })
      }
    }

    const anchors = document.querySelectorAll('a[href^="#"]')

    anchors.forEach(anchor=>{
      anchor.addEventListener("click",handleClick)
    })

    return ()=>{
      anchors.forEach(anchor=>{
        anchor.removeEventListener("click",handleClick)
      })
    }

  },[])

}