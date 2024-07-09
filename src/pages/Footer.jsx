import { useSelector } from "react-redux";

const Footer = () => {
  const data = useSelector((store) => store.data);

  if (data.length === 0 || !data[0] || !data[0][0]) {
    return <div>Yükleniyor...</div>;
  }

  const footerData = data[0][0].footer;

  return (
    <>
      <h3>{footerData.text}</h3>
      <p>alicansadeler@gmail.com</p>
    </>
  );
};

export default Footer;
