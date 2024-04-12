// @ts-nocheck

import {
    Alert,
    AlertDescription,
    AlertTitle
} from "@/components/ui/alert"

import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";





const Login = () => {

    const [credentials, setCredentials] = useState({

        username: undefined,
        password: undefined,

    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {

        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));

    }

    const handleClick = async (e) => {

        e.preventDefault();
        dispatch({ type: "LOGIN_START " })

        try {

            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            navigate("/");

        } catch (err) {

            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });

        }

    }



    return (

        <>
        

            <Card className="mx-auto max-w-sm login">

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
                                onChange={handleChange}
                                placeholder="Example: Blk 24 Lt 1"
                                type="text"
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

                            <Input
                                id="password"
                                onChange={handleChange}
                                placeholder="Password"
                                type="password"
                                required
                            />

                        </div>

                        <Button
                            disabled={loading}
                            onClick={handleClick}
                            className="w-full">
                            Login
                        </Button>

                        {error && <span> {error.message} </span>}

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



        </>

    )

}

export default Login;