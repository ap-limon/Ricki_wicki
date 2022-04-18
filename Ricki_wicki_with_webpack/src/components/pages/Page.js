import "./page.scss"
import Card from "../Card/Card";
import Filter from "../Filter/Filter";

class Page {
    generateMarkup = () => {
        let markup = '';
        for (let i = 0; i <= 20; i++){
            markup += Card.initialFunction();
        }

        return markup;
    }

    initialFunction = () => {
        console.log("I'm from Page.js");

        return `
        <div class="row px-1 m-auto d-flex justify-content-xl-between justify-content-center" id="cards_filter-holder">
            ${Filter.xl_filter()}

            <div class="col-xl-8 bg row d-flex justify-content-between" id="cards _lg-filter">
                ${Filter.lg_filter()}

                ${Filter.mbl_tab_filter()}

                <div class="col-xl-12 col-lg-8 mt-2 mb-3" id="cards-holder">
                    <div class="row row-cols-xxl-4 row-cols-xl-3 row-cols-md-3 row-cols-1">
                        ${this.generateMarkup()}
                        
                    </div>
                </div>
            </div>
        </div>`;
    }
}

export default new Page();