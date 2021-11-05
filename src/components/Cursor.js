import React, { useRef, useEffect } from "react";

function Cursor() {
    const cursorDiv = useRef()
    const cursorText = useRef()

    //Affect X Y positon to cursor

    useEffect(() => {
        document.addEventListener("mousemove", (e) =>{
            const mouseX = e.pageX
            const mouseY = e.pageY
            document.querySelector(".cursor div").style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(1)`
        })
    })
    

    return (
        <div className="cursor">
            <div ref={cursorDiv} className="appear">
                <span ref={cursorText}></span>
            </div>
        </div>
    );
  }
  
export default Cursor;

 

  