const createNewItem = async newItem => {
  try {
    const { name, reason, cleanliness } = newItem;

    const addedItem = await fetch('http://localhost:3000/api/v1/garage-bin', {
      method: 'POST',
      body: JSON.stringify({
        name,
        reason,
        cleanliness
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const jsonResponse = addedItem.json();

    return jsonResponse;
  } catch (error) {
    throw new Error('Error adding new trash to garage-bin.');
  }
};

export default createNewItem;
