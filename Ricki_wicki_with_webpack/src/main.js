import "./main.scss";
import Home from "./components/Home/Home"
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Page from "./components/pages/Page";

class Main {
    _main = document.querySelector('.main');

    initialFunction = () => {
        Pagination.initialFunction();
        Search.initialFunction();
        this._main.innerHTML = Page.initialFunction();
    }
};

export default new Main();
