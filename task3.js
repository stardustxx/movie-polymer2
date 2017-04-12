// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

var solutionLevel = 0;

function solution() {
    // write your code in Javascript
    //
    // you can access DOM Tree using DOM Object Model:
    //    document.getElementsByTagName
    // or using jQuery:
    //    $('some_tag')

    solutionLevel = 0;

    var $body = $("body");
    var elems = $body.children("ul, ol");
    if (elems.length) {
        helper(elems, 1);
    }

    return solutionLevel;
}

function helper(elems, level) {
    for (var i = 0; i < elems.length; i++) {
        var childDom = elems.find("ul, ol");
        level = helper(childDom, level + 1);
        if (solutionLevel < level) {
            solutionLevel = level;
        }
    }
    level -= 1;
    return level;
}

solution();