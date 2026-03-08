// hooks/useScrollReveal.js
import { useEffect } from "react"

export default function useScrollReveal(){

  useEffect(()=>{

    const options={
      threshold:0.15,
      rootMargin:"0px 0px -100px 0px"
    }

    const observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{

        if(entry.isIntersecting){
          entry.target.classList.add("visible")
        }

      })
    },options)

    const elements=document.querySelectorAll(
      ".scroll-reveal,.section-title,.product-card,.gallery-item,.social-item"
    )

    elements.forEach(el=>observer.observe(el))

    return ()=>{
      elements.forEach(el=>observer.unobserve(el))
    }

  },[])

}