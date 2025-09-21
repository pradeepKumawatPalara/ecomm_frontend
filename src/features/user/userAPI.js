export function fetchLoggedInUserOrders() {
  return new Promise(async (resolve) =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/orders/own/`,{
      credentials: "include" // for JWT cookies
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}


export function fetchLoggedInUser() {
  return new Promise(async (resolve) =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/own`,{
      credentials: "include" // for JWT cookies
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/`+update.id, {
      method: 'PATCH', credentials: "include" ,
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    resolve({ data });
  });
}


