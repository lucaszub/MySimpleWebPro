import { Resend } from "resend";

// Initialiser l'instance Resend avec la clé API
// Cette instance est utilisée dans app/api/contact/route.ts pour envoyer des emails
export const resend = new Resend(process.env.RESEND_API_KEY);

// Note: Cette instance est utilisée pour :
// - Envoyer des emails de contact via resend.emails.send()
// - Gérer l'authentification avec votre clé API
