import { showToast } from "./toast";

const PORT = 4339

export async function onClickAPIRequest(hostname:string, endpoint: string) {
    const res = await fetch(`http://${hostname}:${PORT}/media_controls/${endpoint}`, {
      method: 'GET',
    })
    const data = await res.json();
    console.log(data)
    showToast('success')
  }