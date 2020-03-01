const fetchSms = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}messages`);
    return await response.json();
  } catch (e) {
    console.error(e);
    return false;
  }
};

const sendSms = async (msg) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(msg),
    });
    return await response.json();
  } catch (e) {
    console.error(e);
    return false;
  }
};

export {
  sendSms, fetchSms,
};
