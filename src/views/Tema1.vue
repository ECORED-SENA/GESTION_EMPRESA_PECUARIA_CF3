<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Empresa
    p.mb-5 El concepto de empresa se debe dar de inicio para tener claro a qué se hace referencia con esta palabra tan comúnmente usada:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/3UKXAceBWbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.bg-color4
      .col-12.px-5
        .row.mb-5(data-aos="slide-left")
          .col-lg-7
            p.mb-4 La relevancia de las empresas es tan elevada que la normatividad colombiana cuenta con diversas reglas que la definen y regulan. El ejemplo más claro lo contiene el Código de Comercio de 1971, considerado el compendio de normas comerciales más importante en Colombia; allí se define de la siguiente forma:
            .row
              .col-12.p-4.bg-color2
                p.mb-3 #[span.text-deco1 #[b ARTÍCULO 25. (EMPRESA - CONCEPTO)]]. Se entenderá por empresa toda actividad económica organizada para la producción, transformación, circulación, administración o custodia de bienes, o para la prestación de servicios. Dicha actividad se realizará a través de uno o más establecimientos de comercio (Código de Comercio, 1971, Artículo 25).
              figure
                img(src='@/assets/curso/img4.png', style="width: 120px").m-auto.img-position1
          .col-lg-5
            figure
              img(src='@/assets/curso/img3.png', style="width: 450px").m-auto
        #t_1_1
        .titulo-segundo.color-secundario
          h2 1.1 Clasificación
        .row.mb-5
          .col-12.bg-color3.px-5.shadow.rounded(data-aos="slide-right")
            .row.align-items-center.py-4.py-md-0
              .col-12.col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/img5.png', style="width: 200px").m-auto
              .col-12.col-md-7
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/img1.svg', style="width: 50px").m-auto
                  .col
                    p.m-0 Las empresas pueden clasificarse según diversos criterios, y así, abordar definiciones, estrategias y medidas de forma conjunta en función de las necesidades de cada usuario. #[span.text-deco1 La siguiente figura infográfica presenta algunos de los sistemas de clasificación más utilizados en nuestro entorno:]
        .row.mb-5.justify-content-center
          .col-lg-10
            ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/img3.svg', alt='Texto que describa la imagen')
              .tarjeta.color-acento-botones.shadow.p-3(x="2.7%" y="31.6%" numero="")
                .h5.mb-2.text-deco2 Según sector económico
                p.mb-0.text-deco3 Bajo este criterio la empresa se clasifica según el sector productivo al que pertenece su actividad principal, mediante este sistema también se suele determinar el tipo de actividad a desarrollar: de extracción, producción o comercialización.
              .tarjeta.color-acento-botones.shadow.p-3(x="2.7%" y="48.6%" numero="")
                .h5.mb-2.text-deco2 Sector primario
                p.mb-0.text-deco3 Agrupa a los organismos que llevan a cabo tareas relacionadas con la explotación de recursos naturales. Este sector usualmente no involucra actividades de transformación, por lo que el cliente suele comprar los recursos tal cual fueron extraídos. Uno de los ejemplos más comunes son las empresas mineras, que extraen bienes naturales como carbón o minerales de la tierra.
              .tarjeta.color-acento-botones.shadow.p-3(x="2.7%" y="63.7%" numero="")
                .h5.mb-2.text-deco2 Sector secundario
                p.mb-0.text-deco3 Incluye las empresas que desarrollan actividades manufactureras, esto significa, que adquieren materias primas de terceros para transformarlos en productos terminados con características esencialmente diferentes. Por ejemplo, una zapatería que compra insumos como madera o cuero y los transforma para producir y vender zapatos.
              .tarjeta.color-acento-botones.shadow.p-3(x="2.7%" y="78.5%" numero="")
                .h5.mb-2.text-deco2 Sector terciario
                p.mb-0.text-deco3 Comprende aquellas empresas dedicadas a la intermediación de bienes sin ningún tipo de proceso o valor agregado, así como las que se dedican a la prestación de servicios. Aquí pueden incluirse empresas como las comercializadoras o supermercados que compran insumos al por mayor para luego ser vendidos por unidades.
              .tarjeta.color-acento-botones.shadow.p-3(x="23.3%" y="31.8%" numero="")
                .h5.mb-2.text-deco2 Según control de recursos
                p.mb-0.text-deco3 Según este criterio, las empresas se clasifican según la procedencia del capital; este último entendido como la inversión efectuada por parte de sus accionistas o propietarios, para que la empresa opere. En principio existen dos fuentes principales de recursos, la proveniente del sector público, bajo la figura del Estado, y el sector privado.
              .tarjeta.color-acento-botones.shadow.p-3(x="23.3%" y="48.6%" numero="")
                .h5.mb-2.text-deco2 Pública
                p.mb-0.text-deco3 Todo el capital se obtiene a través de fuentes de recursos públicos, su destinación suele estar asociada a la satisfacción de necesidades con un fuerte componente social o a la extracción de recursos que le pertenecen a la nación. En esta categoría entran algunas empresas de servicios públicos u hospitales.
              .tarjeta.color-acento-botones.shadow.p-3(x="23.3%" y="63.7%" numero="")
                .h5.mb-2.text-deco2 Privada
                p.mb-0.text-deco3 El capital se obtiene a través de particulares; las actividades son tan variadas como las necesidades del mercado y la imaginación de sus directivos. Su propósito es la generación de utilidades para ser distribuidos como dividendos o para reinvertir en la empresa y garantizar su crecimiento en el tiempo.
              .tarjeta.color-acento-botones.shadow.p-3(x="23.3%" y="78.5%" numero="")
                .h5.mb-2.text-deco2 Mixta
                p.mb-0.text-deco3 Su capital proviene tanto de fuentes públicas como privadas. Suelen surgir producto de la necesidad del Estado de conseguir recursos adicionales a los asignados mediante presupuesto o utilidades generadas por las empresas; ya sea para mantenerlas operativas  o para dinamizar su actividad.
              .tarjeta.color-acento-botones.shadow.p-3(x="43.5%" y="31.8%" numero="")
                .h5.mb-2.text-deco2 Según su esfera territorial
                p.mb-0.text-deco3 Este sistema clasifica las empresas según la extensión del área geográfica en el que la empresa lleva a cabo su objeto social.
              .tarjeta.color-acento-botones.shadow.p-3(x="43.5%" y="48.6%" numero="")
                .h5.mb-2.text-deco2 Local
                p.mb-0.text-deco3 Desarrolla su actividad comercial en un área de poca cobertura, bien sea una localidad o municipio, donde se encuentra su planta física.
              .tarjeta.color-acento-botones.shadow.p-3(x="43.5%" y="63.7%" numero="")
                .h5.mb-2.text-deco2 Regional
                p.mb-0.text-deco3 Involucra más de un municipio para llevar a cabo su operación, está restringido a un departamento o región en específico.
              .tarjeta.color-acento-botones.shadow.p-3(x="43.5%" y="78.5%" numero="")
                .h5.mb-2.text-deco2 Nacional
                p.mb-0.text-deco3 La producción y/o venta de los bienes o servicios cubre más de una región en el país. Abarcan una porción significativa del territorio nacional a través de sucursales físicas distribuidas en distintas regiones, o haciendo uso de sistemas de distribución de gran envergadura.
              .tarjeta.color-acento-botones.shadow.p-3(x="43.5%" y="93.7%" numero="")
                .h5.mb-2.text-deco2 Multinacional
                p.mb-0.text-deco3 Ejecutan las actividades operativas y ofertan sus bienes y servicios en varios países. Por norma general cuentan con una sede matriz en un país, que funciona como central de operaciones a nivel global, mientras que las sucursales que operan alrededor del mundo se conocen como subsidiarias o filiales.
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p.mb-4 Adicionalmente se tienen las empresas por orden legal tal como se presenta a continuación:
        h3.mb-4.text-deco1 #[u Según constitución jurídica]
        p.mb-4 Las organizaciones que cumplen con la definición de empresa pueden ser constituidas de manera unipersonal o a través de la creación de una persona jurídica en donde se unen varios inversores organizados en sociedad:
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Societarias")
            .col-12
              p #[span.text-deco1 #[b Se constituyen como un organismo independiente]] a los socios que la crearon por lo que cuentan con un número de identificación propio y único. Gracias a su personería jurídica, la responsabilidad frente a terceros recae sobre sí misma y sobre su representante legal.
              p.mb-4 En Colombia la legislación y práctica comercial contemplan varios tipos de empresas que cumplen con esta definición. La forma más rápida y sencilla de identificarlas es observando la terminación de su nombre o razón social, ver tabla 1:
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Tabla 1.] Tipos societarios
              .tabla-b.color-acento-contenido
                table
                  caption Nota. Sena (2021).
                  tr
                    th(style="background-color: #3C6D9D").text-white Tipo societario
                    th(style="background-color: #3C6D9D; border-left: #AFAFAF 2px solid").text-white Termiación
                  tr
                    th(style="background-color: #E1E8E8") Sociedad en comandita simple 
                    td(style="background-color: #E1E8E8; border-left: #AFAFAF 2px solid") S. en C.
                  tr
                    th(style="background-color: #FFFFFF") Sociedad en comandita por acciones
                    td(style="background-color: #FFFFFF; border-left: #AFAFAF 2px solid") S.C.A.
                  tr
                    th(style="background-color: #E1E8E8") Sociedad de responsabilidad limitada
                    td(style="background-color: #E1E8E8; border-left: #AFAFAF 2px solid") Ltda.
                  tr
                    th(style="background-color: #FFFFFF") Sociedad anónima
                    td(style="background-color: #FFFFFF; border-left: #AFAFAF 2px solid") S.A.
                  tr
                    th(style="background-color: #E1E8E8") Sociedad por acciones simplificada
                    td(style="background-color: #E1E8E8; border-left: #AFAFAF 2px solid") S.A.S.
          .row(numero="2" titulo="Autónomas").align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/img4.svg', style="width: 400px").m-auto
            .col-lg-6
              p.mb-0 #[span.text-deco1 #[b Se constituyen por una sola persona natural]] sin crear  otra entidad independiente. Asumen todas las responsabilidades frente a terceros. Como no cuentan con personería jurídica, no requieren de un número de identificación independiente.
      .col-lg-5
        figure(data-aos="slide-left")
          img(src='@/assets/curso/img7.png', style="width: 450px").m-auto
    h3.mb-5.text-deco1 #[u Según tamaño]
    .bloque-texto-a.color-secundario.p-3.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3
          figure
            img(src='@/assets/curso/img8.png', style="width: 300px").m-auto
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p #[b.text-deco1 Para clasificar las empresas según su tamaño existen diversos criterios o escalas de medición]. Algunos se apoyan en la cantidad de activos, otros en el tamaño de su patrimonio o bien en el número de empleos que genera. La legislación colombiana ha sancionado diversos decretos y leyes que presentan unos criterios determinados. Como ejemplo de lo anterior, la Ley 590 de 2000 lista las categorías y los rangos para clasificar las empresas en función de criterios como el número de trabajadores, el valor de los activos o las ventas brutas anuales; posteriormente, el Decreto 957 de 2019, emitido por el Ministerio de Comercio, Industria y Turismo, reglamenta este aspecto según el sector económico en el que la empresa lleve a cabo su actividad, ver tabla 2:
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 2.] Clasificación de las empresas según Decreto 957
        .tabla-b.color-acento-contenido
          .tabla-b__header
            h5.mb-0 Ingresos en UVT (Unidades de Valor Tributario) de actividades ordinarias según sector económico
          table
            caption Decreto 957 del Ministerio de Comercio, Industria y Turismo (2019).
            tr
              th(style="background-color: #3C6D9D").text-white Tamaño de la empresa/sector
              th(style="background-color: #3C6D9D; border-left: #AFAFAF 2px solid").text-white Manufactura
              th(style="background-color: #3C6D9D; border-left: #AFAFAF 2px solid").text-white Servicios
              th(style="background-color: #3C6D9D; border-left: #AFAFAF 2px solid").text-white Comercio
            tr
              th(style="background-color: #E1E8E8") Microempresa
              td(style="background-color: #E1E8E8; border-left: #AFAFAF 2px solid") Menores o iguales a 23.563.
              td(style="background-color: #E1E8E8; border-left: #AFAFAF 2px solid") Menores o iguales a 32.988.
              td(style="background-color: #E1E8E8; border-left: #AFAFAF 2px solid") Menores o iguales a 44.769.
            tr
              th(style="background-color: #FFFFFF") Pequeña
              td(style="background-color: #FFFFFF; border-left: #AFAFAF 2px solid") Mayores a 23.563 y menores o iguales a 204.995.
              td(style="background-color: #FFFFFF; border-left: #AFAFAF 2px solid") Mayores a 32.988 y menores o iguales a 131.951.
              td(style="background-color: #FFFFFF; border-left: #AFAFAF 2px solid") Mayores a 44.769 y menores o iguales a 431.196.
            tr
              th(style="background-color: #E1E8E8") Mediana
              td(style="background-color: #E1E8E8; border-left: #AFAFAF 2px solid") Mayores a 204.995 y menores o iguales a 1’736.565.
              td(style="background-color: #E1E8E8; border-left: #AFAFAF 2px solid") Mayores a 131.951 y menores o iguales a 483.034.
              td(style="background-color: #E1E8E8; border-left: #AFAFAF 2px solid") Mayores a 431.196 y menores o iguales a 2’160.692.
            tr
              th(style="background-color: #FFFFFF; border-bottom: 2px #3C6D9D solid") Grande
              td(style="background-color: #FFFFFF; border-bottom: 2px #3C6D9D solid; border-left: #AFAFAF 2px solid") Mayores a 1’736.565.
              td(style="background-color: #FFFFFF; border-bottom: 2px #3C6D9D solid; border-left: #AFAFAF 2px solid") Mayores a 483.034.
              td(style="background-color: #FFFFFF; border-bottom: 2px #3C6D9D solid; border-left: #AFAFAF 2px solid") Mayores a 2’160.692.
    .row.bg-color5
      .col-12.px-5
        separador.mb-5
        #t_1_2
        .titulo-segundo.color-secundario
          h2 1.2 Recursos
        .row.mb-5
          .col-lg-7
            p.mb-4 #[b.text-deco1 Según Planas (2008)], las empresas funcionan como sistemas abiertos, en donde obtienen recursos del ambiente como lo son las materias primas o el capital, y que suelen ser conocidas como entradas o “inputs” por su traducción al inglés. Esto puede aterrizarse a ejemplos como la compra de leche en una productora de alimentos, como materias primas que luego son transformadas para reintegrarse al entorno en forma de salidas o “outputs”. Continuando con el ejemplo, la leche se sometería a un proceso productivo para venderse en forma de queso o mantequilla.
            .row
              .col-12.p-4.bg-color2
                p.mb-3 El ciclo debe ser supervisado de manera permanente de tal forma que se garantice el cumplimiento de las estrategias propuestas por los directivos. Al fin y al cabo, en el desarrollo operativo de la empresa, siempre se deberá velar por el cumplimiento de las expectativas de sus dueños, por lo que estos sistemas de control aportarán la retroalimentación necesaria para pulir el proceso productivo e incrementar las ganancias esperadas con el paso del tiempo, ver figura 1. 
              figure
                img(src='@/assets/curso/img4.png', style="width: 120px").m-auto.img-position1
          .col-lg-5
            figure
              img(src='@/assets/curso/img9.png', style="width: 450px").m-auto
        .row.mb-5.justify-content-center(data-aos="slide-right")
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 1.] Empresas como sistema
            figure
              img(src='@/assets/curso/img6.svg', style="width: 900px").m-auto
              figcaption.mt-3 Nota. Adaptado de Planas Flores (2018).
        p.mb-5 Las fuentes de obtención de recursos suelen ser otras empresas que se ubican en un eslabón anterior en la cadena productiva. Así, cada organización cuenta con proveedores que ofrecen insumos o acreedores que aportan capital necesarios para mantener la empresa en funcionamiento, del mismo modo, al final del proceso se encuentran los clientes que adquieren los nuevos bienes transformados, estos pueden ser consumidores finales, como lo es un niño que compra una golosina en una tienda, o un siguiente eslabón de la cadena productiva de distribución, como lo son las empresas pertenecientes al sector terciario de la economía (compran para vender).
        .row.mb-5
          .col-12.bg-color3.px-5.shadow.rounded(data-aos="slide-left")
            .row.align-items-center.py-4.py-md-0
              .col-12.col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/img5.png', style="width: 200px").m-auto
              .col-12.col-md-7
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/img1.svg', style="width: 50px").m-auto
                  .col
                    p.m-0 #[b.text-deco1 La mecánica descrita deja en claro que los recursos son el combustible para que una organización se mantenga activa], es por ello que el término toma tanta relevancia a la hora de concebir la gestión administrativa asociada a los procesos productivos. Diversos autores sugieren su clasificación en función de su naturaleza, así pues, se propone y detalla la siguiente clasificación dada su amplia aceptación en el ámbito organizacional:
                  figure
                    img(src='@/assets/curso/img4.png', style="width: 120px").m-auto.img-position1
        h3.mb-5.text-deco1 #[u Recursos de una empresa]
        .row.justify-content-center
          .col-lg-10
            ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/img7.svg', alt='Texto que describa la imagen')
              .tarjeta.color-acento-botones.shadow.p-3(x="2.9%" y="37%" numero="")
                .h5.mb-2.text-deco2 Humanos
                p.mb-0.text-deco3 La empresa es una organización de tipo social, por lo que para desarrollar las labores para las que fue concebida, demanda de la interacción humana, ya sea entre trabajadores y sus directivos, o con vendedores, clientes, proveedores, entre otros. El factor humano está arraigado en cualquier sistema organizacional, y es tal su relevancia, que una correcta gestión del talento humano puede impulsar los indicadores de la empresa y mejorar de forma significativa el rendimiento global de cualquier compañía.
              .tarjeta.color-acento-botones.shadow.p-3(x="2.7%" y="57.1%" numero="")
                .h5.mb-2.text-deco2 Propietarios
                p.mb-0.text-deco3 Aportan el capital, por lo que son los dueños de la organización y quienes tienen a su cargo las decisiones más importantes, como el objeto social de la empresa, su tipo societario, la aprobación de la información financiera o la destinación de las utilidades generadas en el ejercicio.
              .tarjeta.color-acento-botones.shadow.p-3(x="2.8%" y="74.7%" numero="")
                .h5.mb-2.text-deco2 Directivos
                p.mb-0.text-deco3 Se designan para actuar en representación de los propietarios, por lo que son los encargados de ejecutar las tareas programadas de forma continua, algunas veces son los mismo propietarios.  Comúnmente a través de un órgano llamado junta directiva o a través de las gerencias generales y específicas por área. Las decisiones que toman son de nivel estratégico dado que pueden involucrar desde un área hasta la totalidad de la compañía.
              .tarjeta.color-acento-botones.shadow.p-3(x="2.8%" y="92.4%" numero="")
                .h5.mb-2.text-deco2 Trabajadores
                p.mb-0.text-deco3 También conocidos como colaboradores son quienes llevan a cabo las tareas más operativas, son nombrados por los directivos y su función se centra en la ejecución de las tareas designadas. Esta categoría incluye funcionarios operativos, jefes de área, supervisores, entre otros.
              .tarjeta.color-acento-botones.shadow.p-3(x="28.6%" y="37.5%" numero="")
                .h5.mb-2.text-deco2 Financieros
                p.mb-0.text-deco3 Agrupa los bienes de capital dispuestos en dinero en efectivo o en títulos valores de alta liquidez. Frecuentemente, las empresas poseen diversas fuentes para la obtención de capital, sin embargo, la mayor complejidad proviene de su correcta administración, que garantice una operación ininterrumpida y permanente.
              .tarjeta.color-acento-botones.shadow.p-3(x="28.6%" y="57.1%" numero="")
                .h5.mb-2.text-deco2 Fuentes operativas
                p.mb-0.text-deco3 Se erige como la ideal, puesto que proviene de la venta de bienes o la prestación de los servicios ofertados por la empresa, incluye tanto las ventas de contado como los recaudos de cartera producto de ventas a crédito. Se considera la más relevante en el análisis financiero, puesto que es producto de la actividad por la cual fue concebida la organización.
              .tarjeta.color-acento-botones.shadow.p-3(x="28.6%" y="74.7%" numero="")
                .h5.mb-2.text-deco2 Fuentes de financiación
                p.mb-0.text-deco3 El capital proviene de terceros que lo entregan en calidad de préstamo, bien sea a cambio de unos intereses, como es el caso de las entidades financieras, o de dividendos, para el caso de los inversionistas de capital. Estos dineros se reciben con la promesa de ser retornados de una forma u otra, por lo que representan un beneficio en el corto plazo con una obligación asociada para un periodo futuro.
              .tarjeta.color-acento-botones.shadow.p-3(x="28.6%" y="92.4%" numero="")
                .h5.mb-2.text-deco2 Fuentes de inversión
                p.mb-0.text-deco3 Incluyen los dineros obtenidos por actividades accesorias a la principal. Por ejemplo, el capital obtenido por medio de un contrato de arrendamiento, donde se han alquilado inmuebles que no se estaban utilizando, o la venta de inmuebles que se han valorizado en el tiempo, otorgando cierta rentabilidad. Esta categoría requiere especial atención, puesto que la continua obtención de recursos por esta vía puede llevar a la descapitalización a causa de la venta indiscriminada de activos.
              .tarjeta.color-acento-botones.shadow.p-3(x="57.5%" y="37.5%" numero="")
                .h5.mb-2.text-deco2 Materiales
                p.mb-0.text-deco3 Son los elementos pertenecientes a esta categoría, comprenden los bienes tangibles necesarios para llevar a cabo el objeto social de la compañía. Pueden clasificarse en función del tiempo que se espera permanezcan en la empresa y su uso.
              .tarjeta.color-acento-botones.shadow.p-3(x="57.5%" y="57.1%" numero="")
                .h5.mb-2.text-deco2 Corrientes
                p.mb-0.text-deco3 Aquellos de los que se espera disponer en un periodo de tiempo inferior a un año, ejemplo de ello son las materias primas utilizadas durante la producción, o los productos dispuestos para su comercialización.
              .tarjeta.color-acento-botones.shadow.p-3(x="57.5%" y="74.7%" numero="")
                .h5.mb-2.text-deco2 No corrientes
                p.mb-0.text-deco3 Son elementos a utilizar durante más de un ciclo productivo, y de los cuales se tiene la expectativa de obtener beneficios en periodos superiores a un año. En esta categoría clasifican bienes como la maquinaria, los terrenos o los inmuebles.
              .tarjeta.color-acento-botones.shadow.p-3(x="83.2%" y="37.5%" numero="")
                .h5.mb-2.text-deco2 Técnicos
                p.mb-0.text-deco3 Estos recursos son aquellos intangibles asociados a procedimientos o técnicas necesarias para llevar a cabo las operaciones de la organización. Pueden asociarse a cualquier proceso, bien sea administrativo, comercial o de producción.
              .tarjeta.color-acento-botones.shadow.p-3(x="83.2%" y="57.1%" numero="")
                .h5.mb-2.text-deco2 Administrativos
                p.mb-0.text-deco3 Organigramas, políticas empresariales o sistemas de control interno. Siendo más específicos, se puede hacer mención a sistemas detallados y a la medida para el reclutamiento de personal para cargos específicos, donde primen las herramientas para una contratación idónea que impulse los niveles de productividad.
              .tarjeta.color-acento-botones.shadow.p-3(x="83.2%" y="74.7%" numero="")
                .h5.mb-2.text-deco2 Producción
                p.mb-0.text-deco3 Fórmulas, recetas asociadas a la creación de productos o patentes. Algunas empresas alcanzan el éxito gracias a este tipo de recursos, tal es el caso de Coca Cola, posicionada como la bebida más popular en el mundo y con una receta secreta que garantiza que ninguna competencia obtendrá un sabor tan característico y único como el que ofrece.
              .tarjeta.color-acento-botones.shadow.p-3(x="83.2%" y="92.4%" numero="")
                .h5.mb-2.text-deco2 Comercial
                p.mb-0.text-deco3 Estrategias de mercadeo, bases de datos o imagen corporativa. La reputación precede algunas compañías y maximiza sus niveles de venta gracias a su buen nombre.
    separador.mb-5
    #t_1_3
    .titulo-segundo.color-secundario
      h2 1.3 Planeación y presupuesto
    p.mb-4 #[span.text-deco1 #[b La planeación se erige como una de las herramientas de administración de mayor utilidad]], y es que a partir de ella, es posible determinar los objetivos que los directivos o propietarios esperan alcanzar con la operación. Resulta difícil encaminar los esfuerzos cuando no se vislumbra una meta a futuro, la planeación dota de propósito a la empresa, y ofrece una ruta de acción para todos los funcionarios involucrados.
    .row.mb-5.align-items-center
      .col-lg-4.mb-5.mb-lg-0
        p.mb-4 El presupuesto #[b.text-deco1 surge como una metodología cuantitativa que aterriza las expectativas en cifras], delimitando las metas por áreas de operación o por naturaleza. Es un documento formal con una estructura definida en la que se presentan los objetivos a corto y mediano plazo.
        figure
          img(src='@/assets/curso/img8.svg', style="width: 50px; margin-left: 80%")
      .col-lg-4
        figure(data-aos="slide-down")
          img(src='@/assets/curso/img10.png', style="width: 450px;").m-auto
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/img8.svg', style="width: 50px;")
        p.mb-4 #[b #[span.text-deco1 La principal ventaja del presupuesto] es que funciona como un elemento de control que permite medir el desempeño de los colaboradores y delimitar sus responsabilidades]. Además, facilita la integración de procesos entre las subpartes de la empresa y garantiza un método efectivo para evaluar las áreas en todos sus niveles y en periodos de tiempo específicos.
    .row.mb-5
      .col-12.bg-color3.px-5.shadow.rounded(data-aos="slide-right")
        .row.align-items-center.py-4.py-md-0
          .col-12.col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/img11.png', style="width: 200px").m-auto
          .col-12.col-md-7
            .row.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/img1.svg', style="width: 50px").m-auto
              .col
                p.m-0 El presupuesto funciona como un #[span.text-deco1 #[b sistema analítico que se alimenta de la información histórica y presente para prever el futuro de los procesos financieros y productivos de la compañía]]. Su hoja de trabajo puede incluir todos los recursos previamente estudiados, es decir, humanos, materiales, de capital y técnicos.
    p.mb-5 Se espera que el resultado final sea expresado en indicadores financieros, que permitan comprender los aspectos más relevantes de la operación, como lo son las unidades a producir, los tiempos y niveles esperados de recaudo, entre otros. La figura 2 presenta un diagrama que recrea la mecánica de la estimación presupuestal:
    .row.mb-5.justify-content-center
      .col-lg-8(data-aos="slide-left")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 2.] Enfoques de tiempo de la información productiva
        figure
          img(src='@/assets/curso/img9.svg', style="width: 800px").m-auto
          figcaption.mt-3 Nota. Adaptado de Rincón y Narváez (2017).
    separador.mb-5
    #t_1_4
    .titulo-segundo.color-secundario
      h2 1.4 Seguridad industrial y salud ocupacional
    .bloque-texto-a.color-primario.p-3.mb-5(data-aos="slide-right")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3
          figure
            img(src='@/assets/curso/img12.png', style="width: 300px").m-auto
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p Ejecutar las tareas propias de cualquier organización #[span.text-deco1 #[b requiere de la participación de funcionarios bien sea para abordar tareas operativas, o para aportar ideas y estrategias a aplicar en cualquier plazo de tiempo]]. Sin importar cómo se visualice una empresa o unidad productiva, el capital humano siempre resultará indispensable en cualquiera de las etapas propias de su ciclo de vida, desde su constitución hasta su liquidación y se debe tener en cuenta:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/LOOCn_JwAWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Adicionalmente el Ministerio de Trabajo (2018) publicó un diagrama donde aclara cómo debe ser implementado el sistema a partir del año 2020, por lo que se hace necesaria la lectura e interpretación de los requerimientos mínimos normativos, para implementar el modelo aplicable a cualquier empresa productora, ver figura 3.
    .row.justify-content-center
      .col-lg-8(data-aos="slide-left")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 3.] Implementación definitiva del Sistema de Gestión de Seguridad y Salud en el Trabajo desde el año 2020 en adelante
        figure
          img(src='@/assets/curso/img10.svg', style="width: 800px").m-auto
          figcaption.mt-3 Nota. Ministerio del Trabajo (2018).
        
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
