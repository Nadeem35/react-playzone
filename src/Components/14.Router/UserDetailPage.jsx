import { Link, useParams } from "react-router";

/*-------  this page is use for dynamic URL  -----*/

const UserDetailPage = () => {
  // const userParams = useParams();  /// first method
  const { id, name } = useParams(); /// destructuring both
  return (
    <>
      <h1>User details page</h1>

      <h3>
        User id is : {id} {name}
      </h3>

      <h5>
        <Link to="/users"> 🔙 Go Back</Link>
      </h5>
    </>
  );
};

export default UserDetailPage;
