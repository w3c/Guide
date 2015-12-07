# Best Practices for Bringing Work to the W3C Recommendation Track

## Status

Last updated on 2015/11/25

NO OFFICIAL STATUS! Distributed to the W3C Advisory board for discussion

## Purpose

This best practices document aims to alleviate a number of problems:
- Criteria for when to take work to the Rec track are unclear.  Is recognition of a problem enough, or should there be a solution on the table?
- Whatever the criteria may be, they are not applied consistently across domains. 
- The process for creating working groups is not transparent.  This is sometimes necessary 
 
Historically, the main criterion for creating a working group has been recognition of a *problem* that falls within W3C's area of expertise. 
All too often that resulted in working groups developing solutions that may have been intended to "lead the Web to its full potential" 
and did not get objections during W3C reviews,  but still did not get widespread adoption on the actual Web.  Clearly W3C Recommendations should describe technologies that 
are, or are likely to soon be, used to power the World Wide Web.  It is a best practice to consider the degree of support from those who would need to 
implement, deploy, and use a specification before putting it on the Recommendation track.

This document lists considerations to take into account when evaluating proposals to move specification work
to the W3C Recommendation track. It tries to strike a balance between two classes of criteria:
- "empirical" considerations such as whether drafts of the spec have momentum with implementers and early adopters
- "aspirational" considerations such as whether the spec addresses an un-met need or expands the potential of the Web

In the past, these considerations have been applied differently in different areas of W3C.  Some WGs are firmly grounded in the Empirical criteria 
and are reluctant to take up work until it has ["matured through an incubation phase"](http://w3c.github.io/charter-html/group-charter.html#deliverables).  
Other WGs focus on Aspirational criteria, chartered to provide non-normative advice or to develop charters for future normative work.  This disparity 
creates problems such as the nearly year-long discussion of charters for the WAI working groups that partly hinged on different understandings of the 
criteria for chartering a WG.  

Also, discussion at the [October 2015 Advisory Committee meeting](https://www.w3.org/2015/10/27-ac-minutes.html#item02) 
indicated disparate opinions about whether to insist that all W3C Recommendation Track work start in a Community Group. Points raised against and
exclusively Empircal approach include:
- Incubation isn't a silver bullet to be applied to every situation
- If a CG incubates a spec that gets implemented in the browsers, it's hard to motivate them to take it to a WG for broad review
- If the CG did not work by consensus, the de facto standard might be imposed by a single strong editor or cabal of the top browsers
- There may be gaps in the patent commitment if all spec contributors don't join the WG

To address the situation,  this document collects best practices to guide those who are considering whether a body of work is ready
for the Recommendation track.  The target audience include the Team and Director when evaluating proposals to create new Working Groups or rechartering
existing Working Groups to put new work in scope,   working group Chairs when determining whether to publish First Public Working Drafts of 
specs that are in a group's chartered scope, and by Advisory Committee representatives when voting on charters and Proposed Recommendations.

##Readiness Criteria


Any of the factors described in this document are fodder for Director/Chair/Team consideration. 
No single factor is decisive. Different cases will involve different combinations of these factors. In resolving any objections to
a decision about moving work to the Recommendation track, the Director may consider
other factors not listed in this document as well.

These considerations may be used by the Working Group while evaluating the risk associated with specific design choices during the group’s deliberations. The Director may refer to this document when a transition request is being decided.
This document documents best practices for moving work to the Recommendation track. They are not binding on
Open source browser projects use an [intent to implement](https://docs.google.com/document/d/1vlTlsQKThwaX0-lj_iZbVTzyqY7LioqERU8DK3u3XjI/edit#) process to build the case for shipping 
a new feature. The  [Web Platform Incubator Community Group](https://www.w3.org/community/wicg/)  has adopted 
something similar to [determine when a spec under incubation is ready to propose to a Working Group](https://wicg.github.io/admin/intent-to-migrate.html).


### Problem statment
Proposers MUST describe what real-world problem this work would address, and why existing solutions are inadequate.  
What are websites forced to do without this feature being available in a standardized way?
What fraction of websites are implementing a similar feature in a non-standardized way?
How would users benefit from this feature if standardized?
 
### Success criteria
Proposers MUST identify which types of products (browsers, servers, frameworks,  applications...) would need to support the spec for it to be 
successful, and indicate what degree of critical mass would be needed.  Is this spec serving a niche market and can be implemented only
by those who need to use it?  Are their critical dependencies, e.g. the spec must be deployed on both the cloud/server and browser/client,
or must be supported both in products for producers and consumers of web content, to be really useful?

### Risks
Proposers MUST consider whether standrdiing the spec could create more problems than it solves. 
What are the potential downsides of having this feature standardized ...could it undermine security, privacy, accessibility, etc. 
if broadly deployed? Are there scenarios under which we would regret standardizing this feature?

### Socialized proposal
A draft spec SHOULD be written down (or at least sketched out) and socialized  in a community where website
developer, framework/took developer, and core technology implementers are represented. That discussion MUST NOT 
have generated sustained expressions of opposition or  unwillingness to implement / make patent commitments
from key stakeholders.

### Expressions of interest
The draft spec SHOULD elicit statement of support from key stakeholders about the value proposition for the feature
it describes. Is there a critical mass of implementers tentatively interested in shipping this feature 
if standardized? Are there prototype / polyfill implementations that are used in experimental websites that site developers 
find useful?

### Evidence
Proposers SHOULD describe what implementation and user experience is there to back up the points above.
What fraction of websites are implementing a similar feature in a non-standardized way?
How many users would potentially benefit from this feature if standardized? 
Hard data is preferred, but estimates backed up by detailed explanations are acceptable.

### Incubation
The draft SHOULD have matured through an incubation phase  in WICG or another CG, IG, or have been submitted by a member 
organization based on product experience. The language in the
[Web Platform WG charter](http://w3c.github.io/charter-html/group-charter.html#deliverables)  
describes a best practice:
> The Working Group will not adopt new proposals until they have matured through the Web Platform Incubator Community Group or another similar incubation phase.

## Additional Considerations

### Clear RF Licensing Commitments
W3C seeks to issue Recommendations that can be implemented on a [Royalty-Free](http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Requiremenst) basis.
1. Are the technologies in the initial available under terms that are compatible with the [W3C Royalty-Free licensing requirements](http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Requirements)?
3. Is the provenance of contributions to the draft reasonable clear?  

### The proposers are not seeking a rubber stamp from W3C
W3C Recommendations signify a broad consensus across the  membership of W3C that a spec both serves a real mainstream need 
and it is inclusive of a diverse, worldwide community using different languages, with various levels of ability, and 
who interact with various levels of trust.  Thus the proposers of Recommendation-track work should be prepared to
accommodate feedback to make a spec more internationalizeable, accessible, secure, etc. Likewise it should not promote
the interests of one group of members at the expense of another, e.g. taking sides in a product-driven "standards war." 

##Conclusion

The criteria above boil down to 3 basic questions:
- Does the work address a real un-met need or missed opportunity for the Web?
- Does the work start from a concrete proposal that has been socialized with key stakeholders but doesn't discriminate against others?
- Does standardizing the proposed spec have clear support from those who would need to implement and use the spec for it to be successful?

Transition to the Recommendation Track should happen  ...

NO SOONER than the MUST criteria and a reasonable number of the SHOULD criteria above are met.

NO LATER THAN a point where the spec is still fluid, and  not frozen into shipping code used on many websites.


