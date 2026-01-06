import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PHONE_NUMBER, COMPANY_NAME } from '../constants';
import { ShieldAlert, CreditCard, Clock, Ban, AlertTriangle, CheckCircle } from 'lucide-react';
import { updatePageSEO, resetSEO } from '../utils/seo';

const PoliciesPage: React.FC = () => {
  const location = useLocation();

  // Set dynamic page title and meta description for SEO
  useEffect(() => {
    updatePageSEO({
      title: `Company Policies | ${COMPANY_NAME}`,
      description: 'Transparent policies for Metla House Cleaning including pricing, cancellation, payment terms, and our satisfaction guarantee.',
      path: location.pathname,
    });
    return () => {
      resetSEO();
    };
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Company Policies</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Transparent guidelines to ensure the highest quality service for your home.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          <p className="lead text-xl text-slate-600 mb-12">
            By booking cleaning services with {COMPANY_NAME}, you agree to the following policies:
          </p>

          <div className="space-y-12">

            {/* Pricing & Fees Section */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">Pricing & Fees</h2>

              <div className="mb-6">
                <h3 className="font-bold text-lg text-teal-700 mb-2">Flat-Rate Fee Policy</h3>
                <p>
                  We offer a simple flat rate pricing structure, based on the size and condition of the home described by you. The price is the price regardless of the amount of time it takes to clean or how many cleaning technicians attend to the job.
                </p>
                <p className="mt-2">
                  By booking with us, you authorize {COMPANY_NAME} to charge the card on file for any unpaid balances following service, unless payment is made by another method at the time of service.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg text-teal-700 mb-2">Changes from Original Quote</h3>
                <p>
                  We offer an upfront price estimate before we even enter your home, based on what you tell us about the size of your home and the cleaning service selected. We reserve the right to change the quoted pricing, including any applicable discounts, if the actual size or circumstances of your home are not as described, or if the booking options selected are inappropriate.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2">Pet Fee</h4>
                  <p className="text-sm">
                    If you have pets in your home, we charge an additional $40 to factor in time and energy to clean the pet fur. This fee does not include the cleanup of the pet’s bodily fluids (urine, vomit, blood or feces).
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2">Add-on Service Policy</h4>
                  <p className="text-sm">
                    We charge a fee for specific add-on items such as interior fridge cleaning, interior oven clean, and interior window cleaning.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-red-50 p-4 rounded-lg border border-red-100 flex gap-4">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-red-800 mb-1">Bio-Hazardous Clean Fee</h4>
                  <p className="text-sm text-red-700">
                    If there are animal or human bodily fluids to be cleaned, we will add an additional fee based on the amount needed to be cleaned. We may request pictures of the mess to determine.
                  </p>
                </div>
              </div>
            </section>

            {/* Cancellations & Scheduling */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">Cancellations & Scheduling</h2>

              <div className="mb-6">
                <h3 className="font-bold text-lg text-teal-700 mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5" /> 24-48 Hour Reschedule & Cancellation
                </h3>
                <p>
                  All of our cleaning technicians are scheduled for their jobs in advance. If a job is canceled with short notice, the cleaner loses income. By booking with us, you acknowledge:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>If the service is rescheduled or canceled <strong>less than 48 hours</strong> before the scheduled clean, you will owe a fee of <strong>$50</strong>.</li>
                  <li>If the service is rescheduled or canceled <strong>less than 24 hours</strong> before the scheduled clean, you will owe a fee of <strong>50% of the quoted amount</strong>.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg text-teal-700 mb-2 flex items-center gap-2">
                  <Ban className="w-5 h-5" /> "No Show" Policy
                </h3>
                <p>
                  If our cleaning technicians show up for the clean and are unable to get into your home because no one is there to let them in, or you forgot to leave the door unlocked or provide a code, you will owe <strong>100% of the estimated cost</strong> to compensate for the cleaner’s lost time.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">Utilities Requirement</h3>
                <p>
                  If our technicians show up and there is no power for adequate lighting/tools, or no hot water available, the job will be terminated and you will owe <strong>100% of the estimated cost</strong>.
                </p>
              </div>
            </section>

            {/* Payment & Billing */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">Payment & Billing</h2>

              <div className="flex gap-4 mb-6">
                <CreditCard className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-teal-700 mb-2">Billing Policy</h3>
                  <p className="mb-4">
                    We require a credit card on file <strong>72 hours prior</strong> to your scheduled clean. If we do not have a card on file, your clean will be canceled 72 hours prior.
                  </p>
                  <p>
                    Payments are due the day of your clean. Your card will be charged shortly after your cleaning job is finished.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg text-teal-700 mb-2">Discounts & Rate Increases</h3>
                <p className="mb-2">
                  We offer discounts of 10-30% for recurring cleanings. If you reschedule so that it falls outside your selected frequency, we reserve the right to eliminate the discount for that cleaning.
                </p>
                <p>
                  We reserve the right to raise rates as needed but will always give advance notice.
                </p>
              </div>
            </section>

            {/* Guarantee & Satisfaction */}
            <section id="satisfaction-guarantee">
              <h2 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">Satisfaction Guarantee</h2>

              <div className="mb-6 bg-teal-50 border border-teal-100 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-teal-800 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> 24 Hour Satisfaction Guarantee
                </h3>
                <p className="text-teal-900 mb-4">
                  We want you to be completely satisfied. If you’re not happy with the cleaning, please contact us <strong>within 24 hours</strong> and we’ll send someone to fix the missed areas for free.
                </p>
                <p className="text-sm text-teal-800 font-bold">
                  Note: We do not offer discounts or refunds for discrepancies.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">Post-Cleaning Walkthrough</h3>
                <p className="mb-2">
                  We cannot guarantee our work if you are not present to do a walkthrough at the conclusion of the cleaning. Failure to do a walkthrough while the technician is onsite voids our 24-hour guarantee.
                </p>
                <p className="text-sm italic text-slate-500">
                  Exceptions can be made if requested before the cleaner begins (within 24 hours). If you leave during the clean, we can call with 20-minutes notice. Technicians will wait a maximum of 5 minutes.
                </p>
              </div>
            </section>

            {/* Safety & Liability */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">Safety & Liability</h2>

              <div className="mb-6">
                <h3 className="font-bold text-lg text-teal-700 mb-2">Accident Damage/Breakage</h3>
                <p className="mb-4">
                  We strive to protect your home, but accidents happen. Breakage must be reported within <strong>3 days</strong>. Please take pictures and save the item.
                </p>
                <div className="bg-slate-50 p-4 border-l-4 border-teal-500 mb-4">
                  <p className="font-bold text-slate-900">
                    Immediately report damage to: {PHONE_NUMBER}
                  </p>
                </div>
                <p className="mb-2">
                  If negligence is verified, we reimburse up to <strong>$100.00 per item</strong>. We cannot accept responsibility for unstable, delicate, or improperly installed items (e.g., wobbly pictures, top-heavy items).
                </p>
                <p className="font-bold text-sm">
                  Please move fragile or expensive items to a location we do not clean.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg text-teal-700 mb-2">Safety Policy</h3>
                  <p className="text-sm">
                    If our technicians feel unsafe for any reason, we have the right to terminate the job and charge for time worked. We maintain the right to refuse any bookings during the process.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-teal-700 mb-2">Privacy & Photos</h3>
                  <p className="text-sm">
                    Our technicians take before and after pictures to protect the integrity of the job. These are not shared externally. We respect your privacy regarding all personal information.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliciesPage;