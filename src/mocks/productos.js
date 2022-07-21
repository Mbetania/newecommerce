export const products = [
    {
      id: 7,
      title: "Cuadro #1",
      img: "https://i.postimg.cc/vBZK80qR/cuadro1.png",
      price: 1500,
      stock: 5,
      category: "Cuadros",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 8,
      title: "Cuadro #2",
      img: "https://i.postimg.cc/x1YVD32Q/cuadro2.png",
      price: 1300,
      stock: 8,
      category: "Cuadros",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 9,
      title: "Cuadro #3",
      img: "https://i.postimg.cc/zDRsycD5/cuadro3.png",
      price: 1100,
      stock: 10,
      category: "Cuadros",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  export const getData = (categoryId) =>{
    return new Promise((resolve, reject) =>{
      const cuadroFiltrado = products.filter(
        (cuadro) => cuadro.categoria === categoryId)
      setTimeout(() =>{
        categoryId
      ?resolve(cuadroFiltrado)
      :resolve(products)
      },1500)
    })
  }
      