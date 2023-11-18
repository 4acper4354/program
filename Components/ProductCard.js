import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='my-[35px] mt-[10px] mx-[10px]'>
        
        <div className='w-full cursor-pointer bg-[#F1EFEF] p-[25px] rounded-[20px] hover:bg-[#ddd]'>
            <img className=' w-[90vh] h-[300px] max-w-[400px] sm:max-w-[200px] sm:max-h-[200px]' src={props.image}></img>
            <p className='mt-[5px] text-[15px] font-bold'>{props.name}</p>
            <p>{props.description}</p>
            <p className='text-[20px] font-bold'>{props.price}</p>
        </div>
    
    </div>
  )
}

export default ProductCard
