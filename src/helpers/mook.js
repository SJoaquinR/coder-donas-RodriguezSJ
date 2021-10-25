export const mook  = (
    products,
    itemId,
    setMessage,
    setIsSuccess,
    setIsLoading,
    setIsFinished,
    setItem
  ) => {
    const productsResponse = new Promise((resolve, reject) => {
      // Synchronous code
      setTimeout(() => {
          const findItem = products.filter(item => item.id === itemId)
        resolve(...findItem);
      }, 2000);
      // reject("This petition is rejected");
    });
  
    productsResponse
      .then((result) => {
        setIsSuccess(true);
        setItem(result);
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