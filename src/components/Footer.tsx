import { socialLinks } from '@/constants';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-neutral-800 mt-20 py-8">
            <div className="container mx-auto px-10 max-w-4xl lg:max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="dark:text-neutral-400 text-sm">
                        © {currentYear} <span className="text-emerald-600">Bien Maranan. </span>All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        {socialLinks.map((social, i) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 dark:text-neutral-400 hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors duration-200"
                                    aria-label={social.label || `Social link ${i + 1}`}
                                >
                                    <Icon className="size-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <p className="text-neutral-500 text-xs">
                        Built with React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};