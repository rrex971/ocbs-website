import React from "react";
import RegisterButton from "../components/RegisterButton";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const navigate = useNavigate();
    
    return (
        <div className="register-info bg-register-bg bg-left-top bg-cover md:h-screen">
            <div className="flex justify-center items-center pt-24 space-x-8 font-head text-4xl text-logan-700">
                Pay ₹500 using this UPI QR code
            </div>
            <div className="flex justify-center font-body text-xl font-bold items-center space-x-2 md:space-x-4 m-4">
                Note: Include your osu! username in the 'Note' section of the payment.
            </div>
            <span className="flex justify-center font-body text-xl font-bold  text-logan-700 items-center space-x-2 md:space-x-4">VPA: rohit.as0510@okaxis</span>
            <div className="flex justify-center items-center space-x-2 md:space-x-4 m-16">
                <img src="../UPI.png" className="" alt="UPI QRCode" width='300' />
            </div>
            <RegisterButton message="Continue " path="/"/> // TODO: navigate to payment confirmation status page. 


    </div>
)};


export default Payment;