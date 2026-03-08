// hooks/useParallax.js
import { useEffect } from "react"

export default function useParallax(){

  useEffect(()=>{

    const hero=document.getElementById("hero")
    const bg=document.querySelector(".hero-bg-image")

    function handleScroll(){

      if(!hero || !bg) return

      const scrolled=window.pageYOffset
      const heroHeight=hero.offsetHeight

      if(scrolled < heroHeight){

        const speed=0.5

        bg.style.transform=
          `translateY(${scrolled * speed}px) scale(1.1)`

      }

    }

    window.addEventListener("scroll",handleScroll)

    return ()=>{
      window.removeEventListener("scroll",handleScroll)
    }

  },[])

}