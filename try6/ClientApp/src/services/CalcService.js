export async function getAllCalcs() {

    const response = await fetch('/api/Calc/GetAllCalculations');
    return await response.json();
}

export async function getOperators() {
    const response = await fetch('/api/Calc/GetOperators');
    return await response.json();
}

export async function createCalc(data) {
    const response = await fetch('/api/Calc/AddCalc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return await response.json();
}
export async function updateCalc(data) {
    const response = await fetch('/api/Calc/UpdateCalc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return await response.json();
}

export async  function deleteCalc(id) {
    const response = await fetch('/api/Calc/DeleteCalc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: id 
    });
    return await response.json();
  

}