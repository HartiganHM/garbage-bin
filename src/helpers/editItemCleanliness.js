const editItemCleanliness = async (itemId, cleanliness) => {
  try {
    const editedItem = await fetch(
      `https://hugh-hartigan-gabage-bin.herokuapp.com/api/v1/garage-bin/${itemId}`,
      {
        method: 'PUT',
        body: JSON.stringify({ cleanliness }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const jsonResponse = editedItem.json();

    return jsonResponse;
  } catch (error) {
    throw new Error(
      `Error changing cleanliness quality for item by id ${itemId}`
    );
  }
};

export default editItemCleanliness;
