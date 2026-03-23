function UserDetail({ item }) {
  return (
    <div>
      <img
        src={item.image}
        alt={`${item.firstName} ${item.lastName}`}
      />
      <div>
        <p>
          {item.firstName} {item.lastName}
        </p>
        <p >@{item.username}</p>
      </div>
    </div>
  );
}

export default UserDetail;