// use async await
export async function fetchingEmployees() {
    try {
        const response = await fetch('/data/employees.json'); 
        const users = await response.json();
        return users;
    } catch (error) {
        console.error(error);
    }
}