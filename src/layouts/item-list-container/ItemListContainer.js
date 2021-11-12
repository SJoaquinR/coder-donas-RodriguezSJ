import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "../../components/item-list/ItemList";
import { getFirestore } from "../../firebase";
import Loader from "../../components/loader/Loader";


const ItemListContainer = ({ children, greeting }) => {
  const { categoryValue } = useParams();
  const [itemsProducts, setitemsProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  //cuando hay algun cambio useEffec se ejecuta
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("products");

    if (!categoryValue || categoryValue === "all") {
      //querySnapshot -> tiene la info de mi coleccion de firebase -> se puede usar cualquier nombre de alias -> por documentacion se usa asi
      itemCollection
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log("No hay productos disponibles");
            return;
          }
          setitemsProducts(
            querySnapshot.docs.map((document) => ({
              id: document.id, //retorno el id del documento
              ...document.data(), //retorno todos los datos del documento
            }))
          );
        })
        .catch((error) => console.log("Error al obtener los productos", error))
        .finally(() => setLoading(false));
      return;
    }

    const productsByCategory = itemCollection.where(
      "category",
      "==",
      categoryValue
    );

    productsByCategory
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log(
            "No hay productos disponibles en la categoria seleccionada"
          );
          return;
        }
        setitemsProducts(
          querySnapshot.docs.map((document) => ({
            id: document.id, //retorno el id del documento
            ...document.data(), //retorno todos los datos del documento
          }))
        );
      })
      .catch((error) =>
        console.log("Error al obtener los productos por categoria", error)
      )
      .finally(() => setLoading(false));
  }, [categoryValue]);

  return (
    <>
      <h1>{greeting}</h1>
      {children}
      {loading ? (
       <Loader />
      ) : (
        <ItemList products={itemsProducts} />
      )}
    </>
  );
};

export default ItemListContainer;
