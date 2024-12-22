import { motion } from "framer-motion";


const transition = (OrigComponent) => {
    return (props) => (
        <>
            <motion.div
                className="w-full h-screen origin-bottom"
                initial={{ x: -10, opacity: 0}}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 10, opacity: 0 }}
                transition={{type: "spring", duration: 0.3, ease: "easeInOut"}}>
                <OrigComponent {...props}/>
            </motion.div>
        </>
    );
};

export default transition;