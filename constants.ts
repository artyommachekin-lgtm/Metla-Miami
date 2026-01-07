import { Service, Location, Testimonial } from './types';

export const COMPANY_NAME = "Metla House Cleaning";
export const PHONE_NUMBER = "(786) 723-7533";
export const PHONE_NUMBER_INTL = "+1-786-723-7533";
export const COMPANY_EMAIL = "metlacleanteam@gmail.com";
export const COMPANY_ADDRESS = {
  street: "1221 Brickell Ave",
  city: "Miami",
  state: "FL",
  zip: "33131",
  full: "1221 Brickell Ave, Miami, FL 33131"
};
export const BUSINESS_HOURS = {
  days: "Monday - Sunday",
  open: "9:00 AM",
  close: "7:00 PM",
  display: "Mon-Sun 9am-7pm"
};
export const BOOKING_LINK = "/booking";


export const SERVICES: Service[] = [
  {
    id: 'standard',
    title: "Standard Cleaning",
    slug: "standard-cleaning",
    shortDescription: "Recurring maintenance to keep your home consistently pristine.",
    fullDescription: `Our Standard Cleaning is engineered for the discerning homeowner who requires a consistently pristine living environment. Designed to keep your home in showroom condition, this service is most effective on a weekly or bi-weekly schedule. We focus on maintaining the baseline of cleanliness and order that busy Miami families deserve.

## What to Expect From Your Standard Cleaning

When you book a Standard Cleaning with Metla, you're not just getting a surface wipe-down—you're investing in a systematic approach to home maintenance developed over years of serving South Florida homeowners. Our trained cleaning professionals follow a detailed checklist that covers every room in your home, ensuring nothing is overlooked.

Before your first appointment, we'll discuss your specific needs and any areas that require extra attention. We believe in complete transparency: you'll know exactly what's included before we arrive, and our team will walk through the home with you afterward to ensure your complete satisfaction.

## Our Commitment to Transparency

We know that inviting someone into your home requires trust. That's why we're upfront about our process from the very beginning. Every Metla cleaner undergoes thorough background checks, carries proper insurance, and has been trained in our proprietary 50-point cleaning protocol.

You'll receive a confirmation before each visit with your assigned cleaner's name and expected arrival time. After the cleaning, we provide a summary of the work completed and invite your feedback. If something doesn't meet your expectations, simply let us know within 24 hours and we'll make it right—that's our satisfaction commitment.

## Customer Service That Sets Us Apart

We're not just a cleaning company—we're your partners in maintaining a comfortable home. Our local Miami-based support team is available to answer questions, adjust schedules, and handle any concerns promptly. You'll never be transferred to an overseas call center or left waiting for days for a response.

Need to reschedule? Just give us 24 hours' notice and we'll find a new time that works for you. Have a last-minute request for extra attention in a particular room? Our team can accommodate most requests on the spot. We're flexible because we understand that life doesn't always go according to plan.

## How Our Process Works

**Booking:** Request your service online or by phone. We'll confirm your appointment and answer any questions about what's included.

**Preparation:** On the day of your cleaning, our team arrives with all necessary supplies and equipment. You don't need to provide anything.

**The Cleaning:** We work systematically through your home, following our comprehensive checklist. High-touch surfaces are disinfected, floors are vacuumed and mopped, and every room receives attention.

**Quality Check:** Before leaving, we do a final walkthrough. If you're home, we'll invite you to inspect our work. If not, we'll secure your home and send you a notification that we've finished.

**Follow-Up:** We'll check in to ensure you're satisfied. Your feedback helps us continuously improve our service.

## Building a Lasting Relationship

Many of our clients have been with us for years. They appreciate the consistency of having the same cleaning professional who knows their preferences, their home's quirks, and their standards. Our goal is not just to clean your home—it's to give you back your time and the peace of mind that comes with knowing your space is always ready for whatever life brings.

We understand that every home is different. That's why we listen carefully to your needs and customize our approach accordingly. Whether you're a busy professional, a growing family, or an empty-nester enjoying retirement, we tailor our service to fit your lifestyle.

## The Metla Difference

Choosing Metla means choosing a team that genuinely cares about your satisfaction. We're locally owned and operated right here in Miami, so our reputation in this community matters to us. We don't cut corners, we don't rush, and we don't disappear after the first few appointments. We show up, we do exceptional work, and we're here for the long term.

We focus on maintaining the baseline of cleanliness and order:`,
    focusPoints: [
      {
        title: "Surface Management",
        description: "Routine dusting of furniture, fixtures, and décor to maintain clarity and prevent buildup.",
        iconName: 'Feather'
      },
      {
        title: "Key Area Sanitization",
        description: "Thorough cleaning and disinfection of bathrooms and kitchen countertops.",
        iconName: 'ShieldCheck'
      },
      {
        title: "Visual Reset",
        description: "Light straightening of cushions, chairs, and throw blankets for a composed, orderly look.",
        iconName: 'Armchair'
      },
      {
        title: "Floor Care",
        description: "Vacuuming and mopping to ensure high-traffic areas remain spotless.",
        iconName: 'Sparkles'
      }
    ],
    suitability: {
      title: "Is the Maintenance Clean right for you?",
      text: "This service is designed exclusively for routine upkeep. It is the perfect match if your home has been professionally detailed within the last 30 days and you wish to maintain showroom condition effortlessly.",
      points: [
        "You are looking for reliable weekly or bi-weekly housekeeping.",
        "Your home is generally organized but requires professional surface management.",
        "You want to ensure a consistently pristine environment without the effort.",
        "You do not currently need deep tasks like inside-appliance cleaning (available as add-ons)."
      ],
      footer: "Still unsure if we cover a specific area? Go through the comprehensive checklist below to see exactly what we touch!"
    },
    iconName: 'Sparkles',
    benefits: ["Weekly / Bi-Weekly Schedule", "Surface Disinfection", "Linens & Beds Made"],
    checklist: {
      "Bedrooms": [
        "Furniture dusted",
        "Mirrors cleaned",
        "Bedside tables cleaned",
        "Cobwebs removed",
        "Beds made",
        "Floors vacuumed/mopped"
      ],
      "Bathrooms": [
        "Mirrors cleaned",
        "Sinks and countertop cleaned",
        "Toilet cleaned inside and out",
        "Shower and bathtub cleaned",
        "Cobwebs removed",
        "Garbage disposed of",
        "Floors vacuumed/mopped"
      ],
      "Kitchen": [
        "Fridge exterior cleaned and polished",
        "Cooktop cleaned and polished",
        "Oven exterior cleaned",
        "Microwave cleaned inside and out",
        "Countertops cleaned and disinfected",
        "Sink cleaned",
        "Dishwasher cleaned and polished",
        "Garbage disposed of",
        "Floors vacuumed/mopped",
        "Counter cleaned and polished"
      ],
      "Dining Room": [
        "Furniture dusted",
        "Dining table cleaned",
        "Floors vacuumed/mopped"
      ],
      "Living Areas": [
        "General straighten up",
        "Mirrors cleaned",
        "Coffee tables cleaned",
        "Furniture dusted",
        "Cobwebs removed",
        "Floors vacuumed/mopped"
      ],
      "Office/Study": [
        "Desks cleaned",
        "Furniture dusted",
        "Cobwebs removed",
        "Floors vacuumed/mopped"
      ],
      "Laundry Room": [
        "Light dusting",
        "Cobwebs removed",
        "Floors vacuumed/mopped"
      ],
      "Other": [
        "Light dusting throughout the home",
        "All floors vacuumed and mopped"
      ]
    }
  },
  {
    id: 'deep',
    title: "Deep Cleaning",
    slug: "deep-cleaning-miami",
    shortDescription: "The ultimate home restoration. A top-to-bottom detail designed to eliminate heavy buildup and return your home to immaculate condition.",
    fullDescription: `Our Deep Cleaning is the foundational service for a truly healthy home. Recommended as an initial service for all new clients or as a quarterly refresh, this rigorous detail goes far beyond surface maintenance. We target the "invisible" layer of dirt—the grime that accumulates on baseboards, the dust clinging to ceiling fans, and the residue on cabinet fronts.

## What Makes Deep Cleaning Different

A Standard Cleaning maintains your home's cleanliness. A Deep Cleaning transforms it. Think of it as pressing the reset button—we address the buildup that accumulates over months or even years, returning your home to a baseline of true cleanliness that's easier to maintain going forward.

This service takes significantly more time than a standard cleaning because we're not just wiping surfaces—we're detail-cleaning every area of your home. From scrubbing grout lines to removing hard water deposits, from dusting individual blinds to cleaning the tops of door frames, we leave nothing untouched.

## Complete Transparency in Our Process

We believe you deserve to know exactly what you're paying for. Before your Deep Cleaning appointment, we provide a comprehensive breakdown of what's included. Our detailed checklist (available below) shows every task we'll complete, so there are no surprises.

During the cleaning, our team works methodically room by room. If we encounter areas that need additional attention beyond our standard scope—such as heavy staining or significant buildup—we'll communicate with you before proceeding. You're always in control, and we never add charges without your approval.

After we finish, we invite you to walk through your home with our team. We want you to see the difference and ask any questions. Your satisfaction isn't just a goal—it's our standard.

## Customer-Focused Service From Start to Finish

Scheduling a Deep Cleaning should be easy. Contact us by phone or online, and we'll discuss your home's specific needs. How long has it been since the last professional cleaning? Are there particular areas of concern? Do you have pets or specific products you prefer we use? We listen carefully so we can tailor our approach.

On the day of your service, our team arrives on time with all necessary supplies and equipment. We respect your home—wearing shoe covers, protecting your furniture, and treating your belongings with care. We bring our own professional-grade cleaning products unless you have specific preferences.

Throughout the cleaning, we're available to answer questions or address concerns. You're welcome to remain home, step out, or work from another room. Many clients use Deep Cleaning days as an opportunity to run errands, returning to a transformed home.

## Our Rigorous Training and Standards

Every Metla cleaner has undergone extensive training in our Deep Cleaning protocol. They understand the proper techniques for different surfaces—how to safely clean natural stone versus tile, how to address stainless steel without leaving streaks, how to remove buildup without damaging finishes.

We're fully insured and bonded, and every team member has passed thorough background checks. When you trust us with your home, you can have confidence that our team is professional, reliable, and committed to excellence.

## When You Need a Deep Cleaning

We recommend Deep Cleaning in several situations:

**Before Starting Recurring Service:** If it's been more than a month since your last professional cleaning, we start with a Deep Clean to establish a proper baseline.

**Seasonal Refresh:** Many Miami homeowners schedule quarterly deep cleans—particularly before the holidays, after hurricane season, or at the start of summer.

**Special Occasions:** Hosting a major event? A Deep Clean ensures your home makes the right impression on guests.

**After Extended Absence:** Returning from a long trip? A Deep Clean addresses the dust and staleness that accumulates in vacant homes.

## The Metla Commitment

We stand behind every Deep Cleaning with our satisfaction commitment. If something doesn't meet your expectations, contact us within 24 hours and we'll address the issue at no additional charge. Our reputation in Miami's neighborhoods matters to us—we succeed when you're genuinely delighted with our work.

We're not here for just one cleaning. We're building lasting relationships with South Florida families who value a clean, healthy home. That's why we take the time to get it right.`,
    focusPoints: [
      {
        title: "Intensive Scrubbing",
        description: "Heavy-duty removal of tough soap scum, mineral deposits in bathrooms, and grease buildup in the kitchen.",
        iconName: 'Brush'
      },
      {
        title: "Vertical Detailing",
        description: "We hand-wipe baseboards, door frames, window sills, and cabinet fronts to remove months of accumulated dust.",
        iconName: 'PanelTop'
      },
      {
        title: "High-Low Reach",
        description: "Addressing neglected areas often missed, from ceiling fan blades and AC vents down to floor corners.",
        iconName: 'Fan'
      },
      {
        title: "Fixture Restoration",
        description: "Deep polishing of chrome, stainless steel, and glass fixtures to remove stubborn water spots and restore shine.",
        iconName: 'Gem'
      }
    ],
    suitability: {
      title: "Is the Deep Clean right for you?",
      text: "This service is designed for homes that need a \"hard reset.\" It is the required starting point for most recurring clients to bring the residence up to our professional maintenance standard.",
      points: [
        "It has been more than 30 days since your last professional cleaning.",
        "You can see visible dust on baseboards, blinds, or air vents.",
        "Your kitchen or bathrooms require heavy scrubbing to remove grime or scale.",
        "You are preparing to host an event or beginning a recurring service schedule."
      ],
      footer: "Still unsure if you need a Deep or Standard clean? Check the comprehensive checklist below to see the specific inclusions for this heavy-duty service."
    },
    iconName: 'ShieldCheck',
    benefits: ["Baseboards & Door Frames", "Microwave Inside & Out", "Fans, Blinds & Light Fixtures"],
    checklist: {
      "Bedrooms": [
        "Furniture dusted",
        "Ceiling fans dusted",
        "Window sills dusted",
        "Lamps dusted",
        "Mirrors cleaned",
        "Doors, door frames and door handles cleaned/disinfected",
        "Bedside tables cleaned",
        "Wall hangings dusted",
        "Baseboards dusted",
        "Cobwebs removed",
        "Walls spot cleaned",
        "Blinds dusted"
      ],
      "Bathrooms": [
        "Mirrors cleaned",
        "Sinks and countertop cleaned",
        "Cupboard faces cleaned",
        "Baseboards dusted",
        "Toilet cleaned inside and out",
        "Doors, door frames and door handles cleaned/disinfected",
        "Shower and bathtub cleaned",
        "Towel rack dusted",
        "Soap dispensers, toothbrush holders etc cleaned",
        "Window sills dusted",
        "Cobwebs removed",
        "Garbage disposed",
        "Walls spot cleaned"
      ],
      "Kitchen": [
        "Fridge, oven, dishwasher exterior cleaned/polished",
        "Backsplash cleaned",
        "Cooktop cleaned and polished",
        "Doors, door frames and door handles cleaned/disinfected",
        "Countertops cleaned and disinfected",
        "Microwave cleaned inside and out",
        "Sink cleaned and polished",
        "Sink window cleaned inside",
        "Blinds dusted",
        "Light fixtures dusted",
        "Walls spot cleaned",
        "Baseboards dusted",
        "Cupboard faces cleaned",
        "Garbage disposed"
      ],
      "Dining Room": [
        "Furniture dusted",
        "Wall hangings dusted",
        "Light fixtures dusted",
        "Window sills dusted",
        "Doors, door frames and door handles cleaned/disinfected",
        "Dining table cleaned",
        "Baseboards dusted",
        "Blinds dusted"
      ],
      "Living Areas": [
        "General straighten up",
        "Mirrors cleaned",
        "Light fixtures dusted",
        "Coffee tables cleaned",
        "Wall hangings dusted",
        "Furniture dusted",
        "Walls spot cleaned",
        "Baseboards dusted",
        "Doors, door frames and door handles cleaned/disinfected",
        "Couch vacuumed",
        "Blinds dusted",
        "Ceiling fans dusted",
        "Window sills dusted"
      ],
      "Office/Study": [
        "Desks cleaned",
        "Wall hangings dusted",
        "Doors, door frames and door handles cleaned/disinfected",
        "Ceiling fans dusted",
        "Blinds dusted"
      ],
      "Laundry Room": [
        "Appliance exteriors cleaned",
        "Bench cleaned",
        "Cupboard faces cleaned",
        "Walls spot cleaned",
        "Doors, door frames and door handles cleaned/disinfected"
      ],
      "Other": [
        "Light dusting throughout home",
        "Soap scum removal in showers",
        "All floors vacuumed/mopped",
        "Cobwebs removed",
        "Basic bed making"
      ]
    }
  },
  {
    id: 'post-construction',
    title: "Post-Construction Cleaning",
    slug: "post-construction-cleaning-miami",
    shortDescription: "The final step of your renovation. We remove fine dust and construction residue to reveal the true beauty of your new investment.",
    fullDescription: `Renovation creates a unique type of mess that standard cleaning cannot handle. "Fine particulate dust" settles into the pores of your new flooring, coats your walls, and hides inside air vents. Our Post-Construction Cleaning is a specialized detail designed to safely extract this dust without scratching your new luxury finishes. We use advanced dust-removal methods and microfiber technology to eliminate the "white haze" left behind by drywall and sanding, turning a construction site into a move-in ready home.

## Understanding Post-Construction Cleaning

Construction dust isn't ordinary dust—it's a fine powder composed of drywall compound, sawdust, concrete particles, and other materials that can damage surfaces if not properly removed. Standard vacuums simply recirculate these particles back into the air. Our specialized approach captures and removes this dust permanently.

This isn't about making a dirty home look clean—it's about transitioning a construction zone into a livable space. We understand the substantial investment you've made in your renovation, and we treat every surface with the care it deserves.

## Our Transparent Process

Before we begin, we walk through your property together (virtually or in person) to assess the scope of work. We'll identify areas with heavy dust accumulation, check for adhesive residue on new windows, and note any surfaces requiring special attention. You'll receive a clear explanation of what we'll address and how long the process typically takes.

We communicate openly about what post-construction cleaning does and doesn't include. For example, we clean construction dust but don't remove paint splatters (that's the contractor's responsibility) or deep-clean carpets (a separate specialty service). By setting clear expectations upfront, we ensure your complete satisfaction with the results.

## Protecting Your Investment

Your new countertops, flooring, and fixtures represent a significant investment. We use only non-abrasive techniques and products specifically designed for post-construction cleaning. Our team is trained to identify different materials—natural stone, hardwood, porcelain, stainless steel—and apply appropriate cleaning methods for each.

We take inventory of your home's new features before we begin, documenting their condition. If we discover any issues that appear to be contractor-related (scratches, damage, incomplete work), we'll alert you before proceeding. This documentation protects both you and us, ensuring transparency throughout the process.

## Scheduling and Coordination

Post-construction cleaning should happen after all contractor work is complete but before furniture delivery and move-in. We recommend scheduling your cleaning at least 24-48 hours after the final construction activities to allow any remaining airborne dust to settle.

We coordinate timing carefully. Rushing this process doesn't serve anyone—dust that hasn't settled will simply reappear after we leave. We'd rather schedule correctly the first time than have you disappointed with the results.

If your project involved extensive work, we may recommend a two-phase approach: an initial heavy cleaning immediately after construction, followed by a detail cleaning before move-in. We'll discuss which approach makes sense for your specific situation.

## Customer Service You Can Count On

We know construction projects are stressful. Timelines slip, budgets stretch, and by the time you're ready for cleaning, you're exhausted. That's why we make the final step easy.

Our team arrives prepared with all necessary equipment and supplies. We work efficiently but thoroughly, respecting your timeline while delivering exceptional results. You're welcome to remain on-site to observe our progress or handle other moving logistics—whatever works best for you.

After completing the cleaning, we do a detailed walkthrough together. We want you to see every cleaned surface, open every cabinet, and verify that your new home is truly move-in ready. If anything doesn't meet your expectations, we address it before leaving.

## Our Commitment to Excellence

Post-Construction Cleaning requires specialized skills that not every cleaning service possesses. Our team has extensive experience with renovation cleanups throughout Miami-Dade and Broward County, from condo renovations in Brickell to whole-house remodels in Coral Gables.

We're fully insured with coverage specifically designed for post-construction work. This protects your investment and gives you confidence that we stand behind our service completely.

Your renovation deserves a proper finishing touch. Let us reveal the beauty of your investment.`,
    focusPoints: [
      {
        title: "Fine Dust Extraction",
        description: "We meticulously remove the microscopic layer of drywall dust that settles on walls, baseboards, and ledges.",
        iconName: 'Fan'
      },
      {
        title: "Label & Residue Removal",
        description: "Gentle removal of manufacturer stickers, protective tape, and adhesive residue from new windows and appliances.",
        iconName: 'Eraser'
      },
      {
        title: "Sawdust Removal",
        description: "Deep vacuuming of new cabinetry, drawers, and closets to remove trapped wood shavings and debris.",
        iconName: 'Layers'
      },
      {
        title: "Surface Safety",
        description: "We prioritize the protection of your new investment, using versatile, non-abrasive methods to lift dust and debris without scratching or dulling your finishes.",
        iconName: 'ShieldCheck'
      }
    ],
    suitability: {
      title: "Is Post-Construction Cleaning right for you?",
      text: "This service is designed for properties where major renovation work has just been completed. Please note: All contractors must be fully finished with their work before we arrive.",
      points: [
        "Your builders have vacated, but the home is covered in dust.",
        "You see a \"hazy\" film on your floors or tiles.",
        "New cabinets and drawers are full of sawdust or debris.",
        "You need the space finalized for furniture delivery or photography."
      ],
      footer: "Still unsure if we cover a specific area? Go through the comprehensive checklist below to see exactly what we touch!"
    },
    iconName: 'Hammer',
    benefits: ["Fine Dust Removal", "Inside Cabinets & Drawers", "Interior Windows & Sills"],
    checklist: {
      "Bedrooms": [
        "Ceiling fans dusted",
        "Interior Windows cleaned and sills dusted",
        "Mirrors cleaned",
        "Doors, door frames and door handles cleaned/disinfected",
        "Baseboards dusted",
        "Cobwebs removed",
        "Walls spot cleaned",
        "Blinds dusted"
      ],
      "Bathrooms": [
        "Mirrors cleaned",
        "Sinks cleaned",
        "Cupboards/drawers cleaned inside and out",
        "Baseboards dusted",
        "Toilet cleaned inside and out",
        "Doors, door frames and door handles cleaned/disinfected",
        "Shower and bathtub cleaned",
        "Towel rack dusted",
        "Interior Windows cleaned and sills dusted",
        "Cobwebs removed",
        "Garbage disposed",
        "Walls spot cleaned"
      ],
      "Kitchen": [
        "Fridge, oven, dishwasher exterior cleaned/polished",
        "Fridge, oven interior cleaned",
        "Backsplash cleaned",
        "Cooktop cleaned and polished",
        "Doors, door frames and door handles cleaned/disinfected",
        "Countertops cleaned and disinfected",
        "Microwave cleaned inside and out",
        "Sink cleaned and polished",
        "Interior Windows cleaned and sills dusted",
        "Blinds dusted",
        "Light fixtures dusted",
        "Walls spot cleaned",
        "Baseboards dusted",
        "Cupboards/drawers cleaned inside and out"
      ],
      "Dining Room": [
        "Light fixtures dusted",
        "Windows cleaned and sills dusted",
        "Doors, door frames and door handles cleaned/disinfected",
        "Dining table cleaned",
        "Baseboards dusted",
        "Blinds dusted"
      ],
      "Living Areas": [
        "Light fixtures dusted",
        "Walls spot cleaned",
        "Baseboards dusted",
        "Doors, door frames and door handles cleaned/disinfected",
        "Blinds dusted",
        "Ceiling fans dusted",
        "Window sills dusted"
      ],
      "Office/Study": [
        "Doors, door frames and door handles cleaned/disinfected",
        "Ceiling fans dusted",
        "Blinds dusted"
      ],
      "Laundry Room": [
        "Appliance exteriors cleaned",
        "Bench cleaned",
        "Cupboards/drawers cleaned inside and out",
        "Walls spot cleaned",
        "Doors, door frames and door handles cleaned/disinfected"
      ],
      "Other": [
        "Soap scum removal in showers",
        "All floors vacuumed/mopped",
        "Cobwebs removed",
        "Details to make home look as close to new as possible"
      ]
    }
  },
  {
    id: 'vacation-rental',
    title: "Vacation Rental Cleaning",
    slug: "vacation-rental-cleaning-airbnb",
    shortDescription: "Seamless turnovers for high-performing hosts. We ensure your property is hotel-ready for every single guest check-in.",
    fullDescription: `In the competitive Miami short-term rental market, cleanliness is the single biggest factor in your guest ratings. Our Vacation Rental service is not just a cleaning—it's a "hospitality turnover." We act as your eyes and ears on the ground, staging your property for maximum visual impact and ensuring that every guest feels they're the first person to stay there. We help hosts maintain their reputation with consistent, reliable quality on every turnover.

## Built for Airbnb, VRBO, and Short-Term Rental Hosts

We understand the unique pressures of vacation rental management. Check-out at 11 AM, check-in at 3 PM—and everything needs to be perfect. Our turnover service is designed around these tight windows, combining efficiency with thoroughness to get your property guest-ready on schedule.

We've cleaned hundreds of vacation rentals across Miami Beach, Brickell, Wynwood, and throughout South Florida. We know what guests expect in this market and what triggers negative reviews. Cleanliness complaints are the number one reason for rating downgrades—and the easiest to prevent with the right cleaning partner.

## Complete Transparency in Our Service

You'll always know exactly what we do during each turnover. Our comprehensive checklist (detailed below) covers every room and every task, from stripping beds to restocking toiletries. You can review this list before your first booking to ensure it matches your property's specific needs.

After each cleaning, we send you a completion notification so you know the property is ready. If you use a property management platform that integrates with scheduling tools, we can coordinate timing to minimize gaps between guest stays.

We're upfront about what's included and what falls outside standard turnover scope. Deep cleaning tasks (oven interiors, refrigerator deep-clean, etc.) are available when needed but aren't part of every turnover. We'll recommend them when we notice buildup that regular turnovers won't address.

## Communication You Can Rely On

The worst thing a host can experience is radio silence from their cleaning team. A guest is arriving in hours, and you don't know if the property is ready. We eliminate that anxiety.

You'll receive confirmation when our team arrives and notification when we're finished. If we encounter any issues—damage from a previous guest, items that need restocking, maintenance problems we notice—we alert you immediately with photos. This gives you time to address issues before the next guest arrives.

Scheduling changes happen. Guests extend stays, cancel last-minute, or arrive early. We're flexible and work with you to adjust as needed. Just give us as much notice as possible, and we'll do our best to accommodate.

## Damage Reporting and Property Protection

We function as your property's first line of defense. During every turnover, our team conducts a visual inspection. We document any damage, stains, or missing items we discover—information you need to file claims with guests or platforms.

This isn't just about protecting you financially. It's about maintaining your property's condition over time. Catching issues early (a drip under the bathroom sink, a cracked tile, a malfunctioning lock) prevents small problems from becoming expensive repairs.

We photograph the property during our inspections, giving you a record of its condition after each guest. This documentation has proven invaluable for hosts handling damage disputes.

## Hotel-Style Presentation

First impressions matter. When your guests walk in, they should feel like they've entered a professionally managed hotel—not someone's spare bedroom. Our staging protocols ensure consistent, welcoming presentation.

Towels are folded in uniform style. Beds are made with crisp, tight corners. Decorative elements are arranged attractively. The space looks intentional and cared for.

These details might seem small, but they're what separate good reviews from great ones. They tell guests that the host cares about their experience.

## Building a Partnership

Managing vacation rentals is demanding work. You deserve a cleaning partner who reduces your stress rather than adding to it. We show up when scheduled, we do exceptional work, and we communicate proactively.

Many of our clients have been with us since they started hosting. They trust us with their properties, their reviews, and their rental income. We take that responsibility seriously.

Whether you manage one unit or a portfolio of properties, we bring the same level of care and professionalism to every turnover. Your guests' five-star reviews—and your peace of mind—are our ultimate goal.`,
    focusPoints: [
      {
        title: "Rapid Turnover",
        description: "Efficient, focused workflows designed to get your unit perfectly prepped and ready within standard check-out/check-in windows.",
        iconName: 'Clock'
      },
      {
        title: "Hotel-Style Staging",
        description: "We arrange linens, fold towels, and organize amenities to create a professional, welcoming first impression for guests.",
        iconName: 'Bed'
      },
      {
        title: "Damage Reporting",
        description: "If we spot damage, stains, or missing items from a previous guest, we notify you immediately so you can manage claims.",
        iconName: 'Camera'
      },
      {
        title: "Sanitization Focus",
        description: "Priority disinfection of high-touch points to ensure guest safety and peace of mind.",
        iconName: 'Sparkles'
      }
    ],
    suitability: {
      title: "Is the Vacation Rental service right for you?",
      text: "This service is specifically tailored for Airbnb, VRBO, and short-term rental hosts. It focuses on presentation and sanitization between guest stays.",
      points: [
        "You manage a short-term rental and need reliable turnovers.",
        "You need a cleaning partner who understands \"check-in ready\" presentation.",
        "You require notification of any issues or damages left by previous guests.",
        "You are looking to maintain or achieve 5-star cleanliness ratings."
      ],
      footer: "Need to know if we handle laundry or specific restocking? Check the comprehensive checklist below for our turnover specifications."
    },
    iconName: 'Key',
    benefits: ["Linen Turnover & Staging", "Visual Verification Photos", "Damage Reporting"],
    checklist: {
      "Bedrooms": [
        "Linen Turnover: Strip beds; wash and change all linens",
        "Staging: Make beds with 'hospital corners' and arrange pillows neatly",
        "Guest Check: Check drawers and under beds for left-behind items",
        "Furniture: Dust all surfaces, including headboards and bedside tables",
        "Mirrors: Clean and polish streak-free",
        "Floors: Vacuum carpets (including under the bed) and mop hard floors",
        "Sanitize: Wipe down light switches and door handles"
      ],
      "Bathrooms": [
        "Restocking: Refill hand soap, shampoo/conditioner, ensure extra toilet paper",
        "Towels: Replace used towels with fresh, professionally folded sets",
        "Deep Clean: Scrub toilet (inside/out/base), shower walls, bathtub, and sink",
        "Detailing: Polish faucets and mirrors; ensure no hair in drains",
        "Floors: Vacuum and mop, paying attention to corners/behind toilet",
        "Trash: Empty bin and replace liner"
      ],
      "Kitchen": [
        "Fridge: Empty all food; wipe down interior shelves and exterior",
        "Appliances: Clean microwave (in/out), wipe stovetop, check oven interior",
        "Dishes: Empty dishwasher; check cupboards for clean/chip-free dishes",
        "Restocking: Refill coffee/tea, replace paper towels, fresh sponge/trash bag",
        "Sanitize: Disinfect countertops, sink, and cabinet handles",
        "Floors: Vacuum and mop; wipe down baseboards"
      ],
      "Living Areas": [
        "Staging: Fluff sofa cushions, arrange throw blankets, straighten decor",
        "Sanitize High-Touch: Disinfect TV remotes, WiFi router, and light switches",
        "Furniture: Dust coffee tables, TV stands, and shelves",
        "Floors: Vacuum area rugs, sofas (under cushions), and mop floors",
        "Patio/Entry: Sweep entrance and wipe down outdoor furniture"
      ],
      "Dining Room": [
        "Furniture: Dust dining table and chairs; wipe down placemats",
        "Staging: Arrange chairs neatly and ensure centerpiece is centered",
        "Floors: Vacuum and mop thoroughly"
      ],
      "Laundry / Utility Room": [
        "Appliances: Wipe down washer/dryer exterior; clean dryer lint trap",
        "Restocking: Ensure laundry detergent and dryer sheets are stocked",
        "Floors: Vacuum and mop"
      ],
      "General / Inspections": [
        "Damage Check: Walk through and report broken items/stains immediately",
        "Safety Check: Test smoke detectors and check smart lock/keypad",
        "Thermostat: Reset to standard temperature (e.g., 72°F)",
        "Lights: Check all bulbs; replace if dimmed or burnt out",
        "Secure: Ensure all windows and doors are locked before leaving"
      ]
    }
  },
  {
    id: 'move-in-out',
    title: "Move-In / Move-Out Cleaning",
    slug: "move-in-out-cleaning",
    shortDescription: "A comprehensive reset for empty homes. Designed to meet strict property management standards and help you achieve a pristine fresh start for your new residence.",
    fullDescription: `Our Move-In / Move-Out service is our most exhaustive cleaning package, engineered exclusively for empty properties. Whether you're handing the keys back to a landlord, preparing a newly purchased home for your family, or turning over a rental unit between tenants, this service leaves zero trace of the previous occupants. Unlike furnished home cleanings, this service reaches the areas usually blocked by furniture—we focus on "interior" detailing to ensure the property is truly turnkey ready.

## What Makes Move-In/Move-Out Cleaning Different

Empty homes reveal what furnished homes hide. When furniture moves out, you see dust bunnies behind sofas, scuff marks on baseboards, grime inside cabinets, and residue in appliances. Our Move-In/Move-Out service addresses all of this—the complete interior of your home, from ceiling to floor, inside and out.

This isn't a quick surface clean. We clean inside every cabinet, every drawer, every closet. We detail appliance interiors—the oven, refrigerator, microwave, and dishwasher. We scrub bathrooms to remove hard water deposits and soap scum buildup. We eliminate the traces that time and daily living leave behind.

## Complete Transparency From Start to Finish

We know this cleaning often ties into important deadlines—lease end dates, closing timelines, or new tenant move-ins. That's why we're crystal clear about our process and timing from the beginning.

Before your cleaning, we'll discuss the property's size, condition, and any specific concerns. We'll give you an honest assessment of how long the job will take and what results you can expect. If the property needs more extensive work than a standard move-in/out clean, we'll tell you upfront rather than surprising you later.

Our comprehensive checklist (below) shows exactly what we include. You'll know what we clean, how we clean it, and what areas receive the most attention. There are no hidden tasks—what we promise is what we deliver.

## Meeting Property Management Standards

If you're a renter fulfilling lease requirements, you need a cleaning that satisfies your landlord or property manager. Our service is designed to meet professional real estate standards for turnover cleanliness.

We understand what property managers look for during walkthroughs: clean appliance interiors, spotless bathroom fixtures, dust-free blinds, and floors free of marks and residue. We address each of these systematically, helping you leave your rental in condition that meets—or exceeds—lease requirements.

For landlords and property managers, we deliver units that are ready for listing photos and tenant showings. A professionally cleaned unit rents faster and attracts quality tenants who expect a high standard of maintenance.

## Customer Service Throughout the Process

Moving is one of life's most stressful experiences. The last thing you need is uncertainty about whether your cleaning will be done on time and done right.

When you book with us, you'll receive confirmation of your appointment and clear communication about arrival time. Our team shows up prepared with all necessary supplies and equipment—you don't need to provide anything.

During the cleaning, we're focused but available. If you need to ask a question or point out a specific concern, we're happy to address it. If you're not on-site, we'll secure the property and let you know when we're finished.

After completion, we recommend being present for a final walkthrough if possible. We want you to see the results before we leave and address any concerns on the spot. Your satisfaction with our work is our priority.

## Scheduling Flexibility When You Need It

We understand that moving timelines shift. Closings get delayed, lease end dates change, furniture delivery gets rescheduled. We work with you to accommodate these changes whenever possible.

Need an evening or weekend appointment? We offer flexible scheduling to fit your timeline. Need to adjust your booking at the last minute? Contact us, and we'll do our best to find a solution.

## The Metla Standard

Every Move-In/Move-Out cleaning comes with our satisfaction commitment. If something doesn't meet your expectations, let us know within 24 hours and we'll address it. We're not satisfied until you are.

Your new beginning—or your successful property turnover—starts with a truly clean space. Let us help you achieve it.`,
    focusPoints: [
      {
        title: "Cabinetry Interiors",
        description: "We vacuum and hand-wipe the interior and exterior of all kitchen and bathroom cabinets, drawers, and shelving.",
        iconName: 'Layers'
      },
      {
        title: "Appliance Detailing",
        description: "Deep cleaning of the interiors of the refrigerator, oven, and microwave to remove food residue and odors.",
        iconName: 'Sparkles'
      },
      {
        title: "Full Sanitization",
        description: "A complete disinfection of all surfaces, switches, and handles to ensure a hygienic environment for the new resident.",
        iconName: 'ShieldCheck'
      },
      {
        title: "Inspection Ready",
        description: "We adhere to professional real estate checklists to ensure the home meets the rigorous cleanliness standards required for turnover.",
        iconName: 'ClipboardCheck'
      }
    ],
    suitability: {
      title: "Is the Move-In / Move-Out Clean right for you?",
      text: "This service is strictly for homes that are completely empty (no furniture). It is the professional standard for lease turnovers and real estate closings.",
      points: [
        "The home is empty of all furniture and personal items.",
        "You need a \"clean slate\" feeling before moving your family in.",
        "You are a tenant looking to fulfill your lease's professional cleaning requirements.",
        "You are a landlord or realtor preparing a unit for listing photos."
      ],
      footer: "Still unsure if we cover a specific area? Go through the comprehensive checklist below to see exactly what we touch!"
    },
    iconName: 'Move',
    benefits: ["Inside Fridge & Oven", "Inside Cabinets & Drawers", "Interior Windows & Sills"],
    checklist: {
      "Bedrooms": [
        "Ceiling fans dusted",
        "Interior Windows cleaned and sills dusted",
        "Mirrors cleaned",
        "Doors, door frames and door handles cleaned/disinfected",
        "Baseboards dusted",
        "Cobwebs removed",
        "Walls spot cleaned",
        "Blinds dusted"
      ],
      "Bathrooms": [
        "Mirrors cleaned",
        "Sinks cleaned",
        "Cupboards/drawers cleaned inside and out",
        "Baseboards dusted",
        "Toilet cleaned inside and out",
        "Doors, door frames and door handles cleaned/disinfected",
        "Shower and bathtub cleaned",
        "Towel rack dusted",
        "Interior Windows cleaned and sills dusted",
        "Cobwebs removed",
        "Garbage disposed",
        "Walls spot cleaned"
      ],
      "Kitchen": [
        "Fridge, oven, dishwasher exterior cleaned/polished",
        "Fridge, oven interior cleaned",
        "Backsplash cleaned",
        "Cooktop cleaned and polished",
        "Doors, door frames and door handles cleaned/disinfected",
        "Countertops cleaned and disinfected",
        "Microwave cleaned inside and out",
        "Sink cleaned and polished",
        "Interior Windows cleaned and sills dusted",
        "Blinds dusted",
        "Light fixtures dusted",
        "Walls spot cleaned",
        "Baseboards dusted",
        "Cupboards/drawers cleaned inside and out"
      ],
      "Dining Room": [
        "Light fixtures dusted",
        "Windows cleaned and sills dusted",
        "Doors, door frames and door handles cleaned/disinfected",
        "Dining table cleaned",
        "Baseboards dusted",
        "Blinds dusted"
      ],
      "Living Areas": [
        "Light fixtures dusted",
        "Walls spot cleaned",
        "Baseboards dusted",
        "Doors, door frames and door handles cleaned/disinfected",
        "Blinds dusted",
        "Ceiling fans dusted",
        "Window sills dusted"
      ],
      "Office/Study": [
        "Doors, door frames and door handles cleaned/disinfected",
        "Ceiling fans dusted",
        "Blinds dusted"
      ],
      "Laundry Room": [
        "Appliance exteriors cleaned",
        "Bench cleaned",
        "Cupboards/drawers cleaned inside and out",
        "Walls spot cleaned",
        "Doors, door frames and door handles cleaned/disinfected"
      ],
      "Other": [
        "Soap scum removal in showers",
        "All floors vacuumed/mopped",
        "Cobwebs removed",
        "Details to make home look as close to new as possible"
      ]
    }
  }
];

export const LOCATIONS: Location[] = [
  {
    name: "Miami",
    slug: "miami",
    type: "Urban Core",
    description: "Comprehensive cleaning services for the greater Miami metropolitan area.",
    tagline: "Premium house cleaning for Miami's diverse neighborhoods—from downtown high-rises to suburban family homes.",
    detailedContent: `Experience the pinnacle of urban living with Metla House Cleaning, the premier choice for residential cleaning throughout Greater Miami. Born from our roots as frustrated property managers who demanded perfection, we bring a hospitality-grade attention to detail that generic maid services simply cannot match.

Miami isn't one neighborhood—it's a tapestry of distinct communities, each with unique housing styles and cleaning challenges. From the sleek high-rises of Downtown and Edgewater to the family homes of Kendall and Pinecrest, from the artistic lofts of Wynwood to the waterfront estates of Key Biscayne, we've cleaned them all. We understand that a 1950s Coral Gables estate needs different care than a brand-new Brickell condo.

Our Miami-based team knows this city intimately. We understand the humidity that causes buildup in closets and bathrooms. We know how construction dust from Miami's constant growth infiltrates even well-sealed homes. We're familiar with the salt air that drifts blocks inland. And we appreciate that Miami residents—whether busy professionals, active retirees, or growing families—expect their homes to be clean, healthy, and ready for whatever the Magic City throws at them.

Whether you need recurring maintenance to keep pace with Miami's rapid lifestyle, a deep clean to reset your home, or specialized service for a vacation rental, Metla delivers consistent five-star results. We're the trusted choice for Miami homeowners who refuse to settle for "good enough."`,
    keywords: ["House cleaning Miami", "Maid service Miami", "Cleaning services Miami FL", "Miami house cleaners"],
    popularServiceIds: ["move-in-out", "standard", "post-construction"],
    housingTypes: [
      "High-Rise Condos",
      "Single-Family Homes",
      "Townhouses",
      "Waterfront Estates",
      "Historic Homes",
      "New Construction"
    ],
    landmarks: [
      "Downtown Miami",
      "Miami Design District",
      "Wynwood Arts District",
      "Perez Art Museum Miami",
      "Adrienne Arsht Center",
      "American Airlines Arena",
      "Bayside Marketplace"
    ],
    neighborhoods: [
      "Downtown",
      "Edgewater",
      "Midtown",
      "Wynwood",
      "Upper East Side",
      "Little Havana",
      "Kendall",
      "Pinecrest",
      "Key Biscayne"
    ],
    zipCodes: ["33125", "33126", "33127", "33128", "33132", "33136", "33137"],
    cleaningChallenges: [
      {
        title: "Tropical Humidity",
        description: "Miami's year-round humidity creates ideal conditions for dust and buildup. We pay special attention to moisture-prone areas like bathrooms, closets, and window seals."
      },
      {
        title: "Urban Construction Dust",
        description: "Miami's skyline is constantly changing, and construction dust travels far. Our thorough cleaning methods capture fine particles that settle on surfaces throughout your home."
      },
      {
        title: "Salt Air Intrusion",
        description: "Even miles from the beach, salt air affects Miami homes. We clean and protect surfaces from salt residue that corrodes and dulls finishes."
      },
      {
        title: "Diverse Housing Stock",
        description: "From 1920s bungalows to 2024 condos, Miami's housing requires varied expertise. We tailor our approach to each property type."
      }
    ],
    propertyManagerContent: "Managing properties across Miami? We provide reliable service for Airbnb turnovers, tenant move-outs, and real estate showings throughout the city. Quick response times, consistent quality, and the flexibility to handle same-day requests when you need them."
  },
  {
    name: "Brickell",
    slug: "brickell",
    type: "Urban Core",
    description: "Serving the Manhattan of the South with high-efficiency condo cleaning.",
    tagline: "Keeping Brickell high-rises pristine—where busy professionals come home to perfection.",
    detailedContent: `Elevate your high-rise lifestyle with Metla House Cleaning, the authority on luxury condo cleaning in Brickell. Living in Miami's Financial District offers unparalleled energy—world-class dining at Brickell City Centre, morning runs along The Underline, and stunning bay views from your 40th-floor balcony. But maintaining a pristine condo amidst the bustle requires more than a standard cleaning service.

As former property managers who serviced luxury vacation rentals in this very neighborhood, we understand what it takes to keep a Brickell residence at five-star standards. We know the concierge at your building. We understand the freight elevator schedules. We're familiar with the specific requirements of major condo associations from Icon Brickell to Brickell Heights.

Our specialized high-rise cleaning addresses the unique challenges of vertical living. Floor-to-ceiling windows require streak-free techniques that account for sun exposure and salt air drift from the bay. Urban dust from nearby construction settles faster in Brickell than anywhere else in Miami—requiring detailed surface cleaning. And with most Brickell residents working demanding professional schedules, we offer flexible timing that fits your lifestyle.

Whether you're a finance professional at one of the Brickell Avenue towers, a remote worker enjoying your home office with a view, or an investor maintaining a rental property, Metla delivers the reliability, discretion, and quality that Brickell demands. We don't just clean condos—we maintain the lifestyle you've worked hard to achieve.`,
    keywords: ["Maid service Brickell", "Condo cleaning Brickell", "House cleaning Brickell Miami"],
    popularServiceIds: ["vacation-rental", "standard", "move-in-out"],
    housingTypes: [
      "Luxury High-Rise Condos",
      "Brickell Key Waterfront Units",
      "Brickell City Centre Residences",
      "Class-A Office Building Apartments",
      "New Construction Condos"
    ],
    landmarks: [
      "Brickell City Centre",
      "Mary Brickell Village",
      "The Underline",
      "Brickell Key",
      "Icon Brickell",
      "Four Seasons Hotel",
      "SLS Brickell",
      "Brickell Financial District"
    ],
    neighborhoods: [
      "Brickell Key",
      "Brickell Avenue",
      "West Brickell",
      "The Roads",
      "Brickell Hammock"
    ],
    zipCodes: ["33129", "33130", "33131"],
    cleaningChallenges: [
      {
        title: "Floor-to-Ceiling Window Care",
        description: "High-rise living means stunning views—but also challenging window maintenance. We use professional-grade glass cleaning techniques that handle sun exposure, salt drift, and hard water spots without streaking."
      },
      {
        title: "Urban Construction Dust",
        description: "Brickell's constant development means fine construction dust infiltrates even sealed condos. Our thorough cleaning techniques capture particles that standard cleaning methods miss."
      },
      {
        title: "High-Rise Logistics",
        description: "We coordinate with building management on freight elevator schedules, loading dock access, and time-restricted cleaning hours common in luxury buildings."
      },
      {
        title: "Humidity Control Indoors",
        description: "AC systems work overtime in Brickell. We pay attention to humidity-prone areas like bathroom fans, closets, and window seals that moisture affects most."
      }
    ],
    propertyManagerContent: "Managing Airbnbs or rental units in Brickell? We've turned over hundreds of vacation rentals in this neighborhood. We know Icon's security protocols, Echo's check-in procedures, and what guests expect from a Brickell stay. Quick turnovers, consistent 5-star cleanliness, and reliable scheduling—even during Art Basel and F1 weekend rushes."
  },
  {
    name: "Coconut Grove",
    slug: "coconut-grove",
    type: "Urban Core",
    description: "Organic and detailed cleaning for the Grove's unique properties.",
    tagline: "Preserving the bohemian spirit of the Grove—where historic charm meets tropical luxury.",
    detailedContent: `Discover a higher standard of cleanliness in Coconut Grove with Metla House Cleaning, where we treat your historic estate or modern bungalow with the reverence it deserves. The Grove isn't just a neighborhood—it's a lifestyle. Nestled among ancient banyan trees, steps from Vizcaya Museum & Gardens and the vibrant energy of CocoWalk, this is Miami's most unique community.

Grove homes present challenges you won't find anywhere else in Miami. Those magnificent banyans drop leaves, aerial roots, and debris year-round. The lush tropical landscaping that makes the Grove beautiful also tracks organic matter into your home. And the proximity to Biscayne Bay means humidity levels that can cause buildup in even well-maintained homes.

We founded Metla because we saw too many historic Grove properties treated like tract homes by generic cleaning services. Your 1920s Mediterranean revival with original Cuban tile floors needs different care than a new-build condo. Your waterfront estate near Dinner Key Marina requires attention to salt air exposure. Your mid-century modern with walls of glass demands streak-free technique.

Whether you're in a bayfront mansion in South Grove, a family home near Ransom Everglades, or one of the new luxury residences at Park Grove, we deliver the detailed, eco-conscious cleaning that Grove residents expect. We use green products that are safe for the families, pets, and wildlife that make this neighborhood special—and gentle enough for your home's unique character.`,
    keywords: ["Green cleaning Coconut Grove", "House cleaning Coconut Grove", "Maid service Coconut Grove", "Eco-friendly cleaning Miami"],
    popularServiceIds: ["deep", "standard", "post-construction"],
    housingTypes: [
      "Historic Estates",
      "Waterfront Mansions",
      "Mediterranean Revival Homes",
      "Modern Bungalows",
      "Mid-Century Modern Homes",
      "Luxury Condo Towers"
    ],
    landmarks: [
      "Vizcaya Museum & Gardens",
      "CocoWalk",
      "Dinner Key Marina",
      "The Barnacle Historic State Park",
      "Peacock Park",
      "Park Grove",
      "Ransom Everglades School"
    ],
    neighborhoods: [
      "South Grove",
      "North Grove",
      "Center Grove",
      "Bay Heights",
      "Tigertail"
    ],
    zipCodes: ["33133", "33129"],
    cleaningChallenges: [
      {
        title: "Banyan Tree & Tropical Debris",
        description: "The Grove's famous banyans and lush landscaping drop leaves, roots, and organic matter constantly. We address debris tracked into homes and organic staining on outdoor surfaces."
      },
      {
        title: "Historic Home Preservation",
        description: "Cuban tile, coral stone, and original hardwoods require specialized care. We use appropriate products and techniques for historic materials."
      },
      {
        title: "Bayfront Humidity & Salt",
        description: "Proximity to Biscayne Bay means higher humidity and salt exposure. We pay attention to moisture-prone areas and protect surfaces from salt damage."
      },
      {
        title: "Eco-Friendly Requirements",
        description: "Grove residents care about environmental impact. We use green, biodegradable products safe for families, pets, and the local ecosystem."
      }
    ],
    propertyManagerContent: "Managing luxury rentals in the Grove? From bayfront estates to Park Grove condos, we handle turnover cleaning with the attention to detail that discerning guests expect. We understand the Grove's character and ensure your property reflects its unique charm."
  },
  {
    name: "Miami Beach",
    slug: "miami-beach",
    type: "Gold Coast",
    description: "Specialized vacation rental turnovers for Art Deco district and luxury condos.",
    tagline: "From South Beach to North Beach—keeping Miami Beach vacation rentals and residences guest-ready year-round.",
    detailedContent: `Metla House Cleaning brings unmatched expertise to Miami Beach, combining our background in luxury vacation rental management with the specific needs of this iconic coastal community. Living in Miami Beach means embracing the beach lifestyle—morning swims at Lummus Park, sunset cocktails on Ocean Drive, and evenings strolling the Art Deco Historic District. It also means battling constant sand, salt air, and humidity that challenge even the most diligent homeowner.

We founded Metla after years of frustration with "good enough" cleaning services that didn't understand the unique demands of Miami Beach properties. Sand tracks in from the beach no matter how careful you are. Salt air corrodes fixtures and leaves residue on windows. Humidity creates conditions in closets and bathrooms that need extra attention. And vacation rental guests expect hotel-level cleanliness—every single time.

Our team has serviced over 70 vacation rentals in Miami Beach alone, giving us intimate knowledge of what it takes to maintain five-star ratings. We know the security procedures at Faena, the check-in requirements at 1 Hotel, and the tight turnaround windows that South Beach rentals demand during Art Basel, Miami Swim Week, and peak season.

For full-time residents, we provide the same hospitality-grade standards to your private home. Whether you live in a historic Art Deco apartment near Lincoln Road, a modern condo overlooking South Pointe Park, or a family home in North Beach, Metla delivers consistent, reliable cleaning that lets you enjoy everything Miami Beach has to offer—without coming home to sandy floors and salt-streaked windows.`,
    keywords: ["Airbnb cleaning Miami Beach", "Vacation rental cleaning South Beach", "House cleaning Miami Beach", "Maid service South Beach"],
    popularServiceIds: ["vacation-rental", "deep", "move-in-out"],
    housingTypes: [
      "Art Deco Apartments",
      "Oceanfront Condos",
      "Luxury High-Rises",
      "Vacation Rental Properties",
      "Historic Boutique Buildings",
      "Beachfront Penthouses"
    ],
    landmarks: [
      "Lincoln Road Mall",
      "Ocean Drive",
      "Lummus Park Beach",
      "South Pointe Park",
      "Collins Avenue",
      "Art Deco Historic District",
      "Faena Hotel",
      "Fontainebleau Miami Beach",
      "Miami Beach Convention Center"
    ],
    neighborhoods: [
      "South Beach (SoBe)",
      "Mid-Beach",
      "North Beach",
      "Collins Park",
      "Sunset Harbour",
      "South of Fifth (SoFi)",
      "Oceanfront"
    ],
    zipCodes: ["33139", "33140", "33141"],
    cleaningChallenges: [
      {
        title: "Constant Sand Infiltration",
        description: "Living steps from the beach means sand in every crevice. We use specialized techniques to remove sand from floors, furniture, and textiles without damaging surfaces."
      },
      {
        title: "Salt Air Corrosion",
        description: "Ocean salt deposits on windows, fixtures, and outdoor furniture. We use protective cleaning products that remove salt residue and help prevent future buildup."
      },
      {
        title: "Tropical Humidity",
        description: "Miami Beach's humidity requires attention to moisture-prone areas like closets, bathrooms, and AC vents. We focus on keeping these spaces clean and fresh."
      },
      {
        title: "Guest-Ready Turnovers",
        description: "Vacation rentals need hotel-level deep cleaning between every guest. We specialize in fast, thorough turnovers that maintain your 5-star rating."
      }
    ],
    propertyManagerContent: "Running Airbnbs on South Beach? We know this market inside and out. Quick same-day turnovers during peak season, flexible scheduling around guest check-ins, and the attention to detail that earns Superhost status. From studio apartments on Collins to penthouses on South of Fifth, we've cleaned them all."
  },
  {
    name: "Bal Harbour",
    slug: "bal-harbour",
    type: "Gold Coast",
    description: "White-glove service for exclusive Bal Harbour residences.",
    tagline: "Ultra-luxury cleaning for Miami's most exclusive enclave—where discretion meets perfection.",
    detailedContent: `For the discerning residents of Bal Harbour, Metla House Cleaning offers a white-glove service that mirrors the exclusivity of the Bal Harbour Shops. This isn't just another Gold Coast neighborhood—it's one of the most affluent communities in America, and your residence deserves cleaning service that matches.

We understand that maintaining a home in buildings like the St. Regis, Oceana Bal Harbour, or the Ritz-Carlton Residences requires more than cleaning—it requires careful stewardship of investment-grade finishes and fine materials. Italian marble floors, custom millwork, designer fixtures—these elements demand expertise that typical cleaning services simply don't possess.

Our vetted, professional team provides discreet, reliable, and meticulous housekeeping. We're familiar with the building protocols, security requirements, and scheduling expectations of Bal Harbour's most prestigious addresses. We combat the salt spray from Haulover Inlet while protecting your investment in designer surfaces and luxury appliances.

Whether you're a full-time resident, a seasonal snowbird who needs your residence fresh upon arrival, or an investor maintaining a rental property, Metla delivers the elevated standard of service that Bal Harbour residents expect. Privacy, perfection, and professionalism—that's the Metla promise.`,
    keywords: ["Luxury maid service Bal Harbour", "House cleaning Bal Harbour", "Condo cleaning Bal Harbour"],
    popularServiceIds: ["deep", "standard", "move-in-out"],
    housingTypes: [
      "Ultra-Luxury Oceanfront Condos",
      "Five-Star Residences",
      "Penthouse Units",
      "Seasonal Residences",
      "Investment Properties"
    ],
    landmarks: [
      "Bal Harbour Shops",
      "St. Regis Bal Harbour",
      "Oceana Bal Harbour",
      "Ritz-Carlton Bal Harbour",
      "Haulover Beach Park",
      "Bal Harbour Beach"
    ],
    neighborhoods: [
      "Bal Harbour Village",
      "Oceanfront Collins Avenue"
    ],
    zipCodes: ["33154"],
    cleaningChallenges: [
      {
        title: "Luxury Finish Protection",
        description: "Italian marble, custom cabinetry, and designer fixtures require specialized products and techniques. We know what's safe for your investment."
      },
      {
        title: "Salt Air Exposure",
        description: "Oceanfront living means constant salt exposure. We protect and clean surfaces to prevent corrosion and maintain luster."
      },
      {
        title: "Building Security Protocols",
        description: "We're familiar with the security and access requirements of Bal Harbour's prestigious buildings. Vetted, insured, and professional."
      },
      {
        title: "Seasonal Residence Preparation",
        description: "Many Bal Harbour residents are seasonal. We provide pre-arrival deep cleans and maintenance to ensure your home is perfect when you arrive."
      }
    ],
    propertyManagerContent: "Managing luxury rentals in Bal Harbour? We handle the white-glove service that high-net-worth guests expect. Discreet, professional, and thorough—we maintain your property's five-star standards between guests."
  },
  {
    name: "Sunny Isles Beach",
    slug: "sunny-isles",
    type: "Gold Coast",
    description: "Detail-oriented cleaning for Florida's Riviera.",
    tagline: "Elite cleaning for Florida's Riviera—where architectural marvels meet oceanfront luxury.",
    detailedContent: `Metla House Cleaning provides elite residential cleaning services in Sunny Isles Beach, catering to the sophisticated needs of "Florida's Riviera." This stretch of Collins Avenue has become home to some of the world's most iconic residential towers—the Porsche Design Tower, Acqualina, Turnberry Ocean Club, and Jade Signature—each demanding a level of service as exceptional as the architecture itself.

Living in Sunny Isles means enjoying breathtaking ocean views from floor-to-ceiling windows, resort-style amenities, and some of Miami's finest beaches. It also means battling salt air that affects every surface, humidity that challenges even the best AC systems, and the expectations of an international community accustomed to five-star service.

Our team specializes in maintaining high-end condos along this prestigious corridor. We understand the building access protocols, the expectations of sophisticated residents, and the care required for luxury finishes. From weekly maintenance to seasonal deep cleans for snowbirds, we deliver consistent excellence.

Whether you're a full-time resident enjoying the Sunny Isles lifestyle, a seasonal visitor who needs your unit fresh upon arrival, or an investor maintaining a rental property, Metla is the partner you can trust. We protect your investment while ensuring your oceanfront home remains a pristine sanctuary.`,
    keywords: ["Condo cleaning Sunny Isles", "Maid service Sunny Isles", "Luxury cleaning Sunny Isles Beach"],
    popularServiceIds: ["deep", "vacation-rental", "standard"],
    housingTypes: [
      "Ultra-Luxury Oceanfront Towers",
      "Resort Residences",
      "Penthouse Units",
      "Seasonal Condos",
      "Investment Properties"
    ],
    landmarks: [
      "Porsche Design Tower",
      "Acqualina Resort & Residences",
      "Turnberry Ocean Club",
      "Jade Signature",
      "Newport Fishing Pier",
      "Sunny Isles Beach Park"
    ],
    neighborhoods: [
      "Collins Avenue Corridor",
      "Golden Shores",
      "Oceanfront"
    ],
    zipCodes: ["33160"],
    cleaningChallenges: [
      {
        title: "Iconic Tower Protocols",
        description: "Buildings like Porsche Design and Acqualina have specific access and service requirements. We're familiar with security protocols and scheduling expectations."
      },
      {
        title: "Salt & Humidity Control",
        description: "Direct oceanfront exposure means aggressive salt air and humidity. We protect luxury finishes and pay attention to moisture-prone areas."
      },
      {
        title: "Floor-to-Ceiling Glass",
        description: "These towers feature walls of glass requiring specialized streak-free cleaning at heights. We deliver crystal-clear views every time."
      },
      {
        title: "Seasonal Residence Care",
        description: "Many Sunny Isles residents split time between homes. We provide pre-arrival deep cleans and regular maintenance on vacant units."
      }
    ],
    propertyManagerContent: "Managing vacation rentals in Sunny Isles towers? We understand the expectations of international guests and deliver hotel-level cleanliness. Fast turnovers, reliable scheduling, and the premium service your high-end listings require."
  },
  {
    name: "Aventura",
    slug: "aventura",
    type: "Gold Coast",
    description: "Lifestyle management and housekeeping for ultra-luxury high-rises.",
    tagline: "Family-focused luxury cleaning—where world-class shopping meets resort-style living.",
    detailedContent: `Metla House Cleaning brings a new standard of excellence to Aventura, catering to the families and professionals who call this vibrant city home. Just moments from Aventura Mall—one of the largest shopping destinations in America—and the championship greens of Turnberry Isle, your home should be a reflection of the luxury that surrounds you.

Aventura offers a unique blend of high-rise sophistication and family-friendly living. Whether you're in one of the iconic towers like Williams Island or Porto Vita, a spacious condo overlooking the Intracoastal, or a family home near Founders Park, your property represents a significant investment that deserves professional care.

We started Metla because we were tired of "good enough" cleaning services, and we know Aventura residents demand more. Our team specializes in comprehensive residential cleaning using professional-grade equipment to tackle the challenges of South Florida living—from humidity affecting your lanai to dust settling on high ceilings.

Aventura families are busy. Between school drop-offs, mall trips, and days at Tidal Cove, the last thing you need is housekeeping stress. Let Metla handle the cleaning so you have more time to enjoy everything Aventura offers—from the Arts Center to championship golf to world-class dining.`,
    keywords: ["Luxury cleaning services Aventura", "High rise cleaning Aventura", "House cleaning Aventura", "Maid service Aventura"],
    popularServiceIds: ["standard", "deep", "move-in-out"],
    housingTypes: [
      "Luxury High-Rise Condos",
      "Intracoastal Waterfront Units",
      "Single-Family Homes",
      "Gated Community Residences",
      "Williams Island Properties"
    ],
    landmarks: [
      "Aventura Mall",
      "Turnberry Isle",
      "Williams Island",
      "Founders Park",
      "Tidal Cove Waterpark",
      "Aventura Arts & Cultural Center"
    ],
    neighborhoods: [
      "Williams Island",
      "Porto Vita",
      "Turnberry Village",
      "Aventura Lakes",
      "Biscayne Yacht & Country Club"
    ],
    zipCodes: ["33180"],
    cleaningChallenges: [
      {
        title: "High-Rise Living Dust",
        description: "Aventura's towers mean dust from construction and urban activity. Our thorough cleaning methods capture fine particles for cleaner living spaces."
      },
      {
        title: "Lanai & Balcony Care",
        description: "Waterfront views come with outdoor living spaces that need regular attention. We clean lanais, balconies, and outdoor furniture."
      },
      {
        title: "Family-Friendly Approach",
        description: "Many Aventura homes have children and pets. We use safe, non-toxic products and pay attention to play areas and pet zones."
      },
      {
        title: "Humidity Control",
        description: "Proximity to the Intracoastal means humidity challenges. We pay attention to moisture-prone areas in bathrooms, closets, and around AC vents."
      }
    ],
    propertyManagerContent: "Managing rentals in Aventura's towers? We provide reliable turnover cleaning and maintenance for vacation rentals and seasonal properties. Consistent quality that keeps your guests happy and your reviews positive."
  },
  {
    name: "Fort Lauderdale",
    slug: "fort-lauderdale",
    type: "Gold Coast",
    description: "Premium housekeeping for Las Olas Isles and Victoria Park estates.",
    tagline: "Cleaning the Venice of America—where waterfront living meets boating lifestyle.",
    detailedContent: `Navigate your way to a cleaner home with Metla House Cleaning, the premier choice for housekeeping in Fort Lauderdale. In the "Venice of America," where life revolves around the water—from the bustle of Las Olas Boulevard to the serenity of the Intracoastal Waterway—maintaining a pristine home is essential.

Fort Lauderdale's waterfront lifestyle is unlike anywhere else in South Florida. Hundreds of miles of canals, yacht-filled marinas, and homes with private docks create a unique living environment. But waterfront living comes with challenges: marine elements tracked inside, humidity from constant water exposure, and salt air that affects every surface.

Our founders transitioned from luxury rental management to cleaning because we demanded a higher standard, and we now bring that expertise to Fort Lauderdale. We understand how to protect your investment from the elements while delivering the deep clean your home deserves.

Whether you own a modern estate in Las Olas Isles, a historic bungalow in Victoria Park, a beachfront condo near Hugh Taylor Birch State Park, or a family home in Rio Vista, Metla delivers professional-grade cleaning that respects your property and your time. Enjoy the boating lifestyle without the worry of household chores.`,
    keywords: ["Cleaning services Fort Lauderdale", "Deep cleaning Fort Lauderdale", "House cleaning Fort Lauderdale", "Maid service Fort Lauderdale"],
    popularServiceIds: ["vacation-rental", "deep", "standard"],
    housingTypes: [
      "Waterfront Estates",
      "Canal-Front Homes",
      "Beachfront Condos",
      "Historic Bungalows",
      "Yacht Club Residences",
      "High-Rise Condos"
    ],
    landmarks: [
      "Las Olas Boulevard",
      "Fort Lauderdale Beach",
      "Hugh Taylor Birch State Park",
      "Riverwalk Fort Lauderdale",
      "NSU Art Museum",
      "Port Everglades"
    ],
    neighborhoods: [
      "Las Olas Isles",
      "Victoria Park",
      "Rio Vista",
      "Coral Ridge",
      "Harbor Beach",
      "Lauderdale Beach"
    ],
    zipCodes: ["33301", "33304", "33305", "33308", "33316"],
    cleaningChallenges: [
      {
        title: "Marine Element Control",
        description: "Living on the water means salt, sand, and marine debris tracked inside. We use specialized techniques to address waterfront home challenges."
      },
      {
        title: "Canal-Side Humidity",
        description: "Constant water proximity creates humidity that can cause buildup. We pay attention to vulnerable areas and help prevent moisture-related issues."
      },
      {
        title: "Boat Lifestyle Cleanup",
        description: "Coming home from the marina means tracking in unique debris. We understand the boating lifestyle and clean accordingly."
      },
      {
        title: "Historic Home Care",
        description: "Victoria Park and other neighborhoods have historic homes requiring careful attention to original materials and finishes."
      }
    ],
    propertyManagerContent: "Fort Lauderdale is a major vacation rental market. We provide reliable turnover cleaning for beach condos and waterfront properties. Quick turnarounds during boat show season, spring break, and peak tourist times."
  },
  {
    name: "Hollywood",
    slug: "hollywood",
    type: "Gold Coast",
    description: "Reliable residential cleaning for Hollywood homes and apartments.",
    tagline: "Star-quality service for Hollywood FL—from beachside cottages to the Broadwalk lifestyle.",
    detailedContent: `Metla House Cleaning delivers star-quality service to Hollywood, FL, ensuring your home shines as bright as the iconic Seminole Hard Rock Guitar Hotel. Located between Miami and Fort Lauderdale, Hollywood offers a unique blend of beach town charm and urban convenience that attracts families, retirees, and young professionals alike.

Whether you live in a historic beach cottage near the Hollywood Beach Broadwalk, a modern condo in one of the new oceanfront towers, or a family home near ArtsPark at Young Circle, our team provides the reliable, thorough cleaning you've been searching for.

Born from our experience managing luxury vacation rentals, we are experts at handling the sand, salt, and turnover needs unique to Hollywood's coastal properties. The Broadwalk lifestyle means sandy feet and beach gear—we know how to keep your home pristine despite the beach being steps away.

From deep cleaning services to recurring maintenance, Metla is dedicated to building personal relationships with our clients. We serve the diverse neighborhoods of Hollywood—from Downtown's artistic energy to the quiet streets of Emerald Hills to the oceanfront living of Hollywood Beach. Experience a home that feels like a vacation, every day.`,
    keywords: ["Cleaning services Hollywood FL", "House cleaning Hollywood FL", "Maid service Hollywood Florida"],
    popularServiceIds: ["vacation-rental", "deep", "move-in-out"],
    housingTypes: [
      "Beach Cottages",
      "Oceanfront Condos",
      "Single-Family Homes",
      "Historic Bungalows",
      "New Development Towers"
    ],
    landmarks: [
      "Hollywood Beach Broadwalk",
      "Seminole Hard Rock Hotel & Casino",
      "ArtsPark at Young Circle",
      "Hollywood Beach",
      "Anne Kolb Nature Center"
    ],
    neighborhoods: [
      "Hollywood Beach",
      "Downtown Hollywood",
      "Emerald Hills",
      "Hollywood Hills",
      "Hollywood Lakes",
      "Parkside"
    ],
    zipCodes: ["33019", "33020", "33021", "33024"],
    cleaningChallenges: [
      {
        title: "Broadwalk Sand & Salt",
        description: "Living near the beach means constant sand and salt. We specialize in removing beach debris and protecting surfaces from salt damage."
      },
      {
        title: "Vacation Rental Turnovers",
        description: "Hollywood is a popular tourist destination. We provide efficient turnover cleaning that keeps your rental guest-ready."
      },
      {
        title: "Historic Home Care",
        description: "Hollywood's older neighborhoods have homes with character. We know how to clean original materials with appropriate care."
      },
      {
        title: "Tropical Humidity",
        description: "Coastal humidity affects every Hollywood home. We pay attention to moisture-prone areas and maintain clean indoor environments."
      }
    ],
    propertyManagerContent: "Hollywood's Broadwalk area is prime vacation rental territory. We handle turnover cleaning for beach condos and cottages with the speed and quality your guests expect. Flexible scheduling during peak season and winter snowbird arrivals."
  },
  {
    name: "Hallandale Beach",
    slug: "hallandale-beach",
    type: "Gold Coast",
    description: "Condo and apartment cleaning specialists in Hallandale.",
    tagline: "Where excitement meets relaxation—professional cleaning for Hallandale's high-rise lifestyle.",
    detailedContent: `Place your bet on Metla House Cleaning for a winning home environment in Hallandale Beach. Located at the crossroads of Miami and Fort Lauderdale, near the excitement of Gulfstream Park Racing & Casino, Hallandale has emerged as a vibrant residential destination with stunning oceanfront towers and diverse neighborhoods.

Your home should be a calm retreat from the action. Whether you reside in one of the luxury high-rises along Collins Avenue, a condo in the Beach Club towers, or a family home in the western neighborhoods, you deserve cleaning service that matches your lifestyle.

We bring our background in luxury property management to Hallandale, offering a level of professionalism and detail that stands out. Our team understands the logistics of high-rise building access, the expectations of sophisticated residents, and the necessity of deep cleaning in this busy coastal environment.

From seasonal residents who need their units fresh upon arrival to full-time residents who want consistent weekly maintenance, Metla delivers reliable maid services that prioritize your satisfaction and security. Enjoy the energy of Hallandale—from Gulfstream Park to the beach—and come home to spotless perfection.`,
    keywords: ["Condo cleaning Hallandale", "House cleaning Hallandale Beach", "Maid service Hallandale"],
    popularServiceIds: ["standard", "deep", "move-in-out"],
    housingTypes: [
      "Oceanfront High-Rises",
      "The Beach Club Towers",
      "Luxury Condos",
      "Single-Family Homes",
      "Seasonal Residences"
    ],
    landmarks: [
      "Gulfstream Park Racing & Casino",
      "Hallandale Beach",
      "The Village at Gulfstream Park",
      "Golden Isles"
    ],
    neighborhoods: [
      "Hallandale Beach Oceanfront",
      "Golden Isles",
      "Foster Road Area",
      "Three Islands"
    ],
    zipCodes: ["33009"],
    cleaningChallenges: [
      {
        title: "High-Rise Access Logistics",
        description: "We're familiar with building protocols, freight elevator schedules, and security requirements in Hallandale's many towers."
      },
      {
        title: "Oceanfront Salt & Humidity",
        description: "Beachfront properties face aggressive salt air and humidity. We protect and maintain surfaces accordingly."
      },
      {
        title: "Seasonal Resident Services",
        description: "Many Hallandale residents split time between homes. We provide pre-arrival cleans and regular maintenance on vacant units."
      },
      {
        title: "Urban Dust Control",
        description: "Hallandale's ongoing development means dust in the air. Our thorough cleaning methods help maintain clean indoor spaces."
      }
    ],
    propertyManagerContent: "Managing vacation rentals in Hallandale Beach's towers? We provide reliable turnover cleaning and seasonal preparation services. Consistent quality for your guests and peace of mind for you."
  },
  {
    name: "Pompano Beach",
    slug: "pompano-beach",
    type: "Gold Coast",
    description: "Vacation rental and residential cleaning for Pompano Beach.",
    tagline: "Revitalizing homes in Pompano Beach—where classic beach town meets modern luxury.",
    detailedContent: `Metla House Cleaning revitalizes your home with the same energy transforming Pompano Beach. Once a quiet beach community, Pompano is now one of South Florida's most exciting destinations—with the iconic Fisher Family Pier, the historic Hillsboro Lighthouse, and new luxury developments changing the skyline.

Whether you live in one of the gleaming new oceanfront towers, a classic beach cottage near the pier, or a family home in the established neighborhoods west of A1A, your property deserves cleaning service that matches Pompano's evolution.

We transitioned from vacation rental managers to cleaning experts specifically to fill the gap for premium housekeeping in communities like Pompano Beach. Our team is equipped to handle the specific challenges of coastal living—from salt residue on windows overlooking the Atlantic to sand tracked in from the beach.

Whether you're enjoying a day fishing off the pier or dining at the new restaurants near the beach, come home to a sanctuary maintained by professionals who understand this market. We serve both the established Pompano Beach community and new residents drawn by the area's exciting transformation.`,
    keywords: ["Airbnb cleaning Pompano Beach", "House cleaning Pompano Beach", "Maid service Pompano Beach"],
    popularServiceIds: ["vacation-rental", "deep", "standard"],
    housingTypes: [
      "New Oceanfront Towers",
      "Classic Beach Cottages",
      "Single-Family Homes",
      "Vacation Rentals",
      "Condo Communities"
    ],
    landmarks: [
      "Fisher Family Pier",
      "Hillsboro Lighthouse",
      "Pompano Beach",
      "Isle Casino Racing Pompano Park",
      "Pompano Beach Cultural Center"
    ],
    neighborhoods: [
      "Pompano Beach Oceanfront",
      "Lighthouse Point",
      "Cypress Bend",
      "Palm Aire",
      "Pompano Isles"
    ],
    zipCodes: ["33060", "33062", "33064"],
    cleaningChallenges: [
      {
        title: "Coastal Salt & Sand",
        description: "Beach proximity means salt residue on windows and sand in every room. We specialize in coastal property maintenance."
      },
      {
        title: "New Construction Dust",
        description: "Pompano's redevelopment brings construction dust. Our thorough cleaning captures fine particles throughout your home."
      },
      {
        title: "Vacation Rental Standards",
        description: "Tourist destination means demanding guests. We deliver hotel-level cleanliness for vacation rentals."
      },
      {
        title: "Classic Home Care",
        description: "Older Pompano neighborhoods have vintage homes requiring appropriate cleaning products and techniques."
      }
    ],
    propertyManagerContent: "Pompano Beach is a growing vacation rental market. We provide reliable turnover cleaning with the attention to detail that earns great reviews. Flexible scheduling during peak season and quick response times."
  },
  {
    name: "Lauderdale-By-The-Sea",
    slug: "lauderdale-by-the-sea",
    type: "Gold Coast",
    description: "Vacation rental specialists for this seaside community.",
    tagline: "Village charm meets beach lifestyle—cleaning the Shore Diving Capital of South Florida.",
    detailedContent: `Keep your coastal cottage or condo pristine with Metla House Cleaning, the trusted name in Lauderdale-By-The-Sea. Unlike the high-rise corridors to the north and south, this charming one-square-mile village maintains a low-rise, old-Florida character that residents and visitors treasure.

In a town known as the "Shore Diving Capital of South Florida," life near Anglin's Fishing Pier involves plenty of sun, sand, and saltwater. The beach is steps from everywhere, and that means sand tracks into every home. Salt air affects every surface. And the steady stream of vacationers means property owners need reliable cleaning service.

Our team's roots in vacation rental management make us uniquely qualified to manage the cleaning needs of this charming community. We provide rigorous turnover cleanings for the many vacation rentals that line Commercial Boulevard and the beach blocks, as well as consistent maid service for full-time residents.

We cherish the small-town feel of Lauderdale-By-The-Sea and build personal relationships with our clients. From the quirky shops on El Mar Drive to the dive sites just offshore, this is a community unlike any other on the Gold Coast—and we treat every home with the care it deserves.`,
    keywords: ["Rental cleaning Lauderdale-By-The-Sea", "Vacation rental cleaning LBTS", "House cleaning Lauderdale-By-The-Sea"],
    popularServiceIds: ["vacation-rental", "standard", "deep"],
    housingTypes: [
      "Beach Cottages",
      "Low-Rise Condos",
      "Vacation Rentals",
      "Duplex Units",
      "Beachside Apartments"
    ],
    landmarks: [
      "Anglin's Fishing Pier",
      "Commercial Boulevard Beach",
      "El Mar Drive",
      "Town Center Plaza",
      "Lauderdale-By-The-Sea Beach"
    ],
    neighborhoods: [
      "Beachside",
      "Commercial Boulevard Area",
      "Terra Mar Island"
    ],
    zipCodes: ["33308"],
    cleaningChallenges: [
      {
        title: "Beach Steps Away",
        description: "When the beach is steps from home, sand is constant. We specialize in removing sand from every surface and crevice."
      },
      {
        title: "High Vacation Rental Turnover",
        description: "This tourist destination needs fast, thorough turnovers. We deliver hotel-quality cleaning between every guest."
      },
      {
        title: "Salt Air on Everything",
        description: "Beachfront living means aggressive salt exposure. We protect and clean windows, fixtures, and outdoor areas."
      },
      {
        title: "Small-Town Relationships",
        description: "LBTS is a tight-knit community. We build lasting relationships and treat every home like our own."
      }
    ],
    propertyManagerContent: "Lauderdale-By-The-Sea runs on vacation rentals. We understand this market and deliver the reliable, high-quality turnover cleaning your guests expect. Fast response, flexible scheduling, and consistent five-star results."
  },
  {
    name: "Dania Beach",
    slug: "dania-beach",
    type: "Gold Coast",
    description: "Efficient cleaning services for Dania Beach homes and rentals.",
    tagline: "Broward's first city, reimagined—where historic charm meets modern living.",
    detailedContent: `Metla House Cleaning brings modern efficiency to the historic charm of Dania Beach. As Broward County's first city, Dania Beach has evolved from a quiet town to an exciting destination—with the famous Antique Row, the new Dania Pointe shopping center, and beautiful access to Dr. Von D. Mizell-Eula Johnson State Park.

Whether you're browsing treasures on Federal Highway or enjoying the nature trails at John U. Lloyd Beach State Park, your home should be a spotless haven to return to. Dania Beach offers diverse housing—from charming classic bungalows to modern apartments in new developments—and each deserves professional cleaning care.

We founded Metla to provide a level of service that was missing in the market—one based on trust, reliability, and professional excellence. Our team understands the local landscape and tailors our cleaning approach to match your home's needs and your lifestyle.

Don't let housekeeping keep you from enjoying everything Dania Beach offers—from the beach to the antique shops to the new restaurants at Dania Pointe. Let Metla handle the cleaning while you enjoy Broward's most up-and-coming community.`,
    keywords: ["Cleaning service Dania Beach", "House cleaning Dania Beach", "Maid service Dania Beach"],
    popularServiceIds: ["standard", "deep", "move-in-out"],
    housingTypes: [
      "Classic Bungalows",
      "Modern Apartments",
      "New Development Units",
      "Single-Family Homes",
      "Beach Area Properties"
    ],
    landmarks: [
      "Antique Row (Federal Highway)",
      "Dania Pointe",
      "Dr. Von D. Mizell-Eula Johnson State Park",
      "John U. Lloyd Beach State Park",
      "Dania Beach Casino"
    ],
    neighborhoods: [
      "Old Town Dania",
      "Dania Beach Oceanfront",
      "Federal Highway Corridor"
    ],
    zipCodes: ["33004"],
    cleaningChallenges: [
      {
        title: "Historic Home Maintenance",
        description: "Dania's older bungalows have character and charm—and specialized cleaning needs. We understand vintage homes."
      },
      {
        title: "Coastal Humidity",
        description: "Near-beach location means humidity challenges. We pay attention to moisture-prone areas and maintain clean air quality."
      },
      {
        title: "Mixed Development",
        description: "From classic homes to new construction, we adapt our approach to each property type in this evolving community."
      },
      {
        title: "State Park Proximity",
        description: "Near the state parks means outdoor debris. We handle the pine needles, sand, and nature that tracks inside."
      }
    ],
    propertyManagerContent: "Managing properties in Dania Beach? We provide reliable cleaning services for vacation rentals and permanent residences. Consistent quality as this community continues to grow and attract new residents."
  },
  {
    name: "Coral Gables",
    slug: "coral-gables",
    type: "Suburban",
    description: "Eco-friendly deep cleaning for historic family estates.",
    tagline: "Maintaining the charm of 'The City Beautiful'—where Mediterranean elegance meets modern cleanliness.",
    detailedContent: `Maintain the elegance of "The City Beautiful" with Metla House Cleaning, the premier provider of luxury housekeeping in Coral Gables. This isn't a neighborhood of cookie-cutter condos—it's a community of architectural treasures, from Mediterranean Revival masterpieces along Coral Way to the grand estates surrounding The Biltmore Hotel.

Coral Gables homes present unique challenges that require specialized expertise. High ceilings with exposed beams collect dust in hard-to-reach places. Coral stone floors and terrazzo surfaces need proper care to maintain their luster without damage. Historic windows with detailed muntins require careful cleaning. And those beloved banyan trees? They fill gutters and track organic debris that can stain your elegant entryways.

We founded Metla because we were tired of cleaning services that didn't appreciate the difference between a tract home and an architectural gem. Our staff understands the craftsmanship in your 1920s estate or your renovated mid-century modern. We use eco-friendly products that are safe for the families with children and pets that fill Coral Gables neighborhoods—and gentle enough for historic finishes.

Whether you're in a waterfront estate in Gables Estates, a family home near the University of Miami, or a townhouse near Shops at Merrick Park, we deliver the white-glove service that The City Beautiful deserves. From recurring maintenance that keeps your home tour-ready to deep cleaning before your next dinner party at the country club, Metla is the trusted choice for discerning Coral Gables homeowners.`,
    keywords: ["Eco friendly cleaning Coral Gables", "House cleaning Coral Gables", "Maid service Coral Gables", "Estate cleaning Miami"],
    popularServiceIds: ["standard", "deep", "post-construction"],
    housingTypes: [
      "Mediterranean Revival Estates",
      "Historic Family Homes",
      "Gated Estate Properties",
      "Waterfront Mansions",
      "Mid-Century Modern Homes",
      "Luxury Townhouses"
    ],
    landmarks: [
      "Biltmore Hotel",
      "Miracle Mile",
      "Venetian Pool",
      "Shops at Merrick Park",
      "University of Miami",
      "Fairchild Tropical Botanic Garden",
      "Coral Gables Country Club",
      "Gables Estates"
    ],
    neighborhoods: [
      "Gables Estates",
      "Cocoplum",
      "Riviera",
      "Coral Gables Historic District",
      "South Gables",
      "North Gables",
      "Golden Triangle"
    ],
    zipCodes: ["33134", "33143", "33146", "33156"],
    cleaningChallenges: [
      {
        title: "High Ceilings & Exposed Beams",
        description: "Mediterranean Revival homes feature soaring ceilings and decorative beams that collect dust and cobwebs. We have the equipment and expertise to clean these safely."
      },
      {
        title: "Historic Floor Care",
        description: "Coral stone, terrazzo, and original tile require specialized products to clean without etching or damage. We know which techniques preserve your home's character."
      },
      {
        title: "Banyan Tree Debris",
        description: "Coral Gables' iconic banyan trees drop leaves, aerial roots, and sap. We address the organic debris that tracks into homes from landscaped yards."
      },
      {
        title: "Large Estate Logistics",
        description: "Multi-story estates with guest houses and pool areas require coordinated cleaning teams. We scale our service to match your property's needs."
      }
    ],
    propertyManagerContent: "Managing estate properties or helping families relocate? We handle move-in/move-out cleanings for some of Coral Gables' most prestigious addresses. Deep cleaning for real estate showings, post-renovation cleanup, and estate preparation—we understand the expectations in this market."
  },
  {
    name: "Weston",
    slug: "weston",
    type: "Suburban",
    description: "Family-focused residential cleaning for Weston's gated communities.",
    tagline: "Trusted cleaning for Florida's #1 city to live—where family comes first.",
    detailedContent: `Metla House Cleaning is the trusted partner for families in the master-planned community of Weston. Consistently ranked among Florida's safest and most desirable cities, Weston offers a lifestyle centered on family, excellent schools, and beautiful neighborhoods—and your home should reflect that quality.

Life in Weston revolves around family activities—soccer practices at Weston Regional Park, shopping at Weston Town Center, swim meets at community pools, and barbecues with neighbors. With so much happening, the last thing you need is housekeeping stress.

Our mission is to give you more time for what matters by taking the burden of cleaning off your shoulders. Born from a desire to improve upon "average" service, Metla brings five-star standards to residential cleaning. We ensure your home is a safe, sanitized environment for children and pets—using non-toxic products and paying special attention to play areas, bedrooms, and high-touch surfaces.

Weston's spacious homes—whether gated estates in Savanna or townhomes near the Everglades—require comprehensive cleaning. From deep vacuuming carpets to sanitizing kitchens after busy family meals, our reliable, background-checked teams provide the peace of mind Weston families deserve.`,
    keywords: ["House cleaning Weston", "Maid service Weston", "Cleaning services Weston FL"],
    popularServiceIds: ["standard", "deep", "move-in-out"],
    housingTypes: [
      "Gated Community Homes",
      "Single-Family Estates",
      "Townhouse Communities",
      "Lakefront Properties",
      "Master-Planned Development Homes"
    ],
    landmarks: [
      "Weston Town Center",
      "Weston Regional Park",
      "Bonaventure Town Center",
      "Emerald Estates Park",
      "Weston Commons"
    ],
    neighborhoods: [
      "Savanna",
      "Weston Hills",
      "Bonaventure",
      "The Ridges",
      "Tequesta Point",
      "Country Isles"
    ],
    zipCodes: ["33326", "33327", "33331", "33332"],
    cleaningChallenges: [
      {
        title: "Family-Friendly Products",
        description: "Weston families have children and pets. We use non-toxic, safe cleaning products throughout your home."
      },
      {
        title: "Large Home Coverage",
        description: "Weston's spacious homes need comprehensive cleaning. We scale our service to match your property's size."
      },
      {
        title: "Busy Family Schedules",
        description: "We work around school schedules, activities, and family life with flexible appointment times."
      },
      {
        title: "Everglades Proximity",
        description: "Near the Everglades means unique pests and humidity. We address these suburban-meets-nature challenges."
      }
    ],
    propertyManagerContent: "Managing rental properties in Weston? We provide reliable move-in/move-out cleaning and regular maintenance. Consistent quality for property managers serving this family-focused market."
  },
  {
    name: "Pembroke Pines",
    slug: "pembroke-pines",
    type: "Suburban",
    description: "Consistent and thorough housekeeping for Pembroke Pines families.",
    tagline: "Simplifying suburban life—reliable cleaning for Broward's largest city.",
    detailedContent: `Simplify your suburban life with Metla House Cleaning, the reliable choice for housekeeping in Pembroke Pines. As one of Broward County's largest and fastest-growing cities, Pembroke Pines offers the perfect blend of suburban convenience and family-friendly living—and your home deserves cleaning service that matches.

From the busy shopping corridors near Pembroke Lakes Mall to the quiet family neighborhoods surrounding C.B. Smith Park, from the new developments near The Shops at Pembroke Gardens to established communities near Chapel Trail Nature Preserve, Pembroke Pines is diverse—and we serve it all.

We started Metla to bridge the gap between expensive luxury services and unreliable independent cleaners. Active Pembroke Pines households face unique challenges: kids tracking in from sports practice, pets leaving fur on every surface, and daily clutter accumulating faster than you can manage. Our team uses professional equipment to tackle dust, pet dander, and the demands of busy family life.

Whether you need a one-time deep clean before hosting family, regular maintenance to keep up with the kids, or move-in/move-out service, Metla is dedicated to serving Pembroke Pines families with reliability and care.`,
    keywords: ["Cleaning services Pembroke Pines", "House cleaning Pembroke Pines", "Maid service Pembroke Pines FL"],
    popularServiceIds: ["standard", "deep", "move-in-out"],
    housingTypes: [
      "Single-Family Homes",
      "Townhouse Communities",
      "Gated Developments",
      "Lakefront Properties",
      "New Construction"
    ],
    landmarks: [
      "Pembroke Lakes Mall",
      "C.B. Smith Park",
      "The Shops at Pembroke Gardens",
      "Chapel Trail Nature Preserve",
      "Pembroke Pines City Center"
    ],
    neighborhoods: [
      "Pembroke Lakes",
      "Chapel Trail",
      "Silver Lakes",
      "Pembroke Falls",
      "Grand Palms"
    ],
    zipCodes: ["33024", "33025", "33026", "33027", "33028", "33029"],
    cleaningChallenges: [
      {
        title: "Active Family Households",
        description: "Kids, pets, and busy schedules mean constant cleaning needs. We tackle the reality of active Pembroke Pines homes."
      },
      {
        title: "Pet Hair & Dander",
        description: "Many Pembroke Pines families have pets. We use thorough vacuuming and specialized techniques for pet households."
      },
      {
        title: "Large Suburban Homes",
        description: "Pembroke Pines has spacious homes. We scale our service to match square footage and family needs."
      },
      {
        title: "Flexible Scheduling",
        description: "Work and school schedules vary. We offer flexible appointment times to fit your family's life."
      }
    ],
    propertyManagerContent: "Managing rentals in Pembroke Pines? We provide reliable move-in/move-out cleaning and regular maintenance for rental properties. Consistent quality that keeps your units tenant-ready."
  },
  {
    name: "Wilton Manors",
    slug: "wilton-manors",
    type: "Urban Core",
    description: "Local, trusted cleaners for the Island City.",
    tagline: "Celebrating the Island City—inclusive, professional cleaning for our unique community.",
    detailedContent: `Celebrate the vibrant spirit of the "Island City" with a home that shines, thanks to Metla House Cleaning in Wilton Manors. This isn't just any neighborhood—it's a tight-knit, welcoming community known for its diversity, character, and pride. Your home should be a pristine backdrop for the colorful, active lifestyle that makes Wilton Manors special.

Life on Wilton Drive is social and celebratory. Whether you're hosting friends, preparing for community events, or simply enjoying the charm of your waterfront bungalow, you deserve cleaning service that respects your space, your privacy, and your lifestyle.

Our background in luxury rental management taught us the importance of detail, reliability, and discretion—values we bring to every home in Wilton Manors. We handle the unique challenges of Middle River waterfront properties, including humidity control and the foot traffic of an active, social home.

Trust Metla to be your partner in maintaining a beautiful, welcoming environment. We provide non-judgmental, thorough cleaning services delivered by a diverse team that values inclusion as much as you do.`,
    keywords: ["House cleaning Wilton Manors", "Maid service Wilton Manors", "Cleaning services Wilton Manors FL"],
    popularServiceIds: ["vacation-rental", "standard", "deep"],
    housingTypes: [
      "Waterfront Bungalows",
      "Mid-Century Modern Homes",
      "Historic Cottages",
      "Townhouses",
      "Condos"
    ],
    landmarks: [
      "Wilton Drive",
      "Richardson Historic Park",
      "Middle River",
      "Island City Park Preserve",
      "Five Points"
    ],
    neighborhoods: [
      "Wilton Drive Corridor",
      "Manor Grove",
      "Central Wilton Manors",
      "Riverside"
    ],
    zipCodes: ["33305", "33311"],
    cleaningChallenges: [
      {
        title: "Waterfront Humidity",
        description: "Properties near the Middle River face humidity challenges. We pay attention to moisture-prone areas and maintain clean indoor environments."
      },
      {
        title: "Active Social Spaces",
        description: "Wilton Manors residents entertain frequently. We keep your home guest-ready with flexible scheduling."
      },
      {
        title: "Historic Home Expertise",
        description: "Many Wilton Manors homes have mid-century character. We know how to clean original materials with appropriate care."
      },
      {
        title: "Respectful, Inclusive Service",
        description: "We serve the diverse Wilton Manors community with respect, professionalism, and pride."
      }
    ],
    propertyManagerContent: "Managing vacation rentals in Wilton Manors? We provide reliable turnover cleaning with the attention to detail and discretion your guests expect. Professional service for this unique market."
  },
  {
    name: "Oakland Park",
    slug: "oakland-park",
    type: "Suburban",
    description: "Dependable house cleaning for Oakland Park residents.",
    tagline: "Fresh approach for a fresh neighborhood—cleaning for Oakland Park's revival.",
    detailedContent: `Experience a fresh approach to housekeeping with Metla House Cleaning in Oakland Park. This neighborhood is having a moment—the Culinary Arts District has become a dining destination, Funky Buddha Brewery draws crowds from across South Florida, and the renovated bungalows around Jaco Pastorius Park showcase the neighborhood's growing appeal.

As Oakland Park evolves into a hub for culture and cuisine, your home deserves cleaning service that keeps up with the times. We founded Metla to replace outdated, mediocre service with modern, reliable cleaning solutions.

Oakland Park offers great housing value—renovated mid-century homes with character, new townhouse developments, and established family neighborhoods. Whether you've just purchased a fixer-upper that needs post-construction cleanup or you're maintaining a home you've loved for years, our team tackles every challenge with professional equipment and attention to detail.

Whether you're a regular at Funky Buddha Brewery, hosting dinners featuring your latest farmer's market finds, or simply enjoying the quiet of your backyard, Metla ensures your home is always ready for what's next. We build personal relationships with our clients—because Oakland Park still feels like a neighborhood where people know each other.`,
    keywords: ["Maid service Oakland Park", "House cleaning Oakland Park", "Cleaning services Oakland Park FL"],
    popularServiceIds: ["post-construction", "standard", "deep"],
    housingTypes: [
      "Renovated Mid-Century Homes",
      "New Townhouse Developments",
      "Single-Family Homes",
      "Fixer-Uppers",
      "Established Family Homes"
    ],
    landmarks: [
      "Culinary Arts District",
      "Jaco Pastorius Park",
      "Funky Buddha Brewery",
      "Downtown Oakland Park",
      "Royal Palm Marketplace"
    ],
    neighborhoods: [
      "Downtown Oakland Park",
      "Central Oakland Park",
      "Lake Forest"
    ],
    zipCodes: ["33334"],
    cleaningChallenges: [
      {
        title: "Post-Renovation Cleanup",
        description: "Many Oakland Park homes are being renovated. We specialize in post-construction cleaning to make your home move-in ready."
      },
      {
        title: "Mid-Century Home Care",
        description: "Original terrazzo, vintage tile, and period details need appropriate cleaning products and techniques."
      },
      {
        title: "Growing Neighborhood Needs",
        description: "Oakland Park is attracting new residents. We help newcomers settle into clean, fresh spaces."
      },
      {
        title: "Active Lifestyle Support",
        description: "Oakland Park residents are busy and social. We provide flexible scheduling to fit your active life."
      }
    ],
    propertyManagerContent: "Managing rentals in Oakland Park? We provide reliable cleaning for this growing rental market. Move-in/move-out service and regular maintenance that helps your properties stand out."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Isabella R.",
    location: "Brickell Key",
    rating: 5,
    text: "I was hesitant to let strangers into my apartment, but Metla's vetting process put me at ease. The team was professional, uniformed, and the place looked better than when I moved in."
  },
  {
    name: "Marcus T.",
    location: "Fort Lauderdale (Airbnb Host)",
    rating: 5,
    text: "My previous cleaner missed a checkout and cost me a Superhost cycle. Metla hasn't missed a beat in 6 months. The photo verification is a game changer."
  },
  {
    name: "Sarah J.",
    location: "Coral Gables",
    rating: 5,
    text: "Finally, a company that understands 'clean'. They even did the baseboards and inside the oven without me asking. Worth every penny for the peace of mind."
  }
];