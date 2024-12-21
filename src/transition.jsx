import { motion } from "framer-motion";


const transition = (OrigComponent) => {
    return (props) => (
        <>
            <motion.div
                className="w-full h-lvh origin-bottom"
                initial={{ y: 10, opacity: 0}}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{duration: 0.3, ease: "easeInOut"}}>
                <OrigComponent {...props}/>
            </motion.div>
        </>
    );
};

export default transition;