function RecipeDetail({ item }) {
  return (
    <div >
      <img  src={item.image} alt={item.name} />
      <div>
        <p>{item.name}</p>
        <ul >
          {item.tags?.slice(0, 3).map((tag) => (
            <li key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecipeDetail;