// 
// #INFO: A Simple JS for WebBook Interface
// 
// -----------------------------------------------------------------------------
// 
// Author: DTMc
// 
// This file is part of lms.
// 
// lms is free software: you can redistribute it and/or modify it under the
// terms of the GNU General Public License as published by the Free Software
// Foundation, either version 3 of the License, or (at your option) any later
// version.
// 
// lms is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
// A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
// 
// -----------------------------------------------------------------------------
//
// Define any relevant constants and variables here.
//
// Variable to store all the keyboard navigation available

var keyboardHelpMenu = {
    'h' : 'Enable/Disable Help Menu',
    'l' : 'Visit Lecture Structure',
    'q' : 'Kill Pop-up Window',
    'n' : 'Next Chapter',
    'p' : 'Previous Chapter',
    'b' : 'Bottom of Page',
    'u' : 'Top of Page',
    'i' : 'Go to Entry Point',
    't' : 'Enable/Disable Table of Contents',
    'Ctrl + k' : 'Search within the website'
};

var moodMenu = {
    "Visit" : [{
        
        "Central GitHub" : [{
            "key"         : "",
            "command"     : "toggleHelp()"
        }],
        "Google Scholar" : [{
            "key"         : "-",
            "command"     : "toggleHelp()"
        }],
        "ResearchGate" : [{
            "key"         : "-",
            "command"     : "toggleHelp()"
        }],

        "Sep-i" : [],
       
        "Proposed Thesis Topics" : [{
            "key"         : "-",
            "command"     : "toggleHelp()"
        }],
        "mciDoc LaTeX Documentation" : [{
            "key"         : "-",
            "command"     : "toggleHelp()"
        }],
        
    }],
    
    "Overview" : [
        {
            "Help Menu" : [
                {
                    "key"         : "h",
                    "command"     : "toggleHelp()"
                }
            ],

            "View Lecture Information" : [{

                 "key"         : "l",
                "command"     : "ShowLectureStructure()"
                
            }],

            "Sep-i" : [],

            "Enable/Disable Main TOC" : [{
                "key"         : "t",
                "command"     : "toggleTOC()"
            }],

            "Toggle CurrentPage TOC" : [{
                "key"         : "t",
                "command"     : "menu_toggleCurrentPageToc()"
            }],

            "Sep-ii" : [],

            "About WebBook" : [{
                "key"         : "h",
                "command"     : "toggleHelp()"
            }],
            
            "Quit WebBook" : [{
                "key"         : "Ctrl + q",
                "command"     : "menu__killCurrentTab()"
                }]
        }
    ],
    "Navigate" : [{
        
        "Top of Current Page" : [{
            "key"         : "u",
            "command"     : "navigate__gotoTopOfPage()"
        }],
        
        "Bottom of Current Page" : [{
            "key"         : "b",
            "command"     : "navigate__toBottomOfPage()"
        }],
  
        "Sep-i" : [],

        "To Next Topic" : [{
            "key"         : "n",
            "command"     : "navigate__gotoNextChapter()"
        }],

        "To Previous Topic" : [{
            "key"         : "n",
            "command"     : "navigate__gotoPrevChapter()"
        }],

        "Sep-ii" : [],
        
         "To Chapter Page" : [{
            "key"         : "d",
            "command"     : "navigate__gotoChapterPage()"
         }],

         "To Index Page" : [{
             "key"         : "i",
             "command"     : "navigate__gotoIndexPage()"
         }],

        
        }]
};

//
// A List of all relevant documentation sites for possible querying
var DocumentationSites = {
    'pytorch-2.13'                : 'https://docs.pytorch.org/docs/2.13/generated/',
    'pytorch-2.13.torch'          : 'https://docs.pytorch.org/docs/2.13/generated/torch.',
    'pytorch-2.13.torch.nn'       : 'https://docs.pytorch.org/docs/2.13/generated/torch.nn.',
    'pytorch-2.13.torch.nn.utils' : 'https://docs.pytorch.org/docs/2.13/generated/torch.nn.utils.',
    'sklearn.preprocessing'       : 'https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.',
}
//
// Here we write a simple switch-case statement to automatically choose the
// correct color scheme for the lecture materials.
//
var electroScience     = ['Drive Technology',
                          'Drive Systems',
                          'Non-Linear Electronics'];

var fundamentalScience = ['Higher Mathematics I',
                          'Higher Mathematics II',
                          'Electrodynamics'];

var aiScience          = ['Data Science I',
                          'Data Science II'];

var roboticScience     = ['Mobile Robotics',
                          'Autonomous Mobile Robotics'];

var computerScience    = ['Academic Writing'];

// Store the entry point to the website. This value needs to be kept as
// index.html.
var entryPoint = 'index.html'

// FUNCTIONS -------------------------------------------------------------------

/** 
 * Control whether the TOC is displayed or not.
 *
 *
 * @return 
 */
function toggleTOC() {

    // First determine the current state of the primary TOC.
    const tocState = $('nav.wide').css('display');

    if (tocState == 'none') {
        $("nav.wide")
            .animate({width: 'toggle', opacity: 'toggle' }, 'slow');
    } else {
        $("nav.wide")
            .animate({width: 'toggle', opacity: 'toggle' }, 'slow');
    } 
}

$(window).resize(function() {
    
    if($(this).width() <= 1200) {

        $("nav.wide").hide('slow');
        $('.crosslinks-bottom').css('width', '100%')

    } else {

        $("nav.wide").show('slow');
        $('.crosslinks-bottom').css('width', 'calc(100% - 336px)')
    }



    
});


$(document).ready(function () {

    if (window.innerWidth < 1024) {
        $("body").empty();
        $("body").append('<p>To view WebBook, please use a display with a width bigger than 1024.</p>');
    }

    

});


/** 
 * Enable/disable the viewing of the current page Table of contents.
 *
 *
 * @return 
 */
function menu_toggleCurrentPageToc() {

    // First determine the current state of the primary TOC.
    const otpState = $('.chapter-contents').css('display');

    if (otpState == 'none') {
        $(".chapter-contents")
            .animate({width: 'toggle', opacity: 'toggle' }, 'slow');
    } else {
        $(".chapter-contents")
            .animate({width: 'toggle', opacity: 'toggle' }, 'slow');

    }  
}




function toggleHELP() {

    ShowHelpMenu();
}


function filter__removeEmptyParagraphs () {

    $(document).ready(function(){
        $("p").each(function(){
            var $this = $(this);
            if($this.text().trim() === '' && $this.contents().length == 0) {
                $this.remove();
            }
        });
    });
    
}


/** 
 * Generates and the enables/disables help menu. A simple if/else is needed to
 * check whether the navigation button exists. If so don't add else, parse the
 * variables @keyboardHelpMenu to generate the list with all the values.
 *
 *
 * @return A Help Menu.
 */
function ShowHelpMenu() {

    if( $('.keyboard').length ) {
    } else {
        
        $('page').append('<nav class="keyboard"><b>Navigation</b></nav>');

        $.each(keyboardHelpMenu, function(index, element) {
            $('.keyboard')
                .append("<div class='keyinformation'><kbd class='pf-trigger-key'>" +
                        index +   "</kbd><span>" +
                        element + "</span></div>" );
        });
    }
    
    const helpState =
          document.getElementsByClassName('keyboard')[0].style.display;

    if ( helpState == 'none') {
        $(".keyboard")
         .animate({width: 'toggle', opacity: 'toggle' }, 'slow');
    } else {
        $(".keyboard")
         .animate({width: 'toggle', opacity: 'toggle' }, 'slow');
    }
}

function navigate__gotoNextChapter() {

    var hreflink = document.
        getElementsByClassName('nav-next')[0].parentElement.href;

    if (typeof hreflink == 'undefined') {
        window
            .alert("Reached end of WebBook. There are no more chapters to continue...");        
    } else {
        window.location.href = hreflink
    }
}

function navigate__gotoPrevChapter() {
    
    var hreflink = document.
        getElementsByClassName('nav-prev')[0].parentElement.href

    if (typeof hreflink == 'undefined') {
        window.alert("Reached beginning of WebBook. There are no more chapters to go back...");
    } else {
        window.location.href = hreflink
    }
}

function navigate__gotoTopOfPage () {
    document.body.scrollTop =
        document.documentElement.scrollTop = 0;
}

function navigate__toBottomOfPage () {
    window.scrollTo(0, document.body.scrollHeight);
}

function navigate__gotoIndexPage () {
    window.location.href = entryPoint;
}


function navigate__gotoChapterPage() {

    if ($('h2').length < 1) {
    
    const hreflink = document.
          getElementsByClassName('nav-up')[0].parentElement.href
    
        window.location.href = hreflink
    }
}

/** 
 * Kills current tab. As we can not close it until unless, the tab was opened by
 * code we need to circumvent it by creating a faux tab.
 *
 *
 * @return 
 */
function menu__killCurrentTab() {

    var win = window.open("about:blank", "_self");

    win.close();
}

// Display Hiders --------------------------------------------------------------

// Here we create a simple function to hide exercises and other relevant boxes
// as they are not immediately relevant to the reader.

function HideMyBody(selected_button) {

    let current_state =
        selected_button
        .parentElement
        .nextElementSibling.style.display;

    var qs = selected_button.parentElement.nextElementSibling;
    var qqs = $(qs);
    
    $(qs).stop().slideToggle(500,"linear", function () {});
}



// Keyboard Event Control ------------------------------------------------------

// The following keyboard control add numerous keyboard shortcuts to useful
// functions for easy navigation and quick information searching. We need to
// make sure `pagefind' window is not currently active as it causes problem with
// navigation.

document.addEventListener("keypress", function(event) {
    if (document.querySelectorAll('dialog')[0].checkVisibility()){
    } else {
        if (event.key == 't') {
            toggleTOC();
        } else if (event.key == 'n') {
            navigate__gotoNextChapter()
        } else if (event.key == 'p') {
            navigate__gotoPrevChapter()
        } else if (event.key == 'b') {
            window.scrollTo(0, document.body.scrollHeight);
        } else if (event.key == 'u') {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        } else if (event.key == 'd') {
            navigate__gotoChapterPage()
        } else if (event.key == 'l') {
            ShowLectureStructure();
        } else if (event.key == 'h') {
            ShowHelpMenu();
        } else if (event.key == 'i') {
            window.location.href = entryPoint;
        } else if (event.key == 'q') {
            // Kill documentation window with the class `.documentation'.
            $('article').find('.documentation').remove();
            $('article').find('.reference-page').remove();
        }
    }
});

// Code Higlighting ------------------------------------------------------------

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.addPlugin(new CopyButtonPlugin());
        hljs.highlightElement(block);
    });
});


// String Manipulations --------------------------------------------------------

// Here, we basically have to remove some text about the index and the number 0
// as they are a remnant of the make4ht and are also there as an `index.html' is
// required by github pages. Here, we quickly fixt the naming of them for better
// presentation.

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.chapterToc .title a')[0]
        .innerText = "Welcome to WebBook"
    document.querySelectorAll('.chapterToc .number')[0]
        .innerText = ""
});

// Here, we need to do a slight conversion of the infamous `chapter 0' as it
// is not correct and it would be better to filter it out and just write the
// `welcome to webBook' string on it.

document.addEventListener('DOMContentLoaded', (event) => {

    if ($('.chapterHead').length > 0){
    
    if (document.querySelectorAll('.chapterHead')[0]
        .innerText.match("Chapter.*0")) {
        document.querySelectorAll('.chapterHead')[0]
        .innerText = "Welcome to WebBook"
    }
    }
});


// Next we need to sort out some header information on the TOC as there is a
// slight delay between the chapter information processed by TeX and what is
// written by the make4ht.

function FixMyChapterHeaderInTOC () {

        let chapter_value = document.
            querySelectorAll('.chapterHead')[0]
            .innerText.split('\n').at(-1);
        
    document.querySelectorAll('.header-chapter')[0].innerText = chapter_value;
    
}


document.addEventListener('DOMContentLoaded', (event) => {

     if (typeof document.querySelectorAll('.chapterHead')[0] === 'undefined') {
    } else {
    FixMyChapterHeaderInTOC ()
    };
});


// Color Decider ---------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    
    var currentDomain = document.
        getElementsByClassName('header-lecture-name')[0].innerHTML;


    if (electroScience.includes(currentDomain)) {
        document.documentElement.style
            .setProperty("--chosen-science",
                         "var(--electro-science)");
        return;
    }

    if (fundamentalScience.includes(currentDomain)) {
        document.documentElement.style
            .setProperty("--chosen-science",
                         "var(--fundamental-science)");
        return;
    }

    if (roboticScience.includes(currentDomain)) {
        document.documentElement.style
            .setProperty("--chosen-science",
                         "var(--robotic-science)");
        return;
    }

    if (computerScience.includes(currentDomain)) {
        document.documentElement.style
            .setProperty("--chosen-science",
                         "var(--computer-science)");
        return;
    }

    if (aiScience.includes(currentDomain)) {
        document.documentElement.style
            .setProperty("--chosen-science",
                         "var(--ai-science)");
        return;
        
    } else {

        document.documentElement.style
            .setProperty("--chosen-science",
                         "var(--org-science)");

        $('.lecture-materials').hide()

        if ( $('.header-lecture-name').text().includes("Thesis") ) {

            document.querySelectorAll('.chapterToc .title a')[0]
                .innerText = "Welcome to ThesisBook"
            
            $('.header-webBook').text("ThesisBook")
            $('.nav-comments').hide()
            $('.author-notes').hide()
            $('.pdf-icon').hide()

        }

        if ( $('.header-lecture-name').text().includes("mcidoc") ) {

            document.querySelectorAll('.chapterToc .title a')[0]
                .innerText = "Welcome to mciDoc"
            
            $('.header-webBook').text("mciDoc Documentation")
            $('.nav-comments').hide()
            $('.author-notes').hide()
            $('.pdf-icon').hide()

        }
        

    }

    
    
});



// Remove PDF Link on Chapter References page ----------------------------------

function menu_makeCurrentPageToc() {
    // Start by parsing the entire Chapter to get the content.
    
    const headings = document.querySelectorAll('page h4, page h5, page h6');

    const post    = document.querySelector('.core-line');
    
    const details = document.createElement('div');
    details.setAttribute('class', 'chapter-contents');
    
    const content = document.createElement('div');    
    content.setAttribute('class', 'content');
    
    const summary = document.createElement('span');
    summary.setAttribute('class', 'header');
    summary.innerHTML = 'On This Page';

    

    details.append(content);
    
    content.append(summary);
    
    headings.forEach((el) => {
        const p = document.createElement('p');
        p.setAttribute('class', 'toc-' + el.tagName.toLocaleLowerCase());
        const a = document.createElement('a');
        a.setAttribute('class', 'mel-toc-link');
        a.textContent = el.textContent //.replace(/^\s*[0-9]\.[0-9]\.[0-9]\s*/g, '');
        a.href = '#' + el.id;
        p.append(a);
        content.append(p);
    });
    
    
    post.prepend(details);

    if ($('.info-block').length > 0) {

        
        $('.chapter-contents')
            .find('.content')
            .append('<div class="toc-contents">' +
                    '<span class="header">' +
                    'Information Blocks' +
                    '</span>' +
                    '<hr>' +
                    '</div>');
        
        $('.info-block').each(function() {

            // First determine the title of the block
            var _infoHeader = $(this)
                .find('.info-upper')
                .text()
                .replace(/^\s*Information\s(.*?)\s*:\s*(.*)\s*$/g, '<span class="title">$2</span><span class="number">$1</span>');

            // Generate the ID Link
            var _infoIDlink = $(this)
                .find('.info-upper')
                .text()
                .replace(/^\s*Information\s(.*?)\s*:\s*(.*)\s*$/g, 'info-block $1')
                .replace(/ /g, '-')
                .replace(/\s*$/g, '');

            // Next add the ID attribute so it can be later directed.
            $(this).attr('id',_infoIDlink);

            $('.chapter-contents')
                .find('.toc-contents')
                .append(
                    '<p class="generic-header">' +
                        '<a href="#' + _infoIDlink + '">' +
                        _infoHeader +
                        '</a>' +
                        '</p>');
        });

    }

    

    

   
}




/** 
 * Allows insertion of text to the modeline.
 *
 * @param text Text to be shown in modeline
 *
 * @return 
 */
function updateModeline (text) {

    $('.supp-line').text('')

    var newText = text;

    $('.supp-line').html('<p>' + newText + '</p>');

}


/** 
 * Seach across all `tabular' tables and find the rows which are empty. Then
 * remove them. This function is used as ParSnip has problems converting LaTeX
 * tables last rows.
 *
 * @return 
 */
function removeEmptyRows() {
    $('.tabular tr').each(
        function () {
            if (!$.trim($(this).text()))
            {$(this).hide()}
        })   
}

/** 
 * Inserts alternating row colors. This is done as JS is used to remove empty
 * rows and this messes the coloring done by statics pages.
 *
 *
 * @return 
 */
function alternatingRowColors() {

    $(document).ready(function(){
        $("tr:odd").css({
            "background-color":"var(--table-row-color)"});
    });

}

/** 
 * Looks at the content folder to retrive the lecture structure page and
 * displays with proper formatting. This is bound to key for easy navigation.
 *
 *
 * @return 
 */
function ShowLectureStructure () {

    // We do a simple check to make sure the same call doesn't happen twice.
    if ($('.documentation').length == 0) {
        
        $('article').append('<div class="documentation"></div>');  
        
        $('.documentation').after( function() {
            $.ajax({
                url:     'content/lecture-structure.html',
                type:    'GET',
                success: function(data){
                    $('.documentation').html($(data));

                    $('.documentation').find('meta, style, script, title').remove();
           
                    // Remove the header as it is not needed.
                    $('.documentation')
                        .find('h1').remove()                   

                }
            });
        });

    } else {
    }
    // Now we do our standard cleanup process to tidy the information
    // content within the div.

}



/** 
 * Fixes the problem where the citations within margin comments whould shoot to
 * the side of the margin. Now they would be put below the margin comment.
 *
 *
 * @return 
 */
function FixSideMarginDerivatives () {

    $(".sidenote")
        .find('.cite-detail')
        .css({'right':'-50px','bottom':'-20px'})
};



/** 
 * Looks the `code' in documentation to retrieve the necessary documentation and
 * present the user with the information on the page
 *
 * @param string to be searched.
 *
 * @return the website in a window
 */
function FindReference (code) {

    $('article').append("<div class='reference-page'></div>");  

    $.each(DocumentationSites, function(index, element) {
        $.ajax({
            url: DocumentationSites[index] + code + '.html',
            type:'GET',
            success: function(data){
                // $('.documentation').html($(data).find('section').html());

                $('.reference-page').append('<iframe src="'+ DocumentationSites[index] + code + '.html' + '" title="description"></iframe>');  
                
            },
            error: function(data){
                
            },
        });
    });
}


function SearchDocumentation () {

    $('article').append("<div class='search-box'>" +
                        "<b>Experimental</b>" +
                        "<p>Please enter code for documentation</p>" +
                        "<form id='target'>" + 
                        "<input type='text' id='code-query' value='Hello there'>" +
                        "<button onclick='getSearchTerm()'>Get Value</button>" +
                        "</form></div>");
}

function getSearchTerm () {
    FindReference($('#code-query').val());
}


/** 
 * Finds the header information of a link in the crosslinks.
 *
 * @param cls name of the class of header element (i.e., '.nav-next')
 *
 * @return 
 */
function menu__getNavLinkInfo (cls) {

        var thisForm = $('.crosslinks-top').find(cls).parents().first();

        var result = '';

        /*
          Here we try to parse all website links in the given link and try to
          determin any header information present. Then we edit the retrieved
          text and do some cleaning on it to use as a link information on the
          page.
        */
        
        $.ajax({
            url:     $(thisForm).attr("href"),
            type:    'GET',
            
            success: function(data){
                updateModeline('Visit: ' + $(data).find('h2, h3')
                                         .first()
                               .contents().text())},
            
            error: function(data){
                updateModeline("Error: I couldn't find the link. Sorry :(")
            },
        });

        return result
}

function UpdateCrosslinks () {


    
    /* First we have to hide all the unnecessary header information */
    $('.crosslinks-top').find('a').each(function (el) {

        /* FIX: That error occur because this is referring to the ajax object
           and not on the DOM element, to solve this you can do something like
           this: */
        var thisForm = this;

        /*
          Here we try to parse all website links in the given link and try to
          determin any header information present. Then we edit the retrieved
          text and do some cleaning on it to use as a link information on the
          page.
        */
        
        $.ajax({
            url:     $(thisForm).attr("href"),
            type:    'GET',
            success: function(data){
                $(thisForm).wrap('<div></div>');

                $(thisForm)
                    .parent()
                    .append('<p>' +
                            $(data).find('h2, h3')
                            .first()
                            .contents().text()
                            .replace(/^\s*/g, '')
                            .replace(/^[0-9]\.[0-9]\s*/g, '')
                            .replace(/^Chapter\s*([0-9]*)\s*/g, 'Ch. $1  ') +
                            '</p>');
                
            },
            error: function(data){
                $(thisForm).remove()
            },
        });
        
    });

    /* QUICK FIX: Remove the invisible link in the footer */
    $('.crosslinks-bottom').find('a').last().remove()
    

     /* Once the changes have been done we need to rearrange the links so
           it looks more usable */
    
    $('.crosslinks-top').append($('.crosslinks-top').find('a').first())
    $('.crosslinks-bottom').append($('.crosslinks-bottom').find('a').first())

}


var ModeLineSelector = {
    ".bi-file-pdf"       : 'View PDF at the current header',
    ".fa-github"         : 'View GitHub Profile of the Author',
    ".fa-google-scholar" : 'View Google Scholar Profile of the Author',
    ".fa-researchgate"   : 'View ResearchGate Profile of the Author',
    ".fa-book"           : 'View the Thesis Proposal given by the Author',
    ".fa-file-lines"     : 'View the mciDoc LaTex Class',
    ".nav-tail"     : 'Go to the bottom of the current page',
}


/** 
 * Finds and removes broken links in `Welcome to WebBook' page.
 *
 *
 * @return 
 */
function filter__removeIndexLink () {

    // Determine the name of the page.
    var url=location.href;


    /** 
     * Searches the top and bottom crosslinks and then removes the selected CLS
     * with given TEXT.
     *
     * @param cls class to be searched within crosslinks.
     * @param text text to be replaced.
     *
     * @return 
     */
    function __removeLink (cls, text) {
        $('.crosslinks-top, .crosslinks-bottom')
            .each(function () {
                $(this).find(cls)
                    .parent()
                    .replaceWith('<span class=nav-inactive>' +
                                 text +
                                 '</span>');
            });
    }
    
    // We introduce a small condition where each chapter page is parsed to
    // remove the UP link which leads to the broken website.
    if ($('h2').length > 0) {
        
        __removeLink ('.nav-up', 'UP') 
    }

    // Here we look at the `index.html' file and remove some links which point
    // to the broken links.
    if (url.includes(entryPoint)) {

        __removeLink ('.nav-prev', 'PREV')
        __removeLink ('.nav-prev-tail', 'PREV-TAIL')
        __removeLink ('.nav-up', 'UP') 
    }
}

function filter__removeLineswithinFloats () {


    var TableFilterListClass = [
        '.threeparttable',
        '.float'
    ]
    
    for (const element of TableFilterListClass) {
        $(element)
            .contents()
            .filter(function(){
                return this.nodeType === 3 && this.nodeValue.trim() !== '';
            }).remove();

    }
}

function ModeLineEffect () {


    for (var key in ModeLineSelector){

        let value = ModeLineSelector[key];
        
        $(key).hover(function(){
                updateModeline(value)},
                   function(){
                       updateModeline('')
                   })
    }

    // Here we define a specific control sequence for viewing acronyms
    $('.glossary').hover(function(){
        updateModeline('Viewing <b>' +
                       $(this).text() +
                       '</b>: ' +
                       $(this).parent().parent().find('.acronym-long').text())},
                         function(){
                             updateModeline('')
                         })

     // Here we define a specific control sequence for viewing anectodes
    $('.margin-comment').hover(function(){
        updateModeline('Viewing anectodal information')},
                         function(){
                             updateModeline('')
                         })


    
    $('.nav-next').hover(function(){
        menu__getNavLinkInfo('.nav-next')},
                         function(){
                             updateModeline('')
                         })

    $('.nav-prev').hover(function(){
        menu__getNavLinkInfo('.nav-prev')},
                         function(){
                             updateModeline('')
                         })

    $('.nav-up').hover(function(){
        menu__getNavLinkInfo('.nav-up')},
                         function(){
                             updateModeline('')
                         })

    $('.nav-prev-tail').hover(function(){
        menu__getNavLinkInfo('.nav-prev-tail')},
                         function(){
                             updateModeline('')
                         })

     $('.nav-front').hover(function(){
        menu__getNavLinkInfo('.nav-front')},
                         function(){
                             updateModeline('')
                         })
}


function add__ContentHeaderCoreLine () {

    let headerText = $('h2, h3').first().text().replace(/^\s*/g, '');

    $('.core-line')
        .append(
            '<div class="current-header">' +
                '<span class="header-pretext">' +
                'Viewing | ' +
                '</span>' +
                '<span class="header-text">' +
                headerText +
                '</span>' +
            '</div>');

    

}

function menu__createTableOfFigures () {

    $('article').append('<div class="documentation"></div>');  
    
    $('.figure').each(function(){


        $('.documentation').append($(this));
        
    });

}


/** 
 * Fix the index page tab header text wit the actual text in the `h2' tag. If
 * `h2' is not available then use `h3' instead as failsafe.
 *
 *
 * @return 
 */
function filter__fixIndexTabHeader () {

    var string_headerText = $('h2, h3').first().text()
    
    $('title').first().text(string_headerText)

}

function filter__repositionCaptioninMargin () {

    $('.sidenote')
        .find('.figure')
        .find('.caption')
        .each(function () {
            $(this).appendTo($(this).parent())
        });
}


function filter__removeUnnecessaryTOCs () {

    $('.chapter')
        .find('.subsectionTOCS')
        .remove();
}

function filter__readjustMarginImages () {

    if (window.matchMedia('screen and (min-width: 1420px)').matches) {

        var marginImages    = $('.sidenote').find('.sidenote-image').parent();
        var sideImages      = $('.sidenote').find('.figure').parent();

        var allMarginImages = marginImages.add(sideImages)

        var collidecheck = [false];

        while (collidecheck.includes(false)) {

            var collidecheck = [];
            
            for (var i=0; i < allMarginImages.length - 1; i++) {

                // First we determine which elements are touching.
                if(__isColliding(allMarginImages.eq(i),
                                allMarginImages.eq(i+1)) == true) {

                    var _tmp = parseInt(allMarginImages[i + 1].offsetTop, 10);

                    allMarginImages[i + 1].style.top =  _tmp + 40 + 'px';

                    var marginImages    = $('.sidenote').find('.sidenote-image').parent();
                    var sideImages      = $('.sidenote').find('.figure').parent();

                    var allMarginImages = marginImages.add(sideImages)

                    collidecheck.push(false);
                    
                } else {

                    collidecheck.push(true);

                };          
            }
        }
    }
}


function modeline__generateModeMenuList(json){

    // First retrieve the first depth list which will store the important
    // elements
    var mainMenu = Object.keys(moodMenu)

    // We then create the primary menu which will be displate in the mode-line.
    for (var i = 0; i < mainMenu.length; i++) {
        
        $('.button-group')
            .append(
                '<div class="dropdown">' +
                    '<button class="dropbtn" id="btn-' + mainMenu[i] + '">' +
                    mainMenu[i] +
                    '</button>' +
                    '<div class="dropdown-content">' +
                    '</div>' +
                    '</div>');

        var subList = Object.keys(moodMenu[Object.keys(moodMenu)[i]][0])
        
        for (var ii = 0; ii < subList.length; ii++) {

            if (subList[ii].includes("Sep-") ) {

                $('.button-group')
                    .find('#btn-' + mainMenu[i])
                    .next('.dropdown-content')
                    .append('<hr>')
                        
                    
            } else {
                
                $('.button-group')
                    .find('#btn-' + mainMenu[i])
                    .next('.dropdown-content')
                    .append('<span class="menu-element">' +
                            '<a onclick="' +
                            moodMenu[Object.keys(moodMenu)[i]][0][subList[ii]][0].command +
                            '">'  +
                            subList[ii] +
                            '</a>' +
                            '<kbd>' +
                            moodMenu[Object.keys(moodMenu)[i]][0][subList[ii]][0].key +
                            '</kbd>' +
                            '<br>');            
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {

    if ( $('.section-header').text().includes("Chapter References") ) {

        $('.bi-file-pdf').hide()
        
    };


    menu_makeCurrentPageToc();

    //$.when(removeEmptyRows()).then(alternatingRowColors());

    FixSideMarginDerivatives();
    
    ModeLineEffect();

    filter__removeLineswithinFloats();

    add__ContentHeaderCoreLine();

    filter__removeEmptyParagraphs();
    
    filter__repositionCaptioninMargin();
        
    filter__readjustMarginImages();

    filter__removeUnnecessaryTOCs();

    filter__removeIndexLink();
    filter__fixIndexTabHeader();

    modeline__generateModeMenuList(moodMenu);

});


/**
 * Detects if two elements are colliding
 *
 * Credit goes to BC on Stack Overflow, cleaned up a little bit
 *
 * @link http://stackoverflow.com/questions/5419134/how-to-detect-if-two-divs-touch-with-jquery
 * @param $div1
 * @param $div2
 * @returns {boolean}
 */
function __isColliding ( $div1, $div2 ) {
	// Div 1 data
	var d1_offset             = $div1.offset();
	var d1_height             = $div1.outerHeight( true );
	var d1_width              = $div1.outerWidth( true );
	var d1_distance_from_top  = d1_offset.top + d1_height;
	var d1_distance_from_left = d1_offset.left + d1_width;

	// Div 2 data
	var d2_offset             = $div2.offset();
	var d2_height             = $div2.outerHeight( true );
	var d2_width              = $div2.outerWidth( true );
	var d2_distance_from_top  = d2_offset.top + d2_height;
	var d2_distance_from_left = d2_offset.left + d2_width;

	var not_colliding = (
        d1_distance_from_top < d2_offset.top ||
            d1_offset.top > d2_distance_from_top ||
            d1_distance_from_left < d2_offset.left ||
            d1_offset.left > d2_distance_from_left );

	// Return whether it IS colliding
	return ! not_colliding;
};






// -----------------------------------------------------------------------------
// flatjs.js ends here.
// 
// 
