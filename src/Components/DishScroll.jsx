import React, { useEffect, useState } from 'react'
import LocomotiveScroll from "locomotive-scroll";

  


export default function DishScroll() {
    const locomotiveScroll = new LocomotiveScroll();
    let [getImg , setGetImg]= useState([])
    async function fetchImgFromApi(){
         let DataApi = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
         let convertJson =  await DataApi.json();
        //  console.log(convertJson);
         setGetImg(convertJson?.data?.cards[0]?.card?.card?.imageGridCards?.info)
        //  use (?) so they cannot give hte error 
    }
    useEffect(()=>{
        fetchImgFromApi()
    }, [])
    let [scroller , setScroller] = useState(0)
  return (
    <div className='w-full mt-24 overflow-hiden'>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>What's on your mind?</h1>
            <div id="buttonSectionPreNext" className='flex justify-between items-center gap-3'>
                <button id='leftButton' onClick={()=>{
                    setScroller((prev)=>{
                        // console.log(prev);
                        return prev > 0 ? prev - 40 : 0;
                        // return prev - 40;
                    })
                }} className={`button animate-bounce  rounded-full py-1 ${scroller === 0 ? "bg-slate-200" : "bg-slate-400"} text-white px-2`}><i className="ri-arrow-left-line"></i></button>
                <button id='rightButton'  onClick={(e)=>{
                    setScroller((prev)=>{
                        // console.log( prev );
                        return   prev <= 110 ? prev + 40 : prev;
                        // prev + 40;
                    })
                }}   className={`button animate-bounce rounded-full py-1 ${scroller === 160 ? "bg-slate-200" : "bg-slate-400"} text-white px-2`}><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
        <div className='overflow-auto scroller border-b-2 border-gray-200 slider'>
        <div id='box' className='flex gap-4 pb-3 w-full duration-500 transition-all ease-linear ' style={{transform : `translateX(-${scroller}%)`}} >
            {
                getImg.map((item, index) => (
                    <img  key ={index} className={`w-32 cursor-pointer `} style={{transform : `translateX(-${scroller}%)`}} src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`} alt={index} />
                ))
            }
        </div>
        </div>
    </div>
  )
}

