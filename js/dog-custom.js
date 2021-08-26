
// sticky menu js start
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("stickymenu");
var sticky = navbar.offsetTop;
var logobar = document.getElementById("stickybrand");
var stickylogo = logobar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

// for logo
// window.onscroll = function() {logoFunction()};

// var logobar = document.getElementById("stickybrand");
// var sticky = logobar.offsetTop;

// function logoFunction() {
  if (window.pageYOffset >= stickylogo) {
    logobar.classList.add("stickylogo")
  } else {
    logobar.classList.remove("stickylogo");
  }
}

// sticky menu js end 


/*ccustom tab js start 
===================================================================================================== */
window.addEventListener("load", function() {
	// store tabs variable
	var myTabs = document.querySelectorAll("ul.nav-tabs > li");
  function myTabClicks(tabClickEvent) {
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".tab-pane");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
		var anchorReference = tabClickEvent.target;
		var activePaneId = anchorReference.getAttribute("href");
		var activePane = document.querySelector(activePaneId);
		activePane.classList.add("active");
	}
	for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}
});

/* Custom tab js end ^
===================================================================================================== */


/* content editable js start
=============================================================================== */


// Wrap this in a closure to contain scope
(function ( doc ) {
  'use strict';
  // Use a more terse method for getting by id
  function getById ( id_string ) {
    return doc.getElementById(id_string);
  }

  function insertAfter( newEl, refEl ) {
    refEl.parentNode.insertBefore(newEl, refEl.nextSibling);
  }

  var editElement = getById('myContent');
  var undoBtn = getById('undo');
  var saveBtn = getById('save');
  var originalContent = editElement.innerHTML;
  var updatedContent = "";

  // if a user has refreshed the page, these declarations
  // will make sure everything's back to square one
  undoBtn.disabled = true;
  saveBtn.disabled = true;

  // create a redo button
  var redoBtn = doc.createElement('button');
  var redoLabel = doc.createTextNode('Redo');
  redoBtn.id = 'redo';
  redoBtn.className = 'btn';
  redoBtn.hidden = true;
  redoBtn.appendChild(redoLabel);
  insertAfter( redoBtn, undoBtn );

  // if the content has been changed, enable the save button
  editElement.addEventListener('keypress', function () {
    if ( editElement.innerHTML !== originalContent ) {
      saveBtn.disabled = false;
    }
  });

  // on button click, save the updated content
  // to the updatedContent var
  saveBtn.addEventListener('click', function () {
    // updates the myContent block to 'save'
    // the new content to updatedContent var
    updatedContent = editElement.innerHTML;

    if ( updatedContent !== originalContent ) {
      // Enable the undo button in the case that you
      // didn't like what you wrote and you want to
      // go back to square one
      undoBtn.disabled = false;
    }
  });

  // If you click the undo button,
  // revert the innerHTML of the contenteditable area to
  // the original statement that was there.
  //
  // Then add in a 'redo' button, to bring back the edited content
  undoBtn.addEventListener('click', function() {
    editElement.innerHTML = originalContent;
    undoBtn.disabled = true;
    redoBtn.hidden = false;
  });

  redoBtn.addEventListener('click', function() {
    editElement.innerHTML = updatedContent;
    this.hidden = true;
    undoBtn.disabled = false;
    undoBtn.focus();
  });

})( document );
