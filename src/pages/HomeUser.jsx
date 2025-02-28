import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { Context } from "../context/GlobalContext";
import TrendingServices from "../components/TrendingServices";
import SearchAService from "../components/SearchAService";

function HomeUser() {

    const { isLoggedIn } = useContext(Context)
    const [showItems, setShowItems] = useState(false);
    const [showUser, setShowUser] = useState(true);

    return (
        <>
            <Navbar showItems={showItems} showUser={showUser} />
            <TrendingServices />
            <SearchAService />
        </>
    )
}

export default HomeUser