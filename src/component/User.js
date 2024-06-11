const User = ({user}) => {
    console.log(user)
  return (
    <div className="ps-5 d-flex mb-3">
      <img
        src={user.picture.thumbnail}
        alt=""
        style={{ width: '100px' }}
        className="rounded-circle"
      />
      <div className=" ms-3 pt-3">
        <p className="fw-bolder fs-5 p-0 m-0">
          Name: {user.name.first} {user.name.last}
        </p>
        <p className=" fs-7 p-0 m-0">DOB: {user.dob.date}</p>
        <p className=" fs-7 p-0 m-0">Age : {user.dob.age}</p>
      </div>
    </div>
  )
}
export default User