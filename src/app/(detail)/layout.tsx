import { ReactElement } from "react";
import { NavBar } from "./_components/nav-bar/nav-bar.component";

export default function DetailLayout ({children}:{children:ReactElement}){
    return <>
    <NavBar/>
    {children}
    </>
}