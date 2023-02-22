import { A11y, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import moment from 'moment'
import './SideHomeSlider.scss'
import ArticlesArray from 'utils/ArticlesArray'

type Props = {
    title: string
    category: string
    author: string
    date: Date
    image: string
    sideslider: boolean
}
function MainHomeSlider() {
    return (
        <Swiper
            modules={[Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={4}
            centeredSlides={true}
            centeredSlidesBounds={true}
            scrollbar={{ draggable: true, hide: true }}
            mousewheel={true}
            direction="vertical"
            className="side-slider"
        >
            {ArticlesArray.map(
                ({ id, title, category, author, date, image, sideslider }) => {
                    return (
                        <>
                            {sideslider && (
                                <SwiperSlide className="side-swiper-slide">
                                    <div className="article-text">
                                        <div className="article-category">
                                            {category}
                                        </div>
                                        <div className="article-title">
                                            {title}
                                        </div>

                                        <div className="article-info">
                                            <div className="article-author">
                                                <a href="#">{author}</a>
                                            </div>
                                            <div className="article-date">
                                                {moment(date).format(
                                                    'MMM DD, YYYY'
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        src={image}
                                        alt="article image"
                                        width={100}
                                        height={100}
                                    />
                                </SwiperSlide>
                            )}
                        </>
                    )
                }
            )}
        </Swiper>
    )
}

export default MainHomeSlider
