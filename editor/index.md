---
title: W3C Editors' Home Page
toc: true
---

## Introduction {#intro}

One of the main accomplishments at W3C is to write specifications and create standards out of them. While the Working Groups at large are responsible for building consensus on the technical decisions, the editors have the heavy responsibility of transforming these decisions into actual specifications.

This page tries to gather resources that can help editors do their job: documentation, tools, tutorials, etc. If you know other resources that would benefit editors by being listed here, please inform the W3C Communication Team at [w3t-comm@w3.org](mailto:w3t-comm@w3.org).

## Where to start? {#start}

If you are a newly appointed editor in your Working Group, here is some advice that should be useful to get you started.

- Get an [idea of the role of an editor](role.html) at W3C
- Check the most popular editing tools: [Bikeshed](https://speced.github.io/bikeshed/), [respec](https://github.com/speced/respec/wiki)
- Read the [W3C Publication Rules](/pubrules/doc/) (often referred as pubrules) and ask advice on the points that are unclear; if your document doesn't comply with these rules, it cannot be published as a W3C technical report.
- [How to Organize a Recommendation Track Transition](/Guide/transitions) explains the process to get a document published as a technical report.
- The [Pubrules Checker](/pubrules) is a tool that can help you assess whether or not your document complies with pubrules.
- Review [WCAG](/TR/WCAG/)
- All W3C editors are invited to join the [publicly archived mailing list &lt;spec-prod@w3.org&gt;](http://lists.w3.org/Archives/Public/spec-prod/) to share and discuss the techniques and tools used to produce W3C specifications.

## Guidelines on W3C specifications editing {#quality}

W3C has developed a set of resources giving advices and guidelines on editing W3C specifications in varous domains:

- The [W3C Manual of Style](../manual-of-style/) is a collection of rules you're invited to follow to make your document clearer and adapted to the common style at W3C.
- Begun in 1992 and only a little out of date, the [Style Guide for online hypertext](../../Provider/Style/) by Tim Berners-Lee is a good start on writing for the Web; see also Jakob Nielsen's [How Users Read on the Web](http://www.useit.com/alertbox/9710a.html)
- The [QA Framework: Specification Guidelines](../../TR/qaframe-spec/) from the W3C Quality Assurance Activity are a work in progress that became a Candidate Recommendation in November 2003.
- The Team has guidelines for a [style for group-internal drafts](editors-draft.html) to avoid confusion with documents published on the [TR page](/TR). Please also review the related [Working Group Heartbeat Requirement](/policies/process/#revising-wd) of the W3C Process.

[Bert Bos's essay on W3C's design principles](http://www.w3.org/People/Bos/DesignGuide/introduction) and [Tim Berners-Lee's essentials of a specification](http://www.w3.org/1999/09/specification) may also be a useful reading.

During the internal development of a specification, make sure to distinguish official drafts from internal ones using the [style for Group-internal Drafts](editors-draft.html).

## Grammars {#grammars}

W3C editors have developed several types of HTML and XML based grammars to make it easier to develop and maintain their specifications.

## Authoring tools {#authoring}

- Check the most popular editing tools: [Bikeshed](https://speced.github.io/bikeshed/), [respec](https://github.com/speced/respec/wiki)
- [BlueGriffon](http://www.bluegriffon.org/) is a WYSIWYG HTML editor.
- Some [tips and tricks for API architecture design](http://scriptlib-cg.github.com/api-design-cookbook/)
- Some [WhatWG conventions](http://wiki.whatwg.org/wiki/Howto_spec).

## Tools {#tools}

Here are tools that can prove to be useful when developing your specification.

- The [Pubrules Checker](http://www.w3.org/pubrules) provides a convenient interface to check the conformance of a document to pubrules (see [pubrules issues and tracking](http://github.com/w3c/specberus/issues))
- The [Technical Reports shopping list](http://www.w3.org/2000/06/webdata/xslt?xslfile=http%3A%2F%2Fwww.w3.org%2F2005%2F06%2Ftr-shopping.xsl&xmlfile=http%3A%2F%2Fwww.w3.org%2F2002%2F01%2Ftr-automation%2Ftr.rdf) and the [Bibliography Extractor](http://www.w3.org/2002/01/tr-automation/tr-biblio-ui) help building bibliographies based on other W3C Technical Reports; there is a [similar mechansim](http://lists.w3.org/Archives/Public/spec-prod/2003OctDec/0002.html) for XMLSpec
- The [TR references checker](/2004/07/references-checker-ui) may help maintain your references list up to date. See also the [IETF references checker](/2007/05/ietf-references-checker).
- The [W3C Glossary](/2003/glossary/) is a repository of all the terms defined in W3C specifications (and more); a good source to find which terms have already been defined and where
- The [on-line Spell Checker](http://www.w3.org/2002/01/spellchecker) helps spot misspellings and typos; the [W3C on-line Stylistic Checker](/2002/08/diction) helps find the most usual errors identified by the [W3C Manual of Style](/2001/06/manual/)
- [different tools](http://esw.w3.org/topic/HtmlDiff) are available to produce a `diff` between 2 HTML versions of a document; W3C offers an [on-line HTMLDiff service](http://www.w3.org/2007/10/htmldiff)
- The [MarkUp Validator](http://validator.w3.org/) can help you assess whether your documents are valid HTML, MathML or SVG.
- The [CSS Validator](http://jigsaw.w3.org/css-validator/) tells you if your use of CSS is correct.
- The [Link Checker](http://validator.w3.org/checklink) catches all the broken links that may have popped up in your document.
- The [Namespace checker](http://www.w3.org/2003/09/nschecker) finds potential namespaces URIs in the documents, and makes a few checks on them
- [HTML Tidy](http://tidy.sourceforge.net/), originally by Dave Raggett and now maintained at SourceForge.net, is a lint that cleans up but does not validate HTML and XHTML. With indent off, Tidy can sometimes shave 10% or more off file size.

Most of these tools can be quickly accessed using the so called  **[`,tools`](./,tools)** interface: appending **`,keyword`** to a www.w3.org URI triggers a certain tool on this URI; for instance, appending **[`,validate`](,validate)** to this page's URI will send it to the HTML validator.

## Central JavaScript repository {#javascript}

Specifications should, of course, be device-independent. But, with care, you can still include certain kinds of scripts. If the script you want is in W3C's [repository of common JavaScript libraries,](../../scripts/) you're recommended to link to that repository, rather than make a copy of the script. (Note that, together with the common style sheets, these scripts are the *only* resources that may be outside the specification's own directory.)

There is no documentation for now (except for [MathJax](https://www.w3.org/scripts/MathJax/)).
