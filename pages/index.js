import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf7f2] flex flex-col items-center justify-center text-center px-6">
      {/* Top Divider */}
      <div className="w-full max-w-2xl border-t border-black/20 mb-10"></div>

      {/* Logo / Icon */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-6"
      >
        <span className="text-6xl">📰</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-[42px] md:text-[52px] font-serif font-bold leading-snug text-gray-900"
      >
        আমরা কাজ করছি…
        <br />
        <span className="text-black">
          নতুন ওয়েবসাইট <span className="underline decoration-red-600 decoration-4">খুব শীঘ্রই </span> আসছে।
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="text-lg md:text-xl font-serif text-gray-700 mt-4 max-w-2xl"
      >
        একটু অপেক্ষা করুন —
        <span className="font-semibold"> উন্নত মানের অভিজ্ঞতা </span>
        নিয়ে আমরা ফিরছি খুব শীঘ্রই !
      </motion.p>

      {/* Animated Dot */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="mt-10 w-3 h-3 bg-red-600 rounded-full"
      ></motion.div>

      {/* Footer Divider */}
      <div className="w-full max-w-2xl border-b border-black/20 mt-14 mb-4"></div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="text-sm text-gray-600 font-serif"
      >
        © ২০২৬ সত্যধারা প্রতিদিন — All rights reserved.
      </motion.p>
    </div>
  );
}

