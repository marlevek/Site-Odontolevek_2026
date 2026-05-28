export const siteConfig = {
  siteUrl: "https://odontolevek.com.br",
  clinicName: "Odonto Levek",
  dentistName: "NOME_DENTISTA",
  cro: "8323",
  address: "R. Francisco Derosso, 2747 - Sala 12 - Xaxim",
  city: "Curitiba",
  state: "PR",
  whatsapp: "554130186662",
  email: "",
  businessHours:
    "Segunda-feira: 08:00-11:30, 13:30-18:30; Terça-feira: 08:00-11:30, 13:30-18:30; Quarta-feira: 08:00-11:30; Quinta-feira: 13:30-18:30; Sexta-feira: 08:00-11:30, 13:30-18:30; Sábado: fechado; Domingo: fechado.",
  instagramUrl: "https://www.instagram.com/odontolevek/",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Odonto%20Levek&query_place_id=ChIJEY0ILBL73JQRhTsaIGmRCNA",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?output=embed&q=Odonto%20Levek%2C%20R.%20Francisco%20Derosso%2C%202747%20-%20Sala%2012%2C%20Curitiba%20-%20PR",
  googleBusinessUrl: "GOOGLE_BUSINESS_URL",
  analyticsId: "",
  defaultWhatsappMessage:
    "Olá, vim pelo site Odonto Levek e gostaria de agendar uma avaliação.",
  developerCredit: "CoderTec",
};

export function getWhatsappLink(message = siteConfig.defaultWhatsappMessage) {
  const digits = siteConfig.whatsapp.replace(/\D/g, "");

  if (!digits) {
    return "#contato";
  }

  const phone = digits.startsWith("55") ? digits : `55${digits}`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
