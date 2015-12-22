# Recommendation Track Readiness

## Status

Last updated on 2015/12/14

NO OFFICIAL STATUS! Distributed to the W3C Advisory board for discussion

## Purpose

This document lists criteria to consider when evaluating proposals to move specification work
to the W3C Recommendation track.  If offers guidelines that deserve consideration, but is 
not a checklist of required items in every proposal --meeting all the guidelines does not guarantee approval.
The target audience includes the Team and Director when evaluating proposals to create new Working Groups or rechartering
existing Working Groups to put new work in scope, working group Chairs when determining whether to publish First Public Working Drafts of 
specs that are in a group's chartered scope, and by Advisory Committee representatives when reviewing charters and Proposed Recommendations.

It tries to strike a balance between two classes of criteria:
- "aspirational" considerations such as whether the spec addresses an un-met need or expands the potential of the Web
- "empirical" considerations such as whether drafts of the spec have momentum with implementers and early adopters

Discussion at the [October 2015 Advisory Committee meeting](https://www.w3.org/2015/10/27-ac-minutes.html#item02) 
indicated disparate opinions about whether to insist that proposed work should meet empirical criteria before being
put on the Recommendation track. 

Arguments in favor of mandatory incubation included:
- The  "aspirational" approach  often assumes that whatever a WG produces will be implemented, but WGs without a reality check from implementers tend to create specs that don't get used in the real world.
- Recommendation track documents that don't get implemented or widely used do not advance W3C's mission or enhance its reputation
- The industry overall is moving toward more data-driven decision making
- It's useful to identify *what* criteria are prerequisites for a Recommendation Track effort, but not to prescribe *how* those 
criteria are to be met.  So incubation in a CG is just one way to meet the criteria, not the only way.

Arguments against mandating using W3C Community Groups to incubate proposals until they 
met empirical criteria included:
- Incubation isn't a silver bullet to be applied to every situation
- If a CG incubates a spec that gets implemented in the browsers, it's hard to motivate them to take it to a WG for broad review
- If the CG did not work by consensus, the de facto standard might be imposed by a single strong editor or cabal of the top browsers
- There may be gaps in the patent commitment if all spec contributors to the incubation don't join the WG

The readiness criteria below outline the W3C community's sense of the best practices for striking an appropriate balance among these perspectives.
They encourage all involved in advancing work to the Recommendation track to have more evidence  
*available* for the decision and to think carefully about how to interpret it.  It does not propose an algorithmic process that uses only
hard data without a role for human judgment. 


##Readiness Criteria

The criteria here are used to evaluate whether a proposal indicates that a particular technical specification development effort is
ready for the W3C Recommendation Track. No single factor is decisive, and this document avoids [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt) "MUST" and "SHOULD" terminology, and should not be a taken
as a checklist of necessary or sufficient criteria.  Nevertheless, some criteria are
noted as "strongly recommended", and if not met an explanation of why they don't apply in a particular situation would 
facilitate the Director's decision.  Different cases will involve different combinations of these factors. In determining whether to 
approve moving work to the Recommendation track, the Director may consider
other factors not listed in this document as well.

Assessing whether proposed work is likely to fulfull the W3C mission to [lead the web to its full potential](http://www.w3.org/Consortium/mission)
is the traditional criterion the Team and Director use to evaluate whether to start a working group or advance
a specification.  While this is "aspirational", it requires
judgment that balances the future potential the Web alongside the need for real developers to make the Web work in practice.
This document seeks to make the factors that go into this judgment 
more explicit and generally applicable.  


The "empirical" criteria are inspired largely by the experience of some open source browser projects
that use an [intent to implement](https://docs.google.com/document/d/1vlTlsQKThwaX0-lj_iZbVTzyqY7LioqERU8DK3u3XjI/edit#) process 
to build the case for shipping 
a new feature. This document refines this approach to apply to Recommendation 
Track transition decisions. 
The  [Web Platform Incubator Community Group](https://www.w3.org/community/wicg/)  has adopted 
something similar to [determine when a spec under incubation is ready to propose to a 
Working Group](https://wicg.github.io/admin/intent-to-migrate.html). 

### Problem statement
*Strongly Recommended*:  The proposal identifies the real-world problem this work would address, and why existing solutions are inadequate.  
What are websites forced to do without this feature being available in a standardized way?
What fraction of web sites / applications are implementing a similar feature in a non-standardized way?
How would users benefit from this feature if standardized?
 
### Success criteria
*Strongly Recommended*: The proposal enumerates the types of products (browsers, servers, frameworks,  applications...) would need to support the spec for it to be 
successful, and indicate what degree of critical mass would be needed.  
Is this spec serving a niche market and can be implemented only
by those who need to use it?  Are their critical dependencies, e.g. the spec must be deployed on both 
the cloud/server and browser/client,
or must be supported both in products for producers and consumers of web content, to be really useful?

### Risks
The proposal considers whether standardizing the spec could create more problems than it solves. 
What are the potential downsides of having this feature standardized ...could it undermine security, privacy, accessibility, etc. 
if broadly deployed? Are there scenarios under which we would regret standardizing this feature?

### Socialized proposal
*Strongly Recommended*: An initial draft of the technical specification has been written down and socialized  in a community where web site / app
developer, framework/took developer, and core technology implementers are represented. If that discussion has
generated sustained expressions of opposition or  unwillingness to implement / make patent commitments
from key stakeholders, proposers are well advised to make a persuasive case for how the proposed Recommendation Track work
can be successful in the face of this opposition.

### Expressions of interest
The proposal points to statements of support from key stakeholders about the value proposition for the feature
it describes. Is there a critical mass of implementers tentatively interested in shipping this feature 
if standardized? Are there prototype / polyfill implementations that are used in experimental apps / sites
that developers already find useful?

### Evidence
The proposal  describes what implementation and user experience is there to back up the points above.
What fraction of websites are implementing a similar feature in a non-standardized way?
How many users would potentially benefit from this feature if standardized? 
Hard data is preferred, but estimates backed up by detailed explanations are acceptable.

### Incubation
The draft has matured through an incubation phase  in WICG or another CG, IG, or have been submitted by a member 
organization based on product experience. The language in the
[Web Platform WG charter](http://w3c.github.io/charter-html/group-charter.html#deliverables)  
describes a best practice:
> The Working Group will not adopt new proposals until they have matured through the Web Platform Incubator Community Group or another similar incubation phase.


### Is the timing right? 
The optimal timing for a transition to the Recommendation Track can be described as:
- NO SOONER than the bulk of the criteria above are met.
- NO LATER THAN a point where the spec is still fluid, and  not frozen into shipping code used on many websites.

If the answer “the ship has sailed”, proposers should explain how they propose to mitigate the situation without turning back the clock,
and what a Recommendation Track document could do to improve the situation. For example, clearly documenting what already interoperates,
and getting broader patent commitments on the interoperable behavior arguably has value.


## Additional Considerations

### Clear RF Licensing Commitments
W3C seeks to issue Recommendations that can be implemented on a [Royalty-Free](http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Requiremenst) basis.
1. Are the technologies in the initial available under terms that are compatible with the 
[W3C Royalty-Free licensing requirements](http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Requirements)?
2. Have those who seem most likely to have relevant patents made commitments to license them on 
royalty-free terms?
3. Is the provenance of substantive contributions to the draft reasonably clear?  

### The proposers are not seeking a rubber stamp from W3C
W3C Recommendations signify a broad consensus across the  membership of W3C that a spec both serves a real mainstream need 
and it is inclusive of a diverse, worldwide community using different languages, with various levels of ability, and 
who interact with various levels of trust.  Thus the proposers of Recommendation-track work should be prepared to
accommodate feedback to make a spec more internationalizeable, accessible, secure, etc. Likewise,it should not promote
the interests of one group of members at the expense of another, e.g. taking sides in a product-driven "standards war." 


##Conclusion
The criteria above suggest that Recommendation Track work begin when there are satisfactory answers to 3 basic questions:
- Does the work address a real un-met need or missed opportunity for the Web?
- Does the work start from a concrete proposal that has been socialized with key stakeholders but doesn't discriminate against others?
- Does standardizing the proposed spec have clear support from those who would need to implement and use the spec for it to be successful?




