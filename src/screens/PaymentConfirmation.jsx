import React from "react";
import RegisterButton from "../components/RegisterButton";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaClock } from "react-icons/fa";
import LoadingScreen from "./LoadingScreen";
import transition from "../transition";
const PaymentConfirmation = () => {
    const [paymentStatus, setPaymentStatus] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPaymentStatus = async () => {
            const userId = localStorage.getItem('userId');
            try {
                const response = await fetch(`https://ocbs.rrex.cc/api/paymentStatus?userId=${userId}`);
                const result = await response.json();
                if (response.ok) {
                    console.log('Payment status:', result);
                    setPaymentStatus(result);
                } else {
                    console.error('Failed to fetch payment status:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching payment status:', error);
            }
            setLoading(false);
        };
        
        fetchPaymentStatus();
    }, []);
    
    if(loading){
        return <LoadingScreen />;
    }

    return (
        <div className="register-info bg-register-bg bg-left-top bg-cover md:h-screen">
            <div className="flex justify-center items-center pt-24 space-x-8 font-head text-4xl text-logan-700">
                {paymentStatus ? "Payment Confirmed" : "Payment Pending"}
            </div>
            <div className="flex justify-center font-body text-xl font-bold items-center space-x-2 md:space-x-4 m-4">
                {paymentStatus ? <FaCheckCircle size={200} className="text-logan-500"/> : <FaClock size={200} className="text-carnation-pink-400"/>}
            </div>
            <div className="flex justify-center font-body text-xl font-bold items-center mx-96 space-x-2 md:space-x-4 m-4">
                {paymentStatus ? "Your payment has been confirmed. Thanks for registering!" : "Your payment is pending confirmation. Please check back within 24 hours to see if it has been approved, or contact the admin rrex in the Discord server for any payment-related issues."}
            </div>
            <RegisterButton message="Return Home " path="/"/>
        </div>
    );
};

export default transition(PaymentConfirmation);