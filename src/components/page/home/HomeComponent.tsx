
import { initialData } from '../../../../data';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from 'swiper';

export const HomeComponent = () => {
	const { homeSliders } = initialData;
	return (
		<section className="home">
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				navigation={false}
				pagination={{
					clickable: true
				}}
				modules={[Navigation, Pagination]}
			>
				{homeSliders.map((data: any, i: number) => (
					<SwiperSlide className="slide" key={i}>
						<div className="content">
							{/* <img src={`${data.imageBanner}`} alt="" /> */}
							<span>{data.content}</span>
							<h3>{data.title}</h3>
							<a href="#" className="btn">
								ver productos
							</a>
						</div>
						<div className="image">
							<img src={`${data.image}`} alt="" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};
