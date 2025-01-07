"use client";

import { Card } from "@/cards/ui/card";
import { motion } from "framer-motion";

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export function StatsCard({ icon, title, value }: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="fade-in"
    >
      <Card className="p-6 bg-white/90 backdrop-blur-sm border-green-200 card-hover">
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            {icon}
          </div>
          <div>
            <p className="text-sm text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-green-800">{value}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}