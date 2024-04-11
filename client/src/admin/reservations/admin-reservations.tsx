
import {
    AvatarImage,
    AvatarFallback,
    Avatar
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

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
import AdminFacilities from "./admin-facilities";



export default function AdminReservations() {



    return (

        <>

            <Routes>

                <Route path="/reservations" element={<AdminReservations />} />
                <Route path="/reservations/facilities" element={<AdminFacilities />} />

            </Routes>

            <main className="flex flex-1 flex-col gap-4 lg:gap-4">

                <div className="flex min-h-screen w-full flex-col">

                    <main className="flex flex-1 flex-col gap-3 p-4 md:gap-5 md:p-8">

                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/reservations"> Reservations </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                            </BreadcrumbList>
                        </Breadcrumb>


                        <div>

                            <div className="w-full max-w-6xl gap-2 mb-1">
                                <h1 className="text-2xl font-semibold"> Reservations </h1>
                            </div>

                            <p className="text-muted-foreground">
                                As an admin, you can create new amenities and new types of amenities. You should also be able to approve or disapprove reservations.
                            </p>

                        </div>

                        <Card className="bg-white rounded-lg overflow-hidden transition-all ease-in-out duration-300 hover:shadow-md">

                            <Link to="/reservations/facilities">

                                <CardContent className="flex flex-row items-center gap-4 p-6">

                                    <Avatar>

                                        <AvatarImage
                                            alt="Channel Logo"
                                            className="rounded-full object-cover aspect-square"
                                            src="/placeholder.svg?height=40&width=40"
                                        />
                                        <AvatarFallback> F </AvatarFallback>

                                    </Avatar>

                                    <div className="">
                                        <h2 className="text-lg font-semibold"> Facilities </h2>
                                        <p className="text-muted-foreground">
                                            Create new types of facilities for the members to reserve or monitor who reserves what and when.
                                        </p>
                                    </div>

                                </CardContent>

                            </Link>

                        </Card>



                        <Card className="bg-white rounded-lg overflow-hidden transition-all ease-in-out duration-300 hover:shadow-md">

                            <Link to="/reservations/equipment" rel="noopener noreferrer" target="_blank">

                                <CardContent className="flex flex-row items-center gap-4 p-6">

                                    <Avatar>

                                        <AvatarImage
                                            alt="Channel Logo"
                                            className="rounded-full object-cover aspect-square"
                                            src="/placeholder.svg?height=40&width=40"
                                        />
                                        <AvatarFallback> E </AvatarFallback>

                                    </Avatar>

                                    <div className="space-y-1">
                                        <h2 className="text-lg font-semibold"> Equipment </h2>
                                        <p className="text-muted-foreground">
                                            Create new types of equipment for the members to reserve or monitor who reserves what and when.
                                        </p>
                                    </div>

                                </CardContent>

                            </Link>

                        </Card>

                    </main>

                </div>

            </main>

        </>




    )
}