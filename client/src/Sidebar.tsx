import { CalendarFold, DollarSign, LayoutDashboard, Megaphone, Package2, Users } from "lucide-react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";


export default function Navbar() {



    return (



        <>



            <div className="hidden border-r bg-muted/40 md:block">

                <div className="flex h-full max-h-screen flex-col gap-2">



                    <div className="flex h-14 border-b items-center px-4 lg:h-[60px] lg:px-6">

                        <Link to="/" className="flex items-center gap-2 font-semibold">
                            <Package2 className="h-6 w-6" />
                            <span className="">Cedar TMS</span>
                        </Link>

                    </div>



                    <div className="flex-1">

                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">

                            <div className="mb-3"></div>

                            <CustomLink
                                to="/dashboard"
                                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 transition-all hover:text-card-foreground"
                            >
                                <LayoutDashboard className="h-4 w-4" />
                                Dashboard
                            </CustomLink>

                            <CustomLink
                                to="/payments"
                                className="flex  items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-card-foreground"
                            >
                                <DollarSign className="h-4 w-4" />
                                Payments
                            </CustomLink>

                            <CustomLink
                                to="/reservations"
                                className="flex  items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-card-foreground"
                            >
                                <CalendarFold className="h-4 w-4" />
                                Reservations{" "}
                            </CustomLink>

                            <CustomLink
                                to="/announcements"
                                className="flex  items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-card-foreground"
                            >
                                <Megaphone className="h-4 w-4" />
                                Announcements
                            </CustomLink>

                            <CustomLink
                                to="/users"
                                className="flex  items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-card-foreground"
                            >
                                <Users className="h-4 w-4" />
                                Users
                            </CustomLink>

                        </nav>

                    </div>



                </div>

            </div>



        </>
    )
}



function CustomLink ({ to, children, ...props }) {

    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <Link
        to={ to }
        className= { isActive ? "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 transition-all hover:text-card-foreground" : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-card-foreground"}
    >
        { children }
    </Link>
    )
}