// hooks/useNavbarScroll.js
import { useEffect } from "react"

export default function useNavbarScroll(){

  useEffect(()=>{

    const navbar = document.getElementById("navbar")

    function handleScroll(){

      if(!navbar) return

      if(window.scrollY > 100){
        navbar.classList.add("scrolled")
      }else{
        navbar.classList.remove("scrolled")
      }

    }

    window.addEventListener("scroll",handleScroll)

    return ()=>{
      window.removeEventListener("scroll",handleScroll)
    }

  },[])

}