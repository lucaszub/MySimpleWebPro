import { NextRequest, NextResponse } from "next/server";
import { getResendClient } from "@/app/lib/resend";
import { validateContactForm } from "@/app/lib/validation";

export async function POST(request: NextRequest) {
  try {
    // Créer le client Resend dynamiquement
    const resend = getResendClient();
    if (!resend) {
      console.error(
        "❌ RESEND_API_KEY manquante dans les variables d'environnement"
      );
      return NextResponse.json(
        { error: "Configuration Resend manquante" },
        { status: 500 }
      );
    }
    console.log("✅ Client Resend initialisé");

    // Parser les données reçues
    const body = await request.json();
    console.log("📥 Données reçues:", body);

    // Validation avec Zod
    const validation = validateContactForm(body);
    console.log("Résultat validation:", validation);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Données invalides",
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    const { name, email, message, phone } = validation.data;

    // Préparer l'email de notification (pour vous)
    const notificationEmail = {
      from: "onboarding@resend.dev", // Adresse de test Resend (en attendant la config du domaine)
      to: "zubiarrainlucas@gmail.com", // Votre email personnel pour recevoir les messages
      subject: `Nouveau message de contact de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #111827; margin: 0; font-size: 24px;">MySimpleWebPro</h1>
              <p style="color: #6b7280; margin: 5px 0 0 0;">Nouveau message de contact</p>
            </div>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #111827; margin: 0 0 15px 0; font-size: 18px;">Informations du contact</h2>
              <p style="margin: 8px 0; color: #374151;"><strong>Nom :</strong> ${name}</p>
              <p style="margin: 8px 0; color: #374151;"><strong>Email :</strong> ${email}</p>
              ${
                phone
                  ? `<p style="margin: 8px 0; color: #374151;"><strong>Téléphone :</strong> ${phone}</p>`
                  : ""
              }
            </div>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #111827; margin: 0 0 15px 0; font-size: 16px;">Message</h3>
              <p style="margin: 0; color: #374151; line-height: 1.6;">${message}</p>
            </div>
            
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 0; font-size: 14px;">
                <em>Envoyé depuis le formulaire de contact de MySimpleWebPro</em>
              </p>
              <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 12px;">
                Répondez directement à cet email pour contacter ${name}
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Préparer l'email de confirmation (pour le client)
    const confirmationEmail = {
      from: "onboarding@resend.dev", // Adresse de test Resend (en attendant la config du domaine)
      to: email,
      subject: "Message reçu - MySimpleWebPro",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #111827; margin: 0; font-size: 24px;">MySimpleWebPro</h1>
              <p style="color: #6b7280; margin: 5px 0 0 0;">Message reçu avec succès</p>
            </div>
            
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #22c55e;">
              <h2 style="color: #111827; margin: 0 0 15px 0; font-size: 18px;">Bonjour ${name},</h2>
              <p style="margin: 0; color: #374151; line-height: 1.6;">
                Nous avons bien reçu votre message et nous vous remercions de nous avoir contactés.
              </p>
            </div>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #111827; margin: 0 0 15px 0; font-size: 16px;">Prochaines étapes</h3>
              <ul style="margin: 0; padding-left: 20px; color: #374151; line-height: 1.6;">
                <li>Notre équipe examine votre demande sous 24-48h</li>
                <li>Nous vous recontactons avec des pistes concrètes</li>
                <li>Planification d'un appel gratuit de 30 minutes si nécessaire</li>
              </ul>
            </div>
            
            <div style="text-align: center; padding: 20px; background-color: #fef3c7; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 16px;">💡 Besoin d'une réponse rapide ?</h3>
              <a href="https://cal.com/lucaszubiarrain/30min?overlayCalendar=true" 
                 style="display: inline-block; background-color: #111827; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 500;">
                Réserver un appel gratuit de 30 min
              </a>
            </div>
            
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 0; font-size: 14px;">
                <strong>MySimpleWebPro</strong> - Sites web simples et efficaces
              </p>
              <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 12px;">
                contact@mysimplewebpro.com | mysimplewebpro.com
              </p>
            </div>
          </div>
        </div>
      `,
    };

    console.log("Emails préparés:", { notificationEmail, confirmationEmail });

    // Envoyer l'email de notification (pour vous)
    console.log("Tentative d'envoi de l'email de notification...");
    const notificationResult = await resend.emails.send(notificationEmail);
    console.log("Résultat envoi notification:", notificationResult);

    // Envoyer l'email de confirmation (pour le client)
    console.log("Tentative d'envoi de l'email de confirmation...");
    const confirmationResult = await resend.emails.send(confirmationEmail);
    console.log("Résultat envoi confirmation:", confirmationResult);

    // Réponse de succès
    return NextResponse.json(
      {
        success: true,
        message: "Message envoyé avec succès",
        notificationId: notificationResult.data?.id,
        confirmationId: confirmationResult.data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);

    return NextResponse.json(
      {
        error: "Erreur lors de l'envoi du message. Veuillez réessayer.",
      },
      { status: 500 }
    );
  }
}

// Méthode GET pour tester l'API
export async function GET() {
  return NextResponse.json(
    { message: "API de contact opérationnelle" },
    { status: 200 }
  );
}
