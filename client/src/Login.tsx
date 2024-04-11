import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";






export function LoginForm() {



    return (

        <Card className="mx-auto max-w-sm">

            <CardHeader>

                <CardTitle className="text-2xl"> Login to your HOA account </CardTitle>
                <CardDescription>
                    Enter your block and lot and your password to login to your account.
                </CardDescription>

            </CardHeader>



            <CardContent>

                <div className="grid gap-4">

                    <div className="grid gap-2">
                        <Label htmlFor="email"> Block and Lot </Label>
                        <Input
                            id="text"
                            type="text"
                            placeholder="Example: Blk 24 Lt 1"
                            required
                        />
                    </div>

                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger className="ml-auto inline-block">
                                        <Link to="#" className="text-sm underline">
                                            Forgot your password?
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">
                                        <p> Please contact the GCHOAI Officers to reset your account. </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                        </div>
                        <Input id="password" type="password" required />
                    </div>

                    <Button type="submit" className="w-full">
                        Login
                    </Button>

                </div>

                <div className="mt-4 text-center text-sm flex flex-col gap-3">

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link to="#" className="text-sm underline">
                                    Don&apos;t have an account?
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                                <p> You need to be a unit owner in Grand Cedar Homes to get one. </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

            </CardContent>

        </Card>

    )
}

export default LoginForm;