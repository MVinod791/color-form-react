import { useState } from "react"


const ImageUpload = () => {
    const [uploadImage,setUploadImage]=useState<string>('')

    const handleChangeImage=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files){
            const imageUrl = URL.createObjectURL(e.target.files[0])
            setUploadImage(imageUrl)
        }
    }
  return (
    <div className="flex gap-2 items-center w-full mt-3">
        <div className="flex flex-col items-start justify-start">
            
            <label className="w-lg h-56 border-2 border-dotted border-gray-400 flex flex-col items-center justify-center rounded-lg cursor-pointer">
            <img src="src/assets/cloud-computing.png" alt="ipload" className="w-8"/>
            <span className="text-gray-500">click here to Upload Image</span>
            <input
                type="file"
                name="image"
                accept="image/*"
                className="hidden"
                onChange={handleChangeImage}
            />
            </label>
        </div>
        {
            uploadImage && (
                <>
                <img className="w-lg h-56" alt="image" src={uploadImage}/>
                <button type="button" className="bg-red-400 p-1" onClick={()=>setUploadImage('')}>Remove</button>
                </>
            )
        }
        </div>
  )
}

export default ImageUpload