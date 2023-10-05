const API_URL = "http://localhost:8000";

export async function getNews() {
  const res = await fetch(`${API_URL}/news`);
  if (!res.ok) throw Error("Failed fetching news. Please try again later");

  const data = await res.json();
  return data;
}

export async function getPricingPlans() {
  const res = await fetch(`${API_URL}/pricing`);
  if (!res.ok)
    throw Error("Failed fetching price plans. Please try again later");

  const data = await res.json();
  return data;
}

export async function getUsers() {
  const res = await fetch(`${API_URL}/users`);

  if (!res.ok) throw Error("Failed getting users. Please try again later");

  const data = await res.json();
  return data;
}

export async function registerNewUser(newUser) {
  try {
    const res = await fetch(`${API_URL}/users`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch (err) {
    throw Error("Failed registering new user. Try Again");
  }
}

export async function updateUser(id, updatedUser) {
  try {
    const res = await fetch(`${API_URL}/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedUser),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw Error();
  } catch (err) {
    throw Error("Failed updating user. Try Again");
  }
}
