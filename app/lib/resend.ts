import { Resend } from "resend";

// Important: ne pas instancier Resend au chargement du module, car Vercel
// évalue les modules pendant le build. Si la variable d'environnement
// RESEND_API_KEY n'est pas définie dans l'environnement de build, le
// constructeur lève une erreur et casse le build.
//
// Au lieu de cela, on exporte une fonction qui crée le client à l'exécution.

export function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

// Utilisation côté route handler :
// const resend = getResendClient();
// if (!resend) { ...return 500 }
// await resend.emails.send({...})
