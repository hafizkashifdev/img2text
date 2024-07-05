document.addEventListener('DOMContentLoaded', function () {
    var textarea = document.getElementById('textInput');
    var fontSelect = document.getElementById('fontSelect');
    var fontSizeInput = document.getElementById('fontSizeInput');
    var canvasContainer = document.getElementById('textCanvas'); // Update to the container element
    var canvas = new fabric.Canvas('textCanvas');

    // Initial text properties
    var textOptions = {
        left: canvas.getWidth() / 2,
        top: canvas.getHeight() / 2,
        fontSize: parseInt(fontSizeInput.value),
        fill: 'black',
        originX: 'center',
        originY: 'center',
        textAlign: 'center',
        text: 'Sample Text...',
        fontFamily: fontSelect.value, // Set initial font
    };

    // Create a Fabric.js text object
    var text = new fabric.Text(textOptions.text, textOptions);

    // Add the text object to the canvas
    canvas.add(text);
    // Set initial text content in the textarea
    textarea.value = 'Sample Text...';

    // Function to update canvas text based on textarea input
    textarea.addEventListener('input', function () {
        text.set('text', textarea.value);
        canvas.renderAll();
    });
    // Function to align text based on the clicked button
    window.alignText = function (alignment) {
        var maxWidth = canvas.getWidth(); // Maximum width within the canvas

        switch (alignment) {
            case 'left':
                text.set({
                    textAlign: 'left',
                    left: 100,
                });
                break;
            case 'center':
                text.set({
                    textAlign: 'center',
                    left: maxWidth / 2,
                });
                break;
            case 'right':
                text.set({
                    textAlign: 'right',
                    left:500,
                });
                break;
            default:
                break;
        }

        // Render the canvas
        canvas.renderAll();
    };
    // Update canvas text, font, and font size when textarea content or font select/size changes
    textarea.addEventListener('input', updateCanvasText);
    fontSelect.addEventListener('change', updateCanvasFont);
    fontSizeInput.addEventListener('input', updateCanvasFontSize);

    function updateCanvasText() {
        text.set('text', textarea.value);
        text.set({
            left: canvas.getWidth() / 2,
            top: canvas.getHeight() / 2,
        });
        canvas.renderAll();
    }

    function updateCanvasFont() {
        text.set('fontFamily', fontSelect.value);
        canvas.renderAll();
    }

    function updateCanvasFontSize() {
        text.set('fontSize', parseInt(fontSizeInput.value));
        canvas.renderAll();
    }

    // Add click event listeners to format buttons
    var boldButton = document.querySelector('.bold');
    var italicButton = document.querySelector('.italic');
    var underlineButton = document.querySelector('.underline');
    var paraButton = document.querySelector('.para');
    // var leftAlignButton = document.querySelector('.svg.left-align');
    // var centerAlignButton = document.querySelector('.svg.center-align');
    // var rightAlignButton = document.querySelector('.svg.right-align');

    boldButton.addEventListener('click', toggleBold);
    italicButton.addEventListener('click', toggleItalic);
    underlineButton.addEventListener('click', toggleUnderline);
    paraButton.addEventListener('click', togglePara);
    function toggleBold() {
        text.set('fontWeight', text.fontWeight === 'bold' ? 'normal' : 'bold');
        canvas.renderAll();
    }

    function toggleItalic() {
        text.set('fontStyle', text.fontStyle === 'italic' ? 'normal' : 'italic');
        canvas.renderAll();
    }

    function toggleUnderline() {
        text.set('underline', !text.underline);
        canvas.renderAll();
    }

    function togglePara() {
        // Add your logic for toggling paragraph style here
        // console.log('Toggle Paragraph');
    }


    var backgroundTextPicker = document.querySelector("#backgroundText");
    var fontColorPicker = document.querySelector("#color");
    var backgroundLabel = document.querySelector("label[for='backgroundText']");
    var fontColorLabel = document.querySelector("label[for='color']");

    // Define default color
    var defaultColor = "#8792DE";


    // Set initial color picker values
    backgroundTextPicker.value = canvasContainer.style.backgroundColor || defaultColor;
    fontColorPicker.value = text.fill || defaultColor;

    // Set initial label text
    backgroundLabel.textContent = ` ${backgroundTextPicker.value}`;
    fontColorLabel.textContent = ` ${fontColorPicker.value}`;

    // Add input event listeners to color pickers
    backgroundTextPicker.addEventListener("input", updateBackground, false);
    fontColorPicker.addEventListener("input", updateFontColor, false);

    function updateBackground(event) {
        canvasContainer.style.backgroundColor = event.target.value;
        backgroundLabel.textContent = ` ${event.target.value}`;
    }

    function updateFontColor(event) {
        text.set('fill', event.target.value);
        canvas.renderAll();
        fontColorLabel.textContent = ` ${event.target.value}`;
    }

    $(".svg").click(function () {
        $(".svg").not(this).removeClass("active");
        $(this).toggleClass("active");
    });

    $(".bold").click(function () {
        $(this).toggleClass("active");
    });

    $(".italic").click(function () {
        $(this).toggleClass("active");
    });

    $(".underline").click(function () {
        $(this).toggleClass("active");
    });

    $(".para").click(function () {
        $(this).toggleClass("active");
    });


    var initialTextOptions = Object.assign({}, textOptions);
    var initialCanvasBackgroundColor = defaultColor;

    // Function to reset canvas to initial state
    function undoChanges() {
        // Reset text options
        text.set(initialTextOptions);

        // Reset canvas background color
        canvasContainer.style.backgroundColor = initialCanvasBackgroundColor;
        backgroundTextPicker.value = initialCanvasBackgroundColor; // Update color picker value
        backgroundLabel.textContent = ` ${backgroundTextPicker.value}`;

        // Reset font family dropdown
        fontSelect.value = initialTextOptions.fontFamily;
        text.set('fontFamily', fontSelect.value);

        // Reset font size input
        fontSizeInput.value = initialTextOptions.fontSize;
        text.set('fontSize', parseInt(fontSizeInput.value));

        // Clear any additional CSS styles applied
        text.set({
            fontWeight: 'normal',
            fontStyle: 'normal',
            underline: false,
            fill: 'black', // Reset font color to initial value
        });

        // Reset font color picker and label
        fontColorPicker.value = initialTextOptions.fill;
        fontColorLabel.textContent = ` ${fontColorPicker.value}`;

        // Clear active state of format buttons
        $(".svg, .bold, .italic, .underline, .para").removeClass("active");

        // Render the canvas
        canvas.renderAll();
    }



    // Add click event listener to the Undo button
    var undoButton = document.getElementById('undoButton'); // Replace 'undoButton' with the actual ID of your undo button
    if (undoButton) {
        undoButton.addEventListener('click', undoChanges);
    }

});
