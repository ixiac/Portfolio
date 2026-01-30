import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet.tsx';
import { Button } from '@/components/ui/button.tsx';
import { MenuIcon } from 'lucide-react';
import { navLinks, socialLinks } from '@/constants';
import { cn } from '@/lib/utils.ts';


export const Sidebar = () => {
    const [active, setActive] = useState('#hero');
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white border-white m-4 fixed top-4 right-4 z-50 border-2 hover:border-primary 
                bg-neutral-800 py-5 px-5 hover:text-primary cursor-pointer rounded-full">
                    <MenuIcon size={30} />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-84 bg-neutral-800 py-6 pl-10">
                <SheetTitle className="mb-4 text-lg font-semibold text-neutral-300">Menu</SheetTitle>
                <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.label}
                                href={link.link}
                                onClick={() => setActive(link.link)}
                                className={cn("gap-2 flex items-center hover:text-primary text-neutral-300 transition-colors duration-200 text-base",
                                    active === link.link && "text-primary"
                                )}
                            >
                                <Icon className="inline mr-2" size={16} />
                                {link.label}
                            </a>
                        );
                    })}
                </nav>
                <div className="mt-30">
                    <p className='pb-2 font-semibold text-neutral-300'>Socials</p>

                    <div className="flex gap-3">
                        {socialLinks.map((social, i) => {
                            const Icon = social.icon;
                            return (
                            <a
                                key={i}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-neutral-300 hover: transition-colors duration-200 hover:text-primary"
                            >
                                <Icon className="size-4" />
                            </a>
                            )
                        })}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}