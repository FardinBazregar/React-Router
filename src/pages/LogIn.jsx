import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const navigate = useNavigate();
  const handlSubmit = (e) => {
    e.preventDefault();
    //Chek validate ...
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handlSubmit}>
        <input placeholder="User name" />
        <input placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
