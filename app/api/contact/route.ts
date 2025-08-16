import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/app/lib/resend";
import { validateContactForm } from "@/app/lib/validation";

export async function POST(request: NextRequest) {
  try {
    // Parser les données reçues
    const body = await request.json();
    console.log("Données reçues:", body);

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
      from: "onboarding@resend.dev", // Adresse d'envoi par défaut de Resend pour les tests
      to: "zubiarrainlucas@gmail.com", // Email de destination pour les tests
      subject: `Nouveau message de contact de ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
        <p><strong>Message :</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Envoyé depuis le formulaire de contact de MySimpleWebPro</em></p>
      `,
    };

    console.log("Email préparé:", notificationEmail);

    // Envoyer l'email de notification
    console.log("Tentative d'envoi d'email...");
    const result = await resend.emails.send(notificationEmail);
    console.log("Résultat envoi:", result);

    // Réponse de succès
    return NextResponse.json(
      {
        success: true,
        message: "Message envoyé avec succès",
        id: result.data?.id,
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
