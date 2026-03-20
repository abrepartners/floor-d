const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }
  const envKeys = Object.keys(Deno.env.toObject()).filter(k => 
    k.includes('LOVABLE') || k.includes('RUN') || k.includes('PROJECT') || k.includes('DEPLOY')
  )
  return new Response(JSON.stringify({ envKeys }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
})
