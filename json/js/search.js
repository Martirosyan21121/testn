// Function to convert Armenian letters to English
function convertToEnglish(input) {
    const charMap = {
        'ա': 'a',
        'բ': 'b',
        'ց': 'c',
        'դ': 'd',
        'ե': 'e',
        'ֆ': 'f',
        'գ': 'g',
        'հ': 'h',
        'ի': 'i',
        'ջ': 'j',
        'կ': 'k',
        'լ': 'l',
        'մ': 'm',
        'ն': 'n',
        'օ': 'o',
        'պ': 'p',
        'ք': 'q',
        'ր': 'r',
        'ռ': 'r',
        'ս': 's',
        'տ': 't',
        'ու': 'u',
        'վ': 'v',
        'խ': 'x',
        'յ': 'y',
        'զ': 'z',
        'չ': 'ch',
        // Add more combinations as needed
    };

    let convertedValues = [];

    // Replace Armenian letters with English equivalents
    input.split('').forEach(letter => {
        if (charMap[letter]) {
            convertedValues.push(charMap[letter]);
            if (letter === 'ր' || letter === 'ռ') {
                convertedValues.push('r');
            }
        } else {
            convertedValues.push(letter);
        }
    });

    return convertedValues.join('');
}

$(document).ready(function(){
    $('#search').keyup(function(){
        $('#result').html('');
        let searchInput = $('#search').val();
        let ignoreCase = new RegExp(searchInput, "i");
        let unicode = new RegExp(searchInput, "u");

        // Convert Armenian letters to English
        let englishSearchInput = convertToEnglish(searchInput);

        $.getJSON('json/test.json', function(data) {
            $.each(data, function(key, value){
                // Perform search
                if (value.name.toLowerCase().includes(englishSearchInput.toLowerCase())) {
                    console.log(value.name, 'name')
                    console.log(value.id, 'id')
                    console.log(key.id, 'id key')
                    $('#result').append('<li class="list-group-item link-class">'+ ' ID -> '+ value.id + ' | Name ->      ' + value.name + '</li>');
                }
            });
        });
    });
});
