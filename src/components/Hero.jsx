/* eslint-disable react/prop-types */
export default function Hero({ BG, Header }) {
  return (
    <>
      <div className={BG}>
        <h1 className="text-5xl font-medium flex justify-center pt-[8rem]">
          {Header}
        </h1>
      </div>
    </>
  );
}
