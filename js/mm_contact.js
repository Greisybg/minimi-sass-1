window.addEventListener('load', (event) => {
    isContacFormSended();
});

const btn = document.getElementsByClassName('nmi_btn_send_contact')[0];
console.log(btn);

const form  = document.getElementById('mmi-contact-form');



btn.addEventListener('click', () => {
    $('form').validate();

});

$.fn.serializeObject = function(){
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
 

function isContacFormSended(){
    const params = new URLSearchParams(window.location.search)
    if (params.get('send')==='sended')
    {
        Swal.fire("Gracias por contactarnos", "En un tiempo menor a 24 horas estaremos comunicandonos con vos", "success");
    }
 }
