import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Stack({ cards }) {
  const [items, setItems] = useState(cards);

  const moveTopToBack = () => {
    setItems((prev) => {
      const copy = [...prev];
      const first = copy.shift();
      copy.push(first);
      return copy;
    });
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <AnimatePresence>
        {items.map((card, i) => (
          <motion.div
            key={i}
            onClick={i === 0 ? moveTopToBack : undefined}
            initial={{ y: i * 10, scale: 1 - i * 0.05 }}
            animate={{ y: i * 10, scale: 1 - i * 0.05 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: items.length - i,
              cursor: i === 0 ? "pointer" : "default",
            }}
          >
            {card}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
