import { ApiRet } from "./interface";

const SendBasic =  async (url:string):Promise<ApiRet> => {
  let  ret = {statusCode: 404, statusInfo: '', data: undefined} as ApiRet;

  let controller = new AbortController();
  setTimeout(() => controller.abort(), 4000);

  const options = {
    method:"GET",
    headers: new Headers({
      'content-type': 'application/json'
    })
  }

  try {
    const res = await fetch(url, {...options, signal: controller.signal});
    if (res) {
      if (res.status != 200) {
        console.log(`Response code was not 200, ${res.status}`);
        return ret;
      }

      const serverRet = await res.json();
      ret = {statusCode: 200, statusInfo: '', data: serverRet};

    }
  } catch(err:any) {
    if (err.name == 'AbortError') {
      return {statusCode: 403, statusInfo: 'timeout', data: undefined};
    }

    return {statusCode: 404, statusInfo: err.name, data: undefined};
  }

  return ret;
}


const Api = {SendBasic: SendBasic};

export default Api;