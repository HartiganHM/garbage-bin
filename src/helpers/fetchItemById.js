const fetchItemById = async (itemId) => {
  try {
    const fetchedItem = await fetch(`https://hugh-hartigan-gabage-bin.herokuapp.com/api/v1/garage-bin/${itemId}`);
    const jsonItem = await fetchedItem.json();

    return jsonItem;
  } catch (error) {
    throw new Error(`Error retrieving item ${itemId} from garage-items: ${error}`);
  }
};

export default fetchItemById;