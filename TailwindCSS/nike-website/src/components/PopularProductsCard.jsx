import { star } from "../assets/icons";

const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <section className="flex flex-1 flex-col w-full max-sw:w-full">
      <img src={imgURL} alt="product-img" className="w-[282px] h-[282px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="star-rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold">
        {name}
      </h3>
      <p className="mt-2 font-montserrat font-semibold text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </section>
  );
};

export default PopularProductsCard;
