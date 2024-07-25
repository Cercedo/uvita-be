import z from 'zod';

const patientIdSchema = z.object({
  id: z.coerce.number(),
});

export default patientIdSchema;
