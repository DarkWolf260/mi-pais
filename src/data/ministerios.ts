export interface Ministerio {
  id: string;
  name: string;
  area: string;
  titular: string;
  nombramiento?: string;
  articulosBase?: number[];
}

export interface Vicepresidencia {
  name: string;
  color: string;
  titular?: string;
  ministerios: Ministerio[];
}

export const vicepresidencias: Vicepresidencia[] = [
  {
    name: "Vicepresidencia Sectorial de Economía",
    color: "#ffcc00",
    titular: "Calixto Ortega Sánchez",
    ministerios: [
      { id: "minpet", name: "Ministerio del Poder Popular de Petróleo", area: "Hidrocarburos", titular: "Delcy Rodríguez", nombramiento: "27/08/2024" },
      { id: "mppef", name: "Ministerio del Poder Popular de Economía y Finanzas", area: "Finanzas", titular: "Anabel Pereira Fernández", nombramiento: "27/08/2024", articulosBase: [299, 311, 318] },
      { id: "mat", name: "Ministerio del Poder Popular para la Agricultura Productiva y Tierras", area: "Agricultura", titular: "Julio León Heredia", nombramiento: "05/02/2025" },
      { id: "pesca", name: "Ministerio del Poder Popular para la Pesca y Acuicultura", area: "Pesca", titular: "Juan Carlos Loyo", nombramiento: "22/04/2022" },
      { id: "minal", name: "Ministerio del Poder Popular para la Alimentación", area: "Alimentación", titular: "Carlos Leal Tellería", nombramiento: "15/04/2019" },
      { id: "minmin", name: "Ministerio del Poder Popular de Desarrollo Minero Ecológico", area: "Minería", titular: "Héctor Silva", nombramiento: "17/06/2024" },
      { id: "mincomercio", name: "Ministerio del Poder Popular de Industria y Comercio Nacional", area: "Comercio", titular: "Luis Antonio Villegas Ramírez", nombramiento: "03/02/2024" },
      { id: "comercioexterior", name: "Ministerio del Poder Popular de Comercio Exterior", area: "Comercio Exterior", titular: "Coromoto Godoy", nombramiento: "15/01/2025" }
    ]
  },
  {
    name: "Vicepresidencia Sectorial de Planificación",
    color: "#ffcc00",
    titular: "Ricardo Menéndez",
    ministerios: [
      { id: "planificacion", name: "Ministerio del Poder Popular de Planificación", area: "Planificación", titular: "Ricardo Menéndez", nombramiento: "17/06/2014" }
    ]
  },
  {
    name: "Vicepresidencia Sectorial para el Socialismo en lo Social y Territorial",
    color: "#ee1111",
    titular: "Héctor Rodríguez Castro",
    ministerios: [
      { id: "me", name: "Ministerio del Poder Popular para la Educación", area: "Educación", titular: "Héctor Rodríguez Castro", nombramiento: "27/08/2024", articulosBase: [102, 103, 104] },
      { id: "mppeu", name: "Ministerio del Poder Popular para la Educación Universitaria", area: "Educación Superior", titular: "Ricardo Sánchez", nombramiento: "27/08/2024" },
      { id: "mpphv", name: "Ministerio del Poder Popular para Hábitat y Vivienda", area: "Vivienda", titular: "Raúl Alfonso Paredes", nombramiento: "27/08/2024", articulosBase: [82] },
      { id: "mppdeporte", name: "Ministerio del Poder Popular para el Deporte", area: "Deporte", titular: "Franklin Cardillo Romero", nombramiento: "17/02/2025" },
      { id: "mppjuventud", name: "Ministerio del Poder Popular para la Juventud", area: "Juventud", titular: "Grecia Colmenares", nombramiento: "27/08/2024" },
      { id: "mppst", name: "Ministerio del Poder Popular para el Proceso Social del Trabajo", area: "Trabajo", titular: "Eduardo Piñate", nombramiento: "27/08/2024" },
      { id: "mppcomunas", name: "Ministerio del Poder Popular para las Comunas y Movimientos Sociales", area: "Comunas", titular: "Ángel Prado", nombramiento: "27/08/2024" },
      { id: "mpppi", name: "Ministerio del Poder Popular para los Pueblos Indígenas", area: "Indígenas", titular: "Clara Vidal", nombramiento: "09/02/2022" },
      { id: "mppmujer", name: "Ministerio del Poder Popular para la Mujer y la Igualdad de Género", area: "Mujer", titular: "Jhoana Carrillo Malavé", nombramiento: "27/08/2024" },
      { id: "mppadultos", name: "Ministerio del Poder Popular para los Adultos Mayores", area: "Adultos Mayores", titular: "Magaly Viña Castro", nombramiento: "29/05/2024" }
    ]
  },
  {
    name: "Vicepresidencia Sectorial para Ciencia, Tecnología, Ecosocialismo y Salud",
    color: "#00cc66",
    titular: "Gabriela Jiménez Ramírez",
    ministerios: [
      { id: "mppct", name: "Ministerio del Poder Popular para la Ciencia y la Tecnología", area: "Ciencia", titular: "Gabriela Jiménez Ramírez", nombramiento: "06/06/2019" },
      { id: "minec", name: "Ministerio del Poder Popular para el Ecosocialismo", area: "Ambiente", titular: "Freddy Ñáñez", nombramiento: "16/01/2026" },
      { id: "mpps", name: "Ministerio del Poder Popular para la Salud", area: "Salud", titular: "Magaly Gutiérrez Viña", nombramiento: "09/02/2022", articulosBase: [83, 84, 85] }
    ]
  },
  {
    name: "Vicepresidencia Sectorial de Soberanía Política, Seguridad y Paz",
    color: "#0044cc",
    titular: "Vladimir Padrino López",
    ministerios: [
      { id: "mindefensa", name: "Ministerio del Poder Popular para la Defensa", area: "Defensa", titular: "Vladimir Padrino López", nombramiento: "03/09/2014", articulosBase: [328, 329] },
      { id: "presidencia", name: "Ministerio del Poder Popular del Despacho de la Presidencia", area: "Gestión", titular: "Juan Escalona", nombramiento: "16/01/2026" },
      { id: "mppre", name: "Ministerio del Poder Popular para Relaciones Exteriores", area: "Diplomacia", titular: "Yván Gil", nombramiento: "06/01/2023" },
      { id: "mppfrontera", name: "Ministerio de Estado para la Nueva Frontera de Paz", area: "Fronteras", titular: "Gerardo Izquierdo Torres", nombramiento: "04/09/2015" }
    ]
  },
  {
    name: "Vicepresidencia Sectorial de Seguridad Ciudadana",
    color: "#0044cc",
    titular: "Diosdado Cabello",
    ministerios: [
      { id: "mijp", name: "Ministerio del Poder Popular para Relaciones Interiores, Justicia y Paz", area: "Seguridad", titular: "Diosdado Cabello", nombramiento: "27/08/2024" },
      { id: "mppsp", name: "Ministerio del Poder Popular para el Servicio Penitenciario", area: "Prisiones", titular: "Julio García Zerpa", nombramiento: "27/08/2024" }
    ]
  },
  {
    name: "Vicepresidencia Sectorial de Comunicación, Cultura y Turismo",
    color: "#ee1111",
    titular: "Miguel Ángel Pérez Pirela",
    ministerios: [
      { id: "minci", name: "Ministerio del Poder Popular para la Comunicación e Información", area: "Comunicación", titular: "Miguel Ángel Pérez Pirela", nombramiento: "16/01/2026" },
      { id: "mintur", name: "Ministerio del Poder Popular para el Turismo", area: "Turismo", titular: "Leticia Gómez", nombramiento: "27/08/2024" },
      { id: "mincultura", name: "Ministerio del Poder Popular para la Cultura", area: "Cultura", titular: "Ernesto Villegas", nombramiento: "03/11/2017" }
    ]
  },
  {
    name: "Vicepresidencia Sectorial de Obras Públicas y Servicios",
    color: "#ffcc00",
    titular: "Jorge Elíeser Márquez",
    ministerios: [
      { id: "mppee", name: "Ministerio del Poder Popular para la Energía Eléctrica", area: "Electricidad", titular: "Jorge Elíeser Márquez", nombramiento: "23/04/2024" },
      { id: "mppaguas", name: "Ministerio del Poder Popular de Atención de las Aguas", area: "Aguas", titular: "Carlos Mast Yustiz", nombramiento: "27/08/2024" },
      { id: "mppop", name: "Ministerio del Poder Popular de Obras Públicas", area: "Infraestructura", titular: "Juan José Ramírez", nombramiento: "27/08/2024" },
      { id: "mpptransporte", name: "Ministerio del Poder Popular para el Transporte", area: "Transporte", titular: "Ramón Celestino Velázquez", nombramiento: "16/05/2022" }
    ]
  }
];
