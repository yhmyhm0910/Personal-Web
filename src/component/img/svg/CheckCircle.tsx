import React from "react";

const CheckCircle: React.FC<{size: number, color: string, display: string}> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel" className='blueTick' display={props.display}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>)
    }

    export default CheckCircle;