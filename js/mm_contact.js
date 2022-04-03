

const btn = document.getElementsByClassName('nmi_btn_send_contact')[0];
console.log(btn);

const form  = document.getElementById('mmi-contact-form');



btn.addEventListener('click', () => {
    $('form').submit(function() {
        console.info(JSON.stringify($('form').serializeObject()));
        $('form').reste();
        return false;
    });
        Swal.fire("Our First Alert", "With some body text and success icon!", "success");
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
 


