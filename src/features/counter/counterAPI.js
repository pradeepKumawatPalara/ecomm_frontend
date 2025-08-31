const API_BASE =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL
    : ""; 
    
    export function fetchCount(amount = 1) {
  return new Promise(async (resolve) =>{
    // const response = await fetch('http://') 
    const response = await fetch(`${API_BASE}/counter`)
    const data = await response.json()
    resolve({data})
  }
  );
}
