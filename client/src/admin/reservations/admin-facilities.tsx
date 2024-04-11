
import {
    AvatarImage,
    AvatarFallback,
    Avatar
} from "@/components/ui/avatar";


import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


import { CardContent, Card } from "@/components/ui/card";
import { Link, Route, Routes } from "react-router-dom";
import AdminReservations from "./admin-reservations";



export default function AdminFacilities() {



    return (

        <>



            <main className="flex flex-1 flex-col gap-4 lg:gap-4">

                <div className="flex min-h-screen w-full flex-col">

                    <main className="flex flex-1 flex-col gap-3 p-4 md:gap-5 md:p-8">

                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/reservations"> Reservations </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/reservations/facilities"> Facilities </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                            </BreadcrumbList>
                        </Breadcrumb>


                        <Routes>

                            <Route path="/reservations" element={<AdminReservations />} />
                            <Route path="/reservations/facilities" element={<AdminFacilities />} />

                        </Routes>


                        <div>

                            <div className="w-full max-w-6xl gap-2 mb-1">
                                <h1 className="text-2xl font-semibold"> Facilities </h1>
                            </div>

                            <p className="text-muted-foreground">
                                Here are your list of facilities that members are able to reserve.
                            </p>

                        </div>



                        <div className="grid gap-4 md:grid-cols-1 md:gap-5 min-[1160px]:grid-cols-3">

                            <Card className="bg-white rounded-lg overflow-hidden transition-all ease-in-out duration-300 hover:shadow-md">

                                <Link to="#">

                                    <CardContent className="flex flex-row items-center gap-4 p-6">

                                        <Avatar className="mr-2">

                                            <AvatarImage
                                                alt="Channel Logo"
                                                className="rounded-full object-cover aspect-square"
                                                src="/placeholder.svg?height=40&width=40"
                                            />
                                            <AvatarFallback> P </AvatarFallback>

                                        </Avatar>

                                        <div className="space-y-1">
                                            <h2 className="text-lg font-semibold"> Grand Cedar Pavillion </h2>
                                            <p className="text-muted-foreground">
                                                A large space for activities with an open structure at the middle. Has parking for at least 8 cars. Great for celebrations and large gatherings.
                                            </p>
                                        </div>

                                    </CardContent>

                                </Link>

                            </Card>



                            <Card className="bg-white rounded-lg overflow-hidden transition-all ease-in-out duration-300 hover:shadow-md">

                                <Link to="#">

                                    <CardContent className="flex flex-row items-center gap-4 p-6">

                                        <Avatar className="mr-2">

                                            <AvatarImage
                                                alt="Channel Logo"
                                                className="rounded-full object-cover aspect-square"
                                                src="/placeholder.svg?height=40&width=40"
                                            />
                                            <AvatarFallback> MC </AvatarFallback>

                                        </Avatar>

                                        <div className="space-y-1">
                                            <h2 className="text-lg font-semibold"> Main Road Basketball Court </h2>
                                            <p className="text-muted-foreground">
                                                A basketball court right in front of the Grand Cedar Pavillion. It is well lit at night. Has parking slots for at least 2 cars, not including inside the spaces of the pavillion.
                                            </p>
                                        </div>

                                    </CardContent>

                                </Link>

                            </Card>



                            <Card className="bg-white rounded-lg overflow-hidden transition-all ease-in-out duration-300 hover:shadow-md">

                                <Link to="#">

                                    <CardContent className="flex flex-row items-center gap-4 p-6">

                                        <Avatar className="mr-2">

                                            <AvatarImage
                                                alt="Channel Logo"
                                                className="rounded-full object-cover aspect-square"
                                                src="/placeholder.svg?height=40&width=40"
                                            />
                                            <AvatarFallback> CC </AvatarFallback>

                                        </Avatar>

                                        <div className="space-y-1">
                                            <h2 className="text-lg font-semibold"> Claremont Basketball Court </h2>
                                            <p className="text-muted-foreground">
                                                Technically, during the day, the students of Claremont may or may not use this court. At night, however, it is the place for various events. 
                                            </p>
                                        </div>

                                    </CardContent>

                                </Link>

                            </Card>

                        </div>

                    </main>

                </div>

            </main>

        </>




    )
}