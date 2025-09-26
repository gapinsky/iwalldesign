"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Send } from "lucide-react";

/* ------------------------- Walidacja (Zod) ------------------------- */

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB na plik
// używamy Set<string> żeby uniknąć konfliktu typów z f.type: string
const ALLOWED_TYPES = new Set<string>([
  "image/jpeg",
  "image/png",
  "application/pdf",
]);

const schema = z.object({
  name: z.string().trim().min(2, "Podaj imię i nazwisko"),
  email: z.string().trim().email({ message: "Podaj poprawny adres e-mail" }),
  // telefon PL: dokładnie 9 cyfr (po wyczyszczeniu spacji/kresek)
  phone: z
    .string()
    .transform((v) => v.replace(/[^\d]/g, ""))
    .refine((v) => /^\d{9}$/.test(v), {
      message: "Podaj 9-cyfrowy numer telefonu",
    }),
  city: z.string().trim().min(2, "Podaj miasto"),

  files: z
    .custom<FileList>((val) => val instanceof FileList, {
      message: "Dodaj od 1 do 3 plików",
    })
    .refine((files) => files && files.length > 0 && files.length <= 3, {
      message: "Dodaj od 1 do 3 plików",
    })
    .refine(
      (files) =>
        files && Array.from(files).every((f) => ALLOWED_TYPES.has(f.type)),
      { message: "Dozwolone formaty: JPG, PNG, PDF" }
    )
    .refine(
      (files) =>
        files && Array.from(files).every((f) => f.size <= MAX_FILE_SIZE),
      { message: "Każdy plik max 2 MB" }
    ),

  message: z.string().trim().optional(),
  privacy: z.boolean().refine((v) => v === true, {
    message: "Musisz zaakceptować politykę prywatności",
  }),
});

type FormData = z.infer<typeof schema>;

/* ----------------------------- Komponent ----------------------------- */

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const fd = new FormData();
      fd.append("name", data.name);
      fd.append("email", data.email);
      fd.append("phone", data.phone); // już 9 cyfr po transform
      fd.append("city", data.city);
      fd.append("message", data.message || "");

      Array.from(data.files || []).forEach((file) => {
        fd.append("files", file);
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });

      if (!res.ok) throw new Error("Błąd serwera");
      setStatus("success");
      reset();
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {status === "success" && (
        <Alert className="mb-4 border-green-600 text-green-700">
          <AlertTitle>Sukces 🎉</AlertTitle>
          <AlertDescription>
            Wiadomość została wysłana poprawnie.
          </AlertDescription>
        </Alert>
      )}
      {status === "error" && (
        <Alert className="mb-4 border-red-600 text-red-700">
          <AlertTitle>Błąd ❌</AlertTitle>
          <AlertDescription>
            Coś poszło nie tak. Spróbuj ponownie później.
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Imię + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Imię i nazwisko*
            </label>
            <input
              id="name"
              {...register("name")}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "err-name" : undefined}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Jan Kowalski"
            />
            {errors.name && (
              <p id="err-name" className="text-sm text-red-600 mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              E-mail*
            </label>
            <input
              id="email"
              type="email"
              inputMode="email"
              {...register("email")}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "err-email" : undefined}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="jan@przyklad.pl"
            />
            {errors.email && (
              <p id="err-email" className="text-sm text-red-600 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Telefon + Miasto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">
              Numer telefonu*
            </label>
            <input
              id="phone"
              inputMode="tel"
              {...register("phone")}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "err-phone" : undefined}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="+48 500 600 700"
            />
            {errors.phone && (
              <p id="err-phone" className="text-sm text-red-600 mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium">
              Miasto*
            </label>
            <input
              id="city"
              {...register("city")}
              aria-invalid={!!errors.city}
              aria-describedby={errors.city ? "err-city" : undefined}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Koszalin"
            />
            {errors.city && (
              <p id="err-city" className="text-sm text-red-600 mt-1">
                {errors.city.message}
              </p>
            )}
          </div>
        </div>

        {/* Pliki */}
        <div>
          <label htmlFor="files" className="block text-sm font-medium">
            Dodaj zdjęcia powierzchni lub projektu* (Max. 3)
          </label>
          <input
            id="files"
            type="file"
            multiple
            accept=".jpg,.jpeg,.png,.pdf"
            {...register("files")}
            aria-invalid={!!errors.files}
            aria-describedby={errors.files ? "err-files" : undefined}
            className="mt-2 block w-full text-sm text-gray-700 file:mr-4 file:rounded-md file:border file:border-gray-300 file:bg-white file:px-3 file:py-2 file:text-sm file:font-medium hover:file:bg-gray-100"
          />
          {errors.files && (
            <p id="err-files" className="text-sm text-red-600 mt-1">
              {errors.files.message}
            </p>
          )}
        </div>

        {/* Wiadomość */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Dodatkowe informacje (opcjonalnie)
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={5}
            className="mt-1 w-full resize-none rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Opisz szczegóły projektu…"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <input id="privacy" type="checkbox" {...register("privacy")} />
          <label htmlFor="privacy" className="text-sm text-gray-700">
            Zapoznałem(am) się i akceptuję Politykę Prywatności
          </label>
        </div>
        {errors.privacy && (
          <p className="text-sm text-red-600 mt-1">{errors.privacy.message}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 px-5 py-2.5 font-medium text-white hover:opacity-90 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-600"
        >
          <Send size={18} />
          {isSubmitting ? "Wysyłanie..." : "Wyślij zapytanie"}
        </button>
      </form>
    </div>
  );
}
