export function toBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export function parseWebapiErrors(responce: any): string[] {
  
  const result: string[] = [];
  console.log('responce : ' , responce )
  console.log('responce.error : ' , responce.error )
  if (responce.error) {
    if (typeof responce.error == "string") {
      result.push(responce.error);
      console.log('String : ', result )
    }
   else {
    const mapErrors = responce.error.errors;
    const entries = Object.entries(mapErrors);
    console.log('mapErrors : ' , mapErrors )
    console.log('entries : ' , entries )
    entries.forEach((arr: any[]) => {
      const field = arr[0];
      console.log('field : ' , field )
      arr[1].forEach((errormessage: any) => {
        console.log('errormessage : ', errormessage )
        result.push(`${field}: ${errormessage}`);
      });
    });
  }}

  return result;
}
