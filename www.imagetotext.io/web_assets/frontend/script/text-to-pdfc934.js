// application/pdf
// global variable initialization 
const downloadImgSrc = `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 6 44 44" fill="none">
<circle cx="22" cy="22" r="18" fill="#F7F7FC"/>
<path d="M26 18.2017C27.74 18.2113 28.6824 18.2889 29.2968 18.9033C30 19.6065 30 20.7377 30 23.0001V23.8001C30 26.0633 30 27.1945 29.2968 27.8977C28.5944 28.6001 27.4624 28.6001 25.2 28.6001H18.8C16.5376 28.6001 15.4056 28.6001 14.7032 27.8977C14 27.1937 14 26.0633 14 23.8001V23.0001C14 20.7377 14 19.6065 14.7032 18.9033C15.3176 18.2889 16.26 18.2113 18 18.2017" fill="#F7F7FC"/>
<path d="M26 18.2017C27.74 18.2113 28.6824 18.2889 29.2968 18.9033C30 19.6065 30 20.7377 30 23.0001V23.8001C30 26.0633 30 27.1945 29.2968 27.8977C28.5944 28.6001 27.4624 28.6001 25.2 28.6001H18.8C16.5376 28.6001 15.4056 28.6001 14.7032 27.8977C14 27.1937 14 26.0633 14 23.8001V23.0001C14 20.7377 14 19.6065 14.7032 18.9033C15.3176 18.2889 16.26 18.2113 18 18.2017" stroke="#0D1120" stroke-width="1.2" stroke-linecap="round"/>
<path d="M21.9949 15V25.4V15ZM21.9949 25.4L18.7949 21.8L21.9949 25.4ZM21.9949 25.4L25.1949 21.8L21.9949 25.4Z" fill="#F7F7FC"/>
<path d="M21.9949 15V25.4M21.9949 25.4L18.7949 21.8M21.9949 25.4L25.1949 21.8" stroke="#0D1120" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const startOverImgSrc = `<svg xmlns = "http://www.w3.org/2000/svg" width = "27" height = "22" viewBox = "0 0 27 22" fill = "none">  <path fill-rule="evenodd" clip - rule="evenodd" d = "M6.56629 4.8139C6.75323 5.00083 7.01331 5.10649 7.27339 5.10649C7.5416 5.10649 7.79355 5.00083 7.98048 4.8139C9.23212 3.56226 10.8576 2.75763 12.6132 2.52193C14.3687 2.29436 16.1487 2.64385 17.6848 3.52975C19.2209 4.41565 20.4156 5.78107 21.0902 7.41471C21.6429 8.75575 21.8217 10.2106 21.6185 11.641L19.9767 9.99927C19.7898 9.81233 19.5297 9.70668 19.2696 9.70668C19.0014 9.70668 18.7495 9.81233 18.5625 9.99927C18.3756 10.1862 18.27 10.4463 18.27 10.7064C18.27 10.9746 18.3756 11.2265 18.5625 11.4135L21.7648 14.6157C21.9517 14.8026 22.2118 14.9083 22.4719 14.9083C22.7401 14.9083 22.9921 14.8026 23.179 14.6157L26.3812 11.4135C26.5682 11.2265 26.6738 10.9664 26.6738 10.7064C26.6738 10.4382 26.5682 10.1862 26.3812 9.99927C26.1943 9.81233 25.9342 9.70668 25.6741 9.70668C25.4059 9.70668 25.154 9.81233 24.967 9.99927L23.6991 11.2672C23.8211 9.69855 23.5691 8.12181 22.9595 6.65073C22.1143 4.60259 20.6107 2.8958 18.7007 1.79045C16.7826 0.685109 14.5557 0.238099 12.3612 0.53069C10.1668 0.823281 8.12678 1.82297 6.56629 3.39158C6.37936 3.57851 6.2737 3.8386 6.2737 4.09868C6.2737 4.36689 6.37936 4.61884 6.56629 4.8139ZM0.96642 12.0068C1.15335 12.1937 1.41344 12.2994 1.67352 12.2994C1.94173 12.2994 2.19368 12.1937 2.38061 12.0068L3.64851 10.7389C3.55911 11.8686 3.66476 13.0065 3.96548 14.1118C4.42063 15.8186 5.31465 17.371 6.55816 18.6145C8.44375 20.5001 11.0039 21.5566 13.6698 21.5566C16.3356 21.5566 18.8958 20.5001 20.7814 18.6145C20.9683 18.4275 21.074 18.1674 21.074 17.9074C21.074 17.6392 20.9683 17.3872 20.7814 17.2003C20.5944 17.0133 20.3343 16.9077 20.0743 16.9077C19.8061 16.9077 19.5541 17.0133 19.3672 17.2003C18.1155 18.4519 16.49 19.2565 14.7345 19.4922C12.9789 19.7198 11.199 19.3703 9.66288 18.4844C8.12678 17.5985 6.93203 16.2331 6.25745 14.5995C5.70478 13.2584 5.52597 11.8036 5.72916 10.3731L7.37092 12.0149C7.55785 12.2018 7.81793 12.3075 8.07802 12.3075C8.3381 12.3075 8.59818 12.2018 8.78511 12.0149C8.97205 11.828 9.0777 11.5679 9.0777 11.3078C9.0777 11.0396 8.97205 10.7876 8.78511 10.6007L5.58286 7.39846C5.39593 7.21152 5.13585 7.10587 4.87576 7.10587C4.60756 7.10587 4.35561 7.21152 4.16867 7.39846L0.96642 10.6007C0.779487 10.7876 0.673828 11.0477 0.673828 11.3078C0.673828 11.5679 0.779487 11.8198 0.96642 12.0068Z" fill = "white" /></svg> `;
const downloadAllImgSrc = `${BASE_URL}web_assets/frontend/img/icon/download-all-icon.svg`;
const uploadedSvg = ` <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 24 17" fill="none">
<path d="M19.35 6.54C19.0141 4.83772 18.0976 3.30486 16.7571 2.20325C15.4165 1.10163 13.7351 0.499608 12 0.5C9.11 0.5 6.6 2.14 5.35 4.54C3.88023 4.69883 2.52101 5.39521 1.53349 6.49532C0.545971 7.59543 -0.000171702 9.02168 4.04928e-08 10.5C4.04928e-08 13.81 2.69 16.5 6 16.5H19C21.76 16.5 24 14.26 24 11.5C24 8.86 21.95 6.72 19.35 6.54ZM19 14.5H6C3.79 14.5 2 12.71 2 10.5C2 8.45 3.53 6.74 5.56 6.53L6.63 6.42L7.13 5.47C7.58988 4.57478 8.28787 3.82382 9.14712 3.29979C10.0064 2.77577 10.9936 2.49902 12 2.5C14.62 2.5 16.88 4.36 17.39 6.93L17.69 8.43L19.22 8.54C19.9717 8.59056 20.6764 8.92399 21.1922 9.47319C21.708 10.0224 21.9966 10.7466 22 11.5C22 13.15 20.65 14.5 19 14.5ZM10 10.68L7.91 8.59L6.5 10L10 13.5L16.01 7.49L14.6 6.08L10 10.68Z" fill="#02C24F"/>
</svg> `;

// var validImageTypes = ["application/pdf"];
const handleMutations = (mutationsList, observer) => {
    for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
            const addedNodes = Array.from(mutation.addedNodes);
            for (const node of addedNodes) {
                if (node instanceof HTMLElement && node.matches(".tox-notifications-container")) {
                    var d = document.querySelectorAll('.tox-notifications-container');
                    d.forEach(element => {
                        console.log(element);
                        element.style.removeProperty("display");
                    });
                    observer.disconnect();
                }
            }
        }
    }
}
function initializeTinyMCE(content = '') {
    tinymce.init({
        selector: "#tool",
        element_format: "html",
        menubar: true,
        autoresize_bottom_margin: 5,
        relative_urls: true,
        convert_urls: false,
        height: "400px",
        paste_as_text: false,
        setup: function (editor) {
            editor.on('init', function () {
                $(".tox-statusbar").css({
                    display: "none"
                });
                $(".tox-tinymce-aux").css({
                    display: "none"
                });
                const observer = new MutationObserver(handleMutations);
                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });

            });
            editor.on('drop', function (e) {
                e.preventDefault();

                // Get the dropped files
                const files = e.dataTransfer.files;

                // Process each dropped file
                for (let i = 0; i < files.length; i++) {
                    const file = files[i];

                    // Check if it's a text file
                    if (file.type.startsWith('text')) {
                        const reader = new FileReader();

                        reader.onload = function (event) {
                            // Set the content of the editor with the file's text content
                            editor.setContent(event.target.result);
                        };

                        // Read the file as text
                        reader.readAsText(file);
                    } else {
                        alert('Unsupported file type. Please drop a text file.');
                    }
                }
            });
            editor.on('input', function () {
                // Check if the editor content is empty
                const isEmpty = editor.getContent({ format: 'text' }).trim() === '';

                // Get a reference to the div you want to hide/show
                const toolUploadBtn = document.querySelector('.tool-upload-btn');

                // Show/hide the div based on whether the editor is empty or not
                if (isEmpty) {
                    toolUploadBtn.style.display = 'block';
                } else {
                    toolUploadBtn.style.display = 'none';
                }
            });
        },
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant"))
    });
}
document.addEventListener("DOMContentLoaded", function () {
    initializeTinyMCE();

    // Get a reference to the "Convert To Word" button
    const convertToWordBtn = document.querySelector('.textEditor-submit');

    // Add a click event listener to the button
    convertToWordBtn.addEventListener('click', function () {
        // Get the TinyMCE editor instance
        const editor = tinymce.get("tool");
        $(".deleteIt").addClass('d-none');
        $(".js-single-img-pdf").removeClass('d-none');

        // Get the content from the editor
        const editorContent = editor.getContent({ format: 'html' });

        if (editorContent !== '') {
            // Create a Blob from the content
            const blob = new Blob([editorContent], { type: 'text/html' });

            // Create a File object from the Blob
            const file = new File([blob], 'converted_text.html', { type: 'text/html' });

            // Hide the button after submission
            convertToWordBtn.style.display = 'none';
            // Call your appendFilesToArray function with the created file
            appedFilesChangeLayout([file]);
        } else {
            alert("write any text");
        }

    });
});
// Update the click event listener for js-single-img-pdf
$(document).ready(function () {
    $(document).on("click", ".js-single-img-pdf", (e) => {
        e.preventDefault
        const fileName = $(e.currentTarget).closest(".js-single-img-preview").find('.img-preview-name').data('orignal');
        const fileNameWithoutExt = fileName;
        let originalIndices = [];
        $(".js-single-img-preview").each(function (index) {
            const originalIndex = index.toString(); // Convert index to string
            const file_name = $(this).find(".img-preview-name").data('orignal'); // Extract file name
            originalIndices.push({ index, originalIndex, file_name });
        });
        originalIndices.sort((a, b) => parseInt(a.originalIndex) - parseInt(b.originalIndex));

        // Create a new array of sorted files using originalIndices
        const sortedImgArr = originalIndices.map(({ file_name }) => {
            return imgArr.find(item => item.name.startsWith(file_name));
        });

        // Find the correct index from originalIndices based on the file name
        const indexInfo = originalIndices.find(item => item.file_name === fileNameWithoutExt);

        if (indexInfo) {
            const sortedIndex = indexInfo.index;

            // Use the sorted index to get the file from sortedImgArr
            const file = sortedImgArr[sortedIndex];
            convertFileToHTML(file).then((htmlContent) => {
                var val = htmlToPdfmake(htmlContent);
                var dd = { content: val };
                pdfMake.createPdf(dd).download(fileNameWithoutExt + '.pdf');
            });

        } else {
            console.error('Index not found for the file:', fileNameWithoutExt);
        }
        $('.textEditor-submit').show();
    });
    $(document).on("click", ".js-download-all", (e) => {
        e.preventDefault(); // <-- Corrected function call
        $(".js-single-img-pdf").each(async function (index, el) {
            const fileName = $(el).closest(".js-single-img-preview").find('.img-preview-name').data('orignal');
            const fileNameWithoutExt = fileName;
            let originalIndices = [];
            const zip = new JSZip();
            $(".js-single-img-preview").each(function (index) {
                const originalIndex = index.toString(); // Convert index to string
                const file_name = $(this).find(".img-preview-name").data('orignal'); // Extract file name
                originalIndices.push({ index, originalIndex, file_name });
            });
            originalIndices.sort((a, b) => parseInt(a.originalIndex) - parseInt(b.originalIndex));

            // Create a new array of sorted files using originalIndices
            const sortedImgArr = originalIndices.map(({ file_name }) => {
                return imgArr.find(item => item.name.startsWith(file_name));
            });

            // Find the correct index from originalIndices based on the file name
            const indexInfo = originalIndices.find(item => item.file_name === fileNameWithoutExt);

            if (indexInfo) {
                const sortedIndex = indexInfo.index;

                // Use the sorted index to get the file from sortedImgArr
                const file = sortedImgArr[sortedIndex];
                try {
                    const htmlContent = await convertFileToHTML(file);
                    const val = htmlToPdfmake(htmlContent);
                    const dd = { content: val };

                    // Generate PDF
                    const pdfBlob = await new Promise((resolve, reject) => {
                        pdfMake.createPdf(dd).getBlob((blob) => {
                            resolve(blob);
                        }, (error) => {
                            reject(error);
                        });
                    });

                    // Create a new instance of JSZip
                    // Add the PDF to the zip file
                    zip.file(fileNameWithoutExt + '.pdf', pdfBlob);

                    // Generate the zip file
                    const zipBlob = await zip.generateAsync({ type: "blob" });

                    // Trigger download of the zip file
                    saveAs(zipBlob, "Text-To-PDF(imagetotext.io).zip");
                } catch (error) {
                    console.error('Error:', error);
                }
            } else {
                console.error('Index not found for the file:', fileNameWithoutExt);
            }
            $('.textEditor-submit').show();
        });
    });
    $(".browse-file, #browse_filesNew").click(function () {
        $("#fileInput").click();
    });
    const inputFileChnageHandler = (e) => {
        if (check_adblocker()) {
            $(e.target).val("");
            return;
        }

        let files = e.target.files;
        let filesLength = IS_PREMIUM == 1 ? 50 : 3;

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
                appedFilesChangeLayout(limitedFiles);
            }
            $(e.target).val("");
            $(".restart_btn").removeClass("d-none");
            return;
        }
        appedFilesChangeLayout(Object.values(files));
    }
    $("#fileInput").on("change", inputFileChnageHandler);
});




const convertFileToHTML = (file) => {
    return new Promise((resolve, reject) => {
        if (!file || !(file instanceof Blob)) {
            reject(new Error('Invalid file or file type'));
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = (error) => {
            reject(error);
        };
        reader.readAsText(file);
    });
};



const fileCounterFun = () => {
    const previewCount = $(".js-single-img-preview").length;
    var fileUploadKey = $("#fileUploadKey").val();
    $(".count-uploaded-files").append(`${previewCount} ${fileUploadKey}`);

    if (previewCount == 0) {
        $(".uploaded_tool").hide();
        $(".selected-result").addClass("d-none");
        $(".textEditor-submit").removeClass("d-none");
        $(".tool").show();
    }
};
const appedFilesChangeLayout = (files) => {
    if (imgArr.length === 0) {
        index = 0; // Reset the index when there are no uploaded files
        // $(".uploaded_tool").removeClass("d-none");
    }
    if (files.length > 0) {
        const scrollToEl = $('.uploaded_tool');

        setTimeout(() => {
            $('html').animate(
                {
                    scrollTop: scrollToEl.offset().top - 50,
                },
                800 //speed
            );
        }, 100);
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

            let _fileName = fileName;
            let _fileNameWithoutExt = _fileName.slice(0, -5) + '.pdf';
            if (_fileName.endsWith('.html')) {
                _fileName = _fileName.slice(0, -5) + '.pdf'; // Replace .html with .txt
                // Use new_file_name
            }

            html =
                `<div class="js-single-img-preview">` +
                `<div class="left-preview">` +
                `<div class="left-preview-img">` +
                `<img width="70" src="${BASE_URL}web_assets/frontend/img/pdf.png" alt="uploaded image">` +
                `</div>` +
                `</div>` +
                `<div class="center-preview">` +
                `<div class="center-preview-inner">` +
                `<div class="center-preview-file">` +
                `<p class="img-preview-name" data-orignal="${fileName}">${_fileNameWithoutExt}</p>` +
                `<span class="img-preview-size">(${fileSize} MB)</span>` +
                `</div>` +
                `<p class="full-name" style="display: none">${fullFileName}</p>` +
                `<div class="center-preview-file-bar">` +
                `</div>` +
                `<div class="center-preview-file-uploadIcon"> +
                 ${uploadedSvg}   Uploaded</div>` +
                `</div>` +
                `<div class="right-preview" style="gap: 0.324rem">` +
                `<span class="d-flex align-items-center cursor-pointer js-single-img-pdf d-none" data-index=${index}>${downloadImgSrc}</span>` +
                `</div>` +
                `</div>` +
                `</div>`;

            $(".multiple-img-preview").append(html);
            $(".tool").hide();
            $(".uploaded_tool").show();
            imgArr.push(file);
            ++index;

            $(".deleteIt").addClass('d-none');
            $(".js-single-img-pdf").removeClass('d-none');

            $(".center-preview-file-uploadIcon").html("Converted");
            $(".count-uploaded-files").empty().prepend(
                `<span class='js-download-all'><img src='${downloadAllImgSrc}' alt="download Zip" />` + $("#downloadAllBtnLabel").val() + `</span>`
            );
            $(".restart-btn").removeClass('d-none');
            $(".restart-btn").empty().prepend(
                `<a href="" class="restart_btn">  ${startOverImgSrc}  Start Over  </a>`
            );
        });
        $("#file").val("");
        fileCounterFun();

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

    }

}


