import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

export default function App() {
    return (
        <div className={"container"}>
            <Header />
            <MainContent />
            {/*<Footer />*/}
        </div>
    )

}
