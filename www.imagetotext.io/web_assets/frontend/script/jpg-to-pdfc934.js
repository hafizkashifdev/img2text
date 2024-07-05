$(document).ready(function () {
    $(document).on("click", ".js-single-img-pdf", (e) => {
        const fileName = $(e.currentTarget).closest(".js-single-img-preview").find('.img-preview-name').text();
        const fileNameWithoutExt = fileName;
        let originalIndices = [];
        $(".js-single-img-preview").each(function (index) {
            const originalIndex = index.toString(); // Convert index to string
            const file_name = $(this).find(".img-preview-name").text(); // Extract file name
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
            convertToBase64(file).then((base64Image) => {
                const docDefinition = {
                    content: [
                        {image: base64Image, width: 500},
                    ],
                };
                pdfMake.createPdf(docDefinition).download(fileNameWithoutExt + '.pdf');
            });
        } else {
            console.error('Index not found for the file:', fileNameWithoutExt);
        }
    });
    $(".js-convert-all").on("click", convertAll);
});
const convertAll = (e) => {
    $(e.currentTarget).hide();
    $(".js-single-img-pdf").removeClass('d-none');
    $(".left-preview-img").removeClass("cropper-image");
    $(".center-preview-file-uploadIcon").html("Converted");
    $(".delete-action").remove();
    $(".right-preview-text").remove();
    // $('.multiple-img-preview').sortable('option', 'disabled', true);
    $('.multiple-img-preview').find('.left-preview-img-drag').remove();
    $('.multiple-img-preview').find('.js-single-img-preview').css({
        cursor: "default"    });
        $(".restart-btn").removeClass('d-none');
        $(".restart-btn").empty().prepend(
            `<a href="" class="restart_btn">
             <svg xmlns="http://www.w3.org/2000/svg" width="27" height="22" viewBox="0 0 27 22" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.56629 4.8139C6.75323 5.00083 7.01331 5.10649 7.27339 5.10649C7.5416 5.10649 7.79355 5.00083 7.98048 4.8139C9.23212 3.56226 10.8576 2.75763 12.6132 2.52193C14.3687 2.29436 16.1487 2.64385 17.6848 3.52975C19.2209 4.41565 20.4156 5.78107 21.0902 7.41471C21.6429 8.75575 21.8217 10.2106 21.6185 11.641L19.9767 9.99927C19.7898 9.81233 19.5297 9.70668 19.2696 9.70668C19.0014 9.70668 18.7495 9.81233 18.5625 9.99927C18.3756 10.1862 18.27 10.4463 18.27 10.7064C18.27 10.9746 18.3756 11.2265 18.5625 11.4135L21.7648 14.6157C21.9517 14.8026 22.2118 14.9083 22.4719 14.9083C22.7401 14.9083 22.9921 14.8026 23.179 14.6157L26.3812 11.4135C26.5682 11.2265 26.6738 10.9664 26.6738 10.7064C26.6738 10.4382 26.5682 10.1862 26.3812 9.99927C26.1943 9.81233 25.9342 9.70668 25.6741 9.70668C25.4059 9.70668 25.154 9.81233 24.967 9.99927L23.6991 11.2672C23.8211 9.69855 23.5691 8.12181 22.9595 6.65073C22.1143 4.60259 20.6107 2.8958 18.7007 1.79045C16.7826 0.685109 14.5557 0.238099 12.3612 0.53069C10.1668 0.823281 8.12678 1.82297 6.56629 3.39158C6.37936 3.57851 6.2737 3.8386 6.2737 4.09868C6.2737 4.36689 6.37936 4.61884 6.56629 4.8139ZM0.96642 12.0068C1.15335 12.1937 1.41344 12.2994 1.67352 12.2994C1.94173 12.2994 2.19368 12.1937 2.38061 12.0068L3.64851 10.7389C3.55911 11.8686 3.66476 13.0065 3.96548 14.1118C4.42063 15.8186 5.31465 17.371 6.55816 18.6145C8.44375 20.5001 11.0039 21.5566 13.6698 21.5566C16.3356 21.5566 18.8958 20.5001 20.7814 18.6145C20.9683 18.4275 21.074 18.1674 21.074 17.9074C21.074 17.6392 20.9683 17.3872 20.7814 17.2003C20.5944 17.0133 20.3343 16.9077 20.0743 16.9077C19.8061 16.9077 19.5541 17.0133 19.3672 17.2003C18.1155 18.4519 16.49 19.2565 14.7345 19.4922C12.9789 19.7198 11.199 19.3703 9.66288 18.4844C8.12678 17.5985 6.93203 16.2331 6.25745 14.5995C5.70478 13.2584 5.52597 11.8036 5.72916 10.3731L7.37092 12.0149C7.55785 12.2018 7.81793 12.3075 8.07802 12.3075C8.3381 12.3075 8.59818 12.2018 8.78511 12.0149C8.97205 11.828 9.0777 11.5679 9.0777 11.3078C9.0777 11.0396 8.97205 10.7876 8.78511 10.6007L5.58286 7.39846C5.39593 7.21152 5.13585 7.10587 4.87576 7.10587C4.60756 7.10587 4.35561 7.21152 4.16867 7.39846L0.96642 10.6007C0.779487 10.7876 0.673828 11.0477 0.673828 11.3078C0.673828 11.5679 0.779487 11.8198 0.96642 12.0068Z" fill="white"/>
</svg>   Start Over
</a>`
        );

    ((e) => {
        const shadowRoot = document.querySelector("#jsShadowRoot").attachShadow({ mode: "closed" });//closed
        const wrap = document.createElement("div");
        $(wrap).html(`<span>Download All</span>`);
        const style = {
            border: "unset",
            padding: "5px 18px",
            borderRadius: "8px",
            backgroundColor: "#0984e3",
            color: "white",
            fontSize:"14px",
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
            if (imgArr.length == 0) {
                return;
            }
            let originalIndices = [];
            $(".js-single-img-preview").each(function (index) {
                const originalIndex = index.toString(); // Convert index to string
                const file_name = $(this).find(".img-preview-name").text(); // Extract file name
                originalIndices.push({ index, originalIndex, file_name });
            });
            originalIndices.sort((a, b) => parseInt(a.originalIndex) - parseInt(b.originalIndex));

// Create a new array of sorted files using originalIndices
            const sortedImgArr = originalIndices.map(({ file_name }) => {
                return imgArr.find(item => item.name.startsWith(file_name));
            });

// Filter out undefined values (in case there are files not found in imgArr)
            const validSortedImgArr = sortedImgArr.filter(file => file);

            Promise.all(validSortedImgArr.map(file => convertToBase64(file)))
                .then((base64Images) => {
                    const docDefinition = {
                        content: base64Images.map((base64Image, index, array) => ({
                            image: base64Image,
                            width: 500,
                            pageBreak: index < array.length - 1 ? 'after' : '',
                        })),
                    };
                    pdfMake.createPdf(docDefinition).download('imagetotext.pdf');
                })
                .catch((error) => {
                    console.error('Error converting images to base64:', error);
                });

        });
        shadowRoot.appendChild(wrap);
    })();
};
const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        if (!file || !(file instanceof Blob)) {
            reject(new Error('Invalid file or file type'));
            alert('Invalid file or file type');
            return;
        }
        const reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsDataURL(file);
    });
};

