// application/pdf
// var validImageTypes = ["application/pdf"];
var CAPTCHA_TOKEN = '';
$(document).on("click", ".js-download-all", (e) => {
    var zip = new JSZip();

    $(".js-single-img-preview").each(function (index, element) {
        let textarea = $(element).find(".center-preview-file-uploadIcon")[0];
        let hasDiv = $(textarea).find("div").length > 0;
        let ext;
        if (!hasDiv) {
            let text = textarea.value;
            if (TOOL_NAME === "JPGTOWORD" || TOOL_NAME === "PDFTOWORD") {
                ext = ".doc";
            } else {
                ext = ".txt";

            }
            let file_name = "file" + (index + 1) + ext;

            zip.file(file_name, text);
        }
    });

    zip.generateAsync({ type: "blob" }).then(function (blob) {
        var url = URL.createObjectURL(blob);
        var link = document.createElement("a");
        link.href = url;
        link.download = "files.zip";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    });
});

$(document).on('click', '.js-single-result-copy', function () {
    var textarea = $(this).closest('.center-preview').find('.center-preview-file-uploadIcon')[0];
    var text = textarea.value;

    var textArea = document.createElement('textarea');
    textArea.style.width = "1px";
    textArea.style.height = "1px";
    textArea.style.background = "transparent";
    textArea.value = text;

    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    $(this).addClass('active');
    $(this).find("label").text($("#copiedBtnLabel").val());

    setTimeout(() => {
        $(this).find("label").text($("#copyBtnLabel").val());
        $(this).removeClass('active');
    }, 2000);
});


$(document).on('click', '.js-single-result-download', function () {
    var index_click_result = $(".js-single-result-download").index(this);
    var textarea = $(this).closest('.center-preview').find('.center-preview-file-uploadIcon')[0];
    var text = textarea.value;
    var blob;
    if (TOOL_NAME === "JPGTOWORD" || TOOL_NAME === "PDFTOWORD") {
        blob = new Blob([text], { type: 'application/msword' });
    } else {
        blob = new Blob([text], { type: "text/plain;charset=utf-8" })

    }
    var url = URL.createObjectURL(blob);
    var divName = document.getElementsByClassName('full-name')[index_click_result];

    var downloadLink = document.createElement("a");
    downloadLink.href = url;
    if (TOOL_NAME === "JPGTOWORD" || TOOL_NAME === "PDFTOWORD") {
        downloadLink.download = `${divName.innerText}.doc`;
    } else {
        downloadLink.download = `${divName.innerText}.txt`;

    }
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});

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
        margin: "10px 5px",
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

    wrap.addEventListener("click", () => {
        with_cloudflare_captcha(false, (Date.now() / 1000), captchaVerify, 'light', '#captcha', {
            language: $('#captcha').data('language'),
        });
    });

    function shadowMainFunction() {
        if (imgArr.length == 0) {
            return;
        }
        let originalIndices = [];
        $(".js-single-img-preview").each(function (index) {
            const originalIndex = index.toString(); // Convert index to string
            const file_name = $(this).find(".full-name").text(); // Extract file name
            const file_img = $(this).find(".left-preview-img"); // Extract file name
            // console.log(file_img);
            file_img.html(`<img src="${BASE_URL}web_assets/frontend/img/text-img-png.png" alt="uploaded image">`);
            originalIndices.push({ index, originalIndex, file_name });
        });
        //
        // $(".multiple-select-result").empty();
        // $(".multiple-img-preview").empty();
        // let copyImgSrc = `${BASE_URL}web_assets/frontend/img/icon/single-copy-icon.svg`;
        // let downloadImgSrc = `${BASE_URL}web_assets/frontend/img/icon/single-download-icon.svg`;
        let copyImgSrc = `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 -6 44 44" fill="none">
  <circle cx="22" cy="22" r="18" fill="#F7F7FC"/>
  <path d="M17.8285 18C17.8285 16.1222 19.3507 14.6 21.2285 14.6H23.1432H24.9809C25.3522 14.6 25.7083 14.7475 25.9708 15.0101L26.1356 15.1749L29.0395 18.4014C29.2709 18.6585 29.3989 18.9921 29.3989 19.338V21.6175V23.5321C29.3989 25.4099 27.8767 26.9321 25.9989 26.9321H21.2285C19.3507 26.9321 17.8285 25.4099 17.8285 23.5321V18Z" fill="#F7F7FC" stroke="#0D1120" stroke-width="1.2" stroke-linejoin="round"/>
  <path d="M26.9497 26.7704V27.7585C26.9497 29.4153 25.6066 30.7585 23.9497 30.7585H18C15.7909 30.7585 14 28.9676 14 26.7585V20.047C14 18.3901 15.3431 17.047 17 17.047H17.9881" stroke="#0D1120" stroke-width="1.2" stroke-linejoin="round"/>
  <path d="M24.666 14.7619V18.0941C24.666 19.1987 25.5614 20.0941 26.666 20.0941H29.2365" stroke="#0D1120" stroke-width="1.2" stroke-linejoin="round"/>
</svg>`;
        let downloadImgSrc = `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 6 44 44" fill="none">
  <circle cx="22" cy="22" r="18" fill="#F7F7FC"/>
  <path d="M26 18.2017C27.74 18.2113 28.6824 18.2889 29.2968 18.9033C30 19.6065 30 20.7377 30 23.0001V23.8001C30 26.0633 30 27.1945 29.2968 27.8977C28.5944 28.6001 27.4624 28.6001 25.2 28.6001H18.8C16.5376 28.6001 15.4056 28.6001 14.7032 27.8977C14 27.1937 14 26.0633 14 23.8001V23.0001C14 20.7377 14 19.6065 14.7032 18.9033C15.3176 18.2889 16.26 18.2113 18 18.2017" fill="#F7F7FC"/>
  <path d="M26 18.2017C27.74 18.2113 28.6824 18.2889 29.2968 18.9033C30 19.6065 30 20.7377 30 23.0001V23.8001C30 26.0633 30 27.1945 29.2968 27.8977C28.5944 28.6001 27.4624 28.6001 25.2 28.6001H18.8C16.5376 28.6001 15.4056 28.6001 14.7032 27.8977C14 27.1937 14 26.0633 14 23.8001V23.0001C14 20.7377 14 19.6065 14.7032 18.9033C15.3176 18.2889 16.26 18.2113 18 18.2017" stroke="#0D1120" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M21.9949 15V25.4V15ZM21.9949 25.4L18.7949 21.8L21.9949 25.4ZM21.9949 25.4L25.1949 21.8L21.9949 25.4Z" fill="#F7F7FC"/>
  <path d="M21.9949 15V25.4M21.9949 25.4L18.7949 21.8M21.9949 25.4L25.1949 21.8" stroke="#0D1120" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
        let downloadAllImgSrc = `${BASE_URL}web_assets/frontend/img/icon/download-all-icon.svg`;
        let PDFimg = `${BASE_URL}web_assets/frontend/img/text-img-png.png`;
        $("#jsShadowRoot").addClass('d-none');
        // $(".img_loader").removeClass("d-none");
        $(".restart_btn").addClass("d-none");
        window.scrollTo({
            top: 200,
            behavior: 'smooth',
        });
        let imgData = [];
        let totalResponses = 0; // Variable to track total responses received
        let totalImages = 0; // Initialize totalImages to 0

        originalIndices.sort((a, b) => parseInt(a.originalIndex) - parseInt(b.originalIndex));
        originalIndices.forEach(({ file_name }, index) => {
            const existingDiv = $(".js-single-img-preview").eq(index);
            // Select the element based on index

            if (existingDiv.length && existingDiv.find('.center-preview-file-bar').length > 0) {
                totalImages++;
            }
        });

        const ajaxCall = (data, count) => {
            $.ajaxSetup({
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="_token"]').attr("content"),
                },
            });
            $.ajax({
                type: "POST",
                url: BASE_URL + "text-to-word",
                timeout: 0,
                contentType: false,
                processData: false,
                mimeType: "multipart/form-data",
                data,
                beforeSend: function () {
                    // $('.multiple-img-preview').sortable('option', 'disabled', true);
                    $(".js-single-img-preview").css({
                        cursor: "default"
                    });
                    const targetDiv = $(`.js-single-img-preview[data-count="${count}"]`);
                    targetDiv.find('.loading-bar').show();
                    $(".response-getting").removeClass("d-none");
                    $(".response-getting").empty().prepend(
                        `<div class="response_getting">
                                        Extracting...
                        </div>`
                    );

                },
                success: function (response) {
                    if (response) {
                        response = JSON.parse(response);
                        const targetDiv = $(`.js-single-img-preview[data-count="${count}"]`);
                        targetDiv.find('.loading-bar').hide();
                        totalResponses++;
                        if (totalResponses === totalImages) {
                            $(".img_loader").addClass("d-none");
                            $(".restart_btn").removeClass("d-none");
                            $("#jsShadowRoot").removeClass('d-none');
                        }

                        if (response.error) {
                            if (IS_PREMIUM == 0) {
                                // startOver();
                            }
                        } else {
                            // let imgInfo = imgData.find((imgInfo) => imgInfo.count === count);
                            // if (imgInfo) {
                            const centerPreviewFileUploadIcon = targetDiv.find('.center-preview-file-uploadIcon');
                            centerPreviewFileUploadIcon.css({
                                color: '#252A3E',
                            });
                            let encodeText = `${response.text}`;
                            let html = decodeHTMLEntities(encodeText).replace(/<\/?[^>]+(>|$)/g, "");

                            if (typeof html !== 'string' || html.trim() === '') {
                                targetDiv.find('.center-preview-file-uploadIcon').html(
                                    `<div class="no-response-title">No Text Found</div>
                                            <div class="no-response-des">We could not find any text in this image.</div> `
                                );

                                targetDiv.css('border', '1px solid #DE1A1A');
                                targetDiv.find('.right-preview').html(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 44 44" fill="none">
  <circle cx="22" cy="22" r="22" fill="#FEEEEE"/>
  <path d="M22 20.8889V26.4444M22 32C20.6868 32 19.3864 31.7413 18.1732 31.2388C16.9599 30.7363 15.8575 29.9997 14.9289 29.0711C14.0003 28.1425 13.2638 27.0401 12.7612 25.8268C12.2587 24.6136 12 23.3132 12 22C12 20.6868 12.2587 19.3864 12.7612 18.1732C13.2638 16.9599 14.0003 15.8575 14.9289 14.9289C15.8575 14.0003 16.9599 13.2638 18.1732 12.7612C19.3864 12.2587 20.6868 12 22 12C24.6522 12 27.1957 13.0536 29.0711 14.9289C30.9464 16.8043 32 19.3478 32 22C32 24.6522 30.9464 27.1957 29.0711 29.0711C27.1957 30.9464 24.6522 32 22 32ZM22.0556 17.5556V17.6667H21.9444V17.5556H22.0556Z" stroke="#DE1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
                                targetDiv.find('.right-preview').css({
                                    top: "30px"
                                });
                            } else {
                                // Get the target element
                                var existingDiv = $(`.js-single-img-preview[data-count="${count}"]`);

                                existingDiv.find('.center-preview-file').remove();
                                var fullName = existingDiv.find(".full-name").text();
                                var maxCharacters = 20;
                                if (fullName.length > maxCharacters) {
                                    // Extract the first 20 characters
                                    var firstPart = fullName.substring(0, maxCharacters);
                                    // Extract the remaining characters after the first 20
                                    var remainingChars = fullName.substring(maxCharacters);
                                    // Initialize the truncated text with the first 20 characters
                                    var truncatedText = firstPart;
                                    // Iterate over the remaining characters, taking 10 characters at a time
                                    for (var i = 0; i < remainingChars.length; i += 10) {
                                        // Extract the next 10 characters
                                        var nextPart = remainingChars.substring(i, i + 10);
                                        // Extract the last 3 characters of the next 10 characters
                                        var lastChars = nextPart.slice(-3);
                                        // Add ellipsis and the last 3 characters to the truncated text
                                        truncatedText += '...' + lastChars;
                                    }
                                    existingDiv.find('.left-preview').append(`<p class="img-preview-name-after-append">${truncatedText}</p>`);
                                } else {
                                    // If the full name is shorter than the limit, display it as is
                                    existingDiv.find('.left-preview').append(`<p class="img-preview-name-after-append">${fullName}</p>`);
                                }

                                const targetElement = $(`.js-single-img-preview[data-count="${count}"] .center-preview-file-uploadIcon`);
                                const textareaElement = $('<textarea spellcheck="false" data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false" class="center-preview-file-uploadIcon"></textarea>');
                                // Remove line breaks and <br> tags from HTML content
                                // const removeFirstBr = html.replace(/^(<br\s*\/?>)?|(\r\n|\n|\r)+/gm, "");
                                // const cleanedHtml = removeFirstBr.replace(/(<br\s*\/?>|(\r\n|\n|\r))+/gm, "\n");
                                const cleanedHtml = html.replace(/<br\s*\/?>/gi, "\n").replace(/(?:\r\n|\r|\n)/g, "\n");
                                textareaElement.text(cleanedHtml);

                                targetElement.replaceWith(textareaElement);

                                textareaElement.css({
                                    fontSize: '16px',
                                    cursor: 'text',
                                    color: '#252A3E',
                                    border: 'none', // Remove borders
                                    resize: 'none', // Disable resizing
                                    height: '100%', // Make textarea take full height
                                    background: "#fafafa",
                                    borderRadius: "5px",
                                    padding: "10px",
                                    paddingRight: "50px"
                                    /* other styles if needed */
                                });
                                existingDiv.css({
                                    height: "120px",
                                    overflow: "hidden",
                                    padding: "10px 16px 10px 16px"
                                });
                                const textareaLines = textareaElement.val().split("\n").length;
                                if (textareaLines > 3) {
                                    existingDiv.css("height", textareaLines === 5 ? "135px" : "150px");
                                }
                                targetDiv.find('.center-preview').css({
                                    position: "relative"
                                });
                                targetDiv.find('.right-preview').css({
                                    flexDirection: "column",
                                    right: "10px",
                                    position: "absolute",
                                    gap: "0"
                                });
                                targetDiv.find('.right-preview').html(`<span class="d-flex align-items-center js-single-result-copy title-hover" style="width: 40px" data-title="Copy">${copyImgSrc}</span>` +
                                    `<span class="d-flex align-items-center js-single-result-download title-hover" style="width: 40px" data-title="Download">${downloadImgSrc}</span>`
                                );
                            }



                            // }

                            if (totalResponses === totalImages) {
                                $(".restart-btn").removeClass('d-none');
                                $(".response-getting").addClass("d-none");

                                $(".selected-result-head .heading").empty().text(
                                    "Your files have been converted"
                                );
                                $(".count-uploaded-files").empty().prepend(
                                    `<span class='js-download-all'><img src='${downloadAllImgSrc}' alt="download all" />` + $("#downloadAllBtnLabel").val() + `</span>`
                                );
                                $(".restart-btn").empty().prepend(
                                    `<a href="" class="restart_btn">
                                         <svg xmlns="http://www.w3.org/2000/svg" width="27" height="22" viewBox="0 0 27 22" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.56629 4.8139C6.75323 5.00083 7.01331 5.10649 7.27339 5.10649C7.5416 5.10649 7.79355 5.00083 7.98048 4.8139C9.23212 3.56226 10.8576 2.75763 12.6132 2.52193C14.3687 2.29436 16.1487 2.64385 17.6848 3.52975C19.2209 4.41565 20.4156 5.78107 21.0902 7.41471C21.6429 8.75575 21.8217 10.2106 21.6185 11.641L19.9767 9.99927C19.7898 9.81233 19.5297 9.70668 19.2696 9.70668C19.0014 9.70668 18.7495 9.81233 18.5625 9.99927C18.3756 10.1862 18.27 10.4463 18.27 10.7064C18.27 10.9746 18.3756 11.2265 18.5625 11.4135L21.7648 14.6157C21.9517 14.8026 22.2118 14.9083 22.4719 14.9083C22.7401 14.9083 22.9921 14.8026 23.179 14.6157L26.3812 11.4135C26.5682 11.2265 26.6738 10.9664 26.6738 10.7064C26.6738 10.4382 26.5682 10.1862 26.3812 9.99927C26.1943 9.81233 25.9342 9.70668 25.6741 9.70668C25.4059 9.70668 25.154 9.81233 24.967 9.99927L23.6991 11.2672C23.8211 9.69855 23.5691 8.12181 22.9595 6.65073C22.1143 4.60259 20.6107 2.8958 18.7007 1.79045C16.7826 0.685109 14.5557 0.238099 12.3612 0.53069C10.1668 0.823281 8.12678 1.82297 6.56629 3.39158C6.37936 3.57851 6.2737 3.8386 6.2737 4.09868C6.2737 4.36689 6.37936 4.61884 6.56629 4.8139ZM0.96642 12.0068C1.15335 12.1937 1.41344 12.2994 1.67352 12.2994C1.94173 12.2994 2.19368 12.1937 2.38061 12.0068L3.64851 10.7389C3.55911 11.8686 3.66476 13.0065 3.96548 14.1118C4.42063 15.8186 5.31465 17.371 6.55816 18.6145C8.44375 20.5001 11.0039 21.5566 13.6698 21.5566C16.3356 21.5566 18.8958 20.5001 20.7814 18.6145C20.9683 18.4275 21.074 18.1674 21.074 17.9074C21.074 17.6392 20.9683 17.3872 20.7814 17.2003C20.5944 17.0133 20.3343 16.9077 20.0743 16.9077C19.8061 16.9077 19.5541 17.0133 19.3672 17.2003C18.1155 18.4519 16.49 19.2565 14.7345 19.4922C12.9789 19.7198 11.199 19.3703 9.66288 18.4844C8.12678 17.5985 6.93203 16.2331 6.25745 14.5995C5.70478 13.2584 5.52597 11.8036 5.72916 10.3731L7.37092 12.0149C7.55785 12.2018 7.81793 12.3075 8.07802 12.3075C8.3381 12.3075 8.59818 12.2018 8.78511 12.0149C8.97205 11.828 9.0777 11.5679 9.0777 11.3078C9.0777 11.0396 8.97205 10.7876 8.78511 10.6007L5.58286 7.39846C5.39593 7.21152 5.13585 7.10587 4.87576 7.10587C4.60756 7.10587 4.35561 7.21152 4.16867 7.39846L0.96642 10.6007C0.779487 10.7876 0.673828 11.0477 0.673828 11.3078C0.673828 11.5679 0.779487 11.8198 0.96642 12.0068Z" fill="white"/>
</svg>   Start Over
                        </a>`
                                );

                            }
                            // if (
                            //     parseInt($(".result-div").length) ==
                            //     parseInt(imgArr.length)
                            // ) {
                            //     // startOver();
                            //     // hide_loader();
                            //     imgArr = [];
                            // }

                            // }
                        }
                    } else {
                        // startOver();
                    }
                    // $(".multiple-img-preview").empty().addClass("d-none");
                    // $(".selected-result").empty().addClass("d-none");
                    $("#jsShadowRoot").addClass("d-none");
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
                    $(".reset-btn").show();
                },
            });
        };

        let count = parseInt(localStorage.getItem('imageCount')) || 0;

        if (imgArr.length) {
            if ($("#jsZipScript").length == 0) {
                var s = document.createElement("script");
                s.type = "text/javascript";
                s.src =
                    "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.5.0/jszip.min.js";
                s.async = true;
                s.defer = true;
                s.setAttribute("id", "jsZipScript");
                $("body").append(s);
            }
            originalIndices.sort((a, b) => parseInt(a.originalIndex) - parseInt(b.originalIndex));
            // let imageURLs = [];
            originalIndices.forEach(({ file_name }, index) => {
                // Append new div
                const file = imgArr.find((item) => item.name.startsWith(file_name));
                // let fileName = file.name;
                // if (fileName.length > 10) {
                //     fileName = fileName.substr(0, 10);
                // }
                // let fileSize = (file.size / 1000000).toFixed(2);


                const existingDiv = $(".js-single-img-preview").eq(index);

                if (existingDiv.length && existingDiv.find('.center-preview-file-bar').length > 0) {
                    let data = new FormData();
                    existingDiv.attr("data-count", count);
                    data.append("imgArr", file);
                    data.append("count", count);
                    data.append("req_key", CAPTCHA_TOKEN);
                    let img_drag = `${BASE_URL}web_assets/frontend/img/drag.svg`;
                    let imageURL = PDFimg; // Create a URL for the image
                    // imageURLs.push(imageURL);
                    // Update existing div
                    // existingDiv.find('.left-preview-img').html(`<img src="${imageURL}">`);
                    $(".multiple-img-preview").css({
                        margin: 0
                    }); existingDiv.css({
                        margin: "0 5px"
                    });
                    existingDiv.find('.center-preview-file-bar').remove();
                    existingDiv.find('.center-preview-file-uploadIcon').html(
                        `<div class="progress2 progress-moved">` +
                        `<div class="progress-bar2"></div>` +
                        `</div>` +
                        `<div class="percentage"><span>0%</span> Converted </div>`
                    );
                    existingDiv.find('.left-preview-img-drag').remove();
                    let progress = 0;
                    const progressBar = $(".progress-bar2");
                    const percentageElement = $(".percentage span");

                    // Update the width of the progress bar and the text of the percentage
                    function updateProgress() {
                        progressBar.css("width", `${progress}%`);
                        percentageElement.text(`${progress}%`);
                    }

                    // Increase the progress every second until it reaches 100%
                    const intervalId = setInterval(() => {
                        if (progress < 99) {
                            progress += 1;
                            updateProgress();
                        } else {
                            clearInterval(intervalId);
                        }
                    }, 23000 / 99);

                    // $('.multiple-img-preview').disableSelection();

                    // imgData.push({imageURL, count, data});
                    ajaxCall(data, count); // Send the FormData, the associated image URL, and the count
                    count++;
                    localStorage.setItem('imageCount', count);
                }


                // Append the new div
                // $(".multiple-img-preview").append(
                //     `<div class="js-single-img-preview" data-index="${index}" style="min-height: 120px ; max-height: 120px">` +
                //     `<div class="left-preview">` +
                //     `<div class="left-preview-img">` +
                //     `<img src="${imageURL}">` +
                //     `</div>` +
                //     `</div>` +
                //     `<div class="center-preview" style="position:relative;">` +
                //     `<div class="center-preview-inner">` +
                //     `<div class="center-preview-file">` +
                //     `<p class="img-preview-name">${fileName}</p>` +
                //     `<span class="img-preview-size">(${fileSize} MB)</span>` +
                //     `</div>` +
                //     `<div class="center-preview-file-uploadIcon" contenteditable="false">` +
                //     ` <div class="progress2 progress-moved">` +
                //     `<div class="progress-bar2"></div>` +
                //     `</div>` +
                //     `<div class="percentage"><span>0%</span> Converted </div>` +
                //     `</div>` +
                //     `</div>` +
                //     `<div class="right-preview" style="flex-direction: column;right: 10px; position: absolute">` +
                //     `<span class="d-flex align-items-center js-single-result-copy disabled title-hover" style="width: 40px" data-title="Copy">${copyImgSrc}</span>` +
                //     `<span class="d-flex align-items-center js-single-result-download disabled title-hover" style="width: 40px" data-title="Download">${downloadImgSrc}</span>` +
                //     `</div>` +
                //     `</div>` +
                //     `</div>`
                // );

                // Assuming you have a variable `progress` representing the progress percentage

            })
        }

    }
    
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
                    shadowMainFunction();
                } else {
                    alert('Invalid Captcha!')
                }
            }
        })
    }

    shadowRoot.appendChild(wrap);
};

addShadowRootElement();

