import { ReactElement } from "react";
import { NavBar } from "./_components/nav-bar/nav-bar.component";

export default function DetailLayout ({children}:{children:ReactElement}){
    return <div style={{
        backgroundImage: `url(/home-bg.svg)`,
        // backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat:'repeat'
      }}>
    <NavBar/>
    {children}
    </div>
}