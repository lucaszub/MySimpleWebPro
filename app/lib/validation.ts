import { z } from "zod";

// Schéma de validation pour le formulaire de contact
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères")
    .regex(
      /^[a-zA-ZÀ-ÿ\s'-]+$/,
      "Le nom ne peut contenir que des lettres, espaces, tirets et apostrophes"
    )
    .trim()
    .refine((val) => val.length > 0, "Le nom ne peut pas être vide"),

  email: z
    .string()
    .email("Format d'email invalide")
    .min(5, "L'email doit contenir au moins 5 caractères")
    .max(100, "L'email ne peut pas dépasser 100 caractères"),

  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[\+]?[0-9\s\-\(\)]{8,20}$/.test(val), {
      message:
        "Format de téléphone invalide (8-20 chiffres, espaces, tirets, parenthèses autorisés)",
    }),

  message: z
    .string()
    .min(5, "Le message doit contenir au moins 5 caractères")
    .max(1000, "Le message ne peut pas dépasser 1000 caractères")
    .regex(/^[^<>]*$/, "Le message ne peut pas contenir de balises HTML"),

  // Champ caché pour la protection anti-spam
  honeypot: z.string().max(0, "Champ invalide").optional(),
});

// Type TypeScript dérivé du schéma
export type ContactFormData = z.infer<typeof contactFormSchema>;

// Fonction de validation
export function validateContactForm(
  data: unknown
):
  | { success: true; data: ContactFormData }
  | { success: false; errors: string[] } {
  try {
    const validatedData = contactFormSchema.parse(data);
    return { success: true, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // @ts-ignore - Ignorer l'erreur de type pour ZodError
      const errors = error.errors.map((err: any) => err.message);
      return { success: false, errors };
    }
    return { success: false, errors: ["Erreur de validation inconnue"] };
  }
}
