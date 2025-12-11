import { motion } from "framer-motion";

const transition = (OrigComponent) => {
    return (props) => (
        <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.995 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.995, filter: 'blur(1.5px)' }}
            transition={{ type: 'spring', stiffness: 260, damping: 18, mass: 0.9 }}
            className="will-change-transform will-change-opacity"
        >
            <OrigComponent {...props} />
        </motion.div>
    );
};

export default transition;