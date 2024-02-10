// eslint-disable-next-line react/prop-types
function Input() {
  return (
    <>
      <div className="">
        <select
          className="px-8 py-3  text-white bg-black"
          id="items"
          name="items"
        >
          <option value="">Wall Paints</option>
          <option value="">Artifacts</option>
          <option value="">Jewellery</option>
          <option value="">Artefact</option>
        </select>
      </div>
    </>
  );
}

export default Input;
