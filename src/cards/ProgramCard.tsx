"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/cards/ui/card";
import { motion } from "framer-motion";

interface ProgramCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function ProgramCard({ title, icon, children }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="mb-6 border-green-200 card-hover">
        <CardHeader className="flex flex-row items-center space-x-4">
          <div className="p-2 rounded-full bg-green-100 text-green-600">
            {icon}
          </div>
          <CardTitle className="text-xl font-bold text-green-800">{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  );
}