export const daysLeft = (deadline) => {
  const difference = new Date(deadline).getTime() - Date.now();
  const remainingDays = difference / (1000 * 3600 * 24);

  return remainingDays.toFixed(0);
};

export const calculateBarPercentage = (goal, raisedAmount) => {
  const percentage = Math.round((raisedAmount * 100) / goal);

  return percentage;
};

export const checkIfImageOrVideo = (url, callback) => {
  const img = new Image();
  const video = document.createElement('video');
  
  img.src = url;
  img.onload = () => callback(true);

  video.src = url;
  video.onloadedmetadata = () => callback(true);
  video.onerror = () => {
    fetch(url)
      .then(response => {
        const contentType = response.headers.get('Content-Type');
        const isVideo = contentType.includes('video/');
        const isImage = contentType.includes('image/');
        callback(isVideo || isImage);
      })
      .catch(() => callback(false));
  };
};