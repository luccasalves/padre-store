import { motion } from "framer-motion";

function Layout({ children }: any): JSX.Element {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40,
      }}
    >
      {children}
    </motion.div>
  );
}
export default Layout;
