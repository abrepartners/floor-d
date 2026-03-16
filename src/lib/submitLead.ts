export async function submitLeadForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  flooringType: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
  const url = `https://${projectId}.supabase.co/functions/v1/send-lead-email`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return { success: false, error: body.error || "Something went wrong" };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Network error — please try again." };
  }
}
