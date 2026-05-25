export const siteConfig = {
  siteUrl: "https://odontolevek.com.br",
  clinicName: "Odonto Levek",
  dentistName: "NOME_DENTISTA",
  cro: "CRO",
  address: "R. Francisco Derosso, 2747 - Salas 12 Térreo - Xaxim",
  city: "Curitiba",
  state: "PR",
  whatsapp: "WHATSAPP",
  email: "",
  businessHours:
    "Segunda-feira: 08:00-11:30, 13:30-18:30; Terça-feira: 08:00-11:30, 13:30-18:30; Quarta-feira: 08:00-11:30; Quinta-feira: 13:30-18:30; Sexta-feira: 08:00-11:30, 13:30-18:30; Sábado: fechado; Domingo: fechado.",
  instagramUrl: "INSTAGRAM",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.%20Francisco%20Derosso%2C%202747%20-%20Salas%2012%20T%C3%A9rreo%20-%20Xaxim%2C%20Curitiba%20-%20PR",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=R.%20Francisco%20Derosso%2C%202747%20-%20Salas%2012%20T%C3%A9rreo%20-%20Xaxim%2C%20Curitiba%20-%20PR&output=embed",
  googleBusinessUrl: "GOOGLE_BUSINESS_URL",
  analyticsId: "",
  defaultWhatsappMessage:
    "Olá, vim pelo site Odonto Levek e gostaria de agendar uma avaliação.",
  developerCredit: "CoderTec",
};

export function getWhatsappLink(message = siteConfig.defaultWhatsappMessage) {
  const digits = siteConfig.whatsapp.replace(/\D/g, "");

  if (!digits || digits === "WHATSAPP") {
    return "#contato";
  }

  return `https://wa.me/55${digits}?text=${encodeURIComponent(message)}`;
}
