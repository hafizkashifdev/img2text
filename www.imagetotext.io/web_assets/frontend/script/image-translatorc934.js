// Sample languages array for targetLang
// Sample languages array for targetLang
var languages = [
    { name: 'Afrikaans', value: 'af' },
    { name: 'Albanian', value: 'sq' },
    { name: 'Arabic', value: 'ar' },
    { name: 'Azerbaijani', value: 'az' },
    { name: 'Basque', value: 'eu' },
    { name: 'Belarusian', value: 'be' },
    { name: 'Bengali', value: 'bn' },
    { name: 'Bosnian', value: 'bs' },
    { name: 'Bulgarian', value: 'bg' },
    { name: 'Catalan', value: 'ca' },
    { name: 'Cebuano', value: 'ceb' },
    { name: 'Chinese', value: 'zh-CN' },
    { name: 'Chinese (Traditional)', value: 'zh-TW' },
    { name: 'Corsican', value: 'co' },
    { name: 'Croatian', value: 'hr' },
    { name: 'Czech', value: 'cs' },
    { name: 'Danish', value: 'da' },
    { name: 'Dutch', value: 'nl' },
    { name: 'English', value: 'en' },
    { name: 'Esperanto', value: 'eo' },
    { name: 'Estonian', value: 'et' },
    { name: 'Finnish', value: 'fi' },
    { name: 'French', value: 'fr' },
    { name: 'Frisian', value: 'fy' },
    { name: 'Galician', value: 'gl' },
    { name: 'Georgian', value: 'ka' },
    { name: 'German', value: 'de' },
    { name: 'Greek', value: 'el' },
    { name: 'Gujarati', value: 'gu' },
    { name: 'Haitian Creole', value: 'ht' },
    { name: 'Hausa', value: 'ha' },
    { name: 'Hawaiian', value: 'haw' },
    { name: 'Hebrew', value: 'he' },
    { name: 'Hindi', value: 'hi' },
    { name: 'Hmong', value: 'hmn' },
    { name: 'Hungarian', value: 'hu' },
    { name: 'Icelandic', value: 'is' },
    { name: 'Igbo', value: 'ig' },
    { name: 'Indonesian', value: 'id' },
    { name: 'Irish', value: 'ga' },
    { name: 'Italian', value: 'it' },
    { name: 'Japanese', value: 'ja' },
    { name: 'Javanese', value: 'jv' },
    { name: 'Kannada', value: 'kn' },
    { name: 'Kazakh', value: 'kk' },
    { name: 'Khmer', value: 'km' },
    { name: 'Kinyarwanda', value: 'rw' },
    { name: 'Korean', value: 'ko' },
    { name: 'Kurdish', value: 'ku' },
    { name: 'Kyrgyz', value: 'ky' },
    { name: 'Lao', value: 'lo' },
    { name: 'Latin', value: 'la' },
    { name: 'Latvian', value: 'lv' },
    { name: 'Lithuanian', value: 'lt' },
    { name: 'Luxembourgish', value: 'lb' },
    { name: 'Macedonian', value: 'mk' },
    { name: 'Malagasy', value: 'mg' },
    { name: 'Malay', value: 'ms' },
    { name: 'Malayalam', value: 'ml' },
    { name: 'Maltese', value: 'mt' },
    { name: 'Maori', value: 'mi' },
    { name: 'Marathi', value: 'mr' },
    { name: 'Mongolian', value: 'mn' },
    { name: 'Myanmar', value: 'my' },
    { name: 'Nepali', value: 'ne' },
    { name: 'Norwegian', value: 'no' },
    { name: 'Nyanja', value: 'ny' },
    { name: 'Odia', value: 'or' },
    { name: 'Pashto', value: 'ps' },
    { name: 'Persian', value: 'fa' },
    { name: 'Polish', value: 'pl' },
    { name: 'Portuguese', value: 'pt' },
    { name: 'Punjabi', value: 'pa' },
    { name: 'Romanian', value: 'ro' },
    { name: 'Russian', value: 'ru' },
    { name: 'Samoan', value: 'sm' },
    { name: 'Scots Gaelic', value: 'gd' },
    { name: 'Serbian', value: 'sr' },
    { name: 'Sesotho', value: 'st' },
    { name: 'Shona', value: 'sn' },
    { name: 'Sindhi', value: 'sd' },
    { name: 'Slovak', value: 'sk' },
    { name: 'Slovenian', value: 'sl' },
    { name: 'Somali', value: 'so' },
    { name: 'Spanish', value: 'es' },
    { name: 'Sundanese', value: 'su' },
    { name: 'Swahili', value: 'sw' },
    { name: 'Swedish', value: 'sv' },
    { name: 'Tagalog', value: 'tl' },
    { name: 'Tajik', value: 'tg' },
    { name: 'Tamil', value: 'ta' },
    { name: 'Tatar', value: 'tt' },
    { name: 'Telugu', value: 'te' },
    { name: 'Thai', value: 'th' },
    { name: 'Turkish', value: 'tr' },
    { name: 'Turkmen', value: 'tk' },
    { name: 'Ukrainian', value: 'uk' },
    { name: 'Urdu', value: 'ur' },
    { name: 'Uyghur', value: 'ug' },
    { name: 'Uzbek', value: 'uz' },
    { name: 'Vietnamese', value: 'vi' },
    { name: 'Welsh', value: 'cy' },
    { name: 'Xhosa', value: 'xh' },
    { name: 'Yiddish', value: 'yi' },
    { name: 'Yoruba', value: 'yo' },
    { name: 'Zulu', value: 'zu' },
    // Add more languages as needed
];
var wrapEle;

var Sourcelanguages = [
    { name: 'English', value: 'en' },
    { name: 'Chinese', value: 'ch' },
    { name: 'French', value: 'french' },
    { name: 'German', value: 'german' },
    { name: 'Korean', value: 'korean' },
    { name: 'Japanese', value: 'japanese' },
    { name: 'Russian', value: 'ru' },
    // Add more languages as needed
];

var CAPTCHA_TOKEN = '';

// Function to dynamically add language options to the dropdown
function addLangOptionsToDropdown(options, targetId, langArray) {
    var langOptionsDiv = $('#' + targetId + 'Options');
    langOptionsDiv.empty(); // Clear existing options
    // Filter language options based on search input
    var searchValue = $('#' + targetId + 'Search').val().toLowerCase();
    var filteredOptions = options.filter(function (lang) {
        return lang.name.toLowerCase().includes(searchValue);
    });
    $.each(filteredOptions, function (index, option) {
        var langOption = $('<div class="lang-option" data-value="' + option.value + '">' +
            '<span class="lang-name">' + option.name + '</span>' +
            '<span class="lang-icon" style="display: ' + ($('#' + targetId).val() === option.value ? 'inline-block' : 'none') + '">' + getLangIconSVG() + '</span>' +
            '</div>');
        // Add 'selected' class if the language is selected
        if ($('#' + targetId).val() === option.value) {
            langOption.addClass('selected');
        }
        langOption.on('click', function () {
            selectLang(option.value, targetId);
            // Remove 'selected' class from other options and add to the clicked option
            langOptionsDiv.find('.lang-option').removeClass('selected');
            $(this).addClass('selected');

            // Hide all icons and show the icon for the clicked option
            langOptionsDiv.find('.lang-icon').hide();
            $(this).find('.lang-icon').show();
            $('#' + targetId + 'Dropdown').hide();
        });

        langOptionsDiv.append(langOption);
    });
}

// Add default options to sourceLang and targetLang
$(document).ready(function () {
    var defaultLangValue = 'en';
    var secondaryLangValue = 'es';

    if (TOOL_LANG != 'en' && Sourcelanguages.find(o => o.value === TOOL_LANG)) {
        secondaryLangValue = TOOL_LANG;
    }

    // Set default options for sourceLang
    $('#sourceLang').append($('<option>', {
        value: defaultLangValue,
        text: getLanguageName(defaultLangValue, Sourcelanguages),
    }));
    $('#sourceLang').val(defaultLangValue);

    // Set default options for targetLang
    $('#targetLang').append($('<option>', {
        value: secondaryLangValue,
        text: getLanguageName(secondaryLangValue, languages),
    }));
    $('#targetLang').val(secondaryLangValue);

    // Highlight default language in the dropdown
    $('#sourceLangOptions').find('.lang-option[data-value="' + defaultLangValue + '"]').addClass('selected');
    $('#targetLangOptions').find('.lang-option[data-value="' + secondaryLangValue + '"]').addClass('selected');

    // Show the selected language icon in the dropdown
    $('#sourceLangOptions').find('.lang-option[data-value="' + defaultLangValue + '"] .lang-icon').show();
    $('#targetLangOptions').find('.lang-option[data-value="' + secondaryLangValue + '"] .lang-icon').show();
});

// Function to show language dropdown on click
function showLangDropdown(targetId) {
    var langDropdown = $('#' + targetId + 'Dropdown');
    var langSearch = $('#' + targetId + 'Search');

    // Hide the opposite dropdown
    var oppositeId = targetId === 'sourceLang' ? 'targetLang' : 'sourceLang';
    $('#' + oppositeId + 'Dropdown').hide();

    langDropdown.show();
    langSearch.focus();

    // Filter language options based on the opposite dropdown's selected option
    var oppositeValue = $('#' + oppositeId).val();
    var filteredLanguages = targetId === 'sourceLang' ? Sourcelanguages : languages;

    // Exclude the opposite selected language
    filteredLanguages = filteredLanguages.filter(function (lang) {
        return lang.value !== oppositeValue;
    });

    addLangOptionsToDropdown(filteredLanguages, targetId);

    $(document).on('click', function (e) {
        if (
            !$(e.target).closest('#' + targetId + 'Dropdown').length &&
            !$(e.target).is('.lang-select') &&
            !$(e.target).closest('.lang-dropdown').length
        ) {
            $('#' + targetId + 'Dropdown').hide();
        }
    });
}


// Filter language options based on search input
$('#sourceLangSearch, #targetLangSearch').on('input', function () {
    var sourceLangDropdown = $('#sourceLangDropdown');
    var targetLangDropdown = $('#targetLangDropdown');

    if (sourceLangDropdown.is(':visible')) {
        addLangOptionsToDropdown(Sourcelanguages, 'sourceLang', Sourcelanguages);
    } else if (targetLangDropdown.is(':visible')) {
        addLangOptionsToDropdown(languages, 'targetLang', languages);
    }
});

// Prevent the click on the dropdown from closing it
$('#sourceLangDropdown, #targetLangDropdown').on('click', function (e) {
    e.stopPropagation();
});
function getLangIconSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">' +
        '<rect width="12" height="12" rx="6" fill="#0984E3"/>' +
        '<path d="M3 6L4.73333 8L9 4" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>' +
        '</svg>';
}

// Function to handle language selection
function selectLang(langValue, targetId) {
    $('#' + targetId + ' option:selected').remove();
    var langArray = targetId === 'sourceLang' ? Sourcelanguages : languages;

    // Check if the selected language already exists in the dropdown
    var existingOption = $('#' + targetId + ' option[value="' + langValue + '"]');
    if (!existingOption.length) {
        // If the option doesn't exist, add it to the select element
        $('#' + targetId).append($('<option>', {
            value: langValue,
            text: getLanguageName(langValue, langArray),
        }));
    }

    $('#' + targetId).val(langValue);
    $('#langDropdown').hide();
}

// Helper function to get the language name based on its value
function getLanguageName(langValue, langArray) {
    var selectedLang = langArray.find(function (lang) {
        return lang.value === langValue;
    });

    return selectedLang ? selectedLang.name : langValue;
}



// Prevent the click on the dropdown from closing it
$('#langDropdown').on('click', function (e) {
    e.stopPropagation();
});

let responseText = '';
let responseImg = '';
var submitExtract = $("#submitExtract").val();
const addShadowRootElement = (e) => {
    const shadowRoot = document.querySelector("#jsShadowRoot").attachShadow({
        mode: "closed",
    }); //closed
    const wrap = document.createElement("div");
    $(wrap).html(`<span>${submitExtract}</span>`);
    const style = {
        padding: "5px 14px",
        borderRadius: "8px",
        background: "#0984E3",
        fontSize: "14px",
        color: "white",
        width: "fit-content",
        margin: "5px auto",
        cursor: "pointer",
    };
    Object.assign(wrap.style, style);
    wrap.classList.add('below-tool-btn');
    // Add hover effect
    wrap.classList.add('hoverEffect');

    // Define the hover and active effects in CSS inside the shadow DOM
    const styleElement = document.createElement('style');
    styleElement.textContent = `
    .hoverEffect:hover {
        background-color: #4FABF1 !important;
    }
    .hoverEffect:active {
        background-color: #179AFF !important;
    }
`;
    shadowRoot.appendChild(styleElement);


    wrap.addEventListener("click", (e) => {
        const _this = $(e.currentTarget);
        if (_this.hasClass('converting')) {
            return;
        }
        _this.addClass('converting');
        _this.text("Translating...");
        if ($('#captcha').html().trim().length == 0)
            with_cloudflare_captcha(false, (Date.now() / 1000), captchaVerify, 'light', '#captcha', {
                language: $('#captcha').data('language'),
                wrapEle: _this
            });
    });
    shadowRoot.appendChild(wrap);



    function captchaVerify(captcha_1, captcha_2, body) {
        // $("#jsShadowRoot").addClass("d-none");
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
                    CAPTCHA_TOKEN = response.req_key;
                    wrapEle = body.wrapEle;
                    wrapEle.text("Translating...");
                    shadowMainFunction();
                } else {
                    alert('Invalid Captcha!')
                    $("#jsShadowRoot").removeClass("d-none");
                }
            }
        })
    }

    function shadowMainFunction() {
        if (imgArr.length == 0) {
            return;
        }
        $(".loader-container").removeClass("d-none");
        var sourceLangSelect = $('#sourceLang');
        var targetLangSelect = $('#targetLang');

        // Swap selected values
        var sourceLangValue = sourceLangSelect.val();
        var targetLangValue = targetLangSelect.val();
        let data = new FormData();
        data.append("file", imgArr[0]);
        data.append("slang", sourceLangValue);
        data.append("dlang", targetLangValue);
        data.append("req_key", CAPTCHA_TOKEN);
        $.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="_token"]').attr("content"),
            },
        });
        $.ajax({
            type: "POST",
            url: BASE_URL + "submit/image-translator",
            timeout: 0,
            contentType: false,
            processData: false,
            mimeType: "multipart/form-data",
            data,

            success: function (response) {
                $('#jsShadowRoot').removeClass('d-none');
                wrapEle.removeClass('converting');
                wrapEle.text('Submit Again');
                if (response) {
                    response = JSON.parse(response);
                    // Assuming the image data is in response.image
                    if (response.image) {
                        // Create an img element
                        var imgElement = $("<img>");

                        // Set the src attribute to the image data
                        imgElement.attr("class", 'preview-img-translator');
                        imgElement.attr("src", response.image);
                        responseImg = response.image;
                        responseText = response.text;
                        // Append the img element to the right div
                        $(".tool-div .right").html(imgElement);
                        $('.right').is(':hidden') ? $('.right').show() : '';
                        $('html, body').animate({
                            scrollTop: $('.tool_wrapper').offset().top - 30
                        }, 'slow');
                        // $('.lang-div').hide();
                        $('.tool-image-translator').addClass('result-fetched');
                    }
                    else {
                        // Handle the case when there is no response
                        // startOver();
                        $(".loader-container").addClass("d-none");
                        $("#jsShadowRoot").removeClass("d-none");
                    }
                } else {
                    // startOver();
                    $(".loader-container").addClass("d-none");
                }
                $(".export-btns").removeClass("d-none");
                $(".loader-container").addClass("d-none");
            },
            error: function (error) {
                $(".error-msg").show();
                // hide_loader();
                var errors = JSON.parse(error.responseText);
                if (errors) {
                    errorsHtml = "<ul>";
                    $.each(errors, function (i, item) {
                        errorsHtml += "<li>" + item + "</li>";
                    });
                    errorsHtml += "</ul>";
                    $(".error-msg").html(errorsHtml);
                    setTimeout(() => {
                        $(".error-msg").html("");
                    }, 2000);
                }
                $(".loader-container").addClass("d-none");
                $("#jsShadowRoot").removeClass("d-none");
            },
        });
    }
};

addShadowRootElement();


CSS.registerProperty({
    name: "--p",
    syntax: "<integer>",
    initialValue: 0,
    inherits: true,
});

function loadStartAgainPage() {
    // You can navigate to the start-again page here
    location.reload(true);
}

function downloadText() {

    // Create a Blob containing the text
    var blob = new Blob([responseText], { type: 'text/plain' });

    // Create a link element and trigger a click to download the file
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = 'extracted_text.txt';
    a.click();
}

function copyText() {
    // Create a Blob containing the text
    let copyText = $('.extract-text').data('copy'),
        copiedText = $('.extract-text').data('copied');

    var textarea = document.createElement("textarea");
    textarea.textContent = responseText;
    textarea.style.position = "fixed";
    textarea.style.opacity = 0;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    $('.extract-text span').text(copiedText);

    setTimeout(function () {
        $('.extract-text span').text(copyText);
    }, 2000)
}

function downloadImage() {

    // Create a link element and trigger a click to download the image
    var a = document.createElement('a');
    a.href = responseImg;
    a.download = 'downloaded_image.png';
    a.click();
}
