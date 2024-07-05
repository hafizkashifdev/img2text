// const IS_PREMIUM = 0;
let imgArr = [];
var detectadsbocker = true;
// var validImageTypes = ["image/gif", "image/jpeg", "image/jpg", "image/png", "image/svg+xml"];
var validImageTypes = ["image/gif", "image/jpeg", "image/jpg", "image/png"];
const maxFileSize = IS_PREMIUM == 1 ? 10 : 5;
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
$(document).ready(function () {
    $(".dropdown").on("click", toggleDropdown);
    $(".account_dropdown").on("click", accountToggleDropdown);

    window.onclick = function (event) {
        if (!event.target.matches('.lang-dropdown-click')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('active')) {
                    openDropdown.classList.remove('active');
                }
            }
        }
    }
    // $(document).ready(function () {
    //     // Get the current page slug from the URL
    //     var currentSlug = window.location.pathname.split('/').pop();

    //     // Hide the tool links with data-slug matching the current page slug
    //     $(".tool-link[data-slug='" + currentSlug + "']").hide();
    //     if (currentSlug === "" || currentSlug == appLocale) {
    //         $(".tool-link[data-slug=' ']").hide();
    //     }
    // });

    //navigation language dropdown closed on escape click

    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('active')) {
                    openDropdown.classList.remove('active');
                }
            }
        }
    });

    // ON FILE CHANGE AND ITS ACTION
    $(".browse-btn").click(function () {
        $("#file").click();
    });
    $(".uploaded_tool #browse_files").click(function () {
        $("#file").click();
    });
    $("#file").on("change", onFileChange);
    $(document).on("click", ".right-preview", deleteAction);
    // ON FILE COPY PASTE AND ITS ACTION
    window.addEventListener("paste", getPasteImage);
    // ON FILE DRAG N DROP AND ITS ACTION
    dragNDropScript();
    $(".faq").on("click", toggleFaq);

    $(".slider_btn").click(function () {
        $(".slider_btn").removeClass("slider-btn-active");
        $(this).addClass("slider-btn-active");
        var imgurl = BASE_URL + "web_assets/frontend/img/signin-signup-img" + $(this).attr("data-img") + ".svg";
        $(".slider1").attr('src', imgurl);
    });

    function login_modal_slider_random() {
        setInterval(() => {
            var curSliderIndex = parseInt($(".slider-btn-active").attr('data-img'));
            $(".slider_btn").removeClass("slider-btn-active");
            if (curSliderIndex == 1) {
                $(".slider_btn:nth-child(2)").addClass("slider-btn-active");
                var imgurl = BASE_URL + "web_assets/frontend/img/signin-signup-img" + (curSliderIndex + 1) + ".svg";
                $(".slider1").attr('src', imgurl);
                $(".login_popup_slider_title").text("Export the Result");
                $(".login_popup_slider_detail").text("Copy or save the extracted text into a text file (.txt).");
            } else if (curSliderIndex == 2) {
                $(".slider_btn:nth-child(3)").addClass("slider-btn-active");
                var imgurl = BASE_URL + "web_assets/frontend/img/signin-signup-img" + (curSliderIndex + 1) + ".svg";
                $(".slider1").attr('src', imgurl);
                $(".login_popup_slider_title").text("Large Image File Support");
                $(".login_popup_slider_detail").text("Image files up to 10 MB can be uploaded for text extraction.");
            } else {
                $(".slider_btn:nth-child(1)").addClass("slider-btn-active");
                var imgurl = BASE_URL + "web_assets/frontend/img/signin-signup-img1.svg";
                $(".slider1").attr('src', imgurl);
                $(".login_popup_slider_title").text("Bulk Image Submission");
                $(".login_popup_slider_detail").text("Upload Up to 20 images at once and get the text with a single click.");
            }
        }, 3000);
    }



    $(".login_btn").click(function () {
        var data_id = $(this).attr('data-id');
        var data_code = $(this).attr('data-code');
        $("input.plan-id").val(data_id);
        $("input.plan-code").val(data_code);
        login_modal_slider_random();
        $(".for_forgot_password, .for_registration").addClass("d-none");
        $(".for_login, .divider-var, .gmail-btn").removeClass("d-none");
        $("#login_Modal").css({
            display: 'block'
        });
    });

    $(".signup_btn, .signin_btn").click(function () {
        if ($(".for_login").hasClass("d-none")) {
            ;
            $(".toggle_image").removeClass("right_rotation");
            $(".toggle_image").addClass("left_rotation");
        } else {
            $(".toggle_image").removeClass("left_rotation");
            $(".toggle_image").addClass("right_rotation");
        }

        $(".for_login").toggleClass("d-none");
        $(".for_registration").toggleClass("d-none");
        $(".for_forgot_password").addClass("d-none");
    });

    $(".forgot_btn").click(function () {
        $(".for_login, .for_registration, .divider-var, .gmail-btn").addClass("d-none");
        $(".for_forgot_password").removeClass("d-none");
    });
    $(".back_signin").click(function () {
        $(".for_forgot_password").addClass("d-none");
        $(".for_login, .divider-var, .gmail-btn").removeClass("d-none");

    });

    $(".ignore_error_popup").click(function () {
        $("#error_modal").css({
            display: 'none'
        });
    });
    $(".cancel_sub_btn").click(function () {
        $("#error_title").text("Successfully Cancelled");
        $("#error_detail").text("Your account has been cancelled");
        $(".ignore_error_popup").text("Close");
        $(".error-footer").addClass("d-none");
        $(".just-ignore").removeClass("d-none");
    });

    $(".close_error_popup_btn").click(function () {
        $("#login_Modal").css({
            display: 'none'
        });
    });
    var forgot_password_request = false;
    $("#reset_password_btn").click(function () {
        $("#f_email").removeClass("error-field");
        $("#forgot_email_error, #forgot_success").text("");
        var email = $("#f_email").val();
        if (email.length == 0) {
            $("#forgot_email_error").text("Email address required");
            $("#f_email").addClass("error-field");
            response_fun();
            return false;
        }
        if (!isEmail(email)) {
            $("#forgot_email_error").text("Invalid email address");
            $("#f_email").addClass("error-field");
            response_fun();
            return false;
        }
        if (forgot_password_request) {
            return false;
        }
        forgot_password_request = true;
        $("#f_email").attr("readonly", true);
        $("#reset_password_btn").css({
            background: "#0984e3b8"
        });
        $.ajax({
            url: BASE_URL + "forgot-password",
            method: "POST",
            data: {
                email: email,
                _token: $("meta[name='_token']").attr("content"),
            },
            success: function (response) {
                if (response[0]) {
                    $("#f_email").removeAttr("readonly");
                    $("#f_email").val("");
                    $("#forgot_email_error").text("");
                    $("#reset_password_btn").css({
                        background: "#0984e3"
                    });
                    $("#forgot_success").text(response[1]);
                    forgot_password_request = false;
                } else {
                    $("#forgot_success").text("");
                    $("#f_email").removeAttr("readonly");
                    $("#f_email").addClass("error-field");
                    $("#reset_password_btn").css({
                        background: "#0984e3"
                    });
                    $("#forgot_email_error").text(response[1]);
                    forgot_password_request = false;
                }
                response_fun();
            }
        });
    });

    function response_fun() {
        setTimeout(function () {
            $("#login_error").text("");
            $("#login_success").text("");
            $("#login_email_error").text("");
            $("#login_password_error").text("");
            $("#register_error").text("");
            $("#register_success").text("");
            $("#register_name_error").text("");
            $("#register_email_error").text("");
            $("#register_password_error").text("");
            $("#forgot_email_error").text("");
            $("#forgot_success").text("");
            $("#r_name, #r_email, #r_password, #l_email, #l_password, #f_email").removeClass("error-field");
        }, 3000);
    }

    const popuploginBtnShadowRoot = document
        .querySelector("#popuploginBtnShadowRoot")
        .attachShadow({
            mode: "closed"
        });
    const pupupLoginBtnWrap = document.createElement("button");
    $(pupupLoginBtnWrap).html("Login");
    const loginBtnStyle = {
        background: "#0984e3",
        border: "none",
        color: "#F0F0F0",
        width: "100%",
        borderRadius: "5px",
        cursor: "pointer",
        height: "35px"
    };
    Object.assign(pupupLoginBtnWrap.style, loginBtnStyle);
    pupupLoginBtnWrap.addEventListener("click", (e) => {
        // login_account();
        $("#l_email, #l_password").removeClass("error-field");
        var email = $("#l_email").val();
        var password = $("#l_password").val();
        // var payment_link = $(".payment_link").val();
        if (email.length == 0) {
            $("#login_email_error").text("Email address required");
            $("#l_email").addClass("error-field");
            response_fun();
            return false;
        }
        if (password.length == 0) {
            $("#login_password_error").text("Password required");
            $("#l_password").addClass("error-field");
            response_fun();
            return false;
        }
        if (!isEmail(email)) {
            $("#login_email_error").text("invalid email address");
            $("#l_email").addClass("error-field");
            response_fun();
            return false;
        }
        if (password.length < 8) {
            $("#login_password_error").text("Min 8 characters required");
            $("#l_password").addClass("error-field");
            response_fun();
            return false;
        }
        $(pupupLoginBtnWrap).html("Loging in...");
        login_account();
        // with_cloudflare_captcha(false, (Date.now() / 1000), captchaVerifyLogin, 'light', '#login_captcha');
    });
    popuploginBtnShadowRoot.appendChild(pupupLoginBtnWrap);



    const popupRegBtnShadowRoot = document
        .querySelector("#popupRegBtnShadowRoot")
        .attachShadow({
            mode: "closed"
        });
    const popupRegBtnWrap = document.createElement("button");
    $(popupRegBtnWrap).html("Register");
    const regBtnStyle = {
        background: "#0984e3",
        border: "none",
        color: "#F0F0F0",
        width: "100%",
        borderRadius: "5px",
        cursor: "pointer",
        height: "35px"
    };
    Object.assign(popupRegBtnWrap.style, regBtnStyle);
    popupRegBtnWrap.addEventListener("click", (e) => {
        // register_account();
        $("#r_name, #r_email, #r_password").removeClass("error-field");
        var name = $("#r_name").val();
        var email = $("#r_email").val();
        var password = $("#r_password").val();
        var payment_link = $(".payment_link").val();
        if (name.length == 0) {
            $("#register_name_error").text("Name required");
            $("#r_name").addClass("error-field");
            response_fun();
            return false;
        }
        if (email.length == 0) {
            $("#register_email_error").text("Email address required");
            $("#r_email").addClass("error-field");
            response_fun();
            return false;
        }
        if (password.length == 0) {
            $("#register_password_error").text("Password required");
            $("#r_password").addClass("error-field");
            response_fun();
            return false;
        }
        if (name.length < 3) {
            $("#register_name_error").text("Min 3 characters required");
            $("#r_name").addClass("error-field");
            response_fun();
            return false;
        }
        if (!isEmail(email)) {
            $("#register_email_error").text("invalid email address");
            $("#r_email").addClass("error-field");
            response_fun();
            return false;
        }
        if (password.length < 8) {
            $("#register_password_error").text("min 8 char password");
            $("#r_password").addClass("error-field");
            response_fun();
            return false;
        }
        $(popupRegBtnWrap).html("Registering...")
        register_account();
        // with_cloudflare_captcha(false, (Date.now() / 1000), captchaVerifyReg, 'light', '#register_captcha');
    });
    popupRegBtnShadowRoot.appendChild(popupRegBtnWrap);

    function captchaVerifyReg(captcha_1, captcha_2) {
        captchaVerifyRequest(captcha_1, captcha_2, register_account)
    }
    function captchaVerifyLogin(captcha_1, captcha_2) {
        captchaVerifyRequest(captcha_1, captcha_2, login_account)
    }

    function captchaVerifyRequest(captcha_1, captcha_2, mainfunction) {
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
                    mainfunction(response.req_key);
                } else {
                    alert('Invalid Captcha!')
                }
            }
        })
    }



    function login_account(CAPTCHA_TOKEN) {
        var email = $("#l_email").val();
        var password = $("#l_password").val();
        const plan_id = $(".plan-id").val();
        const plan_code = $(".plan-code").val();
        // $(".coupon-code").val();
        $.ajax({
            url: BASE_URL + "emd/login/web",
            method: "POST",
            data: {
                email,
                password,
                plan_id,
                plan_code,
                _token: $("meta[name='_token']").attr("content"),
                req_key: CAPTCHA_TOKEN,
            },
            success: function (response) {
                if (response.status) {
                    $("#login_success").text(response.mess);
                    if (response.checkout_url) {
                        window.open(response.checkout_url, '_blank');
                        return;
                    }
                    // window.location.reload(); // Does some issues in UAM
                    location.href = location.href;

                } else {
                    // $("#login_error").text(response[1]);
                    $("#l_email, #l_password").addClass("error-field");
                    $("#login_error").text("Incorrect email or password");
                    $(pupupLoginBtnWrap).html("Login");
                }
                response_fun();
            }
        });
    }

    function register_account(CAPTCHA_TOKEN) {
        var name = $("#r_name").val();
        var email = $("#r_email").val();
        var password = $("#r_password").val();
        var payment_link = $(".payment_link").val();
        const plan_id = $(".plan-id").val();
        const plan_code = $(".plan-code").val();
        $.ajax({
            url: BASE_URL + "emd/register/web",
            method: "POST",
            data: {
                name,
                email,
                password,
                plan_id,
                plan_code,
                req_key: CAPTCHA_TOKEN,
                '_token': $("meta[name='_token']").attr("content"),
            },
            success: function (response) {
                if (response.status) {
                    $("#register_success").text(response[1]);
                    if (response.checkout_url) {
                        window.open(response.checkout_url, '_blank');
                        return;
                    }
                    // window.location.reload(); // Does some issues in UAM
                    location.href = location.href;
                } else {
                    // $("#register_error").text(response[1]);
                    $("#r_email").addClass("error-field");
                    $("#register_error").text(response.mess);
                    $(popupRegBtnWrap).html("Register");
                }
                response_fun();
            }
        });
    }

    updateTimer();
    setInterval(updateTimer, 1000);

});
// FUNCTIONS
var limitExcedImgUrl = BASE_URL + "web_assets/frontend/img/limit-increae.svg?v1.0.0";
var imageSizeUrl = BASE_URL + "web_assets/frontend/img/image-size.svg?v1.0.0";
var imageTypeUrl = BASE_URL + "web_assets/frontend/img/image-type.svg?v1.0.0";
const toggleFaq = (e) => {
    $(e.currentTarget).toggleClass("active");
    if ($(e.currentTarget).hasClass("active")) {
        $(e.currentTarget).children(".ans").slideDown("fast");
    } else {
        $(e.currentTarget).children(".ans").slideUp("fast");
    }
};

const checkIfImageExists = (url, callback) => {
    const img = new Image();

    img.onload = () => {
        // Image exists, invoke the callback with true
        callback(true);
    };

    img.onerror = (error) => {
        // Image does not exist, invoke the callback with false
        if (TOOL_NAME === 'JPGTOPDF' || TOOL_NAME === 'JPGTOINVERT' || TOOL_NAME == 'IMAGETOTEXT' || TOOL_NAME == 'JPGTOWORD') {
            alert('Its Not Image');
        }
        else {
            callback(false);
        }

    };

    img.src = url;
};

const imageUrlToFileList = async (imageUrl) => {
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const file = new File([blob], 'link_file.' + (blob.type).split("/").pop(), { type: blob.type });
        const fileList = new DataTransfer();
        fileList.items.add(file);
        return [...fileList.files];
    } catch (e) {
        const formData = new FormData();
        const csrfToken = $('meta[name="_token"]').attr('content');
        formData.append('imageUrl', imageUrl);
        formData.append('_token', csrfToken);
        const response = await fetch('/fetch-file', {
            method: 'POST',
            body: formData
        });
        const blob = await response.blob();
        const file = new File([blob], 'link_file.' + (blob.type).split("/").pop(), { type: blob.type });
        const fileList = new DataTransfer();
        fileList.items.add(file);
        return [...fileList.files];
    }
};

$(document).ready(function () {
    // URL input input event
    $("#url, #show_link_url").on("input", function () {
        const imgUrl = $(this).val();

        checkIfImageExists(imgUrl, async (exists) => {
            try {
                let filesLength = IS_PREMIUM == 1 ? 50 : 3;
                let already_select_imgs = ($(".js-single-img-preview").length);
                if ((already_select_imgs + 1) > filesLength && TOOL_NAME != 'JPGTOPDF') {
                    $("#error_image").attr('src', limitExcedImgUrl);
                    $("#error_title").text($("#limitExcedErrorTitle").val());
                    if (IS_PREMIUM) {
                        $("#error_detail").text($("#limitExcedPremiumErrorDetail").val());
                    } else {
                        $("#error_detail").text($("#limitExcedErrorDetail").val());
                    }
                    $(".error-footer").addClass("d-none");
                    $(".ignore-premium").removeClass("d-none");
                    $("#error_modal").css({ display: 'block' });
                    // alert(`Maximum ${filesLength} Images Allow`);
                    // $("#limitExceedModal").show();
                    var remaining_files = filesLength - already_select_imgs;
                    if (remaining_files > 0) {
                        const limitedFiles = Object.values(files).slice(0, remaining_files);
                        appendFilesToArray(limitedFiles);
                    }
                    // $(e.target).val("");
                    $(".restart_btn").removeClass("d-none");
                    return;
                }
                const fileList = await imageUrlToFileList(imgUrl);
                appendFilesToArray(fileList);
                $(this).val("");
            } catch (error) {
                console.error('Error processing File:', error);
                // Handle the error
                alert("No File Found");
            }
        });
    });
});




const onFileChange = (e) => {
    if (check_adblocker()) {
        $(e.target).val("");
        return;
    }

    let files = e.target.files;
    let filesLength = IS_PREMIUM == 1 ? 50 : 3;
    if (TOOL_NAME == "JPGTOJPG") {
        filesLength = 1;
    }
    $(".multiple-select-result").empty();
    $(".restart_btn").addClass("d-none");

    let already_select_imgs = ($(".js-single-img-preview").length);
    if ((files.length + already_select_imgs) > filesLength && TOOL_NAME != 'JPGTOPDF') {
        $("#error_image").attr('src', limitExcedImgUrl);
        $("#error_title").text($("#limitExcedErrorTitle").val());
        if (IS_PREMIUM) {
            $("#error_detail").text($("#limitExcedPremiumErrorDetail").val());
        } else {
            $("#error_detail").text($("#limitExcedErrorDetail").val());
        }
        $(".error-footer").addClass("d-none");
        $(".ignore-premium").removeClass("d-none");
        $("#error_modal").css({ display: 'block' });
        // alert(`Maximum ${filesLength} Images Allow`);
        // $("#limitExceedModal").show();
        var remaining_files = filesLength - already_select_imgs;
        if (remaining_files > 0) {
            const limitedFiles = Object.values(files).slice(0, remaining_files);
            appendFilesToArray(limitedFiles);
        }
        $(e.target).val("");
        $(".restart_btn").removeClass("d-none");
        return;
    }
    appendFilesToArray(Object.values(files));
};

let index = 0;
let cropper;

const appendFilesToArray = (files) => {
    // console.log(files)
    if (imgArr.length === 0) {
        index = 0; // Reset the index when there are no uploaded files
        // $(".uploaded_tool").removeClass("d-none");
    }
    if (files.length > 0) {
        // imgArr = [];
        // $(".multiple-img-preview").empty().removeClass("d-none");
        var removeKey = $("#removeKey").val();
        $(".multiple-img-preview").removeClass("d-none");
        $(".selected-result").removeClass("d-none");
        $(".textEditor-submit").addClass("d-none");
        // $(".uploaded_tool").addClass("d-none");
        if (!IS_CAPTCHA_VERIFYING) {
            $("#jsShadowRoot").removeClass("d-none");
        }
        const intervalId = setInterval(() => {
            if (!IS_CAPTCHA_VERIFYING) {
                $("#jsShadowRoot").removeClass("d-none");
                clearInterval(intervalId);
            }
        }, 500);

        $(".js-convert-all").show();
        // $(".tool-section .right").hide();
        // $(".tool-section .left").css({
        //     padding:"0 100px"
        // });

        files.forEach(function (file) {
            let fileSize = (file.size / 1000000).toFixed(2);
            if (fileSize > maxFileSize) {
                $("#error_image").attr('src', imageSizeUrl);
                $("#error_title").text($("#imageSizeExcedErrorTitle").val());
                if (IS_PREMIUM) {
                    $("#error_detail").text($("#imageSizeExcedPremiumErrorDetail").val());
                } else {
                    $("#error_detail").text($("#imageSizeExcedErrorDetail").val());
                }
                $(".error-footer").addClass("d-none");
                $(".ignore-premium").removeClass("d-none");
                $("#error_modal").css({ display: 'block' });
                return;
            }
            let FileNameForMobileView; // get file name
            let fileName = file.name; // get file name


            if (fileName.length > 15) {
                FileNameForMobileView = fileName.substr(0, 10);
            } else {
                FileNameForMobileView = fileName;
            }

            let fullFileName = file.name;
            // console.log(file.type)
            if ((TOOL_NAME == "JPGTOJPG")) {
                if (file.type.indexOf("image") === -1) {
                    alert("File type not allow");
                    return false;
                }
                if ($(window).width() < 550) {
                    $(".right").hide();
                }
                $('html, body').animate({
                    scrollTop: $('.tool_wrapper').offset().top - 40
                }, 'slow');
                base64 = URL.createObjectURL(file);
                $('.tool-section.tool-image-translator .left').html('<img src="' + base64 + '" class="preview-img-translator"  alt="uploaded image"/>');
                $('.tool-section.other').hide();
                $('.tool-section.tool-image-translator').show();

            }
            if ((TOOL_NAME !== "PDFTOWORD" && TOOL_NAME !== "PDFTOTEXT" && TOOL_NAME !== "TEXTTOWORD" && TOOL_NAME !== "TEXTTOPDF" && TOOL_NAME !== "WORDTOTEXT") && validImageTypes.includes(file.type)) {
                // let reader = new FileReader();
                let base64 = "";
                let html = "";

                // reader.readAsDataURL(file);
                // reader.onload = (e) => {
                base64 = URL.createObjectURL(file);
                let img_drag = `${BASE_URL}web_assets/frontend/img/drag.svg`;

                html =
                    `<div class="js-single-img-preview">` +
                    // `<div class="left-preview-img-drag">` +
                    // `<img src="${img_drag}" alt="image drag">` +
                    // `</div>` +// Display the image using the created URL
                    `<div class="left-preview">` +
                    `<div class="left-preview-img cropper-image">` +
                    `<img src="${base64}" alt="uploaded image">` +
                    `</div>` +
                    `</div>` +
                    `<div class="center-preview">` +
                    `<div class="center-preview-inner">` +
                    `<div class="center-preview-file">` +
                    `<p class="img-preview-name">${fileName}</p>` +
                    `<p class="img-preview-name-for-mob" style="display: none">${FileNameForMobileView}</p>` +
                    `<span class="img-preview-size">(${fileSize} MB)</span>` +
                    `</div>` +
                    `<p class="full-name" style="display: none">${fileName}</p>` +
                    `<div class="center-preview-file-bar">` +

                    `</div>` +
                    `<div class="center-preview-file-uploadIcon">
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 24 17" fill="none">
  <path d="M19.35 6.54C19.0141 4.83772 18.0976 3.30486 16.7571 2.20325C15.4165 1.10163 13.7351 0.499608 12 0.5C9.11 0.5 6.6 2.14 5.35 4.54C3.88023 4.69883 2.52101 5.39521 1.53349 6.49532C0.545971 7.59543 -0.000171702 9.02168 4.04928e-08 10.5C4.04928e-08 13.81 2.69 16.5 6 16.5H19C21.76 16.5 24 14.26 24 11.5C24 8.86 21.95 6.72 19.35 6.54ZM19 14.5H6C3.79 14.5 2 12.71 2 10.5C2 8.45 3.53 6.74 5.56 6.53L6.63 6.42L7.13 5.47C7.58988 4.57478 8.28787 3.82382 9.14712 3.29979C10.0064 2.77577 10.9936 2.49902 12 2.5C14.62 2.5 16.88 4.36 17.39 6.93L17.69 8.43L19.22 8.54C19.9717 8.59056 20.6764 8.92399 21.1922 9.47319C21.708 10.0224 21.9966 10.7466 22 11.5C22 13.15 20.65 14.5 19 14.5ZM10 10.68L7.91 8.59L6.5 10L10 13.5L16.01 7.49L14.6 6.08L10 10.68Z" fill="#02C24F"/>
</svg> Uploaded</div>` +
                    `</div>` +
                    `<div class="right-preview" style="gap: 0.324rem">` +
                    `<span class="d-flex align-items-center delete-action deleteIt" title="Delete File" data-index=${index}><img src='${BASE_URL}web_assets/frontend/img/delete.svg' width="20" height="20" alt="uploaded image" /></span>`
                    // + `<div class="right-preview-text">${removeKey}</div>`
                    ;

                if (typeof TOOL_NAME !== 'undefined' && (TOOL_NAME === 'JPGTOPDF' || TOOL_NAME === 'JPGTOINVERT' || TOOL_NAME === 'TEXTTOPDF')) {

                    let downloadImgSrc = `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 6 44 44" fill="none">
  <circle cx="22" cy="22" r="18" fill="#F7F7FC"/>
  <path d="M26 18.2017C27.74 18.2113 28.6824 18.2889 29.2968 18.9033C30 19.6065 30 20.7377 30 23.0001V23.8001C30 26.0633 30 27.1945 29.2968 27.8977C28.5944 28.6001 27.4624 28.6001 25.2 28.6001H18.8C16.5376 28.6001 15.4056 28.6001 14.7032 27.8977C14 27.1937 14 26.0633 14 23.8001V23.0001C14 20.7377 14 19.6065 14.7032 18.9033C15.3176 18.2889 16.26 18.2113 18 18.2017" fill="#F7F7FC"/>
  <path d="M26 18.2017C27.74 18.2113 28.6824 18.2889 29.2968 18.9033C30 19.6065 30 20.7377 30 23.0001V23.8001C30 26.0633 30 27.1945 29.2968 27.8977C28.5944 28.6001 27.4624 28.6001 25.2 28.6001H18.8C16.5376 28.6001 15.4056 28.6001 14.7032 27.8977C14 27.1937 14 26.0633 14 23.8001V23.0001C14 20.7377 14 19.6065 14.7032 18.9033C15.3176 18.2889 16.26 18.2113 18 18.2017" stroke="#0D1120" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M21.9949 15V25.4V15ZM21.9949 25.4L18.7949 21.8L21.9949 25.4ZM21.9949 25.4L25.1949 21.8L21.9949 25.4Z" fill="#F7F7FC"/>
  <path d="M21.9949 15V25.4M21.9949 25.4L18.7949 21.8M21.9949 25.4L25.1949 21.8" stroke="#0D1120" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
                    html += `<span class="d-flex align-items-center cursor-pointer js-single-img-pdf d-none" data-index=${index}>${downloadImgSrc}</span>`;
                }
                html += `</div>` +
                    `</div>` +
                    `</div>`;

                $(".multiple-img-preview").append(html);

                $(".tool").hide();
                $(".uploaded_tool").show();
                imgArr.push(file);
                ++index;


                // };
            } else if ((TOOL_NAME == "TEXTTOWORD" || TOOL_NAME == "TEXTTOPDF") && (file.type == 'text/plain' || file.type == 'text/html')) {
                let img_drag = `${BASE_URL}web_assets/frontend/img/drag.svg`;

                let _fileName = fileName;
                if (_fileName.endsWith('.html')) {
                    _fileName = _fileName.slice(0, -5) + '.txt'; // Replace .html with .txt
                    // Use new_file_name
                }

                html =
                    `<div class="js-single-img-preview">` +
                    // `<div class="left-preview-img-drag">` +
                    // `<img src="${img_drag}" alt="image drag">` +
                    // `</div>` +// Display the image using the created URL
                    `<div class="left-preview">` +
                    `<div class="left-preview-img">` +
                    `<img src="${BASE_URL}web_assets/frontend/img/text-img-png.png" alt="uploaded image">` +
                    `</div>` +
                    `</div>` +
                    `<div class="center-preview">` +
                    `<div class="center-preview-inner">` +
                    `<div class="center-preview-file">` +
                    `<p class="img-preview-name" data-orignal="${fileName}">${_fileName}</p>` +

                    `<span class="img-preview-size">(${fileSize} MB)</span>` +
                    `</div>` +
                    `<p class="full-name" style="display: none">${fullFileName}</p>` +
                    `<div class="center-preview-file-bar">` +

                    `</div>` +
                    `<div class="center-preview-file-uploadIcon">
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 24 17" fill="none">
  <path d="M19.35 6.54C19.0141 4.83772 18.0976 3.30486 16.7571 2.20325C15.4165 1.10163 13.7351 0.499608 12 0.5C9.11 0.5 6.6 2.14 5.35 4.54C3.88023 4.69883 2.52101 5.39521 1.53349 6.49532C0.545971 7.59543 -0.000171702 9.02168 4.04928e-08 10.5C4.04928e-08 13.81 2.69 16.5 6 16.5H19C21.76 16.5 24 14.26 24 11.5C24 8.86 21.95 6.72 19.35 6.54ZM19 14.5H6C3.79 14.5 2 12.71 2 10.5C2 8.45 3.53 6.74 5.56 6.53L6.63 6.42L7.13 5.47C7.58988 4.57478 8.28787 3.82382 9.14712 3.29979C10.0064 2.77577 10.9936 2.49902 12 2.5C14.62 2.5 16.88 4.36 17.39 6.93L17.69 8.43L19.22 8.54C19.9717 8.59056 20.6764 8.92399 21.1922 9.47319C21.708 10.0224 21.9966 10.7466 22 11.5C22 13.15 20.65 14.5 19 14.5ZM10 10.68L7.91 8.59L6.5 10L10 13.5L16.01 7.49L14.6 6.08L10 10.68Z" fill="#02C24F"/>
</svg> Uploaded</div>` +
                    `</div>` +
                    `<div class="right-preview" style="gap: 0.324rem">` +
                    `<span class="d-flex align-items-center delete-action deleteIt" title="Delete File" data-index=${index}><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <path d="M1 1L18 18" stroke="#A1A8B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1 18L18 1" stroke="#A1A8B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>`
                    ;

                if (typeof TOOL_NAME !== 'undefined' && (TOOL_NAME === 'JPGTOPDF' || TOOL_NAME === 'JPGTOINVERT' || TOOL_NAME === 'TEXTTOPDF')) {

                    let downloadImgSrc = `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 6 44 44" fill="none">
  <circle cx="22" cy="22" r="18" fill="#F7F7FC"/>
  <path d="M26 18.2017C27.74 18.2113 28.6824 18.2889 29.2968 18.9033C30 19.6065 30 20.7377 30 23.0001V23.8001C30 26.0633 30 27.1945 29.2968 27.8977C28.5944 28.6001 27.4624 28.6001 25.2 28.6001H18.8C16.5376 28.6001 15.4056 28.6001 14.7032 27.8977C14 27.1937 14 26.0633 14 23.8001V23.0001C14 20.7377 14 19.6065 14.7032 18.9033C15.3176 18.2889 16.26 18.2113 18 18.2017" fill="#F7F7FC"/>
  <path d="M26 18.2017C27.74 18.2113 28.6824 18.2889 29.2968 18.9033C30 19.6065 30 20.7377 30 23.0001V23.8001C30 26.0633 30 27.1945 29.2968 27.8977C28.5944 28.6001 27.4624 28.6001 25.2 28.6001H18.8C16.5376 28.6001 15.4056 28.6001 14.7032 27.8977C14 27.1937 14 26.0633 14 23.8001V23.0001C14 20.7377 14 19.6065 14.7032 18.9033C15.3176 18.2889 16.26 18.2113 18 18.2017" stroke="#0D1120" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M21.9949 15V25.4V15ZM21.9949 25.4L18.7949 21.8L21.9949 25.4ZM21.9949 25.4L25.1949 21.8L21.9949 25.4Z" fill="#F7F7FC"/>
  <path d="M21.9949 15V25.4M21.9949 25.4L18.7949 21.8M21.9949 25.4L25.1949 21.8" stroke="#0D1120" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
                    html += `<span class="d-flex align-items-center cursor-pointer js-single-img-pdf d-none" data-index=${index}>${downloadImgSrc}</span>`;
                }
                html += `</div>` +
                    `</div>` +
                    `</div>`;

                $(".multiple-img-preview").append(html);
                $(".tool").hide();
                $(".uploaded_tool").show();
                imgArr.push(file);
                ++index;


            } else if (TOOL_NAME == "WORDTOTEXT" && (file.type == 'application/msword' || file.type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
                let img_drag = `${BASE_URL}web_assets/frontend/img/drag.svg`;
                // get file name

                html =
                    `<div class="js-single-img-preview">` +
                    // `<div class="left-preview-img-drag">` +
                    // `<img src="${img_drag}" alt="image drag">` +
                    // `</div>` +// Display the image using the created URL
                    `<div class="left-preview">` +
                    `<div class="left-preview-img">` +
                    `<img src="${BASE_URL}web_assets/frontend/img/word-img-png.png" alt="uploaded image">` +
                    `</div>` +
                    `</div>` +
                    `<div class="center-preview">` +
                    `<div class="center-preview-inner">` +
                    `<div class="center-preview-file">` +
                    `<p class="img-preview-name">${fileName}</p>` +
                    `<span class="img-preview-size">(${fileSize} MB)</span>` +
                    `</div>` +
                    `<p class="full-name" style="display: none">${fullFileName}</p>` +

                    `<div class="center-preview-file-bar">` +

                    `</div>` +
                    `<div class="center-preview-file-uploadIcon">
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 24 17" fill="none">
  <path d="M19.35 6.54C19.0141 4.83772 18.0976 3.30486 16.7571 2.20325C15.4165 1.10163 13.7351 0.499608 12 0.5C9.11 0.5 6.6 2.14 5.35 4.54C3.88023 4.69883 2.52101 5.39521 1.53349 6.49532C0.545971 7.59543 -0.000171702 9.02168 4.04928e-08 10.5C4.04928e-08 13.81 2.69 16.5 6 16.5H19C21.76 16.5 24 14.26 24 11.5C24 8.86 21.95 6.72 19.35 6.54ZM19 14.5H6C3.79 14.5 2 12.71 2 10.5C2 8.45 3.53 6.74 5.56 6.53L6.63 6.42L7.13 5.47C7.58988 4.57478 8.28787 3.82382 9.14712 3.29979C10.0064 2.77577 10.9936 2.49902 12 2.5C14.62 2.5 16.88 4.36 17.39 6.93L17.69 8.43L19.22 8.54C19.9717 8.59056 20.6764 8.92399 21.1922 9.47319C21.708 10.0224 21.9966 10.7466 22 11.5C22 13.15 20.65 14.5 19 14.5ZM10 10.68L7.91 8.59L6.5 10L10 13.5L16.01 7.49L14.6 6.08L10 10.68Z" fill="#02C24F"/>
</svg> Uploaded</div>` +
                    `</div>` +
                    `<div class="right-preview" style="gap: 0.324rem">` +
                    `<span class="d-flex align-items-center delete-action deleteIt" title="Delete File" data-index=${index}><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <path d="M1 1L18 18" stroke="#A1A8B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1 18L18 1" stroke="#A1A8B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>`
                    ;

                if (typeof TOOL_NAME !== 'undefined' && (TOOL_NAME === 'JPGTOPDF' || TOOL_NAME === 'JPGTOINVERT' || TOOL_NAME === 'TEXTTOPDF')) {

                    let downloadImgSrc = `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 6 44 44" fill="none">
  <circle cx="22" cy="22" r="18" fill="#F7F7FC"/>
  <path d="M26 18.2017C27.74 18.2113 28.6824 18.2889 29.2968 18.9033C30 19.6065 30 20.7377 30 23.0001V23.8001C30 26.0633 30 27.1945 29.2968 27.8977C28.5944 28.6001 27.4624 28.6001 25.2 28.6001H18.8C16.5376 28.6001 15.4056 28.6001 14.7032 27.8977C14 27.1937 14 26.0633 14 23.8001V23.0001C14 20.7377 14 19.6065 14.7032 18.9033C15.3176 18.2889 16.26 18.2113 18 18.2017" fill="#F7F7FC"/>
  <path d="M26 18.2017C27.74 18.2113 28.6824 18.2889 29.2968 18.9033C30 19.6065 30 20.7377 30 23.0001V23.8001C30 26.0633 30 27.1945 29.2968 27.8977C28.5944 28.6001 27.4624 28.6001 25.2 28.6001H18.8C16.5376 28.6001 15.4056 28.6001 14.7032 27.8977C14 27.1937 14 26.0633 14 23.8001V23.0001C14 20.7377 14 19.6065 14.7032 18.9033C15.3176 18.2889 16.26 18.2113 18 18.2017" stroke="#0D1120" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M21.9949 15V25.4V15ZM21.9949 25.4L18.7949 21.8L21.9949 25.4ZM21.9949 25.4L25.1949 21.8L21.9949 25.4Z" fill="#F7F7FC"/>
  <path d="M21.9949 15V25.4M21.9949 25.4L18.7949 21.8M21.9949 25.4L25.1949 21.8" stroke="#0D1120" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
                    html += `<span class="d-flex align-items-center cursor-pointer js-single-img-pdf d-none" data-index=${index}>${downloadImgSrc}</span>`;
                }
                html += `</div>` +
                    `</div>` +
                    `</div>`;

                $(".multiple-img-preview").append(html);
                $(".tool").hide();
                $(".uploaded_tool").show();
                imgArr.push(file);
                ++index;


            }
            else if ((TOOL_NAME == "PDFTOWORD" || TOOL_NAME == "PDFTOTEXT") && file.type == "application/pdf") {
                let img_drag = `${BASE_URL}web_assets/frontend/img/drag.svg`;

                html =
                    `<div class="js-single-img-preview">` +
                    // `<div class="left-preview-img-drag">` +
                    // `<img src="${img_drag}" alt="image drag">` +
                    // `</div>` +// Display the image using the created URL
                    `<div class="left-preview">` +
                    `<div class="left-preview-img">` +
                    `<img src="${BASE_URL}web_assets/frontend/img/pdf.png" alt="uploaded image">` +
                    `</div>` +
                    `</div>` +
                    `<div class="center-preview">` +
                    `<div class="center-preview-inner">` +
                    `<div class="center-preview-file">` +
                    `<p class="img-preview-name">${fileName}</p>` +
                    `<span class="img-preview-size">(${fileSize} MB)</span>` +
                    `</div>` +
                    `<p class="full-name" style="display: none">${fullFileName}</p>` +
                    `<div class="center-preview-file-bar">` +

                    `</div>` +
                    `<div class="center-preview-file-uploadIcon">
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 24 17" fill="none">
  <path d="M19.35 6.54C19.0141 4.83772 18.0976 3.30486 16.7571 2.20325C15.4165 1.10163 13.7351 0.499608 12 0.5C9.11 0.5 6.6 2.14 5.35 4.54C3.88023 4.69883 2.52101 5.39521 1.53349 6.49532C0.545971 7.59543 -0.000171702 9.02168 4.04928e-08 10.5C4.04928e-08 13.81 2.69 16.5 6 16.5H19C21.76 16.5 24 14.26 24 11.5C24 8.86 21.95 6.72 19.35 6.54ZM19 14.5H6C3.79 14.5 2 12.71 2 10.5C2 8.45 3.53 6.74 5.56 6.53L6.63 6.42L7.13 5.47C7.58988 4.57478 8.28787 3.82382 9.14712 3.29979C10.0064 2.77577 10.9936 2.49902 12 2.5C14.62 2.5 16.88 4.36 17.39 6.93L17.69 8.43L19.22 8.54C19.9717 8.59056 20.6764 8.92399 21.1922 9.47319C21.708 10.0224 21.9966 10.7466 22 11.5C22 13.15 20.65 14.5 19 14.5ZM10 10.68L7.91 8.59L6.5 10L10 13.5L16.01 7.49L14.6 6.08L10 10.68Z" fill="#02C24F"/>
</svg> Uploaded</div>` +
                    `</div>` +
                    `<div class="right-preview" style="gap: 0.324rem">` +
                    `<span class="d-flex align-items-center delete-action deleteIt" title="Delete File" data-index=${index}><img src='${BASE_URL}web_assets/frontend/img/delete.svg' width="20" height="20" alt="uploaded image"/></span>`
                    // + `<div class="right-preview-text">${removeKey}</div>`
                    ;

                if (typeof TOOL_NAME !== 'undefined' && (TOOL_NAME === 'JPGTOPDF' || TOOL_NAME === 'JPGTOINVERT' || TOOL_NAME === 'TEXTTOPDF')) {

                    let downloadImgSrc = `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 6 44 44" fill="none">
  <circle cx="22" cy="22" r="18" fill="#F7F7FC"/>
  <path d="M26 18.2017C27.74 18.2113 28.6824 18.2889 29.2968 18.9033C30 19.6065 30 20.7377 30 23.0001V23.8001C30 26.0633 30 27.1945 29.2968 27.8977C28.5944 28.6001 27.4624 28.6001 25.2 28.6001H18.8C16.5376 28.6001 15.4056 28.6001 14.7032 27.8977C14 27.1937 14 26.0633 14 23.8001V23.0001C14 20.7377 14 19.6065 14.7032 18.9033C15.3176 18.2889 16.26 18.2113 18 18.2017" fill="#F7F7FC"/>
  <path d="M26 18.2017C27.74 18.2113 28.6824 18.2889 29.2968 18.9033C30 19.6065 30 20.7377 30 23.0001V23.8001C30 26.0633 30 27.1945 29.2968 27.8977C28.5944 28.6001 27.4624 28.6001 25.2 28.6001H18.8C16.5376 28.6001 15.4056 28.6001 14.7032 27.8977C14 27.1937 14 26.0633 14 23.8001V23.0001C14 20.7377 14 19.6065 14.7032 18.9033C15.3176 18.2889 16.26 18.2113 18 18.2017" stroke="#0D1120" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M21.9949 15V25.4V15ZM21.9949 25.4L18.7949 21.8L21.9949 25.4ZM21.9949 25.4L25.1949 21.8L21.9949 25.4Z" fill="#F7F7FC"/>
  <path d="M21.9949 15V25.4M21.9949 25.4L18.7949 21.8M21.9949 25.4L25.1949 21.8" stroke="#0D1120" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
                    html += `<span class="d-flex align-items-center cursor-pointer js-single-img-pdf d-none" data-index=${index}>${downloadImgSrc}</span>`;
                }
                html += `</div>` +
                    `</div>` +
                    `</div>`;

                $(".multiple-img-preview").append(html);
                $(".tool").hide();
                $(".uploaded_tool").show();
                imgArr.push(file);
                ++index;


            } else {
                $("#error_image").attr('src', imageTypeUrl);
                $("#error_title").text($("#imageTypeWrongErrorTitle").val());
                $("#error_detail").text($("#imageTypeWrongErrorDetail").val());
                $(".error-footer").addClass("d-none");
                $(".ignore-try_again").removeClass("d-none");
                $("#error_modal").css({ display: 'block' });
            }

        });
        $("#file").val("");
        updatePreviewCount();
        // $(".tool-hero").css({ height: '900px' });

        // $('.multiple-img-preview').sortable({
        //     axis: 'y',
        //     containment: 'parent',
        //     tolerance: 'pointer',
        //     cursor: 'move',
        //     start: function (event, ui) {
        //         // Store the original index of the dragged item
        //         ui.item.data('start-index', ui.item.index());

        //         if (ui.item.css('position') === 'absolute') {
        //             ui.item.css({
        //                 overflow: "visible"
        //             });
        //             ui.item.find(".left-preview-img-drag").css({
        //                 left: "-30px"
        //             });
        //             ui.item.find(".left-preview-img").css({
        //                 overflow: "hidden"
        //             });
        //         }
        //     },
        //     update: function (event, ui) {
        //         // Update the custom attributes after sorting
        //         updateIndexes();
        //         ui.item.css({
        //             overflow: "auto"
        //         });
        //         ui.item.find(".left-preview-img-drag").css({
        //             left: "3px"
        //         });
        //     },
        //     stop: function (event, ui) {
        //         // Check if the index has changed, if not, set left to 3px
        //         if (ui.item.index() === ui.item.data('start-index')) {
        //             ui.item.find(".left-preview-img-drag").css({
        //                 left: "3px"
        //             });
        //             ui.item.css({
        //                 overflow: "auto"
        //             });
        //         }
        //     },
        // });

        // $('.multiple-img-preview').sortable('option', 'disabled', false);

        // Function to update custom attributes based on the current order
        function updateIndexes() {
            $('.js-single-img-preview').each(function (index) {
                $(this).attr('data-original-index', index);

            });
        }

        const openImageModal = (imageUrl) => {
            $("#fullImage").attr("src", imageUrl);

            // Destroy the previous cropper instance if it exists
            if (cropper) {
                cropper.destroy();
            }

            $("#imageModal").css({
                display: "flex"
            });

            // Create a new cropper instance
            cropper = new Cropper(document.getElementById('fullImage'), {
                dragMode: 'move',
                autoCropArea: 0.65,
                restore: false,
                guides: false,
                center: false,
                highlight: false,
                cropBoxMovable: true,
                cropBoxResizable: true,
                toggleDragModeOnDblclick: false,
                data: { //define cropbox size
                    width: 240,
                    height: 90,
                },

            });
        };




        $(".multiple-img-preview").on("click", ".js-single-img-preview .cropper-image", function () {
            const imageUrl = $(this).find('img').attr("src");
            openImageModal(imageUrl);
            //   addCropText($(this).parent());
        });

        $("#cropButton").on("click", function () {
            // ... rest of your code remains the same

            const croppedImageUrl = cropper.getCroppedCanvas().toDataURL();

            // Update the source of the clicked image with the cropped image
            $(".multiple-img-preview .js-single-img-preview .left-preview-img img").each(function (index, value) {
                if ($(this).attr("src") === $("#fullImage").attr("src")) {
                    const blob = dataURItoBlob(croppedImageUrl);
                    const croppedFile = new File([blob], imgArr[index].name, { type: "image/png" });
                    imgArr[index] = croppedFile;

                    // Update the image source in the preview
                    $(this).attr("src", croppedImageUrl);
                    return false; // Break the loop after updating the image
                }
            });

            // Close the modal
            $("#imageModal").hide();
        });

        // Function to convert data URI to Blob
        function dataURItoBlob(dataURI) {
            const byteString = atob(dataURI.split(",")[1]);
            const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);

            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ab], { type: mimeString });
        }


        $("#closeButton").on("click", function () {
            // Close the modal and destroy the cropper instance
            $("#imageModal").hide();
            if (cropper) {
                cropper.destroy();
            }
        });


    }


};

$(document).ready(function () {
    $('#toggleBtn').click(function () {
        $('#url').toggleClass('d-none');
    });
    $('.toggleBtn').click(function () {
        let animDur = 300;
        if (!$('#show_link_url').hasClass('d-none')) {
            $('#show_link_url').animate({ width: '0px' }, animDur); // Set the width when the element is hidden
            setTimeout(function () {
                $('#show_link_url').addClass('d-none');
            }, animDur)
        } else {
            $('#show_link_url').removeClass('d-none');
            $('#show_link_url').animate({ width: '170px' }, animDur); // Set the width when the element is visible
        }
    });
});

// const deleteAction = (e) => {
//     // No need to get data-index
//     const deleteSpan = $(e.currentTarget).find('.delete-action');
// if (deleteSpan.length > 0){
//     let deletedIndex = deleteSpan.index();
//     if (deletedIndex){
//         imgArr.splice(deletedIndex, 1);
//
//         // Remove the element
//         $(e.currentTarget).closest(".js-single-img-preview").remove();
//
//         // Update the count based on the length of imgArr
//         const remainingFilesCount = imgArr.length;
//
//         // Update the text of the .count-uploaded-files element
//         $(".count-uploaded-files").html(`${remainingFilesCount} Uploaded files`);
//
//         // Update the global index variable
//         index = remainingFilesCount;
//     }
// }
//
// };
const deleteAction = (e) => {
    const deleteSpan = $(e.currentTarget).find('.delete-action');
    let dataIndex = deleteSpan.attr("data-index");
    if (dataIndex) {
        try {

            let index = $(e.currentTarget).closest(".js-single-img-preview").index();
            // console.log(index);
            index = parseInt(index);
            imgArr.splice(index, 1);
            $(e.currentTarget).closest(".js-single-img-preview").remove();
            updatePreviewCount();
        } catch (error) {

        }

    }

};


const updatePreviewCount = () => {
    const previewCount = $(".js-single-img-preview").length;
    var fileUploadKey = $("#fileUploadKey").val();
    $(".count-uploaded-files").html(`${previewCount} ${fileUploadKey}`);

    if (previewCount == 0) {
        $(".uploaded_tool").hide();
        $(".selected-result").addClass("d-none");
        $(".textEditor-submit").removeClass("d-none");

        $(".tool").show();
    }

};





const dragNDropScript = () => {
    $("html").on("dragover", function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    $("html").on("drop", function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
    $(".upload-area , .selected-result").on("dragenter", function (e) {
        e.stopPropagation();
        e.preventDefault();
    });
    $(".upload-area, .selected-result").on("dragleave", function (e) {
        e.stopPropagation();
        e.preventDefault();
    });

    // Drag over
    $(".upload-area, .selected-result").on("dragover", function (e) {
        e.stopPropagation();
        e.preventDefault();
    });
    // Drop
    $(".upload-area, .selected-result").on("drop", function (e) {
        e.stopPropagation();
        e.preventDefault();
        if (check_adblocker()) {
            return;
        }
        let files = e.originalEvent.dataTransfer.files;
        let filesLength = IS_PREMIUM == 1 ? 50 : 3;
        if (TOOL_NAME == "JPGTOJPG") {
            filesLength = 1;
        }
        let currentUploadedCount = ($(".js-single-img-preview").length);
        if ((files.length + currentUploadedCount) > filesLength && TOOL_NAME != 'JPGTOPDF') {
            $("#error_image").attr('src', limitExcedImgUrl);
            $("#error_title").text($("#limitExcedErrorTitle").val());
            if (IS_PREMIUM) {
                $("#error_detail").text($("#limitExcedPremiumErrorDetail").val());
            } else {
                $("#error_detail").text($("#limitExcedErrorDetail").val());
            }
            $(".error-footer").addClass("d-none");
            $(".ignore-premium").removeClass("d-none");
            $("#error_modal").css({ display: 'block' });
            // alert(`Maximum ${filesLength} Images Allow`);
            // $("#limitExceedModal").show();
            var remaining_files = filesLength - imgArr.length;
            if (remaining_files > 0) {
                const limitedFiles = Object.values(files).slice(0, remaining_files);
                appendFilesToArray(limitedFiles);
            }
            $(e.target).val("");
            return;
        }
        appendFilesToArray(Object.values(files));
    });
};


const getPasteImage = (e) => {
    if ($(e.target).is("#url") || $(e.target).is("#show_link_url") || $(e.target).is(".center-preview-file-uploadIcon")) {
        // If it does, do nothing and return
        return;
    }

    if (TOOL_NAME == "JPGTOJPG" && (!$('.loader-container').hasClass('d-none') || $('.tool-image-translator').hasClass('result-fetched'))) {
        return;
    }

    if (check_adblocker()) {
        $(e.target).val("");
        return false;
    }
    let pasteImgArr = [];
    for (var i = 0; i < e.clipboardData.items.length; i++) {
        var clipboardItem = e.clipboardData.items[i];
        var type = clipboardItem.type;
        // console.log(type)
        if (
            type.indexOf("image") != -1 ||
            type.indexOf("application/pdf") != -1 || type.indexOf("text/plain") != -1 || type.indexOf("application/msword") != -1
        ) {
            var file = clipboardItem.getAsFile();

            fileType = file.type;
            if (TOOL_NAME === "PDFTOWORD") {
                if (type.indexOf("application/pdf") === -1) {
                    alert("File type not allow");
                    return false;
                }
            } else if (TOOL_NAME === "PDFTOTEXT") {
                if (type.indexOf("application/pdf") === -1) {
                    alert("File type not allow");
                    return false;
                }
            } else if (TOOL_NAME === "WORDTOTEXT") {
                if (type.indexOf("application/msword") === -1 && type.indexOf("application/vnd.openxmlformats-officedocument.wordprocessingml.document") === -1) {
                    alert("File type not allow");
                    return false;
                }
            }
            else if (TOOL_NAME === "TEXTTOWORD" || TOOL_NAME === "TEXTTOPDF") {
                if (type.indexOf("text/plain") === -1) {
                    alert("File type not allow");
                    return false;
                }
            }
            else {
                if (!validImageTypes.includes(fileType)) {
                    alert("File type not allow");
                    return false;
                }
            }

            pasteImgArr.push(file);
        } else {
            // console.log("Not supported: " + type);
            // alert("Not supported");

        }
    }
    let already_select_imgs = imgArr.length;
    let filesLength = IS_PREMIUM == 1 ? 50 : 3;
    if (TOOL_NAME == "JPGTOJPG") {
        filesLength = 1;
    }
    if ((pasteImgArr.length + already_select_imgs) > filesLength && TOOL_NAME != 'JPGTOPDF') {
        $("#error_image").attr('src', limitExcedImgUrl);
        $("#error_title").text($("#limitExcedErrorTitle").val());
        if (IS_PREMIUM) {
            $("#error_detail").text($("#limitExcedPremiumErrorDetail").val());
        } else {
            $("#error_detail").text($("#limitExcedErrorDetail").val());
        }
        $(".error-footer").addClass("d-none");
        $(".ignore-premium").removeClass("d-none");
        $("#error_modal").css({ display: 'block' });
        let filesLength = IS_PREMIUM == 1 ? 50 : 3;
        if (TOOL_NAME == "JPGTOJPG") {
            filesLength = 1;
        }

        var remaining_files = filesLength - already_select_imgs;
        if (remaining_files > 0) {
            const limitedFiles = Object.values(pasteImgArr).slice(0, remaining_files);
            appendFilesToArray(limitedFiles);
        }
        $(e.target).val("");
        return;
    }
    appendFilesToArray(pasteImgArr.slice(0, 3));
};

const check_adblocker = (e) => {
    return false;
    if (IS_PREMIUM == 1) {
        return false;
    }
    if (ENV != "production") {
        return false;
    }
    if (detectadsbocker == true) {
        $(".ad_blocker").css("display", "flex");
        return true;
    } else {
        return false;
    }
};

const toggle_menubar = (e) => {
    $(".mobile-nav-dropdown").slideToggle();
};

$(document).on('click', function (e) {

    if ($(e.target).closest('.mobile-nav-dropdown').length && !$(e.target).closest('.lang-dropdown-click').length) {
        // If not inside, slide up the .mobile-nav-dropdown
        $(".mobile-nav-dropdown").slideUp();
    }
});


const toggleDropdown = () => {
    $(".dropdown-content").toggleClass("active");
};

const accountToggleDropdown = () => {
    $(".account-dropdown-content").toggleClass("active");
};
const updateTimer = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    // Calculate the remaining time until midnight (12:00 AM)
    const remainingHours = 23 - hours;
    const remainingMinutes = 59 - minutes;
    const remainingSeconds = 59 - seconds;
    updateFlipCard("hours-tens", Math.floor(remainingHours / 10));
    updateFlipCard("hours-ones", remainingHours % 10);
    updateFlipCard("minutes-tens", Math.floor(remainingMinutes / 10));
    updateFlipCard("minutes-ones", remainingMinutes % 10);
    updateFlipCard("seconds-tens", Math.floor(remainingSeconds / 10));
    updateFlipCard("seconds-ones", remainingSeconds % 10);
}

const updateFlipCard = (id, value) => {
    const nextValue = (value + 1) % 10;
    const element = $("#" + id);
    const elementNext = $("#" + id + "-next");
    elementNext.text(nextValue);
    element.addClass("flip");
    setTimeout(function () {
        element.text(value);
        elementNext.text(nextValue);
    }, 500);
}

// Handle close button click
$('.close_feed_modal').click(function () {
    // Close the feedback modal
    $("#feedbackModal").css({
        display: 'none'
    });
    // Clear the textarea inside the modal
    $('#feedbackTextarea').val('');
    // Remove active class from emoji div
    $(".emoji , main-emoji").removeClass("active");
});
// Handle close button click
$('.close_feed_success_modal_btn').click(function () {
    // Close the feedback modal
    $("#feedbackSuccessModal").css({
        display: 'none'
    });
});


// emojis feedback--------------------------------------

$('.main-emoji').click(function () {
    const emojiId = $(this).data("id");
    $(".main-emoji").removeClass("active");
    // Remove whitespaces from the textarea inside the modal
    $('#feedbackTextarea').val($('#feedbackTextarea').val().trim());
    // Add active class to the clicked emoji
    $(this).addClass("active");
    $('.emoji[data-id="' + emojiId + '"]').addClass("active");

    // If data-id is not 5, open the feedback modal
    $("#feedbackModal").css({
        display: 'block'
    });

});

// Handle submit button click inside the modal
$('#submit_feedback').click(function () {
    const feedbackText = $('#feedbackTextarea').val();
    const activeEmoji = $(".main-emoji.active").data("id");

    // Check if an emoji is selected
    if (activeEmoji) {
        // Send the rating and feedback through AJAX
        sendRating(activeEmoji, feedbackText);

    } else {
        alert("add rating before submitting.");
    }
});

// Function to send rating through AJAX
function sendRating(rating, feedbackText = null) {
    // Make an AJAX request to send rating
    // Get the CSRF token from the meta tag
    const csrfToken = $('meta[name="_token"]').attr('content');
    $.ajax({
        url: '/submit-rating',
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': csrfToken
        },
        data: { rating: rating, feedback: feedbackText },
        success: function (response) {
            // Close the feedback modal on success
            $("#feedbackModal").css({
                display: 'none'
            });
            // Clear the textarea inside the modal
            $('#feedbackTextarea').val('');
            // Remove active class from emoji div
            $(".emoji , main-emoji").removeClass("active");

            $("#feedbackSuccessModal").css({
                display: 'block'
            });
            $('.feedback-section').fadeOut();
        
        },
        error: function (error) {
            console.error('Error submitting rating:', error);
        }
    });
}


function decodeHTMLEntities(text) {
    var doc = new DOMParser().parseFromString(text, 'text/html');
    return doc.body.textContent || "";
}


$(document).on("click", ".js-single-img-preview .zoom-img", function () {
    // Get the image source
    var imgSrc = $(this).find("img").attr("src");

    // Create modal overlay and image container
    var modal = $("<div class='modal-overlay'></div>");
    var imgContainer = $("<div class='modal-img-container'></div>");

    // Create image element
    var imgElement = $("<img src='" + imgSrc + "' alt='zoomed image'>");

    // Append image to container
    imgContainer.append(imgElement);

    // Append container to modal
    modal.append(imgContainer);

    // Append modal to body
    $("body").append(modal);

    // Close modal when clicking outside the image
    modal.on("click", function (e) {
        if ($(e.target).hasClass("modal-overlay")) {
            modal.remove();
        }
    });
});

const showLightBox = (e) => {
    console.log('show image ');
    const imageSrc = $(e.currentTarget).attr("src");
    const lightbox = $("<div id='lightbox'>").appendTo("body");
    const lightboxImage = $("<img>").attr("src", imageSrc).appendTo(lightbox);
    $(document).on("click", "#lightbox", function () {
        $(this).remove();
    });
}
$(document).on('click', ".preview-img-translator", showLightBox);
