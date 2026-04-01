import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gsklzzqgtqcgwygiaows.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdza2x6enFndHFjZ3d5Z2lhb3dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNzI3ODgsImV4cCI6MjA5MDY0ODc4OH0.YAvpFe0-B6duvopFyAe-oc3Mjg3nUzFiw5fmXfpfmGA'

export const supabase = createClient(supabaseUrl, supabaseKey)
