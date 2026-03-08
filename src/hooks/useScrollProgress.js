// hooks/useScrollProgress.js
import { useEffect } from "react"

export default function useScrollProgress(){

  useEffect(()=>{

    const progress=document.getElementById("scrollProgress")

    function handleScroll(){

      const height=
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const scrolled=(window.pageYOffset / height)*100

      if(progress){
        progress.style.width=scrolled+"%"
      }

    }

    window.addEventListener("scroll",handleScroll)

    return ()=>{
      window.removeEventListener("scroll",handleScroll)
    }

  },[])

}