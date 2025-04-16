import IMAGES from "./images/IMAGES";

function Gallery() {
    return (
        <>  
            <div className="container">
                <h1 className="text-2xl font-bold">Gallery</h1>
                <div className="product-card">
                    {/* Add images of products here */}
                    <img src={IMAGES.image1} alt="Product 1" className="product-card img" />
                    <img src={IMAGES.image2}alt="Product 2" className="product-card img" />
                    <img src={IMAGES.image3} alt="Product 3" className="product-card img" />
                </div>
            </div>
        </>       
    );
} 

export default Gallery;
