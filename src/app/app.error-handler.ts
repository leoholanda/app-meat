export class ErrorHandler {
 static handleError(error: Response | any) {
  let errorMessage: string
   if(error instanceof Response) {
     errorMessage = `Error ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
   } else {
     errorMessage = error.toString()
   }

   console.log(errorMessage)
 }
}
