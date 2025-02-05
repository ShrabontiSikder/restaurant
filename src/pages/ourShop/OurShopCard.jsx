import PrimaryButton from "../../components/PrimaryButton";

const OurShopCard = ({food}) => {
    const {name, price, image, recipe, _id} = food;
    const handleSingleFood = (id) =>{
        console.log(id)
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <p className="bg-rose-400 px-2 py-1 rounded text-white absolute right-0 top-0 mt-2 mr-2">${price}</p>
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={()=>handleSingleFood(_id)}>
                    <PrimaryButton
                    title="Add to Cart"
                    ></PrimaryButton>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OurShopCard;