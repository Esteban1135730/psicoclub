import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { z } from "zod";
import { pool } from "./db";

const contactSchema = z.object({
  parentName: z.string().min(1),
  childName: z.string().min(1),
  childAge: z.number().int().min(1).max(18),
  serviceType: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(5),
  message: z.string().optional().default("")
});

export async function contactRoutes(app: FastifyInstance, _opts: FastifyPluginOptions) {
  app.post("/api/contact", async (request, reply) => {
    const parseResult = contactSchema.safeParse(request.body);

    if (!parseResult.success) {
      return reply.status(400).send({
        message: "Datos inválidos",
        issues: parseResult.error.issues
      });
    }

    const data = parseResult.data;

    const result = await pool.query(
      `
        INSERT INTO contact_leads
          (parent_name, child_name, child_age, service_type, email, phone, message)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id, created_at
      `,
      [
        data.parentName,
        data.childName,
        data.childAge,
        data.serviceType,
        data.email,
        data.phone,
        data.message
      ]
    );

    const lead = result.rows[0];

    return reply.status(201).send({
      id: lead.id,
      createdAt: lead.created_at
    });
  });
}

