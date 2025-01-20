import { Parallax, Background } from 'react-parallax';
import bannerImg from "../../assets/menu/banner3.jpg";

const CoverImage = () => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={bannerImg}
            bgImageAlt="banner image"
            strength={-200}
        >
            <div>

                <div className="hero min-h-screen">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold text-white uppercase">Our Menu</h1>
                            <p className="py-6 text-white uppercase">
                                Would you like to try a dish?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default CoverImage;