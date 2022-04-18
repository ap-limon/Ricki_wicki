class Card {
    initialFunction = () => {
        console.log("I'm from Card.js");
        return `
            <div class="col my-2 card-container">
                <div class="bg-success p-5"></div>
            </div>
        `;
    }
};

export default new Card();