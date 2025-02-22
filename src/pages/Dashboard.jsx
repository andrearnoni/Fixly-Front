import { useContext } from "react";
import SideBar from "../components/SideBar";
import Graphs from "../components/Graphs";

function Dashboard() {
    return (
        <>
            <div className="flex">
                <SideBar />
                <Graphs />
            </div>
        </>
    )
}

export default Dashboard;