import React from "react";
import CardProject from "../components/CardProject";
import ImgResto from "../assets/portfolio/resto.png";
import ImgPersonalWeb from "../assets/portfolio/personal-web.png";
import ImgDashboard from "../assets/portfolio/dashboard1.png";
import ImgComProfile from "../assets/portfolio/company-profile.png";
import ImgResume from "../assets/portfolio/resume.png";
import ImgEcommerce from "../assets/portfolio/ecommerce.png";

const Home = () => {
  const data = [
    { id: 1, title: "Resto App", desc: "", imgSrc: ImgResto , webUrl:"http://sini-makan.herokuapp.com/" },
    { id: 2, title: "Personal Web", desc: "", imgSrc: ImgPersonalWeb , webUrl:"http://sinabariba-andre.herokuapp.com/"},
    { id: 3, title: "Admin Dashboard", desc: "", imgSrc: ImgDashboard, webUrl:"https://sinabariba-andre.herokuapp.com/portfolio/inventory" },
    { id: 4, title: "Company Profile", desc: "", imgSrc: ImgComProfile , webUrl:"https://lappet69.github.io/webarchitect/"},
    { id: 5, title: "Resume Builder", desc: "", imgSrc: ImgResume , webUrl:"https://intense-crag-30726.herokuapp.com/"},
    { id: 6, title: "Ecommerce", desc: "", imgSrc: ImgEcommerce, webUrl:"" },
  ];
  return (
    <div className="w-full flex flex-wrap justify-center gap-10 bg-homeBg p-10">
      {data && data.map((el) => <CardProject key={el.id} title={el.title} desc={el.desc} imgSrc={el.imgSrc} webUrl={el.webUrl} />)}
    </div>
  );
};

export default Home;
