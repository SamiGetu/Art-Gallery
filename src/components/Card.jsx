/* eslint-disable react/prop-types */

export default function Card({ size, title, price, image, imgstyle }) {
  return (
    <>
      <div className={size}>
        <img
          className={imgstyle}
          src={image}
          loading="lazy"
          alt="Gallery Images"
        />
        <div className="text-neutral-900 text-start pt-10">
          <h1 className="text-3xl font-normal">{title}</h1>
          <p className="text-xl font-medium">{price}</p>
        </div>
      </div>
    </>
  );
}
