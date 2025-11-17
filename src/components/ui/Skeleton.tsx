import React from "react";
import { cn } from "@/lib/utils";

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-neutral-20", className)}
      {...props}
    />
  );
};

export const SkeletonCard: React.FC = () => {
  return (
    <div className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-neutral-20 bg-white">
      <Skeleton className="h-[280px] w-full" />
      <div className="flex flex-1 flex-col p-6">
        <Skeleton className="mb-3 h-6 w-3/4" />
        <Skeleton className="mb-4 h-4 w-full" />
        <Skeleton className="mb-4 h-4 w-5/6" />
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  );
};

export const SkeletonText: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <div className="space-y-2">
      {[...Array(lines)].map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-4", i === lines - 1 ? "w-3/4" : "w-full")}
        />
      ))}
    </div>
  );
};

export default Skeleton;
