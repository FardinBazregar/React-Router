import { useParams } from "react-router-dom";

export const Productdetail = () => {
  const params = useParams();

  return (
    <div>
      <h3>Product {params.id}</h3>
    </div>
  );
};
