import type { Post } from "../types/post";
import tuxAvatar from "../assets/tux.png";
import imageMock from "../assets/image.jpg";

// 4 posts variados para testar todos os estados do PostCard
// Mantém o conteúdo original como primeiro item para referência
export const mockPosts: Post[] = [
  {
    id: "1",
    author: {
      id: "u1",
      name: "Linus Tux",
      avatarUrl: tuxAvatar,
    },
    content:
      "Caraca eu adoro usar linux quando estou comendo cheetos e sujando meu teclado todinho! 🤤 #linux #cheetos #teclado sujo",
    imageUrl: imageMock,
    likesCount: 67,
    commentsCount: 12,
    createdAt: new Date(Date.now() - 69 * 60 * 60 * 1000).toISOString(), // Há 69 horas
    circleId: "c1",
  },
  {
    id: "2",
    author: {
      id: "u2",
      name: "Maya Grove",
      avatarUrl: tuxAvatar,
    },
    content:
      "Manhã de domingo na fogueira: café coado, caderno aberto e três páginas sem filtro. Alguém mais escreve à mão ainda? ✍️ #slowmorning #fogueira",
    imageUrl: null, // Teste: post sem imagem
    likesCount: 23,
    commentsCount: 8,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // Há 5 horas
    circleId: "c1",
  },
  {
    id: "3",
    author: {
      id: "u3",
      name: "Alex Silva",
      avatarUrl: tuxAvatar,
    },
    content:
      "Primeira colheita da horta do círculo! Tomatinhos ainda pequenos mas cheios de orgulho 🌱 Quem quer trocar mudas no próximo encontro?",
    imageUrl: imageMock,
    likesCount: 41,
    commentsCount: 15,
    createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // Há 30 min
    circleId: "c2",
  },
  {
    id: "4",
    author: {
      id: "u4",
      name: "Sofia Calma",
      avatarUrl: tuxAvatar,
    },
    content:
      "Compartilhei uma mensagem de voz de 2min sobre como lidar com a ansiedade antes de apresentar um projeto. Está na Fogueira do Círculo Design Calmo — respostas em voz são bem-vindas. 🎙️✨ Texto longo para testar quebra de linha, overflow-wrap e clamp de conteúdo dentro do card. A ideia é que o componente PostCard lide bem com textos grandes, hashtags múltiplas e comportamento responsivo.",
    imageUrl: null, // Teste: texto longo sem imagem
    likesCount: 9,
    commentsCount: 3,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // Há 2 dias
    circleId: "c2",
  },
];
