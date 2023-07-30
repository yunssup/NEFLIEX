import { useEffect, useState } from "react"
import axios from "../../api/axios"
import requests from "../../api/requests"
import {
    BannerContainer, BannerContents, BannerTitle, BannerButton, BannerPlay, BannerInfo, BannerDes, BannerFadeBottom, BannerPlayContainer, BannerIframe
} from './Styled'

export default function Banner() {
    
    const [movie, setMovie] = useState([])

    // if(!isClicked) {
        return(
            <BannerContainer
                movie={movie.backdrop_path}
                style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            }}
            >
                <BannerContents>
                    <BannerTitle>
                    {movie.title || movie.name || movie.original_name}
                    </BannerTitle>
                    <BannerButton>
                        <BannerPlay>Play</BannerPlay>
                        <BannerInfo>More Information</BannerInfo>
                    </BannerButton>
                    <BannerDes>{movie.overview}</BannerDes>
                </BannerContents>
                <BannerFadeBottom />
            </BannerContainer>
        )
    // } else {
    //     return(
    //         <BannerPlayContainer>
    //             <BannerIframe
    //                 width="640"
    //                 height="360"
    //                 src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=&autoplay=1&mute=1&playlist=${movie.videos.results[0].key}`}
    //                 title="YouTube video player" 
    //                 frameborder="0" 
    //                 allow=" autoplay; fullscreen" allowFullScreen
    //             />
    //         </BannerPlayContainer>
    // )}
}