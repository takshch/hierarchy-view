const GET_ALLCARD_APIPOINT = "/mockapi/all.json";

const getAllCards = async () => {
  try {
    const response = await fetch(GET_ALLCARD_APIPOINT);
    const allCards = await response.json();
    console.log(allCards);
    return allCards;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export default getAllCards;
