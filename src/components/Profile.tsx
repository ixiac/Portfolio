import { socialLinks } from "@/constants";

export const Profile = () => {
  return (
    <aside
      className="max-w-3xl border m-6 border-2 border-neutral-600 bg-neutral-800 text-white p-6
    rounded-lg lg:sticky lg:left-0 lg:top-6 lg:self-start lg:w-96"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-x-10">
          <h1 className="text-2xl font-bold">Bien Marlon</h1>
          <p className="text-sm text-emerald-600">Developer</p>
        </div>

        <div className="flex justify-center">
          <img
            src="/avatar.jpg"
            alt="Bien's Profile"
            className="lg:w-76 rounded-2xl object-cover"
          />
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <p className="text-sm text-neutral-300">Specialization: </p>
          <p className="text-sm capitalize">
            Web Application Development & Data Analytics
          </p>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <p className="text-sm text-neutral-300">Location: </p>
          <p className="text-sm capitalize">Batangas City, Batangas</p>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <p className="text-sm text-neutral-300">Status:</p>
          <p className="text-sm text-green-500 capitalize">
            Open to work
          </p>
        </div>

        <div className="flex gap-3 mt-4">
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pl-0 p-2 text-neutral-300 hover: transition-colors duration-200 hover:text-emerald-500"
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
