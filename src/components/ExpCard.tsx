import type { ExperienceType } from "@/types";

export const ExpCard = ({ item }: { item: ExperienceType }) => {
  return (
    <div className="relative group">
      <div
        className="absolute -left-7.5 top-2 size-3 group-hover:bg-emerald-600
       rounded-full transition duration-300 bg-gray-800 dark:bg-muted-foreground">
        {" "}
      </div>

      <span className="dark:text-neutral-300 lining-nums group-hover:text-emerald-600 transition duration-300">
        {item.year}
      </span>

      <h3 className="text-lg font-semibold dark:text-white mt-1">{item.title}</h3>

      <p className="text-emerald-600 font-medium mt-1">{item.institute}</p>

      <p className="text-sm dark:text-neutral-400 mt-2">{item.desc}</p>
    </div>
  );
};
