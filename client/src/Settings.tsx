import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Checkbox } from "@/components/ui/checkbox"

import { Input } from "@/components/ui/input"
import { useEffect } from "react"




export function Settings() {

    useEffect(() => {
        document.title = "Settings | GCTMS "
    }, []);

    return (

        <div className="flex min-h-screen w-full flex-col">

            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                <div className="mx-auto grid w-full max-w-6xl gap-2">
                    <h1 className="text-3xl font-semibold">Settings</h1>
                </div>
                <div className="mx-auto grid w-full max-w-6xl items-start gap-6">
                    
                    <div className="grid gap-6">
                        <Card x-chunk="dashboard-04-chunk-1">
                            <CardHeader>
                                <CardTitle> Unit Block and Lot Number </CardTitle>
                                <CardDescription>
                                    This account is connected to this unit. Normally, you're not allowed to change it. You can ask the GCHOAI officers for more information.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <Input placeholder="Blk 24 Lt 1" />
                                </form>
                            </CardContent>
                            <CardFooter className="border-t px-6 py-4">
                                <Button>Save</Button>
                            </CardFooter>
                        </Card>
                        <Card x-chunk="dashboard-04-chunk-2">
                            <CardHeader>
                                <CardTitle> Password </CardTitle>
                                <CardDescription>
                                    The directory within your project, in which your plugins are
                                    located.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="flex flex-col gap-4">
                                    <Input
                                        placeholder="Project Name"
                                        defaultValue="/content/plugins"
                                    />
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="include" defaultChecked />
                                        <label
                                            htmlFor="include"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Allow administrators to change the directory.
                                        </label>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="border-t px-6 py-4">
                                <Button>Save</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
