<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5
      .col-12.bg-color1.px-5.shadow.rounded(data-aos="slide-left")
        .row.align-items-center.py-4.py-md-0
          .col-12.col-md-7.mb-4.mb-md-0
            .row.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/img1.svg', style="width: 50px").m-auto
              .col
                p.m-0 #[span.text-deco1 Las empresas pecuarias son una necesidad en todos los países y por eso se trabajará en este contenido la normativa y procedimiento básico] para quienes tengan o quieran tener una:
          .col-12.col-md-5
            figure
              img(src='@/assets/curso/img2.png', style="width: 200px").m-auto
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/O7eVMn5mxNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
