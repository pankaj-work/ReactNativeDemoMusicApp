const convertMilliToMinSec = (millis = 0) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds + ' mins';
};

export default convertMilliToMinSec;
