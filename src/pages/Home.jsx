import picEx from "./../logo.svg";
import "../css/Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="presentation">
        <h1>Welcome to Hogwarts!</h1>
        <button className="houseBTN">Discover your Magic!</button>
      </div>
      <div className="houses">
        <div className="house_card" id="Gryffindor">
          <div className="side_pic">
            <img src={picEx} alt="" />
          </div>
          <div className="content">
            <div className="top">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis, quia veniam? Ea perferendis totam nobis, inventore
              nesciunt aliquam, aspernatur officia alias delectus dignissimos
              quod ipsa quo consectetur? Assumenda, nemo quidem.
            </div>
            <div className="bot">
              <div className="virtue">Valentia</div>

              <div className="virtue">Corazon</div>

              <div className="virtue">Sifilis</div>
            </div>
          </div>
        </div>
        <div className="house_card" id="Slytherin">
          <div className="side_pic">
            <img src={picEx} alt="" />
          </div>
          <div className="content">
            <div className="top">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis, quia veniam? Ea perferendis totam nobis, inventore
              nesciunt aliquam, aspernatur officia alias delectus dignissimos
              quod ipsa quo consectetur? Assumenda, nemo quidem.
            </div>
            <div className="bot">
              <div className="virtue">Valentia</div>

              <div className="virtue">Corazon</div>

              <div className="virtue">Sifilis</div>
            </div>
          </div>
        </div>
        <div className="house_card" id="Hufflepuff">
          <div className="side_pic">
            <img src={picEx} alt="" />
          </div>
          <div className="content">
            <div className="top">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis, quia veniam? Ea perferendis totam nobis, inventore
              nesciunt aliquam, aspernatur officia alias delectus dignissimos
              quod ipsa quo consectetur? Assumenda, nemo quidem.
            </div>
            <div className="bot">
              <div className="virtue">Valentia</div>

              <div className="virtue">Corazon</div>

              <div className="virtue">Sifilis</div>
            </div>
          </div>
        </div>
        <div className="house_card" id="Ravenclaw">
          <div className="side_pic">
            <img src={picEx} alt="" />
          </div>
          <div className="content">
            <div className="top">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis, quia veniam? Ea perferendis totam nobis, inventore
              nesciunt aliquam, aspernatur officia alias delectus dignissimos
              quod ipsa quo consectetur? Assumenda, nemo quidem.
            </div>
            <div className="bot">
              <div className="virtue">Valentia</div>

              <div className="virtue">Corazon</div>

              <div className="virtue">Sifilis</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
