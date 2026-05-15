export interface Institucion {
  id: string;
  name: string;
  desc: string;
  type: string;
  ministryId: string;
  longDesc?: string;
  gaceta?: string;
}

export const instituciones: Institucion[] = [
  {
    id: "bcv",
    name: "Banco Central de Venezuela (BCV)",
    desc: "Ente responsable de la política monetaria y la estabilidad de precios.",
    type: "Autónomo",
    ministryId: "mppef",
    longDesc: "El Banco Central de Venezuela es una persona jurídica de derecho público con autonomía para la formulación y el ejercicio de las políticas de su competencia. Tiene por objeto fundamental lograr la estabilidad de precios y preservar el valor interno y externo de la unidad monetaria.",
    gaceta: "G.O. N° 35.060 (01/10/1992)"
  },
  {
    id: "cnti",
    name: "CNTI",
    desc: "Centro Nacional de Tecnologías de Información, impulsa el uso de tecnologías libres.",
    type: "Instituto Autónomo",
    ministryId: "mppct",
    longDesc: "El CNTI es el ente encargado de estandarizar y articular los esfuerzos del Estado en materia de tecnologías de información, promoviendo el uso de software libre y la soberanía tecnológica."
  },
  {
    id: "onapre",
    name: "ONAPRE",
    desc: "Oficina Nacional de Presupuesto, órgano rector del Sistema Presupuestario Público.",
    type: "Servicio Autónomo",
    ministryId: "mppef"
  },
  {
    id: "oncop",
    name: "ONCOP",
    desc: "Oficina Nacional de Contabilidad Pública, establece las normas contables del Estado.",
    type: "Servicio Autónomo",
    ministryId: "mppef"
  },
  {
    id: "seniat",
    name: "SENIAT",
    desc: "Servicio Nacional Integrado de Administración Aduanera y Tributaria.",
    type: "Servicio Autónomo",
    ministryId: "mppef",
    longDesc: "El SENIAT es el órgano de la administración pública encargado de la recaudación de tributos internos y aduaneros en Venezuela. Su misión es recaudar con eficiencia los recursos para el Estado, promoviendo la cultura tributaria y el cumplimiento voluntario de las obligaciones."
  },
  {
    id: "snc",
    name: "SNC",
    desc: "Servicio Nacional de Contrataciones, regula las compras y contratos del Estado.",
    type: "Servicio Autónomo",
    ministryId: "mppef",
    longDesc: "El Servicio Nacional de Contrataciones es el ente rector de las contrataciones públicas en Venezuela. Se encarga de regular, supervisar y fiscalizar los procesos de adquisición de bienes, prestación de servicios y ejecución de obras por parte de los órganos del sector público."
  },
  {
    id: "fundayacucho",
    name: "Fundayacucho",
    desc: "Fundación Gran Mariscal de Ayacucho, encargada de becas y formación estudiantil.",
    type: "Fundación",
    ministryId: "mppeu",
    longDesc: "Fundayacucho es la institución pionera en la gestión de becas y créditos educativos en Venezuela. Su objetivo es democratizar el acceso a la educación superior y especializada, tanto a nivel nacional como internacional, para el desarrollo estratégico del país."
  },
  {
    id: "ula",
    name: "ULA",
    desc: "Universidad de Los Andes (Repositorio Institucional y Campus).",
    type: "Universidad",
    ministryId: "mppeu",
    longDesc: "La Universidad de Los Andes es una de las instituciones académicas más antiguas y prestigiosas de Venezuela. Con sede principal en Mérida, destaca por su excelencia en investigación, docencia y extensión cultural en diversas áreas del conocimiento."
  },
  {
    id: "pdvsa",
    name: "PDVSA",
    desc: "Empresa estatal encargada de la explotación y comercialización del petróleo.",
    type: "Empresa del Estado",
    ministryId: "minpet",
    longDesc: "Petróleos de Venezuela, S.A. es la corporación estatal de la República Bolivariana de Venezuela que se encarga de la explotación, producción, refinación, mercadeo y transporte del petróleo venezolano. Es el pilar fundamental de la economía nacional."
  },
  {
    id: "ivss",
    name: "IVSS",
    desc: "Instituto Venezolano de los Seguros Sociales, protección social de los trabajadores.",
    type: "Instituto Autónomo",
    ministryId: "mppst",
    longDesc: "El IVSS es la institución pública dedicada a brindar protección de seguridad social a todos sus beneficiarios en las contingencias de maternidad, vejez, sobrevivencia, enfermedad, accidentes, invalidez, muerte, nupcialidad y paro forzoso."
  },
  {
    id: "corpoelec",
    name: "CORPOELEC",
    desc: "Corporación Eléctrica Nacional, encargada del sistema eléctrico nacional.",
    type: "Empresa del Estado",
    ministryId: "mppee",
    longDesc: "CORPOELEC es la empresa operadora estatal encargada de la generación, transmisión, distribución y comercialización de energía eléctrica en todo el territorio venezolano, bajo la rectoría del Ministerio del Poder Popular para la Energía Eléctrica."
  },
  {
    id: "saime",
    name: "SAIME",
    desc: "Servicio Administrativo de Identificación, Migración y Extranjería.",
    type: "Servicio Autónomo",
    ministryId: "mijp",
    gaceta: "G.O. N° 39.196 (09/06/2009)"
  },
  {
    id: "conatel",
    name: "CONATEL",
    desc: "Comisión Nacional de Telecomunicaciones, regula el sector de comunicaciones.",
    type: "Regulador",
    ministryId: "minci",
    gaceta: "G.O. N° 34.801 (18/09/1991)"
  },
  {
    id: "abae",
    name: "ABAE",
    desc: "Agencia Bolivariana para Actividades Espaciales, gestiona satélites y planes espaciales.",
    type: "Investigación",
    ministryId: "mppct"
  },
  {
    id: "rnv",
    name: "RNV",
    desc: "Radio Nacional de Venezuela, principal emisora del Estado venezolano.",
    type: "Medio Público",
    ministryId: "minci",
    longDesc: "Radio Nacional de Venezuela es la principal cadena de radio del Estado venezolano. Fundada en 1936, tiene la misión de informar, educar y entretener a la población, promoviendo los valores nacionales y la identidad cultural a través de su señal abierta y plataformas digitales."
  },
  {
    id: "procuraduria",
    name: "Procuraduría General",
    desc: "Defensa jurídica de los intereses patrimoniales de la República.",
    type: "Estado",
    ministryId: "presidencia",
    longDesc: "La Procuraduría General de la República tiene como función principal representar y defender, judicial y extrajudicialmente, los intereses patrimoniales de la República Bolivariana de Venezuela, además de asesorar jurídicamente a la administración pública."
  },
  {
    id: "gaceta",
    name: "Gaceta Oficial",
    desc: "Órgano oficial de publicación de leyes y actos administrativos.",
    type: "Estado",
    ministryId: "presidencia",
    longDesc: "La Gaceta Oficial de la República Bolivariana de Venezuela es el órgano oficial encargado de la publicación de las leyes, decretos, resoluciones y demás actos administrativos de carácter general que emanan de los poderes públicos para su vigencia y cumplimiento."
  },
  {
    id: "sencamer",
    name: "SENCAMER",
    desc: "Servicio de normalización, calidad, metrología y reglamentos técnicos.",
    type: "Servicio Autónomo",
    ministryId: "mincomercio",
    longDesc: "SENCAMER es la institución encargada de velar por la calidad y seguridad de los productos y servicios que se comercializan en el país, mediante la normalización, metrología legal y reglamentación técnica para proteger los derechos del consumidor."
  },
  {
    id: "inn",
    name: "INN",
    desc: "Instituto Nacional de Nutrición, encargado de la seguridad alimentaria.",
    type: "Instituto Autónomo",
    ministryId: "minal",
    longDesc: "El Instituto Nacional de Nutrición es el ente rector en materia de alimentación y nutrición en Venezuela. Su misión es garantizar la seguridad alimentaria y el derecho a una nutrición adecuada mediante políticas de vigilancia, educación y producción social."
  },
  {
    id: "cva",
    name: "CVA",
    desc: "Corporación Venezolana Agraria, coordina la producción agrícola estatal.",
    type: "Corporación",
    ministryId: "mat",
    longDesc: "La CVA es una corporación estatal dedicada al impulso y fortalecimiento de la soberanía alimentaria nacional a través de la gestión de unidades de producción primaria, procesamiento y distribución de rubros agrícolas estratégicos."
  },
  {
    id: "ine",
    name: "INE",
    desc: "Instituto Nacional de Estadística, produce la información estadística oficial.",
    type: "Instituto Autónomo",
    ministryId: "planificacion",
    longDesc: "El INE es el órgano rector de la actividad estadística en Venezuela. Se encarga de la recolección, análisis y difusión de datos demográficos, económicos y sociales fundamentales para la planificación estratégica y la toma de decisiones del Estado."
  },
  {
    id: "inparques",
    name: "INPARQUES",
    desc: "Instituto Nacional de Parques, encargado de los parques nacionales.",
    type: "Instituto Autónomo",
    ministryId: "minec",
    longDesc: "INPARQUES es la institución responsable de la administración y gestión del Sistema Nacional de Parques de Venezuela, protegiendo la biodiversidad, los ecosistemas y monumentos naturales para el disfrute y preservación de las futuras generaciones."
  },
  {
    id: "saren",
    name: "SAREN",
    desc: "Servicio Autónomo de Registros y Notarías, seguridad jurídica registral.",
    type: "Servicio Autónomo",
    ministryId: "mijp",
    longDesc: "El SAREN es el ente encargado de regular y controlar la actividad registral y notarial en el país, garantizando la seguridad jurídica de los actos y contratos civiles y mercantiles de los ciudadanos mediante la fe pública."
  },
  {
    id: "sundde",
    name: "SUNDDE",
    desc: "Superintendencia Nacional para la Defensa de los Derechos Socioeconómicos.",
    type: "Regulador",
    ministryId: "mincomercio",
    longDesc: "La SUNDDE es el organismo encargado de fiscalizar los precios y el abastecimiento de bienes y servicios, combatiendo la especulación y garantizando el acceso del pueblo a productos a precios justos, de acuerdo con la Ley Orgánica de Precios Justos."
  },
  {
    id: "cnu",
    name: "CNU",
    desc: "Consejo Nacional de Universidades, rector del sistema universitario.",
    type: "Estado",
    ministryId: "mppeu",
    longDesc: "El CNU es el organismo encargado de coordinar, supervisar y asesorar a las instituciones de educación superior en Venezuela, promoviendo la calidad académica, la investigación y la pertinencia social del sistema universitario nacional."
  },
  {
    id: "archivo",
    name: "Archivo General",
    desc: "Archivo General de la Nación, custodia el patrimonio documental.",
    type: "Instituto Autónomo",
    ministryId: "mincultura",
    longDesc: "El Archivo General de la Nación es el custodio de la memoria histórica y administrativa del país. Su labor es preservar, organizar y difundir los documentos que constituyen el patrimonio documental de la República para la investigación y la identidad nacional."
  },
  {
    id: "tesoreria",
    name: "Tesorería SS",
    desc: "Tesorería de Seguridad Social, gestiona los fondos de seguridad social.",
    type: "Estado",
    ministryId: "mppst",
    longDesc: "La Tesorería de Seguridad Social es el ente recaudador y administrador de los recursos financieros del Sistema de Seguridad Social, garantizando la sostenibilidad de los beneficios y pensiones para los trabajadores y sus familias."
  },
  {
    id: "fanb",
    name: "FANB",
    desc: "Fuerza Armada Nacional Bolivariana, defensa de la soberanía.",
    type: "Seguridad",
    ministryId: "mindefensa",
    longDesc: "La FANB es la institución encargada de garantizar la independencia y soberanía de la Nación y asegurar la integridad del espacio geográfico mediante la defensa militar, la cooperación en el mantenimiento del orden interno y la participación activa en el desarrollo nacional."
  },
  {
    id: "mision-vivienda",
    name: "Misión Vivienda",
    desc: "Gran Misión Vivienda Venezuela, construcción de hogares.",
    type: "Misión",
    ministryId: "mpphv",
    longDesc: "La GMVV es la política habitacional más importante de la historia de Venezuela. Su objetivo es garantizar el derecho humano a una vivienda digna y segura a todas las familias venezolanas, priorizando a aquellas en situación de vulnerabilidad.",
    gaceta: "G.O. N° 39.615 (14/02/2011)"
  },
  {
    id: "barrio-adentro",
    name: "Barrio Adentro",
    desc: "Misión Barrio Adentro, salud pública primaria.",
    type: "Misión",
    ministryId: "mpps",
    longDesc: "La Misión Barrio Adentro es el eje central del sistema público nacional de salud. Lleva atención médica gratuita, preventiva y de calidad directamente a los barrios y comunidades más alejadas mediante consultorios populares y centros de diagnóstico integral.",
    gaceta: "G.O. N° 37.820 (18/11/2003)"
  },
  {
    id: "sunad",
    name: "SUNAD",
    desc: "Superintendencia Nacional Antidrogas, rectora de la lucha contra el tráfico.",
    type: "Superintendencia",
    ministryId: "mijp",
    longDesc: "La SUNAD es el órgano rector en materia de lucha contra el tráfico ilícito de drogas y la prevención de su consumo. Coordina las políticas de seguridad nacional para combatir este flagelo y promover estilos de vida saludables."
  },
  {
    id: "mision-robinson",
    name: "Misión Robinson",
    desc: "Programa de alfabetización y educación básica nacional.",
    type: "Misión",
    ministryId: "me",
    longDesc: "La Misión Robinson es el programa de alfabetización masiva que permitió a Venezuela ser declarada 'Territorio Libre de Analfabetismo' por la UNESCO. Sigue activa brindando educación primaria a adultos que no pudieron completarla oportunamente."
  },
  {
    id: "academia-historia",
    name: "Academia Historia",
    desc: "Academia Nacional de la Historia, estudio y preservación histórica.",
    type: "Academia",
    ministryId: "mincultura",
    longDesc: "La Academia Nacional de la Historia es una institución dedicada al fomento de la investigación histórica en Venezuela. Custodia invaluables archivos y promueve el conocimiento crítico del pasado nacional para el fortalecimiento de la identidad ciudadana."
  }
];
