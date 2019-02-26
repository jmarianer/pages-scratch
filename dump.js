$(() => {
  $('.account').click((event) => {
    $(event.target).find('.subaccounts').slideToggle()
    let uuid = $(event.target).data('uuid')
    $('.account-details').hide()
    $('#' + uuid).show()
  })
  $('.subaccount').click((event) => {
    let uuid = $(event.target).data('uuid')
    $('.account-details').hide()
    $('#' + uuid).show()
  })
})
