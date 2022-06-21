import "./Home.css";

function Home() {
  const solution = [
    {
      name: "Mobile Banking",
      des: "Transactions made simpler with phone on the go",
      img: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/e99a3828-381a-40bb-9b6d-ae54c41238af/Personal/Home/content/MB_App_Icon1.png",
    },
    {
      name: "Internet Banking",
      des: "Use Internet banking from anywhere",
      img: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/826008f7-545a-434a-9030-a3bd5567d7e2/Personal/Home/content/Online-Banking-Icon.png",
    },
    {
      name: "Smart Card",
      des: "Carry one card for all types of purchase",
      img: "https://image.shutterstock.com/image-vector/nearfield-communication-nfc-concept-icon-600w-681456580.jpg",
    },
  ];
  return (
    <div className="container-sm home-container">
      <div className="home-wrapper">
        <div className="solution-wrapper">
          {solution.map(({ name, des, img }, index) => (
            <div key={index} className="solution">
              <h4 className="solution-title">{name}</h4>
              <img
                className="solution-img"
                src={img}
                aria-label={name}
                alt={name}
              />
              <p className="solution-des">{des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
