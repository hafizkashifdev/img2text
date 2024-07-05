$(document).ready(function () {
    var CAPTCHA_TOKEN = "";
    function contact_us() {
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email = $("#email").val();
        var message = $("#message").val();
        $.ajax({
            url: BASE_URL + "contact",
            method: "POST",
            data: {
                name: fname + " " + lname,
                email: email,
                message: message,
                req_key: CAPTCHA_TOKEN,
                '_token': $("meta[name='_token']").attr("content"),
            },
            success: function (response) {
                $(".error").text('');
                $("#message_res").text("Message Successfully Sent.");
                $("#fname, #lname, #email, #message").val("");
                $(contactUsBtnWrap).html("Send Message");

            }, error: function (xhr, status, error) {
                var errorMessage = '';
                if (xhr.responseJSON && xhr.responseJSON.errors) {
                    // Display the first error message from the server response.
                    errorMessage = xhr.responseJSON.errors[Object.keys(xhr.responseJSON.errors)[0]][0];
                } else {
                    errorMessage = 'An unexpected error occurred. Please try again.';
                }
                $("#message_res").text('');

                // Display the error message in the error class div.
                $(".error").text(errorMessage);
                $(contactUsBtnWrap).html("Send Message");
            }
        });
    }
    const contactUsBtnShadowRoot = document
        .querySelector("#contactUsBtnShadowRoot")
        .attachShadow({
            mode: "closed"
        });
    const contactUsBtnWrap = document.createElement("button");
    $(contactUsBtnWrap).html("Send Message");
    const loginBtnStyle = {
        marginTop: "15px",
        width: "100%",
        border: "none",
        background: "#0984e3",
        color: "white",
        borderRadius: "7px",
        fontSize: "16px",
        padding: "10px",
        cursor: "pointer",
    };
    Object.assign(contactUsBtnWrap.style, loginBtnStyle);
    contactUsBtnWrap.addEventListener("click", (e) => {
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email = $("#email").val();
        var message = $("#message").val();
        if (fname.length == 0) {
            $("#fname").focus();
            return false;
        }
        if (email.length == 0) {
            $("#email").focus();
            return false;
        }
        if (message.length == 0) {
            $("#message").focus();
            return false;
        }
        $(contactUsBtnWrap).html("Message Sending...");
        with_cloudflare_captcha(false, (Date.now() / 1000), captchaVerify, 'light', '#captcha');
    });
    
    function captchaVerify(captcha_1, captcha_2) {
        $.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="_token"]').attr("content")
            },
        });
        $.ajax({
            type: "POST",
            url: BASE_URL + "emd/captcha-verify/" + Date.now(),
            data: {
                emd_captcha_1: captcha_1,
                emd_captcha_2: captcha_2,
                emd_captcha_3: (Date.now() / 1000)
            },
            success: function (response) {
                if (response.request) {
                    CAPTCHA_TOKEN = response.req_key
                    contact_us();
                } else {
                    $(contactUsBtnWrap).html("Send Message");
                    alert('Invalid Captcha!')
                }
            }
        })
    }
    contactUsBtnShadowRoot.appendChild(contactUsBtnWrap);
});
