import "./navbar.scss";

class Navbar {
    _navbar = document.querySelector(".navbar");
    initialFunction () {
        console.log("I'm from Navbar.js");
        this._navbar.classList.add("navbar-expand-md","mb-3", "navbar-dark");
        this._navbar.innerHTML = `
        <div class="container-fluid row">
            <a class="navbar-brand col-2 col-xxl-2 col-md-3" href="#">logo</a>

            <form class="d-flex justify-content-end col-7 col-xxl-7 col-md-5">
                <input class="form-control me-2" type="text" placeholder="Search">
                <button class="btn btn-primary d-none d-sm-block" type="button">Search</button>
                <div class="btn btn-primary d-block d-sm-none">
                    <i class="bi bi-search"></i>
                </div>
            </form>

            <button class="px-1 navbar-toggler col-2" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span>
                    <i class="bi bi-list"></i>
                </span>
            </button>
            <div class="collapse navbar-collapse col-xxl-3 col-md-4" id="mynavbar">
                <ul class="navbar-nav me-auto justify-content-around">
                    <li class="nav-item"><a class="nav-link">link</a></li>
                    <li class="nav-item"><a class="nav-link">link</a></li>
                    <li class="nav-item"><a class="nav-link">link</a></li>
                </ul>
            </div>
        </div>
        `;
    }
};

export default new Navbar();
