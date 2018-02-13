const fetchAllItems = async () => {
  try {
    const fetchedItems = await fetch('https://hugh-hartigan-gabage-bin.herokuapp.com/api/v1/garage-bin');
    const jsonItems = await fetchedItems.json();

    return jsonItems;
  } catch (error) {
    throw new Error(`Error retrieving garage-items: ${error}`);
  }
};

export default fetchAllItems;
