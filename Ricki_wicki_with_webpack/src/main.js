import "./main.scss";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Search from "./components/Search/Search";

class Main {
    _main = document.querySelector('.main');

    initialFunction = () => {
        Card.initialFunction();
        Pagination.initialFunction();
        Filter.initialFunction();
        Search.initialFunction();
        this._main.innerHTML = `<p class="text-success">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et, libero atque eveniet harum magnam nisi architecto, temporibus error non optio ullam deleniti esse, assumenda molestias. Qui provident autem sequi minus consectetur voluptatibus quasi, omnis blanditiis harum at natus adipisci aperiam deleniti quia nam ipsam iste magnam fugiat ratione numquam! Cum inventore labore odio voluptate, sequi reprehenderit minima facere autem molestiae, voluptatem explicabo in esse fugit accusantium quibusdam et deserunt! Unde inventore perferendis quod tempora, facere ex, blanditiis, omnis quaerat quisquam sint corporis illum! Possimus, blanditiis ipsa quo quod veritatis placeat, porro autem quasi doloremque dolor, incidunt iure reprehenderit aliquam.</p>`;
    }
};

export default new Main();
