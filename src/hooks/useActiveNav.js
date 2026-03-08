// hooks/useActiveNav.js
import { useEffect } from "react"

export default function useActiveNav(){

  useEffect(()=>{

    const sections=document.querySelectorAll(".section-full")
    const navLinks=document.querySelectorAll(".nav-link")

    function update(){

      const scrollPos=window.pageYOffset + 200

      sections.forEach(section=>{

        const top=section.offsetTop
        const height=section.offsetHeight
        const id=section.getAttribute("id")

        if(scrollPos >= top && scrollPos < top + height){

          navLinks.forEach(link=>{
            link.classList.remove("active")

            if(link.getAttribute("href") === `#${id}`){
              link.classList.add("active")
            }

          })

        }

      })

    }

    window.addEventListener("scroll",update)

    return ()=>{
      window.removeEventListener("scroll",update)
    }

  },[])

}