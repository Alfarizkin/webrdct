// hooks/useParticles.js
import { useEffect } from "react"

export default function useParticles(){

  useEffect(()=>{

    const container=document.getElementById("particles")
    const count=30

    function createParticle(){

      const particle=document.createElement("div")
      particle.classList.add("particle")

      particle.style.left=Math.random()*100+"%"

      const size=Math.random()*4+2
      particle.style.width=size+"px"
      particle.style.height=size+"px"

      const duration=Math.random()*15+10
      particle.style.animationDuration=duration+"s"

      container.appendChild(particle)

      setTimeout(()=>{
        particle.remove()
        createParticle()
      },duration*1000)

    }

    for(let i=0;i<count;i++){
      setTimeout(createParticle,i*200)
    }

  },[])

}