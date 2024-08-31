import back from "/src/assets/back.png";
import "./Home1.css";

const Home1 = () => {
  return (
    <div className="fullcontent" id="home">
      <div className="left-content">
        <p className="content">
          CYBERSECURITY AND ETHICAL HACKING COMMUNITY FOR SNU STUDENTS
        </p>
        <button className="learn">Learn</button>
      </div>
      <div className="right-content">
        <img className="image1" src={back} alt="Security Image" />
      </div>
    </div>
  );
};

export default Home1;
