import React, { useEffect, useState } from 'react'
import patternDividerDesktop from "/public/images/pattern-divider-desktop.svg"
import patternDividerMobile from "/public/images/pattern-divider-mobile.svg"
import iconDice from "/public/images/icon-dice.svg"

interface AdviceType {
  slip: {
    id:number,
    advice:string
  }
}

const Advice = () => {
  const [error, setError] = useState(false)
  const [advice, setAdvice] = useState<null | AdviceType>(null)
  const [width, setWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(false)

  const maxNumberOfAdvices = 224
  const getRandomID = () => {
    return Math.floor(Math.random() * maxNumberOfAdvices);
  }

  const fetchAdvice = async () => {
    try {
      const res = await fetch(`https://api.adviceslip.com/advice/${getRandomID()}`)
      const data = await res.json()
      setAdvice(data)
    } catch(err) {
      setError(true)
    } 
  }

  useEffect(() => {
    fetchAdvice()
  },[])

    const breakpoint = 375
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)

        if (width < breakpoint) return setIsMobile(false)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [width, breakpoint])


  return (
    <section className='rounded-2xl relative min-h-[450px] sm:min-h-[380px] max-w-[600px] py-5 px-7 gap-6 flex flex-col items-center justify-center bg-DarkGrayishblue'>
      {!error ?
      <>
       <h2 className='text-[1rem] font-thin text-NeonGreen tracking-[5px] uppercase'>Advice #{advice?.slip?.id}</h2>
        <blockquote className='text-center min-h-[150px]  text-LightCyan'>
          <q>{advice?.slip?.advice}</q>
          </blockquote>

          <img src={!isMobile? patternDividerDesktop : patternDividerMobile} alt="icon-divider" />
         <button onClick={fetchAdvice} className='hover:shadow-customShadow transition-shadow absolute -bottom-8 bg-NeonGreen p-5 rounded-full flex items-center justify-center'>
          <img className='w-7 h-7' src={iconDice} alt="icon-dice" />
         </button> 
        </> : <p className='text-red text-center'>Something went wrong. Try again please</p>}
    </section>
  )
}

export default Advice