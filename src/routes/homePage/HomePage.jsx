import "./HomePage.scss";

import SearchBar from "../../components/searchBar/SearchBar";
export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ad
            itaque illo recusandae atque, exercitationem rerum sequi mollitia,
            ratione eius optio? Obcaecati molestias corporis, nisi ex tenetur ab
            sint minima.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Expericence</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src="/bg.png" />
      </div>
    </div>
  );
};
export default HomePage;
