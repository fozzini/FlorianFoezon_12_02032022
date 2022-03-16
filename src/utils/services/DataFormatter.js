/**
* format datas
* @param format data categories to fit in components
* @return formatted datas
*/
export const MAIN_DATA_FORMATTER = (objet) =>{
  const data = [];
  const userScore = objet.score || objet.todayScore;
  Object.assign(objet, { value: 100  ,value: userScore*100});
  data.splice(0,2,{ value: 100 } ,{value: userScore*100});
  return data;
};

export const ACTIVITY_FORMATTER = (obj) => {
  return obj.map((e,index)=> Object.assign(obj[index], {index: index +1}))
};

export const PERFORMANCE_FORMATTER = (obj) =>{
  return obj.data.map((e,index)=> Object.assign(obj.data[index], {kind: obj.kind[index+1]}));
};