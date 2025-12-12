import { useState } from 'react'

const ButtonAndDescription = () => {
      const [btnTextColor, setBtntextColor] = useState<string>("#000");
      const [bgColor, setBgColor] = useState<string>("#fff");
      const [color, setColor] = useState<string>("#000");
      
  return (
    <div className='flex items-start flex-col mt-6'>
        <div>
            <button style={{color: btnTextColor,backgroundColor:bgColor}} className='p-2 rounded-sm border' type='button'>I'm Button</button>
            <label htmlFor="color">Text color

                <input type="color" value={btnTextColor} onChange={(e)=>setBtntextColor(e.target.value)} />
            </label>
            <label htmlFor="color">Bg color

                <input type="color" value={bgColor} onChange={(e)=>setBgColor(e.target.value)} />
            </label>
        </div>

        <div>
            <p style={{color:color}} >This is about the button and description section. pick the color picker for different colors </p>
            <label htmlFor="">
                <input type="color" value={color} onChange={(e)=>setColor(e.target.value)} />
            </label>
        </div>
    </div>
  )
}

export default ButtonAndDescription