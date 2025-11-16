import { Skeleton } from "@/components/ui/Skeleton";

// Loading skeleton for ProjectCard
const ProjectCardSkeleton: React.FC = () => {
  return (
    <article className="flex h-[650px] w-full max-w-md flex-col items-center gap-6 overflow-hidden rounded-xl bg-white">
      <Skeleton className="h-[300px] w-full" />
      <div className="flex w-full flex-col gap-6 p-6">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <Skeleton className="h-12 w-full rounded-full" />
      </div>
    </article>
  );
};

export default ProjectCardSkeleton;
