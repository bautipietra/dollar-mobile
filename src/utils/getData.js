const getData = async (setData) => {
  const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
  const data = await response.json();
  setData(data);
};

export { getData }
