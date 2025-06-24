import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: 's3zcl3xv',    // Tu Project ID de Sanity
  dataset: 'production',    // Dataset
  apiVersion: '2024-06-23', // Fecha de hoy o la última estable (formato YYYY-MM-DD)
  useCdn: true,              // Usa la CDN de Sanity (solo lectura, más rápido)
})
