import { CheckCircleIcon } from "@heroicons/react/solid"
import { useEffect, useRef, useState } from "react"
import Confetti from 'react-confetti'
import { useRouter } from "next/router"

const SuccessPage = () => {
    const router = useRouter()
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        setHeight(elementRef.current.clientHeight);
        setWidth(elementRef.current.clientWidth);
    }, []); //empty dependency array so it only runs once at render

    return (
        <div className="h-screen w-screen" ref={elementRef}>
        <Confetti
            height={height }
            width={width }
            numberOfPieces={800}
            recycle={false}
        />
            <main className="max-w-screen-lg mx-auto">
                <div className="flex flex-col p-10 bg-white">
                    <div className="flex items-center space-x-2 mb-5">
                        <CheckCircleIcon 
                            className="text-green-500 h-10"
                        />
                        <h1 className="text-3xl">Thank you, your order has been confirmed</h1>
                    </div>
                    <p>
                        Thank you for shopping with us, we'll send you a confirmation once your item has shipped. If you would like to check the state of your order, please click the link below.
                    </p>
                    <button className="button mt-8" onClick={() => router.push("/orders")}>Go to my orders</button>
                </div>
            </main>
        </div>
    )
}

export default SuccessPage
