<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.bg-color6
      .col-12.px-5
        .titulo-principal.color-acento-contenido(data-aos="flip-up")
          .titulo-principal__numero
            span 2
          h1 Producción
        .row.mb-5
          .col-lg-7
            p.mb-4 La producción puede definirse como el proceso mediante el cual una empresa transforma una serie de insumos en un producto terminado. Como se ha mencionado previamente, el objetivo de una organización es la generación de valor a través de la satisfacción de necesidades identificadas en el mercado objetivo, esto implica la oferta de bienes o servicios que otros agentes no están aportando a la sociedad, o no lo hacen de forma suficiente.
            .row
              .col-12.p-4.bg-color2
                p.mb-3 La mecánica organizacional puede reducirse a un flujo compuesto por tres grandes momentos: en primer lugar, la obtención de recursos materiales o técnicos del ambiente, para ello puede valerse de operaciones mercantiles como la compra de materias primas, obtención de créditos financieros, reclutamiento de personal entre otros, posteriormente la etapa de producción que involucra tomar estos recursos y dotarlos de un propósito, bien sea transformándolos en un producto tangible o diseñando un servicio concreto, y finalmente, la entrega de estos al mercado en forma de venta a los clientes.
          .col-lg-5
            figure
              img(src='@/assets/curso/img13.png', style="width: 550px").m-auto
        #t_2_1
        .titulo-segundo.color-secundario
          h2 2.1 Etapas
        p.mb-5 El proceso productivo pasa por varias fases con funciones específicas hasta dar con la venta y entrega del producto final, el desglose de la producción puede presentarse así:
        .row.mb-5
          .col-lg-5.mb-4.mb-lg-0
            figure(data-aos="slide-right")
              img(src='@/assets/curso/img14.png', style="width: 450px").m-auto
          .col-lg-7.mb-4.mb-lg-0
            LineaTiempoD.color-primario
              .row(numero="1" titulo="Etapa analítica o de acopio")
                .col-12
                  .row.align-items-center.mt-4
                    .col-auto
                      figure
                        img(src='@/assets/curso/img12.svg', style="width: 100px").m-auto
                    .col
                      p.mb-0 En esta fase se da inicio al ciclo productivo, y como su nombre lo indica, se caracteriza porque la organización busca conseguir la materia prima necesaria para cumplir con las metas de producción incurriendo en la menor cantidad de costos. La búsqueda de proveedores se centra en conseguir la mejor tarifa sin sacrificar calidad o cumplimiento.
              .row(numero="2" titulo="Etapa de síntesis o producción")
                .col-12
                  .row.align-items-center.mt-4
                    .col-auto
                      figure
                        img(src='@/assets/curso/img13.svg', style="width: 120px").m-auto
                    .col
                      p.mb-0 Inicia el proceso de transformación de las materias primas en un nuevo producto, se involucran elementos del costo como la mano de obra y otros costos indirectos de fabricación. De manera paralela se establecen los procedimientos de supervisión y control, que buscan garantizar la calidad de los bienes producidos o servicios prestados y aportar información de utilidad para proponer las acciones de mejora a futuro.
              .row(numero="3" titulo="Etapa de acondicionamiento o procesamiento")
                .col-12
                  .row.align-items-center.mt-4
                    .col-auto
                      figure
                        img(src='@/assets/curso/img14.svg', style="width: 120px").m-auto
                    .col
                      p.mb-0 Finalmente, el producto recibe las modificaciones y adecuaciones necesarias para satisfacer la demanda de los clientes. Esto incluye costos de embalaje o presentación, almacenamiento, transporte y cualquier otro gasto asociado con  la entrega de los bienes o servicios.
    .row.bg-color7
      .col-12.px-5.pt-4
        .row.justify-content-center
          .col-11.bg-color8
            p.mb-0 #[b.text-white Para ilustrar la información anterior, se presenta la siguiente figura 4 sobre el proceso de producción de la leche en una granja pecuaria:]
        .row.justify-content-center(data-aos="slide-up")
          .col-12
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 4.] Etapas en la producción de leche.
          .col-7.col-md-6.col-lg-4.p-4.d-flex
            .row
              .col-12.p-4.bg-color9.shadow
                figure
                  img(src='@/assets/curso/img15.png', style="width: 160px; margin-left: 40%")
                p #[b Acopio]
                ul.lista-ul
                  li 
                    i.fas.fa-caret-right(style="color: #78B62E")
                    | Alistamiento de las vacas
                  li 
                    i.fas.fa-caret-right(style="color: #78B62E")
                    | Inspección de su condición
                  li 
                    i.fas.fa-caret-right(style="color: #78B62E")
                    | Preparación de maquinaria de extracción
          .col-7.col-md-6.col-lg-4.p-4.d-flex
            .row
              .col-12.p-4.bg-color9.shadow
                figure
                  img(src='@/assets/curso/img16.png', style="width: 160px; margin-left: 40%")
                p #[b Producción]
                ul.lista-ul
                  li 
                    i.fas.fa-caret-right(style="color: #78B62E")
                    | Ordeño
                  li 
                    i.fas.fa-caret-right(style="color: #78B62E")
                    | Filtro de impurezas
                  li 
                    i.fas.fa-caret-right(style="color: #78B62E")
                    | Almacenamiento en contenedores
                  li 
                    i.fas.fa-caret-right(style="color: #78B62E")
                    | Análisis físico-químicos
                  li 
                    i.fas.fa-caret-right(style="color: #78B62E")
                    | Pasteurización
          .col-7.col-md-6.col-lg-4.p-4.d-flex
            .row
              .col-12.p-4.bg-color9.shadow
                figure
                  img(src='@/assets/curso/img17.png', style="width: 160px; margin-left: 40%")
                p #[b Acondicionamiento]
                ul.lista-ul
                  li 
                    i.fas.fa-caret-right(style="color: #78B62E")
                    | Envasado
                  li 
                    i.fas.fa-caret-right(style="color: #78B62E")
                    | Embalaje
                  li 
                    i.fas.fa-caret-right(style="color: #78B62E")
                    | Etiquetado e identificación del producto
                  li 
                    i.fas.fa-caret-right(style="color: #78B62E")
                    | Transporte y distribución
        separador.mb-5
    .row.bg-color4
      .col-12.px-5
        #t_2_2
        .titulo-segundo.color-secundario
          h2 2.2 Producto
        .row.mb-5
          .col-lg-4
            figure(data-aos="slide-right")
              img(src='@/assets/curso/img18.png', style="width: 450px").m-auto
          .col-lg-8
            .row.mb-4.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/img1.svg', style="width: 60px").m-auto
              .col
                p.mb-0 Un producto es el resultado del ciclo productivo previamente explicado, que busca satisfacer una o varias necesidades identificadas. Funciona como un eje central del objeto social de una compañía, puesto que es el medio para obtener una rentabilidad, generando así, un mayor valor en el tiempo.
            .row.mb-4
              .col-12.p-4.bg-color10
                p.mb-3#menu1 Los productos son puestos a disposición de la demanda en un mercado determinado, los potenciales compradores tendrán la posibilidad de elegir entre este y las demás alternativas ofertadas por la competencia y elegirán en función de sus preferencias o condiciones personales. Hacer atractivo un producto requiere contemplar una gran cantidad de variables como lo son su calidad, el beneficio que ofrecen respecto a su precio, su facilidad de uso, entre otros.
              figure
                img(src='@/assets/curso/img4.png', style="width: 120px").m-auto.img-position1
            .row.justify-content-evenly
              .col-5.col-lg-5.mb-4.mb-lg-0
                a(href="#1A")
                  figure.efect1
                    img(src="@/assets/curso/img16.svg", style="width:400px").m-auto
              .col-5.col-lg-5.mb-4.mb-lg-0
                a(href="#2A")
                  figure.efect1
                    img(src="@/assets/curso/img17.svg", style="width:400px").m-auto
        hr
        #1A
        br
        br
        .row.mb-5.align-items-center.justify-content-between
          .col-4
            h3.mb-0.text-deco1 #[u Clasificación]
          .col-2
            a(href="#menu1")
              figure.efect1
                img(src="@/assets/curso/img18.svg", style="width:50px").m-auto
        p.mb-5 Existen diversos criterios y sistemas para clasificar los productos, sin embargo, se propone la siguiente distribución en función de tres de las características de más fácil identificación en cualquier tipo de bien o servicio:
        .row.justify-content-center
          .col-lg-10
            ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/img19.svg', alt='Texto que describa la imagen')
              .tarjeta.color-acento-botones.shadow.p-3(x="3%" y="31.5%" numero="")
                .h5.mb-2.text-deco2 Productos de consumo
                p.mb-0.text-deco3 Se destinan al uso personal, por lo que no se espera sean utilizados en procesos productivos posteriores de tipo comercial, se subdividen en categorías.
              .tarjeta.color-acento-botones.shadow.p-3(x="3%" y="48.5%" numero="")
                .h5.mb-2.text-deco2 De conveniencia
                p.mb-0.text-deco3 Se caracterizan por tener precios económicos, por lo que adquirirlos no suele representar un gran esfuerzo para el comprador. Ejemplo de este tipo de productos son las golosinas, frutas, leche, hojas de papel o lapiceros.
              .tarjeta.color-acento-botones.shadow.p-3(x="3%" y="63.4%" numero="")
                .h5.mb-2.text-deco2 De comparación
                p.mb-0.text-deco3 Son los productos que son sujetos a comparación con otros similares, antes de ser comprados por el cliente. Usualmente se evalúa la calidad, precio, diseño, marca, por lo que puede implicar que se visiten varios establecimientos previo a la compra. En este rubro pueden incluirse bienes como vehículos, computadoras o celulares.
              .tarjeta.color-acento-botones.shadow.p-3(x="3%" y="78.2%" numero="")
                .h5.mb-2.text-deco2 De especialidad
                p.mb-0.text-deco3 Son todos los productos que tienen el mercado objetivo muy estrecho y su obtención obedece a casos muy especiales en los que pocas empresas se encuentran, es normal encontrar esta categoría en empresas tecnológicas con casos como procesadores o repuestos de máquinas especiales para ciertos procesos.
              .tarjeta.color-acento-botones.shadow.p-3(x="3%" y="93.5%" numero="")
                .h5.mb-2.text-deco2 No buscados
                p.mb-0.text-deco3 Estos bienes suelen ser desconocidos por el comprador, o bien, aún conociéndolos, no son de su interés. Usualmente son productos innovadores que no se han masificado en un mercado concreto, como aspiradoras robóticas o detectores de humo, o productos de baja demanda como enciclopedias o seguros de vida.
              .tarjeta.color-acento-botones.shadow.p-3(x="49.5%" y="31.6%" numero="")
                .h5.mb-2.text-deco2 Productos de negocios
                p.mb-0.text-deco3 Son bienes destinados a continuar en procesos productivos o reventa, esto implica que son comprados por productores o distribuidores antes de llegar al consumidor final. Se clasifican en 7 categorías.
              .tarjeta.color-acento-botones.shadow.p-3(x="28.8%" y="40.5%" numero="")
                .h5.mb-2.text-deco2 Equipo Mayor
                p.mb-0.text-deco3 Comprende bienes de gran escala física, como maquinaria pesada, edificios o generadores eléctricos. Tienen una incidencia directa sobre la operación de los negocios dado su alto costo y utilidad.
              .tarjeta.color-acento-botones.shadow.p-3(x="68.8%" y="49%" numero="")
                .h5.mb-2.text-deco2 Equipo accesorio
                p.mb-0.text-deco3 Incluye bienes de menor tamaño como las herramientas o equipos portátiles, no hacen parte de los productos terminados, pero aportan en su producción. Ejemplo de estos son el mobiliario, las herramientas o los computadores. Su periodo de vida suele ubicarse en un intermedio entre los inventarios y el equipo mayor.
              .tarjeta.color-acento-botones.shadow.p-3(x="29%" y="55.8%" numero="")
                .h5.mb-2.text-deco2 Materias primas
                p.mb-0.text-deco3 Son los insumos naturales utilizados de forma directa para ser transformados en un nuevo producto. Por ejemplo, la leche para la producción de queso, o la carne para la elaboración de embutidos.
              .tarjeta.color-acento-botones.shadow.p-3(x="68.8%" y="63.8%" numero="")
                .h5.mb-2.text-deco2 Componentes
                p.mb-0.text-deco3 Corresponden a los bienes terminados y listos para ensamblarse en la producción de un producto de mayores dimensiones. Por ejemplo, los chips para una computadora o las bujías y llantas para un automóvil.
              .tarjeta.color-acento-botones.shadow.p-3(x="28.6%" y="70.4%" numero="")
                .h5.mb-2.text-deco2 Materiales procesados
                p.mb-0.text-deco3 También son utilizados para ser transformados en un producto, pero a diferencia de la materia prima, han sido objeto de procesamiento antes de incorporarse al nuevo ciclo productivo. Como ejemplo de estos, se puede hacer mención a las láminas de acero o a los componentes químicos, así como la harina o el azúcar utilizados para producir pan.
              .tarjeta.color-acento-botones.shadow.p-3(x="68.8%" y="78%" numero="")
                .h5.mb-2.text-deco2 Suministros de operación
                p.mb-0.text-deco3 Son utilizados en la operación y producción de los bienes, pero no se incorporan al mismo; usualmente son de bajo costo y tienen una duración corta. Ejemplo de estos son consumibles como la gasolina, lubricantes, pintura o tornillos.
              .tarjeta.color-acento-botones.shadow.p-3(x="28.8%" y="85.6%" numero="")
                .h5.mb-2.text-deco2 Servicios de negocios
                p.mb-0.text-deco3 Incluye aquellos servicios necesarios y derivados de la operación, su naturaleza es intangible pero su aporte es tan necesario como el de los demás productos. En esta categoría se incluyen servicios de mantenimiento y reparación, asesorías financieras o de publicidad.
              .tarjeta.color-acento-botones.shadow.p-3(x="81.9%" y="31.7%" numero="")
                .h5.mb-2.text-deco2 Productos según su duración y tangibilidad
                p.mb-0.text-deco3 El criterio para clasificar los productos es la cantidad de usos que se espera obtener de ellos, el tiempo que durará siendo útil y si es tangible o intangible.
              .tarjeta.color-acento-botones.shadow.p-3(x="81.9%" y="48.4%" numero="")
                .h5.mb-2.text-deco2 No duraderos
                p.mb-0.text-deco3 Son aquellos bienes tangibles de un solo uso o de consumo rápido. Por ejemplo, alimentos como las bebidas gaseosas o las frituras, productos de aseo como desodorantes o bienes no reutilizables como el papel o la cartulina.
              .tarjeta.color-acento-botones.shadow.p-3(x="81.9%" y="63.7%" numero="")
                .h5.mb-2.text-deco2 Duraderos
                p.mb-0.text-deco3 En este rubro se incluyen bienes que pueden ser reutilizados un número significativo de veces. Por ejemplo, los electrodomésticos, las herramientas de ferretería o las prendas de vestir.
              .tarjeta.color-acento-botones.shadow.p-3(x="81.9%" y="78.6%" numero="")
                .h5.mb-2.text-deco2 Servicios
                p.mb-0.text-deco3 A diferencia de las dos subcategorías anteriores, estos productos son intangibles, es decir, carecen de materia, por lo que no pueden tocarse. Debido a la dificultad para ser medidos, suelen requerir de una mayor credibilidad para ser ofertados. Productos que pueden cumplir con estos criterios son los servicios de reparación, los cortes de cabello o el lavado de ropa.
    hr
    #2A
    br
    br
    .row.mb-5.align-items-center.justify-content-between
      .col-4
        h3.mb-0.text-deco1 #[u Fichas técnicas]
      .col-2
        a(href="#menu1")
          figure.efect1
            img(src="@/assets/curso/img18.svg", style="width:50px").m-auto
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p.mb-4 La elaboración de los productos suele constituirse como una actividad altamente repetitiva, en la que se siguen una serie de lineamientos que propenden por la estandarización del proceso. #[b.text-deco1 Esto se debe a que la uniformidad en las líneas de producción permiten la fabricación en serie de bienes con un nivel de calidad muy semejante entre ellos], lo que garantiza satisfacción en los clientes, mientras que de forma simultánea permiten prever los requerimientos de insumos necesarios para mantener la operación durante franjas de tiempo determinadas.
        .row
          .col-12.p-4.bg-color2
            p #[b.text-deco1 La ficha técnica se erige como un documento identificador de la composición de cualquier producto que ha requerido de algún tipo de proceso para su elaboración]. Usualmente incluye la descripción técnica y objetiva de los insumos utilizados en la producción del producto, por lo que es una herramienta de especial utilidad en la obtención de certificaciones de calidad.
      .col-lg-5
        figure
          img(src='@/assets/curso/img19.png', style="width: 550px").m-auto
    .row.mb-5
      .col-12.bg-color3.px-5.shadow.rounded(data-aos="slide-left")
        .row.align-items-center.py-4
          .col-12.col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/img20.png', style="width: 200px").m-auto
          .col-12.col-md-7
            .row.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/img1.svg', style="width: 50px").m-auto
              .col
                p.mt-3 #[b Su objetivo principal es facilitar la estandarización de los procesos en la empresa productora], puesto que le entrega a los operarios la información necesaria para la elaboración de cada producto. Además, facilita labores de acompañamiento de personal ajeno a la producción como los auditores.
      figure.img-position2(data-aos="slide-left")
        img(src='@/assets/curso/img4.png', style="width: 120px").m-auto
    p.mb-5 Su uso resulta bastante común en la industria alimenticia, ya que le permite al consumidor un acercamiento a los ingredientes utilizados para la elaboración del alimento procesado que piensa adquirir.  Esto sin contar con los requerimientos normativos, que en muchas ocasiones exigen esta información detallada para aprobar su comercialización.
    .row.bg-color11
      .col-12.px-5.pt-5
        .row.justify-content-center
          .col-12.mb-5
            p.mb-0 #[b Si se desea diseñar una ficha técnica para propósitos de calidad de producción se recomienda que incluya por lo menos los siguientes elementos:]
          .col-lg-10
            .tarjeta.tarjeta--azul.p-5
              .row.justify-content-center
                .col-10
              SlyderA
                .row.align-items-center.justify-content-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/img21.svg', style="width: 100px").m-auto
                  .col-8
                    p #[b Nombre del producto]
                    p.mb-0 Debe diferenciarse de cualquier otro producto elaborado en la compañía, lo que implica hacer precisiones respecto a tamaños o presentaciones, por ejemplo, diferenciar entre versiones líquidas o sólidas.
                div
                  .row.align-items-center.justify-content-center
                    .col-auto
                      figure
                        img(src='@/assets/curso/img22.svg', style="width: 100px").m-auto
                    .col-8
                      p #[b Tiempo de preparación]
                      p.mb-0 Si requieren someterse a procesos de cocción o enfriamiento, se puede especificar el tiempo que deben permanecer en cada etapa. Por ejemplo, la pasteurización de la leche implica someterla a bajas y altas temperaturas por periodos de tiempo determinados.
                div
                  .row.align-items-center.justify-content-center
                    .col-auto
                      figure
                        img(src='@/assets/curso/img23.svg', style="width: 100px").m-auto
                    .col-8
                      p #[b Mano de obra requerida]
                      p.mb-0 Puede detallarse por cargos operativos y suele presentarse en horas de trabajo. Esto significa, el tiempo que un operario le destina para aplicar todos los procedimientos requeridos a cada unidad producida.
                div
                  .row.align-items-center.justify-content-center
                    .col-auto
                      figure
                        img(src='@/assets/curso/img24.svg', style="width: 100px").m-auto
                    .col-8
                      p #[b Equipamiento usado]
                      p.mb-0 Algunos productos demandan el uso de una maquinaria específica. Es importante dejar esto en claro para evitar reprocesos, retrasos en las líneas de producción o la utilización errónea de maquinaria que altere la disposición del producto.
                div
                  .row.align-items-center.justify-content-center
                    .col-auto
                      figure
                        img(src='@/assets/curso/img25.svg', style="width: 100px").m-auto
                    .col-8
                      p #[b Tamaño de porción]
                      p.mb-0 Según la presentación del producto, puede expresarse en litros, kilos, libras o gramos, entre otros.
                div
                  .row.align-items-center.justify-content-center
                    .col-auto
                      figure
                        img(src='@/assets/curso/img26.svg', style="width: 100px").m-auto
                    .col-8
                      p #[b Imagen del producto]
                      p.mb-0 Para apoyar la identificación del bien, pueden incluirse imágenes orientativas de la presentación del producto, el logo o información relevante adicional.
                div
                  .row.align-items-center.justify-content-center
                    .col-auto
                      figure
                        img(src='@/assets/curso/img27.svg', style="width: 100px").m-auto
                    .col-8
                      p #[b Instrucciones especiales]
                      p.mb-0 Ciertos productos pueden requerir tratamientos especiales, por ejemplo si son delicados o perecederos, o si requieren de ciertas condiciones ambientales para su conservación. Este aspecto toma vital importancia cuando los productos abandonan la fábrica de producción y son manipulados por otros agentes del canal de distribución que carecen de los conocimientos técnicos.
    separador.mb-5
    #t_2_3
    .titulo-segundo.color-secundario
      h2 2.3 Plan de mercadeo
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/img21.png', style="width: 550px").m-auto
      .col-lg-7
        .row.mb-4
          .col-12.p-4.bg-color12
            .row.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/img29.svg', style="width: 8px").m-auto
              .col
                p.mb-0 #[b El plan de mercadeo es un documento en el que se plasman los objetivos que espera alcanzar la empresa en materia comercial, así como las estrategias a implementar para hacerlo posible junto con el costo para ejecutarlas]. Su utilidad radica en la correcta #[b.text-deco1 planeación y destinación de recursos con suficiente anticipación] para garantizar que los flujos de efectivo se destinen de forma correcta y para que los esfuerzos se encaminen hacia una meta clara y definida.
        p Comúnmente, #[b el plan de mercadeo se formula para ser ejecutado en periodos de un año, donde al final del ejercicio, se hará una evaluación en la que se compare lo proyectado con lo efectivamente alcanzado]. Para posibilitar esto último, deben cuantificarse todos los elementos que aporten a hacer un juicio por parte de los evaluadores. Lo anterior conlleva #[b canales de comunicación efectivos y oportunos con el personal del área comercial, los proveedores y los clientes], así como con todos los demás integrantes de la cadena de distribución del producto.
    h3.mb-5.text-deco1 #[u Elementos]
    p.mb-5 Como se ha mencionado, el plan de mercadeo es un documento y por lo tanto su elaboración y formato está sometido a juicio del personal estratégico que lo diseñe. Sin embargo, es recomendable que dentro de su estructura se incluyan por lo menos tres grandes secciones así:
    .row.align-items-center
      .col-lg-6
        p.mb-5.pt-5 #[b.text-white.text-deco4 #[i Marketing] analítico]
        p.mb-4 #[b.text-deco1 En esta primera sección se debe hacer un análisis de la empresa, el mercado objetivo y la competencia]. La información recolectada en esta etapa resulta de vital importancia para las medidas que se tomen posteriormente, puesto que #[b las estrategias deben atacar aquellas amenazas o debilidades identificadas].
        .row
          .col-12.p-4.bg-color10
            p.mb-0 Es recomendable que el estudio #[b aborde los factores internos y externos de la empresa, lo que implica evaluar al personal de ventas, la reputación del producto, los precios de los bienes sustitutos, la demografía de la población, y cualquier otro factor que pueda inferir en los resultados comerciales]. Es recomendable #[b.text-deco1 aplicar una matriz FODA] que permita maniobrar con las fortalezas, oportunidades, debilidades y amenazas de forma efectiva.
          figure
              img(src='@/assets/curso/img4.png', style="width: 120px").m-auto.img-position1
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="slide-left")
          img(src='@/assets/curso/img22.png', style="width: 350px").m-auto
    p.mb-5 La figura 5 aborda los cuatro #[b componentes principales del #[i marketing] analítico y algunas de las actividades que pueden tenerse en cuenta para documentar el plan de mercadeo].
    .row.mb-5.justify-content-center
      .col-lg-10(data-aos="slide-up")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 5.] Componentes del #[i marketing] analítico
        figure
          img(src='@/assets/curso/img30.svg', style="width: 1000px").m-auto
          figcaption.mt-3 Nota. Sena (2021).
    .row.bg-color6
      .col-12.px-5
        p.mb-5.pt-5 #[b.text-white.text-deco4 #[i Marketing] estratégico]
        p Una vez se ha recopilado toda la información relevante para la gestión comercial, se procede a la #[b.text-deco1 postulación de metas que puedan ser alcanzadas con los recursos disponibles]. A partir de ello, #[b se plantean las estrategias que representen una mayor relación costo–beneficio y se estructuran incluyendo los objetivos específicos y las tareas a desarrollar].
        .row.mb-5.align-items-center
          .col-lg-4.mb-5.mb-lg-0
            p.mb-4 #[b.text-deco1 En primer lugar, se debe estimar la demanda a partir de la información recolectada], por ejemplo si se espera tener una participación del 10 % del mercado y en la población abordada se venden 1.000 unidades de productos similares, la meta de ventas debe ser de 100 unidades en el periodo de tiempo definido. #[b A partir de ello se define la fuerza de ventas que será necesaria y la implementación de medidas adicionales asociadas a cobertura, publicidad, distribución, entre otros].
            figure
              img(src='@/assets/curso/img8.svg', style="width: 50px; margin-left: 80%")
          .col-lg-4
            figure(data-aos="slide-up")
              img(src='@/assets/curso/img23.png', style="width: 450px;").m-auto
          .col-lg-4
            figure.mb-4
              img(src='@/assets/curso/img8.svg', style="width: 50px;")
            p.mb-4 Muchas interpretaciones pueden derivarse del análisis anterior, definir el mercado actual y el mercado meta traza un camino a seguir y un objetivo claro, pero #[b las estrategias deben ser lo suficientemente precisas para contemplar aspectos como la segmentación del mercado, las variaciones en los precios, y las ventajas competitivas con las que se espera contar para favorecer la elección del producto propio sobre el producto de la competencia].
        p.mb-5.pt-5 #[b.text-white.text-deco4 #[i Marketing] operativo]
        p.mb-5 #[b En esta fase se materializan las estrategias propuestas, puesto que se finaliza el diseño y se implementan las tareas definidas]. Previo y durante la etapa de ejecución se debe llevar un control de las expensas necesarias para actualizar el control presupuestal y tener claridad sobre la disponibilidad del efectivo de manera permanente.
        .row.mb-5
          .col-12.bg-color3.px-5.shadow.rounded(data-aos="slide-right")
            .row.align-items-center.py-4.py-md-0
              .col-12.col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/img24.png', style="width: 200px").m-auto
              .col-12.col-md-7
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/img1.svg', style="width: 50px").m-auto
                  .col
                    p.m-0 #[b El #[i marketing] operativo comprende 4 pasos] en los que se hace uso de toda la información recolectada en el #[i marketing] analítico y estratégico:
    .row.bg-color13.mb-5
      .col-12.px-5
        SlyderB.mb-2(:datos="datosSlyder")
    h3.mb-5.text-deco1 #[u Importancia en el ciclo productivo]
    p.mb-5 Generalmente, #[b la demanda de los productos obedece a muchos factores sobre los cuales la empresa no siempre tiene control; condiciones económicas, políticas públicas y la competencia, son solo algunos de ellos]. Debido a esto, lo más habitual #[b.text-deco1 a la hora de diseñar un ciclo productivo, es que el plan de mercadeo haga de punto de partida en el ciclo productivo y posteriormente se debe tener en cuenta lo siguiente:]
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/YHP2t8J54K8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador.mb-5
    #t_2_4
    .titulo-segundo.color-secundario
      h2 2.4 Elementos del costo
    .row
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="slide-right")
          img(src='@/assets/curso/img29.png', style="width: 450px").m-auto
      .col-lg-8
        .row.mb-4.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/img1.svg', style="width: 60px").m-auto
          .col
            p.mb-0 #[b El costo de producción es el conjunto de inversiones efectuadas por la empresa y de las cuales se espera una retribución o beneficio en el corto plazo]; la mecánica más habitual consiste en la compra de insumos para ser sometidos a transformación, seguidos de un almacenamiento en forma de inventario que finaliza con la venta al cliente. Por su naturaleza, #[b.text-deco1 se encuentran estrechamente relacionados con el objeto social de cualquier empresa y son un elemento protagónico en la toma de decisiones estratégicas].
        .row.mb-4
          .col-12.p-4.bg-color10
            p.mb-3 #[b Los costos si bien implican erogaciones de capital, crean una expectativa de recuperación de los fondos invertidos a través de la venta de los productos transformados], mientras que los gastos suelen funcionar a la inversa, su pago es la consecuencia de un beneficio pasado o presente, por lo que tras la salida de los recursos, no se espera ningún tipo de contraprestación; ejemplo de ello, es #[b.text-deco1 la comisión que reciben los vendedores por una buena gestión comercial en el mes anterior.]
          figure
            img(src='@/assets/curso/img4.png', style="width: 120px").m-auto.img-position1
    p.mb-5 #[b Los costos pueden segmentarse en tres tipos de insumos con sus propias características:] la materia prima, la mano de obra y otros costos indirectos de fabricación. A continuación se presenta una conceptualización más detallada de cada uno de ellos:
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Materia prima")
        .col-12
          .row.mb-4.mb-lg-0
            .col-lg-7
              p.mb-4 Está compuesta por todos los materiales utilizados en la elaboración del producto. Son insumos tangibles y susceptibles a transformación durante el ciclo de producción; pueden ser clasificados como directos o indirectos según la relevancia y relación que tengan con el producto terminado.
              p #[b La materia prima directa se clasifica como tal si da cumplimiento a los dos siguientes conceptos: materialidad e importancia relativa]. El primero se asocia al costo de la inversión o su significancia en la elaboración, es decir, qué tanto valor económico aporta al costo total. Como ejemplo de lo anterior, se considera materia prima directa la tela en la confección de los pantalones, donde resulta evidente que no solo representa uno de los insumos que mayor valor económico atribuyen a la producción, sino también aquel que tiene mayor participación en la composición del producto terminado.
              .row
                .col-12.p-4.bg-color2
                  p #[b.text-deco1 La importancia relativa se relaciona con lo indispensable de un material en el proceso de producción.] Así, continuando con el ejemplo anterior, los botones del pantalón también pueden ser considerados materia prima directa, pues si bien, no son tan costosos, son necesarios para dar por terminada su producción.
                figure
                  img(src='@/assets/curso/img4.png', style="width: 120px").m-auto.img-position1
            .col-lg-5
              figure
                img(src='@/assets/curso/img30.png', style="width: 450px").m-auto
          p #[b En palabras de Guarnizo y Cárdenas (2015) la materia prima no solo se compone por el valor de compra de los insumos, sino también, por todas aquellas erogaciones que se asocian a su adquisición y disposición]. Por ejemplo, los costos de embalaje, el bodegaje, las pérdidas, son algunos elementos que encajarían dentro de la definición de materia prima.
          p.mb-5 #[b En la siguiente figura 9 se presentan a modo orientativo algunos de los elementos que constituyen el costo de la materia prima], separadas en función de la fase en la que esta se encuentra dentro de la producción:
          .row.justify-content-center
            .col-lg-8
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 9.] Costos asociados a la materia prima
              figure
                img(src='@/assets/curso/img32.svg', style="width: 800px").m-auto
                figcaption.mt-3 Nota. Adaptado de Guarnizo y Cárdenas (2015).
      div(titulo="Mano de obra")
        .row
          .col-12
            p #[b La mano de obra se constituye como el segundo elemento de los costos de producción], al cual se asigna el valor del trabajo realizado por las personas que se involucran con la producción y transformación de los insumos. Al igual que la materia prima, puede clasificarse como directa o indirecta.
          .col-12
            .row
              .col-lg-5.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/img31.png', style="width: 550px").m-auto
              .col-lg-7
                .row.mb-4
                  .col-12.p-4.bg-color12
                    .row.align-items-center
                      .col-auto
                        figure
                          img(src='@/assets/curso/img29.svg', style="width: 8px").m-auto
                      .col
                        p.mb-0 #[b En principio, aquellos funcionarios cuya labor es trabajar transformando los insumos, son considerados mano de obra directa, por ejemplo, el operario encargado de ordeñar las vacas en una granja pecuaria]. Por otro lado, la mano de obra indirecta incluye la labor desempeñada por trabajadores de apoyo o dirección del área, pero sin participar directamente sobre la producción. Ejemplo de esto son los vigilantes o supervisores de las áreas donde se encuentra el área de producción.
                p #[b.text-deco1 Respecto a los elementos que componen el costo de la mano de obra, se deben tener presentes todas las remuneraciones asociadas a la relación con el trabajador, esto incluye las prestaciones sociales, la seguridad social, las bonificaciones y cualquier otra erogación que se dé como retribución al trabajo prestado]. Otros costos que podrían incluirse si la administración así lo considera son gastos accesorios como los de reclutamiento, auxilios, capacitaciones, entre otros.
      div(titulo="Costos indirectos de fabricación")
        .row
          .col-12
            .row
              .col-lg-7
                p.mb-4 #[span.text-deco1 #[b Agrupan todas las erogaciones indirectas a la producción, incluye la materia prima y mano de obra que se catalogaron previamente como indirectas]], y adicionan otros conceptos que no pueden atribuirse o destinarse de forma específica a cada unidad producida.
                .row
                  .col-12.p-4.bg-color2
                    p #[b Esta categoría absorbe todo valor residual que no cumpla con la clasificación de insumo directo, por lo que de su precisión en el cálculo, depende la correcta estimación de los costos de producción]. Ejemplo de otros rubros que encajan con esta clasificación son los mantenimientos hechos a las maquinarias, el combustible que estas requieren para producir o el arrendamiento del inmueble donde se ejecuta la producción.
                  figure
                    img(src='@/assets/curso/img4.png', style="width: 120px").m-auto.img-position1
              .col-lg-5
                figure
                  img(src='@/assets/curso/img32.png', style="width: 450px").m-auto
    separador.mb-5
    #t_2_5
    .titulo-segundo.color-secundario
      h2 2.5 Clasificación
    p.mb-5 Una vez se tiene claridad del concepto de costo de producción y los elementos que lo integran, se pueden clasificar según diversos criterios como los siguientes:
    .row.justify-content-center
      .col-lg-8
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/img33.svg', alt='Texto que describa la imagen')
          .tarjeta.color-acento-botones.shadow.p-3(x="3.5%" y="45%" numero="")
            .h5.mb-2.text-deco2 Según su relación con la producción
            p.mb-0.text-deco3 Bajo este modelo, los costos se discriminan en variables, que son aquellos que tienen una relación directa con las unidades producidas, por ejemplo, a mayor cantidad de camisas a producir, mayor la cantidad de tela a utilizar. Como contraparte están los costos fijos, que no se ven afectados por la producción, aquí podemos encontrarnos rubros como el salario de las aseadoras de planta de producción.
          .tarjeta.color-acento-botones.shadow.p-3(x="38.6%" y="45.5%" numero="")
            .h5.mb-2.text-deco2 Según su relación con el producto
            p.mb-0.text-deco3 La regla aplicable a este sistema nos lleva a determinar si existe o no una relación directa entre el insumo y la generación del producto terminado. Se consideran directos los costos asignables a un producto en específico, como lo sería la materia prima objeto de transformación, o el salario pagado al operario que trabaja en una línea de producción en concreto. Los costos indirectos, por su parte, corresponden a aquellos que, aunque tienen relación con la producción, son comunes a varios tipos de productos o cuesta asignarlos de forma directa a uno en específico.
          .tarjeta.color-acento-botones.shadow.p-3(x="78%" y="45.5%" numero="")
            .h5.mb-2.text-deco2 Según su uso en planeación
            p.mb-0.text-deco3 En primer lugar están los costos estimados, que surgen de metodologías de análisis y observación. No son exactos y su margen de error está condicionado al nivel de detalle en la que se haya efectuado los procedimientos de cálculos. Son aplicables a los insumos que no son materiales en el proceso de elaboración. En segundo lugar se ubican los costos estándar, utilizados en empresas con volúmenes de producción significativos y bajo un sistema altamente repetitivo. Analizan la información histórica disponible, y anticipan el costo de producción a partir de ello, su margen de error suele ser muy bajo dado que trabajan con variables ya conocidas.
    separador.mb-5
    #t_2_6
    .titulo-segundo.color-secundario
      h2 2.6 Cálculo
    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        p Si bien previamente se presentó una conceptualización de los elementos del costo de producción, #[b determinar su valor es un proceso que demanda la aplicación de diversas metodologías para cada uno de ellos]. A continuación se presentan los sistemas de más fácil accesibilidad para determinar el valor de cada uno de los elementos del costo.
        h3.text-deco1 #[u Materia prima]
        p #[b En este rubro se incluyen todos los insumos materiales para ser utilizados en la producción. En el ámbito financiero, este tipo de elementos se clasifican como inventarios, y los sistemas utilizados para su valoración se encuentran regulados en la normativa colombiana]. En la actualidad, se puede hacer uso de los dos siguientes sistemas:
      .col-lg-6
        figure(data-aos="slide-left")
          img(src='@/assets/curso/img33.png', style="width: 450px").m-auto
    .row.mb-5.bg-color7
      .col-12.px-5.pt-5
        .row
          .col-lg-4
            figure(data-aos="slide-right")
              img(src='@/assets/curso/img34.png', style="width: 450px").m-auto
          .col-lg-8
            LineaTiempoD.color-primario
              .row(numero="1" titulo="Sistema de inventarios periódico")
                .col-12
                  p.mb-5 Bajo este modelo, #[b el costo de la materia prima se determina a una fecha de corte, a través del conteo físico de las unidades que no han sido utilizadas o vendidas, es decir, el inventario final]. La fórmula a utilizar es conocida como el juego de inventarios y se presenta así:
                  .row.mb-5.justify-content-center
                    .col-6.p-4.bg-color14
                      p.mb-0 #[b Compra de materias primas]
                      p.mb-0 #[b (-) Devoluciones y descuentos]
                      p.mb-0 #[b Compras Netas]
                      p.mb-0 #[b (-) Inventario Final]
                      p.mb-0 #[b Materias primas utilizadas]
                  .row.mb-5.justify-content-center
                    .col-11.p-4.bg-color15
                      p.mb-0 #[b Es un sistema de fácil y económica aplicación, puesto que el esfuerzo recae sobre un trabajo manual y físico], en la actualidad ha ido perdiendo relevancia debido a las facilidades tecnológicas que permiten hacer uso de herramientas más precisas. #[b.text-deco1 El principal problema que surge de este modelo es que para estimar el costo es necesario realizar todo el proceso de verificación de existencias], lo que implica que no se puede tener el dato exacto de manera inmediata y de forma permanente.
                  .row.align-items-center
                    .col-auto
                      figure
                        img(src='@/assets/curso/img34.svg', style="width: 150px").m-auto
                    .col
                      p.mb-0 Por ejemplo, si una empresa hace compras por $ 100 y a final del año le queda un saldo de materiales por valor de $ 20, se deduce que el costo de los insumos fue de $ 80, bien sea porque hayan sido utilizados en la producción, o se hayan deteriorado o perdido. #[b Para calcular este costo fue necesario determinar el valor del inventario final, situación que demanda siempre un conteo físico, y por lo tanto, hace muy exigente la estimación del costo si se quiere conocer de manera frecuente.]
              .row(numero="2" titulo="Sistema de inventarios permanentes")
                .col-12
                  p.mb-5 Este modelo ofrece una medición más precisa de las materias primas, como su nombre lo indica, se tendrá claridad de la cifra en cualquier momento y por lo tanto, #[b la oportunidad de la información es mucho mayor a la de su contraparte. Las metodologías utilizadas son las siguientes]:
                  .tarjeta-avatar-b.mb-5
                    .tarjeta-avatar-b__img
                      img(src='@/assets/curso/img35.svg' alt='AvatarTop')
                    .tarjeta.bg-color16
                      .p-4
                        p #[b.text-deco1 Primeras en entrar, primeras en salir (PEPS)]
                        p Las unidades utilizadas en la producción serán dispuestas en el mismo orden en el que fueron ingresadas al inventario. Así, los saldos de materia prima siempre corresponderán a las últimas unidades compradas.
                  .tarjeta-avatar-b.mb-5
                    .tarjeta-avatar-b__img
                      img(src='@/assets/curso/img35.svg' alt='AvatarTop')
                    .tarjeta.bg-color16
                      .p-4
                        p #[b.text-deco1 Últimas en entrar, primeras en salir (UEPS)]
                        p Su mecánica es opuesta al anterior, puesto que la materia prima a utilizar será la última comprada, esto lleva a que los saldos del inventario final se compongan por la materia prima adquirida con mayor antigüedad, esto puede generar desfases en los precios y llevar a un sesgo en la interpretación de la información.
                  .tarjeta-avatar-b.mb-5
                    .tarjeta-avatar-b__img
                      img(src='@/assets/curso/img35.svg' alt='AvatarTop')
                    .tarjeta.bg-color16
                      .p-4
                        p #[b.text-deco1 Promedio ponderado]
                        p El sistema funciona afectando el costo de la materia prima en función de todas las compras realizadas en el tiempo. Esto significa que las variaciones de los precios ajustan el valor promedio de todas las existencias disponibles en el inventario.
                  .row.justify-content-center
                    .col-11.bg-color17
                      .p-4
                        p.mb-0 #[b En Colombia, la legislación tributaria solo permite el uso de los sistemas PEPS y promedio ponderado, dado que son los que gozan de mayor precisión a la hora de determinar el costo de los inventarios]. Cualquiera de los dos, hace uso de una herramienta conocida como kárdex, que consta de una hoja de trabajo en la que se computan las compras efectuadas en orden cronológico; de esta misma forma, se reconocen las salidas cuando se utilizan en el proceso de producción.
    p.mb-5 #[b.text-deco1 A continuación se presentan dos hojas de kárdex], una diligenciada mediante el sistema PEPS y la otra usando el modelo del promedio ponderado, para ilustrar mejor la situación se presenta por medio de un ejercicio práctico:
    .row.mb-5
      .col-12.bg-color3.px-5.shadow.rounded(data-aos="slide-left")
        .row.align-items-center.py-4.py-md-0
          .col-12.col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/img35.png', style="width: 200px").m-auto
          .col-12.col-md-7
            .row.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/img1.svg', style="width: 50px").m-auto
              .col
                p.m-0 Una empresa cuenta con 30 unidades de material a cierre de febrero, con un valor unitario de $ 10.000. El 3 de marzo compran 15 unidades a $ 13.000 y el 12 de marzo 25 unidades a $ 15.000. Posteriormente se efectúan dos pedidos para producción, la orden 11 por 20 unidades y la 12 por 18. Se determina el inventario final y el costo de la materia prima a través de los dos sistemas así, ver tablas 1 y 2:
      figure.img-position2(data-aos="slide-left")
        img(src='@/assets/curso/img4.png', style="width: 120px").m-auto
    .row.mb-5.justify-content-center
      .col-12.col-lg-11
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 1.] Hoja de kárdex bajo sistema PEPS
        .tabla-a.color-acento-botones
          table
            caption Nota. Sena (2021).
            thead
              tr
                th(rowspan="2")(style="background-color: #BADA95") Detalle
                th(rowspan="2")(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Valor unitario
                th(colspan="3")(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Entradas
                th(colspan="3")(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Salidas
                th(colspan="2")(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Saldo
              tr
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Cantidad
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Vr. Unit.
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Total
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Cantidad
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Vr. Unit.
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Total
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Cantidad
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Vr. Total
            tbody
              tr
                td(style="background-color: #F6F6F6") Inventario inicial
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 10.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 30
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 10.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 300.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 30
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 300.000
              tr
                td Compra 3 de marzo
                td(style="border-left: #AFAFAF 2px solid; border-left: #AFAFAF 2px solid") 13.000
                td(style="border-left: #AFAFAF 2px solid; border-left: #AFAFAF 2px solid") 15
                td(style="border-left: #AFAFAF 2px solid; border-left: #AFAFAF 2px solid") 13.000
                td(style="border-left: #AFAFAF 2px solid; border-left: #AFAFAF 2px solid") 195.000
                td(style="border-left: #AFAFAF 2px solid; border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid; border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid; border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid; border-left: #AFAFAF 2px solid") 45
                td(style="border-left: #AFAFAF 2px solid; border-left: #AFAFAF 2px solid") 495.000
              tr
                td(style="background-color: #F6F6F6") Compra 12 de marzo
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 15.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 25
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 15.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 375.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 70
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 870.000
              tr
                td(rowspan="3") Orden de producción 11 (20 unidades)
                td(style="border-left: #AFAFAF 2px solid") 10.000
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid") 20
                td(style="border-left: #AFAFAF 2px solid") 10.000
                td(style="border-left: #AFAFAF 2px solid") 200.000
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid") 670.000
              tr
                td(style="border-left: #AFAFAF 2px solid") 13.000
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid") 670.000
              tr
                td(style="border-left: #AFAFAF 2px solid") 15.000
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid") 670.000
              tr
                td(style="background-color: #F6F6F6")(rowspan="3") Orden de producción 12 (18 unidades)
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 10.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 10
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 10.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 100.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 570.000
              tr
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 13.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 8
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 13.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 104.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 466.000
              tr
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 15.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 466.000
    .row.mb-5.justify-content-center
      .col-12.col-lg-11
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 2.] Hoja de kárdex bajo sistema promedio ponderado
        .tabla-a.color-acento-botones
          table
            caption Nota. Sena (2021).
            thead
              tr
                th(rowspan="2")(style="background-color: #BADA95") Detalle
                th(rowspan="2")(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Valor unitario
                th(colspan="3")(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Entradas
                th(colspan="3")(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Salidas
                th(colspan="2")(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Saldo
              tr
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Cantidad
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Vr. Unit.
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Total
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Cantidad
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Vr. Unit.
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Total
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Cantidad
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Vr. Total
            tbody
              tr
                td(style="background-color: #F6F6F6") Inventario inicial
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 10.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 30
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 10.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 300.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 30
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 300.000
              tr
                td Compra 3 de marzo
                td(style="border-left: #AFAFAF 2px solid") 11.000
                td(style="border-left: #AFAFAF 2px solid") 15
                td(style="border-left: #AFAFAF 2px solid") 13.000
                td(style="border-left: #AFAFAF 2px solid") 195.000
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid") 45
                td(style="border-left: #AFAFAF 2px solid") 495.000
              tr
                td(style="background-color: #F6F6F6") Compra 12 de marzo
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 12.429
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 25
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 15.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 375.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 70
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 870.000
              tr
                td Orden de producción 11 (20 unidades)
                td(style="border-left: #AFAFAF 2px solid") 12.429
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid") 20
                td(style="border-left: #AFAFAF 2px solid") 12.429
                td(style="border-left: #AFAFAF 2px solid") 248.571
                td(style="border-left: #AFAFAF 2px solid") 50
                td(style="border-left: #AFAFAF 2px solid") 621.429
              tr
                td(style="background-color: #F6F6F6") Orden de producción 12 (18 unidades)
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 12.429
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 18
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 12.429
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 223.714
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 32
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 397.714
    p.mb-5 De la comparación de las dos hojas de kárdex se evidencian diferencias en la valoración, pese a que la situación práctica fue la misma. Si bien la totalidad de la materia prima adquirida es la misma, la asignación a las órdenes de producción varía, lo que también afecta el valor del inventario final. La elección del sistema a utilizar dependerá del juicio del encargado del sistema de costeo, ambos modelos son adecuados y ofrecen un nivel razonable de precisión, ver tabla 3.
    .row.mb-5.justify-content-center
      .col-12.col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 3.] Comparativa sistemas de evaluación de inventarios
        .tabla-a.color-acento-botones
          table
            caption Nota. Sena (2021).
            thead
              tr
                th(style="background-color: #BADA95")
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") PEPS
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Promedio ponderado
            tbody
              tr
                td(style="background-color: #F6F6F6") Costo de la materia prima
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 404.000
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 472.286
              tr
                td Inventario final
                td(style="border-left: #AFAFAF 2px solid") 466.000
                td(style="border-left: #AFAFAF 2px solid") 397.714
              tr
                td(style="background-color: #F6F6F6")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
              tr
                td Total materia prima
                td(style="border-left: #AFAFAF 2px solid") 870.000
                td(style="border-left: #AFAFAF 2px solid") 870.000
    h3.mb-4.text-deco1 #[u Mano de obra]
    .row.mb-5.bg-color7
      .col-12.px-5.pt-5
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure(data-aos="slide-right")
              img(src='@/assets/curso/img36.png', style="width: 450px").m-auto
          .col-lg-8
            .row.mb-4.align-items-center
              .col-12
                p.mb-0 #[b El costo de la mano de obra en Colombia involucra las prestaciones y beneficios a los que los empleados tienen derecho]. Un contrato de trabajo comprende un salario básico, unas prestaciones sociales, unos aportes parafiscales y de seguridad social, así como cualquier otra retribución asociada a las labores ejecutadas en función de su trabajo.
            .row.mb-4
              .col-12.p-4.bg-color10
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/img1.svg', style="width: 60px").m-auto
                  .col
                    p.mb-0 #[b La normativa colombiana es muy extensa respecto a las condiciones de la contratación laboral, el Código Sustantivo del Trabajo de 1950 presenta el compilatorio más importante en el país en este aspecto, de su interpretación se sustraen los siguientes apartados, que resultan de especial importancia para estimar el costo de la mano de obra: ]
              figure
                img(src='@/assets/curso/img4.png', style="width: 120px").m-auto.img-position1
    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Salario")(style="border-bottom: #78B62E 3px solid")
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Salario
            p Constituye salario no solo la remuneración ordinaria, fija o variable, sino todo lo que recibe el trabajador en dinero o en especie como contraprestación directa del servicio, sea cualquiera la forma o denominación que se adopte, como primas, sobresueldos, bonificaciones habituales, valor del trabajo suplementario o de las horas extras, valor del trabajo en días de descanso obligatorio, porcentajes sobre ventas y comisiones (Código Sustantivo del Trabajo, 1950, Artículo 127).
          .col-lg-5
            figure
              img(src='@/assets/curso/img37.png', style="width: 350px").m-auto
      .py-3.py-md-4(titulo="Horas extra")(style="border-bottom: #78B62E 3px solid")
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Horas extra
            p Trabajo suplementario o de horas extras es el que excede de la jornada ordinaria, y en todo caso el que excede de la máxima legal (Código Sustantivo del Trabajo, 1950, Artículo 159).
          .col-lg-5
            figure
              img(src='@/assets/curso/img38.png', style="width: 350px").m-auto
      .py-3.py-md-4(titulo="Vacaciones")(style="border-bottom: #78B62E 3px solid")
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Vacaciones
            p Los trabajadores que hubieren prestado sus servicios durante un año tienen derecho a quince (15) días hábiles consecutivos de vacaciones remuneradas (Código Sustantivo del Trabajo, 1950, Artículo 186).
          .col-lg-5
            figure
              img(src='@/assets/curso/img39.png', style="width: 350px").m-auto
      .py-3.py-md-4(titulo="Cesantías")(style="border-bottom: #78B62E 3px solid")
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Cesantias
            p Todo empleador está obligado a pagar a sus trabajadores y a las demás personas que se indican en este Capítulo, al terminar el contrato de trabajo, como auxilio de cesantía, un mes de salario por cada año de servicios y proporcionalmente por fracción de año (Código Sustantivo del Trabajo, 1950, Artículo 249).
          .col-lg-5
            figure
              img(src='@/assets/curso/img40.png', style="width: 350px").m-auto
      .py-3.py-md-4(titulo="Prima de servicios")(style="border-bottom: #78B62E 3px solid")
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Prima de servicios
            p El empleador está obligado a pagar a su empleado o empleados, la prestación social denominada prima de servicios que corresponderá a 30 días de salario por año, el cual se reconocerá en dos pagos, así: la mitad máximo el 30 de junio y la otra mitad a más tardar los primeros veinte días de diciembre. Su reconocimiento se hará por todo el semestre trabajado o proporcionalmente al tiempo trabajado (Código Sustantivo del Trabajo, 1950, Artículo 306).
          .col-lg-5
            figure
              img(src='@/assets/curso/img41.png', style="width: 350px").m-auto
      .py-3.py-md-4(titulo="Intereses de las cesantías")(style="border-bottom: #78B62E 3px solid")
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Intereses de las cesantías
            p Todo patrono obligado a pagar cesantía a sus trabajadores conforme al Capítulo VII Título VIII, Parte 1ª, del Código Sustantivo del Trabajo y demás disposiciones concordantes, les reconocerá y pagará intereses del 12 % anual sobre los saldos que en 31 de diciembre de cada año, o en las fechas de retiro del trabajador o de liquidación parcial de cesantía, tenga este a su favor por concepto de cesantía (Ley 52, 1975, Artículo 1).
          .col-lg-5
            figure
              img(src='@/assets/curso/img42.png', style="width: 350px").m-auto
      .py-3.py-md-4(titulo="Auxilio de transporte")(style="border-bottom: #78B62E 3px solid")
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Auxilio de transporte
            p Corresponde a un elemento salarial diferente a los anteriores, puesto que su valor no depende del salario, sino que se establece un valor fijo anualmente. Como su nombre lo indica, es un auxilio para cubrir los costos de desplazamiento del empleado. Para el año 2021 su valor es de $ 106.454 según lo dispuesto en el Decreto 1785 de 2020, expedido por el Ministerio del Trabajo y su pago es exclusivo de los trabajadores que devenguen menos de dos salarios mínimos mensuales legales vigentes (SMMLV).
          .col-lg-5
            figure
              img(src='@/assets/curso/img43.png', style="width: 350px").m-auto
    .row.align-items-start
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/img44.png', style="width: 450px").m-auto
      .col-lg-7
        .row.mb-4.pt-0.pt-lg-5
          .col-12.p-4.bg-color12.mb-4
            .row.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/img29.svg', style="width: 8px").m-auto
              .col
                p.mb-0 #[b Para determinar el costo de prestaciones como las cesantías o la prima de servicios, debe calcularse la proporcionalidad en relación con el salario]. La norma indica que por 12 meses trabajados se hace acreedor a un mes por cada uno de estos conceptos. Así, la ratio 1/12 es equivalente al 8,33 % de tal forma que ese porcentaje, al pasar un año será del 100 %. En el caso de las vacaciones el trabajador tiene derecho a 15 días por año trabajado, por lo que la proporción se reduce al 4,17 %.
          p.mb-4 La siguiente tabla 4 relaciona todos los #[b factores prestacionales a tener presentes a la hora de calcular el costo de la mano de obra]:
          .row.justify-content-center
            .col-12.col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Tabla 4.] Factores prestacionales
              .tabla-a.color-acento-botones
                table(style="min-width: 0px")
                  caption Nota. Sena (2021).
                  thead
                    tr
                      th(style="background-color: #BADA95") Prestación
                      th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Empleador/a
                  tbody
                    tr
                      td(style="background-color: #F6F6F6") Vacaciones
                      td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 4.17 %
                    tr
                      td Cesantías
                      td(style="border-left: #AFAFAF 2px solid") 8.33 %
                    tr
                      td(style="background-color: #F6F6F6") Prima de servicios
                      td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 8.33 %
                    tr
                      td Intereses a las censantías
                      td(style="border-left: #AFAFAF 2px solid") 1 %
                    tr
                      th(style="background-color: #F6F6F6") Total
                      th(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 21.83 %
    p.mb-5 Por otra parte, de forma adicional a lo mencionado previamente, los contratos laborales también obligan a los empleadores a asumir costos por la seguridad social del empleado, el Artículo #[b “Cotización a la Seguridad Social – Aportes”] publicado por el Ministerio del Trabajo aporta la siguiente tabla:
    .row.justify-content-center.mb-5
      .col-12.col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 5.] Aportes obligatorios a seguridad social
        .tabla-a.color-acento-botones
          table(style="min-width: 0px")
            caption Nota. Ministerio del Trabajo (2019)
            thead
              tr
                th(style="background-color: #BADA95")
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Empleador/a
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Trabajador/a
                th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Total
            tbody
              tr
                td(style="background-color: #F6F6F6") Pensiones
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 12 %
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 4 %
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 16 %
              tr
                td Salud
                td(style="border-left: #AFAFAF 2px solid") 8,5 %
                td(style="border-left: #AFAFAF 2px solid") 4 %
                td(style="border-left: #AFAFAF 2px solid") 12,5 %
              tr
                td(style="background-color: #F6F6F6") Riesgos laborales - Nivel 1
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 0,5 %
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid")
                td(style="background-color: #F6F6F6; border-left: #AFAFAF 2px solid") 0,5 %
              tr
                td Cajas de Compensación
                td(style="border-left: #AFAFAF 2px solid") 4 %
                td(style="border-left: #AFAFAF 2px solid")
                td(style="border-left: #AFAFAF 2px solid") 4 %
              tr
                td(style="background-color: #F6F6F6") Total
                td(style="background-color: #F6F6F6; ; border-left: #AFAFAF 2px solid") 25 %
                td(style="background-color: #F6F6F6; ; border-left: #AFAFAF 2px solid") 8 %
                td(style="background-color: #F6F6F6; ; border-left: #AFAFAF 2px solid") 33 %
    .row.bg-color6
      .col-12.px-5
        .row.align-items-center.mb-5
          .col-lg-8
            p #[b La estimación de todos los costos asociados a un trabajador, suelen llevarse a una hoja de trabajo conocida como nómina]. Allí, se detallan todos los rubros que comprenden los pagos y prestaciones de cada trabajador, de tal forma que tenga claridad sobre los costos totales asociados a la relación laboral. #[b.text-deco1 Una vez se cuenta con esta información, es posible asignarle un valor a cada hora trabajada, en función de las horas totales del mes.] Para ejemplificar lo anterior se presenta el siguiente caso, ver tabla 6:
            p Calcular el costo de mano de obra de un producto que requiere 1 hora de trabajo de los siguientes dos operarios:
            .row.mb-5.justify-content-center
              .col-6.p-4.bg-color14
                p.mb-0 #[b Operario 1:  Salario Básico de 1.000.000]
                p.mb-0 #[b Operario 2:  Salario Básico de 1.500.000]
          .col-lg-4
            figure(data-aos="slide-left")
              img(src='@/assets/curso/img45.png', style="width: 450px").m-auto
        .row.mb-5
          .col-lg-6.mb-5.mb-lg-0
            .row.justify-content-center
              .col-10
                .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Tabla 6.] Liquidación costo mensual empleado
                .tabla-a.color-acento-botones
                  table(style="min-width: 0px")
                    caption Nota. Sena (2021).
                    thead
                      tr
                        th(style="background-color: #BADA95") Concepto
                        th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Operario 1
                        th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Operario 2
                    tbody
                      tr
                        td Salario
                        td(style="border-left: #AFAFAF 2px solid") 1.000.000
                        td(style="border-left: #AFAFAF 2px solid") 1.500.000
                      tr
                        td Aux. de transporte
                        td(style="border-left: #AFAFAF 2px solid") 106.454
                        td(style="border-left: #AFAFAF 2px solid") 106.454
                      tr
                        td #[b Subtotal salario]
                        td(style="border-left: #AFAFAF 2px solid") #[b 1.106.454]
                        td(style="border-left: #AFAFAF 2px solid") #[b 1.106.454]
                      tr
                        td
                        td(style="border-left: #AFAFAF 2px solid")
                        td(style="border-left: #AFAFAF 2px solid")
                      tr
                        td Prestaciones
                        td(style="border-left: #AFAFAF 2px solid")
                        td(style="border-left: #AFAFAF 2px solid")
                      tr
                        td Vacaciones
                        td(style="; border-left: #AFAFAF 2px solid") 41.667
                        td(style="; border-left: #AFAFAF 2px solid") 62.500
                      tr
                        td Cesantías
                        td(style="border-left: #AFAFAF 2px solid") 92.205
                        td(style="border-left: #AFAFAF 2px solid") 133.871
                      tr
                        td Prima de servicios
                        td(style="border-left: #AFAFAF 2px solid") 92.205
                        td(style="border-left: #AFAFAF 2px solid") 133.871
                      tr
                        td Intereses a las cesantías
                        td(style="border-left: #AFAFAF 2px solid") 11.065
                        td(style="border-left: #AFAFAF 2px solid") 16.065
                      tr
                        td #[b Subtotal prestaciones]
                        td(style="border-left: #AFAFAF 2px solid") #[b 237.140]
                        td(style="border-left: #AFAFAF 2px solid") #[b 346.307]
                      tr
                        td
                        td(style="border-left: #AFAFAF 2px solid")
                        td(style="border-left: #AFAFAF 2px solid")
                      tr
                        td Seguridad social
                        td(style="border-left: #AFAFAF 2px solid")
                        td(style="border-left: #AFAFAF 2px solid")
                      tr
                        td Salud
                        td(style="border-left: #AFAFAF 2px solid") -
                        td(style="border-left: #AFAFAF 2px solid") -
                      tr
                        td Pensión
                        td(style="border-left: #AFAFAF 2px solid") 132.774
                        td(style="border-left: #AFAFAF 2px solid") 192.774
                      tr
                        td ARL
                        td(style="border-left: #AFAFAF 2px solid") 5.754
                        td(style="border-left: #AFAFAF 2px solid") 8.354
                      tr
                        td #[b Subtotal Seguridad social]
                        td(style="border-left: #AFAFAF 2px solid") #[b 138.528]
                        td(style="border-left: #AFAFAF 2px solid") #[b 201.128]
                      tr
                        td
                        td(style="border-left: #AFAFAF 2px solid")
                        td(style="border-left: #AFAFAF 2px solid")
                      tr
                        td Aportes parafiscales
                        td(style="border-left: #AFAFAF 2px solid")
                        td(style="border-left: #AFAFAF 2px solid")
                      tr
                        td Caja de compensación
                        td(style="border-left: #AFAFAF 2px solid") 44.258
                        td(style="border-left: #AFAFAF 2px solid") 64.258
                      tr
                        td SENA
                        td(style="border-left: #AFAFAF 2px solid") -
                        td(style="border-left: #AFAFAF 2px solid") -
                      tr
                        td ICBF
                        td(style="border-left: #AFAFAF 2px solid") -
                        td(style="border-left: #AFAFAF 2px solid") -
                      tr
                        td #[b Subtotales parafiscales]
                        td(style="border-left: #AFAFAF 2px solid") #[b 44.258]
                        td(style="border-left: #AFAFAF 2px solid") #[b 64.258]
                      tr
                        td
                        td(style="border-left: #AFAFAF 2px solid")
                        td(style="border-left: #AFAFAF 2px solid")
                      tr
                        td #[b Total costo empleado]
                        td(style="border-left: #AFAFAF 2px solid") #[b 1.343.594]
                        td(style="border-left: #AFAFAF 2px solid") #[b 1.952.761]
          .col-lg-6
            p #[b Es importante precisar que la base de las prestaciones sociales es equivalente a la suma del salario básico, más el auxilio de transporte, las comisiones y las horas extra, entre otros]. Sin embargo, en el caso de las vacaciones, el auxilio de transporte no se incluye puesto que se asume que en ese periodo el empleado no deberá asumir costos de movilización, pues no se desplazará a su lugar de trabajo.
            p En el caso del cálculo de la tarifa de la ARL (Administradora de Riesgos Laborales) se debe acudir a una tabla dispuesta por la norma laboral que varía según lo peligroso de la labor prestada por el trabajador, el nivel uno, es decir, el que presenta el menor riesgo, es del 0,52 %.
            p.mb-5 #[b.text-deco1 Una vez calculado el costo mensual de cada empleado, se debe continuar con la estimación del tiempo destinado a la elaboración de cada unidad producida.] Por ejemplo, si cada empleado tarda una hora de su trabajo en el proceso de transformación y debe trabajar 24 días al mes en jornadas fijas de 8 horas, el costo de la mano de obra unitario se calcularía así, ver tabla 7:
            .row.justify-content-center.mb-4
              .col-10
                .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Tabla 7.] Costo de mano de obra por hora
                .tabla-a.color-acento-botones
                  table(style="min-width: 0px")
                    caption Nota. Sena (2021).
                    thead
                      tr
                        th(style="background-color: #BADA95")
                        th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Operario 1
                        th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Operario 2
                    tbody
                      tr
                        td Costo Mensual
                        td(style="border-left: #AFAFAF 2px solid") 1.343.594
                        td(style="border-left: #AFAFAF 2px solid") 1.952.761
                      tr
                        td Horas diarias de trabajo
                        td(style="border-left: #AFAFAF 2px solid") 8
                        td(style="border-left: #AFAFAF 2px solid") 8
                      tr
                        td Días trabajados al mes
                        td(style="border-left: #AFAFAF 2px solid") 24
                        td(style="border-left: #AFAFAF 2px solid") 24
                      tr
                        td
                        td(style="border-left: #AFAFAF 2px solid")
                        td(style="border-left: #AFAFAF 2px solid")
                      tr
                        td Horas de trabajo mensual
                        td(style="border-left: #AFAFAF 2px solid") 192
                        td(style="border-left: #AFAFAF 2px solid") 192
                      tr
                        td #[b Costo por hora (salario/total horas)]
                        td(style="border-left: #AFAFAF 2px solid") #[b 6.998]
                        td(style="border-left: #AFAFAF 2px solid") #[b 10.171]
            .row.justify-content-center
              .col-11.bg-color10
                .p-4
                  .row.align-items-center
                    .col-auto
                      figure
                        img(src='@/assets/curso/img29.svg', style="width: 8px").m-auto
                    .col
                      p.mb-0 #[b Los cálculos de nómina suelen obedecer siempre a los mismos criterios, por lo que las hojas de cálculo electrónicas pueden agilizar el proceso con la aplicación de fórmulas matemáticas]. Allí, se pueden agregar tantos empleados como sea necesario, siempre y cuando se respeten las tarifas y se tenga cuidado con su parametrización. Actualmente existen software gerenciales que agregan módulos de nómina y se encargan de automatizar aún más el proceso, sin embargo suelen tener costos elevados, por lo que solo son opciones viables para empresas con cierta robustez financiera.
    .row.mb-5
      .col-12.bg-color3.px-5.shadow.rounded(data-aos="slide-left")
        .row.align-items-center.py-4.py-md-0
          .col-12.col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/img46.png', style="width: 200px").m-auto
          .col-12.col-md-7
            .row.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/img1.svg', style="width: 50px").m-auto
              .col
                p.m-0 Para profundizar acerca de la automatización de la nómina de forma gratuita, se recomienda al aprendiz observar tutoriales como el siguiente (Oliveros, 2016): #[b Ms Excel 5 Fórmulas nómina completa].
            .row.justify-content-end
              .col-3
                a.boton.me-3.indicador__container(
                  href="https://www.youtube.com/watch?v=KdZLNPyLGmk"
                  target="_blank"
                  type="application/pdf"
                  @mouseover="mostrarIndicador = false"
                )
                  span Ver video
                  i.fab.fa-youtube
                  .indicador--click(v-if="mostrarIndicador")
    h3.mb-5.text-deco1 #[u Costos indirectos de fabricación]
    .row.align-items-start
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/img47.png', style="width: 450px").m-auto
      .col-lg-7
        .row.mb-4.pt-0.pt-lg-5
          .col-12.p-4.bg-color12.mb-4
            .row.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/img29.svg', style="width: 8px").m-auto
              .col
                p.mb-0 #[b La distribución y asignación de los costos indirectos de fabricación aporta más complejidad al cálculo del costo de producción de lo que se podría pensar], lo anterior debido a que existen limitaciones significativas para determinar la porción de un costo indirecto a una unidad producida. Por ejemplo, si se debe reparar una máquina de ordeño, en cuánto se debe incrementar el costo de producción de cada litro de leche.
          p.mb-4 #[b.text-deco1 Este tipo de situaciones implica que la asignación de los costos indirectos obedezca a la cantidad de unidades producidas en un periodo concreto]. Existen diversos elementos de juicio pero suelen converger en una apreciación, la asignación del costo estará supeditada a los niveles de producción de la planta.
    .row.mb-4
      .col-lg-7
        p.mb-4 #[b.text-deco1 Si se producen varios productos en diversas líneas de producción, por ejemplo, en una granja pecuaria donde se produce leche y al mismo tiempo se vende la carne del ganado, la situación puede resultar más compleja]. Retomando el ejemplo anterior, el daño de una maquina de ordeño debe asignarse a la línea productiva de la leche, pero qué sucede entonces en casos como el salario del administrador, donde su trabajo es indistinto entre las dos líneas de producción.
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/img1.svg', style="width: 50px").m-auto
          .col
            p.mb-0 #[b El criterio del encargado del cálculo de los costos deberá aplicar la distribución con base en su criterio, algunas de las opciones más utilizadas son las unidades producidas, o las horas de trabajo destinadas a cada tipo de producto]. El siguiente ejemplo, ver tabla 8, ilustra una situación de este estilo:
        .row.justify-content-center.mb-4
          .col-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 8.] Costos indirectos de fabricación mensuales
            .tabla-a.color-acento-botones
              table(style="min-width: 0px")
                caption Nota. Sena (2021).
                thead
                  tr
                    th(style="background-color: #BADA95") Costos indirectos
                    th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Valor
                tbody
                  tr
                    td Depreciación
                    td(style="border-left: #AFAFAF 2px solid") 1.200.000
                  tr
                    td Servicios públicos
                    td(style="border-left: #AFAFAF 2px solid") 250.000
                  tr
                    td Vigilancia
                    td(style="border-left: #AFAFAF 2px solid") 1.500.000
                  tr
                    td #[b Total CIF]
                    td(style="; border-left: #AFAFAF 2px solid") #[b 2.950.000]
      .col-lg-5
        figure(data-aos="slide-right")
          img(src='@/assets/curso/img48.png', style="width: 450px").m-auto
    p.mb-5 #[b Las unidades producidas requirieron de diferente cantidad de tiempo de trabajo por los dos operarios que se presentaron en el caso de la mano de obra así, ver tabla 9]:
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="slide-left")
          img(src='@/assets/curso/img49.png', style="width: 450px").m-auto
      .col-lg-8
        .row.justify-content-center.mb-4
          .col-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 9.] Hoja de producción con horas de trabajo
            .tabla-a.color-acento-botones
              table(style="min-width: 0px")
                caption Nota. Sena (2021).
                thead
                  tr
                    th(style="background-color: #BADA95")
                    th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Horas de trabajo
                    th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Unidades producidas
                tbody
                  tr
                    td Producto A
                    td(style="border-left: #AFAFAF 2px solid") 250
                    td(style="border-left: #AFAFAF 2px solid") 200
                  tr
                    td Producto B
                    td(style="border-left: #AFAFAF 2px solid") 134
                    td(style="border-left: #AFAFAF 2px solid") 100
                  tr
                    td #[b Total]
                    td(style="border-left: #AFAFAF 2px solid") #[b 384]
                    td(style="border-left: #AFAFAF 2px solid") #[b 300]
        p.mb-4 #[b.text-deco1 Para definir los costos indirectos de fabricación de cada línea, será necesario prorratear con base en las horas de trabajo destinadas a cada línea de producto,] posteriormente y en función de las unidades elaboradas, se podrá definir el costo indirecto de fabricación unitario para cada tipo de producto, ver tabla 10.
        .row.justify-content-center
          .col-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 10.] Hoja de producción con horas de trabajo
            .tabla-a.color-acento-botones
              table(style="min-width: 0px")
                caption Nota. Sena (2021).
                thead
                  tr
                    th(style="background-color: #BADA95")
                    th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Costo indirecto asignado
                    th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Unidades producidas
                    th(style="background-color: #BADA95; border-left: #AFAFAF 2px solid") Costo indirecto unitario
                tbody
                  tr
                    td Producto A
                    td(style="border-left: #AFAFAF 2px solid") 1.920.573
                    td(style="border-left: #AFAFAF 2px solid") 200
                    td(style="border-left: #AFAFAF 2px solid") 9.603
                  tr
                    td Producto B
                    td(style="border-left: #AFAFAF 2px solid") 1.029.427
                    td(style="border-left: #AFAFAF 2px solid") 100
                    td(style="border-left: #AFAFAF 2px solid") 10.294
                  tr
                    td #[b Total]
                    td(style="border-left: #AFAFAF 2px solid") #[b 2.950.000]
                    td(style="border-left: #AFAFAF 2px solid") #[b 300]
                    td(style="border-left: #AFAFAF 2px solid")
    p.mb-0 #[b Una vez son definidos los costos unitarios de materia prima, mano de obra y costos indirectos de fabricación solo resta consolidarlos en una orden de producción], para establecer el valor total que cuesta producirlos.
    separador.mb-5
    #t_2_7
    .titulo-segundo.color-secundario
      h2 2.7 Órdenes de producción
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="slide-left")
          img(src='@/assets/curso/img50.png', style="width: 450px").m-auto
      .col-lg-8
        p.mb-4 Las órdenes de producción, también conocidas como órdenes de pedido, suelen ser utilizadas en empresas en las que la línea de producción no opera de manera permanente. #[b.text-deco1 Bajo este sistema, la determinación del coste de un lote de producto terminado se estima de forma independiente a otros, por lo que pueden existir variaciones en el costo de venta unitario entre una y otra orden.]
        .row
          .col-12.p-4.bg-color10
            .row.mb-4.align-items-start
              .col-auto
                figure
                  img(src='@/assets/curso/img1.svg', style="width: 60px").m-auto
              .col
                p.mb-0 #[b Este sistema ofrece una gran utilidad en unidades productivas que trabajan por encargo, puesto que las mediciones varían en función de la situación actual]. El siguiente formato propone un esquema para utilizar bajo esta metodología; su diligenciamiento suele ser precedido por una solicitud comercial, es decir, el área de ventas indica la unidad de productos vendidos, y de cara a esto, el departamento de producción determina el costo unitario de cara a las exigencias presentadas, ver tabla 11.
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 11.] Ejemplo de orden de producción
        figure
          img(src='@/assets/curso/img36.svg', style="width: 800px").m-auto
          figcaption.mt-3 Nota. Guarnizo Cuellar y Cárdenas (2015).
    .row.justify-content-center
      .col-lg-11
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Características").align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/img51.png', style="width: 450px").m-auto
            .col-lg-8
              p.mb-4 #[b Las órdenes de producción preceden el inicio del ciclo productivo, por lo que su emisión resulta un requisito previo]. En ellas se consigna información relevante como las unidades a producir, su identificación y el número consecutivo de la orden con el fin de establecer prioridades. Las siguientes son algunas de las características más importantes de estas:
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span a
                  | Se espera estimar un costo de producción distinto para cada pedido, por lo que es común ver la aplicación de este tipo de metodologías en unidades productivas que no mantienen una línea de producción estandarizada o permanente.
                li 
                  .lista-ol--cuadro__vineta
                    span b
                  | Se hace necesaria una planificación previo inicio de la producción, puesto que el alistamiento del material y el diligenciamiento de la orden de producción varía de acuerdo con las unidades que se esperan producir.
                li 
                  .lista-ol--cuadro__vineta
                    span c
                  | La producción requiere de un pedido previo, lo que implica, que si no se efectúan ventas, los niveles de producción se reducirán al mínimo. El trabajo por encargo suele optimizar en costos de bodegaje o almacenamiento, pero los costos se pueden ver castigados por la capacidad ociosa de la planta.
          .row(numero="2" titulo="Diligenciamiento")
            .col-12.pt-4
              .row.mb-5
                .col-lg-7.mb-4.mb-lg-0
                  p.mb-4 #[b Al diligenciar la orden de producción, se espera que los insumos estimados sean los suficientes para dar cumplimiento con la demanda del cliente]. Gracias a esto, se minimizan los costos de almacenaje, caducidad u obsolescencia. Una vez definidos los insumos, se les asigna un valor para calcular el costo total de la orden de producción y de forma derivada, obtener el costo unitario.
                  .row
                    .col-12.p-4.bg-color2
                      .row.align-items-start
                        .col-auto
                          figure
                            img(src='@/assets/curso/img37.svg', style="width: 30px").m-auto
                        .col
                          p.mb-0 #[b.text-deco1 Para ilustrar el diligenciamiento de una orden de producción, se presenta la siguiente situación: se solicita por medio de la orden de producción 53, 4.000 litros de leche en una granja pecuaria para cumplir con los pedidos semanales producto de las ventas efectuadas por el área comercial. Para efectos prácticos, se cuenta con un solo operario y las órdenes son de periodicidad semanal. La siguiente es la discriminación de los costos:]
                .col-lg-5
                  figure
                    img(src='@/assets/curso/img52.png', style="width: 350px").m-auto
              .row.justify-content-center
                .col-8
                  .tarjeta-avatar-b.mb-5
                    .tarjeta-avatar-b__img
                      img(src='@/assets/curso/img35.svg' alt='AvatarTop')
                    .tarjeta.bg-color16
                      .p-4
                        p #[b.text-deco1 Materia prima]
                        p Se estima que las vacas consumen 3 kilogramos de concentrado diario y producen 10 litros de leche en ese mismo periodo de tiempo. La compra se efectúa de forma mensual a un proveedor que la ofrece a un valor de $ 1.500 por kilogramo, incluida la entrega en la granja. Si cada vaca puede producir 70 litros semanales, se requerirá de la producción de 58 animales para cubrir este pedido y por lo tanto, de 1.218 kg de concentrado.
                        p Además del pastoreo y el concentrado, las vacas requieren de una suplementación en sales minerales con alto contenido nutricional. Así, la unidad productiva suministra 1 kilogramo de sales minerales semanales a cada vaca productora. El proveedor ofrece este producto a un valor de $ 2.000 por cada kilogramo.
                  .tarjeta-avatar-b.mb-5
                    .tarjeta-avatar-b__img
                      img(src='@/assets/curso/img35.svg' alt='AvatarTop')
                    .tarjeta.bg-color16
                      .p-4
                        p #[b.text-deco1 Mano de obra]
                        p La granja cuenta con un solo operario cuyo salario básico es de $ 1.000.000, adicionalmente cuenta con las prestaciones de ley equivalentes a un 30 % del ingreso básico, también se debe cancelar la seguridad social a las entidades correspondientes por un valor equivalente al 20 % del salario. Dado que la orden de producción se lleva a cabo en una semana, el costo del empleado debe tomarse de manera proporcional (una cuarta parte del salario).
                  .tarjeta-avatar-b.mb-5
                    .tarjeta-avatar-b__img
                      img(src='@/assets/curso/img35.svg' alt='AvatarTop')
                    .tarjeta.bg-color16
                      .p-4
                        p #[b.text-deco1 Costos indirectos]
                        p Los costos indirectos mensuales de la granja son los siguientes: por concepto de aseo y desinfección de la granja: $ 1.500.000, el pago de servicios públicos (agua y luz) es en promedio de $ 400.000 y por último, el costo de la medicación y tratamiento veterinario asciende a $ 800.000. Al igual que con la mano de obra, se debe practicar la proporción para una sola semana de producción, ver tabla 12.
              .row.justify-content-center
                .col-lg-8
                  .titulo-sexto.color-acento-contenido
                    p.mb-0 #[b Tabla 12.] Ejemplo de orden de producción
                  figure
                    img(src='@/assets/curso/img38.svg', style="width: 800px").m-auto
                    figcaption Nota. Sena (2021).
              .row.align-items-center.mb-4
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/img53.png', style="width: 450px").m-auto
                .col-lg-7
                  .row.mb-4.pt-0.pt-lg-5
                    .col-12.p-4.bg-color18
                      .row.align-items-center
                        .col-auto
                          figure
                            img(src='@/assets/curso/img29.svg', style="width: 8px").m-auto
                        .col
                          p.mb-0 #[b Del formato anterior se desprende que lo que se busca con la orden de producción es determinar las cantidades y el costo de los insumos necesarios para producir lo solicitado]. Con esta información, se puede estimar un costo unitario y a partir de ello, establecer un margen de rentabilidad por cada litro de leche vendida.
              p.mb-0 El costo unitario es el resultado del costo total de la orden de producción dividido en el número de unidades producidas, con los datos aquí presentados es posible determinar el valor de la utilidad bruta de la granja, puesto que si se supone un precio de venta de $ 1.000 por litro de leche, de forma rápida puede identificarse el beneficio unitario (1.000 – 748 = $ 252) o global (4.000.000 – 2.993.000 = $ 1.007.000).
    br

</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: '4P',
        texto:
          '<b>La fase de las 4 “P” define la forma en la que el producto llegará a los clientes</b>; su nombre proviene del análisis de los factores más relevantes en este sentido, que son: el producto, el precio, la plaza y la promoción. Lo anterior implica que <b>debe efectuarse un estudio que contemple las características del producto</b>, su precio de venta en relación con los terceros, la plaza, entendida como el lugar donde se ofertan los bienes, y la promoción, que refiere a los esfuerzos comerciales para penetrar en el mercado.',
        imagen: require('@/assets/curso/img25.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Comunicación',
        texto:
          'Aborda todos los canales para la transmisión de información, esto incluye la comunicación asertiva entre los funcionarios de las diversas áreas que colaboran para la elaboración, distribución y venta de bienes, así como la debida retroalimentación obtenida por parte de los consumidores. <b>Es recomendable apoyarse en las tecnologías de la información para facilitar el proceso, haciendo uso de herramientas contempladas en el <i>marketing</i> digital como la gestión redes sociales o mensajería instantánea</b>.',
        imagen: require('@/assets/curso/img26.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Puesta en marcha',
        texto:
          '<b>Para este paso se deben definir las tareas y los responsables de estas</b>. La asignación puede dirigirse a áreas, cargos o personas según las necesidades; sin embargo, <b>es importante recalcar que el factor tiempo resulta determinante, puesto que ciertas estrategias requieren de una secuencia para ser efectivas</b>. Por ejemplo, una estrategia publicitaria puede tener diferentes efectos si la campaña en medios se realiza antes (para crear expectativa) o después del lanzamiento de un producto.',
        imagen: require('@/assets/curso/img27.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Presupuesto',
        texto:
          '<b>Este tipo de planeación no puede obviar el factor económico que implica su implementación</b>. La empresa como órgano social debe trabajar de manera cooperativa con las demás áreas organizacionales, puesto que la armonía garantiza que los propósitos comunes sean alcanzados.<br><b>Una campaña muy costosa puede traer una demanda tan grande que la capacidad productiva no logre abastecerla</b>, de la misma manera, la aplicación de una estrategia publicitaria puede representar más dinero del que tiene a disposición la empresa, lo que implica posibles sobreendeudamientos o incumplimientos en los pagos que afecten la reputación, causando un efecto contrario al buscado.<br><b>El presupuesto debe elaborarse de manera previa y simultánea a la programación de las tareas propias de la puesta en marcha, de tal forma que se tenga certeza de la disponibilidad de recursos en las fechas esperadas</b>. Este trabajo suele requerir del acompañamiento del área financiera, quienes deberán dar aprobación previa implementación, para garantizar que todas las tareas puedan llevarse a cabo de acuerdo con el programa.',
        imagen: require('@/assets/curso/img28.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
