import MyButton from "./MyButton"

const CategoryPage = () => {
  const categories = ['lacteos', 'frutas', 'ropa']

  return (
    <>
      <div>CategoryPage</div>

      {categories.map(category => <h1>{category}</h1>)}

      <MyButton />
    </>
  )
}

export default CategoryPage