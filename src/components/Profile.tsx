import { socialLinks } from "@/constants";
import { ModeToggle } from "./mode-toggle";

export const Profile = () => {
  return (
    <aside
      className="max-w-3xl border m-6 border-1 dark:border-2 border-emerald-600 bg-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 text-neutral-700 dark:text-white p-6
    rounded-lg lg:sticky lg:left-0 lg:top-6 lg:self-start lg:w-96"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-x-10">
          <h1 className="text-2xl text-black dark:text-white font-bold">Bien Marlon</h1>
          <p className="text-sm text-emerald-600">Developer</p>
        </div>

        <div className="flex justify-center border-0">
          <img
            src="/avatar.jpg"
            alt="Bien's Profile"
            className="lg:w-76 rounded-2xl object-cover dark:border-2 border-emerald-600"
          />
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <p className="text-sm dark:text-neutral-300">Specialization: </p>
          <p className="text-sm capitalize">
            Web Application Development & Data Analytics
          </p>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <p className="text-sm dark:text-neutral-300">Based in: </p>
          <p className="text-sm capitalize">Batangas, Philippines</p>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <p className="text-sm dark:text-neutral-300">Status:</p>
          <p className="text-sm text-green-600 dark:text-green-500 capitalize">Open to work</p>
        </div>

        <div className="flex justify-between mt-4">
          <div className="flex gap-3">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-0 p-2 dark:text-neutral-300 hover: transition-colors duration-200 hover:text-emerald-500"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
          <div className="mt-1">
            <ModeToggle />
          </div>
        </div>
      </div>
    </aside>
  );
};
