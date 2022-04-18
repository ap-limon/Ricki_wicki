import "./filter.scss";

class Filter {
    xl_filter = () => {
        return `
            <div class="col-xl-3 bg d-none d-xl-block" id="xl-filter"></div>
        `;
    }

    lg_filter = () => {
        return `
            <div class="d-none d-lg-block d-xl-none my-3 col-lg-3" id="lg-filter"></div>
        `;
    }

    mbl_tab_filter = () => {
        return `
            <button class="d-block d-lg-none" id="md-filter_btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapsableFilter" aria-expanded="false" aria-controls="collapsableFilter">
                <i class="bi bi-filter-square-fill"></i>
            </button>
            <div class="bg collapse" id="collapsableFilter"></div>
        `;
    }
    initialFunction = () => {
        console.log("I'm from Filter.js");
    }
};

export default new Filter();
