import { initialDataCategory } from "../../../../data";
import { CategoryCard } from "./CategoryCard"


interface Props {
  Category: any;
}



export const CategoryLayout = () => {
  const { categories } = initialDataCategory;
  return (
    <>
    <section className="category">
      {categories.map((data: any, i: number) => (
        <CategoryCard
          key={i} {...data}
        />
      ))}
    </section>
    
    </>
  )
}
