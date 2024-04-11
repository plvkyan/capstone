import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Menu, Home, DollarSign, CalendarFold, Megaphone, Users, CircleUser, Settings, LayoutDashboard, LogOut } from "lucide-react";
import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import { Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";



export default function Navbar() {



    return (



        <>



            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">



                <Sheet>

                    <SheetTrigger asChild>

                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >

                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>

                        </Button>

                    </SheetTrigger>

                    <CustomHeader>
                    </CustomHeader>




                    <SheetContent side="left" className="flex flex-col">

                        <div className="mb-3"> </div>

                        <nav className="grid gap-2 text-lg font-medium">

                            <Link
                                to="#"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <span className="sr-only"> Grand Cedar Homes </span>
                            </Link>

                            <CustomLink
                                to="/dashboard"
                                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                            >
                                <LayoutDashboard className="h-5 w-5" />
                                Dashboard
                            </CustomLink>

                            <CustomLink
                                to="/payments"
                                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                <DollarSign className="h-5 w-5" />
                                Payments
                            </CustomLink>

                            <CustomLink
                                to="/reservations"
                                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                <CalendarFold className="h-5 w-5" />
                                Reservations
                            </CustomLink>

                            <CustomLink
                                to="/announcemnents"
                                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                <Megaphone className="h-5 w-5" />
                                Announcements
                            </CustomLink>

                            <CustomLink
                                to="/users"
                                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                <Users className="h-5 w-5" />
                                Users
                            </CustomLink>

                        </nav>

                    </SheetContent>

                </Sheet>



                <div className="w-full flex-1">

                </div>

                <DropdownMenu>

                    <DropdownMenuTrigger asChild>

                        <Button variant="secondary" size="icon" className="rounded-full">
                            <CircleUser className="h-5 w-5" />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>

                    </DropdownMenuTrigger>




                    <DropdownMenuContent align="end">

                        <DropdownMenuLabel>Blk. 24 Lt. 1</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link to="/home" className="flex items-center">
                                <Home className="h-6 w-6 pr-2" />
                                Home
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="">
                            <Link to="/settings" className="flex items-center">
                                <Settings className="h-6 w-6 pr-2" />
                                Settings
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                            <Link to="/login" className="flex items-center">
                                <LogOut className="h-6 w-6 pr-2" />
                                Logout
                            </Link>
                        </DropdownMenuItem>

                    </DropdownMenuContent>

                </DropdownMenu>



            </header>



        </>

    )
}

function CustomLink({ to, children, ...props }) {

    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <Link
            to={to}
            className={isActive ? "mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground" : "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"}
        >
            {children}
        </Link>
    )
}

function CustomHeader() {

    const { pathname } = useLocation();

    return (

        <div className="flex items-center">

            <h1 className="text-lg font-semibold md:text-1xl">
                {pathname === "/dashboard" ? "Admin Dashboard"
                : pathname === "/payments" ? "Payments" 
                : pathname === "/settings" ? "Settings" 
                : pathname === "/reservations" ? "Reservations" 
                : pathname === "/reservations/facilities" ? "Reservations" 
                : "Dashboard"}
            </h1>

        </div>
    )
}