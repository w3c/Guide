---
title: SmartList Remote Maintainers Guide
toc: true
---

W3C's mailing lists are managed using a customized version of SmartList.

## E-mail command interface

Many W3C lists allow people to sub and unsub using an [e-mail command interface](https://www.w3.org/Mail/Request).

## Web interface

The [List admin tool](https://lists.w3.org/admin/manage) allows list maintainers to add or remove subscribers, view info about the list's config, and view recent log entries.

If you need more info about a list that is not provided by the list admin tool, please contact &lt;[sysreq@w3.org](mailto:sysreq@w3.org)&gt;.

## Handling \[Moderator Action] messages

If your mailing list has posting restrictions enabled and a previously unknown address sends mail to the list, you will receive a message with \[Moderator Action] prepended to the Subject, e.g.:

> `Subject: [Moderator Action] original subject`

If this is a legitimate message for your list, you should approve it through to the list using the [Moderator action queue review](https://lists.w3.org/admin/moderate) web interface or your mail client's "bounce", "resend", or "redirect" feature. Smartlist will remove the \[Moderator Action] prefix and the message will appear to come from the original sender (and not from you). Some custom headers may be added to indicate you forwarded the mail, for example `Resent-From:`.

If a message was sent to multiple mailing lists, the easiest way to figure out which list(s) caused the moderator action, is to display / view the `X-Envelope-To` header.

Here are some notes on how to handle these messages in various mail clients:

- For Thunderbird you need [this extension](https://addons.mozilla.org/en-US/thunderbird/addon/mailredirect/). Although it doesn't allow you to edit the subject line, so it will still say \[Moderator Action] on the outward-going mail, as pointed out above the W3C servers strip it off.
- For Mac Mail, hit shift+cmd+e, or use the "Redirect" button that you can add to your Toolbar
- [Outlook 2000](http://web.archive.org/web/20030720050852/spamassassin.taint.org/faq/index.cgi?req=show&file=faq03.003.htp)
- For Gmail, see [Bouncing a message from Gmail](http://intertwingly.net/blog/2011/04/03/Bouncing-a-message-from-Gmail) by Sam Ruby.
- For mutt, type 'b' to bounce then enter the list's address.

## Handling \[Moderator Action (size limit exceeded)] messages

You can find the size limit in the "configuration" information of a mailing list, available from the right-hand side after searching it via the [List admin tool](https://lists.w3.org/admin/manage).

A message may be stuck because of an attachment that is too large, and the list moderator may not bypass a list's size limit. Here's how to proceed in this case:

1. Forward to an archive mailing list (see below for guidance)
2. Find the link of the attachment(s) in the list web archive
3. Go back to your mailer:
   
   1. strip the attachment(s) from the mail to moderate
   2. type somewhere e.g., at the top, that the attachment(s) is/are archived elsewhere and paste the link
   3. redirect

Guidance for which archive mailing list to choose depending on the confidentiality-level of the target list:


member-visible: w3c-archive@w3.org (indicative size limit: 25971520 bytes)
: cf. [https://lists.w3.org/Archives/Member/w3c-archive/](https://lists.w3.org/Archives/Member/w3c-archive/)

team-only: w3t-archive@w3.org (indicative size limit: 41943040 bytes)
: cf. [https://lists.w3.org/Archives/Team/w3t-archive/](https://lists.w3.org/Archives/Team/w3t-archive/)

public: www-archive@w3.org (indicative size limit: 41943040 bytes)
: cf. [https://lists.w3.org/Archives/Public/www-archive/](https://lists.w3.org/Archives/Public/www-archive/)

If you have useful info not listed above, please contribute it by [editing this page](https://github.com/w3c/Guide/blob/master/teamcontact/RemoteMaintainers.html) or by sending email to [sysreq@w3.org](mailto:sysreq@w3.org).

If you would like someone to be able to post directly to a given list without having their messages flagged for `[Moderator action]`, use the [list admin tool](https://lists.w3.org/admin/manage) to add their email address to the "accept2" file for the list in question. Future messages from their address will be distributed directly to the list without needing to be moderated.
