import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Search from "./components/Search/Search";

class Main {
    initialFunction = () => {
        Card.initialFunction();
        Pagination.initialFunction();
        Filter.initialFunction();
        Search.initialFunction();
    }
};

export default new Main();
