import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";

import ReactPlayer from "react-player";

AOS.init({});

AOS.refresh();

function App() {
  return (
    <div className="container">
      <div
        data-aos="fade-down"
        data-oas-duration="1000"
        className="content one"
        
      >
        <div className="opacity"></div>
        <img src={require("./asset/Saber.jpg")} width="1390" height="650" />
        <div
          className="card-item"
          data-aos="fade-left"
          data-aos-mirror="true"
          data-oas-duration="1000"
          data-aos-delay="1000"
        >
          <p>
            <h1>Lorem</h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into
          </p>
        </div>
      </div>
      <div data-aos="fade-up" data-oas-duration="1000" className="content two">
        <div className="vd-box">
          <ReactPlayer
            className="video"
            url={require("./asset/vd.mp4")}
            width=""
            height="125vh"
            loop
            config={{
              file: {
                attributes: {
                  autoPlay: true,
                  muted: true,
                },
              },
            }}
          />
          <div className="vd-title">
              <h1>LIÊN MINH HUYỀN THOẠI LÀ GÌ?</h1>
              <p>
                Liên Minh Huyền Thoại là một trò chơi chiến thuật đồng đội nơi
                hai đội với năm vị tướng mạnh mẽ sẽ đối đầu nhau nhằm mục tiêu
                phá hủy căn cứ đối phương. Chọn một trong hơn 150 vị tướng để
                tạo ra những pha thi đấu xuất thần, hạ gục đối thủ, san phẳng
                trụ địch và hướng đến chiến thắng vinh quang.
              </p>
            </div>
        </div>
      </div>
      <div className="content three">
        <div>Third Page</div>
      </div>
      <div className="content four">
        <div>End Page</div>
      </div>
    </div>
  );
}

export default App;
