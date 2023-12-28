import NavBar from "./navbar";

export default function Layout({children}){
    return (
    <div className="layout">
        <NavBar/>
        <div>{children}</div>
    </div>
    )
}