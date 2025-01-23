<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
  <title>RRSAgent IRC Bot Description</title>
	<link rel="stylesheet" href="https://www.w3.org/StyleSheets/generic-base-1.css" type="text/css">
	<link rel="stylesheet" type="text/css" href="https://www.w3.org/Guide/guide2006.css">
	<link rel="shortcut icon" href="https://www.w3.org/Icons/WWW/Literature.gif">
</head>

<body>
	<div id="header">
	<span class="logo"><a href="/"><img src="https://www.w3.org/Icons/WWW/w3c_home_nb" alt="W3C" height="48" width="72"></a></span>
	   <div class="breadcrumb">
	   <a href="/Member/">Member</a> &#x2192; <a href="/Guide/">The Art of Consensus</a> &#x2192; 
	<h1>The RRSAgent IRC Bot</h1>
	</div>
	<p class="baseline">This <strong>Guidebook</strong> is the collected wisdom of the W3C Group Chairs and other collaborators.</p>
	</div>

	<div class="toc">
	    <h4>Also On This Page &#x2192; </h4>
	    <ul>
			  <li><a href="#inviting">Inviting and Dismissing RRSAgent</a>&nbsp;&bull;&nbsp;</li>
			  <li><a href="#actions">Action Item Tracking</a>&nbsp;&bull;&nbsp;</li>
			  <li><a href="#search">Searching the Log</a>&nbsp;&bull;&nbsp;</li>
			  <li><a href="#logoff">Pausing and Resuming Log Recording</a>&nbsp;&bull;&nbsp;</li>
			  <li><a href="#access">Setting Log Access</a>&nbsp;&bull;&nbsp;</li>
			  <li><a href="#formatMinutes">Formatting Minutes</a>&nbsp;&bull;&nbsp;</li>
			  <li><a href="#related">Related Tools</a></li>
	     </ul>
	</div>

	<div class="toolbox box" style="margin-bottom: 1em"> 
	<h4>Nearby</h4>
		<ul>
			<li><a href="http://www.w3.org/2001/12/zakim-irc-bot.html"
			>Zakim Teleconference Agent</a></li>
			</ul>
		</div>
		
<h2>General Description</h2>

<p>RRSAgent is a helpful bot for recording an IRC session.  All text
sent to the channel by any user is logged except '/me' text and
text send with <a href="#logoff">logging explicitly turned off</a>.</p>

<p>In the command descriptions below, optional words in commands are
indicated in square brackets.  RRSAgent's commands are not case sensitive,
but, in general, must be grammatically correct.  "Please" can be abbreviated
to "pls" if you wish to be polite yet still save keystrokes.</p>

<h2 id="inviting">Inviting and Dismissing RRSAgent</h2>

<p>To use RRSAgent, you must first invite it to your IRC session.  When
you're finished, you must dismiss RRSAgent from the channel.</p>
<ul class="command" id="invite">
  <li><kbd>/invite RRSAgent &lt;channel&gt;</kbd></li>
</ul>
    <p>Brings RRSAgent on to your IRC channel.  The log will appear in
      http://www.w3.org/yyyy/mm/dd-&lt;channel&gt;-irc where 'yyyy' is the
      current year, 'mm' is the current month, and 'dd' is the current day.
      Three variants of the log are written; .html contains XHTML, .rdf
      contains RDF, and .txt contains plain text.  <em>Do not</em> edit
      these logs if you expect RRSAgent to continue to write to them.
      (Your CVS commit will cause RRSAgent's additions to cease to appear
      in the Web.  If you're very lucky, they may not actually be lost.
      But they're not trivial to recover.)</p>
      <p>Some irc clients let you omit the channel name and will fill in the
      name of current channel.  This is a feature of the irc client, not of
      RRSAgent.</p>

<ul class="command" id="leave">
  <li><kbd>rrsagent, [please] excuse us</kbd></li>
  <li><kbd>rrsagent, bye</kbd></li>
  <li><kbd>rrsagent, [please] part</kbd></li>
  <li><kbd>rrsagent, [please] leave</kbd></li></ul>

<p>All disconnect the RRSAgent bot from your IRC channel.</p>

<p>RRSAgent will leave the channel if there has been no activity on the
  channel for more than 2 hours.  Should you not want this behaviour you
  can request that RRSAgent stay regardless of activity:</p>
<ul class="command" id="stay">
  <li><kbd>rrsagent, [please] stay</kbd></li>
  <li><kbd>rrsagent, [please] do not leave</kbd></li>
  <li><kbd>rrsagent, [please] do not depart</kbd></li>
</ul>

<p>Each of these disables the automatic departure from the channel.
Once this is requested the only way to reset it is to dismiss RRSAgent
from the channel and re-invite it.</p>

<h2>Talking to RRSAgent</h2>

<p>RRSAgent also recognizes several commands during its logging session. Most
commands begin with "<strong>rrsagent, </strong>", though a few are
recognized without this.</p>

<h3 id="actions">Action Item Tracking</h3>

<p>RRSAgent will help track action items recorded while a meeting is in
progress.  Many of the commands in this set need not be directly addressed to
RRSAgent; they will be recognized when addressed to no one in particular and
also when received as third person ('/me') messages.</p>

<p>The list of action items may be reviewed and modified during the meeting.
The action items will be recorded as they are modified in
http://www.w3.org/yyyy/mm/dd-&lt;channel&gt;-actions where 'yyyy' is the
current year, 'mm' is the current month, and 'dd' is the current day.</p>

<ul class="command" id="addAction">
  <li><kbd>[rrsagent,] ACTION: &lt;text&gt;</kbd></li></ul>

<p>Adds an action item described by &lt;text&gt;, assigning it the next
      sequential number.  This command need not be addressed to RRSAgent
      directly.  The keyword 'ACTION' is not case sensitive.  Actions
      may not be assigned in '/me' messages.</p>

<ul class="command" id="replaceAction">
  <li><kbd>[rrsagent,] ACTION &lt;number&gt; = &lt;newtext&gt;</kbd></li></ul>
    <p>Replaces the text of action item &lt;number&gt; with &lt;newtext&gt;.
      This need not be addressed to RRSAgent directly but will be ignored
      in '/me' lines.  The keyword 'ACTION'
      must be in all-caps as shown or all lowercase.</p>

<ul class="command" id="dropAction">
  <li><kbd>[rrsagent,] ACTION- &lt;number&gt;</kbd></li></ul>

<p>Removes action item &lt;number&gt; from the list.  This need not be
      addressed to RRSAgent directly.  The keyword 'ACTION' is not case
      sensitive..</p>

<ul class="command" id="listAction">
  <li><kbd>rrsagent, what [are the] action items?</kbd></li>
  <li><kbd>rrsagent, what [are the] actions?</kbd></li>
  <li><kbd>rrsagent, [please] show [the] action items</kbd></li>
  <li><kbd>rrsagent, [please] show [the] actions</kbd></li>
  <li><kbd>rrsagent, [please] list [the] action items</kbd></li>
  <li><kbd>actions?</kbd></li></ul>

<p>Displays the list of action items.  The first set of requests must be
      addressed specifically to RRSAgent.  The last request will respond in
      /me (third-person or out-of-band) form.</p>

<ul class="command">
  <li><kbd>rrsagent, [please] drop action &lt;number&gt;</kbd></li></ul>

<p>Removes action item &lt;number&gt; from the list.  This form must be
      addressed specifically to RRSAgent</p>

<ul class="command" id="ignoreAction">
  <li><kbd>rrsagent, [please] ignore action items</kbd></li>
  <li><kbd>rrsagent, [please] ignore actions</kbd></li></ul>

<p>Requests that RRSAgent stop tracking action items. This request must
      be addressed specifically to RRSAgent</p>

<ul class="command" id="trackAction">
  <li><kbd>rrsagent, [please] track action items</kbd></li>
  <li><kbd>rrsagent, [please] track actions</kbd></li></ul>

<p>Requests that RRSAgent begin tracking action items. This request must
      be addressed specifically to RRSAgent. This is the default state when
      RRSAgent is invited to a channel</p>

<h3 id="search">Searching the Log</h3>

<ul class="command" id="pointer">
  <li><kbd>rrsagent, bookmark</kbd></li>
  <li><kbd>rrsagent, pointer</kbd></li>
  <li><kbd>rrsagent, here</kbd></li>
  <li><kbd>rrsagent, where am I?</kbd></li></ul>

<p>Reports a URI to the current location in the log</p>
<ul class="command" id="grep">
  <li><kbd>rrsagent, grep [-i] [first-last|max] &lt;text&gt;</kbd></li>
  <li><kbd>rrsagent, search for [-i] [first-last|max]  &lt;text&gt;</kbd></li>
  <li><kbd>rrsagent, find [-i] [first-last|max] &lt;text&gt;</kbd></li>
  <li><kbd>rrsagent, &lt;text&gt;?</kbd></li></ul>

<p>Searches the log for &lt;text&gt;.  The text is interpreted as a perl
      regex; e.g. "." matches any character, "&lt;char&gt;+" matches one or
      more consecutive occurrences of &lt;char&gt;, and "&lt;char&gt;*"
      matches any number of consecutive occurrences of &lt;char&gt;, etc.
      <strong>-i</strong> causes the comparison to be case insensitive.
      <strong>first</strong>, <strong>last</strong>, and <strong>max</strong>
      limit the reported results to the specified (first and last) results or
      to at most (max) results.</p>

<h3 id="logoff">Pausing and Resuming Log Recording</h3>

<ul class="command" id="stop">
  <li><kbd>rrsagent, silence</kbd></li>
  <li><kbd>rrsagent, stop</kbd></li>
  <li><kbd>rrsagent, off</kbd></li>
  <li><kbd>rrsagent, nolisten</kbd></li></ul>

<p>Stops logging channel text to the log</p>

<p>Any line beginning with <strong>[off]</strong> and any message sent with
the '/me' IRC command will also not be logged. This permits channel
participants to interject single-line remarks.</p>

<ul class="command" id="start">
  <li><kbd>rrsagent, on</kbd></li>
  <li><kbd>rrsagent, hello</kbd></li>
  <li><kbd>rrsagent, log</kbd></li>
  <li><kbd>rrsagent, listen</kbd></li>
  <li><kbd>rrsagent, record</kbd></li>
  <li><kbd>rrsagent, start</kbd></li>
  <li><kbd>rrsagent, begin</kbd></li></ul>

<p>Resumes logging channel text to the log.  This is the default state
      when RRSAgent is invited to a channel</p>

<ul class="command" id="midnight">
  <li><kbd>rrsagent, this meeting spans midnight</kbd></li>
  <li><kbd>rrsagent, do not start a new log [at midnight]</kbd></li></ul>

<p>By default, when RRSAgent is sitting on an irc channel a new log
      for the channel will be started at midnight UTC.  If the channel
      is being used for a meeting that continues past midnight it may
      be more convenient to keep the meeting record contiguous in a
      single log.  This request will inform RRSAgent to maintain a
      single log for the current channel if logging continues past
      midnight. When RRSAgent joins a channel within 75 minutes
      of midnight the current log will continue past midnight just as if
      this request had been issued.</p>

<ul class="command">
  <li><kbd>rrsagent, start a new log [at midnight]</kbd></li></ul>

<p>This restores the default behavior of RRSAgent when logging
      to a channel and midnight UTC is crossed. When RRSAgent joins
      a channel within 75 minutes of midnight the current log will
      continue past midnight unless this request has been issued.</p>

<h3 id="access">Setting Log Access</h3>

<ul class="command" id="setLog">
  <li><kbd>rrsagent, [please] set [these] logs member-visible|world-visible|offices-visible|ab-visible|team-visible </kbd></li>
  <li><kbd>rrsagent, [please] make [these] logs member-visible|world-visible|team-visible|offices-visible|ab-visible</kbd></li></ul>
	
    <p>Sets the access control on the logs, recorded action items, and draft
      minutes (if any). The group 'world' may also be written as 'public'.
      The suffix <em>-visible</em> may also be written as <em>-access</em>,
      <em>-conf</em>, <em>-confidential</em>,
      <em>-only</em>, <em>-read</em>, or <em>-readable</em> or may be omitted
      entirely. <em>Record</em> is recognized as a synonym for
    <em>log</em>.</p>

<h3 id="formatMinutes">Formatting Minutes</h3>
<ul class="command" id="minutes">
  <li><kbd>rrsagent, [please] create [the] minutes</kbd></li>
  <li><kbd>rrsagent, [please] draft [the] minutes</kbd></li>
  <li><kbd>rrsagent, [please] format [the] minutes</kbd></li>
  <li><kbd>rrsagent, [please] generate [the] minutes</kbd></li>
  <li><kbd>rrsagent, [please] make [the] minutes</kbd></li>
  <li><kbd>rrsagent, [please] publish [the] minutes</kbd></li></ul>

<p>Runs a <a
      href="https://w3c.github.io/scribe2/scribedoc.html">script</a>
      to reformat the current irc log into HTML-ized minutes. If the access
      control of the logs has been previously set the formatted minutes will
      receive the same access.  These formatted minutes should subsequently
      be edited by hand to improve them as a permanent meeting record.  This
      command may be repeated, with RRSAgent over-writing the previously
      generated minutes.  Repeating the request is useful if the diagnostics
      produced at the bottom of the formatted minutes suggest additional
      formatting commands that could usefully be added to the log.

      <p>The <a
      href="https://w3c.github.io/scribe2/scribedoc.html">script</a> recognizes instructions found in the irc log, including:</p>
 
<dl class="command">
	<dt><kbd>Meeting:</kbd> <var>&lt;name&gt;</var></dt>
	<dd>Specifies the name (title) of the meeting</dd>

	<dt><kbd>Chair:</kbd> <var>&lt;name&gt;</var></dt>
	<dd>Specifies the chairperson's name</dd>

	<dt><kbd>Agenda:</kbd> <var>&lt;URI&gt;</var></dt>
	<dd>Specifies the Web address of the agenda</dd>

	<dt><kbd>Scribe:</kbd> <var>&lt;name&gt;</var></dt>
	<dd>Specifies the scribe's name</dd>

	<dt><kbd>ScribeNick:</kbd> <var>&lt;nick&gt;</var></dt>
	<dd><p>Specifies the irc nick of the scribe</p></dd>
</dl>

	<p>Refer to the
	  scribe <a href="https://w3c.github.io/scribe2/scribedoc.html">Quick
	  Start Guide</a> for additional details.

	  See also <a href="https://w3c.github.io/scribe2/rescue">Making
	  minutes without RRSAgent</a> for suggestions on what to do
	  if you wish to generate minutes when RRSAgent was not
	  logging the channel.</p>

	<p>An <a href="https://w3c.github.io/scribe/scribedoc.htm">older
	  version of the script</a> can also be
	  invoked by adding "v1" to the formatting request; e.g.</p>

	<ul class="command">
	  <li><kbd>rrsagent, [please] create [the] minutes v1</kbd></li>
	</ul>

<h3>Help</h3>

<ul class="command" id="help">
  <li><kbd>rrsagent, [please] help</kbd></li></ul>

<p>Displays an abbreviated list of commands.  Due to "flood control" in
      IRC, this may be slow.</p>

<h3 id="related">Related Tools</h3>

<p><a href="https://w3c.github.io/scribe2/scribedoc.html">scribe.perl</a>
by Bert Bos (after version 1 created by David Booth) generates nicely
formatted HTML from irc logs, well-tuned for the logs produced by
RRSAgent.  This is the tool invoked by
'<a href="#formatMinutes">please draft the minutes</a>'.</p>

<p><a href="http://www.w3.org/2001/12/zakim-irc-bot.html">Zakim</a>
is a Semantic Web agent ("swagent") that helps facilitate meetings
using IRC.</p>


<h2 id="changes">Change History</h2>

<h3>2022-10</h3>

<p>Include scribe.perl in <a href="#related">Related Tools</a>, add
mention of <a href="https://w3c.github.io/scribe2/rescue">Making
minutes without RRSAgent</a>.</p>

<h3>2021-01</h3>

<p>Default minutes style changed from v1 to v2.</p>

<h3>2019-08</h3>

<p>New (v2) minutes style supported.</p>

<h3>2014-08</h3>

<p>'Please stay' supported.</p>

<h2>Acknowledgements</h2>

<p>The RRSAgent IRC bot was written by Dave Beckett then of ILRT Bristol (Dave
calls it 'logger') and Ralph Swick of W3C/MIT.  The name comes from earlier
variants on the same theme by Ralph.  David Booth of Hewlett-Packard wrote
the v1 log reformatting script that generates formatted draft minutes.
Bert Bos rewrote the formatting script and added more features; that is
version 2.</p>
<hr>
<address>
  <a href="http://validator.w3.org/check/referer"><img border="0"
  src="http://validator.w3.org/images/vh40.gif" alt="Valid HTML 4.0!"
  height="31" width="88" align="right">
   </a> <a href="mailto:swick@w3.org">Ralph R. Swick</a><br>
  <small>2022/10/21 12:41:14</small>
</address>
</body>
</html>
