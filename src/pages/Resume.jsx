import Images from "../constants/images";

export default function Resume() {
  return (
    <>
      <object
        data={Images.resume}
        type="application/pdf"
        width="100%"
        height="700px"
        alt="fda"
        aria-labelledby="stuff"></object>
      <a href={Images.resume} download>
        Download Instead
      </a>
    </>
  );
}
