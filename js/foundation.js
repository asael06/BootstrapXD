;
((d, w) => {
  $(d).foundation()

  d.addEventListener('DOMContentLoaded', e => {
    const mqDesktop = w.matchMedia('(min-width: 64em)')
    $('.top-bar a').click(() => {
      if (!mqDesktop.matches) {
        $('.top-bar').hide()
      }
    })
  })
})(document, window);
