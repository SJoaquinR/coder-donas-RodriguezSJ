export const promises = (
  products,
  setMessage,
  setIsSuccess,
  setIsLoading,
  setIsFinished,
  setCurrentProducts
) => {
  const productsResponse = new Promise((resolve, reject) => {
    // Synchronous code
    setTimeout(() => {
      resolve(products);
    }, 2000);
    // reject("This petition is rejected");
  });

  productsResponse
    .then((result) => {
      setIsSuccess(true);
      setCurrentProducts(result);
    })
    .catch((error) => {
      console.log(`Error en progreso ${error}`);
      setMessage(`Error: ${error}`);
      setIsSuccess(false);
    })
    .finally(() => {
      setIsFinished(true);
      setIsLoading(false);
    });
};
