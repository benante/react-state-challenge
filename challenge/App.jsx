import FilterPrice from "./FilterPrice.jsx";
import FilterCategory from "./FilterCategory.jsx";
import ListDishes from "./ListDishes.jsx";

function App() {
  return (
    <main>
      <section aria-label="filters">
        <div className="sticky">
          <h1>Burger Place</h1>
          <form>
            <h2>Filter dishes</h2>
          </form>
          <FilterPrice />
          <FilterCategory />
          <ListDishes />
        </div>
      </section>
      
    </main>
  );
}

export default App;
