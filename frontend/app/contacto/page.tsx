"use client";

import { FormEvent, useState } from "react";
import { LayoutShell } from "../../components/LayoutShell";
import { PhoneCall, Mail, Baby } from "lucide-react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000";

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccess(null);
    setError(null);

    const formData = new FormData(event.currentTarget);

    const payload = {
      parentName: formData.get("parentName"),
      childName: formData.get("childName"),
      childAge: Number(formData.get("childAge")),
      serviceType: formData.get("serviceType"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message")
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message ?? "Ocurrió un error al enviar tu mensaje.");
      }

      setSuccess("¡Gracias! Hemos recibido tu mensaje y te contactaremos muy pronto.");
      event.currentTarget.reset();
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "No pudimos enviar tu mensaje en este momento. Intenta de nuevo en unos minutos."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <LayoutShell>
      <div className="grid gap-10 md:grid-cols-[1.2fr,1fr]">
        <section className="space-y-5">
          <header className="space-y-3">
            <h1 className="font-heading text-3xl text-slate-900 sm:text-4xl">Hablemos sobre tu familia</h1>
            <p className="max-w-xl text-sm text-slate-600 sm:text-base">
              Cuéntanos un poco sobre tu hijo o hija y en qué te gustaría recibir acompañamiento. Te responderemos lo
              antes posible para coordinar una cita o asesoría.
            </p>
          </header>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl bg-white px-5 py-6 shadow-soft"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="parentName" className="text-xs font-medium text-slate-700">
                  Nombre del padre, madre o acudiente
                </label>
                <input
                  id="parentName"
                  name="parentName"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-cherry focus:bg-white"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="childName" className="text-xs font-medium text-slate-700">
                  Nombre del niño o niña
                </label>
                <input
                  id="childName"
                  name="childName"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-cherry focus:bg-white"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1.5">
                <label htmlFor="childAge" className="text-xs font-medium text-slate-700">
                  Edad del niño o niña
                </label>
                <input
                  id="childAge"
                  name="childAge"
                  type="number"
                  min={1}
                  max={18}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-cherry focus:bg-white"
                />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <label htmlFor="serviceType" className="text-xs font-medium text-slate-700">
                  ¿Qué servicio te interesa?
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-cherry focus:bg-white"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="terapia_infantil">Terapia infantil</option>
                  <option value="orientacion_padres">Orientación a padres</option>
                  <option value="evaluaciones">Evaluaciones</option>
                  <option value="no_seguro">No estoy seguro/a, quiero orientación</option>
                </select>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-medium text-slate-700">
                  Correo electrónico
                </label>
                <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-3">
                  <Mail className="mr-2 h-4 w-4 text-slate-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="h-8 w-full bg-transparent text-sm outline-none"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-xs font-medium text-slate-700">
                  Teléfono o WhatsApp
                </label>
                <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-3">
                  <PhoneCall className="mr-2 h-4 w-4 text-slate-400" />
                  <input
                    id="phone"
                    name="phone"
                    required
                    className="h-8 w-full bg-transparent text-sm outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-medium text-slate-700">
                Cuéntanos brevemente qué está pasando o en qué te gustaría recibir apoyo
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-cherry focus:bg-white"
              />
            </div>
            {success && <p className="text-xs font-medium text-emerald-600">{success}</p>}
            {error && <p className="text-xs font-medium text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-cherry px-6 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-cherry/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </section>
        <aside className="space-y-4 rounded-3xl bg-slate-50 px-5 py-6 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cherry/10 text-cherry">
              <Baby className="h-5 w-5" />
            </div>
            <div>
              <p className="font-heading text-lg text-slate-900">Un espacio seguro para tu hijo</p>
              <p className="text-xs text-slate-500">
                Creamos ambientes cálidos, lúdicos y respetuosos para que los niños puedan expresarse sin juicios.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-xs text-slate-600">
            <p className="font-semibold text-slate-700">Horarios habituales</p>
            <p>Lunes a viernes: 8:00 a.m. - 7:00 p.m.</p>
            <p>Sábados: 8:00 a.m. - 1:00 p.m.</p>
          </div>
          <div className="space-y-2 text-xs text-slate-600">
            <p className="font-semibold text-slate-700">Modalidad</p>
            <p>Sesiones presenciales y virtuales (según disponibilidad).</p>
          </div>
        </aside>
      </div>
    </LayoutShell>
  );
}

