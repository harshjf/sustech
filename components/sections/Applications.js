// import { Swiper, SwiperSlide } from "swiper/react"
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ApplicationsData from "../../data/applications.json"
// import Link from "next/link";

const Applications = () => {
    const cards = [...ApplicationsData.items];
  return (
    <>
        <div className="process1-grid container" style={{gap: '10px', marginTop: '10%'}}>
                {cards.map((item,key)=>(
                    <div className="inner-box bg-image applications-card" style={{backgroundImage: `url(${item.image})`,minHeight: '465px', position: 'relative'}}>
                        <h5 className="title">
                            {item.title}
                        </h5>
                        <p className="text" style={{fontSize: '0.9rem', lineHeight: '28px'}}>
                            {item.text}
                        </p>
                    </div>
                ))}
        </div>
    </>
  )
}

export default Applications