const fetchAllItems = async () => {
  try {
    const fetchedItems = await fetch('localhost:3000/api/v1/garage-bin');
    const jsonItems = await fetchedItems.json();

    return jsonItems;
  } catch (error) {
    throw Error(`Error retrieving garage-items: ${error}`);
  }
};
