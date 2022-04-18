import "./home.scss"
const image = require("../../pictures/home_page_profile.jpg");

class Home {
    initialFunction = () => {
        console.log("I'm from Home.js");
            return `
            <div class="home container-fluid">
                <div class="p-1 heading row text-center">
                    <h1>Rick and Morty</h1>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-12">
                        <div class="home_image row">
                            <img src=${image}>
                        </div>
                        <div class="row">
                            <p  class="row">
                                <span class="col-lg-4 col-5 level">Producer</span><span class="col-lg-8 col-7">: J Michael Mendel</span>
                            </p>
                            <p  class="row">
                                <span class="col-lg-4 col-5 level">Creator</span><span class="col-lg-8 col-7">: Justin Roiland, Dan Harmon</span>
                            </p>
                            <p  class="row">
                                <span class="col-lg-4 col-5 level">Genre</span><span class="col-lg-8 col-7">: Animated sitcom; Science Fiction; Black comedy; Adventure</span>
                            </p>
                            <p  class="row">
                                <span class="col-lg-4 col-5 level">Distributor</span><span class="col-lg-8 col-7">: Warner Bros</span>
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-8">
                        <h4 class="pt-2"><u>About the Series</u></h4>
                        <p>
                            Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block, Adult Swim.The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their children Summer and Morty, and Beth's father, Rick Sanchez, who lives with them as a guest. According to Justin Roiland, the family lives outside of Seattle, Washington. The adventures of Rick and Morty, however, take place across an infinite number of realities, with the characters travelling to other planets and dimensions through portals and Rick's flying car.
                        </p>
                    </div>
                </div>
            </div>
        `;
    };
};

export default new Home();
