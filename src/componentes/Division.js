
const Division = (param1,param2) => {
    let res= (param1/param2).toFixed(2);
    if(isNaN(res)) res = 'ERROR';
    return (res);
}

export default Division;