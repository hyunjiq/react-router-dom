import React, {useState, useEffect} from 'react'

function Entry() {
    let count = 0; //일반 변수는 여전히 상태변수를 받지못해서
    // useRef
    const [num, setNum] = useState(0); //랜더링
    useEffect(()=>{
        document.querySelector('button').addEventListener("click",()=>{
            
        })
    },[]); //랜더링 끝나고 나서 html태그로 이해
    return (
        <div>
            <button onClick={
                ()=>{ 
                    setNum(num + 1); // num = 10; 상태변수의 값을 변경하는 상태함수
                    count = num; // 화살표 함수 내에서 저장 안됨
                    }
                }>일반 변수 카운트 하나씩 증가 </button>
            <h2>나는 일반 변수 count의 상태변수 값을 대입해서 출력 : {`${count = num} `}</h2>
        </div>
    )
}

export default Entry
