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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </div>
            </form>

            <button class="navbar-toggler col-2" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span class="navbar-toggler-icon"></span>
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
