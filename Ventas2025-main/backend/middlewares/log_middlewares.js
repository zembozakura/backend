export function logMiddleware(req, res, next) {
  const date = new Date()

   .toISOString()
   .replace('T'  ,' ')
   .replace('Z', ' ');

   const ip = req.ip;
     
   
}