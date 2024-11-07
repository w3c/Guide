function createtoc (maxlevel) {
	// creates a TOC and puts it in a div with id="toc" & creates a self-link
    // expect to find the id on the heading markup, NOT the section, and NO a around the heading text
    // works for h2 or h2+h3 (if maxlevel set to 3)
	
	var h2s = document.querySelectorAll('h2')
	var toc = document.getElementById('toc')
	var h2, h3, id, h, a
	var toc = ''
    
	for (var i=0; i<h2s.length; i++) {
		if (!h2s[i].className.match(/notoc/)) {
			h2 = h2s[i].textContent
			id = getNearestSectionID(h2s[i])
            if (id !== '') {
                h2s[i].appendChild(addSelfLink(id))
            	toc += newTOCLine(h2, id, '1')
                }
			if (maxlevel && maxlevel > 2) {
				// check for h3s
				var h3s = h2s[i].parentNode.querySelectorAll('h3');
				for (var k=0; k<h3s.length; k++) {
					if (!h3s[k].className.match(/notoc/)) {
                        h3 = h3s[k].textContent
                        id = getNearestSectionID(h3s[k])
                        if (id !== '') {
                            h3s[k].appendChild(addSelfLink(id))
                            toc += newTOCLine(h3, id, '2')
                            }
                        }
                    }
                }
            }
        }
    document.getElementById('toc_placeholder').innerHTML = toc
    }


function getNearestSectionID (node) {
    var id = ''
    var section = node.closest('section')
    if (section.id == null) console.log('ERROR: No id on section:', node.textContent)
    else id = section.id
    
    return id
    }


function addSelfLink (id) {
    var selflink = document.createElement('a')
    selflink.className = 'selflink'
    selflink.href = '#'+id
    return selflink
    }


function newTOCLine (heading, id, level) {
    return '<div class="toc'+level+'"><a href="#'+id+'">'+heading+'</a></div>'
    }
