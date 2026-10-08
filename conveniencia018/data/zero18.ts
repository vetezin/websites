export const zero18 = {
  name: "Conveniência Zero18",
  street: "Rua Júlio Peruche, 474",
  neighborhood: "Jardim Maracanã",
  city: "Presidente Prudente",
  postalCode: "19026-260",
  instagramUrl: "https://www.instagram.com/convenienciazero18?igsh=MXNyNXZzZm5mdHc4Yg%3D%3D",
  whatsappUrl: "https://wa.me/5518988294337?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Zero18%21",
  mapsUrl: "https://www.google.com/maps/place/Conveni%C3%AAncia+Zero18/data=!4m2!3m1!1s0x9493f7f69eab9fd7:0xea507ead16b3505e",
  rating: 5.0,
  reviewCount: 3,
  hours: [
    { day: "Segunda-feira", time: "Fechado" },
    { day: "Terça a quinta", time: "13:00 – 00:00" },
    { day: "Sexta e sábado", time: "13:00 – 01:30" },
    { day: "Domingo", time: "Fechado" },
  ],
  schemaHours: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday"], opens: "13:00", closes: "00:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "13:00", closes: "01:30" },
  ],
} as const;
