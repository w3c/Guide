<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" >
<title>Horizontal Groups</title>
<link rel="stylesheet" href="/StyleSheets/generic-base-1.css"
type="text/css">
<link rel="stylesheet" type="text/css" href="../assets/main.css">
<link rel="shortcut icon" href="/Icons/WWW/Literature.gif">
<link rel="start" href="../" >
<style>
  dt {font-weight: bold; }
  .timing { font-style: italic }
   body {counter-reset:section;}
    h2 {counter-reset:subsection;}
    h3	{counter-reset:subsubsection;}
    h2:before
    {
    counter-increment:section;
    content:counter(section) ". "}
    h3:before
    {
    counter-increment:subsection;
    content:counter(section) "." counter(subsection) " ";
    }
    h4:before
    {
    counter-increment:subsubsection;
  content:counter(section) "." counter(subsection) "." counter(subsubsection) " ";
    }
    h4.notoc:before {
    content: "";
    }
</style>
</head>
<body>

<div id="header">
<span class="logo"><a href="/"><img src="/Icons/WWW/w3c_home_nb"
alt="W3C" height="48" width="72"></a></span>
    <div class="breadcrumb">
    <a href="/Member/">Member</a> &#x2192; <a href="/Guide/">The Art of
Consensus</a> &#x2192;
<h1>Horizontal Groups</h1></div>
<p class="baseline">This <strong>Guidebook</strong> is the collected
wisdom of the W3C Group Chairs and other collaborators.</p>
</div>

<p>The W3C Process mentions
the <a href="/policies/process/#wide-review">W3C horizontal Groups</a>, described in this document.</p>

<h2>What is an horizontal group ?</h2>

<p id='definition'>An horizontal group is tasked to regularly produce expert reviews of proposals
  and specifications under development by other Working Groups and Community Groups,
  and of charters for other W3C groups. It may also produce expert reviews of proposals and specifications
  produced outside of W3C.
</p>

<h2 id="w3c-hr-list">List of W3C Horizontal Groups</h3>

<p>
  As of November 2024, there are <strong>5 W3C horizontal groups</strong>:
</p>

<ul>
  <li><a href="https://www.w3.org/groups/wg/apa/">Accessible Platform Architectures Working Group</a></li>
  <li><a href="https://www.w3.org/groups/wg/i18n-core/">Internationalization Working Group</a></li>
  <li><a href="https://www.w3.org/groups/wg/privacy/">Privacy Working Group</a></li>
  <li><a href="https://www.w3.org/groups/ig/security/">Security Interest Group</a></li>
  <li><a href="https://www.w3.org/groups/other/tag/">Technical Architecture Group</a></li>
</ul>

<h2 id="other-hr-list">Other Horizontal Groups</h3>

<p>Some expert groups outside of W3C may also provide an horizontal review. Charters of W3C Working and Interest Groups should explicitly
  list the relevant expert groups if an horizontal review is expected from them.
</p>

<h2 id="horizontal-review">Horizontal Reviews`</h3>

  <p>Horizontal reviews are documented and part of the <a href="/Guide/documentreview/">wide review</a>.
  </p>
  
  
<hr>

  <p>Feedback is to <a href="https://github.com/orgs/w3c/teams/guidebook">@w3c/guidebook</a> and
      is welcome on <a href="https://github.com/w3c/Guide/issues">GitHub</a></p>
</body>
</html>
