import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = async () => {
    const session = await auth();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-5 py-0 bg-white shadow-md border-b border-gray-200 font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={180} height={100} className="" />
                </Link>
                <div className="flex justify-between w-48">
                    <div className="font-bold">
                        <Link href="/about">About</Link>
                    </div>
                    <div className="font-bold">
                        <Link href="/blog">Blogs</Link>
                    </div>
                    <div className="font-bold">
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/job/create">
                                <span className="max-sm:hidden button-style">Create</span>
                                <BadgePlus className="size-6 sm:hidden" />
                            </Link>

                            <form
                                action={async () => { "use server"; await signOut({ redirectTo: "/" }); }} >
                                <button type="submit" className="button-style">
                                    <span className="max-sm:hidden">Logout</span>
                                    <LogOut className="size-6 sm:hidden text-red-500 ml-2" />
                                </button>
                            </form>

                            <Link href={`/user/${session?.id}`}>
                                <Avatar className="size-10">
                                    <AvatarImage
                                        src={session?.user?.image || ""}
                                        alt={session?.user?.name || ""}
                                    />
                                    <AvatarFallback>AV</AvatarFallback>
                                </Avatar>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => { "use server"; await signIn("github"); }}>
                            <button type="submit" className="button-style">Login</button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;