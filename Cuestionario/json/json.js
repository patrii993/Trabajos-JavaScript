let test = [
  {
    categoria: "Japonés",
    imagen: "japones.png",
    preguntas: [
      {
        tipo: "simple",
        pregunta: "¿Cuántas escrituras tiene el japonés  ?",
        respuestas: [
          {
            respuesta: "Hiragana, katakana y romanji",
            correcta: "",
          },
          {
            respuesta: "Hiragana y katakana",
            correcta: "",
          },
          {
            respuesta: "Hiragana, katakana y kanji",
            correcta: "true",
          },
          {
            respuesta: "Hiragana, katakana, romanji y kanji",
            correcta: "",
          },
        ],
      },
      {
        tipo: "multiple",
        pregunta: "¿En qué casos se usa el Katakana?",
        respuestas: [
          {
            respuesta: "Palabras extranjeras o que provengan de otro idioma",
            correcta: "true",
          },
          {
            respuesta: "Resaltar y enfatizar una palabra",
            correcta: "true",
          },
          {
            respuesta:
              "Cuando hay más de una significado para la misma palabra",
            correcta: "",
          },
          {
            respuesta: "Apenas se utiliza, solo en el japonés antiguo",
            correcta: "",
          },
        ],
      },
      {
        tipo: "multiple",
        pregunta: "¿Cómo se lee un Kanji?",
        respuestas: [
          {
            respuesta:
              "La lectura china o on'yomi, generalmente cuando se junta con otro u otros kanji, se escribe katakana.",
            correcta: "true",
          },
          {
            respuesta:
              "La lectura japonesa o kun'yomi, generalmente cuando está solo, se escribe en hiragana.",
            correcta: "true",
          },
          {
            respuesta: "Depende del hiragana que tenga antes u detrás.",
            correcta: "",
          },
          {
            respuesta:
              "Al ser una escritura antigua está en desuso y no se utiliza",
            correcta: "",
          },
        ],
      },
      {
        tipo: "multiple",
        pregunta: "¿Qué lectura tiene este kanji '父'?",
        audio: "kanji.mp3",
        respuestas: [
          {
            respuesta: "ちち",
            correcta: "true",
          },
          {
            respuesta: "とう",
            correcta: "true",
          },
          {
            respuesta: "けい",
            correcta: "",
          },
          {
            respuesta: "フ",
            correcta: "true",
          },
        ],
      },
      {
        tipo: "simple",
        pregunta: "¿Qué significa este caracter 'を'?",
        audio: "wo.mp3",
        respuestas: [
          {
            respuesta: "Vo",
            correcta: "",
          },
          {
            respuesta: "Uo",
            correcta: "",
          },
          {
            respuesta: "Wo",
            correcta: "true",
          },
          {
            respuesta: "Guo",
            correcta: "",
          },
        ],
      },
      {
        tipo: "simple",
        pregunta: "¿Qué significa este caracter 'ワ'?",
        audio: "wa.mp3",
        respuestas: [
          {
            respuesta: "Ua",
            correcta: "",
          },
          {
            respuesta: "Va",
            correcta: "",
          },
          {
            respuesta: "Gua",
            correcta: "",
          },
          {
            respuesta: "Wa",
            correcta: "true",
          },
        ],
      },
      {
        tipo: "simple",
        pregunta: "¿Qué le compra el chico a la chica?",
        audio: "listen1.mp3",
        respuestas: [
          {
            respuesta: "Sandwich pequeño",
            correcta: "",
          },
          {
            respuesta: "Sandwich grande y leche pequeña",
            correcta: "",
          },
          {
            respuesta: "Leche pequeña",
            correcta: "true",
          },
          {
            respuesta: "Sandwich pequeño y leche grande",
            correcta: "",
          },
        ],
      },
      {
        tipo: "simple",
        pregunta: "¿Qué es esta palabra 'アイコン'?",
        respuestas: [
          {
            respuesta: "Arcón",
            correcta: "",
          },
          {
            respuesta: "Marrón",
            correcta: "",
          },
          {
            respuesta: "Icono",
            correcta: "true",
          },
          {
            respuesta: "Marco",
            correcta: "",
          },
        ],
      },
    ],
  },

  {
    categoria: "Francés",
    imagen: "frances.png",
    preguntas: [
      {
        tipo: "simple",
        pregunta: "Comment…………-tu ?",
        respuestas: [
          {
            respuesta: "vas",
            correcta: "true",
          },
          {
            respuesta: "va",
            correcta: "",
          },
          {
            respuesta: "allez",
            correcta: "",
          },
          {
            respuesta: "as",
            correcta: "",
          },
        ],
      },
      {
        tipo: "multiple",
        pregunta: "Comment est-ce que……..?",
        respuestas: [
          {
            respuesta: "t’appelles-tu",
            correcta: "true",
          },
          {
            respuesta: "tu t’appelles",
            correcta: "true",
          },
          {
            respuesta: "t’appelle",
            correcta: "",
          },
          {
            respuesta: "m'appelle",
            correcta: "",
          },
        ],
      },
      {
        tipo: "multiple",
        pregunta: "………? 25 ans",
        respuestas: [
          {
            respuesta: "Quel âge êtes-vous ?",
            correcta: "",
          },
          {
            respuesta: "Combien as-tu ?",
            correcta: "",
          },
          {
            respuesta: "Quel âge as-tu ?",
            correcta: "true",
          },
          {
            respuesta: "Quel âge tu as ?",
            correcta: "true",
          },
        ],
      },
      {
        tipo: "simple",
        pregunta: "Est-ce que tu vois _________ voiture noire ?",
        respuestas: [
          {
            respuesta: " du",
            correcta: "",
          },
          {
            respuesta: "de",
            correcta: "",
          },
          {
            respuesta: "la",
            correcta: "true",
          },
          {
            respuesta: "l'",
            correcta: "",
          },
        ],
      },
      {
        tipo: "simple",
        pregunta: "Vous ……………le plat principal",
        respuestas: [
          {
            respuesta: "choisez",
            correcta: "",
          },
          {
            respuesta: "choissez",
            correcta: "",
          },
          {
            respuesta: " choisissez",
            correcta: "true",
          },
          {
            respuesta: " choisi",
            correcta: "",
          },
        ],
      },
      {
        tipo: "simple",
        pregunta: "Je préfère...",
        respuestas: [
          {
            respuesta: "la tarte avec les pommes",
            correcta: "",
          },
          {
            respuesta: "la tarte des pommes",
            correcta: "",
          },
          {
            respuesta: "la tarte du pommes",
            correcta: "",
          },
          {
            respuesta: "la tarte aux pommes",
            correcta: "true",
          },
        ],
      },
      {
        tipo: "simple",
        pregunta: "Le samedi, je vais……….cinéma.",
        respuestas: [
          {
            respuesta: "à le",
            correcta: "",
          },
          {
            respuesta: "à",
            correcta: "",
          },
          {
            respuesta: "au",
            correcta: "true",
          },
          {
            respuesta: "aux",
            correcta: "",
          },
        ],
      },
      {
        tipo: "simple",
        pregunta: "Choisissez la phrase correcte.",
        respuestas: [
          {
            respuesta: "La photo que j’ai prit",
            correcta: "",
          },
          {
            respuesta: "La photo que j’ai prise",
            correcta: "true",
          },
          {
            respuesta: "La photo que j’ai pris",
            correcta: "",
          },
          {
            respuesta: "a photo que j’y ai pris",
            correcta: "",
          },
        ],
      },
    ],
  },
];

export { test };
