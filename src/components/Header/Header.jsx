import bigPlanet from "../../public/planets-logo/big_planet_in_header.png";
import smallPlanet from "../../public/planets-logo/small_planet_in_header.png"
import line from "../../public/lines/Vector 83.svg";
import stars from "../../public/stars.png";
import rightLine from "../../public/lines/Vector 70.svg";
import point from "../../public/lines/point.svg"

export default function Header() {
    return (
        <header className='header'>
            <div className="logo_container">
                <p className='logo_container_paragraf'>Dalkevych <br /> <span className='logo_span'>studio</span></p>
                <div className="image_line_container">
                    <img src={rightLine} alt="line" />
                    <img src={point} alt="point" className='point_in_title' />
                    <img src={smallPlanet} alt="small planet" className='small_planet_in_title' />
                </div>
            </div>
            <div className="title_container">
                <h1>Uniting teams <br /><span className='title_span'>and</span><br />
                    creating st<span className='title_span_o_letter'>o</span>ries <br />that sell</h1>
                <div className="line_container">
                    <img src={line} alt="underline" />
                </div>
                <div className="image_container">
                    <img src={bigPlanet} alt="planet" />
                </div>
                <div className="line_container_stars">
                    <img src={stars} alt="stars" />
                </div>
            </div>
        </header>
    )
}