// Work case studies. Add a new object to add a case study; the routes,
// list, and "next" links all update automatically.
//
// Numbers are intentionally directional, not invented. When you have exact
// figures you're cleared to publish, swap the marked lines.

export const work = [
  {
    slug: 'anomaly-detection',
    title: 'Catching the anomalies a rules engine couldn\u2019t',
    meta: 'FDE \u00b7 2026 \u00b7 Sales/Marketing',
    tags: ['multi-agent', 'ReAct', 'human-in-the-loop'],
    summary:
      'Designed a system of cooperating agents to flag the data anomalies a rules engine kept missing \u2014 embedded with the customer to ship it end to end.',
    sections: [
      {
        heading: 'The problem',
        body:
          'Their rules engine caught the obvious things \u2014 a number out of range, a field gone blank. What it missed were the anomalies that only showed up in how records related to each other, and those were the expensive ones. They\u2019d slip through until someone happened to notice, often weeks and a lot of money later.',
      },
      {
        heading: 'What I built',
        body:
          'A system of cooperating agents instead of one do-everything model. One pulls the relevant context, one reasons over it the way an analyst would, one decides whether something\u2019s actually wrong. A person reviews every flag before it acts \u2014 so the team kept control, and the system earned their trust instead of asking for it up front.',
      },
      {
        heading: 'The outcome',
        // swap in exact figures when cleared (e.g. "cut detection from ~3 weeks to under a day")
        body:
          'Anomalies that used to surface weeks later now get caught the same day. The manual review that used to eat the team\u2019s week dropped to a fraction of it. Just as important, it shipped to production and stayed there.',
      },
    ],
  },
  {
    slug: 'erp-harmonization',
    title: 'Untangling ERP data across a company built by acquisition',
    meta: 'FDE \u00b7 2025\u20132026 \u00b7 Defense',
    tags: ['data pipelines', 'ERP harmonization', 'cost reduction'],
    summary:
      'Unified a patchwork of ERP systems into one pipeline the in-house team could own \u2014 cheaper to run and no longer afraid to touch.',
    sections: [
      {
        heading: 'The problem',
        body:
          'Years of acquisitions had left them with a patchwork of ERP systems that didn\u2019t agree with each other. The same part carried many different names; the same cost got counted multiple ways. Every report meant reconciling by hand, and the pipeline holding it all together was both expensive to run and brittle enough that people were afraid to touch it.',
      },
      {
        heading: 'What I built',
        body:
          'One harmonized pipeline on a shared data model the whole organization could trust, rebuilt so the in-house team could own and extend it after we left \u2014 not a black box that depended on me to keep breathing.',
      },
      {
        heading: 'The outcome',
        // swap "substantially" for the real percentage when ready
        body:
          'Cut the pipeline\u2019s running cost substantially and turned a recurring multi-team reconciliation chore into something that simply ran. The reusable pieces outlived the engagement, which is the part I\u2019m proudest of.',
      },
    ],
  },
]

export const getWork = (slug) => work.find((w) => w.slug === slug)
export const nextWork = (slug) => {
  const i = work.findIndex((w) => w.slug === slug)
  return work[(i + 1) % work.length]
}
